import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wynaxa — Investor Access",
  description:
    "Wynaxa is a venture studio. Our lead venture, Wynaxa Sports Tech, is live in market with the Padel Players App.",
};

/* ---------------------------------------------------------------------------
 * NOTE — There is deliberately no pitch-deck download on this page.
 *
 * The deck is sent manually, on request, after we know who is asking. This is
 * intentional: it captures who is looking, keeps financials out of a public
 * /public folder, and avoids publishing an open invitation to invest.
 *
 * Do not re-add a public PDF to /public. Do not re-add an auto-download.
 * ------------------------------------------------------------------------- */

const INVESTOR_EMAIL = "investors@wynaxa.com";

const DECK_REQUEST_MAILTO = `mailto:${INVESTOR_EMAIL}?subject=${encodeURIComponent(
  "Investor materials request",
)}&body=${encodeURIComponent(
  [
    "Please send the Wynaxa investor materials.",
    "",
    "Name:",
    "Organisation:",
    "Role:",
    "Areas of interest:",
    "",
  ].join("\n"),
)}`;

/* Lead venture — the one with a product, users and revenue in sight. */
const SPORTS_TECH_TRACTION = [
  { value: "77", label: "Registered players" },
  { value: "169", label: "On the waitlist" },
  { value: "7", label: "Courts under contract" },
  { value: "2", label: "App stores, live" },
];

/* Everything else. Stated as what it is, not dressed up. */
const PIPELINE = [
  {
    name: "Wynaxa Connect",
    stage: "In build",
    description: "Creator marketplace (Beat Frame). Pre-launch.",
    href: "/connect",
    hex: "#14B8A6",
  },
  {
    name: "Wynaxa Pay",
    stage: "Concept",
    description: "Digital payments and fintech infrastructure.",
    href: "/pay",
    hex: "#6366F1",
  },
  {
    name: "Wynaxa One",
    stage: "Concept",
    description: "Commerce and business operations.",
    href: "/one",
    hex: "#0EA5E9",
  },
  {
    name: "Wynaxa Eco",
    stage: "Concept",
    description: "Environmental and sustainability solutions.",
    href: "/eco",
    hex: "#22C55E",
  },
  {
    name: "Wynaxa Foundry",
    stage: "Operating",
    description: "Venture creation lab. Partners with founders on new companies.",
    href: "/foundry",
    hex: "#A855F7",
  },
];

const MODEL = [
  {
    title: "Build",
    desc: "We create ventures in-house, using shared engineering, payments and infrastructure so each one launches faster and cheaper than it could alone.",
  },
  {
    title: "Scale",
    desc: "Proven ventures are capitalised and staffed to grow independently, with their own board and their own balance sheet.",
  },
  {
    title: "Partner",
    desc: "Through Wynaxa Foundry we co-found with operators who bring the domain, while we bring the platform.",
  },
];

export default function InvestmentPage() {
  return (
    <>
      {/* --------------------------------------------------------------- HERO */}
      <section className="bg-[#0F1B33]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#16A6A6]">
            Investment
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            One venture live. The studio behind it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Wynaxa builds technology companies. Our lead venture, Wynaxa Sports
            Tech, is live on both app stores with a signed venue and a booking
            platform deploying this month. Everything else on this page is
            secondary to that.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------- LEAD VENTURE */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#F97316]">
            Lead Venture
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#0F1B33]">
            Wynaxa Sports Tech
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            An Irish-incorporated company (CRO 802571), wholly owned by WYNAXA
            Limited, with its own board and capital structure. It holds the Padel
            Players App and the Wynaxa venue booking platform.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-gray-200 sm:grid-cols-4">
            {SPORTS_TECH_TRACTION.map((stat) => (
              <div key={stat.label} className="bg-white p-6">
                <p className="text-3xl font-semibold tracking-tight text-[#0F1B33]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Launched mid-June 2026. No paid acquisition to date. Figures as at
            14 July 2026.
          </p>

          <div className="mt-8 border-l-2 border-[#F97316] pl-6">
            <p className="leading-relaxed text-gray-600">
              The waitlist is the signal. One QR code, in one venue, for two
              weeks — no advertising, and we did not tell anyone the app had
              launched. 169 players scanned it and left their details. That
              mechanic repeats at every venue we sign.
            </p>
          </div>

          <Link
            href="/sports-tech"
            className="mt-8 inline-flex items-center text-sm font-medium text-[#F97316] hover:underline"
          >
            The full Sports Tech case &rarr;
          </Link>
        </div>
      </section>

      {/* -------------------------------------------------------------- MODEL */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0F1B33]">
            Why a studio
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            A venture studio is only worth anything to an investor if it makes
            each venture more likely to succeed. Ours does one specific thing:
            it lets a company like Sports Tech ship payments, identity,
            infrastructure and mobile releases without building any of it from
            scratch. The studio is the cost base. The venture is the business.
          </p>

          <div className="mt-8 space-y-4">
            {MODEL.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <h3 className="font-semibold text-[#0F1B33]">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- PIPELINE */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0F1B33]">
            The rest of the studio
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            We are transparent about stage. One venture is live. One is in
            build. The remainder are concepts held for when the platform and the
            team can support them properly.
          </p>

          <div className="mt-8 space-y-3">
            {PIPELINE.map((v) => (
              <Link
                key={v.name}
                href={v.href}
                className="venture-card group flex items-start justify-between gap-6 rounded-lg border border-gray-200 bg-white p-5 transition-all"
                style={
                  {
                    borderLeftWidth: "3px",
                    borderLeftColor: v.hex,
                    "--card-accent": v.hex,
                  } as React.CSSProperties
                }
              >
                <div>
                  <h3 className="text-sm font-semibold text-[#0F1B33] transition-colors group-hover:text-[#16A6A6]">
                    {v.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">{v.description}</p>
                </div>
                <span className="flex-shrink-0 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                  {v.stage}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- FUNDING */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0F1B33]">
            Funding to date
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Wynaxa has been founder-funded. Our first external investor,{" "}
            <span className="font-medium text-[#0F1B33]">Mike Todd</span>,
            invested &euro;50,000 into WYNAXA Limited and now sits on the board.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Investment into Wynaxa Sports Tech Ltd is held separately from the
            parent. Capital raised for the venture stays with the venture.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------- CONTACT */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0F1B33]">
            Investor enquiries
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Investor materials are shared on request with qualified investors.
            Tell us who you are and what you&apos;re interested in, and
            we&apos;ll come back to you directly.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={DECK_REQUEST_MAILTO}
              className="inline-flex items-center justify-center rounded-md bg-[#16A6A6] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#128585]"
            >
              Request investor materials
            </a>
            <a
              href={`mailto:${INVESTOR_EMAIL}`}
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-[#0F1B33] transition-colors hover:border-gray-500"
            >
              {INVESTOR_EMAIL}
            </a>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-gray-400">
            Nothing on this page is an offer or invitation to invest, or a
            recommendation in respect of any security. Any investment would be
            made solely on the basis of formal documentation issued to eligible
            investors.
          </p>
        </div>
      </section>
    </>
  );
}
