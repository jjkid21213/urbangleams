import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">Urban Gleams</p>
          <p className="mt-3 max-w-xs text-sm text-mute">
            Custom websites for local businesses. {site.city}.
          </p>
        </div>
        <div className="text-sm">
          <p className="ug-kicker">Contact</p>
          <a className="mt-3 block hover:text-accent" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="mt-1 block font-semibold hover:text-accent" href={site.phoneHref}>
            {site.phone}
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm text-mute">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-ink">
            Terms
          </Link>
          <Link href="/checklist" className="hover:text-ink">
            Checklist
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-mute md:flex-row md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Urban Gleams. All rights reserved.</p>
          <p>ABN not listed yet.</p>
        </div>
      </div>
    </footer>
  );
}
