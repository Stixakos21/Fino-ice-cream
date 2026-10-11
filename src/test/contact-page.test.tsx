import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Contact from "@/pages/Contact";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";

describe("Contact page", () => {
  it("does not render the message form or privacy checkbox", () => {
    render(
      <CookieConsentProvider>
        <LanguageProvider>
          <MemoryRouter>
            <Contact />
          </MemoryRouter>
        </LanguageProvider>
      </CookieConsentProvider>
    );

    expect(screen.queryByText(/Στείλτε μας μήνυμα|Send us a message/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Όνομα|Name/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Αποστολή|Send/i })).not.toBeInTheDocument();
  });
});
