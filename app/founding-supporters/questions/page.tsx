import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Questions — Founding Supporters — Wynaxa Sports Tech",
  description:
    "Frequently asked questions about the Wynaxa Sports Tech Founding Supporters Round.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

const sections = [
  { id: "basics", label: "The basics" },
  { id: "ei", label: "The Enterprise Ireland part" },
  { id: "shares", label: "What you\u2019d own" },
  { id: "valuation", label: "How we valued the company" },
  { id: "risks", label: "The risks \u2014 please read this" },
  { id: "tax", label: "Tax" },
  { id: "timing", label: "Timing and payment" },
  { id: "business", label: "The business" },
] as const;

export default function QuestionsPage() {
  return (
    <>
      {/* ──────────────── INTRO ──────────────── */}
      <header className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Everything you might want to ask, answered honestly.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            This page exists so you don&rsquo;t have to ask me directly, and so
            nobody has to make a decision on half the picture. It covers what
            we&rsquo;re raising, what you&rsquo;d own, what it&rsquo;s worth,
            and what could go wrong.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            If something isn&rsquo;t clear, ask me. I would much rather answer a
            hard question now than have you feel misled later.
          </p>
          <p className="mt-6 text-base text-gray-500">
            Christian Shanahan
            <br />
            Founder &amp; CEO, Wynaxa Sports Tech Ltd (CRO 807720)
          </p>
        </div>
      </header>

      {/* ──────────────── CONTENTS ──────────────── */}
      <nav className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-6">
          <ol className="list-decimal space-y-1.5 pl-5 text-base">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* ──────────────── 1. THE BASICS ──────────────── */}
      <section id="basics" className="scroll-mt-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <SectionHeading>The basics</SectionHeading>

          <H3>What is this?</H3>
          <P>
            A friends and family investment round in Wynaxa Sports Tech Ltd, an
            Irish company. We&rsquo;re raising &euro;30,000. In exchange you
            receive ordinary shares in the company, and your name goes on the
            share register.
          </P>

          <H3>What is an expression of interest?</H3>
          <P>
            It&rsquo;s you telling us you&rsquo;d like to take part, and roughly
            how much. It is not a payment and it does not commit you. It holds
            your place while we finalise the round.
          </P>

          <H3>Why only &euro;30,000?</H3>
          <P>
            Because we&rsquo;re not allowed to raise more. Our qualification for
            Enterprise Ireland&rsquo;s Pre-Seed Start Fund depends on staying
            under a private-fundraising limit. Bigger is not better here. Once we
            reach &euro;30,000, we close.
          </P>

          <H3>What&rsquo;s the smallest amount I can put in?</H3>
          <P>&euro;100.</P>

          <H3>Is there a maximum?</H3>
          <P>
            We may need to cap individual amounts to keep the round within its
            limit. If you&rsquo;re considering a larger amount, speak to me
            first.
          </P>
        </div>
      </section>

      {/* ──────────────── 2. ENTERPRISE IRELAND ──────────────── */}
      <section id="ei" className="scroll-mt-16 border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <SectionHeading>The Enterprise Ireland part</SectionHeading>

          <H3>What is the Pre-Seed Start Fund?</H3>
          <P>
            A funding programme run by Enterprise Ireland, the Irish
            government&rsquo;s enterprise agency. It provides &euro;50,000 or
            &euro;100,000 to early-stage Irish companies with international
            growth potential. We&rsquo;re on track to be awarded &euro;100,000,
            paid in two tranches of &euro;50,000.
          </P>

          <H3>Is that a grant?</H3>
          <P>
            No, and I want to be explicit about this because it affects you.
          </P>
          <P>
            The Enterprise Ireland money is a{" "}
            <strong>convertible loan note</strong>. It is a loan, not a gift. It
            carries interest, and at a later stage it converts into shares. When
            it converts, it dilutes every existing shareholder &mdash; me
            included, and you included.
          </P>
          <P>
            That&rsquo;s completely normal and it&rsquo;s a founder-friendly
            instrument compared to most funding. But it isn&rsquo;t free money,
            and I&rsquo;d rather you heard it from me now than found it in a
            document in three years.
          </P>

          <H3>When does it arrive?</H3>
          <P>
            The first &euro;50,000 is expected at the end of September, once this
            round closes. The second &euro;50,000 depends on us hitting agreed
            milestones &mdash; revenue milestones, not promises &mdash; and is
            expected around December.
          </P>

          <H3>What comes after that?</H3>
          <P>
            We move towards Enterprise Ireland&rsquo;s High Potential Start-Up
            programme, the stage where they co-invest alongside private
            investors. It is approval-based, not automatic. We have to earn it.
          </P>

          <H3>Has Enterprise Ireland approved the &euro;1.2m valuation?</H3>
          <P>
            No. Enterprise Ireland has no view on our valuation and hasn&rsquo;t
            endorsed it. Their instrument is deliberately structured so that no
            valuation is set at this stage. The &euro;1.2m figure is ours alone,
            and I explain how we reached it below.
          </P>
        </div>
      </section>

      {/* ──────────────── 3. WHAT YOU'D OWN ──────────────── */}
      <section id="shares" className="scroll-mt-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <SectionHeading>What you&rsquo;d own</SectionHeading>

          <H3>What exactly am I buying?</H3>
          <P>
            Ordinary shares in Wynaxa Sports Tech Ltd. The same class of share I
            hold. There is no special class for this round &mdash; no better
            terms for me and lesser terms for you.
          </P>

          <H3>How many shares do I get?</H3>
          <P>One euro, one share.</P>

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-base">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-500">
                    You invest
                  </th>
                  <th className="py-3 pr-4 font-semibold text-gray-500">
                    You receive
                  </th>
                  <th className="py-3 font-semibold text-gray-500">Roughly</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">&euro;100</td>
                  <td className="py-3 pr-4">100 shares</td>
                  <td className="py-3">0.008%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">&euro;500</td>
                  <td className="py-3 pr-4">500 shares</td>
                  <td className="py-3">0.041%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">&euro;1,000</td>
                  <td className="py-3 pr-4">1,000 shares</td>
                  <td className="py-3">0.081%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">&euro;5,000</td>
                  <td className="py-3 pr-4">5,000 shares</td>
                  <td className="py-3">0.407%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <P>
            The full &euro;30,000 round buys just under 2.5% of the company in
            total.
          </P>

          <H3>Do I get a say in how the company is run?</H3>
          <P>
            No. A holding of this size carries no meaningful voting influence,
            and you shouldn&rsquo;t invest expecting it. What you get is a stake
            in the outcome.
          </P>

          <H3>Will I receive dividends?</H3>
          <P>
            No. Every euro the company earns goes back into building it. If a
            return ever comes, it comes from the value of the shares, not from
            income.
          </P>

          <H3>Will my shareholding be diluted?</H3>
          <P>
            Yes. Every future funding round issues new shares, which reduces
            everyone&rsquo;s percentage &mdash; mine included. This is normal.
            Your percentage goes down; the intention is that the value of the
            whole company goes up by considerably more.
          </P>

          <H3>What restrictions apply?</H3>
          <ul className="mb-4 list-disc space-y-2 pl-5 text-lg leading-relaxed text-gray-600">
            <li>
              Shares cannot be sold to an outsider without board consent.
            </li>
            <li>
              If a majority of shareholders accept an offer for the company,
              minority holders must sell on the same terms. Without this, one
              uncontactable shareholder could block an exit for everyone.
            </li>
            <li>
              If I sell my shares, you have the right to sell alongside me on the
              same terms.
            </li>
          </ul>
        </div>
      </section>

      {/* ──────────────── 4. VALUATION ──────────────── */}
      <section
        id="valuation"
        className="scroll-mt-16 border-t border-gray-100 bg-gray-50"
      >
        <div className="mx-auto max-w-3xl px-6 py-16">
          <SectionHeading>How we valued the company</SectionHeading>

          <H3>How did you arrive at &euro;1.2 million?</H3>
          <P>
            It isn&rsquo;t a formula. Nobody can calculate what an early-stage
            company is worth, and anyone who shows you a spreadsheet proving it
            is selling you something. It&rsquo;s a judgement. Here&rsquo;s the
            judgement.
          </P>

          <H3>What&rsquo;s already built</H3>
          <P>
            Two live products. The Padel Players App, in both app stores, in
            eight languages. Wynaxa Hub for venues behind it. A ranking engine
            that took months to get right. Commissioning that from a development
            agency today would cost well into six figures. That&rsquo;s
            replacement cost, not a projection &mdash; it&rsquo;s the price of
            something you can download this afternoon.
          </P>

          <H3>What comparable companies are worth</H3>
          <P>
            Early-stage Irish software businesses with a product already in
            market typically price between &euro;1m and &euro;2m before they have
            meaningful revenue. We sat deliberately near the bottom of that
            range.
          </P>

          <H3>What isn&rsquo;t in the number</H3>
          <P>
            No revenue, because we don&rsquo;t have it yet. No credit for the
            government funding, because it hasn&rsquo;t landed. Nothing for the
            other sports this works in. Nothing for the investor conversations
            we&rsquo;re in.
          </P>
          <P>
            I could have argued for a higher number. I didn&rsquo;t want to.
            This round is going to people who know me, and I&rsquo;d rather be
            told in five years that I priced it too cheaply than have anyone feel
            I talked them into a number I&rsquo;d inflated.
          </P>
        </div>
      </section>

      {/* ──────────────── 5. RISKS ──────────────── */}
      <section id="risks" className="scroll-mt-16 bg-surface-risk">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="mb-6 border-b border-white/20 pb-2 text-sm font-semibold uppercase tracking-widest text-gray-400">
            The risks &mdash; please read this part
          </h2>

          <p className="mb-8 text-2xl font-semibold leading-snug text-white sm:text-3xl">
            You could lose every euro you put in. Please only invest money that,
            if it went to zero, would change nothing about your life.
          </p>

          <H3Risk>Could I really lose all of it?</H3Risk>
          <PRisk>
            Yes. Completely. This is a start-up, most start-ups fail, and ours
            could be one of them. If that happens your shares become worth
            nothing. There is no compensation, no protection scheme and no
            recourse.
          </PRisk>

          <H3Risk>How much should I put in?</H3Risk>
          <PRisk>
            Only what you can genuinely afford to lose. Not money you&rsquo;d
            like back. Not money you&rsquo;d miss. If that amount is &euro;100,
            &euro;100 is genuinely welcome. If it&rsquo;s nothing at all,
            that&rsquo;s completely fine and it changes nothing between us.
          </PRisk>

          <H3Risk>Can I sell my shares if I need the money?</H3Risk>
          <PRisk>
            No. There is no market for shares in a private company. You cannot
            cash them in next year because the boiler broke. Please treat this
            money as gone the moment it leaves your account.
          </PRisk>

          <H3Risk>How long before there&rsquo;s any way to get money out?</H3Risk>
          <PRisk>
            Realistically five to eight years, if ever. Money would only come
            back through the company being acquired, a later investor buying
            existing shares, or the company buying shares back. None of these are
            guaranteed and none are within your control. If you might need this
            money before then, please don&rsquo;t put it in.
          </PRisk>

          <H3Risk>Is this regulated or protected?</H3Risk>
          <PRisk>
            No. This is an unregulated private investment in an unlisted company.
            It carries none of the protections that come with regulated
            investment products.
          </PRisk>
        </div>
      </section>

      {/* ──────────────── 6. TAX ──────────────── */}
      <section id="tax" className="scroll-mt-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <SectionHeading>Tax</SectionHeading>

          <H3>What are the tax implications?</H3>
          <P>
            This is a euro investment in an Irish company, and the treatment
            depends entirely on where you&rsquo;re resident. I&rsquo;m not able
            to advise you on tax and I won&rsquo;t pretend otherwise. Please
            speak to your own accountant before investing, particularly if
            you&rsquo;re outside Ireland.
          </P>

          <H3>Are there reliefs available?</H3>
          <P>
            There are Irish reliefs that may apply to Irish-resident investors,
            subject to conditions. UK schemes such as SEIS and EIS do{" "}
            <strong>not</strong> apply, because those relate to UK companies and
            Wynaxa Sports Tech is Irish. If you&rsquo;re in the US or elsewhere
            you may have reporting obligations on foreign shareholdings. Your
            accountant is the right person to ask.
          </P>
        </div>
      </section>

      {/* ──────────────── 7. TIMING AND PAYMENT ──────────────── */}
      <section
        id="timing"
        className="scroll-mt-16 border-t border-gray-100 bg-gray-50"
      >
        <div className="mx-auto max-w-3xl px-6 py-16">
          <SectionHeading>Timing and payment</SectionHeading>

          <H3>When does this close?</H3>
          <P>
            We originally said 1 September. We&rsquo;ve held it open for one
            further week for anyone still deciding.
          </P>

          <H3>What happens after I express interest?</H3>
          <P>
            I&rsquo;ll come back to you personally with the paperwork and the
            payment details, including our bank account information. Please give
            me a day or so &mdash; I&rsquo;m handling these individually rather
            than automatically, so nothing gets sent to the wrong person.
          </P>

          <div className="my-6 rounded-lg border border-accent/30 bg-accent/5 px-5 py-4 text-base leading-relaxed text-foreground">
            <p>
              We only ever send bank details in that confirmation, and they will
              never change. If you receive a message from any other source giving
              you different account details, it isn&rsquo;t from us. Please
              contact me directly before sending anything.
            </p>
          </div>

          <H3>When would I need to send the money?</H3>
          <P>
            Funds need to be with us by the end of September. That deadline comes
            from the Enterprise Ireland process, not from us.
          </P>

          <H3>What if the round doesn&rsquo;t fill?</H3>
          <P>
            We proceed with whatever we&rsquo;ve raised, provided it meets the
            Enterprise Ireland requirement.
          </P>
        </div>
      </section>

      {/* ──────────────── 8. THE BUSINESS ──────────────── */}
      <section id="business" className="scroll-mt-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <SectionHeading>The business</SectionHeading>

          <H3>What does Wynaxa Sports Tech actually do?</H3>
          <P>
            We fix the part of grassroots sport nobody else has fixed: everything
            that happens <em>before</em> the booking.
          </P>
          <P>
            A padel game doesn&rsquo;t start with a court reservation. It starts
            three days earlier in a WhatsApp group with &ldquo;anyone around
            Thursday?&rdquo; &mdash; then forty messages, two maybes, and
            someone dropping out on the day. Booking platforms like Playtomic
            start at the booking and do that job well. The coordination layer
            before it is unowned.
          </P>
          <P>
            That&rsquo;s what we built. Availability polls that automatically
            generate the match. Networks to fill an empty slot. A process for
            finding a replacement when someone drops out.
          </P>

          <H3>What&rsquo;s the ranking system?</H3>
          <P>
            Because we own the match rather than just the court slot, we can rate
            it properly. Our level system uses the same mathematics behind chess
            ratings and the World Rugby rankings. Before you walk on court you
            can see exactly what a win, loss or draw will do to your level,
            because we already know the level of every player in that match.
            Nobody else does this &mdash; and booking platforms structurally
            can&rsquo;t, because they don&rsquo;t have the match, only the slot.
          </P>

          <H3>Why padel?</H3>
          <P>
            It&rsquo;s the fastest-growing sport in the world, from around six
            million players to over thirty million in under a decade. But padel
            is the beachhead, not the ceiling. Almost nothing we&rsquo;ve built
            is padel-specific. Coordination, ratings, leagues and venue tooling
            are missing across dozens of grassroots sports.
          </P>

          <H3>Who else is involved?</H3>
          <P>
            We have a co-founder and CTO, a board member who invested early, and
            advisors including a former Mastercard SVP. We&rsquo;re in
            conversations with larger investors for the stage after this one.
            Those are conversations, not commitments, and I won&rsquo;t present
            them as anything more.
          </P>
        </div>
      </section>

      {/* ──────────────── CTA ──────────────── */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h3 className="text-2xl font-semibold text-foreground">
            Ready, or still deciding?
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            An expression of interest costs you nothing today and doesn&rsquo;t
            commit you. It tells us to hold your place.
          </p>
          <p className="mt-8">
            <a
              href="/founding-supporters#register"
              className="inline-block rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-colors hover:opacity-90"
            >
              Register your expression of interest
            </a>
          </p>
          <p className="mt-6 text-base text-gray-600">
            If you&rsquo;d rather talk it through first, or you&rsquo;ve got a
            question this page hasn&rsquo;t answered, contact me directly.
            I&rsquo;d rather you asked a hard question now than had a regret
            later.
          </p>
        </div>
      </section>
    </>
  );
}

/* ────────────── Sub-components ────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 border-b border-gray-300 pb-2 text-sm font-semibold uppercase tracking-widest text-gray-500">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-2 text-xl font-semibold text-foreground first:mt-0">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-lg leading-relaxed text-gray-600">{children}</p>
  );
}

function H3Risk({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-2 text-xl font-semibold text-white first:mt-0">
      {children}
    </h3>
  );
}

function PRisk({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-lg leading-relaxed text-gray-300">{children}</p>
  );
}
