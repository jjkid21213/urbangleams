export function SampleFrame({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-soft p-2 shadow-[var(--shadow)]">
      <div className="mb-2 flex gap-1 px-1">
        <span className="h-2 w-2 rounded-full bg-mute/60" />
        <span className="h-2 w-2 rounded-full bg-mute/60" />
        <span className="h-2 w-2 rounded-full bg-mute/60" />
        <span className="ml-2 truncate text-[10px] text-mute">{src}</span>
      </div>
      <iframe title={title} src={src} className="h-[340px] w-full bg-paper md:h-[420px]" />
    </div>
  );
}
