import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";

describe("Navbar theme toggle", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("toggles the dark mode class on the document root", () => {
    render(
      <LanguageProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </LanguageProvider>
    );

    const toggle = screen.getByRole("button", { name: /toggle dark mode|toggle light mode/i });

    expect(document.documentElement.classList.contains("dark")).toBe(false);

    fireEvent.click(toggle);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
