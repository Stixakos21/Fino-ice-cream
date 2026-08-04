import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { readStoredConsent } from "@/lib/cookieConsent";

export type SiteLanguage = "el" | "en";

type LanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  toggleLanguage: () => void;
};

const LANGUAGE_STORAGE_KEY = "fino-site-language";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const canUseFunctionalStorage = () => {
  const consent = readStoredConsent();
  return consent?.preferences.functional ?? false;
};

const getInitialLanguage = (): SiteLanguage => {
  if (typeof window === "undefined") return "el";
  if (!canUseFunctionalStorage()) return "el";
  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return saved === "en" ? "en" : "el";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<SiteLanguage>(getInitialLanguage);

  const setLanguage = (next: SiteLanguage) => setLanguageState(next);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "el" ? "en" : "el"));
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.lang = language;
    if (canUseFunctionalStorage()) {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }
  }, [language]);

  useEffect(() => {
    const handleConsentUpdate = () => {
      if (!canUseFunctionalStorage()) return;
      const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved === "en" || saved === "el") {
        setLanguageState(saved);
      }
    };

    window.addEventListener("fino-cookie-consent-updated", handleConsentUpdate);
    return () => window.removeEventListener("fino-cookie-consent-updated", handleConsentUpdate);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
};
