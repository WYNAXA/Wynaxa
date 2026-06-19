import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wynaxa Sports Tech — Sports Participation & Engagement",
  description:
    "Sports participation and engagement technology by Wynaxa.",
};

export default function SportsTechPage() {
  return (
    <>
      <section className="border-b-2 border-sports bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <p className="text-sm font-semibold uppercase tracking-wider text-sports">
            Wynaxa Sports Tech
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Sports Participation &amp; Engagement Technology
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Technology that connects players, organises competition and grows
            participation in sport.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className="leading-relaxed text-gray-600">
            Wynaxa Sports Tech builds platforms that make it easier for people
            to play, compete and engage with sport. We focus on participation
            sports — the activities that millions of people do every week — and
            build technology that removes friction, builds community and
            improves the experience.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            From match organisation and rankings to venue discovery and league
            management, our products serve players, clubs and communities with
            tools designed for how sport actually works on the ground.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Our first product, the Padel Players App, is live on both the App
            Store and Google Play — already serving the fast-growing global
            padel community with match organisation, rankings and league
            infrastructure.
          </p>

          {/* Featured product */}
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-[#0B0F12]">
              Featured Product
            </h2>
            <Link
              href="/sports-tech/padel-players-app"
              className="group mt-4 block rounded-lg border-l-4 border-sports bg-gray-50 p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#0B0F12] group-hover:text-sports transition-colors">
                Padel Players App
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                The padel community platform for matches, leagues and rankings.
                Live on iOS and Android.
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-sports">
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
