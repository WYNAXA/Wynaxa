import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wynaxa — Venture Studio",
  description:
    "Wynaxa creates and scales technology businesses across fintech, commerce, sports technology, creator platforms, sustainability and community infrastructure.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ventures", label: "Ventures" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/investment", label: "Investment" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const ventureLinks = [
  { href: "/pay", label: "Wynaxa Pay" },
  { href: "/one", label: "Wynaxa One" },
  { href: "/connect", label: "Wynaxa Connect" },
  { href: "/sports-tech", label: "Wynaxa Sports Tech" },
  { href: "/eco", label: "Wynaxa Eco" },
  { href: "/foundry", label: "Wynaxa Foundry" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader navLinks={navLinks} />

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-100 bg-[#0B0F12] text-gray-400">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-12 md:grid-cols-4">
              {/* Brand */}
              <div className="md:col-span-1">
                <p className="text-lg font-bold tracking-[0.2em] text-white uppercase">
                  Wynaxa
                </p>
                <p className="mt-4 text-sm leading-relaxed">
                  A venture studio building the next generation of technology
                  businesses
                </p>
              </div>

              {/* Ventures */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Ventures
                </h3>
                <ul className="mt-4 space-y-3">
                  {ventureLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Company
                </h3>
                <ul className="mt-4 space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Contact
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="mailto:info@wynaxa.com"
                      className="text-sm transition-colors hover:text-white"
                    >
                      info@wynaxa.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:investors@wynaxa.com"
                      className="text-sm transition-colors hover:text-white"
                    >
                      investors@wynaxa.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
              &copy; 2026 Wynaxa
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
