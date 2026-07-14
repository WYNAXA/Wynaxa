"use client";

import { useEffect, useRef, useState } from "react";

/* ---------------------------------------------------------------------------
 * AmbientVideo
 *
 * A silent, looping background video used as a still image would be.
 * It is atmosphere, never content — nothing the user needs is only in here.
 *
 * - Always muted + playsInline: iOS will not autoplay otherwise.
 * - Poster paints immediately, so the slot is never blank while the video
 *   streams in.
 * - If the user has "reduce motion" turned on, we never load or play the
 *   video at all — they get the poster image and that is the finished state,
 *   not a degraded one.
 * ------------------------------------------------------------------------- */

type AmbientVideoProps = {
  /** Path to the .mp4 in /public, e.g. "/padel-court-loop.mp4" */
  src: string;
  /** Path to the poster .jpg in /public */
  poster: string;
  /** Describe what is shown, for people who cannot see it. */
  alt: string;
  className?: string;
};

export default function AmbientVideo({
  src,
  poster,
  alt,
  className = "",
}: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => setMotionAllowed(!query.matches);
    apply();

    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  // Reduced motion, or before hydration: the poster is the whole experience.
  if (!motionAllowed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={poster}
        alt={alt}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      aria-label={alt}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
