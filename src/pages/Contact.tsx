import { useEffect } from "react";
import Layout from "@/components/Layout";
import ConsentGatedMap from "@/components/ConsentGatedMap";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const mapsQuery = "35.3188564,25.1684478";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

const Contact = () => {
  const { language } = useLanguage();

  const t =
    language === "el"
      ? {
          heroTitle: "Επικοινωνία",
          heroSubtitle: "Θα χαρούμε να ακούσουμε τη γνώμη σας",
          info: "Στοιχεία Επικοινωνίας",
          contactHeading: "Είμαστε εδώ για να βοηθήσουμε",
          address: "Διεύθυνση",
          addressValue: "ΟΔΟΣ Μ4 - ΒΙ.ΠΕ. ΗΡΑΚΛΕΙΟΥ",
          phone: "Τηλέφωνο",
          openingHours: "Ώρες Λειτουργίας",
          openingHoursValue: "Δευτέρα - Σάββατο: 08:30 - 17:00",
          visit: "Επισκεφτείτε μας",
          visitText: "Βρείτε μας στη βιομηχανική περιοχή του Ηρακλείου και επικοινωνήστε μαζί μας για παραγγελίες, συνεργασίες και περισσότερες πληροφορίες.",
          follow: "Ακολουθήστε μας",
          mapTitle: "Τοποθεσία Fino IceCream",
        }
      : {
          heroTitle: "Contact",
          heroSubtitle: "We would love to hear from you",
          info: "Contact Details",
          contactHeading: "We are here to help",
          address: "Address",
          addressValue: "Street M4 - Heraklion Industrial Area",
          phone: "Phone",
          openingHours: "Opening Hours",
          openingHoursValue: "Monday - Saturday: 08:30 - 17:00",
          visit: "Visit us",
          visitText: "Find us in the industrial area of Heraklion and get in touch for orders, partnerships, and more information.",
          follow: "Follow us",
          mapTitle: "Fino IceCream Location",
        };

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

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
      <section className="relative bg-gradient-to-br from-cream via-background to-ice-blue">
        <div className="page-header">
          <h1 className="page-title">{t.heroTitle}</h1>
          <div className="divider-line" />
          <p className="page-subtitle">{t.heroSubtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="reveal opacity-0">
              <div className="glass-card h-full p-6 sm:p-8">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t.info}</p>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl">{t.contactHeading}</h2>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-background/60 p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ice-blue shrink-0">
                      <MapPin className="text-primary" size={18} />
                    </div>
                    <div>
                      <h4 className="font-body text-sm font-semibold mb-1">{t.address}</h4>
                      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground font-body text-sm leading-relaxed hover:text-primary transition-colors">
                        {t.addressValue}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-background/60 p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ice-pink shrink-0">
                      <Phone className="text-primary" size={18} />
                    </div>
                    <div>
                      <h4 className="font-body text-sm font-semibold mb-1">{t.phone}</h4>
                      <a href="tel:2810380812" className="text-muted-foreground font-body text-sm hover:text-primary transition-colors">
                        281 0380812
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-background/60 p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ice-mint shrink-0">
                      <Mail className="text-primary" size={18} />
                    </div>
                    <div>
                      <h4 className="font-body text-sm font-semibold mb-1">Email</h4>
                      <a href="mailto:pagotofino@gmail.com" className="text-muted-foreground font-body text-sm hover:text-primary transition-colors break-all">
                        pagotofino@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-background/60 p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ice-lavender shrink-0">
                      <Clock className="text-primary" size={18} />
                    </div>
                    <div>
                      <h4 className="font-body text-sm font-semibold mb-1">{t.openingHours}</h4>
                      <p className="text-muted-foreground font-body text-sm">{t.openingHoursValue}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 reveal opacity-0" style={{ animationDelay: "0.15s" }}>
              <div className="glass-card p-6 sm:p-8">
                <h3 className="font-display text-2xl">{t.visit}</h3>
                <p className="mt-3 text-muted-foreground font-body text-sm leading-relaxed">{t.visitText}</p>
                <div className="mt-6">
                  <ConsentGatedMap title={t.mapTitle} />
                </div>
              </div>

              <div className="glass-card p-6 sm:p-8">
                <h3 className="mb-4 font-display text-2xl">{t.follow}</h3>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="https://www.instagram.com/finoicecreams"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[48px] flex-1 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[hsl(330,60%,55%)] to-[hsl(30,80%,55%)] px-5 py-3.5 font-body text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:opacity-95 sm:min-w-0 sm:flex-none sm:px-6 sm:text-sm"
                  >
                    <Instagram size={22} className="shrink-0" />
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/share/1GSygRHH6z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[48px] flex-1 items-center justify-center gap-3 rounded-xl bg-[hsl(220,60%,50%)] px-5 py-3.5 font-body text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:opacity-95 sm:min-w-0 sm:flex-none sm:px-6 sm:text-sm"
                  >
                    <Facebook size={22} className="shrink-0" />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
