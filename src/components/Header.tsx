"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-mute transition-colors hover:text-paper"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gleam text-sm">
            Book a call
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden text-sm text-mute"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav className="flex flex-col gap-4 border-t border-line px-5 py-5 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-paper"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gleam w-fit text-sm" onClick={() => setOpen(false)}>
            Book a call
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
