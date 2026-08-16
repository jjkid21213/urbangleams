import Link from "next/link";

export function CtaBar() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
        <div>
          <p className="font-serif text-3xl italic text-paper md:text-4xl">
            If the site is quiet, the phone is quiet.
          </p>
          <p className="mt-3 max-w-md text-mute">
            Fifteen minutes. If it is not a fit, I will say so.
          </p>
        </div>
        <Link href="/contact" className="btn-gleam">
          Book a call
        </Link>
      </div>
    </section>
  );
}
