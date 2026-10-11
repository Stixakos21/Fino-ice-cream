import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";

describe("Legal pages", () => {
  it("includes theme-aware dark mode classes for readable legal content", () => {
    render(
      <CookieConsentProvider>
        <LanguageProvider>
          <MemoryRouter>
            <PrivacyPolicy />
          </MemoryRouter>
        </LanguageProvider>
      </CookieConsentProvider>
    );

    const article = screen.getByText(/Η παρούσα Πολιτική Απορρήτου/i).closest("article");

    expect(article).toBeInTheDocument();
    expect(article).toHaveClass("dark:prose-invert");
  });
});
