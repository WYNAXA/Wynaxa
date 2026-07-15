import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Wynaxa",
  description: "The Wynaxa portfolio: one venture live in market, one in build, and the studio behind them.",
};

/* ---------------------------------------------------------------------------
 * `stage` is the honest state of each venture and mirrors the homepage.
 * Order here is deliberate: live first, then in-build, then concepts.
 * Do not promote a venture to "Live" until real users are doing the real
 * thing in production.
 * ------------------------------------------------------------------------- */
const ventures = [
  {
    name: "Wynaxa Sports Tech",
    description: "Participation infrastructure for racket sports. Live on iOS and Android.",
    href: "/sports-tech",
    stage: "Live",
    hex: "#F97316",
  },
  {
    name: "Wynaxa Connect",
    description: "Creator economy and media technology.",
    href: "/connect",
    stage: "In build",
    hex: "#14B8A6",
  },
  {
    name: "Wynaxa Foundry",
    description: "Venture creation lab — we co-found with operators.",
    href: "/foundry",
    stage: "Operating",
    hex: "#A855F7",
  },
  {
    name: "Wynaxa Pay",
    description: "Digital payments and financial technology.",
    href: "/pay",
    stage: "Concept",
    hex: "#6366F1",
  },
  {
    name: "Wynaxa One",
    description: "Commerce and business operations software.",
    href: "/one",
    stage: "Concept",
    hex: "#0EA5E9",
  },
  {
    name: "Wynaxa Eco",
    description: "Environmental and sustainability solutions.",
    href: "/eco",
    stage: "Concept",
    hex: "#22C55E",
  },
];

const STAGE_STYLES: Record<string, string> = {
  Live: "bg-[#F97316] text-white",
  "In build": "bg-[#0F1B33] text-white",
  Operating: "bg-[#0F1B33] text-white",
  Concept: "bg-gray-100 text-gray-500",
};

const products = [
  {
    name: "Padel Players App",
    parent: "Wynaxa Sports Tech",
    description:
      "The padel community platform — matches, leagues and rankings. Live on iOS and Android.",
    href: "/sports-tech/padel-players-app",
    hex: "#F97316",
  },
  {
    name: "Wynaxa Hub",
    parent: "Wynaxa Sports Tech",
    description:
      "The venue booking and management platform behind the app. Live at Padel Team Bristol.",
    href: "/sports-tech/hub",
    hex: "#F97316",
  },
  {
    name: "Beat Frame",
    parent: "Wynaxa Connect",
    description:
      "A creator marketplace connecting performers and venues with content creators. In build.",
    href: "/connect/beatframe",
    hex: "#14B8A6",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* --------------------------------------------------------------- HERO */}
      <section className="bg-[#0F1B33]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Portfolio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            One venture live in market, one in build, and the studio behind
            them. We&apos;re transparent about stage — the concepts are held for
            when the platform and the team can carry them properly.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- PRODUCTS */}
      {/* Products first: these are the things that actually exist. */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0F1B33]">
            Live &amp; in build
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">
            Real products, shipping to real users.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group rounded-lg border border-gray-200 bg-gray-50 p-8 transition-shadow hover:shadow-lg"
                style={{ borderLeftWidth: "4px", borderLeftColor: p.hex }}
              >
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  {p.parent}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[#0F1B33] transition-colors group-hover:text-[#16A6A6]">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {p.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- VENTURES */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0F1B33]">Ventures</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">
            Each venture is its own company with its own board. Where each one
            actually is:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ventures.map((v) => (
              <Link
                key={v.name}
                href={v.href}
                className="venture-card group flex flex-col rounded-lg border border-gray-200 bg-white p-6 transition-all"
                style={
                  {
                    borderTopWidth: "2px",
                    borderTopColor: v.hex,
                    "--card-accent": v.hex,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md"
                    style={{ backgroundColor: v.hex }}
                  >
                    <span className="text-sm font-bold text-white">
                      {v.name.split(" ").pop()?.charAt(0)}
                    </span>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      STAGE_STYLES[v.stage] ?? "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {v.stage}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0F1B33] transition-colors group-hover:text-[#16A6A6]">
                  {v.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {v.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
