import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieConsentBanner from "./CookieConsentBanner";
import CookiePreferencesDialog from "./CookiePreferencesDialog";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieConsentBanner />
      <CookiePreferencesDialog />
    </div>
  );
};

export default Layout;
