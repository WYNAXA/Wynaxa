import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wynaxa Pay — Digital Payments & Fintech",
  description: "Digital payments and financial technology by Wynaxa.",
};

export default function PayPage() {
  return (
    <>
      <section className="border-b-2 border-pay bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <p className="text-sm font-semibold uppercase tracking-wider text-pay">
            Wynaxa Pay
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Digital Payments &amp; Financial Technology
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Building the next generation of payment infrastructure and fintech
            solutions for businesses and consumers.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className="leading-relaxed text-gray-600">
            Wynaxa Pay is our fintech vertical, focused on creating innovative
            digital payment products that make moving money faster, cheaper and
            more transparent. From merchant payment processing to consumer
            wallets, we are building infrastructure that powers the future of
            financial transactions.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Our approach combines deep regulatory understanding with modern
            engineering to deliver payment experiences that meet the needs of
            businesses at every scale — from local retailers to enterprise
            platforms.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            As part of the Wynaxa portfolio, Pay benefits from shared technology
            infrastructure, cross-vertical distribution and centralised
            operational support, allowing us to move faster and build better
            products.
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
