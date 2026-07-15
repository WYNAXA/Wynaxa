import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Wynaxa",
  description:
    "Join Wynaxa and help build the next generation of technology ventures.",
};

const positions = [
  {
    title: "Head of Marketing",
    team: "Marketing",
    location: "Dublin (Hybrid)",
    type: "Full-time",
  },
  {
    title: "Head of Sales / Partnerships",
    team: "Sales",
    location: "Dublin (Hybrid)",
    type: "Full-time",
  },
  {
    title: "Head of Product",
    team: "Product",
    location: "Dublin (Hybrid)",
    type: "Full-time",
  },
  {
    title: "Community Success Manager",
    team: "Operations",
    location: "UK (Remote)",
    type: "Full-time",
  },
];

const perks = [
  "Competitive salary and equity",
  "Flexible remote work",
  "Health insurance",
  "Professional development budget",
  "Unlimited PTO",
  "Quarterly team offsites",
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-[#0F1B33]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Build the Future with Us
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Join us in creating and scaling the next generation of technology
            ventures.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          {/* Open positions */}
          <h2 className="text-2xl font-semibold text-[#0F1B33]">
            Open Positions
          </h2>
          <div className="mt-8 grid gap-4">
            {positions.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-4 rounded-lg border border-gray-200 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#0F1B33]">
                    {role.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-500">
                    <span>{role.team}</span>
                    <span className="text-gray-300">|</span>
                    <span>{role.location}</span>
                    <span className="text-gray-300">|</span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <a
                  href={`mailto:careers@wynaxa.com?subject=Application: ${encodeURIComponent(role.title)}`}
                  className="inline-flex items-center justify-center rounded-md bg-[#0F1B33] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1a2942] sm:w-auto"
                >
                  View / Apply
                </a>
              </div>
            ))}
          </div>

          {/* Why join */}
          <div className="mt-20">
            <h2 className="text-2xl font-semibold text-[#0F1B33]">
              Why Join Wynaxa?
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {perks.map((perk) => (
                <div
                  key={perk}
                  className="flex items-start gap-3 rounded-lg border border-gray-100 p-5"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#16A6A6]" />
                  <span className="text-sm text-gray-700">{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Open application CTA */}
          <div className="mt-20 rounded-lg bg-gray-50 p-8 text-center sm:p-12">
            <h2 className="text-xl font-semibold text-[#0F1B33]">
              Don&apos;t see a perfect fit?
            </h2>
            <p className="mt-2 text-gray-600">
              We&apos;re always looking for exceptional people. Send us your CV
              and tell us how you&apos;d like to contribute.
            </p>
            <a
              href="mailto:careers@wynaxa.com?subject=Open Application"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-[#16A6A6] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#128585]"
            >
              Send Your CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
