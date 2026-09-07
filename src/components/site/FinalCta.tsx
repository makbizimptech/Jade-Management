import { FINAL_CTA, PHONE } from "@/content/site";
import { PrimaryCta, DimensionRule } from "@/components/ui/Primitives";

/**
 * Closing plate. The phone CTA renders only when a real number exists —
 * set PHONE in src/content/site.ts and it appears here and in the header.
 */
export function FinalCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-[var(--header-h)] bg-graphite py-24 text-onDark sm:py-32 lg:py-44"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-8">
            <h2 className="type-expanded text-[clamp(2.5rem,5.6vw,5.5rem)] font-semibold uppercase leading-[0.9] text-chalk">
              {FINAL_CTA.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="type-expanded mt-6 text-[clamp(1.5rem,4.4vw,3.25rem)] font-medium uppercase leading-[0.98] text-onDark/55 sm:mt-8">
              {FINAL_CTA.sub.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="mt-12 lg:col-span-4 lg:mt-0 lg:flex lg:flex-col lg:items-start lg:justify-end">
            <DimensionRule tone="dark" className="max-w-28" />
            <p className="mt-7 max-w-[36ch] text-[0.9375rem] leading-relaxed text-onDark-2 sm:text-base">
              Tell us what you are thinking of doing and where the house is. The
              first conversation costs nothing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryCta href="#contact">{FINAL_CTA.cta.label}</PrimaryCta>
              {PHONE && (
                <a
                  href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
                  className="annotation inline-flex min-h-12 items-center border border-onDark/35 px-7 py-4 text-onDark transition-colors duration-300 hover:border-onDark hover:bg-onDark hover:text-graphite"
                >
                  {PHONE}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
