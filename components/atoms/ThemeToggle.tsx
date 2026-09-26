// Theme toggle: switches the `dark` class on <html>, persisted in
// localStorage. Defaults to light (the Figma look).
"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";
import { useLanguage } from "@/lib/LanguageContext";
import { themeStorageKey, themeToggleText } from "@/lib/i18n";

export function ThemeToggle() {
  const { lang } = useLanguage();
  const [dark, setDark] = useState(false);

  // Apply the persisted theme once on mount (defaults to light).
  useEffect(() => {
    const isDark = window.localStorage.getItem(themeStorageKey) === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem(themeStorageKey, next ? "dark" : "light");
  }

  const label = dark
    ? themeToggleText[lang].toLight
    : themeToggleText[lang].toDark;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-ink transition hover:bg-brand-400 hover:text-white dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-brand-400 dark:hover:text-white"
    >
      {dark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  );
}
