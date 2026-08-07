import type { Metadata } from "next";
import Image from "next/image";
import InterestForm from "./InterestForm";

export const metadata: Metadata = {
  title: "Founding Supporters — Wynaxa Sports Tech",
  description:
    "Register your interest in the Wynaxa Sports Tech Founding Supporters Round.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

const features = [
  "Player groups",
  "Match organisation",
  "Polls",
  "Rankings and ELO",
  "Leagues",
  "Achievements and jerseys",
  "Venue connections",
  "Booking and payments",
] as const;

export default function FoundingSupportersPage() {
  return (
    <>
      {/* ──────────────── 1. HERO ──────────────── */}
      <section className="bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Become a Founding Supporter of the Future of Padel
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Wynaxa Sports Tech is building the connected digital ecosystem for
            padel players, clubs and venues.
          </p>

          <div className="mt-16 grid items-start gap-12 lg:grid-cols-[280px_1fr]">
            {/* Founder photo */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-xl bg-gray-800 lg:mx-0">
              {/* Replace src with actual founder portrait */}
              <Image
                src="/founder-portrait.jpg"
                alt="Christian Shanahan, Founder of Wynaxa Sports Tech"
                fill
                className="object-cover"
                sizes="280px"
                placeholder="empty"
              />
            </div>

            {/* Founder message */}
            <blockquote className="max-w-2xl">
              <p className="text-lg leading-relaxed text-gray-300">
                I&rsquo;m Christian, founder of Wynaxa Sports Tech. We&rsquo;ve
                built and launched the Padel Players App, signed our first
                commercial venue partner, and we&rsquo;re now building the
                platform that connects every padel player, club and venue across
                Ireland and the UK.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                Before this gets locked into formal investment structures, I
                wanted to speak to the people who&rsquo;ve backed me from the
                beginning. That&rsquo;s you.
              </p>
            </blockquote>
          </div>

          <div className="mt-12">
            <a
              href="#register"
              className="inline-block rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#0a7a6e]"
            >
              Register Your Interest
            </a>
          </div>

          <div className="mt-8 max-w-2xl rounded-lg border border-gray-600 px-6 py-5">
            <p className="text-base leading-relaxed text-gray-300">
              This is not an investment offer. It&rsquo;s an opportunity to
              register interest before any formal round opens.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. WHAT WE'VE ALREADY BUILT ──────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            What we&rsquo;ve already built
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            This isn&rsquo;t an idea. It&rsquo;s live, in the App Store, with
            paying customers.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* TODO: Replace href with actual iOS App Store link */}
            <BuiltCard
              title="Padel Players App on the App Store"
              href="#" // TODO: iOS App Store link
              external
            />
            {/* TODO: Replace href with actual Google Play link */}
            <BuiltCard
              title="Padel Players App on Google Play"
              href="#" // TODO: Google Play link
              external
            />
            <BuiltCard
              title="Wynaxa Sports Tech"
              href="/ventures"
            />
            <BuiltCard
              title="Wynaxa Hub, our venue platform"
              href="/sports-tech"
            />
            {/* TODO: Replace href with actual The Padel Team Bristol link */}
            <BuiltCard
              title="The Padel Team Bristol, our first commercial venue partner"
              href="#" // TODO: The Padel Team Bristol link
              external
            />
            <div className="flex items-center rounded-xl border border-gray-200 p-6">
              <p className="text-lg font-semibold text-foreground">
                Live in eight languages across iOS, Android and web
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 3. THE PROBLEM ──────────────── */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            The problem
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Padel is the fastest-growing sport in Europe, and it&rsquo;s being
            organised on WhatsApp.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <ProblemCard
              title="The group chat problem"
              body="Fixtures, scores and availability buried in a scroll nobody reads."
            />
            <ProblemCard
              title="Getting four people on a court"
              body="Right level, right time, right court. It's a job nobody wants."
            />
            <ProblemCard
              title="Venues can't reach their own players"
              body="Clubs have members and no way to engage them between bookings."
            />
            <ProblemCard
              title="Nothing joins it up"
              body="No single platform connecting players, groups and venues."
            />
          </div>
        </div>
      </section>

      {/* ──────────────── 4. WHAT WE BUILT ──────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            What we built
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            The Padel Players App turns a WhatsApp group into a proper club.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-lg border border-gray-200 px-4 py-4 text-center"
              >
                <p className="text-sm font-semibold text-foreground">
                  {feature}
                </p>
                {feature === "Booking and payments" && (
                  <p className="mt-1 text-xs text-accent font-medium">
                    In development
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Phone screenshot slots */}
          <div className="mt-16 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:justify-center lg:overflow-visible">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="relative flex-none aspect-[9/19.5] w-[220px] snap-center rounded-2xl bg-gray-100 sm:w-[260px]"
              >
                {/* Replace with actual phone screenshots */}
                <Image
                  src={`/phone-screenshot-${n}.png`}
                  alt={`Padel Players App screenshot ${n}`}
                  fill
                  className="rounded-2xl object-cover"
                  sizes="260px"
                  placeholder="empty"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── 5. WHY NOW ──────────────── */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Why this window matters
          </h2>

          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              We&rsquo;re meeting Enterprise Ireland on Tuesday 11th August.
              Their Pre-Seed Start Fund requires matched co-investment from
              private backers before their funding is released — so what we bring
              to that meeting matters.
            </p>
            <p>
              After this point the round moves into formal structures: legal
              documents, fixed terms, defined processes. That&rsquo;s the right
              way to run an investment round, and it&rsquo;s where we&rsquo;re
              heading. But it also means adding people later costs legal time and
              money, and the terms stop being ours to shape.
            </p>
            <p>
              Right now, this is still a conversation between people who know
              each other. That&rsquo;s the window.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Where the money goes
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Product development, customer acquisition, venue partnerships,
                sales activity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Where we&rsquo;re headed
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                More venues across Ireland and the UK, then European expansion.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                What you get
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Full terms will be shared before anyone commits a penny. Nothing
                is decided today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 6. THE ASK ──────────────── */}
      <section id="register" className="bg-white scroll-mt-16">
        <div className="mx-auto max-w-2xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Would you like to be part of it?
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              We&rsquo;re raising &euro;30,000 in this Founding Supporters
              Round. &euro;6,250 is already received or committed from our board
              and early backers.
            </p>
            <p>
              Amounts range from &pound;100 to &pound;10,000. Tell us if
              you&rsquo;re in and roughly what you&rsquo;re thinking — it helps
              us understand what&rsquo;s possible before Tuesday.
            </p>
          </div>

          {/* 7. FORM */}
          <div className="mt-12">
            <InterestForm />
          </div>
        </div>
      </section>

      {/* ──────────────── 8. DEADLINES ──────────────── */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <div className="space-y-4">
            <p className="text-xl font-semibold text-foreground">
              Expressions of interest by Tuesday 11th August
            </p>
            <p className="text-xl font-semibold text-foreground">
              Round completed by end of August
            </p>
          </div>
          <p className="mt-8 text-lg text-gray-600">
            Registering interest commits you to nothing. We&rsquo;ll come back
            to you individually with full terms before any money moves.
          </p>
        </div>
      </section>

      {/* ──────────────── 9. RISK ──────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="rounded-xl border border-gray-300 px-6 py-6">
            <p className="text-base leading-relaxed text-gray-600">
              Investing in an early-stage technology company carries risk. There
              is no guarantee of success, liquidity or return. You should only
              invest what you would be comfortable losing. This page is for
              information only and does not constitute an offer of securities or
              investment advice.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────── 10. CLOSING ──────────────── */}
      <section className="border-t border-gray-100 bg-[#0B0F12]">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="text-lg leading-relaxed text-gray-300">
            Thank you for being part of this. Whether you invest or keep
            supporting us as a user, a partner or someone who tells people about
            it — it matters, and I&rsquo;m grateful for it.
          </p>
          <p className="mt-8 text-sm text-gray-500">
            Christian Shanahan
            <br />
            Founder &amp; CEO, Wynaxa Sports Tech Ltd (CRO 807720)
          </p>
        </div>
      </section>
    </>
  );
}

/* ────────────── Sub-components ────────────── */

function BuiltCard({
  title,
  href,
  external,
}: {
  title: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="flex items-center rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-md"
    >
      <p className="text-base font-semibold text-foreground">{title}</p>
      {external && (
        <svg
          className="ml-auto h-4 w-4 flex-none text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-6H21m0 0v7.5m0-7.5l-9 9"
          />
        </svg>
      )}
    </a>
  );
}

function ProblemCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-600">{body}</p>
    </div>
  );
}
