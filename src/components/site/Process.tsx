import { PROCESS } from "@/content/site";
import { SheetMark } from "@/components/ui/Primitives";

/**
 * The one section where numbering is honestly sequential, so it gets the
 * oversized numerals. The rule running across the five stages is assembled
 * from each step's own top border, which keeps it continuous at every
 * breakpoint without absolute positioning; a tick at each station marks the
 * stage the way a dimension line marks a measurement.
 */
export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-[var(--header-h)] bg-graphite py-20 text-onDark sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-2">
            <SheetMark sheet={PROCESS.sheet} section={PROCESS.section} tone="dark" />
          </div>
          <h2 className="type-expanded mt-8 max-w-[16ch] h-display font-semibold uppercase text-chalk lg:col-span-10 lg:mt-0">
            {PROCESS.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <ol className="mt-14 lg:mt-24 lg:grid lg:grid-cols-5">
          {PROCESS.steps.map((step) => (
            <li
              key={step.n}
              className="relative border-t border-rule-dark pt-7 lg:pr-6 lg:pt-9 [&:not(:first-child)]:mt-10 lg:[&:not(:first-child)]:mt-0"
            >
              {/* Station tick, straddling the rule. */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-3.5 w-px -translate-y-1/2 bg-brass"
              />
              <span className="numeral block text-[clamp(3rem,9vw,5.5rem)] leading-[0.85] text-onDark/15">
                {step.n}
              </span>
              <h3 className="type-wide mt-5 text-[1.25rem] font-medium leading-tight text-chalk sm:text-[1.375rem]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[34ch] text-[0.9375rem] leading-[1.7] text-onDark-2">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
