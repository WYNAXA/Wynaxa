import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wynaxa Sports Tech — Padel Players App",
  description:
    "Wynaxa Sports Tech Ltd builds participation infrastructure for racket sports. The Padel Players App is live on iOS and Android.",
};

/* ---------------------------------------------------------------------------
 * TRACTION — single source of truth for every number on this page.
 * Update these on submission day, redeploy, done. Do not hard-code numbers
 * anywhere else in this file.
 *
 * registeredUsers  = COUNT(*) FROM auth.users  (verified 14 Jul 2026)
 * waitlist         = QR-code signups collected at Padel Team Bristol
 *                    These are NOT users. Never merge the two figures.
 * ------------------------------------------------------------------------- */
const TRACTION = {
  registeredUsers: 77,
  waitlist: 169,
  venues: 1,
  courtsLive: 7,
  coaches: 1,
  launchedLabel: "Launched mid-June 2026",
  verifiedLabel: "Figures as at 14 July 2026",
};

const PRICING = [
  {
    tier: "Connect",
    price: "Free",
    rate: "3.25%",
    detail: "Court booking, player matching, league tools. No monthly fee.",
  },
  {
    tier: "Manager",
    price: "£49/mo",
    rate: "2.75%",
    detail: "Adds venue management, scheduling and coach administration.",
  },
  {
    tier: "Pro",
    price: "£179/mo",
    rate: "2.25%",
    detail: "Multi-site operations, advanced reporting, priority support.",
  },
];

const ROADMAP = [
  {
    sport: "Padel",
    status: "Live",
    live: true,
    detail: "iOS and Android. Matches, leagues, ELO ratings, court booking.",
  },
  {
    sport: "Tennis",
    status: "Next",
    live: false,
    detail: "Same court-booking and league engine. Largest adjacent market.",
  },
  {
    sport: "Pickleball",
    status: "Planned",
    live: false,
    detail: "Fastest-growing racket sport in North America.",
  },
  {
    sport: "5-a-side & darts",
    status: "Planned",
    live: false,
    detail: "Team formation and fixture logic already generalised.",
  },
];

const PEOPLE = [
  { name: "Christian Shanahan", role: "Founder & CEO", kind: "Executive" },
  { name: "Roshni Patel", role: "Chief Technology Officer", kind: "Executive" },
  { name: "Mike Todd", role: "Board Member & Investor", kind: "Board" },
  { name: "James Carroll", role: "Advisor", kind: "Advisor" },
  { name: "Bruce Bale", role: "Advisor", kind: "Advisor" },
];

