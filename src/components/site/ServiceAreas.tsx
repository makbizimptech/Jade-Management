import Link from "next/link";
import { SERVICE_AREAS } from "@/content/site";
import { Section } from "@/components/ui/Section";

/**
 * Service areas. No city is invented — every entry is a placeholder until the
 * real list is supplied. Each entry carries an optional `slug`: give it one
 * and the name becomes a link to /service-areas/[slug], so the city pages can
 * be added later without touching this component.
 */
export function ServiceAreas() {
  return (
    <Section
      id="service-areas"
      sheet="A-07"
      section="Service Areas"
      className="border-t border-rule bg-chalk! py-20 sm:py-28 lg:py-36"
    >
      <div className="lg:grid lg:grid-cols-10 lg:gap-x-10">
        <div className="lg:col-span-4">
          <h2 className="type-expanded h-narrow font-semibold uppercase">
            Where
            <span className="block">we work</span>
          </h2>
          <p className="mt-6 max-w-[38ch] text-[0.9375rem] leading-relaxed text-ink-3 sm:text-base">
            The cities and counties served have not been confirmed yet. Supply
            the list and each one becomes its own page.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:col-span-6 lg:mt-0">
          {SERVICE_AREAS.map((area, i) => {
            const inner = (
              <>
                <span className="annotation w-7 shrink-0 text-bronze/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="type-wide text-[1.125rem] font-medium leading-tight sm:text-[1.25rem]">
                  {area.name}
                </span>
              </>
            );

            return (
              <li key={area.name} className="border-t border-rule last:border-b sm:[&:nth-last-child(2)]:border-b">
                {area.slug ? (
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="group flex min-h-14 items-baseline gap-4 py-5 transition-colors duration-300 hover:text-bronze"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="flex min-h-14 items-baseline gap-4 py-5 text-ink-3">
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
