"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { href: string; label: string };

/* The Wynaxa mark — inline SVG so it's crisp at any size and needs no request. */
function WynaxaMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      role="img"
      aria-label="Wynaxa"
    >
      <rect width="512" height="512" rx="112" fill="#0E8C7F" />
      <path
        d="M96 160 L168 360 L232 224 L280 224 L344 360 L416 160"
        fill="none"
        stroke="#ffffff"
        strokeWidth="38"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Is `href` the active page? Exact match for "/", prefix match otherwise
 * (so /sports-tech/hub still lights up the /sports-tech nav item if present).
 */
function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteHeader({ navLinks }: { navLinks: NavLink[] }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo: mark + wordmark */}
        <Link href="/" className="flex items-center gap-2.5">
          <WynaxaMark className="h-8 w-8" />
          <span className="text-lg font-bold uppercase tracking-[0.2em] text-[#0B0F12]">
            Wynaxa
          </span>
        </Link>

        {/* Desktop nav with active-page highlight */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-sm font-semibold text-[#0E8C7F]"
                    : "text-sm text-gray-600 transition-colors hover:text-[#0B0F12]"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/investment"
          className="hidden rounded-md bg-[#0B0F12] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1a2028] sm:inline-block"
        >
          Investor Access
        </Link>

        {/* Mobile menu button (visual only — matches existing behaviour) */}
        <button className="text-[#0B0F12] md:hidden" aria-label="Open menu">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
