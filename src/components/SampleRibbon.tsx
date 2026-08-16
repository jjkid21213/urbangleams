import Link from "next/link";
import { site } from "@/lib/site";

export function SampleRibbon({ name }: { name: string }) {
  return (
    <div className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-2 bg-[#16130f] px-4 py-2 text-xs text-[#f3eee4]">
      <p>
        Showcase by Urban Gleams — {name} is a concept, not a live business.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/work" className="underline underline-offset-2">
          All samples
        </Link>
        <a href={`mailto:${site.email}`} className="underline underline-offset-2">
          {site.email}
        </a>
        <a href={site.phoneHref} className="underline underline-offset-2">
          {site.phone}
        </a>
      </div>
    </div>
  );
}
