"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="border-b border-line bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-sm md:px-8">
          <a className="font-medium underline-offset-2 hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="font-semibold underline-offset-2 hover:underline" href={site.phoneHref}>
            {site.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-mute transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn text-sm">
            Book
          </Link>
        </nav>
        <button
          type="button"
          className="text-sm text-mute md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav className="flex flex-col gap-3 border-t border-line px-5 py-4 md:hidden">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.phoneHref}>{site.phone}</a>
        </nav>
      ) : null}
    </header>
  );
}
