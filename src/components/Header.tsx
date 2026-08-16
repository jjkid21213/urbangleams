"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="border-b border-line bg-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-sm md:px-8">
          <a className="font-medium text-mute transition-colors hover:text-ink" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="font-semibold text-ink transition-colors hover:text-accent" href={site.phoneHref}>
            {site.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-mute transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link href="/contact" className="btn text-sm">
            Book
          </Link>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="btn-line px-3 py-2 text-sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="flex flex-col gap-3 border-t border-line px-5 py-4 md:hidden">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn w-fit" onClick={() => setOpen(false)}>
            Book
          </Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.phoneHref}>{site.phone}</a>
        </nav>
      ) : null}
    </header>
  );
}
