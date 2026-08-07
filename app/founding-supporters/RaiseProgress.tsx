"use client";

import { useEffect, useState } from "react";

type RaiseData = {
  target: number;
  received: number;
  committed: number;
  supporters: number;
};

export default function RaiseProgress({
  raise,
  interest,
  interestCount,
}: {
  raise: RaiseData;
  interest: number;
  interestCount: number;
}) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const hasInterest = interest > 0;
  const total = raise.received + raise.committed + interest;
  const totalSupporters = raise.supporters + interestCount;
  const receivedPct = (raise.received / raise.target) * 100;
  const committedPct = (raise.committed / raise.target) * 100;
  const interestPct = hasInterest
    ? (interest / raise.target) * 100
    : 0;

  const fmt = (n: number) => "€" + n.toLocaleString("en-IE");

  // Determine which segment is last (for right border-radius)
  const lastSegment = hasInterest ? "interest" : "committed";

  return (
    <div className="mt-12 mb-12">
      {/* Headline figure */}
      <p className="text-3xl font-semibold text-foreground sm:text-4xl">
        {fmt(total)}{" "}
        <span className="text-gray-400 font-normal">
          of {fmt(raise.target)}
        </span>
      </p>

      {/* Caption */}
      <p className="mt-2 text-base text-gray-600">
        {fmt(raise.received)} received &middot; {fmt(raise.committed)} committed
        {hasInterest && (
          <>
            {" "}
            &middot; {fmt(interest)} registered interest
          </>
        )}
        {" "}
        &middot; {totalSupporters} founding supporter
        {totalSupporters !== 1 ? "s" : ""}
      </p>

      {/* Progress bar */}
      <div
        className="mt-6 flex h-3 w-full overflow-hidden rounded-full"
        style={{ backgroundColor: "rgba(11, 15, 18, 0.08)" }}
        role="progressbar"
        aria-valuenow={total}
        aria-valuemin={0}
        aria-valuemax={raise.target}
        aria-label={`${fmt(total)} of ${fmt(raise.target)} raised`}
      >
        {/* Received — solid teal */}
        <div
          className="h-full rounded-l-full bg-accent transition-[width] duration-1000 ease-out"
          style={{
            width: animated ? `${receivedPct}%` : "0%",
            borderRadius:
              lastSegment === "committed" || lastSegment === "interest"
                ? "9999px 0 0 9999px"
                : "9999px",
          }}
        />
        {/* Committed — teal 40%, solid border */}
        <div
          className="h-full transition-[width] duration-1000 ease-out"
          style={{
            width: animated ? `${committedPct}%` : "0%",
            backgroundColor: "rgba(14, 140, 127, 0.4)",
            borderTop: "1px solid #0E8C7F",
            borderBottom: "1px solid #0E8C7F",
            borderRight:
              committedPct > 0 && lastSegment === "committed"
                ? "1px solid #0E8C7F"
                : "none",
            borderRadius:
              lastSegment === "committed"
                ? receivedPct === 0
                  ? "9999px"
                  : "0 9999px 9999px 0"
                : "0",
          }}
        />
        {/* Interest — teal 15%, dashed border */}
        {hasInterest && (
          <div
            className="h-full transition-[width] duration-1000 ease-out"
            style={{
              width: animated ? `${interestPct}%` : "0%",
              backgroundColor: "rgba(14, 140, 127, 0.15)",
              borderTop: "1px dashed #0E8C7F",
              borderBottom: "1px dashed #0E8C7F",
              borderRight:
                interestPct > 0 ? "1px dashed #0E8C7F" : "none",
              borderRadius:
                receivedPct === 0 && committedPct === 0
                  ? "9999px"
                  : "0 9999px 9999px 0",
            }}
          />
        )}
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
        <span className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
          Received
        </span>
        <span className="flex items-center gap-2">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: "rgba(14, 140, 127, 0.4)",
              border: "1px solid #0E8C7F",
            }}
          />
          Committed
        </span>
        {hasInterest && (
          <span className="flex items-center gap-2">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: "rgba(14, 140, 127, 0.15)",
                border: "1px dashed #0E8C7F",
              }}
            />
            Registered interest
          </span>
        )}
      </div>

      {/* Social proof line */}
      <p className="mt-6 text-base text-gray-600">
        {hasInterest
          ? "Our first supporter came in at \u20AC4,000, followed by two of our board advisors \u2014 and others have since registered interest. You would not be the first."
          : "Our first supporter came in at \u20AC4,000, followed by two of our board advisors. You would not be the first."}
      </p>
    </div>
  );
}
