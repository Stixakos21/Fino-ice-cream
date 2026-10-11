import { Link } from "react-router-dom";
import LegalPageLayout from "@/components/LegalPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsOfUse = () => {
  const { language } = useLanguage();

  if (language === "el") {
    return (
      <LegalPageLayout title="Όροι Χρήσης" lastUpdated="12 Οκτώβρη 2026">
        <p>
          Καλώς ήρθατε στον ιστότοπο της ΑΛΦΑ ΓΑΜΑ ΠΑΓΩΤΟ Ε.Ε. (<a href="https://finoicecream.gr">finoicecream.gr</a>).
          Με την πρόσβαση και χρήση του ιστότοπου, αποδέχεστε τους παρόντες Όρους Χρήσης. Εάν δεν
          συμφωνείτε, παρακαλούμε μην χρησιμοποιείτε τον ιστότοπο.
        </p>

        <h2>1. Σκοπός του Ιστότοπου</h2>
        <p>
          Ο ιστότοπος παρέχει πληροφορίες για τα προϊόντα, την ιστορία, την ποιότητα και τα στοιχεία
          επικοινωνίας της ΑΛΦΑ ΓΑΜΑ ΠΑΓΩΤΟ Ε.Ε. Δεν λειτουργεί ως ηλεκτρονικό κατάστημα.
        </p>

        <h2>2. Πνευματική Ιδιοκτησία</h2>
        <p>
          Όλο το περιεχόμενο (κείμενα, φωτογραφίες, λογότυπα, βίντεο, σχέδια) προστατεύεται από
          πνευματικά δικαιώματα και ανήκει στην ΑΛΦΑ ΓΑΜΑ ΠΑΓΩΤΟ Ε.Ε. ή στους νόμιμους δικαιούχους. Απαγορεύεται
          η αναπαραγωγή, διανομή ή τροποποίηση χωρίς προηγούμενη γραπτή άδεια.
        </p>

        <h2>3. Επιτρεπόμενη Χρήση</h2>
        <p>Επιτρέπεται η προσωπική, μη εμπορική χρήση του ιστότοπου. Απαγορεύεται:</p>
        <ul>
          <li>Η χρήση του ιστότοπου για παράνομους σκοπούς</li>
          <li>Η απόπειρα πρόσβασης σε μη δημόσιους τομείς ή συστήματα</li>
          <li>Η διάδοση κακόβουλου λογισμικού ή περιεχομένου</li>
          <li>Η συλλογή δεδομένων χρηστών χωρίς άδεια</li>
        </ul>

        <h2>4. Φόρμα Επικοινωνίας</h2>
        <p>
          Υποβάλλοντας μήνυμα μέσω της φόρμας επικοινωνίας, επιβεβαιώνετε ότι τα στοιχεία που
          παρέχετε είναι ακριβή και συναινείτε στην επεξεργασία σύμφωνα με την{" "}
          <Link to="/privacy">Πολιτική Απορρήτου</Link>.
        </p>

        <h2>5. Σύνδεσμοι Τρίτων</h2>
        <p>
          Ο ιστότοπος ενδέχεται να περιέχει συνδέσμους προς Instagram, Facebook, Google Maps και άλλους
          ιστότοπους. Δεν ευθυνόμαστε για το περιεχόμενο ή τις πρακτικές απορρήτου τρίτων.
        </p>

        <h2>6. Αποποίηση Ευθύνης</h2>
        <p>
          Καταβάλλουμε προσπάθεια για ακριβή και ενημερωμένες πληροφορίες, αλλά δεν εγγυόμαστε την
          πληρότητα ή ακρίβειά τους. Η χρήση του ιστότοπου γίνεται με δική σας ευθύνη.
        </p>

        <h2>7. Περιορισμός Ευθύνης</h2>
        <p>
          Στο μέγιστο βαθμό που επιτρέπεται από τον νόμο, η ΑΛΦΑ ΓΑΜΑ ΠΑΓΩΤΟ Ε.Ε. δεν ευθύνεται για άμεσες ή
          έμμεσες ζημίες που προκύπτουν από τη χρήση ή την αδυναμία χρήσης του ιστότοπου.
        </p>

        <h2>8. Εφαρμοστέο Δίκαιο</h2>
        <p>
          Οι παρόντες όροι διέπονται από το ελληνικό δίκαιο. Αρμόδια για κάθε διαφορά είναι τα δικαστήρια
          Ηρακλείου Κρήτης, εκτός αν ορίζεται διαφορετικά από τον νόμο.
        </p>

        <h2>9. Τροποποιήσεις</h2>
        <p>
          Διατηρούμε το δικαίωμα να τροποποιούμε τους όρους. Οι αλλαγές ισχύουν από τη δημοσίευσή τους
          στον ιστότοπο.
        </p>

        <h2>10. Επικοινωνία</h2>
        <p>
          Για ερωτήσεις σχετικά με τους όρους χρήσης:{" "}
          <a href="mailto:pagotofino@gmail.com">pagotofino@gmail.com</a> ·{" "}
          <a href="tel:2810380812">281 0380812</a>
        </p>
      </LegalPageLayout>
    );
  }

  return (
    <LegalPageLayout title="Terms of Use" lastUpdated="August 4, 2026">
      <p>
        Welcome to the ΑΛΦΑ ΓΑΜΑ ΠΑΓΩΤΟ Ε.Ε. website (<a href="https://finoicecream.gr">finoicecream.gr</a>).
        By accessing and using this website, you agree to these Terms of Use. If you do not agree, please
        do not use the website.
      </p>

      <h2>1. Purpose of the Website</h2>
      <p>
        This website provides information about ΑΛΦΑ ΓΑΜΑ ΠΑΓΩΤΟ Ε.Ε. products, history, quality, and contact
        details. It does not operate as an online store.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        All content (text, photos, logos, videos, designs) is protected by copyright and belongs to ΑΛΦΑ
        ΓΑΜΑ ΠΑΓΩΤΟ Ε.Ε. or its lawful owners. Reproduction, distribution, or modification without prior written
        permission is prohibited.
      </p>

      <h2>3. Permitted Use</h2>
      <p>Personal, non-commercial use of the website is permitted. You may not:</p>
      <ul>
        <li>Use the website for unlawful purposes</li>
        <li>Attempt to access non-public areas or systems</li>
        <li>Distribute malware or harmful content</li>
        <li>Collect user data without authorization</li>
      </ul>

      <h2>4. Contact Form</h2>
      <p>
        By submitting a message through the contact form, you confirm that the information provided is
        accurate and consent to processing in accordance with our{" "}
        <Link to="/privacy">Privacy Policy</Link>.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        The website may contain links to Instagram, Facebook, Google Maps, and other sites. We are not
        responsible for third-party content or privacy practices.
      </p>

      <h2>6. Disclaimer</h2>
      <p>
        We strive to provide accurate and up-to-date information but do not guarantee completeness or
        accuracy. Use of the website is at your own risk.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, ΑΛΦΑ ΓΑΜΑ ΠΑΓΩΤΟ Ε.Ε. is not liable for direct or indirect
        damages arising from use or inability to use the website.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These terms are governed by Greek law. Competent courts are those of Heraklion, Crete, unless
        otherwise required by law.
      </p>

      <h2>9. Changes</h2>
      <p>
        We reserve the right to modify these terms. Changes take effect upon publication on the website.
      </p>

      <h2>10. Contact</h2>
      <p>
        For questions about these terms:{" "}
        <a href="mailto:pagotofino@gmail.com">pagotofino@gmail.com</a> ·{" "}
        <a href="tel:2810380812">281 0380812</a>
      </p>
    </LegalPageLayout>
  );
};

export default TermsOfUse;
