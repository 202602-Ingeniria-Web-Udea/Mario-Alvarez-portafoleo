// Language state shared across the page. Default is Spanish and the
// choice persists in localStorage. No external i18n package needed.
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLang,
  dictionaries,
  langStorageKey,
  type Dictionary,
  type Lang,
} from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(defaultLang);

  // Load the persisted choice once on mount (defaults to Spanish).
  useEffect(() => {
    const saved = window.localStorage.getItem(langStorageKey);
    if (saved === "es" || saved === "en") {
      setLang(saved);
    }
  }, []);

  // Keep <html lang> and storage in sync with the active language.
  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(langStorageKey, lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return value;
}
