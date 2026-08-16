export function CalendarSlot() {
  const url = process.env.NEXT_PUBLIC_CAL_URL;

  if (!url) {
    return (
      <div className="border border-line bg-panel p-6">
        <p className="text-paper">No calendar embed yet.</p>
        <p className="mt-2 text-sm text-mute">
          Email{" "}
          <a className="text-gleam underline-offset-4 hover:underline" href="mailto:hello@urbangleams.com">
            hello@urbangleams.com
          </a>{" "}
          and we can pick a time.
        </p>
      </div>
    );
  }

  return (
    <iframe
      title="Book a call"
      src={url}
      className="h-[720px] w-full border border-line bg-panel"
    />
  );
}
