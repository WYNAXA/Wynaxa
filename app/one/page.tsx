import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wynaxa One — Commerce & Business Operations",
  description: "Commerce and business operations software by Wynaxa.",
};

export default function OnePage() {
  return (
    <>
      <section className="border-b-2 border-one bg-[#0F1B33]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <p className="text-sm font-semibold uppercase tracking-wider text-one">
            Wynaxa One
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Commerce &amp; Business Operations Software
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Unified commerce and operations tools that help businesses run
            smarter, sell more and grow faster.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className="leading-relaxed text-gray-600">
            Wynaxa One brings together the tools businesses need to manage
            day-to-day operations in a single platform. From inventory and order
            management to customer engagement and analytics, One is designed to
            replace fragmented software stacks with a unified experience.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            We are building for the modern business operator who needs
            simplicity without sacrificing power — clean interfaces, real-time
            data and seamless integrations that work together out of the box.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            As a Wynaxa venture, One leverages shared platform infrastructure
            and tight integrations with Wynaxa Pay for embedded commerce and
            payment capabilities, creating a seamless end-to-end business
            operating system.
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
