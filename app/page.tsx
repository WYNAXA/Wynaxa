import Link from "next/link";
import AmbientVideo from "./components/AmbientVideo";

/* ---------------------------------------------------------------------------
 * TRACTION — Wynaxa Sports Tech figures. Mirrors app/sports-tech/page.tsx.
 * These are evidence that the studio ships. They are not the studio's identity.
 * Update on submission day. Do not hard-code numbers elsewhere in this file.
 * ------------------------------------------------------------------------- */
const TRACTION = [
  { value: "77", label: "Registered players" },
  { value: "169", label: "On the waitlist" },
  { value: "7", label: "Courts under contract" },
  { value: "2", label: "App stores, live" },
];

/* ---------------------------------------------------------------------------
 * VENTURES — `stage` is the honest state of each. Do not promote a venture to
 * "Live" until real users are doing the real thing in production.
 * ------------------------------------------------------------------------- */
const VENTURES = [
  {
    name: "Wynaxa Sports Tech",
    description: "Participation infrastructure for racket sports",
    product: "Padel Players App",
    stage: "Live",
    href: "/sports-tech",
    hex: "#F97316",
  },
  {
    name: "Wynaxa Connect",
    description: "Creator economy and media technology",
    product: "Beat Frame",
    stage: "In build",
    href: "/connect",
    hex: "#14B8A6",
  },
  {
    name: "Wynaxa Foundry",
    description: "Venture creation lab — we co-found with operators",
    product: undefined as string | undefined,
    stage: "Operating",
    href: "/foundry",
    hex: "#A855F7",
  },
  {
    name: "Wynaxa Pay",
    description: "Digital payments and financial technology",
    product: undefined as string | undefined,
    stage: "Concept",
    href: "/pay",
    hex: "#6366F1",
  },
  {
    name: "Wynaxa One",
    description: "Commerce and business operations software",
    product: undefined as string | undefined,
    stage: "Concept",
    href: "/one",
    hex: "#0EA5E9",
  },
  {
    name: "Wynaxa Eco",
    description: "Environmental and sustainability solutions",
    product: undefined as string | undefined,
    stage: "Concept",
    href: "/eco",
    hex: "#22C55E",
  },
];

const STAGE_STYLES: Record<string, string> = {
  Live: "bg-[#F97316] text-white",
  "In build": "bg-[#0B0F12] text-white",
  Operating: "bg-[#0B0F12] text-white",
  Concept: "bg-gray-100 text-gray-500",
};

const CAPABILITIES = [
  {
    title: "Payments",
    body: "Stripe Connect, marketplace splits and payout logic — built once, reused.",
  },
  {
    title: "Identity & data",
    body: "Auth, roles and row-level security patterns every venture inherits on day one.",
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

export default function Home() {
  return (
    <>
      {/* --------------------------------------------------------------- HERO */}
      <section className="relative overflow-hidden bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0E8C7F]">
                Venture Studio
              </p>
              <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                A venture studio is a promise.
                <span className="block text-[#0E8C7F]">
                  Until something ships.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
                Wynaxa builds technology companies and holds them. One of them
                is live: the Padel Players App is on iOS and Android, and our
                first venue — seven courts in Bristol — goes live on our booking
                platform this month.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/sports-tech"
                  className="inline-flex items-center justify-center rounded-md bg-[#0E8C7F] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0a7269]"
                >
                  See what shipped
                </Link>
                <Link
                  href="/investment"
                  className="inline-flex items-center justify-center rounded-md border border-gray-700 px-6 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
                >
                  Investor access
                </Link>
              </div>
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-lg lg:aspect-square">
              <AmbientVideo
                src="/wynaxa-mesh-loop.mp4"
                poster="/wynaxa-mesh-poster.jpg"
                alt="Abstract teal mesh forming a shifting landscape of connected lines"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- PROOF */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#F97316]">
            Wynaxa Sports Tech — live in market
          </p>

          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-gray-200 lg:grid-cols-4">
            {TRACTION.map((stat) => (
              <div key={stat.label} className="bg-white p-6 sm:p-8">
                <p className="text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm leading-snug text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Padel Players App. Launched mid-June 2026, no paid acquisition.
            Figures as at 14 July 2026.{" "}
            <Link
              href="/sports-tech"
              className="font-medium text-[#F97316] hover:underline"
            >
              The full picture &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------- THE STUDIO */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0E8C7F]">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
                A studio is only worth having if the ventures move faster
              </h2>
              <p className="mt-6 leading-relaxed text-gray-600">
                Every Wynaxa venture is its own company, with its own board and
                its own balance sheet. What none of them do is build payments,
                identity, infrastructure or a mobile release pipeline from
                scratch. The studio owns that layer once. Every venture inherits
                it.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                That is the entire argument, and it is testable. Sports Tech went
                from nothing to a live app on two stores, an ELO league engine
                and a venue booking platform inside a year — on a team that would
                normally still be hiring.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center text-sm font-medium text-[#0E8C7F] hover:underline"
              >
                About Wynaxa &rarr;
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
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
        </div>
      </section>

      {/* ----------------------------------------------------------- VENTURES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#0E8C7F]">
            Ventures
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
            Where each one actually is
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-gray-600">
            One venture is live in market. One is in build. The rest are
            concepts, and we say so — they get built when the platform and the
            team can carry them properly.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VENTURES.map((v) => (
              <Link
                key={v.name}
                href={v.href}
                className="venture-card group flex flex-col rounded-lg border border-gray-200 bg-white p-6 transition-all"
                style={
                  {
                    borderTopWidth: "3px",
                    borderTopColor: v.hex,
                    "--card-accent": v.hex,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-[#0B0F12] transition-colors group-hover:text-[#0E8C7F]">
                    {v.name}
                  </h3>
                  <span
                    className={`flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      STAGE_STYLES[v.stage] ?? "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {v.stage}
                  </span>
                </div>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {v.description}
                </p>

                {v.product && (
                  <p className="mt-4 border-t border-gray-100 pt-4 text-xs font-medium text-gray-500">
                    {v.product}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- CTA */}
      <section className="bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Investor enquiries
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-gray-400">
                Wynaxa Sports Tech Ltd is an Irish company (CRO 802571), wholly
                owned by WYNAXA Limited, with its own board. Investor materials
                are shared on request with qualified investors.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/investment"
                className="inline-flex items-center justify-center rounded-md bg-[#0E8C7F] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0a7269]"
              >
                Investor access
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-gray-700 px-6 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
