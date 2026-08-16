import Link from "next/link";
import { site } from "@/lib/site";

export function ShowcaseBar({ name }: { name: string }) {
  return (
    <div className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 border-b border-black/10 bg-[#16130f] px-4 py-1.5 text-[11px] text-[#f3eee4]">
      <span>
        Showcase by{" "}
        <Link href="/" className="underline underline-offset-2">
          Urban Gleams
        </Link>
        {" — "}
        {name} is not a real business
      </span>
      <a className="underline underline-offset-2" href={`mailto:${site.email}`}>
        {site.email}
      </a>
      <a className="underline underline-offset-2" href={site.phoneHref}>
        {site.phone}
      </a>
    </div>
  );
}
