import { TRUST } from "@/content/site";

/**
 * Trust strip. Typography and hairlines only — no icon cards, and no fact
 * that has not been supplied. Every value here is a placeholder on purpose.
 */
export function TrustStrip() {
  return (
    <section
      aria-label="Company credentials"
      className="border-b border-rule bg-chalk"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {TRUST.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-2.5 py-7 lg:py-9 ${
                i % 2 === 1 ? "border-l border-rule pl-5 sm:pl-8" : "pr-5"
              } ${i > 1 ? "border-t border-rule lg:border-t-0" : ""} ${
                i > 0 ? "lg:border-l lg:pl-8" : ""
              }`}
            >
              <dt className="annotation text-ink-3">{item.label}</dt>
              <dd className="type-wide text-[0.9375rem] font-medium leading-snug text-ink-2 sm:text-base">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
