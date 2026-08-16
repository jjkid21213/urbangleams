"use client";

import { useId } from "react";

type Props = {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
  hint?: string;
};

export function Switch({ checked, onChange, label, hint }: Props) {
  const id = useId();

  return (
    <label className="ug-switch" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        role="switch"
        checked={checked}
        aria-checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="ug-switch-ui" aria-hidden />
      <span className="ug-switch-copy">
        <span className="ug-switch-label">{label}</span>
        {hint ? <span className="ug-switch-hint">{hint}</span> : null}
      </span>
    </label>
  );
}
