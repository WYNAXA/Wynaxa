import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Wynaxa",
  description: "Explore the Wynaxa portfolio of technology ventures.",
};

const ventures = [
  {
    name: "Wynaxa Pay",
    description: "Digital payments and financial technology",
    href: "/pay",
    color: "bg-pay",
    borderColor: "border-pay",
  },
  {
    name: "Wynaxa One",
    description: "Commerce and business operations software",
    href: "/one",
    color: "bg-one",
    borderColor: "border-one",
  },
  {
    name: "Wynaxa Connect",
    description: "Creator economy and media technology",
    href: "/connect",
    color: "bg-connect",
    borderColor: "border-connect",
  },
  {
    name: "Wynaxa Sports Tech",
    description: "Sports participation and engagement technology",
    href: "/sports-tech",
    color: "bg-sports",
    borderColor: "border-sports",
  },
  {
    name: "Wynaxa Eco",
    description: "Environmental and sustainability solutions",
    href: "/eco",
    color: "bg-eco",
    borderColor: "border-eco",
  },
  {
    name: "Wynaxa Foundry",
    description: "Innovation and venture creation lab",
    href: "/foundry",
    color: "bg-foundry",
    borderColor: "border-foundry",
  },
];

const products = [
  {
    name: "Beat Frame",
    parent: "Wynaxa Connect",
    description:
      "A creator marketplace connecting performers and venues with content creators.",
    href: "/connect/beatframe",
    borderColor: "border-connect",
  },
  {
    name: "Padel Players App",
    parent: "Wynaxa Sports Tech",
    description:
      "The padel community platform for matches, leagues and rankings.",
    href: "/sports-tech/padel-players-app",
    borderColor: "border-sports",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Portfolio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Six verticals spanning fintech, commerce, creator economy, sports
            technology, sustainability and innovation.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0B0F12]">Ventures</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ventures.map((v) => (
              <Link
                key={v.name}
                href={v.href}
                className={`group rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg border-t-2 ${v.borderColor}`}
              >
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-md ${v.color}`}
                >
                  <span className="text-sm font-bold text-white">
                    {v.name.split(" ").pop()?.charAt(0)}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0B0F12] group-hover:text-[#0E8C7F] transition-colors">
                  {v.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {v.description}
                </p>
              </Link>
            ))}
          </div>

          <h2 className="mt-20 text-2xl font-semibold text-[#0B0F12]">
            Products
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {products.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className={`group rounded-lg border-l-4 ${p.borderColor} bg-gray-50 p-8 transition-shadow hover:shadow-lg`}
              >
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  {p.parent}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[#0B0F12] group-hover:text-[#0E8C7F] transition-colors">
                  {p.name}
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  {p.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
