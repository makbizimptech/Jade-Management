import { Plus } from "lucide-react";
import { FAQ } from "@/content/site";
import { Section } from "@/components/ui/Section";

/**
 * Native <details> elements: keyboard-operable and screen-reader-correct with
 * no JavaScript shipped. Browsers that support ::details-content animate the
 * panel open (see globals.css); the rest simply reveal it, which is fine.
 */
export function Faq() {
  return (
    <Section id="faq" sheet="A-08" section="Questions" className="py-20 sm:py-28 lg:py-36">
      <div className="lg:grid lg:grid-cols-10 lg:gap-x-10">
        {/* Track widened and the heading sized down: "QUESTIONS" set expanded
            needs the room, and this heading does not need to compete with the
            section headings that carry an image. */}
        <div className="lg:col-span-4">
          <h2 className="type-expanded h-narrow font-semibold uppercase lg:sticky lg:top-[calc(var(--header-h)+3rem)]">
            Common
            <span className="block">questions</span>
          </h2>
        </div>

        <div className="mt-10 lg:col-span-6 lg:mt-0">
          {FAQ.map((item) => (
            <details key={item.q} name="faq" className="group border-t border-rule last:border-b">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 sm:py-7">
                <h3 className="type-wide max-w-[36ch] text-[1.125rem] font-medium leading-snug transition-colors duration-300 group-hover:text-bronze sm:text-[1.3125rem]">
                  {item.q}
                </h3>
                <Plus
                  size={20}
                  strokeWidth={1.25}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-bronze transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <div className="faq-panel">
                <p className="max-w-[62ch] pb-7 font-[family-name:var(--font-prose)] text-[1.0625rem] leading-[1.65] text-ink-2 sm:text-[1.125rem]">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
