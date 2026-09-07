import { CAPABILITIES } from "@/content/site";
import { IMAGES, type ImageKey } from "@/content/images";
import { MediaSlot } from "@/components/ui/Primitives";
import { Section } from "@/components/ui/Section";

/**
 * Capabilities, not a portfolio. There is no completed-project photography
 * yet, so nothing here is presented as a finished client job — the note under
 * the heading says so, and the panels describe scope of work.
 *
 * Composition: two columns of unequal width, the right one dropped below the
 * left, each stacking its own panels. Built this way rather than as a grid
 * because a grid rows the panels together and leaves dead bands wherever a
 * 3:2 panel sits beside a 4:5 one. Here the columns interlock, and the
 * stagger comes from the offset and from varying the panel widths.
 */

type Panel = {
  key: string;
  title: string;
  caption: string;
  ratio: string;
  /** Width within its column — the second lever that keeps the stack uneven. */
  width: string;
  sizes: string;
};

const LEFT: readonly number[] = [0, 2];
const RIGHT: readonly number[] = [1, 3, 4];

const PANEL: Record<number, Pick<Panel, "ratio" | "width" | "sizes">> = {
  0: { ratio: "aspect-[4/5]", width: "w-full", sizes: "(min-width: 1024px) 42vw, 100vw" },
  1: { ratio: "aspect-[3/2]", width: "w-full", sizes: "(min-width: 1024px) 48vw, 100vw" },
  2: { ratio: "aspect-[4/5]", width: "w-full", sizes: "(min-width: 1024px) 42vw, 100vw" },
  3: { ratio: "aspect-[4/5]", width: "lg:ml-auto lg:w-[68%]", sizes: "(min-width: 1024px) 32vw, 100vw" },
  4: { ratio: "aspect-[3/2]", width: "w-full", sizes: "(min-width: 1024px) 48vw, 100vw" },
};

export function Capabilities() {
  const items = CAPABILITIES.items;

  const panel = (i: number) => {
    const item = items[i];
    const p = PANEL[i];
    return (
      <figure key={item.key} className={p.width}>
        <MediaSlot
          spec={IMAGES[item.key as ImageKey]}
          alt={item.caption}
          sizes={p.sizes}
          className={`w-full ${p.ratio}`}
        />
        <figcaption className="mt-4 flex items-baseline gap-4 border-t border-rule pt-4">
          <span className="annotation shrink-0 text-bronze">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>
            <span className="type-wide block text-[1.0625rem] font-medium leading-tight sm:text-lg">
              {item.title}
            </span>
            <span className="mt-1.5 block max-w-[42ch] text-[0.875rem] leading-relaxed text-ink-3">
              {item.caption}
            </span>
          </span>
        </figcaption>
      </figure>
    );
  };

  return (
    <Section
      id="capabilities"
      sheet={CAPABILITIES.sheet}
      section={CAPABILITIES.section}
      className="py-20 sm:py-28 lg:py-36"
    >
      <div className="lg:grid lg:grid-cols-10 lg:gap-x-10">
        <h2 className="type-expanded h-section font-semibold uppercase lg:col-span-5">
          {CAPABILITIES.heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-6 max-w-[54ch] text-[0.9375rem] leading-relaxed text-ink-3 lg:col-span-5 lg:mt-2 lg:self-end lg:text-base">
          {CAPABILITIES.note}
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-12 lg:mt-24 lg:flex-row lg:items-start lg:gap-10">
        <div className="flex flex-col gap-12 lg:w-[46%] lg:gap-20">
          {LEFT.map(panel)}
        </div>
        {/* The right column starts low; that offset is what breaks the row. */}
        <div className="flex flex-col gap-12 lg:mt-28 lg:w-[54%] lg:gap-20">
          {RIGHT.map(panel)}
        </div>
      </div>
    </Section>
  );
}
