import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment — Wynaxa",
  description:
    "Invest in a diversified portfolio of technology ventures through the Wynaxa platform.",
};

export default function InvestmentPage() {
  return (
    <>
      <section className="bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Investor Access
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            A scalable multi-venture platform offering diversified exposure to
            high-growth technology businesses.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold text-[#0B0F12]">
              Why Wynaxa
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Wynaxa offers investors exposure to a diversified portfolio of
              technology businesses through a single platform. Our venture studio
              model reduces risk by spreading investment across multiple
              high-growth verticals — fintech, commerce, creator economy, sports
              technology, sustainability and innovation — while centralising
              operational expertise, shared infrastructure and strategic
              leadership. As each venture scales, the platform compounds in
              value.
            </p>

            <h2 className="mt-16 text-2xl font-semibold text-[#0B0F12]">
              Platform Advantages
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Diversified portfolio across six technology verticals",
                "Shared infrastructure reduces cost and accelerates time to market",
                "Centralised operational expertise across product, engineering and growth",
                "Multiple revenue streams with compounding platform value",
                "Proven studio model for venture creation and scaling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0E8C7F]" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-16 text-2xl font-semibold text-[#0B0F12]">
              Get in Touch
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              For investor enquiries, pitch deck requests or partnership
              discussions, contact our investment team.
            </p>
            <a
              href="mailto:investors@wynaxa.com"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-[#0E8C7F] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0a7269]"
            >
              investors@wynaxa.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
