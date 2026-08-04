import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const mapsUrl = "https://maps.app.goo.gl/J51MYaGNNenX3XzP7?g_st=iv";
const embeddedMapUrl =
  "https://maps.google.com/maps?q=Fino%20IceCream%2C%20M4%20Street%2C%20Heraklion%20Industrial%20Area%2C%20Greece&z=15&output=embed";

interface ConsentGatedMapProps {
  title: string;
}

const ConsentGatedMap = ({ title }: ConsentGatedMapProps) => {
  const { language } = useLanguage();
  const { isAllowed, openPreferences } = useCookieConsent();
  const canLoadMap = isAllowed("functional");

  const t =
    language === "el"
      ? {
          placeholder: "Ο χάρτης φορτώνεται μόνο μετά την αποδοχή λειτουργικών cookies.",
          enable: "Ενεργοποίηση χάρτη",
          openMaps: "Άνοιγμα στο Google Maps",
        }
      : {
          placeholder: "The map loads only after you accept functional cookies.",
          enable: "Enable map",
          openMaps: "Open in Google Maps",
        };

  if (!canLoadMap) {
    return (
      <div className="flex aspect-video flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-card p-6 text-center shadow-lg">
        <MapPin className="h-8 w-8 text-primary" aria-hidden />
        <p className="max-w-sm font-body text-sm text-muted-foreground">{t.placeholder}</p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={openPreferences}
            className="rounded-full bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {t.enable}
          </button>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-2.5 font-body text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            {t.openMaps}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
      <iframe
        title={title}
        src={embeddedMapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ConsentGatedMap;
