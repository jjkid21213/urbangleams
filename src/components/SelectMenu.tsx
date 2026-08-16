"use client";

import { useEffect, useId, useRef, useState } from "react";

export type SelectOption = { value: string; label: string; hint?: string };

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  name?: string;
};

export function SelectMenu({ label, value, onChange, options, name }: Props) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const current = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const onDoc = (event: MouseEvent) => {
      if (!wrap.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="ug-select" ref={wrap}>
      {name ? <input type="hidden" name={name} value={value} /> : null}
      <span className="ug-select-label" id={`${id}-label`}>
        {label}
      </span>
      <button
        type="button"
        className="ug-select-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-label`}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{current?.label}</span>
        <span className="ug-select-caret" aria-hidden />
      </button>
      {open ? (
        <ul className="ug-select-list" role="listbox" aria-labelledby={`${id}-label`}>
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={option.value === value}
                className={option.value === value ? "is-selected" : undefined}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
              >
                <span>{option.label}</span>
                {option.hint ? <small>{option.hint}</small> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
