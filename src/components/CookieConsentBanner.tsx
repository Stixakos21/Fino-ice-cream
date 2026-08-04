import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { Button } from "@/components/ui/button";

const CookieConsentBanner = () => {
  const { language } = useLanguage();
  const { showBanner, acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();

  if (!showBanner) return null;

  const t =
    language === "el"
      ? {
          title: "Χρησιμοποιούμε cookies",
          description:
            "Χρησιμοποιούμε cookies και παρόμοια τεχνολογίες για τη λειτουργία του ιστότοπου, τις γλωσσικές προτιμήσεις και με τη συγκατάθεσή σας στατιστικούς σκοπούς. Μπορείτε να αποδεχτείτε όλα, να απορρίψετε τα μη απαραίτητα ή να ρυθμίσετε τις επιλογές σας.",
          privacy: "Πολιτική Απορρήτου",
          cookies: "Πολιτική Cookies",
          acceptAll: "Αποδοχή όλων",
          reject: "Απόρριψη μη απαραίτητων",
          customize: "Ρυθμίσεις",
        }
      : {
          title: "We use cookies",
          description:
            "We use cookies and similar technologies to operate this website, remember language preferences, and with your consent for analytics. You can accept all, reject non-essential cookies, or customize your choices.",
          privacy: "Privacy Policy",
          cookies: "Cookie Policy",
          acceptAll: "Accept all",
          reject: "Reject non-essential",
          customize: "Customize",
        };

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-stone-300 bg-[hsl(40,35%,96%)]/95 p-4 shadow-2xl backdrop-blur-md sm:p-6"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="container-wide mx-auto flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-3xl gap-3">
          <Cookie className="mt-1 hidden h-6 w-6 shrink-0 text-primary sm:block" aria-hidden />
          <div>
            <h2 id="cookie-banner-title" className="font-display text-lg text-stone-900">
              {t.title}
            </h2>
            <p id="cookie-banner-description" className="mt-2 font-body text-sm leading-relaxed text-stone-700">
              {t.description}{" "}
              <Link to="/privacy" className="underline underline-offset-2 hover:text-stone-900">
                {t.privacy}
              </Link>{" "}
              ·{" "}
              <Link to="/cookies" className="underline underline-offset-2 hover:text-stone-900">
                {t.cookies}
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={openPreferences}
            className="min-h-[44px] rounded-full border-stone-400 bg-transparent font-body text-sm text-stone-900 hover:bg-stone-100"
          >
            {t.customize}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={rejectNonEssential}
            className="min-h-[44px] rounded-full border-stone-400 bg-transparent font-body text-sm text-stone-900 hover:bg-stone-100"
          >
            {t.reject}
          </Button>
          <Button
            type="button"
            onClick={acceptAll}
            className="min-h-[44px] rounded-full bg-primary px-6 font-body text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {t.acceptAll}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
