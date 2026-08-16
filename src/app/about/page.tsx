import type { Metadata } from "next";
import { CtaBar } from "@/components/CtaBar";
import { aboutBody } from "@/lib/about";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "I’m Justin. Urban Gleams is me, in Australia. Custom sites so people can find you and get in touch.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-5 py-14 md:px-8 md:py-20">
        <h1 className="font-display text-5xl font-semibold tracking-tight">About me</h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink">
          {aboutBody.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-10 text-mute">
          <a className="btn-line" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <span className="mx-3">·</span>
          <a className="btn-line" href={site.phoneHref}>
            {site.phone}
          </a>
        </p>
      </div>
      <CtaBar />
    </>
  );
}