export default function SportsTechPage() {
  return (
    <>
      {/* ---------------------------------------------------------------- HERO */}
      <section className="border-b-2 border-sports bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-wider text-sports">
            Wynaxa Sports Tech
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Participation infrastructure for racket sports
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            We build the software that gets people onto a court — matching
            players, running leagues and handling the booking. Our first
            product, the Padel Players App, is live on iOS and Android.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://apps.apple.com/app/id6762192246"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download the Padel Players App on the App Store"
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
              aria-label="Get the Padel Players App on Google Play"
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

      {/* ------------------------------------------------------------ TRACTION */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-px overflow-hidden rounded-lg bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
            <Stat
              value={TRACTION.registeredUsers}
              label="Registered players"
              note="Verified account signups"
            />
            <Stat
              value={TRACTION.waitlist}
              label="On the waitlist"
              note="One venue. One QR code. Two weeks."
            />
            <Stat
              value={TRACTION.venues}
              label="Partner venue"
              note={`${TRACTION.courtsLive} courts — Padel Team Bristol`}
            />
            <Stat
              value={TRACTION.coaches}
              label="Signed coach"
              note="David Ruiz — active on platform"
            />
          </div>

          <p className="mt-6 text-sm text-gray-500">
            {TRACTION.launchedLabel}. No paid acquisition — every signup to date
            is organic. {TRACTION.verifiedLabel}.
          </p>

          <div className="mt-10 max-w-3xl border-l-2 border-sports pl-6">
            <p className="leading-relaxed text-gray-600">
              The waitlist is the number that matters. We placed a single QR
              code in one venue for two weeks, ran no advertising, and did not
              tell anyone the app had launched. 169 players scanned it and left
              their details. That is unprompted demand from one site — and it
              is the mechanic we repeat at every venue we sign.
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- THE PRODUCT */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-sports">
            The Product
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
            Padel Players App
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="leading-relaxed text-gray-600">
                Padel is the fastest-growing racket sport in the world, and it
                has a structural problem: you need exactly four players and a
                court, at the same time. Most games never happen because the
                coordination fails, not because the demand isn&apos;t there.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                The Padel Players App solves the coordination. Players post
                availability, the app builds balanced matches from skill
                ratings, and the court is booked in the same flow. Leagues,
                rankings and results are handled automatically.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Availability polling and automated match formation",
                  "ELO player ratings and league standings",
                  "Court booking integrated into the match flow",
                  "Group, club and coach management",
                  "Live on the Apple App Store and Google Play",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sports" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/sports-tech/padel-players-app"
                className="mt-8 inline-flex items-center text-sm font-medium text-sports hover:underline"
              >
                Explore the product &rarr;
              </Link>
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-lg">
              <Image
                src="/padel-hero.jpg"
                alt="Padel players on court"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- VENUE / PTB */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-sports">
            First Venue
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
            Padel Team Bristol
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-gray-600">
            Seven courts. Terms agreed for the Wynaxa booking platform, with the
            contract executing this week. A second Padel Team site opens in
            September 2026 and will run on the same infrastructure.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Milestone
              date="20 July 2026"
              title="Booking system deploys"
              body="Our first venue booking system goes live at Padel Team Bristol across all seven courts."
              status="upcoming"
            />
            <Milestone
              date="This week"
              title="Contract executes"
              body="Commercial terms agreed. Written agreement in signature."
              status="upcoming"
            />
            <Milestone
              date="September 2026"
              title="Second venue opens"
              body="Padel Team's second site launches on Wynaxa infrastructure from day one."
              status="upcoming"
            />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- WEDGE */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-sports">
            The Model
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
            We arrive with the players already in the building
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">
            Incumbent booking platforms sell software to venues and hope players
            follow. We build the player community first, then the venue
            follows the players. Every venue we sign inherits an existing local
            player base — and every venue we sign grows it.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PRICING.map((p) => (
              <div
                key={p.tier}
                className="rounded-lg border border-gray-200 bg-white p-6"
                style={{ borderTopWidth: "2px", borderTopColor: "#F97316" }}
              >
                <h3 className="text-lg font-semibold text-[#0B0F12]">
                  {p.tier}
                </h3>
                <p className="mt-2 text-2xl font-semibold text-[#0B0F12]">
                  {p.price}
                </p>
                <p className="mt-1 text-sm font-medium text-sports">
                  {p.rate} transaction fee
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-gray-500">
            Venues switching from an incumbent platform receive the Wynaxa
            Switching Credit — 50% of their average monthly platform cost,
            capped at £1,500, for the first twenty venues.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ ROADMAP */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-sports">
            Beyond Padel
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
            One engine. Every sport that needs four people and a court.
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">
            The hard problems — availability matching, skill-balanced team
            formation, league scoring, court booking — are sport-agnostic. Padel
            is the beachhead, not the ceiling.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROADMAP.map((r) => (
              <div
                key={r.sport}
                className={`rounded-lg border p-6 ${
                  r.live
                    ? "border-sports bg-orange-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#0B0F12]">
                    {r.sport}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      r.live
                        ? "bg-sports text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- TEAM */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-sports">
            Team &amp; Board
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
            Who is building this
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PEOPLE.map((person) => (
              <div
                key={person.name}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {person.kind}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#0B0F12]">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- ENTITY */}
      <section className="bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-sports">
                Corporate Structure
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Wynaxa Sports Tech Ltd
              </h2>
              <p className="mt-6 leading-relaxed text-gray-400">
                Wynaxa Sports Tech Ltd is an Irish-incorporated company
                (CRO 802571), wholly owned by WYNAXA Limited. It holds the Padel
                Players App and the venue booking platform, and operates with its
                own board and its own capital structure.
              </p>
              <p className="mt-4 leading-relaxed text-gray-400">
                The studio provides shared engineering, payments infrastructure
                and operational support. The venture stands on its own.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <Link
                href="/investment"
                className="inline-flex items-center justify-center rounded-md bg-sports px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Investor Access
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md border border-gray-700 px-6 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
              >
                About Wynaxa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------- COMPONENTS */

function Stat({
  value,
  label,
  note,
}: {
  value: number;
  label: string;
  note: string;
}) {
  return (
    <div className="bg-white p-8">
      <p className="text-4xl font-semibold tracking-tight text-[#0B0F12] sm:text-5xl">
        {value}
      </p>
      <p className="mt-2 text-sm font-semibold text-[#0B0F12]">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-gray-500">{note}</p>
    </div>
  );
}

function Milestone({
  date,
  title,
  body,
  status,
}: {
  date: string;
  title: string;
  body: string;
  status: "upcoming" | "done";
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
      <div className="flex items-center gap-2">
        <span
          className={`h-2 w-2 rounded-full ${
            status === "done" ? "bg-sports" : "border border-sports bg-white"
          }`}
        />
        <p className="text-xs font-semibold uppercase tracking-wider text-sports">
          {date}
        </p>
      </div>
      <h3 className="mt-3 font-semibold text-[#0B0F12]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{body}</p>
    </div>
  );
}
