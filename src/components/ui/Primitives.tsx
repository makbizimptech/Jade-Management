import Image from "next/image";
import Link from "next/link";
import type { ImageSpec } from "@/content/images";
import { src as imageSrc } from "@/content/images";

/* ---------------------------------------------------------------------------
   SheetMark
   The section label, borrowed from a drawing sheet's title block. It sits in
   the left margin rail beside a heading rather than stacking above it as an
   eyebrow, so it reads as an index rather than decoration.
--------------------------------------------------------------------------- */
export function SheetMark({
  sheet,
  section,
  tone = "light",
  className = "",
}: {
  sheet: string;
  section: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const line = tone === "dark" ? "border-rule-dark" : "border-rule";
  const text = tone === "dark" ? "text-onDark-2" : "text-ink-3";
  const key = tone === "dark" ? "text-brass" : "text-bronze";

  return (
    <div className={`flex items-center gap-3 lg:block ${className}`}>
      <span className={`annotation lg:mt-3 lg:block ${text}`}>{section}</span>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   DimensionRule
   A hairline terminated by short perpendicular ticks — the way a dimension is
   drawn on a construction document. Used sparingly to measure out a section,
   never as generic decoration.
--------------------------------------------------------------------------- */
export function DimensionRule({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const c = tone === "dark" ? "bg-rule-dark" : "bg-rule";
  return (
    <div className={`relative h-2 w-full ${className}`} aria-hidden="true">
      <span className={`absolute left-0 top-0 h-2 w-px ${c}`} />
      <span className={`absolute left-0 right-0 top-1 h-px ${c}`} />
      <span className={`absolute right-0 top-0 h-2 w-px ${c}`} />
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Buttons
   Square, bordered, no arrow glyph appended to the label. The primary action
   fills; the secondary is a rule that fills on interaction.
--------------------------------------------------------------------------- */
type CtaProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function PrimaryCta({ href, children, className = "" }: CtaProps) {
  return (
    <Link
      href={href}
      className={`annotation inline-flex min-h-12 items-center justify-center bg-bronze px-7 py-4 text-chalk transition-colors duration-300 hover:bg-graphite focus-visible:bg-graphite ${className}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryCta({
  href,
  children,
  tone = "light",
  className = "",
}: CtaProps & { tone?: "light" | "dark" }) {
  const styles =
    tone === "dark"
      ? "border-onDark/40 text-onDark hover:border-onDark hover:bg-onDark hover:text-graphite"
      : "border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-chalk";
  return (
    <Link
      href={href}
      className={`annotation inline-flex min-h-12 items-center justify-center border px-7 py-4 transition-colors duration-300 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

/* ---------------------------------------------------------------------------
   MediaSlot
   Renders a real photograph once one exists, and a documented placeholder
   until then. The placeholder uses the drawing convention for "material to be
   specified" — a fine diagonal hatch — and prints the exact filename, size and
   brief, so an empty slot is a work order rather than a broken image.
--------------------------------------------------------------------------- */
export function MediaSlot({
  spec,
  alt,
  sizes,
  priority = false,
  tone = "light",
  className = "",
  showBrief = true,
}: {
  spec: ImageSpec;
  alt: string;
  sizes: string;
  priority?: boolean;
  tone?: "light" | "dark";
  className?: string;
  showBrief?: boolean;
}) {
  if (spec.available) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={imageSrc(spec)}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  const shell =
    tone === "dark"
      ? "bg-slate text-onDark-2 border-rule-dark hatch-dark"
      : "bg-chalk text-ink-3 border-rule hatch";

  return (
    <div
      className={`relative overflow-hidden border ${shell} ${className}`}
      role="img"
      aria-label={`Image placeholder. ${alt}`}
    >
      {/* Corner ticks: a registration mark, so the empty slot still reads as set out. */}
      <span
        aria-hidden="true"
        className={`absolute left-3 top-3 h-3 w-3 border-l border-t ${
          tone === "dark" ? "border-brass/50" : "border-bronze/50"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute bottom-3 right-3 h-3 w-3 border-b border-r ${
          tone === "dark" ? "border-brass/50" : "border-bronze/50"
        }`}
      />

      {showBrief && (
        <div className="absolute inset-0 flex flex-col justify-end gap-2 p-4 sm:p-5">
          <span className={`annotation ${tone === "dark" ? "text-brass" : "text-bronze"}`}>
            {spec.file}
          </span>
          <span className="annotation opacity-70">
            {spec.width}×{spec.height} · {spec.ratio}
          </span>
          <p className="max-w-[46ch] text-[0.8125rem] leading-snug opacity-70">
            {spec.description}
          </p>
        </div>
      )}
    </div>
  );
}
