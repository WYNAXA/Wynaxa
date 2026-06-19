import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Wynaxa",
  description:
    "Wynaxa is a venture studio that creates, launches and scales technology businesses.",
};

const leadership = [
  {
    name: "Christian Shanahan",
    title: "Founder & CEO",
    initials: "CS",
    bio: "Entrepreneur and technologist leading Wynaxa\u2019s vision to build a portfolio of enduring technology businesses.",
  },
  {
    name: "Roshni Patel",
    title: "Chief Technology Officer",
    initials: "RP",
    bio: "Engineering leader overseeing the technical strategy and shared platform infrastructure across all Wynaxa ventures.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            About Wynaxa
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            A venture studio that creates, launches and scales technology
            businesses.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0B0F12]">Our Story</h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Wynaxa is the parent venture studio behind a growing portfolio of
            technology companies. We operate across fintech, commerce, creator
            economy, sports technology, sustainability and innovation —
            building, acquiring and scaling ventures that solve real problems and
            create lasting value.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Our studio model centralises the expertise, infrastructure and
            capital that new ventures need to move fast and scale efficiently. By
            sharing resources across the portfolio, each venture benefits from
            the collective strength of the platform.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Wynaxa is designed as a scalable multi-venture platform — built not
            just for the six verticals we operate today, but for the unlimited
            ventures of tomorrow. Every new business we launch or acquire plugs
            into shared technology, shared operations and a shared growth
            playbook, compounding the value of the entire portfolio.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0B0F12]">Leadership</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {leadership.map((person) => (
              <div key={person.name} className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B0F12]">
                  <span className="text-lg font-semibold text-white">
                    {person.initials}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0B0F12]">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#0E8C7F]">
                  {person.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex gap-4">
            <Link
              href="/ventures"
              className="inline-flex items-center justify-center rounded-md bg-[#0E8C7F] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0a7269]"
            >
              Our Approach
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-gray-200 px-6 py-3 text-sm font-medium text-[#0B0F12] transition-colors hover:border-gray-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
