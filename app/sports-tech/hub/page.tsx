import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wynaxa Hub — the venue control centre",
  description:
    "Wynaxa Hub is the booking and venue-management platform behind the Padel Players App. Live at Padel Team Bristol.",
};

const HUB_URL = "https://hub.wynaxa.com";

/* The four screens that carry the argument. Files live in /public. */
const SCREENS = [
  {
    src: "/hub-overview.png",
    alt: "Hub overview dashboard showing today's revenue, court schedule and live booking feed",
    title: "One screen for the whole day",
    body: "Revenue, courts in play, PPA bookings and the next free slot — the venue sees its day at a glance, with a live feed of every booking as it lands.",
  },
  {
    src: "/hub-courts.png",
    alt: "Hub courts page showing per-court utilisation and revenue",
    title: "Every court, its own numbers",
    body: "Utilisation and revenue per court, in real time. Block a court for maintenance in one tap — and it never counts as revenue.",
  },
  {
    src: "/hub-calendar.png",
    alt: "Hub calendar showing bookings across three courts by hour",
    title: "The grid the front desk runs on",
    body: "Walk-ins, app bookings, coaching and blocks colour-coded across every court. Tap an empty slot to book it.",
  },
  {
    src: "/hub-customers.png",
    alt: "Hub customer profile showing booking history, spend and loyalty stamps",
    title: "Players the venue actually knows",
    body: "Every player's history, spend and loyalty stamps in one place — and a push notification straight to their phone.",
  },
];

const BOOKING_TYPES = [
  { label: "Walk-in", note: "Someone at the desk" },
  { label: "PPA", note: "Booked in the app" },
  { label: "Coaching", note: "A coach's session" },
  { label: "Block-out", note: "Court unavailable" },
];

export default function HubPage() {
  return (
    <>
      {/* --------------------------------------------------------------- HERO */}
      <section className="bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/sports-tech" className="hover:text-[#F97316]">
              Sports Tech
            </Link>
            <span>/</span>
            <span className="text-gray-300">Hub</span>
          </nav>

          <p className="text-sm font-semibold uppercase tracking-wider text-[#F97316]">
            The venue side of the network
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Wynaxa Hub runs the courts the players are already booking
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            The Padel Players App brings the players. Hub is what the venue runs
            behind the desk — bookings, courts, coaching, customers and revenue,
            in one place. Live at Padel Team Bristol.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#F97316] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Visit hub.wynaxa.com
            </a>
            <Link
              href="/sports-tech"
              className="inline-flex items-center justify-center rounded-md border border-gray-700 px-6 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
            >
              Back to Sports Tech
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- THE TWO SIDES */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0E8C7F]">
                Demand
              </p>
              <h2 className="mt-2 text-xl font-semibold text-[#0B0F12]">
                Padel Players App
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Players find matches, form leagues and book courts. 77
                registered, 169 on the waitlist.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <span className="text-2xl text-gray-300">&harr;</span>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#F97316]">
                Supply
              </p>
              <h2 className="mt-2 text-xl font-semibold text-[#0B0F12]">
                Wynaxa Hub
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Venues manage courts, bookings and coaching. Seven courts live
                at Padel Team Bristol.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-gray-600">
            The incumbents own one side and rent the other. We own both. Every
            venue on Hub inherits the players already in its area, and every
            player makes the venues more valuable. That loop is the business.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ SCREENS */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#F97316]">
            Inside Hub
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
            Built for the front desk, not a spreadsheet
          </h2>

          <div className="mt-16 space-y-20">
            {SCREENS.map((screen, i) => (
              <div
                key={screen.src}
                className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={1042}
                    height={649}
                    className="w-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#0B0F12]">
                    {screen.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-600">
                    {screen.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- BOOKING TYPES */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
            One booking flow, every kind of court time
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-gray-600">
            Whether a player walks in, books in the app, takes a coaching slot or
            the court is closed for maintenance — it&apos;s the same flow, and the
            numbers stay honest. A block-out is never counted as revenue.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BOOKING_TYPES.map((t) => (
              <div
                key={t.label}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6"
              >
                <p className="font-semibold text-[#0B0F12]">{t.label}</p>
                <p className="mt-1 text-sm text-gray-500">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ ROADMAP */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#F97316]">
              Where Hub goes next
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
              A control centre that isn&apos;t only padel
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Hub is built for padel first, but a court is a court. The same
              platform runs any venue that sells time on a surface — tennis,
              pickleball, five-a-side, and beyond. When a venue claims its space
              on Hub, it chooses what it runs. Wynaxa Sports Tech owns the
              platform; other sports plug into it.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- CTA */}
      <section className="bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                See Hub for yourself
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-gray-400">
                Hub is live at hub.wynaxa.com. Venues can claim their space, and
                players get matched to the courts near them through the Padel
                Players App.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={HUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#F97316] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Visit hub.wynaxa.com
              </a>
              <Link
                href="/investment"
                className="inline-flex items-center justify-center rounded-md border border-gray-700 px-6 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
              >
                Investor access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
