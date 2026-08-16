import Link from "next/link";

export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const type = size === "sm" ? "text-[0.95rem]" : "text-[1.05rem]";

  return (
    <Link href="/" className={`font-display font-semibold tracking-tight text-ink ${type}`}>
      Urban Gleams
    </Link>
  );
}
