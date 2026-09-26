// Language toggle: flips between Spanish and English. Styled like the
// social buttons (yellow accent, circular).
"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { themeToggleText } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const next = lang === "es" ? "en" : "es";
  const label = themeToggleText[lang].switchLanguage;

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-xs font-bold uppercase text-ink transition hover:bg-brand-400 hover:text-white dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-brand-400 dark:hover:text-white"
    >
      {next}
    </button>
  );
}
