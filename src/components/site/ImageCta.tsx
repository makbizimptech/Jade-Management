import { IMAGE_CTA } from "@/content/site";
import { IMAGES } from "@/content/images";
import { MediaSlot, PrimaryCta } from "@/components/ui/Primitives";

/**
 * Full-bleed image break. The headline sits low-left over the quiet third of
 * the frame; the scrim is weighted the same way as the hero so the two
 * full-width media moments on the page feel like one treatment.
 */
export function ImageCta() {
  return (
    <section className="relative isolate min-h-[30rem] w-full overflow-hidden bg-graphite lg:min-h-[42rem]">
      <MediaSlot
        spec={IMAGES.ctaBanner}
        alt="A finished interior with depth and daylight."
        sizes="100vw"
        tone="dark"
        showBrief={false}
        className="absolute inset-0 -z-10 h-full w-full border-0"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(15,13,10,0.9)_0%,rgba(15,13,10,0.62)_40%,rgba(15,13,10,0.22)_78%,rgba(15,13,10,0.1)_100%)]"
      />

      <div className="mx-auto flex min-h-[30rem] w-full max-w-[112rem] items-end px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[42rem] lg:px-12 lg:py-24">
        <div className="max-w-[52rem]">
          <h2 className="type-expanded text-[clamp(2.25rem,5.6vw,4.25rem)] font-semibold uppercase leading-[0.94] text-chalk">
            {IMAGE_CTA.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/*
            The second statement answers the first, so it is set apart by scale
            and a rule rather than by tinting one phrase a different colour.
          */}
          <div className="mt-8 flex flex-col gap-6 border-t border-onDark/25 pt-7 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
            <p className="type-expanded text-[clamp(1.25rem,3vw,2rem)] font-medium uppercase leading-none text-chalk">
              {IMAGE_CTA.emphasis}
            </p>
            <PrimaryCta href={IMAGE_CTA.cta.href} className="shrink-0">
              {IMAGE_CTA.cta.label}
            </PrimaryCta>
          </div>
        </div>
      </div>
    </section>
  );
}
