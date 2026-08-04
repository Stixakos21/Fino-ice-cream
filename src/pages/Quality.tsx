import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Thermometer, Droplets, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import finoEgkatastasis from "@/assets/finoegkatastasis.jpg";
import isoBadge from "@/assets/iso-badge.png";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureItem {
  title: string;
  desc: string;
  icon?: LucideIcon;
  imageIcon?: string;
}

const Quality = () => {
  const { language } = useLanguage();

  const t =
    language === "el"
      ? {
          heroTitle: "Ποιότητα & Παραγωγή",
          heroSubtitle:
            "Στη Fino Ice Creams χρησιμοποιούμε φρέσκο γάλα και ποιοτικές πρώτες ύλες για να δημιουργούμε αυθεντικές γεύσεις παγωτού.",
          standardsTitle: "Τα Πρότυπά μας",
          features: [
            {
              imageIcon: heroBg,
              title: "Φρέσκο Γάλα",
              desc: "Χρησιμοποιούμε φρέσκο γάλα και ποιοτικές πρώτες ύλες για αυθεντικές γεύσεις.",
            },
            {
              imageIcon: isoBadge,
              title: "ISO Certified",
              desc: "Πιστοποιημένη παραγωγή με έμφαση στην ποιότητα και την ασφάλεια.",
            },
            {
              imageIcon: finoEgkatastasis,
              title: "Σύγχρονες Εγκαταστάσεις",
              desc: "Η παραγωγή πραγματοποιείται σε σύγχρονες εγκαταστάσεις στη ΒΙΠΕ Ηρακλείου.",
            },
          ] as FeatureItem[],
          standards: [
            { icon: Thermometer, text: "Ελεγχόμενη θερμοκρασία σε όλη την αλυσίδα παραγωγής" },
            { icon: Droplets, text: "Φρέσκο γάλα χωρίς συντηρητικά" },
            { icon: CheckCircle, text: "Αυστηροί ποιοτικοί έλεγχοι σε κάθε στάδιο" },
          ],
        }
      : {
          heroTitle: "Quality & Production",
          heroSubtitle:
            "At Fino Ice Creams, we use fresh milk and premium ingredients to create authentic ice cream flavors.",
          standardsTitle: "Our Standards",
          features: [
            {
              imageIcon: heroBg,
              title: "Fresh Milk",
              desc: "We use fresh milk and high-quality ingredients for authentic taste.",
            },
            {
              imageIcon: isoBadge,
              title: "ISO Certified",
              desc: "Certified production focused on quality and food safety.",
            },
            {
              imageIcon: finoEgkatastasis,
              title: "Modern Facilities",
              desc: "Production takes place in modern facilities in Heraklion Industrial Area.",
            },
          ] as FeatureItem[],
          standards: [
            { icon: Thermometer, text: "Controlled temperature throughout the production chain" },
            { icon: Droplets, text: "Fresh milk with no preservatives" },
            { icon: CheckCircle, text: "Strict quality controls at every stage" },
          ],
        };

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

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ice-mint via-cream to-ice-blue">
        <div className="page-header">
          <p className="text-primary font-body text-sm font-semibold uppercase tracking-[0.2em] mb-4">Fino Ice Creams</p>
          <h1 className="page-title">{t.heroTitle}</h1>
          <div className="divider-line" />  
          <p className="page-subtitle">
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {t.features.map((f, i) => (
              <div key={i} className="reveal opacity-0 glass-card p-10 text-center hover-lift" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 rounded-2xl bg-ice-blue flex items-center justify-center mx-auto mb-5">
                  {f.icon ? (
                    <f.icon className="text-primary" size={32} strokeWidth={1.5} />
                  ) : (
                    <img
                      src={f.imageIcon}
                      alt={f.title}
                      className="h-12 w-12 rounded-lg object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
                <h3 className="font-display text-xl mb-3">{f.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>



          {/* Standards */}
          <div className="mt-20 reveal opacity-0">
            <h2 className="font-display text-2xl md:text-3xl text-center mb-12">{t.standardsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.standards.map((s, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-cream">
                  <s.icon className="text-primary shrink-0 mt-0.5" size={24} strokeWidth={1.5} />
                  <p className="font-body text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quality;
