import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Cookie, Settings2 } from "lucide-react";
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
          functionalDesc: "Απομνημονεύουν τη γλώσσα, το χρώμα/θέμα του ιστότοπου και επιτρέπουν ενσωματωμένους χάρτες.",
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
          functionalDesc: "Remember language, website theme, and enable embedded maps.",
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
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border/80 bg-background text-foreground p-5 sm:max-w-xl sm:p-7">
        <DialogHeader>
          <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Cookie className="h-5 w-5" aria-hidden />
          </div>
          <DialogTitle className="font-display text-2xl text-foreground">{t.title}</DialogTitle>
          <DialogDescription className="font-body text-sm leading-relaxed text-muted-foreground">
            {t.description}{" "}
            <Link to="/privacy" className="underline underline-offset-2 text-foreground hover:text-primary">
              {t.privacy}
            </Link>{" "}
            ·{" "}
            <Link to="/cookies" className="underline underline-offset-2 text-foreground hover:text-primary">
              {t.cookies}
            </Link>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-2">
          {categories.map((category) => (
            <div
              key={category.key}
              className="flex items-start justify-between gap-4 rounded-2xl border border-border/80 bg-card/70 p-4 transition-colors hover:border-primary/25"
            >
              <div className="space-y-1">
                <Label htmlFor={`cookie-${category.key}`} className="flex items-center gap-2 font-body text-sm font-semibold">
                  {category.title}
                  {category.disabled && <Check className="h-3.5 w-3.5 text-primary" aria-hidden />}
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

        <DialogFooter className="mt-2 flex-col gap-2 border-t border-border/70 pt-5 sm:flex-col">
          <Button
            type="button"
            onClick={() => savePreferences(draft)}
            className="min-h-[44px] w-full rounded-full font-body"
          >
            <Settings2 className="mr-2 h-4 w-4" aria-hidden />
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
