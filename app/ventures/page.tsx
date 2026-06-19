import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventures — Wynaxa",
  description:
    "How Wynaxa builds, acquires, scales and partners to create enduring technology businesses.",
};

const pillars = [
  {
    title: "Build",
    description:
      "We identify market opportunities and build technology businesses from the ground up, leveraging shared infrastructure and deep domain expertise.",
  },
  {
    title: "Acquire",
    description:
      "We acquire promising technology businesses with strong fundamentals and integrate them into the Wynaxa portfolio for accelerated growth.",
  },
  {
    title: "Scale",
    description:
      "We provide the capital, operational expertise and shared platform infrastructure needed to take ventures from traction to market leadership.",
  },
  {
    title: "Partner",
    description:
      "We collaborate with exceptional founders, providing studio resources and strategic support to bring their vision to market faster.",
  },
];

export default function VenturesPage() {
  return (
    <>
      <section className="bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Our Venture Studio Model
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Wynaxa creates, acquires and scales technology businesses. Our
            studio model centralises the expertise, infrastructure and capital
            that new ventures need to succeed.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-8 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-lg border border-gray-100 p-8">
                <h2 className="text-xl font-semibold text-[#0B0F12]">{p.title}</h2>
                <p className="mt-3 leading-relaxed text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-md bg-[#0E8C7F] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0a7269]"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
