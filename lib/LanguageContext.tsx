// Language state shared across the page. Default is Spanish and the
// choice persists in localStorage. No external i18n package needed.
//
// Why Context: the dictionary is read by a dozen components spread across
// atoms, molecules and organisms. Threading it through props would repeat it
// on every intermediate component; Context keeps the tree call signatures
// to "data + handlers only".
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
  // This also runs on mount: a first-time visitor has nothing stored, so the
  // default (es) is written immediately. That is intentional — the write is
  // a no-op for returning users and makes the state inspectable.
  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(langStorageKey, lang);
  }, [lang]);

  return (
    // The dictionary is resolved once here instead of in every consumer, so
    // components read `t.<key>` and never import the dictionary themselves.
    // The value object is recreated per render, but it only changes when
    // `lang` changes for these consumers.
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext);
  // Fail loudly: a missing provider would otherwise surface as
  // `undefined.<key>` crashes far from the real cause.
  if (!value) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return value;
}
