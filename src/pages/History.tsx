import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import fino1970historyvideo from "@/assets/fino1970historyvideo.mp4";
import fino2000historyvideo from "@/assets/fino2000historyvideo.mp4";
import fino68YearsBadge from "@/assets/68_xronia_fino-removebg-preview.png";

const historyPhotoModules = import.meta.glob("/src/assets/finohistoryphotos/*.{jpg,jpeg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getHistoryIndex = (fullPath: string) => {
  const filename = decodeURIComponent(fullPath.split("/").pop() ?? "");
  const match = filename.match(/(\d+)\.(jpg|jpeg|webp)$/i);
  return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
};

const historyPhotos = Object.entries(historyPhotoModules)
  .sort(([a], [b]) => getHistoryIndex(a) - getHistoryIndex(b))
  .map(([, value]) => value);

type TimelineMediaItem =
  | { type: "image"; src: string }
  | { type: "video"; src: string };

const buildPhotoChunkSizes = (totalPhotos: number, sectionCount: number) => {
  if (sectionCount <= 0) return [];

  const minForPairs = sectionCount * 2;
  const maxForTriples = sectionCount * 3;

  if (totalPhotos >= minForPairs && totalPhotos <= maxForTriples) {
    const chunkSizes = Array(sectionCount).fill(2);
    let extraPhotos = totalPhotos - minForPairs;

    for (let i = 0; i < chunkSizes.length && extraPhotos > 0; i += 1) {
      chunkSizes[i] += 1;
      extraPhotos -= 1;
    }

    return chunkSizes;
  }

  const baseSize = Math.floor(totalPhotos / sectionCount);
  const remainder = totalPhotos % sectionCount;

  return Array.from({ length: sectionCount }, (_, index) => baseSize + (index < remainder ? 1 : 0));
};

const timelineByLanguage = {
  el: [
    {
      year: "1958",
      title: "Η Αρχή",
      text: "Η διαδρομή της «Παγωτά Fino» ξεκινά τη δεκαετία του 1958. Ο Αλέξανδρος Νιργιανάκης, μαζί με τη σύζυγό του Άννα Νιργιανάκη, παράγουν το πρώτο παγωτό με πρωτόγονα, για τη σημερινή πραγματικότητα, μέσα σε δύο μικρά δωμάτια. Το παγωτό συντηρείται με πάγο και αλάτι, ενώ η διακίνησή του γίνεται με τρίκυκλα ποδήλατα και καρότσια, κάτω από την επωνυμία «Παγωτά Μέλισσα».",
    },
    {
      year: "1959",
      title: "Οδός Καλονάδων",
      text: "Το 1959 η επιχείρηση μεταφέρεται στην οδό Καλονάδων 11, όπου προστίθεται και η παραγωγή παγωτού από φρέσκο γάλα.",
    },
    {
      year: "1961",
      title: "Λεωφόρος Κνωσσού",
      text: "Το 1961, για δεύτερη φορά, η εταιρεία μεταφέρεται στη Λεωφόρο Κνωσσού 55, με μεγαλύτερη παραγωγή παγωτού και την αγορά του πρώτου φορτηγού της, τριών τρίκυκλων μοτοσακό και 30 ψυγείων που αγκαλιάζουν την αγορά του Ηρακλείου.",
    },
    {
      year: "1969",
      title: "Πρωτοπορία",
      text: "Το δεύτερο φορτηγό της εταιρείας, πλέον με αποθήκη πάγου, αγοράζεται το 1969, με βενζινομηχανή, μοτέρ και κομπρεσέρ, κάτι πρωτοποριακό για την εποχή. Πρωτοπόρος ο Αλέξανδρος Νιργιανάκης, την ίδια χρονιά δανείζεται και, παρά τις δυσκολίες της εποχής, επενδύει στην παγωτομηχανή DS για παραγωγή χύμα και τυποποιημένου παγωτού.",
    },
    {
      year: "1970",
      title: "Παγωτά FINO",
      text: "Στις αρχές της δεκαετίας του '70 έρχεται και η αλλαγή της ονομασίας. Τα «Παγωτά Μέλισσα» μετονομάζονται πλέον σε «Παγωτά FINO». Την ίδια δεκαετία πραγματοποιείται ακόμα μία μεταφορά της εταιρείας, λόγω αυξημένων αναγκών αποθήκευσης, παραγωγής και διακίνησης, στη Λεωφόρο Κνωσσού 129. Ακολουθεί η αγορά νέων μηχανημάτων της εταιρείας MARK, με την υποστήριξη του αντιπροσώπου κ. Πατσάκα.",
    },
    {
      year: "1980-90",
      title: "Κυριαρχία στην Κρήτη",
      text: "Τις δεκαετίες του '80 και του '90, με τη σταθερή ποιότητα του παγωτού, την αποδοχή του κόσμου, το μεράκι των ιδιοκτητών και τον εκσυγχρονισμό του στόλου και της παραγωγικής μονάδας, η εταιρεία καταφέρνει να κατακτήσει το 60% της αγοράς της Κρήτης στο χονδρικό εμπόριο.",
    },
    {
      year: "2000-26",
      title: "ΒΙ.ΠΕ. Ηρακλείου",
      text: "Το 2000 οι εγκαταστάσεις μεταφέρονται στη ΒΙ.ΠΕ. Ηρακλείου, όπου βρίσκεται μέχρι και σήμερα η έδρα της εταιρείας.",
    },
  ],
  en: [
    {
      year: "1958",
      title: "The Beginning",
      text: "The journey of Fino Ice Cream starts in 1958. Alexandros Nirgianakis and his wife Anna produce their first ice cream using primitive equipment in two small rooms. The ice cream is preserved with ice and salt, while distribution is done with tricycles and handcarts under the name Melissa Ice Cream.",
    },
    {
      year: "1959",
      title: "Kalonadon Street",
      text: "In 1959, the company moves to 11 Kalonadon Street, where production of fresh milk ice cream is also added.",
    },
    {
      year: "1961",
      title: "Knossou Avenue",
      text: "In 1961, the company relocates for a second time to 55 Knossou Avenue, expands production, acquires its first truck, three tricycle motorbikes, and 30 freezers that strengthen its presence across Heraklion.",
    },
    {
      year: "1969",
      title: "Innovation",
      text: "In 1969, the company purchases its second truck with an ice storage compartment, petrol engine, motor and compressor - a pioneering setup for that era. The same year, despite difficult conditions, Alexandros invests in the DS ice-cream machine for bulk and packaged production.",
    },
    {
      year: "1970",
      title: "FINO Ice Cream",
      text: "In the early 1970s, the company changes its name from Melissa Ice Cream to FINO Ice Cream. During the same decade, it relocates again to 129 Knossou Avenue due to increased production and distribution needs, while also investing in new MARK machinery.",
    },
    {
      year: "1980-90",
      title: "Leading Crete",
      text: "During the 1980s and 1990s, thanks to consistent quality, customer trust, and continuous modernization of fleet and production, the company reaches 60% market share in wholesale trade in Crete.",
    },
    {
      year: "2000",
      title: "Heraklion Industrial Area",
      text: "In 2000, the facilities move to the Heraklion Industrial Area, where the company headquarters remain to this day.",
    },
  ],
} as const;

