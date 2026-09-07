import Link from "next/link";
import {
  FOOTER,
  NAV,
  PHONE,
  SERVICES,
  SERVICE_AREAS,
  TODO,
} from "@/content/site";

/**
 * Footer. Every factual field the contractor has not supplied is a visible
 * TODO rather than a plausible-looking invention.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule-dark bg-slate text-onDark">
      <div className="mx-auto w-full max-w-[112rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
          {/* Identity */}
          <div className="lg:col-span-4">
            <span className="type-expanded block text-[1.125rem] font-semibold uppercase leading-none text-chalk">
              {TODO.companyName}
            </span>
            <p className="mt-5 max-w-[38ch] text-[0.9375rem] leading-relaxed text-onDark-2">
              {FOOTER.description}
            </p>
            <Link
              href="#contact"
              className="annotation mt-8 inline-flex min-h-12 items-center border border-brass/60 px-6 text-brass transition-colors duration-300 hover:bg-brass hover:text-graphite"
            >
              Get a Free Estimate
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:col-span-8">
            <FooterColumn title="Services">
              {SERVICES.map((s) => (
                <FooterLink key={s.n} href={s.href}>
                  {s.name}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Company">
              {FOOTER.companyLinks.map((l) => (
                <FooterLink key={l.label} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
              {NAV.filter((n) => n.label === "Service Areas").map((l) => (
                <FooterLink key={l.label} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Service Areas">
              {SERVICE_AREAS.slice(0, 6).map((a) =>
                a.slug ? (
                  <FooterLink key={a.name} href={`/service-areas/${a.slug}`}>
                    {a.name}
                  </FooterLink>
                ) : (
                  <li key={a.name} className="text-[0.9375rem] leading-relaxed text-onDark-2/60">
                    {a.name}
                  </li>
                ),
              )}
            </FooterColumn>

            <FooterColumn title="Contact">
              <li className="text-[0.9375rem] leading-relaxed text-onDark-2/60">
                {PHONE ?? TODO.phone}
              </li>
              <li className="text-[0.9375rem] leading-relaxed text-onDark-2/60">
                {TODO.email}
              </li>
              <li className="text-[0.9375rem] leading-relaxed text-onDark-2/60">
                {TODO.address}
              </li>
              <li className="mt-4 text-[0.9375rem] leading-relaxed text-onDark-2/60">
                {TODO.license}
              </li>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-rule-dark pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="annotation text-onDark-2/70">
            © {year} {TODO.companyName}. All rights reserved.
          </p>
          <nav aria-label="Legal">
            {/* TODO — create /privacy before launch. */}
            <Link
              href="/privacy"
              className="annotation text-onDark-2/70 transition-colors duration-300 hover:text-onDark"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="annotation border-b border-rule-dark pb-3 text-brass/80">{title}</h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="inline-block py-1 text-[0.9375rem] leading-relaxed text-onDark-2 transition-colors duration-300 hover:text-chalk"
      >
        {children}
      </Link>
    </li>
  );
}
