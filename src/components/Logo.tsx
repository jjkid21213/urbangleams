import Link from "next/link";

export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const mark = size === "sm" ? "h-5 w-5" : "h-6 w-6";
  const type = size === "sm" ? "text-[0.95rem]" : "text-lg";

  return (
    <Link href="/" className="group flex items-center gap-2.5 text-paper">
      <svg
        className={`${mark} text-gleam`}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
      >
        <path
          d="M4 22 L14 6 L18 14 L28 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 4 h6 v6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className={`${type} font-medium tracking-tight`}>
        Urban{" "}
        <span className="font-serif font-normal italic text-gleam group-hover:text-gleam-bright transition-colors">
          Gleams
        </span>
      </span>
    </Link>
  );
}
