"use client";

import Link from "next/link";
import { useState } from "react";

/*
 * FORM_ENDPOINT — Set this to a Formspree (or similar) endpoint URL to collect
 * pitch-deck request emails. Example: "https://formspree.io/f/xyzabcde"
 *
 * When set, the email is POSTed as JSON to this endpoint on form submission.
 * When empty, the form falls back to opening a mailto:investors@wynaxa.com
 * link with the submitted email address in the body.
 */
const FORM_ENDPOINT = "";

// TODO: Replace public/wynaxa-pitch-deck.pdf with the real pitch deck file.
const PITCH_DECK_PATH = "/wynaxa-pitch-deck.pdf";

const verticals = [
  { name: "Wynaxa Pay", description: "Digital payments & fintech", href: "/pay", hex: "#6366F1" },
  { name: "Wynaxa One", description: "Commerce & business operations", href: "/one", hex: "#0EA5E9" },
  { name: "Wynaxa Connect", description: "Creator economy & media technology", href: "/connect", hex: "#14B8A6" },
  { name: "Wynaxa Sports Tech", description: "Sports participation & engagement", href: "/sports-tech", hex: "#F97316" },
  { name: "Wynaxa Eco", description: "Environmental & sustainability solutions", href: "/eco", hex: "#22C55E" },
  { name: "Wynaxa Foundry", description: "Innovation & venture creation lab", href: "/foundry", hex: "#A855F7" },
];

export default function InvestmentPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handlePitchDeckRequest(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email }),
        });
      } catch {
        // Silently continue — still trigger the download
      }
    } else {
      window.open(
        `mailto:investors@wynaxa.com?subject=Pitch%20Deck%20Request&body=Please%20send%20the%20pitch%20deck%20to%20${encodeURIComponent(email)}`,
        "_blank",
      );
    }

    // Trigger download
    const link = document.createElement("a");
    link.href = PITCH_DECK_PATH;
    link.download = "wynaxa-pitch-deck.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSubmitted(true);
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#0E8C7F]">
            Investment
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Investor Access
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Wynaxa is a venture studio creating, launching and scaling
            technology businesses — a scalable multi-venture platform, not a
            single product.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          {/* VISION */}
          <h2 className="text-2xl font-semibold text-[#0B0F12]">The Vision</h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Wynaxa is building a portfolio of technology businesses under one
            studio. Rather than betting on a single product, we operate as a
            scalable multi-venture platform — creating, launching and growing
            companies across high-growth sectors. Each new venture adds to the
            platform; each shared capability accelerates the next.
          </p>

          {/* THE MODEL */}
          <h2 className="mt-16 text-2xl font-semibold text-[#0B0F12]">
            The Model
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            We build, acquire, scale and partner. A portfolio approach means
            multiple shots on goal, shared infrastructure and compounding
            advantage. Every venture benefits from centralised product,
            engineering and growth capability — reducing cost, accelerating time
            to market and increasing the probability of outsized outcomes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Build", desc: "Identifying market opportunities and creating technology businesses from the ground up." },
              { title: "Acquire", desc: "Acquiring promising technology businesses and integrating them into the portfolio." },
              { title: "Scale", desc: "Providing capital, infrastructure and expertise to accelerate venture growth." },
              { title: "Partner", desc: "Collaborating with exceptional founders to bring their vision to market." },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-lg border border-gray-100 p-5"
              >
                <h3 className="font-semibold text-[#0B0F12]">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* PORTFOLIO & TRACTION */}
          <h2 className="mt-16 text-2xl font-semibold text-[#0B0F12]">
            Portfolio &amp; Traction
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Six verticals spanning fintech, commerce, creator economy, sports
            technology, sustainability and innovation. Two products are already
            live in market.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((v) => (
              <Link
                key={v.name}
                href={v.href}
                className="venture-card group rounded-lg border border-gray-200 bg-white p-4 transition-all"
                style={
                  {
                    borderTopWidth: "2px",
                    borderTopColor: v.hex,
                    "--card-accent": v.hex,
                  } as React.CSSProperties
                }
              >
                <h3 className="text-sm font-semibold text-[#0B0F12] group-hover:text-[#0E8C7F] transition-colors">
                  {v.name}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{v.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-[#0E8C7F] bg-gray-50 p-6">
            <p className="font-semibold text-[#0B0F12]">Live in Market</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F97316]" />
                <span className="text-gray-600">
                  <Link
                    href="/sports-tech/padel-players-app"
                    className="font-medium text-[#0B0F12] hover:text-[#0E8C7F] transition-colors"
                  >
                    Padel Players App
                  </Link>{" "}
                  — live on the Apple App Store and Google Play
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#14B8A6]" />
                <span className="text-gray-600">
                  <Link
                    href="/connect/beatframe"
                    className="font-medium text-[#0B0F12] hover:text-[#0E8C7F] transition-colors"
                  >
                    Beat Frame
                  </Link>{" "}
                  — creator marketplace, live and operational
                </span>
              </li>
            </ul>
          </div>

          {/* FUNDING SO FAR */}
          <h2 className="mt-16 text-2xl font-semibold text-[#0B0F12]">
            Funding to Date
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Wynaxa has been bootstrapped and self-funded to date. We have
            received &euro;50,000 from our first external investor — validating
            the model and providing early momentum as we prepare for our next
            funding round.
          </p>

          {/* THE RAISE */}
          <h2 className="mt-16 text-2xl font-semibold text-[#0B0F12]">
            The Raise
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Our next funding round opens in September 2026. Early access is
            available now to investors who want to come in ahead of the round.
            This is an opportunity to join at the ground floor of a multi-venture
            technology platform with products already live in market.
          </p>
        </div>
      </section>

      {/* CTAs */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Pitch Deck Download */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B0F12]">
                Download the Pitch Deck
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Enter your email to receive the Wynaxa investor pitch deck.
              </p>
              {submitted ? (
                <p className="mt-6 text-sm font-medium text-[#0E8C7F]">
                  Thank you — your download should begin shortly.
                </p>
              ) : (
                <form onSubmit={handlePitchDeckRequest} className="mt-6">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@example.com"
                      className="flex-1 rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-[#0B0F12] placeholder-gray-400 outline-none transition-colors focus:border-[#0E8C7F] focus:ring-1 focus:ring-[#0E8C7F]"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md bg-[#0E8C7F] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0a7269]"
                    >
                      Download
                    </button>
                  </div>
                  {error && (
                    <p className="mt-2 text-sm text-red-600">{error}</p>
                  )}
                </form>
              )}
            </div>

            {/* Request More Information */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B0F12]">
                Request More Information
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Have questions or want to discuss the opportunity? Reach out to
                our investment team directly.
              </p>
              <a
                href="mailto:investors@wynaxa.com"
                className="mt-6 inline-flex items-center justify-center rounded-md border border-gray-700 bg-[#0B0F12] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a2028]"
              >
                Request More Information
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
