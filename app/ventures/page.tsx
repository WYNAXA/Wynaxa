import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventures — Wynaxa",
  description:
    "How Wynaxa builds, scales and partners to create technology businesses — and the shared platform that makes each one faster.",
};

/* Build -> Scale -> Partner is a real sequence, so it is numbered.
 * Each stage carries a concrete proof point, not abstract studio-speak. */
const stages = [
  {
    n: "01",
    title: "Build",
    accent: "#0E8C7F",
    lead: "We build ventures from the ground up on shared infrastructure.",
    body: "New companies start with payments, identity, a mobile release pipeline and an engineering team already in place — not a blank page. That is how a small team shipped a live iOS and Android app, an ELO league engine and a venue booking platform inside a year.",
  },
  {
    n: "02",
    title: "Scale",
    accent: "#F97316",
    lead: "We take a venture from first traction to standing on its own.",
    body: "Once a venture is proven in market, it gets its own board, its own balance sheet and the capital to grow independently — while still drawing on the studio's shared platform. Wynaxa Sports Tech is the first: live on both app stores, with a paying venue and a booking platform in market.",
  },
  {
    n: "03",
    title: "Partner",
    accent: "#A855F7",
    lead: "We co-found with operators who bring the domain.",
    body: "Through Wynaxa Foundry we partner with founders who know a market inside out. They bring the domain expertise and the relationships; we bring the platform, the engineering and the operational muscle to move fast.",
  },
];

const CAPABILITIES = [
  {
    title: "Payments",
    body: "Stripe Connect, marketplace splits and payout logic — built once, reused.",
  },
  {
    title: "Identity & data",
    body: "Auth, roles and row-level security every venture inherits on day one.",
  },
  {
    title: "Mobile release",
    body: "A working iOS and Android pipeline. Sports Tech shipped to both stores on it.",
  },
  {
    title: "Engineering",
    body: "A shared team, so a venture starts with a product org instead of hiring one.",
  },
];

export default function VenturesPage() {
  return (
    <>
      {/* --------------------------------------------------------------- HERO */}
      <section className="bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#0E8C7F]">
            The Studio Model
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Build one venture properly. Then reuse everything.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Wynaxa builds, scales and partners on technology companies. The
            studio owns the hard, shared parts once — so each venture moves
            faster than it could alone.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- STAGES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="space-y-6">
            {stages.map((s) => (
              <div
                key={s.n}
                className="grid gap-6 rounded-lg border border-gray-200 bg-white p-8 sm:grid-cols-[auto_1fr] sm:gap-10"
                style={{ borderLeftWidth: "3px", borderLeftColor: s.accent }}
              >
                <div
                  className="text-4xl font-semibold tabular-nums"
                  style={{ color: s.accent }}
                >
                  {s.n}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-[#0B0F12]">
                    {s.title}
                  </h2>
                  <p className="mt-2 font-medium text-[#0B0F12]">{s.lead}</p>
                  <p className="mt-3 leading-relaxed text-gray-600">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- CAPABILITIES */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0E8C7F]">
              The shared platform
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
              What every venture inherits on day one
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              A studio is only worth having if it makes each venture more likely
              to succeed. This is the layer we own once, so no venture has to
              build it again.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <h3 className="font-semibold text-[#0B0F12]">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-lg bg-[#0B0F12] p-10 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                See the model in market
              </h2>
              <p className="mt-2 max-w-xl text-gray-400">
                Wynaxa Sports Tech is live — the studio model, proven.
              </p>
            </div>
            <div className="flex flex-shrink-0 gap-3">
              <Link
                href="/sports-tech"
                className="inline-flex items-center justify-center rounded-md bg-[#0E8C7F] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0a7269]"
              >
                See the venture
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-md border border-gray-700 px-6 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
