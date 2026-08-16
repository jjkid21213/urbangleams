"use client";

type Props = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  valueLabel?: string;
  ticks?: number[];
};

export function RangeSlider({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  valueLabel,
  ticks,
}: Props) {
  const fill = ((value - min) / Math.max(1, max - min)) * 100;

  return (
    <div className="ug-slider">
      <div className="ug-slider-head">
        <label htmlFor={id}>{label}</label>
        <span className="ug-chip">{valueLabel ?? value}</span>
      </div>
      <input
        id={id}
        className="ug-range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={valueLabel ?? String(value)}
        style={{ ["--fill" as string]: `${fill}%` }}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {ticks ? (
        <div className="ug-ticks" aria-hidden="true">
          {ticks.map((tick) => (
            <button
              key={tick}
              type="button"
              className={tick === value ? "is-on" : undefined}
              tabIndex={-1}
              onClick={() => onChange(tick)}
            >
              {tick}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
