import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ConsentGatedMap from "@/components/ConsentGatedMap";
import { MapPin, Phone, Mail, Send, Instagram, Facebook, Clock } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const mapsUrl = "https://maps.app.goo.gl/J51MYaGNNenX3XzP7?g_st=iv";

const Contact = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const t =
    language === "el"
      ? {
          heroTitle: "Επικοινωνία",
          heroSubtitle: "Θα χαρούμε να ακούσουμε τη γνώμη σας",
          formTitle: "Στείλτε μας μήνυμα",
          name: "Όνομα",
          email: "Email",
          message: "Μήνυμα",
          namePlaceholder: "Το όνομά σας",
          messagePlaceholder: "Γράψτε το μήνυμά σας...",
          submit: "Αποστολή",
          sent: "Το μήνυμά σας στάλθηκε επιτυχώς!",
          privacyLabel: "Έχω διαβάσει και αποδέχομαι την",
          privacyLink: "Πολιτική Απορρήτου",
          privacyRequired: "Παρακαλούμε αποδεχτείτε την Πολιτική Απορρήτου.",
          info: "Στοιχεία Επικοινωνίας",
          address: "Διεύθυνση",
          addressValue: "ΟΔΟΣ Μ4 - ΒΙ.ΠΕ. ΗΡΑΚΛΕΙΟΥ",
          phone: "Τηλέφωνο",
          openingHours: "Ώρες Λειτουργίας",
          openingHoursValue: "Δευτέρα - Σάββατο: 08:30 - 17:00",
          follow: "Ακολουθήστε μας",
          mapTitle: "Τοποθεσία Fino IceCream",
        }
      : {
          heroTitle: "Contact",
          heroSubtitle: "We would love to hear from you",
          formTitle: "Send us a message",
          name: "Name",
          email: "Email",
          message: "Message",
          namePlaceholder: "Your name",
          messagePlaceholder: "Write your message...",
          submit: "Send",
          sent: "Your message was sent successfully!",
          privacyLabel: "I have read and accept the",
          privacyLink: "Privacy Policy",
          privacyRequired: "Please accept the Privacy Policy.",
          info: "Contact Details",
          address: "Address",
          addressValue: "Street M4 - Heraklion Industrial Area",
          phone: "Phone",
          openingHours: "Opening Hours",
          openingHoursValue: "Monday - Saturday: 08:30 - 17:00",
          follow: "Follow us",
          mapTitle: "Fino IceCream Location",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) {
      toast.error(t.privacyRequired);
      return;
    }
    toast.success(t.sent);
    setForm({ name: "", email: "", message: "" });
    setPrivacyAccepted(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-cream via-background to-ice-blue">
        <div className="page-header">
          <h1 className="page-title">{t.heroTitle}</h1>
          <div className="divider-line" />
          <p className="page-subtitle">
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="reveal opacity-0">
              <h2 className="font-display text-2xl mb-8">{t.formTitle}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-sm font-medium mb-2">{t.name}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    placeholder={t.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium mb-2">{t.email}</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium mb-2">{t.message}</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none"
                    placeholder={t.messagePlaceholder}
                  />
                </div>
                <label className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <input
                    type="checkbox"
                    required
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 rounded border-border text-primary focus:ring-primary/30"
                  />
                  <span className="font-body text-sm leading-relaxed text-muted-foreground">
                    {t.privacyLabel}{" "}
                    <Link to="/privacy" className="font-medium text-primary underline underline-offset-2">
                      {t.privacyLink}
                    </Link>
                    .
                  </span>
                </label>
                <button
                  type="submit"
                  className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-body text-base font-semibold tracking-wide text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.99] sm:text-sm"
                >
                  <Send size={18} className="shrink-0" strokeWidth={2} />
                  {t.submit}
                </button>
              </form>
            </div>

            {/* Contact info + Social + Map */}
            <div className="space-y-8 reveal opacity-0" style={{ animationDelay: "0.15s" }}>
              <div className="glass-card p-8 space-y-6">
                <h3 className="font-display text-xl mb-2">{t.info}</h3>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ice-blue flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-semibold mb-0.5">{t.address}</h4>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground font-body text-sm hover:text-primary transition-colors"
                    >
                      {t.addressValue}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ice-pink flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-semibold mb-0.5">{t.phone}</h4>
                    <a href="tel:2810380812" className="text-muted-foreground font-body text-sm hover:text-primary transition-colors">
                      281 0380812
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ice-mint flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-semibold mb-0.5">Email</h4>
                    <a href="mailto:pagotofino@gmail.com" className="text-muted-foreground font-body text-sm hover:text-primary transition-colors">
                      pagotofino@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ice-lavender flex items-center justify-center shrink-0">
                    <Clock className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-semibold mb-0.5">{t.openingHours}</h4>
                    <p className="text-muted-foreground font-body text-sm">{t.openingHoursValue}</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="glass-card p-6 sm:p-8">
                <h3 className="mb-4 font-display text-xl">{t.follow}</h3>
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

              {/* Google Maps */}
              <ConsentGatedMap title={t.mapTitle} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
