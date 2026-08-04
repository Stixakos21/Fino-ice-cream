import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  ALL_ACCEPTED_PREFERENCES,
  clearNonEssentialStorage,
  DEFAULT_PREFERENCES,
  readStoredConsent,
  writeStoredConsent,
  type CookieCategory,
  type CookiePreferences,
} from "@/lib/cookieConsent";

type CookieConsentContextValue = {
  preferences: CookiePreferences;
  hasChosen: boolean;
  showBanner: boolean;
  showPreferences: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (preferences: CookiePreferences) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  isAllowed: (category: CookieCategory) => boolean;
};

const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(undefined);

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const stored = readStoredConsent();
  const [preferences, setPreferences] = useState<CookiePreferences>(
    stored?.preferences ?? DEFAULT_PREFERENCES
  );
  const [hasChosen, setHasChosen] = useState(Boolean(stored));
  const [showBanner, setShowBanner] = useState(!stored);
  const [showPreferences, setShowPreferences] = useState(false);

  const applyPreferences = useCallback((next: CookiePreferences) => {
    const normalized = { ...next, necessary: true };
    writeStoredConsent(normalized);
    setPreferences(normalized);
    setHasChosen(true);
    setShowBanner(false);

    if (!normalized.functional && !normalized.analytics && !normalized.marketing) {
      clearNonEssentialStorage();
    }
  }, []);

  const acceptAll = useCallback(() => {
    applyPreferences(ALL_ACCEPTED_PREFERENCES);
    setShowPreferences(false);
  }, [applyPreferences]);

  const rejectNonEssential = useCallback(() => {
    applyPreferences(DEFAULT_PREFERENCES);
    setShowPreferences(false);
  }, [applyPreferences]);

  const savePreferences = useCallback(
    (next: CookiePreferences) => {
      applyPreferences(next);
      setShowPreferences(false);
    },
    [applyPreferences]
  );

  const openPreferences = useCallback(() => {
    setShowPreferences(true);
    setShowBanner(false);
  }, []);

  const closePreferences = useCallback(() => {
    setShowPreferences(false);
    if (!hasChosen) {
      setShowBanner(true);
    }
  }, [hasChosen]);

  const isAllowed = useCallback(
    (category: CookieCategory) => {
      if (category === "necessary") return true;
      return preferences[category];
    },
    [preferences]
  );

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("fino-cookie-consent-updated", { detail: preferences }));
  }, [preferences]);

  const value = useMemo(
    () => ({
      preferences,
      hasChosen,
      showBanner,
      showPreferences,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
      closePreferences,
      isAllowed,
    }),
    [
      preferences,
      hasChosen,
      showBanner,
      showPreferences,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
      closePreferences,
      isAllowed,
    ]
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used inside CookieConsentProvider");
  }
  return context;
};
