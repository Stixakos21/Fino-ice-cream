import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import heroVideo from "@/assets/finonewbannervideo.mp4";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const t =
    language === "el"
      ? {
          since: "Από το 1958",
          heroLine: "«Η γεύση του χθες, στην τέχνη του σήμερα...»",
          cta: "Δείτε τις γεύσεις",
          introTitleStart: "Αυθεντική γεύση από την",
          introTitleAccent: "Κρήτη",
          introText1: "Εταιρεία βιομηχανικής παραγωγής παγωτών με δραστηριότητα στο εμπόριο χονδρικής.",
          introText2:
            "Η Fino Ice Creams δημιουργεί μοναδικές γεύσεις παγωτού με βάση το φρέσκο γάλα και ποιοτικές πρώτες ύλες, συνεχίζοντας μια παράδοση που ξεκίνησε το 1958.",
          quickLinks: [
            { to: "/flavors", title: "Γεύσεις", text: "Δείτε όλο τον κατάλογο γεύσεων." },
            { to: "/history", title: "Η Ιστορία μας", text: "Από το 1958 μέχρι σήμερα." },
            { to: "/contact", title: "Επικοινωνία", text: "Ελάτε σε επαφή με την ομάδα μας." },
          ],
        }
      : {
          since: "Since 1958",
          heroLine: "\"Yesterday's taste, crafted for today...\"",
          cta: "View flavors",
          introTitleStart: "Authentic taste from",
          introTitleAccent: "Crete",
          introText1: "Industrial ice cream producer with strong presence in wholesale trade.",
          introText2:
            "Fino Ice Creams creates unique flavors using fresh milk and premium ingredients, continuing a tradition that started in 1958.",
          quickLinks: [
            { to: "/flavors", title: "Flavors", text: "Explore our full flavor catalog." },
            { to: "/history", title: "Our Story", text: "From 1958 until today." },
            { to: "/contact", title: "Contact", text: "Get in touch with our team." },
          ],
        };

  return (
    <Layout>
      <section className="relative flex h-[100dvh] max-h-[100dvh] min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(205,40%,12%)]" />
        <video
          className="absolute inset-0 h-full min-h-full w-full min-w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/55" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-28 pt-[max(5.5rem,calc(4.25rem+env(safe-area-inset-top,0px)))] text-center sm:px-6 sm:pb-24 sm:pt-[max(5rem,calc(4rem+env(safe-area-inset-top,0px)))] md:pb-20">
          <h1 className="mb-4 animate-fade-up font-display text-[clamp(1.65rem,5.5vw,3rem)] font-semibold tracking-[0.04em] text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl [text-shadow:0_8px_28px_rgba(0,0,0,0.65)]">
          FINO ICE CREAMS
          </h1>
          <p
            className="mb-2 animate-fade-up stagger-1 font-body text-base leading-snug text-white/90 sm:text-lg md:text-xl [text-shadow:0_4px_16px_rgba(0,0,0,0.7)]"
            style={{ opacity: 0 }}
          >
            {t.since}
          </p>
          <p
            className="mx-auto mb-8 max-w-[min(100%,17rem)] text-balance animate-fade-up stagger-2 font-display text-xl italic leading-snug text-white/95 sm:mb-10 sm:max-w-2xl sm:text-2xl md:text-4xl [text-shadow:0_4px_18px_rgba(0,0,0,0.68)]"
            style={{ opacity: 0 }}
          >
            {t.heroLine}
          </p>
          <Link
            to="/flavors"
            className="group inline-flex min-h-[48px] w-full max-w-[min(100%,18rem)] animate-fade-up stagger-3 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-body text-base font-semibold leading-tight text-stone-900 shadow-lg shadow-black/20 transition-all hover:gap-3 hover:bg-white/90 sm:w-auto sm:max-w-none sm:px-10 sm:py-4 sm:text-sm sm:tracking-wide"
            style={{ opacity: 0 }}
          >
            <span className="text-balance">{t.cta}</span>
            <ArrowRight size={18} strokeWidth={2.25} className="shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div
          className="pointer-events-none absolute bottom-[max(1rem,env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 animate-float sm:bottom-8"
          aria-hidden
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/60 p-1.5">
            <div className="h-3 w-1.5 animate-fade-in rounded-full bg-white/80" />
          </div>
        </div>
      </section>

      <section className="bg-[hsl(var(--background))] px-4 pb-10 pt-16 sm:px-6 md:pb-12 md:pt-24">
        <div className="reveal mx-auto max-w-4xl text-center opacity-0">
          <h2 className="font-serif text-[clamp(1.75rem,5.5vw,3.75rem)] leading-tight text-foreground md:text-5xl lg:text-6xl">
            {t.introTitleStart} <span className="text-primary">{t.introTitleAccent}</span>
          </h2>
          <p className="mt-7 font-body text-base text-muted-foreground md:text-lg">{t.introText1}</p>
          <p className="mt-4 font-body text-sm text-muted-foreground md:text-base">{t.introText2}</p>
        </div>
      </section>

      <section className="bg-[hsl(var(--card))] pb-16 pt-6 md:pb-20 md:pt-8">
        <div className="container-wide mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {t.quickLinks.map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="reveal glass-card block min-h-[4.5rem] p-6 opacity-0 transition-all hover-lift active:scale-[0.99] sm:min-h-0 sm:p-8"
              >
                <h3 className="mb-2 font-display text-xl sm:text-2xl">{card.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
