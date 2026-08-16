import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="font-display text-5xl font-semibold tracking-tight">That page is not here.</h1>
      <p className="mt-4 text-mute">It may have moved. Try work, services, or just email me.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/" className="btn">
          Home
        </Link>
        <Link href="/services" className="btn-line">
          Services
        </Link>
        <a className="btn-line" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>
    </div>
  );
}
