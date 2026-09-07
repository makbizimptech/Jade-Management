import { TESTIMONIALS } from "@/content/site";
import { Section } from "@/components/ui/Section";

/**
 * No review has been supplied, so none is written. Rather than filling the
 * section with invented praise, each slot is presented as an open reservation
 * with the shape the real quote will take. Fill in `quote`, `attribution` and
 * `project` in src/content/site.ts and the slot renders as a finished
 * testimonial with no other change.
 */
export function Testimonials() {
  const anyFilled = TESTIMONIALS.some((t) => t.quote);

  return (
    <Section
      id="testimonials"
      sheet="A-06"
      section="Client Words"
      className="py-20 sm:py-28 lg:py-36"
    >
      <div className="lg:grid lg:grid-cols-10 lg:gap-x-10">
        <h2 className="type-expanded h-section font-semibold uppercase lg:col-span-5">
          In their
          <span className="block">own words</span>
        </h2>
        {!anyFilled && (
          <p className="mt-6 max-w-[48ch] text-[0.9375rem] leading-relaxed text-ink-3 lg:col-span-5 lg:mt-2 lg:self-end lg:text-base">
            {/* Visible, honest empty state — not a claim, and not filler. */}
            Reviews will appear here once clients have supplied them. Nothing in
            this section is placeholder praise.
          </p>
        )}
      </div>

      <ul className="mt-12 grid gap-x-6 gap-y-10 lg:mt-20 lg:grid-cols-3">
        {TESTIMONIALS.map((t) =>
          t.quote ? (
            <li key={t.id} className="border-t border-rule pt-7">
              <figure className="flex h-full flex-col">
                <blockquote className="font-[family-name:var(--font-prose)] text-[1.1875rem] leading-[1.6] text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-baseline gap-3 pt-4">
                  <span className="annotation text-bronze">{t.id}</span>
                  <span>
                    <span className="type-wide block text-[0.9375rem] font-medium">
                      {t.attribution}
                    </span>
                    {t.project && (
                      <span className="annotation mt-1.5 block text-ink-3">{t.project}</span>
                    )}
                  </span>
                </figcaption>
              </figure>
            </li>
          ) : (
            <li
              key={t.id}
              className="flex min-h-[16rem] flex-col justify-between border border-dashed border-rule bg-chalk p-6 sm:p-7"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="annotation text-bronze">Slot {t.id}</span>
                <span className="annotation text-ink-3/70">Awaiting review</span>
              </div>
              {/* Type-height rules stand in for the shape of the quote to come. */}
              <div aria-hidden="true" className="mt-8 space-y-3">
                <span className="block h-px w-full bg-rule" />
                <span className="block h-px w-[92%] bg-rule" />
                <span className="block h-px w-[78%] bg-rule" />
              </div>
              <p className="mt-8 text-[0.8125rem] leading-relaxed text-ink-3">
                Add the client quote, name and project type in{" "}
                {/* Not `annotation` — that utility uppercases, and a file path
                    must survive verbatim. */}
                <code className="font-mono text-[0.8125rem] normal-case tracking-normal text-bronze">
                  src/content/site.ts
                </code>
                .
              </p>
            </li>
          ),
        )}
      </ul>
    </Section>
  );
}
