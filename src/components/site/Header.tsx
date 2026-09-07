"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV, TODO, PHONE } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-rule-dark/60 bg-graphite/92 backdrop-blur-sm supports-[backdrop-filter]:bg-graphite/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] w-full max-w-[112rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        {/* Wordmark. TODO — replace with the real company name or a logo file. */}
        <Link
          href="/"
          className="group flex items-baseline gap-2.5 text-onDark"
          aria-label="Home"
        >
          <span className="type-expanded text-[1.0625rem] font-semibold uppercase leading-none tracking-[0.02em] sm:text-[1.1875rem]">
            {TODO.companyName}
          </span>
          <span
            aria-hidden="true"
            className="hidden h-3 w-px bg-brass/70 sm:block"
          />
          <span className="annotation hidden text-brass/80 sm:block">Est. TODO</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="annotation group relative py-2 text-onDark/75 transition-colors duration-300 hover:text-onDark"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {PHONE && (
            <a
              href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
              className="annotation hidden text-onDark/75 transition-colors hover:text-onDark xl:block"
            >
              {PHONE}
            </a>
          )}
          <Link
            href="#contact"
            className="annotation hidden min-h-11 items-center border border-brass/60 px-5 text-brass transition-colors duration-300 hover:bg-brass hover:text-graphite sm:inline-flex"
          >
            Get a Free Estimate
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="-mr-2 inline-flex h-12 w-12 items-center justify-center text-onDark lg:hidden"
          >
            <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-50 bg-graphite transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-[var(--header-h)] items-center justify-between px-5 sm:px-8">
          <span className="type-expanded text-[1.0625rem] font-semibold uppercase leading-none text-onDark">
            {TODO.companyName}
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="-mr-2 inline-flex h-12 w-12 items-center justify-center text-onDark"
          >
            <X size={22} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <nav className="mt-6 px-5 sm:px-8" aria-label="Mobile">
          <ul>
            {NAV.map((item, i) => (
              <li key={item.label} className="border-t border-rule-dark">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-5"
                >
                  <span className="annotation w-6 shrink-0 text-brass/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="type-wide text-2xl font-medium text-onDark">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="annotation mt-8 flex min-h-14 items-center justify-center bg-bronze px-6 text-chalk"
          >
            Get a Free Estimate
          </Link>

          {PHONE && (
            <a
              href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
              className="annotation mt-4 flex min-h-12 items-center justify-center text-onDark-2"
            >
              {PHONE}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
