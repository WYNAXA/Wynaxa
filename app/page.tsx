import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "We build ventures",
    description:
      "Identifying market opportunities and creating technology businesses from the ground up.",
  },
  {
    title: "We acquire ventures",
    description:
      "Acquiring promising technology businesses and integrating them into our portfolio.",
  },
  {
    title: "We scale ventures",
    description:
      "Providing the capital, infrastructure and expertise to accelerate growth.",
  },
  {
    title: "We partner with founders",
    description:
      "Collaborating with exceptional founders to bring their vision to market.",
  },
];

const portfolio = [
  {
    name: "Wynaxa Pay",
    description: "Digital payments and financial technology",
    href: "/pay",
    color: "bg-pay",
    hex: "#6366F1",
    product: undefined as string | undefined,
  },
  {
    name: "Wynaxa One",
    description: "Commerce and business operations software",
    href: "/one",
    color: "bg-one",
    hex: "#0EA5E9",
    product: undefined as string | undefined,
  },
  {
    name: "Wynaxa Connect",
    description: "Creator economy and media technology",
    href: "/connect",
    product: "Beat Frame",
    color: "bg-connect",
    hex: "#14B8A6",
  },
  {
    name: "Wynaxa Sports Tech",
    description: "Sports participation and engagement technology",
    href: "/sports-tech",
    product: "Padel Players App",
    color: "bg-sports",
    hex: "#F97316",
  },
  {
    name: "Wynaxa Eco",
    description: "Environmental and sustainability solutions",
    href: "/eco",
    color: "bg-eco",
    hex: "#22C55E",
    product: undefined as string | undefined,
  },
  {
    name: "Wynaxa Foundry",
    description: "Innovation and venture creation lab",
    href: "/foundry",
    color: "bg-foundry",
    hex: "#A855F7",
    product: undefined as string | undefined,
  },
];


export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:py-44">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building the Next Generation of Technology Ventures
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Wynaxa creates and scales technology businesses across fintech,
            commerce, sports technology, creator platforms, sustainability and
            community infrastructure.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-md bg-[#0E8C7F] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0a7269]"
            >
              View Portfolio
            </Link>
            <Link
              href="/investment"
              className="inline-flex items-center justify-center rounded-md border border-gray-700 px-6 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
            >
              Investor Access
            </Link>
          </div>
        </div>
      </section>

      {/* VENTURE STUDIO OVERVIEW */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#0E8C7F]">
            Venture Studio
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Wynaxa is the parent venture studio behind a growing portfolio of
            technology businesses. We create, acquire, scale and partner to build
            enduring companies.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-lg border border-gray-100 p-6"
              >
                <h3 className="text-lg font-semibold text-[#0B0F12]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#0E8C7F]">
            Portfolio
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
            Our Ventures
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Six verticals spanning fintech, commerce, creator economy, sports
            technology, sustainability and innovation.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="venture-card group rounded-lg border border-gray-200 bg-white p-6 transition-all"
                style={
                  {
                    borderTopWidth: "2px",
                    borderTopColor: item.hex,
                    "--card-accent": item.hex,
                  } as React.CSSProperties
                }
              >
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-md ${item.color}`}
                >
                  <span className="text-sm font-bold text-white">
                    {item.name.split(" ").pop()?.charAt(0)}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0B0F12] group-hover:text-[#0E8C7F] transition-colors">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
                {item.product && (
                  <p className="mt-3 text-xs font-medium text-gray-400">
                    Product: {item.product}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED VENTURES */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#0E8C7F]">
            Featured
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-[#0B0F12] sm:text-4xl">
            Customer-Facing Brands
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Beat Frame */}
            <Link
              href="/connect/beatframe"
              className="group rounded-lg border-l-4 border-connect bg-gray-50 p-8 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-[#0B0F12] group-hover:text-[#0E8C7F] transition-colors">
                Beat Frame
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                A creator marketplace connecting performers and venues with
                content creators. Beat Frame enables seamless collaboration
                between talent and creators across the entertainment industry.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-[#0E8C7F]">
                Learn more &rarr;
              </span>
            </Link>

            {/* Padel Players App */}
            <div className="rounded-lg border-l-4 border-sports bg-gray-50 p-8">
              <Link href="/sports-tech/padel-players-app" className="group block">
                <h3 className="text-2xl font-semibold text-[#0B0F12] group-hover:text-[#0E8C7F] transition-colors">
                  Padel Players App
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  The padel community platform for matches, leagues and
                  rankings. Connecting players, organising competitions and
                  growing the sport through technology.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-[#0E8C7F]">
                  Learn more &rarr;
                </span>
              </Link>
              <div className="mt-5 flex flex-wrap items-center gap-3">
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
                    className="h-9 w-auto"
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
                    className="h-9 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT SECTION */}
      <section className="bg-[#0B0F12]">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#0E8C7F]">
            Investment
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A Scalable Multi-Venture Platform
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-400">
            Wynaxa offers investors exposure to a diversified portfolio of
            technology businesses through a single platform. Our venture studio
            model reduces risk by spreading investment across multiple
            high-growth verticals — fintech, commerce, creator economy, sports
            technology, sustainability and innovation — while centralising
            operational expertise, shared infrastructure and strategic
            leadership. As each venture scales, the platform compounds in value.
          </p>
          <Link
            href="/investment"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-[#0E8C7F] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0a7269]"
          >
            Investor Access
          </Link>
        </div>
      </section>
    </>
  );
}