const historyImageGridClass = (count: number) => {
  if (count <= 1) return "grid grid-cols-1 gap-6 lg:gap-8";
  if (count === 2) return "grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 lg:gap-8";
  return "grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 [&>*:nth-child(3)]:sm:col-span-2";
};

const History = () => {
  const { language } = useLanguage();
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const timelineBase = timelineByLanguage[language];
  const photoSectionCount = Math.max(timelineBase.length - 1, 0);
  const photoChunkSizes = buildPhotoChunkSizes(historyPhotos.length, photoSectionCount);
  const timeline = (() => {
    let cursor = 0;
    let photoIndex = 0;

    return timelineBase.map((item, i) => {
      let media: TimelineMediaItem[] = [];

      if (item.year === "1970") {
        media = [{ type: "video", src: fino1970historyvideo }];
      } else if (i === timelineBase.length - 1) {
        media = [{ type: "video", src: fino2000historyvideo }];
      } else {
        const chunkSize = photoChunkSizes[photoIndex] ?? 0;
        const slice = historyPhotos.slice(cursor, cursor + chunkSize);
        media = slice.map((src) => ({ type: "image", src }));
        cursor += chunkSize;
        photoIndex += 1;
      }

      return { ...item, media };
    });
  })();

  const t =
    language === "el"
      ? {
          heroKicker: "Από το 1958",
          heroTitle: "Η Ιστορία μας",
          heroText: "Η διαδρομή της «Παγωτά Fino» ξεκινά τη δεκαετία του 1958, στο Ηράκλειο Κρήτης, με δύο μικρά δωμάτια, πάγο, αλάτι και πολύ μεράκι.",
          closing1:
            "Όλα αυτά τα χρόνια εξελίσσουμε την εταιρεία με κύριο γνώμονα τον σεβασμό και την ικανοποίηση του πελάτη. Συνεχίζουμε με αναλλοίωτες αξίες στο πέρασμα των χρόνων: την τέχνη, το μεράκι και την αγάπη μας για το παγωτό.",
          closing2: "Σας ευχαριστούμε για την υποστήριξή σας όλα αυτά τα χρόνια.",
          quote: "«Η γεύση του χθες, στην τέχνη του σήμερα...»",
          closing3: "Η ιστορία μας συνεχίζεται... μαζί σας.",
          photoLabel: "φωτογραφία",
          videoLabel: "βίντεο",
        }
      : {
          heroKicker: "Since 1958",
          heroTitle: "Our Story",
          heroText: "The journey of Fino Ice Cream begins in Heraklion, Crete in 1958, with two small rooms, ice, salt, and a lot of passion.",
          closing1:
            "Over all these years, we keep developing the company with respect and customer satisfaction as our core values. We continue with the same principles: craft, passion, and love for ice cream.",
          closing2: "Thank you for your support all these years.",
          quote: "\"Yesterday's taste, crafted for today...\"",
          closing3: "Our story continues... with you.",
          photoLabel: "photo",
          videoLabel: "video",
        };

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => revealObserver.observe(el));

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting) {
            video.currentTime = 0;
            void video.play().catch(() => undefined);
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      { threshold: 0.55 }
    );

    videoRefs.current.forEach((video) => {
      if (video) videoObserver.observe(video);
    });

    return () => {
      revealObserver.disconnect();
      videoObserver.disconnect();
    };
  }, [timeline.length]);

  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-cream via-background to-ice-blue">
        <div className="page-header">
          <p className="text-primary font-body text-sm font-semibold uppercase tracking-[0.2em] mb-4">{t.heroKicker}</p>
          <h1 className="page-title">{t.heroTitle}</h1>
          <div className="divider-line" />
          <p className="page-subtitle max-w-3xl">{t.heroText}</p>
        </div>
      </section>

      <section id="history" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />

            <div className="space-y-24 md:space-y-32">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                const mediaGridCount = item.media.length === 1 && item.media[0]?.type === "video" ? 2 : item.media.length;

                return (
                  <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700">
                    <div className={`relative md:flex md:items-start md:gap-12 lg:gap-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25 ring-4 ring-background">
                          <span className="text-primary-foreground font-body text-[11px] font-semibold leading-none tracking-wide">
                            {item.year.length > 4 ? item.year.slice(0, 4) : item.year}
                          </span>
                        </div>
                      </div>

                      <div className="md:w-[44%] lg:w-[42%] pl-20 md:pl-0 shrink-0">
                        <div className={isLeft ? "md:text-right md:pr-10 lg:pr-12" : "md:pl-10 lg:pl-12"}>
                          <span className="inline-block text-primary font-body text-4xl md:text-5xl font-semibold mb-1 tracking-wide">{item.year}</span>
                          <h3 className="font-body text-xl md:text-2xl text-foreground mt-1 mb-3 font-semibold">{item.title}</h3>
                          <p className="text-muted-foreground font-body leading-relaxed text-[15px]">{item.text}</p>
                        </div>
                      </div>

                      <div className="md:flex-1 min-w-0 mt-8 md:mt-0 pl-20 md:pl-0">
                        <div className={isLeft ? "md:pl-6 lg:pl-8" : "md:pr-6 lg:pr-8"}>
                          <div className={historyImageGridClass(mediaGridCount)}>
                            {item.media.map((mediaItem, j) => (
                              <figure
                                key={j}
                                className={`group relative overflow-hidden rounded-2xl bg-muted/50 shadow-[0_12px_40px_-12px_rgba(20,25,30,0.25)] ring-1 ring-foreground/[0.06] ${
                                  mediaItem.type === "video" ? "sm:col-span-2" : ""
                                }`}
                              >
                                <div className={`relative w-full ${mediaItem.type === "image" ? "bg-gradient-to-br from-cream via-background to-ice-blue/40 p-2 sm:p-3" : "aspect-[5/4] sm:aspect-[3/2] lg:aspect-[16/10]"}`}>
                                  {mediaItem.type === "image" ? (
                                    <img
                                      src={mediaItem.src || "/placeholder.svg"}
                                      alt={`${item.title} - ${t.photoLabel} ${j + 1}`}
                                      className="block h-auto w-full max-h-[38rem] object-contain [image-orientation:from-image]"
                                      loading="lazy"
                                      decoding="async"
                                    />
                                  ) : (
                                    <video
                                      ref={(element) => {
                                        if (element) {
                                          videoRefs.current[i] = element;
                                        }
                                      }}
                                      src={mediaItem.src}
                                      aria-label={`${item.title} - ${t.videoLabel}`}
                                      className="absolute inset-0 h-full w-full object-cover object-center"
                                      muted
                                      loop
                                      playsInline
                                      preload="metadata"
                                    />
                                  )}
                                </div>
                              </figure>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto text-center px-6 reveal opacity-0">
          <p className="font-body text-muted-foreground leading-relaxed text-lg mb-8">{t.closing1}</p>
          <p className="font-body text-muted-foreground leading-relaxed text-lg mb-10">{t.closing2}</p>
          <p className="font-display text-2xl md:text-3xl italic text-foreground/80">{t.quote}</p>
          <p className="font-display text-lg text-primary mt-4">{t.closing3}</p>
          <img
            src={fino68YearsBadge}
            alt="68 years Fino"
            className="mx-auto mt-8 w-full max-w-[180px] sm:max-w-[210px]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
    </Layout>
  );
};

export default History;
