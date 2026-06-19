import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wynaxa Connect — Creator Economy & Media Technology",
  description: "Creator economy and media technology by Wynaxa.",
};

export default function ConnectPage() {
  return (
    <>
      <section className="border-b-2 border-connect bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <p className="text-sm font-semibold uppercase tracking-wider text-connect">
            Wynaxa Connect
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Creator Economy &amp; Media Technology
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Platforms and tools that power the creator economy and connect
            talent with opportunity.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className="leading-relaxed text-gray-600">
            Wynaxa Connect is our creator economy and media technology vertical.
            We build platforms that help creators, performers and venues
            collaborate, monetise and grow their audiences. The creator economy
            is one of the fastest-growing sectors in technology, and Connect is
            positioned to capture value across the entire chain — from content
            creation to distribution and monetisation.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Our first product, Beat Frame, is a two-sided marketplace connecting
            performers and venues with content creators. It represents the kind
            of focused, community-driven product we build at Wynaxa — solving a
            real problem for a passionate user base with technology that scales.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            As part of the Wynaxa portfolio, Connect benefits from shared
            payment infrastructure via Wynaxa Pay, operational support and
            cross-vertical distribution opportunities.
          </p>

          {/* Featured product */}
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-[#0B0F12]">
              Featured Product
            </h2>
            <Link
              href="/connect/beatframe"
              className="group mt-4 block rounded-lg border-l-4 border-connect bg-gray-50 p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#0B0F12] group-hover:text-connect transition-colors">
                Beat Frame
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                A creator marketplace connecting performers and venues with
                content creators across the entertainment industry.
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-connect">
                Learn more &rarr;
              </span>
            </Link>
          </div>

          <Link
            href="/portfolio"
            className="mt-10 inline-block text-sm font-medium text-[#0E8C7F] hover:underline"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
