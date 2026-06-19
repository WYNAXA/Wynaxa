import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wynaxa Foundry — Innovation & Venture Creation Lab",
  description: "Innovation and venture creation lab by Wynaxa.",
};

export default function FoundryPage() {
  return (
    <>
      <section className="border-b-2 border-foundry bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <p className="text-sm font-semibold uppercase tracking-wider text-foundry">
            Wynaxa Foundry
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Innovation &amp; Venture Creation Lab
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Where new ideas are tested, validated and turned into Wynaxa&apos;s
            next ventures.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className="leading-relaxed text-gray-600">
            Wynaxa Foundry is our innovation and venture-creation lab — the
            engine that feeds the Wynaxa portfolio with new businesses. Foundry
            is where we identify opportunities, prototype solutions and validate
            product-market fit before committing to full-scale development.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Every Wynaxa venture starts in the Foundry. We run lean experiments,
            build MVPs and test hypotheses with real users before a venture
            graduates into the portfolio. This disciplined approach to venture
            creation reduces risk and ensures that every business we launch has
            genuine market demand.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Foundry also serves as our partnership gateway — working with
            external founders and teams who want to build within the Wynaxa
            ecosystem, leveraging our shared infrastructure, capital and
            operational expertise to bring their ideas to market faster.
          </p>
          <Link
            href="/portfolio"
            className="mt-8 inline-block text-sm font-medium text-[#0E8C7F] hover:underline"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
