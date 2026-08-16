import { site } from "@/lib/site";

export function CtaBar() {
  return (
    <section className="border-t border-line bg-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            If the site is quiet, the phone is quiet.
          </h2>
          <p className="mt-2 max-w-md text-mute">
            Email or call. If it is not a fit, I will say so.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="btn" href={`mailto:${site.email}`}>
            Email Justin
          </a>
          <a className="btn-line" href={site.phoneHref}>
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
