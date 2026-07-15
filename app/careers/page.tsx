import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Wynaxa",
  description:
    "Open roles at Wynaxa and Wynaxa Sports Tech. Help build a studio with a live venture in market.",
};

const CAREERS_EMAIL = "careers@wynaxa.com";

/* Salaries are intentionally "Competitive" for now — real bands added later.
 * Each role's applyHref pre-fills the subject so applications are sorted by role. */
const roles = [
  {
    title: "Head of Marketing",
    entity: "Wynaxa",
    accent: "#16A6A6",
    location: "Dublin",
    type: "Full-time",
    salary: "Competitive (EUR)",
    summary:
      "Own Wynaxa's brand and growth across the studio and its ventures — positioning, campaigns, and the story that takes the Padel Players App and Wynaxa Hub to market.",
    points: [
      "Build the marketing function from the ground up",
      "Own brand, positioning and go-to-market across the studio",
      "Take live products — the Padel Players App and Wynaxa Hub — to their audiences",
    ],
  },
  {
    title: "Head of Product",
    entity: "Wynaxa",
    accent: "#16A6A6",
    location: "Remote",
    type: "Full-time",
    salary: "Competitive",
    summary:
      "Own product strategy and roadmap across Wynaxa's ventures, working closely with the CTO and engineering to turn a live platform into a repeatable product engine.",
    points: [
      "Own product strategy and roadmap across the studio's ventures",
      "Work hand-in-hand with the CTO and engineering team",
      "Turn a live, growing platform into a repeatable product engine",
    ],
  },
  {
    title: "Head of Partnerships",
    entity: "Wynaxa Sports Tech",
    accent: "#F97316",
    location: "Remote — Europe",
    type: "Full-time",
    salary: "Competitive",
    summary:
      "Grow Wynaxa Hub by bringing on new venue clients — globally, starting in Europe. Own the pipeline from first contact to signed venue.",
    points: [
      "Bring on new venue clients for Wynaxa Hub, Europe first",
      "Own the pipeline from first contact to signed venue",
      "Build the partnerships engine behind Sports Tech's expansion",
    ],
  },
  {
    title: "Community Success Manager",
    entity: "Wynaxa Sports Tech",
    accent: "#F97316",
    location: "Remote — Europe",
    type: "Full-time",
    salary: "Competitive",
    summary:
      "Own the venues and clients that Partnerships brings on — onboarding, retention and growth. Make every signed venue a successful, long-term one.",
    points: [
      "Onboard, retain and grow the venues Partnerships signs",
      "Be the day-to-day relationship for every client",
      "Reports to the Head of Partnerships",
    ],
  },
];

function applyHref(title: string) {
  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
    `Application — ${title}`,
  )}&body=${encodeURIComponent(
    ["Name:", "Role: " + title, "LinkedIn / CV:", "", "A little about you:", ""].join(
      "\n",
    ),
  )}`;
}

export default function CareersPage() {
  return (
    <>
      {/* --------------------------------------------------------------- HERO */}
      <section className="bg-[#0F1B33]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Build a studio with something already live
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Wynaxa isn&apos;t a pitch deck. One venture is in market — a live app
            on both stores and a booking platform running at its first venue.
            These are the people we need to take it further.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------------- ROLES */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0F1B33]">Open roles</h2>

          <div className="mt-10 space-y-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-lg border border-gray-200 bg-white p-8"
                style={{ borderLeftWidth: "3px", borderLeftColor: role.accent }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F1B33]">
                      {role.title}
                    </h3>
                    <p
                      className="mt-1 text-sm font-medium"
                      style={{ color: role.accent }}
                    >
                      {role.entity}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[role.location, role.type, role.salary].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {role.summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {role.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: role.accent }}
                      />
                      <span className="text-sm text-gray-600">{pt}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={applyHref(role.title)}
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-[#0F1B33] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1a2942]"
                >
                  Apply for this role
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- SPECULATIVE */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold text-[#0F1B33]">
            Don&apos;t see your role?
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
            We&apos;re a small team and we grow when we meet the right person. If
            you believe in what we&apos;re building, tell us what you&apos;d own.
          </p>
          <a
            href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
              "Speculative application",
            )}`}
            className="mt-6 inline-flex items-center text-sm font-medium text-[#16A6A6] hover:underline"
          >
            Get in touch &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
