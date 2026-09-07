import Link from "next/link";
import { SERVICES } from "@/content/site";
import { IMAGES, type ImageKey } from "@/content/images";
import { MediaSlot, SheetMark } from "@/components/ui/Primitives";

/**
 * Services as an index of drawings rather than six cards: plate number in the
 * margin, name set large, and a plate that develops on the right when a row is
 * hovered. The reveal is CSS-only — no JavaScript is shipped for this section
 * — and it is suppressed below the large breakpoint, where a column of six
 * hover-only images would be dead weight.
 */
export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-[var(--header-h)] bg-graphite py-20 text-onDark sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-2">
            <SheetMark sheet="A-02" section="Services" tone="dark" />
          </div>

          <div className="mt-8 lg:col-span-10 lg:mt-0">
            <h2 className="type-expanded max-w-[16ch] h-display font-semibold uppercase text-chalk">
              Six ways we take on a house
            </h2>
            <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-onDark-2">
              Each of these is run the same way: one contractor accountable for
              the scope, the schedule and the site.
            </p>
          </div>
        </div>

        <ul className="mt-14 lg:mt-24">
          {SERVICES.map((service) => (
            <li key={service.n} className="relative">
              <Link
                href={service.href}
                className="group relative z-0 block border-t border-rule-dark py-7 transition-colors duration-500 hover:border-brass/60 focus-visible:border-brass/60 lg:py-9"
              >
                <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-10">
                  <span className="numeral block text-brass/60 transition-colors duration-500 group-hover:text-brass lg:col-span-2 lg:text-[2.75rem] lg:leading-none">
                    <span className="text-sm tracking-[0.12em] lg:hidden">{service.n}</span>
                    <span className="hidden lg:inline">{service.n}</span>
                  </span>

                  <div className="mt-3 lg:col-span-7 lg:mt-0">
                    {/* 3.3vw is measured, not guessed: the longest name,
                        "Bathroom Remodeling", sets 15.0x its font-size when
                        expanded, and the name track is ~0.5vw wide. This keeps
                        all six on one line from 1024px up, so the rows scan as
                        one list instead of one row wrapping by accident. */}
                    <h3 className="type-expanded text-[clamp(1.75rem,3.3vw,3.25rem)] font-medium uppercase leading-[1] text-chalk transition-transform duration-500 ease-out will-change-transform lg:group-hover:translate-x-3">
                      {service.name}
                    </h3>
                    <p className="mt-3 max-w-[46ch] text-[0.9375rem] leading-relaxed text-onDark-2 lg:mt-4 lg:text-base">
                      {service.blurb}
                    </p>
                  </div>

                  {/* Right-hand column is intentionally empty until hover. */}
                  <div className="hidden lg:col-span-3 lg:block" aria-hidden="true" />
                </div>
              </Link>

              {/*
                The plate. Sits outside the row's flow, pinned to the right of
                the section, and develops on hover of the row above it.
              */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/2 z-20 hidden w-[16rem] -translate-y-1/2 translate-x-6 opacity-0 blur-[2px] transition-[opacity,transform,filter] duration-500 ease-out lg:block xl:w-[19rem] [li:hover_&]:translate-x-0 [li:hover_&]:opacity-100 [li:hover_&]:blur-none [li:focus-within_&]:translate-x-0 [li:focus-within_&]:opacity-100 [li:focus-within_&]:blur-none"
              >
                <MediaSlot
                  spec={IMAGES[service.image as ImageKey]}
                  alt={service.name}
                  sizes="19rem"
                  tone="dark"
                  showBrief={false}
                  className="aspect-[4/5] w-full"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="border-t border-rule-dark" />
      </div>
    </section>
  );
}
