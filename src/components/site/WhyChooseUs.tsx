import { WHY } from "@/content/site";
import { Section } from "@/components/ui/Section";

/**
 * Typography only. The heading holds its position on the left while the list
 * scrolls past it, so the section reads as one argument rather than five
 * separate claims — and nothing here promises an outcome we cannot support.
 */
export function WhyChooseUs() {
  return (
    <Section
      id="why"
      sheet={WHY.sheet}
      section={WHY.section}
      className="border-t border-rule bg-chalk! py-20 sm:py-28 lg:py-36"
    >
      <div className="lg:grid lg:grid-cols-10 lg:gap-x-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)]">
            <h2 className="type-expanded h-narrow font-semibold uppercase">
              {WHY.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-[34ch] font-[family-name:var(--font-prose)] text-lg leading-[1.6] text-ink-2 sm:text-xl">
              {WHY.lead}
            </p>
          </div>
        </div>

        <ol className="mt-12 lg:col-span-6 lg:mt-0">
          {WHY.items.map((item) => (
            <li
              key={item.n}
              className="group grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-rule py-7 last:border-b sm:grid-cols-[4rem_1fr] sm:gap-x-6 sm:py-9"
            >
              <span className="numeral pt-1 text-[1.125rem] leading-none text-bronze sm:text-[1.5rem]">
                {item.n}
              </span>
              <div>
                <h3 className="type-wide text-[1.375rem] font-medium leading-tight sm:text-[1.625rem]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[54ch] text-[0.9375rem] leading-[1.7] text-ink-2 sm:text-base">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
