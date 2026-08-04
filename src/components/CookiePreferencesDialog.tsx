import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import type { CookiePreferences } from "@/lib/cookieConsent";

const CookiePreferencesDialog = () => {
  const { language } = useLanguage();
  const {
    showPreferences,
    preferences,
    closePreferences,
    savePreferences,
    acceptAll,
    rejectNonEssential,
  } = useCookieConsent();

  const [draft, setDraft] = useState<CookiePreferences>(preferences);

  useEffect(() => {
    if (showPreferences) {
      setDraft(preferences);
    }
  }, [showPreferences, preferences]);

  const t =
    language === "el"
      ? {
          title: "Ρυθμίσεις Cookies",
          description:
            "Διαχειριστείτε τις προτιμήσεις σας. Τα απαραίτητα cookies είναι πάντα ενεργά για τη βασική λειτουργία του ιστότοπου.",
          necessary: "Απαραίτητα",
          necessaryDesc: "Αποθηκεύουν την επιλογή συγκατάθεσής σας.",
          functional: "Λειτουργικά",
          functionalDesc: "Απομνημονεύουν τη γλώσσα και επιτρέπουν ενσωματωμένους χάρτες.",
          analytics: "Στατιστικά",
          analyticsDesc: "Βοηθούν στην κατανόηση της χρήσης του ιστότοπου.",
          marketing: "Marketing",
          marketingDesc: "Χρησιμοποιούνται για εξατομικευμένη διαφήμιση.",
          alwaysOn: "Πάντα ενεργά",
          save: "Αποθήκευση προτιμήσεων",
          acceptAll: "Αποδοχή όλων",
          reject: "Απόρριψη μη απαραίτητων",
          privacy: "Πολιτική Απορρήτου",
          cookies: "Πολιτική Cookies",
        }
      : {
          title: "Cookie Settings",
          description:
            "Manage your preferences. Strictly necessary cookies are always active for basic website functionality.",
          necessary: "Strictly necessary",
          necessaryDesc: "Store your consent choice.",
          functional: "Functional",
          functionalDesc: "Remember language and enable embedded maps.",
          analytics: "Analytics",
          analyticsDesc: "Help us understand website usage.",
          marketing: "Marketing",
          marketingDesc: "Used for personalized advertising.",
          alwaysOn: "Always active",
          save: "Save preferences",
          acceptAll: "Accept all",
          reject: "Reject non-essential",
          privacy: "Privacy Policy",
          cookies: "Cookie Policy",
        };

  const categories = [
    {
      key: "necessary" as const,
      title: t.necessary,
      description: t.necessaryDesc,
      disabled: true,
    },
    {
      key: "functional" as const,
      title: t.functional,
      description: t.functionalDesc,
      disabled: false,
    },
    {
      key: "analytics" as const,
      title: t.analytics,
      description: t.analyticsDesc,
      disabled: false,
    },
    {
      key: "marketing" as const,
      title: t.marketing,
      description: t.marketingDesc,
      disabled: false,
    },
  ];

  return (
    <Dialog open={showPreferences} onOpenChange={(open) => !open && closePreferences()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">{t.title}</DialogTitle>
          <DialogDescription className="font-body text-sm leading-relaxed">
            {t.description}{" "}
            <Link to="/privacy" className="underline underline-offset-2">
              {t.privacy}
            </Link>{" "}
            ·{" "}
            <Link to="/cookies" className="underline underline-offset-2">
              {t.cookies}
            </Link>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {categories.map((category) => (
            <div
              key={category.key}
              className="flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-4"
            >
              <div className="space-y-1">
                <Label htmlFor={`cookie-${category.key}`} className="font-body text-sm font-semibold">
                  {category.title}
                </Label>
                <p className="font-body text-xs leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                {category.disabled && (
                  <p className="font-body text-xs font-medium text-primary">{t.alwaysOn}</p>
                )}
              </div>
              <Switch
                id={`cookie-${category.key}`}
                checked={draft[category.key]}
                disabled={category.disabled}
                onCheckedChange={(checked) =>
                  setDraft((prev) => ({ ...prev, [category.key]: checked }))
                }
                aria-readonly={category.disabled}
              />
            </div>
          ))}
        </div>

        <DialogFooter className="flex-col gap-2 sm:flex-col">
          <Button
            type="button"
            onClick={() => savePreferences(draft)}
            className="min-h-[44px] w-full rounded-full font-body"
          >
            {t.save}
          </Button>
          <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
            <Button
              type="button"
              variant="outline"
              onClick={rejectNonEssential}
              className="min-h-[44px] rounded-full font-body"
            >
              {t.reject}
            </Button>
            <Button
              type="button"
              onClick={acceptAll}
              className="min-h-[44px] rounded-full font-body"
            >
              {t.acceptAll}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookiePreferencesDialog;
