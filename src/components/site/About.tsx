import { ABOUT } from "@/content/site";
import { IMAGES } from "@/content/images";
import { MediaSlot, DimensionRule } from "@/components/ui/Primitives";
import { Section } from "@/components/ui/Section";

/**
 * Editorial About. The headline sets across the full content column, then the
 * text drops into a narrow measure on the left while the primary image runs
 * off the right edge of the viewport — the asymmetry is in the bleed, not in
 * an arbitrary column split.
 */
export function About() {
  return (
    <Section
      id="about"
      sheet={ABOUT.sheet}
      section={ABOUT.section}
      className="pt-20 sm:pt-28 lg:pt-36"
    >
      <h2 className="type-expanded max-w-[18ch] h-display font-semibold uppercase">
        {ABOUT.heading.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>

      <div className="mt-12 grid gap-x-10 gap-y-12 lg:mt-20 lg:grid-cols-10">
        <div className="lg:col-span-5 xl:col-span-4">
          <p className="font-[family-name:var(--font-prose)] text-[1.3125rem] leading-[1.55] text-ink sm:text-[1.4375rem]">
            {ABOUT.lead}
          </p>

          <DimensionRule className="my-9 max-w-24" />

          <div className="space-y-6 text-[1.0625rem] leading-[1.7] text-ink-2">
            {ABOUT.body.map((p) => (
              <p key={p.slice(0, 24)} className="max-w-[58ch]">
                {p}
              </p>
            ))}
          </div>

          {/* Detail shot, offset below the text so the column ends unevenly. */}
          <MediaSlot
            spec={IMAGES.aboutDetail}
            alt="Close detail of finished carpentry."
            sizes="(min-width: 1024px) 22rem, 60vw"
            className="mt-12 aspect-square w-full max-w-[19rem]"
          />
        </div>

        {/*
          Primary image. On large screens it breaks the container and runs to
          the right edge of the screen; the negative margin is clamped by the
          body's overflow-x: clip so it can never create a scrollbar.
        */}
        <div className="lg:col-span-5 xl:col-span-6">
          <MediaSlot
            spec={IMAGES.aboutPrimary}
            alt="Renovation work in progress inside an occupied home."
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="aspect-[4/5] w-full lg:-mr-[calc(max(0px,(100vw-112rem)/2)+3rem)] lg:aspect-[4/5.2] lg:h-full"
          />
        </div>
      </div>
    </Section>
  );
}
