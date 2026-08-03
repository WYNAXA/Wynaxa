"use client";

import { useEffect, useState } from "react";

// Publishable (anon-scoped) key — safe to ship in a client bundle. Overridable via env.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://timbjfihsxqfrqrxwdny.supabase.co";
const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  "sb_publishable_r1vG_j8YP3ciPwMKM31Ipg_f_lJlFZX";
const HUB_URL = "https://hub.wynaxa.com";

interface Venue {
  venue_id: string;
  venue_name: string;
  city: string | null;
  full_address: string | null;
  postcode: string | null;
}

export default function ClaimVenueSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setSearched(false);
      return;
    }
    const t = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${SUPABASE_URL}/rest/v1/rpc/search_claimable_venues`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              apikey: SUPABASE_KEY,
              Authorization: `Bearer ${SUPABASE_KEY}`,
            },
            body: JSON.stringify({ p_query: query.trim() }),
          },
        );
        const data = res.ok ? await res.json() : [];
        setResults(Array.isArray(data) ? data.slice(0, 8) : []);
      } catch {
        setResults([]);
      }
      setLoading(false);
      setSearched(true);
    }, 350);
    return () => clearTimeout(t);
  }, [query]);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8">
      <h3 className="text-lg font-semibold text-[#0F1B33]">Find your venue</h3>
      <p className="mt-1 text-sm text-gray-600">
        We&apos;ve mapped padel venues across Europe. Search by name or town —
        if yours is listed, claim it in a couple of taps.
      </p>

      <div className="relative mt-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. Padel Team Bristol, or a town"
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-[#0F1B33] outline-none transition-colors focus:border-[#F97316]"
          style={{ fontSize: "16px" }}
        />
        {loading && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#F97316] border-t-transparent" />
          </div>
        )}
      </div>

      {results.length > 0 && (
        <div className="mt-3 space-y-2">
          {results.map((v) => (
            <a
              key={v.venue_id}
              href={`${HUB_URL}/claim?venue=${v.venue_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-md border border-gray-200 px-4 py-3 transition-colors hover:border-[#F97316] hover:bg-orange-50/40"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[#0F1B33]">
                  {v.venue_name}
                </p>
                <p className="truncate text-xs text-gray-500">
                  {[v.full_address, v.city, v.postcode].filter(Boolean).join(", ")}
                </p>
              </div>
              <span className="ml-3 flex-shrink-0 text-xs font-semibold text-[#F97316] opacity-0 transition-opacity group-hover:opacity-100">
                Claim &rarr;
              </span>
            </a>
          ))}
        </div>
      )}

      {searched && !loading && results.length === 0 && query.trim().length >= 2 && (
        <div className="mt-4 rounded-md border border-gray-200 bg-gray-50 px-4 py-4 text-center">
          <p className="text-sm text-gray-600">
            Can&apos;t find your venue? You can add it in a minute.
          </p>
          <a
            href={`${HUB_URL}/onboarding`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-md bg-[#F97316] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Add your venue &rarr;
          </a>
        </div>
      )}
    </div>
  );
}
