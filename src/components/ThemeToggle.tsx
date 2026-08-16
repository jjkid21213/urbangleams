"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="ug-theme"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      aria-pressed={theme === "light"}
    >
      <span className="ug-theme-dot" aria-hidden />
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
