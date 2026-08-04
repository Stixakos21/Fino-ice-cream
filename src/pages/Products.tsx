import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const islandImageModules = import.meta.glob("/src/assets/icecreamislandphotos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const horecaImageModules = import.meta.glob("/src/assets/icecreamhorecaphotos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const creamFirstCategoryImageModules = import.meta.glob("/src/assets/icecreamcreamphotos 1st category/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const creamSecondCategoryImageModules = import.meta.glob("/src/assets/icecreamcreamphotos 2nd category/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const gourmetImageModules = import.meta.glob("/src/assets/icecreamgourmetphotos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const sorbetImageModules = import.meta.glob("/src/assets/icecreamsobretphotos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

interface FlavorItem {
  name: string;
  url: string;
}

interface FlavorCategory {
  category: string;
  subtitle: string;
  flavors: FlavorItem[];
}

interface FlavorSubcategory {
  id: string;
  label: string;
  subtitle: string;
  flavors: FlavorItem[];
}

type Language = "el" | "en";

const FRESH_MILK_CATEGORY = "Φρέσκο Γάλα / Iceland";

const flavorTranslations: Record<string, string> = {
  "αμαρενα": "Amarena",
  "βανιλια": "Vanilla",
  "βανιλια μαδαγασκαρης": "Madagascar Vanilla",
  "βανιλια σοκολατα": "Vanilla Chocolate",
  "βανιλια φραουλα": "Vanilla Strawberry",
  "γιαουρτι": "Yogurt",
  "γιαουρτι αγριοκερασο": "Yogurt Sour Cherry",
  "κανταιφι": "Kataifi",
  "καραμελα": "Caramel",
  "λεμονι": "Lemon",
  "μαστιχα": "Mastic",
  "μεντα": "Mint",
  "μερεντα": "Merenda",
  "μπανανα": "Banana",
  "μπανανα σοκολατα": "Banana Chocolate",
  "παρφε βανιλια": "Vanilla Parfait",
  "παρφε σοκολατας": "Chocolate Parfait",
  "παρφε φραουλα": "Strawberry Parfait",
  "παρφε φυστικι": "Pistachio Parfait",
  "πεπονι": "Melon",
  "πολιτικο καιμακι": "Politiko Kaimaki",
  "σοκολατα": "Chocolate",
  "σοκολατα με κομματακια": "Chocolate with Chunks",
  "τιραμισου": "Tiramisu",
  "τριανταφυλλο": "Rose",
  "τσιχλοφουσκα": "Bubblegum",
  "φραουλα": "Strawberry",
  "φραοτλα": "Strawberry",
  "φυστικι": "Pistachio",
};

const normalizeFlavorKey = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("el-GR")
    .replace(/\s+/g, " ")
    .replace(/[._-]+/g, " ")
    .replace(/[^a-z0-9\u0370-\u03ff ]/gi, "")
    .trim();

const translateFlavorName = (name: string, language: Language) => {
  if (language === "el") return name;

  const normalized = normalizeFlavorKey(name);
  return flavorTranslations[normalized] ?? name;
};

const flavorsFromModules = (modules: Record<string, string>, language: Language): FlavorItem[] => {
  const deduped = Object.entries(modules).reduce<Map<string, FlavorItem>>((acc, [fullPath, url]) => {
    const raw = decodeURIComponent(fullPath.split("/").pop() || "");
    const sourceName = raw.replace(/\.(jpg|jpeg|png|webp)$/i, "").replace(/\s+/g, " ").trim();
    const name = translateFlavorName(sourceName, language);
    const key = normalizeFlavorKey(name);

    if (!key) return acc;
    if (!acc.has(key)) acc.set(key, { name, url });
    return acc;
  }, new Map());

  return Array.from(deduped.values()).sort((a, b) =>
    a.name.localeCompare(b.name, language === "en" ? "en" : "el", { sensitivity: "base" })
  );
};

type CategoryRow = {
  category: string;
  subtitle: string;
  modules: Record<string, string>;
};

const categoryRows: CategoryRow[] = [
  { category: "Horeca", subtitle: "5kg / 10ltr", modules: horecaImageModules },
  { category: "Cream", subtitle: "1kg / 2ltr - 2.5kg / 5ltr", modules: {} },
  { category: "Gourmet", subtitle: "3kg / 6ltr - Premium", modules: gourmetImageModules },
  { category: FRESH_MILK_CATEGORY, subtitle: "3kg / 6ltr - Premium", modules: islandImageModules },
  { category: "Sorbet", subtitle: "3kg / 6ltr", modules: sorbetImageModules },
];

const Products = () => {
  const { language } = useLanguage();
  const currentLanguage = language as Language;

  const t =
    currentLanguage === "el"
      ? {
          heroTitle: "Οι Γεύσεις μας",
          heroSubtitle: "Η Fino IceCream δημιουργεί μοναδικές γεύσεις παγωτού με βάση το φρέσκο γάλα και ποιοτικές πρώτες ύλες.",
          flavorsWord: "γεύσεις",
          categoryLabel: "Κατηγορία",
          freshMilkLabel: "100% φρέσκο γάλα",
          categoryNames: {
            Horeca: "Horeca",
            Cream: "Cream",
            Gourmet: "Gourmet",
            [FRESH_MILK_CATEGORY]: FRESH_MILK_CATEGORY,
            Sorbet: "Sorbet",
          } as Record<string, string>,
        }
      : {
          heroTitle: "Our Flavors",
          heroSubtitle: "Fino IceCream creates unique flavors using fresh milk and premium ingredients.",
          flavorsWord: "flavors",
          categoryLabel: "Category",
          freshMilkLabel: "100% fresh milk",
          categoryNames: {
            Horeca: "Horeca",
            Cream: "Cream",
            Gourmet: "Gourmet",
            [FRESH_MILK_CATEGORY]: "Fresh Milk / Iceland",
            Sorbet: "Sorbet",
          } as Record<string, string>,
        };

  const categoriesData = useMemo<FlavorCategory[]>(
    () =>
      categoryRows.map(({ modules, ...rest }) => ({
        ...rest,
        flavors: flavorsFromModules(modules, currentLanguage),
      })),
    [currentLanguage]
  );

  const creamSubcategories = useMemo<FlavorSubcategory[]>(
    () => [
      {
        id: "cream-1kg",
        label: "1kg / 2Ltr",
        subtitle: "Cream - 1kg / 2ltr",
        flavors: flavorsFromModules(creamFirstCategoryImageModules, currentLanguage),
      },
      {
        id: "cream-2_5kg",
        label: "2.5kg / 5Ltr",
        subtitle: "Cream - 2.5kg / 5ltr",
        flavors: flavorsFromModules(creamSecondCategoryImageModules, currentLanguage),
      },
    ],
    [currentLanguage]
  );

  const totalFlavors = useMemo(() => {
    const base = categoriesData.reduce((n, c) => n + c.flavors.length, 0);
    const cream = creamSubcategories.reduce((n, c) => n + c.flavors.length, 0);
    return base + cream;
  }, [categoriesData, creamSubcategories]);

  const [active, setActive] = useState(categoryRows[0].category);
  const [activeCreamSubcategory, setActiveCreamSubcategory] = useState(creamSubcategories[0]?.id ?? "");

  const activeCategory = useMemo(
    () => categoriesData.find((category) => category.category === active) ?? categoriesData[0],
    [active, categoriesData]
  );

  const selectedCreamSubcategory = useMemo(
    () => creamSubcategories.find((item) => item.id === activeCreamSubcategory) ?? creamSubcategories[0],
    [activeCreamSubcategory, creamSubcategories]
  );

  const displayedFlavors = active === "Cream" ? selectedCreamSubcategory?.flavors ?? [] : activeCategory.flavors;
  const displayedSubtitle = active === "Cream" ? selectedCreamSubcategory?.subtitle ?? activeCategory.subtitle : activeCategory.subtitle;

  useEffect(() => {
    if (active === "Cream" && creamSubcategories.length > 0 && !creamSubcategories.some((item) => item.id === activeCreamSubcategory)) {
      setActiveCreamSubcategory(creamSubcategories[0].id);
    }
  }, [active, activeCreamSubcategory, creamSubcategories]);

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
      { threshold: 0.05 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-ice-blue via-cream to-ice-pink">
        <div className="page-header">
          <p className="text-primary font-body text-sm font-semibold uppercase tracking-[0.2em] mb-4">Fino IceCream</p>
          <h1 className="page-title">{t.heroTitle}</h1>
          <div className="divider-line" />
          <p className="page-subtitle mb-4">{t.heroSubtitle}</p>
          <p className="text-primary font-display text-2xl italic">
            {totalFlavors}+ {t.flavorsWord}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
            {categoriesData.map((cat) => (
              <button
                key={cat.category}
                type="button"
                onClick={() => setActive(cat.category)}
                className={`min-h-[5.5rem] rounded-2xl border p-4 text-left transition-all duration-300 sm:min-h-0 sm:p-5 ${
                  active === cat.category
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-card text-foreground border-border hover:border-primary/30 hover:shadow-md active:scale-[0.99]"
                }`}
              >
                <p className={`font-body text-[10px] uppercase tracking-[0.18em] sm:text-[11px] ${active === cat.category ? "text-primary-foreground/80" : "text-primary/70"}`}>
                  {t.categoryLabel}
                </p>
                <h3 className="mt-1 font-display text-lg leading-snug sm:text-xl break-words">
                  {t.categoryNames[cat.category] ?? cat.category}
                </h3>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <p className={`font-body text-xs leading-snug sm:min-w-0 sm:flex-1 ${active === cat.category ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                    {cat.subtitle}
                  </p>
                  <span className={`inline-flex w-fit shrink-0 rounded-full px-2.5 py-1.5 text-xs font-body font-semibold leading-none sm:py-1 ${active === cat.category ? "bg-primary-foreground/15 text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                    {cat.category === "Cream"
                      ? `${creamSubcategories.reduce((n, item) => n + item.flavors.length, 0)} ${t.flavorsWord}`
                      : `${cat.flavors.length} ${t.flavorsWord}`}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {active === "Cream" && (
            <div className="mb-8 flex flex-wrap gap-3">
              {creamSubcategories.map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setActiveCreamSubcategory(sub.id)}
                  className={`rounded-full border px-4 py-2 font-body text-sm font-semibold transition-all ${
                    activeCreamSubcategory === sub.id
                      ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "border-border bg-card text-foreground hover:border-primary/40"
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
            {displayedFlavors.map(({ name, url }, i) => (
              <div
                key={`${activeCategory.category}-${name}-${i}`}
                className="glass-card overflow-hidden hover-lift group animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="aspect-square overflow-hidden relative bg-muted/30">
                  <img
                    src={url}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith("/placeholder.svg")) target.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 sm:p-6">
                  <span className="inline-block max-w-full break-words rounded-full bg-primary/10 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-primary sm:px-3 sm:text-xs sm:tracking-[0.15em]">
                    {t.categoryNames[activeCategory.category] ?? activeCategory.category}
                  </span>
                  <h3 className="mb-1 mt-3 font-display text-base leading-snug sm:text-lg break-words">{name}</h3>
                  {activeCategory.category === FRESH_MILK_CATEGORY ? (
                    <p className="text-muted-foreground text-sm font-body">
                      {activeCategory.subtitle}
                      <span className="ml-2 text-[11px] lowercase tracking-wide">{t.freshMilkLabel}</span>
                    </p>
                  ) : (
                    <p className="text-muted-foreground text-sm font-body">{displayedSubtitle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
