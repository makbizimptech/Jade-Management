"use client";

import { useEffect, useRef, useState } from "react";
import { HERO } from "@/content/site";
import { IMAGES, src as imageSrc } from "@/content/images";
import { PrimaryCta, SecondaryCta } from "@/components/ui/Primitives";

/**
 * Full-bleed background video hero.
 *
 * Loading strategy: the <video> element is rendered immediately at a fixed
 * 100svh box (so there is no layout shift), but its `src` is only attached
 * after first paint, during idle time. That keeps a 5.4 MB asset from
 * competing with the fonts and markup for the initial load, while the
 * graphite plate underneath means the hero is never empty or flashing.
 *
 * Reduced motion: instead of dropping to a blank plate, the video is still
 * loaded but held paused on a frame a second in, so those visitors get a real
 * still from the actual footage rather than a placeholder.
 */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [srcAttached, setSrcAttached] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const attach = () => setSrcAttached(true);
    const idle: typeof window.requestIdleCallback | undefined =
      window.requestIdleCallback;

    if (idle) {
      const id = idle(attach, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }

    const id = window.setTimeout(attach, 300);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !srcAttached) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onLoaded = () => {
      setReady(true);
      if (reduced) {
        // Hold a representative frame rather than animating. pause() is
        // explicit because a media element can begin playing the moment it
        // has data, before this handler gets a chance to decide.
        video.pause();
        try {
          video.currentTime = Math.min(1, video.duration || 1);
        } catch {
          /* seeking unsupported — the first frame stands in */
        }
        return;
      }
      void video.play().catch(() => {
        /* autoplay refused; the still frame remains, which is acceptable */
      });
    };

    video.addEventListener("loadeddata", onLoaded);
    return () => video.removeEventListener("loadeddata", onLoaded);
  }, [srcAttached]);

  const poster = IMAGES.heroPoster;

  return (
    <section className="relative isolate min-h-[36rem] w-full overflow-hidden bg-graphite h-[100svh] lg:h-screen">
      {/* Media plane */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          className={`h-full w-full object-cover object-[62%_center] transition-opacity duration-1000 sm:object-center ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="metadata"
          // Deliberately not `autoPlay`: the attribute starts playback as soon
          // as data arrives, which overrides the reduced-motion decision below.
          // Playback is started from the loadeddata handler instead.
          // TODO — supply /public/images/hero-poster.webp (see IMAGE-ASSETS.md).
          // Until it exists the graphite plate below covers the load, so no
          // broken-poster request is made.
          poster={poster.available ? imageSrc(poster) : undefined}
          aria-hidden="true"
          tabIndex={-1}
          // Set as an attribute rather than a <source> child: assigning src to
          // a live media element re-runs the load algorithm, whereas appending
          // a <source> to an element that already gave up does not.
          src={srcAttached ? "/videos/hero-contractor.mp4" : undefined}
        />
      </div>

      {/*
        Cinematic grade, built from four passes rather than one flat scrim so
        the footage stays legible as footage.

        The diagonal is the desktop pass: heavy where the type sits, close to
        clear by the right edge. On narrow screens that diagonal protects
        almost nothing — the text runs the full width — so a bottom-weighted
        vertical pass carries mobile instead and is dialled back on large
        screens. A short top pass keeps the navigation readable over bright
        footage, and a warm cast ties the video to the palette.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(104deg,rgba(15,13,10,0.74)_0%,rgba(15,13,10,0.52)_34%,rgba(15,13,10,0.18)_64%,rgba(15,13,10,0.04)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[72%] bg-[linear-gradient(to_top,rgba(15,13,10,0.86)_0%,rgba(15,13,10,0.52)_38%,transparent_100%)] lg:h-2/5 lg:bg-[linear-gradient(to_top,rgba(15,13,10,0.6),transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[calc(var(--header-h)+3rem)] bg-[linear-gradient(to_bottom,rgba(15,13,10,0.72),transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#3a2c18] mix-blend-soft-light opacity-25"
      />

      {/* Content — held left, never centred. */}
      <div className="mx-auto flex h-full w-full max-w-[112rem] flex-col justify-end px-5 pb-20 pt-[calc(var(--header-h)+2rem)] sm:px-8 sm:pb-24 lg:justify-center lg:px-12 lg:pb-0">
        <div className="max-w-[54rem] lg:max-w-[82%] xl:max-w-[72rem]">
          <div
            className="flex items-center gap-4"
            style={{ animation: "rise 700ms cubic-bezier(0.22,1,0.36,1) both" }}
          >
            <span className="h-px w-8 bg-brass sm:w-12" aria-hidden="true" />
            <p className="annotation text-brass">{HERO.eyebrow}</p>
          </div>

          <h1
            /* Sized so each sentence holds one line from 1024px up; below that
               it breaks naturally rather than being forced. */
            className="type-expanded mt-6 text-[clamp(2.5rem,6.4vw,6rem)] font-semibold uppercase leading-[0.92] text-chalk sm:mt-8"
            style={{ animation: "rise 900ms cubic-bezier(0.22,1,0.36,1) 120ms both" }}
          >
            {HERO.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p
            className="mt-7 max-w-[46ch] text-[1.0625rem] leading-relaxed text-onDark/85 sm:mt-9 sm:text-lg"
            style={{ animation: "rise 900ms cubic-bezier(0.22,1,0.36,1) 260ms both" }}
          >
            {HERO.supporting}
          </p>

          <div
            className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-4"
            style={{ animation: "rise 900ms cubic-bezier(0.22,1,0.36,1) 380ms both" }}
          >
            <PrimaryCta href={HERO.primaryCta.href}>{HERO.primaryCta.label}</PrimaryCta>
            <SecondaryCta href={HERO.secondaryCta.href} tone="dark">
              {HERO.secondaryCta.label}
            </SecondaryCta>
          </div>
        </div>
      </div>

      {/* Scroll cue — a plumb line, set in the margin rather than centred. */}
      <div
        className="pointer-events-none absolute bottom-7 right-5 hidden items-center gap-3 sm:right-8 lg:right-12 lg:flex"
        aria-hidden="true"
      >
        <span className="annotation text-onDark/50">Scroll</span>
        <span className="relative block h-10 w-px bg-onDark/25">
          <span
            className="absolute left-0 top-0 block h-3 w-px bg-brass"
            style={{ animation: "plumb 2.8s ease-in-out infinite" }}
          />
        </span>
      </div>
    </section>
  );
}
