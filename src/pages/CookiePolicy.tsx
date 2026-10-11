import { Link } from "react-router-dom";
import LegalPageLayout from "@/components/LegalPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const CookiePolicy = () => {
  const { language } = useLanguage();
  const { openPreferences } = useCookieConsent();

  if (language === "el") {
    return (
      <LegalPageLayout title="Πολιτική Cookies" lastUpdated="12 Οκτώβρη 2026">
        <p>
          Η παρούσα Πολιτική Cookies εξηγεί πώς ο ιστότοπος{" "}
          <a href="https://finoicecream.gr">finoicecream.gr</a> χρησιμοποιεί cookies και παρόμοιες
          τεχνολογίες, σύμφωνα με τον GDPR και την ελληνική νομοθεσία (ν. 4624/2019).
        </p>

        <h2>1. Τι είναι τα cookies;</h2>
        <p>
          Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σας όταν επισκέπτεστε
          έναν ιστότοπο. Χρησιμοποιούνται για τη λειτουργία, την ασφάλεια και — με τη συγκατάθεσή σας
          — για βελτίωση της εμπειρίας σας.
        </p>

        <h2>2. Πώς διαχειριζόμαστε τη συγκατάθεσή σας</h2>
        <p>
          Κατά την πρώτη επίσκεψη εμφανίζεται banner συγκατάθεσης. Μπορείτε να αποδεχτείτε όλα, να
          απορρίψετε τα μη απαραίτητα ή να επιλέξετε κατηγορίες. Μπορείτε να αλλάξετε τις επιλογές σας
          ανά πάσα στιγμή μέσω του κουμπιού «Ρυθμίσεις Cookies» στο υποσέλιδο.
        </p>
        <p>
          <button
            type="button"
            onClick={openPreferences}
            className="rounded-full bg-primary px-5 py-2 font-body text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Άνοιγμα ρυθμίσεων cookies
          </button>
        </p>

        <h2>3. Κατηγορίες cookies</h2>

        <h3>Απαραίτητα (πάντα ενεργά)</h3>
        <p>Απαιτούνται για τη βασική λειτουργία του ιστότοπου.</p>
        <table>
          <thead>
            <tr>
              <th>Όνομα</th>
              <th>Σκοπός</th>
              <th>Διάρκεια</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>fino-cookie-consent</td>
              <td>Αποθήκευση επιλογών συγκατάθεσης cookies</td>
              <td>12 μήνες</td>
            </tr>
          </tbody>
        </table>

        <h3>Λειτουργικά (με συγκατάθεση)</h3>
        <p>Βελτιώνουν τη λειτουργικότητα και την εμπειρία σας.</p>
        <table>
          <thead>
            <tr>
              <th>Όνομα / Πάροχος</th>
              <th>Σκοπός</th>
              <th>Διάρκεια</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>fino-site-language</td>
              <td>Απομνημόνευση γλώσσας ιστότοπου</td>
              <td>12 μήνες</td>
            </tr>
            <tr>
              <td>fino-site-theme</td>
              <td>Απομνημόνευση χρωματικού θέματος ιστότοπου (light/dark)</td>
              <td>12 μήνες</td>
            </tr>
            <tr>
              <td>Google Maps</td>
              <td>Εμφάνιση χάρτη τοποθεσίας (σελίδα επικοινωνίας)</td>
              <td>Σύμφωνα με την πολιτική Google</td>
            </tr>
          </tbody>
        </table>

        <h3>Στατιστικά (με συγκατάθεση — προαιρετικά)</h3>
        <p>
          Δεν χρησιμοποιούνται επί του παρόντος. Εάν ενεργοποιηθούν στο μέλλον, θα ενημερωθεί η
          παρούσα πολιτική και θα ζητηθεί εκ νέου η συγκατάθεσή σας.
        </p>

        <h3>Marketing (με συγκατάθεση — προαιρετικά)</h3>
        <p>
          Δεν χρησιμοποιούνται επί του παρόντος. Εάν ενεργοποιηθούν στο μέλλον, θα ενημερωθεί η
          παρούσα πολιτική.
        </p>

        <h2>4. Τρίτοι πάροχοι</h2>
        <p>
          Ο ενσωματωμένος χάρτης Google Maps φορτώνεται μόνο εάν αποδεχτείτε λειτουργικά cookies.
          Η Google ενδέχεται να τοποθετεί δικά της cookies. Δείτε την{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            πολιτική απορρήτου της Google
          </a>.
        </p>

        <h2>5. Διαχείριση από τον browser</h2>
        <p>
          Μπορείτε να διαγράψετε ή να αποκλείσετε cookies από τις ρυθμίσεις του browser σας. Η
          απενεργοποίηση απαραίτητων cookies ενδέχεται να επηρεάσει τη λειτουργία του ιστότοπου.
        </p>

        <h2>6. Σχετικά έγγραφα</h2>
        <p>
          Για περισσότερες πληροφορίες σχετικά με την επεξεργασία προσωπικών δεδομένων, δείτε την{" "}
          <Link to="/privacy">Πολιτική Απορρήτου</Link>.
        </p>
      </LegalPageLayout>
    );
  }

  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="August 4, 2026">
      <p>
        This Cookie Policy explains how <a href="https://finoicecream.gr">finoicecream.gr</a> uses
        cookies and similar technologies in accordance with the GDPR and Greek law (Law 4624/2019).
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They are used for
        operation, security, and — with your consent — to improve your experience.
      </p>

      <h2>2. How we manage your consent</h2>
      <p>
        On your first visit, a consent banner is displayed. You can accept all, reject non-essential
        cookies, or choose specific categories. You can change your choices at any time via the «Cookie
        Settings» button in the footer.
      </p>
      <p>
        <button
          type="button"
          onClick={openPreferences}
          className="rounded-full bg-primary px-5 py-2 font-body text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Open cookie settings
        </button>
      </p>

      <h2>3. Cookie categories</h2>

      <h3>Strictly necessary (always active)</h3>
      <p>Required for basic website functionality.</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>fino-cookie-consent</td>
            <td>Stores your cookie consent choices</td>
            <td>12 months</td>
          </tr>
        </tbody>
      </table>

      <h3>Functional (with consent)</h3>
      <p>Improve functionality and your experience.</p>
      <table>
        <thead>
          <tr>
            <th>Name / Provider</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>fino-site-language</td>
            <td>Remember website language</td>
            <td>12 months</td>
          </tr>
          <tr>
            <td>fino-site-theme</td>
            <td>Remember website color theme (light/dark)</td>
            <td>12 months</td>
          </tr>
          <tr>
            <td>Google Maps</td>
            <td>Display location map (contact page)</td>
            <td>Per Google policy</td>
          </tr>
        </tbody>
      </table>

      <h3>Analytics (with consent — optional)</h3>
      <p>
        Not currently used. If enabled in the future, this policy will be updated and consent will be
        requested again.
      </p>

      <h3>Marketing (with consent — optional)</h3>
      <p>
        Not currently used. If enabled in the future, this policy will be updated accordingly.
      </p>

      <h2>4. Third-party providers</h2>
      <p>
        The embedded Google Maps loads only if you accept functional cookies. Google may set its own
        cookies. See{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Google&apos;s Privacy Policy
        </a>.
      </p>

      <h2>5. Browser controls</h2>
      <p>
        You can delete or block cookies via your browser settings. Disabling necessary cookies may affect
        website functionality.
      </p>

      <h2>6. Related documents</h2>
      <p>
        For more information on personal data processing, see our{" "}
        <Link to="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPageLayout>
  );
};

export default CookiePolicy;
