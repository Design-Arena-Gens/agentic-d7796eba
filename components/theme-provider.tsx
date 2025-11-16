"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "clair" | "sombre";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("sombre");

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (window.localStorage.getItem("oraculum-theme") as Theme | null)
        : null;
    if (stored === "clair" || stored === "sombre") {
      setThemeState(stored);
    } else {
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setThemeState(prefersDark ? "sombre" : "clair");
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = theme;
      window.localStorage.setItem("oraculum-theme", theme);
    }
  }, [theme]);

  const setTheme = (value: Theme) => {
    setThemeState(value);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "clair" ? "sombre" : "clair"));
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme doit être utilisé dans un ThemeProvider");
  }
  return context;
}
