import { Link } from "react-router-dom";
import LegalPageLayout from "@/components/LegalPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  if (language === "el") {
    return (
      <LegalPageLayout title="Πολιτική Απορρήτου" lastUpdated="12 Οκτώβρη 2026">
        <p>
          Η παρούσα Πολιτική Απορρήτου εξηγεί πώς η <strong>ΑΛΦΑ ΓΑΜΑ ΠΑΓΩΤΟ Ε.Ε.</strong> («εμείς», «η Εταιρεία»)
          συλλέγει, χρησιμοποιεί και προστατεύει τα προσωπικά σας δεδομένα όταν επισκέπτεστε τον ιστότοπο{" "}
          <a href="https://finoicecream.gr">finoicecream.gr</a> («ο Ιστότοπος»), σύμφωνα με τον Γενικό
          Κανονισμό Προστασίας Δεδομένων (ΕΕ) 2016/679 (GDPR) και την ελληνική νομοθεσία.
        </p>

        <h2>1. Υπεύθυνος Επεξεργασίας</h2>
        <ul>
          <li><strong>Επωνυμία:</strong> ΑΛΦΑ ΓΑΜΑ ΠΑΓΩΤΟ Ε.Ε.</li>
          <li><strong>Διεύθυνση:</strong> Οδός M4 - ΒΙ.ΠΕ. Ηρακλείου, Ελλάδα</li>
          <li><strong>Email:</strong> <a href="mailto:pagotofino@gmail.com">pagotofino@gmail.com</a></li>
          <li><strong>Τηλέφωνο:</strong> <a href="tel:2810380812">281 0380812</a></li>
        </ul>

        <h2>2. Κατηγορίες Δεδομένων που Συλλέγουμε</h2>
        <p>Ενδέχεται να επεξεργαζόμαστε τα ακόλουθα δεδομένα:</p>
        <ul>
          <li><strong>Στοιχεία επικοινωνίας:</strong> όνομα, email και μήνυμα όταν συμπληρώνετε τη φόρμα επικοινωνίας.</li>
          <li><strong>Τεχνικά δεδομένα:</strong> διεύθυνση IP, τύπος browser, συσκευή, ώρα επίσκεψης (μόνο εφόσον ενεργοποιηθούν στατιστικά εργαλεία με τη συγκατάθεσή σας).</li>
          <li><strong>Προτιμήσεις:</strong> γλώσσα ιστότοπου και επιλογές cookies (με τη συγκατάθεσή σας).</li>
        </ul>

        <h2>3. Σκοποί και Νομικές Βάσεις Επεξεργασίας</h2>
        <ul>
          <li><strong>Απάντηση σε αιτήματα επικοινωνίας</strong> — νομική βάση: έννομο συμφέρον / προ-συμβατικές ενέργειες.</li>
          <li><strong>Λειτουργία του ιστότοπου</strong> — νομική βάση: έννομο συμφέρον / απαραίτητη επεξεργασία.</li>
          <li><strong>Αποθήκευση προτιμήσεων (γλώσσα, cookies)</strong> — νομική βάση: συγκατάθεση.</li>
          <li><strong>Στατιστική ανάλυση</strong> — νομική βάση: συγκατάθεση (μόνο εφόσον ενεργοποιηθεί).</li>
        </ul>

        <h2>4. Cookies και Παρόμοιες Τεχνολογίες</h2>
        <p>
          Χρησιμοποιούμε cookies σύμφωνα με τις επιλογές σας. Για λεπτομέρειες, δείτε την{" "}
          <Link to="/cookies">Πολιτική Cookies</Link>. Μπορείτε να αλλάξετε τις προτιμήσεις σας ανά
          πάσα στιγμή μέσω των ρυθμίσεων cookies στο υποσέλιδο.
        </p>

        <h2>5. Αποδέκτες Δεδομένων</h2>
        <p>
          Τα δεδομένα σας δεν πωλούνται. Ενδέχεται να κοινοποιηθούν σε:
        </p>
        <ul>
          <li>Παρόχους φιλοξενίας ιστότοπου.</li>
          <li>Google Maps (μόνο εάν αποδεχτείτε λειτουργικά cookies στην επικοινωνία).</li>
          <li>Αρμόδιες αρχές, εφόσον απαιτείται από τον νόμο.</li>
        </ul>

        <h2>6. Διεθνείς Μεταφορές</h2>
        <p>
          Ορισμένοι τρίτοι πάροχοι (π.χ. Google) ενδέχεται να επεξεργάζονται δεδομένα εκτός ΕΕ. Σε
          τέτοιες περιπτώσεις εφαρμόζονται κατάλληλες εγγυήσεις (π.χ. τυποποιημένες συμβατικές ρήτρες).
        </p>

        <h2>7. Χρόνος Διατήρησης</h2>
        <ul>
          <li>Μηνύματα επικοινωνίας: έως 12 μήνες από την απάντηση, εκτός αν απαιτείται μεγαλύτερη διατήρηση.</li>
          <li>Προτιμήσεις cookies: έως 12 μήνες ή μέχρι να ανακαλέσετε τη συγκατάθεση.</li>
          <li>Γλωσσική προτίμηση: έως 12 μήνες (με συγκατάθεση).</li>
        </ul>

        <h2>8. Τα Δικαιώματά σας</h2>
        <p>Σύμφωνα με τον GDPR, έχετε δικαίωμα:</p>
        <ul>
          <li>Πρόσβασης στα δεδομένα σας</li>
          <li>Διόρθωσης ανακριβών δεδομένων</li>
          <li>Διαγραφής («δικαίωμα στη λήθη»)</li>
          <li>Περιορισμού επεξεργασίας</li>
          <li>Εναντίωσης σε επεξεργασία</li>
          <li>Φορητότητας δεδομένων</li>
          <li>Ανάκλησης συγκατάθεσης ανά πάσα στιγμή</li>
          <li>Υποβολής καταγγελίας στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (<a href="https://www.dpa.gr" target="_blank" rel="noopener noreferrer">www.dpa.gr</a>)</li>
        </ul>
        <p>
          Για άσκηση δικαιωμάτων, επικοινωνήστε στο{" "}
          <a href="mailto:pagotofino@gmail.com">pagotofino@gmail.com</a>.
        </p>

        <h2>9. Ασφάλεια</h2>
        <p>
          Λαμβάνουμε τεχνικά και οργανωτικά μέτρα για την προστασία των δεδομένων σας από μη
          εξουσιοδοτημένη πρόσβαση, απώλεια ή καταστροφή.
        </p>

        <h2>10. Ανήλικοι</h2>
        <p>
          Ο ιστότοπος δεν απευθύνεται σε άτομα κάτω των 16 ετών και δεν συλλέγουμε εν γνώσει μας
          δεδομένα ανηλίκων χωρίς γονική συγκατάθεση.
        </p>

        <h2>11. Αλλαγές</h2>
        <p>
          Ενδέχεται να ενημερώνουμε την παρούσα πολιτική. Η ημερομηνία τελευταίας ενημέρωσης
          αναφέρεται στην κορυφή της σελίδας.
        </p>
      </LegalPageLayout>
    );
  }

  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="August 4, 2026">
      <p>
        This Privacy Policy explains how <strong>ΑΛΦΑ ΓΑΜΑ ΠΑΓΩΤΟ Ε.Ε.</strong> («we», «the Company») collects,
        uses, and protects your personal data when you visit{" "}
        <a href="https://finoicecream.gr">finoicecream.gr</a> («the Website»), in accordance with the
        EU General Data Protection Regulation (GDPR) and applicable Greek law.
      </p>

      <h2>1. Data Controller</h2>
      <ul>
        <li><strong>Company:</strong> ΑΛΦΑ ΓΑΜΑ ΠΑΓΩΤΟ Ε.Ε.</li>
        <li><strong>Address:</strong> Street M4 - Heraklion Industrial Area, Greece</li>
        <li><strong>Email:</strong> <a href="mailto:pagotofino@gmail.com">pagotofino@gmail.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:2810380812">281 0380812</a></li>
      </ul>

      <h2>2. Categories of Data We Collect</h2>
      <p>We may process the following data:</p>
      <ul>
        <li><strong>Contact details:</strong> name, email, and message when you use the contact form.</li>
        <li><strong>Technical data:</strong> IP address, browser type, device, visit time (only if analytics tools are enabled with your consent).</li>
        <li><strong>Preferences:</strong> website language and cookie choices (with your consent).</li>
      </ul>

      <h2>3. Purposes and Legal Bases</h2>
      <ul>
        <li><strong>Responding to contact requests</strong> — legal basis: legitimate interest / pre-contractual steps.</li>
        <li><strong>Website operation</strong> — legal basis: legitimate interest / necessary processing.</li>
        <li><strong>Storing preferences (language, cookies)</strong> — legal basis: consent.</li>
        <li><strong>Statistical analysis</strong> — legal basis: consent (only if enabled).</li>
      </ul>

      <h2>4. Cookies and Similar Technologies</h2>
      <p>
        We use cookies according to your choices. For details, see our{" "}
        <Link to="/cookies">Cookie Policy</Link>. You can change your preferences at any time via cookie
        settings in the footer.
      </p>

      <h2>5. Data Recipients</h2>
      <p>Your data is not sold. It may be shared with:</p>
      <ul>
        <li>Website hosting providers.</li>
        <li>Google Maps (only if you accept functional cookies on the contact page).</li>
        <li>Competent authorities when required by law.</li>
      </ul>

      <h2>6. International Transfers</h2>
      <p>
        Some third-party providers (e.g. Google) may process data outside the EU. In such cases,
        appropriate safeguards apply (e.g. Standard Contractual Clauses).
      </p>

      <h2>7. Retention Period</h2>
      <ul>
        <li>Contact messages: up to 12 months after response, unless longer retention is required.</li>
        <li>Cookie preferences: up to 12 months or until you withdraw consent.</li>
        <li>Language preference: up to 12 months (with consent).</li>
      </ul>

      <h2>8. Your Rights</h2>
      <p>Under the GDPR, you have the right to:</p>
      <ul>
        <li>Access your data</li>
        <li>Rectify inaccurate data</li>
        <li>Erasure («right to be forgotten»)</li>
        <li>Restrict processing</li>
        <li>Object to processing</li>
        <li>Data portability</li>
        <li>Withdraw consent at any time</li>
        <li>Lodge a complaint with the Hellenic Data Protection Authority (<a href="https://www.dpa.gr" target="_blank" rel="noopener noreferrer">www.dpa.gr</a>)</li>
      </ul>
      <p>
        To exercise your rights, contact us at{" "}
        <a href="mailto:pagotofino@gmail.com">pagotofino@gmail.com</a>.
      </p>

      <h2>9. Security</h2>
      <p>
        We implement technical and organizational measures to protect your data from unauthorized access,
        loss, or destruction.
      </p>

      <h2>10. Minors</h2>
      <p>
        This website is not directed at individuals under 16, and we do not knowingly collect data from
        minors without parental consent.
      </p>

      <h2>11. Changes</h2>
      <p>
        We may update this policy from time to time. The last updated date is shown at the top of this page.
      </p>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
