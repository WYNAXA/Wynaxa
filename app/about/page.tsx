import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Wynaxa",
  description:
    "Wynaxa is a venture studio. Our lead venture, Wynaxa Sports Tech, is live in market with the Padel Players App and Wynaxa Hub.",
};

/* ---------------------------------------------------------------------------
 * Leadership. `accent` is the monogram colour. Bios are factual — do not
 * inflate credentials. `linkedin` is optional and only shown where provided.
 * ------------------------------------------------------------------------- */
const leadership = [
  {
    name: "Christian Shanahan",
    title: "Founder & CEO",
    location: "UK",
    initials: "CS",
    accent: "#0E8C7F",
    bio: "Former CEO of several successful headhunting agencies, providing global organisations with innovative ways to attract talent, build portfolios and grow profit. A leading voice on innovation in the local ecosystem, with a track record of turning around declining businesses — re-engaging lost customers, capturing international growth and revitalising brand positioning.",
    linkedin: "https://www.linkedin.com/in/christianshanahan/",
  },
  {
    name: "Roshni Patel",
    title: "Co-Founder & CTO",
    location: "UK",
    initials: "RP",
    accent: "#F97316",
    bio: "Computer scientist and co-founder, leading engineering across the Wynaxa platform. She architected and built the Padel Players App and Wynaxa Hub — the live products behind Wynaxa Sports Tech. Her background spans software engineering and applied research, with published work in computer vision.",
    linkedin: null,
  },
  {
    name: "Mike Todd",
    title: "Board Member & Investor",
    location: "UK",
    initials: "MT",
    accent: "#6366F1",
    bio: "Ex-banker who has built and run independent regulated fund-management businesses in London. Mike supports Wynaxa's liquidity and banking operations, and was an early angel investor in the company.",
    linkedin: null,
  },
  {
    name: "James Carroll",
    title: "Advisor",
    location: "Ireland",
    initials: "JC",
    accent: "#14B8A6",
    bio: "Entrepreneurial business leader and ex-Mastercard SVP. James managed a global technology team across 15 countries focused on product innovation and digital-platform development, with deep experience in corporate finance, venturing, fundraising and digital transformation.",
    linkedin: "https://www.linkedin.com/in/james-anthony-carroll/",
  },
  {
    name: "Bruce Bale",
    title: "Advisor",
    location: "UK",
    initials: "BB",
    accent: "#A855F7",
    bio: "Accomplished leader across sport, gaming and digital media — strategic development, commercial partnerships, M&A, fundraising and rights negotiation. Over 20 years in elite high-performance sport, and a current FIH international hockey umpire with 100+ caps.",
    linkedin: null,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* --------------------------------------------------------------- HERO */}
      <section className="bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            About Wynaxa
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            A venture studio that builds technology companies — and holds them.
            One is live in market today.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------- OUR STORY */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0B0F12]">Our story</h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Wynaxa is the parent studio behind a small, focused portfolio of
            technology companies. Rather than spread thin, we build one venture
            properly, prove it in market, then reuse what we&apos;ve built to
            launch the next.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            The studio owns the hard, shared parts once — payments, identity,
            infrastructure and a working mobile release pipeline — so each
            venture starts with a platform instead of a blank page. That is why a
            small team shipped a live iOS and Android app, an ELO league engine
            and a venue booking platform inside a year.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Our lead venture, Wynaxa Sports Tech, is live: the Padel Players App
            is on both app stores, and Wynaxa Hub runs the courts behind it. The
            other ventures are built in the same way, when the platform and the
            team can carry them properly.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- STRUCTURE */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-[#0B0F12]">Structure</h2>
          <div className="mt-6 space-y-3">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-semibold text-[#0B0F12]">WYNAXA Limited</p>
              <p className="mt-1 text-sm text-gray-500">
                Parent venture studio.
              </p>
            </div>
            <div className="ml-6 rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-semibold text-[#0B0F12]">
                Wynaxa Sports Tech Ltd
              </p>
              <p className="mt-1 text-sm text-gray-500">
                CRO 802571 — a wholly owned subsidiary, holding the Padel Players
                App and Wynaxa Hub, with its own board and balance sheet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- LEADERSHIP */}
      <section className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0B0F12]">
            Leadership &amp; advisors
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: person.accent }}
                  >
                    <span className="text-lg font-semibold text-white">
                      {person.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0B0F12]">
                      {person.name}
                    </h3>
                    <p className="text-sm font-medium text-[#0E8C7F]">
                      {person.title}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      {person.location}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {person.bio}
                </p>
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-[#0E8C7F] hover:underline"
                  >
                    LinkedIn &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/sports-tech"
              className="inline-flex items-center justify-center rounded-md bg-[#0E8C7F] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0a7269]"
            >
              See the live venture
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-gray-200 px-6 py-3 text-sm font-medium text-[#0B0F12] transition-colors hover:border-gray-300"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
