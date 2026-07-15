import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wynaxa Eco — Environmental & Sustainability Solutions",
  description: "Environmental and sustainability solutions by Wynaxa.",
};

export default function EcoPage() {
  return (
    <>
      <section className="border-b-2 border-eco bg-[#0F1B33]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <p className="text-sm font-semibold uppercase tracking-wider text-eco">
            Wynaxa Eco
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Environmental &amp; Sustainability Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Technology that helps businesses and communities build a more
            sustainable future.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className="leading-relaxed text-gray-600">
            Wynaxa Eco is our sustainability vertical, developing technology
            solutions that help businesses and communities reduce their
            environmental impact. From carbon tracking and reporting to
            circular-economy platforms, we build tools that make sustainability
            measurable, actionable and scalable.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Sustainability is no longer optional — it is a business imperative.
            Eco builds products that help organisations meet their environmental
            obligations while unlocking new value from responsible practices.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            As part of the Wynaxa portfolio, Eco benefits from shared data
            infrastructure, cross-vertical integrations and operational
            expertise that accelerate product development and time to market.
          </p>
          <Link
            href="/portfolio"
            className="mt-8 inline-block text-sm font-medium text-[#16A6A6] hover:underline"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
