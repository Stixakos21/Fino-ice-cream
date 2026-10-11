export const CONSENT_STORAGE_KEY = "fino-cookie-consent";
export const CONSENT_VERSION = "1.0";

export type CookieCategory = "necessary" | "functional" | "analytics" | "marketing";

export type CookiePreferences = Record<CookieCategory, boolean>;

export type StoredConsent = {
  preferences: CookiePreferences;
  timestamp: string;
  version: string;
};

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export const ALL_ACCEPTED_PREFERENCES: CookiePreferences = {
  necessary: true,
  functional: true,
  analytics: true,
  marketing: true,
};

export const readStoredConsent = (): StoredConsent | null => {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;

    return {
      ...parsed,
      preferences: {
        ...DEFAULT_PREFERENCES,
        ...parsed.preferences,
        necessary: true,
      },
    };
  } catch {
    return null;
  }
};

export const writeStoredConsent = (preferences: CookiePreferences): StoredConsent => {
  const consent: StoredConsent = {
    preferences: { ...preferences, necessary: true },
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  }

  return consent;
};

export const clearNonEssentialStorage = () => {
  if (typeof window === "undefined") return;

  window.localStorage.removeItem("fino-site-language");
  window.localStorage.removeItem("fino-theme");
};

export const hasConsentChoice = (): boolean => readStoredConsent() !== null;
