import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beat Frame — Creator Marketplace",
  description:
    "A creator marketplace connecting performers and venues with content creators.",
};

// TODO: This URL is temporary and will change to the permanent Beat Frame domain.
const BEATFRAME_URL = "https://wynaxa-connect-beatframe-web.vercel.app";

export default function BeatFramePage() {
  return (
    <>
      <section
        className="relative border-b-2 border-connect bg-[#0F1B33]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/beatframe-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36 relative z-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-connect">
            Wynaxa Connect
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Beat Frame
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            A two-sided creator marketplace connecting performers and venues
            with content creators across the entertainment industry.
          </p>
          <a
            href={BEATFRAME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-connect px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Visit Beat Frame &rarr;
          </a>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0F1B33]">
            The Platform
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Beat Frame is a creator marketplace built for the entertainment
            industry. On one side, performers and venues looking for high-quality
            content creation — photography, videography, social media coverage
            and more. On the other, talented content creators ready to work.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            The platform handles discovery, booking, communication and payment
            in a single seamless experience. Performers find the right creators
            for their brand. Creators find consistent, well-matched work.
            Everyone benefits from a purpose-built marketplace designed for how
            the entertainment industry actually operates.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Beat Frame is the first product from Wynaxa Connect, our creator
            economy and media technology vertical. It represents our approach to
            building focused, community-driven products that solve real problems
            with technology that scales.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={BEATFRAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-connect px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Visit Beat Frame &rarr;
            </a>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-[#16A6A6] hover:underline"
            >
              &larr; Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
