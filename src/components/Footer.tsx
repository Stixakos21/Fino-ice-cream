import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/fino-logo-transparent.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const Footer = () => {
  const { language } = useLanguage();
  const { openPreferences } = useCookieConsent();
  const t =
    language === "el"
      ? {
          tagline: "Αυθεντικό παγωτό με φρέσκο γάλα από το 1958.",
          menu: "Μενού",
          contact: "Επικοινωνία",
          legal: "Νομικά",
          home: "Αρχική",
          flavors: "Γεύσεις",
          story: "Η Ιστορία μας",
          quality: "Ποιότητα",
          privacy: "Πολιτική Απορρήτου",
          cookies: "Πολιτική Cookies",
          terms: "Όροι Χρήσης",
          cookieSettings: "Ρυθμίσεις Cookies",
          addressTitle: "Οδός Μ4 - ΒΙ.ΠΕ. Ηρακλείου",
          copyright: "© Fino IceCream - Από το 1958",
        }
      : {
          tagline: "Authentic ice cream made with fresh milk since 1958.",
          menu: "Menu",
          contact: "Contact",
          legal: "Legal",
          home: "Home",
          flavors: "Flavors",
          story: "Our Story",
          quality: "Quality",
          privacy: "Privacy Policy",
          cookies: "Cookie Policy",
          terms: "Terms of Use",
          cookieSettings: "Cookie Settings",
          addressTitle: "Street M4 - Heraklion Industrial Area",
          copyright: "© Fino IceCream - Since 1958",
        };

  return (
    <footer className="bg-[hsl(40,35%,96%)] pb-[max(0px,env(safe-area-inset-bottom,0px))] text-stone-900">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col items-start gap-4">
            <img src={logo} alt="Fino IceCream" className="h-20 w-auto" loading="lazy" />
            <p className="text-stone-700 text-sm font-body">
              {t.tagline}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/finoicecreams"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-700 hover:text-stone-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.facebook.com/share/1GSygRHH6z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-700 hover:text-stone-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">{t.menu}</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: t.home },
                { to: "/flavors", label: t.flavors },
                { to: "/history", label: t.story },
                { to: "/quality", label: t.quality },
                { to: "/contact", label: t.contact },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex min-h-[40px] items-center py-1 font-body text-sm text-stone-700 transition-colors hover:text-stone-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">{t.legal}</h4>
            <ul className="space-y-2">
              {[
                { to: "/privacy", label: t.privacy },
                { to: "/cookies", label: t.cookies },
                { to: "/terms", label: t.terms },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex min-h-[40px] items-center py-1 font-body text-sm text-stone-700 transition-colors hover:text-stone-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="inline-flex min-h-[40px] items-center py-1 font-body text-sm text-stone-700 transition-colors hover:text-stone-900"
                >
                  {t.cookieSettings}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">{t.contact}</h4>
            <ul className="space-y-3 text-sm text-stone-700">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>{t.addressTitle}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:2810380812" className="hover:text-stone-900 transition-colors">281 0380812</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:pagotofino@gmail.com" className="hover:text-stone-900 transition-colors">pagotofino@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-300 mt-12 pt-8 text-center">
          <p className="text-stone-700 text-sm font-body">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
