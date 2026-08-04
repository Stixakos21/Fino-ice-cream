import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/fino-logo-transparent.png";
import { useLanguage } from "@/contexts/LanguageContext";

const navLinks = [
  { to: "/", label: { el: "Αρχική", en: "Home" } },
  { to: "/flavors", label: { el: "Γεύσεις", en: "Flavors" } },
  { to: "/history", label: { el: "Η Ιστορία μας", en: "Our Story" } },
  { to: "/quality", label: { el: "Ποιότητα", en: "Quality" } },
  { to: "/contact", label: { el: "Επικοινωνία", en: "Contact" } },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const hideLogo = location.pathname === "/epikoinonia";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide mx-auto flex items-center justify-between gap-3 px-4 py-2 pt-[max(0.5rem,env(safe-area-inset-top,0px))] sm:px-6 sm:py-3 lg:px-12">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2 py-1" aria-label="Fino IceCream">
          {!hideLogo && (
            <img src={logo} alt="Fino IceCream" className="h-14 w-auto sm:h-20 md:h-24" loading="lazy" />
          )}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 hover:text-primary ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.label[language]}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggleLanguage}
          className="hidden md:inline-flex min-h-[40px] items-center rounded-full border border-border bg-card px-3 py-1.5 font-body text-xs font-semibold tracking-wide text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          aria-label={language === "el" ? "Αλλαγή σε Αγγλικά" : "Switch to Greek"}
        >
          {language === "el" ? "EN" : "EL"}
        </button>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex min-h-[44px] min-w-[44px] flex-shrink-0 items-center justify-center rounded-xl text-foreground hover:bg-foreground/5 active:bg-foreground/10 md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
        >
          {mobileOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto border-t border-border bg-card/98 backdrop-blur-md animate-fade-in md:hidden">
          <div className="flex justify-center px-4 pt-4">
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex min-h-[42px] items-center rounded-full border border-border bg-card px-4 py-2 font-body text-sm font-semibold tracking-wide text-foreground"
              aria-label={language === "el" ? "Αλλαγή σε Αγγλικά" : "Switch to Greek"}
            >
              {language === "el" ? "English" : "Ελληνικά"}
            </button>
          </div>
          <ul className="flex flex-col py-2 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]">
            {navLinks.map((link) => (
              <li key={link.to} className="w-full">
                <Link
                  to={link.to}
                  className={`flex min-h-[48px] w-full items-center justify-center px-4 py-3 font-body text-base font-medium transition-colors hover:bg-primary/5 active:bg-primary/10 ${
                    location.pathname === link.to ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label[language]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
