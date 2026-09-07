import { SheetMark } from "./Primitives";

/**
 * The page's structural grid: a narrow left rail carrying the sheet marker,
 * and a wide content column beside it. The rail is what makes the layout
 * asymmetric on purpose rather than by accident, and it collapses to a single
 * inline label below the large breakpoint.
 */
export function Section({
  id,
  sheet,
  section,
  tone = "light",
  className = "",
  contentClassName = "",
  children,
}: {
  id?: string;
  sheet?: string;
  section?: string;
  tone?: "light" | "dark";
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-[var(--header-h)] ${
        tone === "dark" ? "bg-graphite text-onDark" : "bg-gypsum text-ink"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-10">
          {sheet && section ? (
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)]">
                <SheetMark sheet={sheet} section={section} tone={tone} />
              </div>
            </div>
          ) : null}
          <div
            className={`${sheet && section ? "lg:col-span-10" : "lg:col-span-12"} ${contentClassName}`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
