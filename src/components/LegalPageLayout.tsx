import { ReactNode } from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

const LegalPageLayout = ({ title, lastUpdated, children }: LegalPageLayoutProps) => {
  const { language } = useLanguage();
  const updatedLabel = language === "el" ? "Τελευταία ενημέρωση" : "Last updated";

  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-cream via-background to-ice-blue">
        <div className="page-header">
          <h1 className="page-title">{title}</h1>
          <div className="divider-line" />
          <p className="page-subtitle">
            {updatedLabel}: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto max-w-3xl">
          <article className="prose prose-stone max-w-none font-body prose-headings:font-display prose-a:text-primary prose-li:marker:text-primary">
            {children}
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default LegalPageLayout;
