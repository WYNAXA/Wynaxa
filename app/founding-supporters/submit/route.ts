import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { Resend } from "resend";

export const runtime = "nodejs";

const VALID_INTERESTED = [
  "Yes, count me in",
  "Yes, but I'd like to talk first",
  "Not this time",
] as const;

const VALID_AMOUNT_BANDS = [
  "€100",
  "€250",
  "€500",
  "€1,000",
  "€2,500",
  "€5,000",
  "€10,000",
] as const;

function isValidAmount(value: string): boolean {
  if ((VALID_AMOUNT_BANDS as readonly string[]).includes(value)) return true;
  const num = Number(value);
  return Number.isFinite(num) && num >= 100;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const interested = typeof body.interested === "string" ? body.interested : "";
  const amount = typeof body.amount === "string" ? body.amount.trim() : "";
  const questions =
    typeof body.questions === "string" ? body.questions.trim() : "";

  // ── Validate ──────────────────────────────────────────────
  const errors: Record<string, string> = {};

  if (!name) errors.name = "Name is required.";

  if (!email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (
    !interested ||
    !(VALID_INTERESTED as readonly string[]).includes(interested)
  ) {
    errors.interested = "Please select a valid option.";
  }

  if (amount) {
    if (amount === "Other") {
      errors.amount = "Amount must be a specific value, not 'Other'.";
    } else if (!isValidAmount(amount)) {
      errors.amount = "Amount must be a known band or a number of at least 100.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return Response.json({ error: "Validation failed.", errors }, { status: 400 });
  }

  // ── Insert ────────────────────────────────────────────────
  const { error: dbError } = await getSupabaseAdmin()
    .from("investor_interest")
    .insert({
      name,
      email,
      phone: phone || null,
      interested,
      amount: amount || null,
      questions: questions || null,
    });

  if (dbError) {
    console.error(
      `[founding-supporters] Supabase insert failed for ${name} <${email}>:`,
      dbError
    );
    return Response.json(
      { error: "Something went wrong. Please try again or email investors@wynaxa.com directly." },
      { status: 500 }
    );
  }

  // ── Email notification (best-effort) ──────────────────────
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const timestamp = new Date().toISOString();

    await resend.emails.send({
      from: "Wynaxa <notifications@padelplayersapp.com>",
      to: process.env.NOTIFY_EMAIL_TO!,
      replyTo: email,
      subject: `Founding Supporter interest — ${name}${amount ? ` — €${amount}` : ""}`,
      html: `
<div style="font-family: system-ui, sans-serif; max-width: 600px;">
  <p style="font-size: 20px; font-weight: 600; margin: 0 0 4px;">
    ${escapeHtml(interested)}
  </p>
  ${amount ? `<p style="font-size: 20px; font-weight: 600; color: #0E8C7F; margin: 0 0 24px;">€${escapeHtml(amount)}</p>` : '<p style="margin: 0 0 24px; color: #999;">No amount specified</p>'}
  <table style="border-collapse: collapse; width: 100%;">
    <tr><td style="padding: 8px 12px; border-top: 1px solid #eee; color: #666;">Name</td><td style="padding: 8px 12px; border-top: 1px solid #eee;">${escapeHtml(name)}</td></tr>
    <tr><td style="padding: 8px 12px; border-top: 1px solid #eee; color: #666;">Email</td><td style="padding: 8px 12px; border-top: 1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
    <tr><td style="padding: 8px 12px; border-top: 1px solid #eee; color: #666;">Phone</td><td style="padding: 8px 12px; border-top: 1px solid #eee;">${phone ? escapeHtml(phone) : "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-top: 1px solid #eee; color: #666;">Interested</td><td style="padding: 8px 12px; border-top: 1px solid #eee;">${escapeHtml(interested)}</td></tr>
    <tr><td style="padding: 8px 12px; border-top: 1px solid #eee; color: #666;">Amount</td><td style="padding: 8px 12px; border-top: 1px solid #eee;">${amount ? "€" + escapeHtml(amount) : "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-top: 1px solid #eee; color: #666;">Questions</td><td style="padding: 8px 12px; border-top: 1px solid #eee;">${questions ? escapeHtml(questions) : "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; color: #666;">Submitted</td><td style="padding: 8px 12px; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">${timestamp}</td></tr>
  </table>
</div>
      `.trim(),
    });
  } catch (emailError) {
    console.error(
      `[founding-supporters] Email notification failed for ${name} <${email}>:`,
      emailError
    );
  }

  return Response.json({ ok: true });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
