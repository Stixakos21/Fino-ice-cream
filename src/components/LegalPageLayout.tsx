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
  const legalLabel = language === "el" ? "Νομικές πληροφορίες" : "Legal information";
  const readingLabel = language === "el" ? "Σαφείς πληροφορίες για μια ασφαλή εμπειρία στον ιστότοπό μας." : "Clear information for a confident experience on our website.";

  return (
    <Layout>
      <section className="relative bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--card)))] dark:bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--card)))]">
        <div className="page-header">
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">{legalLabel}</p>
          <h1 className="page-title text-foreground">{title}</h1>
          <div className="divider-line" />
          <div className="mx-auto flex w-fit items-center rounded-full border border-primary/15 bg-background/80 px-4 py-2 font-body text-sm text-muted-foreground shadow-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
            {updatedLabel}: {lastUpdated}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--card)))] dark:bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--card)))]">
        <div className="container-wide mx-auto max-w-4xl">
          <div className="rounded-[1.75rem] border border-border/80 bg-card/75 p-5 shadow-[0_18px_55px_-30px_rgba(45,36,24,0.32)] backdrop-blur-sm sm:p-8 md:p-10">
            <p className="mb-8 border-l-2 border-primary pl-4 font-body text-sm leading-relaxed text-muted-foreground sm:text-base">{readingLabel}</p>
            <article className="legal-content prose prose-stone max-w-none font-body prose-headings:font-display prose-a:text-primary prose-li:marker:text-primary dark:prose-invert">
              {children}
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalPageLayout;
