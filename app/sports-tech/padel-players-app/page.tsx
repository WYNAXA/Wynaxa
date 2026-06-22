import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Padel Players App — Padel Community Platform",
  description:
    "The padel community platform for matches, leagues and rankings.",
};

const features = [
  {
    title: "Match Organisation",
    description:
      "Find and organise padel matches with players at your level, any time, anywhere.",
  },
  {
    title: "ELO Career & Season Rankings",
    description:
      "Track your progress with an ELO-based ranking system across career and seasonal leaderboards.",
  },
  {
    title: "Padel Players League",
    description:
      "Compete in structured league play with automatic scheduling, results and standings.",
  },
  {
    title: "Open Matches",
    description:
      "Browse and join open matches posted by other players looking for opponents or partners.",
  },
  {
    title: "Venue Directory",
    description:
      "Discover padel venues near you with facility details, availability and community ratings.",
  },
];

export default function PadelPlayersAppPage() {
  return (
    <>
      <section
        className="relative border-b-2 border-sports bg-[#0B0F12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/padel-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36 relative z-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-sports">
            Wynaxa Sports Tech
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Padel Players App
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            The padel community platform for match organisation, ELO career and
            season rankings, the Padel Players League, open matches and venue
            directory. Built for players, by players.
          </p>

          {/* Store badges */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://apps.apple.com/app/id6762192246"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.wynaxa.padelplayers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
            >
              <Image
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0B0F12]">
            The Platform
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Padel is one of the fastest-growing sports in the world, but the
            infrastructure for organising play has not kept pace. The Padel
            Players App brings together everything the padel community needs in
            one place — from finding a match to tracking your ranking to
            competing in structured leagues.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Whether you are a casual player looking for a game after work or a
            competitive player climbing the rankings, the app is designed to fit
            how you play. Our ELO-based ranking system ensures fair, competitive
            matches, and our league infrastructure scales from local clubs to
            national competitions.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Padel Players App is the first product from Wynaxa Sports Tech and
            is live on both the App Store and Google Play, serving the growing
            global padel community.
          </p>

          {/* Features */}
          <h2 className="mt-16 text-2xl font-semibold text-[#0B0F12]">
            Features
          </h2>
          <div className="mt-8 grid gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-gray-100 p-5"
              >
                <h3 className="font-semibold text-[#0B0F12]">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          {/* Store badges repeated */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="https://apps.apple.com/app/id6762192246"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.wynaxa.padelplayers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
            >
              <Image
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </a>
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
