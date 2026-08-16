import Link from "next/link";

export function ShowcaseBar({ name }: { name: string }) {
  return (
    <div className="sticky top-0 z-50 border-b border-black/10 bg-[#16130f] px-4 py-1.5 text-center text-[11px] text-[#f3eee4]">
      Showcase concept by{" "}
      <Link href="/" className="underline underline-offset-2">
        Urban Gleams
      </Link>
      {" — "}
      {name} is not a real business
    </div>
  );
}
