"use client";

import { useTheme } from "./theme-provider";
import styles from "./theme-toggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "sombre";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label="Changer le thème"
    >
      <span className={styles.icon}>{isDark ? "☀︎" : "☾"}</span>
      <span className={styles.label}>{isDark ? "Clair" : "Sombre"}</span>
    </button>
  );
}
