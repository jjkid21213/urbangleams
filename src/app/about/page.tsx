import type { Metadata } from "next";
import { CtaBar } from "@/components/CtaBar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Urban Gleams is a small web studio for city businesses that need enquiries.",
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-gleam">About</p>
        <h1 className="mt-4 font-serif text-5xl italic md:text-6xl">
          A small studio. One person on the other end of the email.
        </h1>
        <div className="mt-10 space-y-6 text-lg text-mute">
          <p>
            Urban Gleams is how I work with local businesses that should look sharper than the template they inherited. {site.city}. Remote-friendly.
          </p>
          <p>
            I design and ship the site myself. You get a URL, a form that arrives, and pages that say what you do. No account manager. No six-week discovery deck.
          </p>
          <p>
            The work on this site is spec until client work replaces it. That is honest. The craft is the same either way.
          </p>
        </div>
        <div className="mt-14 grid gap-8 border-t border-line pt-10 md:grid-cols-2">
          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-gleam">How I work</h2>
            <p className="mt-3 text-mute">
              Call, then a written scope with a price. Half to start, half when it is live. You see the site on a staging link before it goes on your domain.
            </p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-gleam">What I will not do</h2>
            <p className="mt-3 text-mute">
              Fake reviews, fake metrics, or a 20-page site with nothing to click. If I cannot help, I will say so in the first call.
            </p>
          </div>
        </div>
      </div>
      <CtaBar />
    </>
  );
}
