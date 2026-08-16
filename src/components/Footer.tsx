import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="text-paper">
            <span className="font-display text-lg font-semibold">Urban Gleams</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-paper/70">
            Custom websites for local businesses. {site.city}.
          </p>
        </div>
        <div className="text-sm">
          <p className="text-paper/50">Contact</p>
          <a className="mt-2 block hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="mt-1 block hover:underline" href={site.phoneHref}>
            {site.phone}
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <Link href="/checklist" className="hover:underline">
            Checklist
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-paper/50 md:flex-row md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Urban Gleams. All rights reserved.</p>
          <p>ABN not listed yet.</p>
        </div>
      </div>
    </footer>
  );
}
