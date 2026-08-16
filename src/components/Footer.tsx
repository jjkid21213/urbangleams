import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <Logo size="sm" />
          <p className="mt-3 max-w-xs text-sm text-mute">
            High-converting sites for urban local businesses. {site.city}.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-mute">
          <a className="hover:text-paper" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <Link className="hover:text-paper" href="/contact">
            Book 15 minutes
          </Link>
        </div>
      </div>
    </footer>
  );
}
