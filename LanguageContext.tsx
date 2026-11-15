"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const translations = {
  fr: {
    nav: {
      title: "Benjamin Decret - Compositeur",
      portfolio: "Mon Portfolio",
      services: "Services",
      about: "À propos",
      contact: "CONTACT",
      backToHome: "← Benjamin Decret - Compositeur",
      backToHomeBtn: "← Retour à l'accueil",
    },
    hero: {
      title: "Benjamin\nDecret",
      subtitle: "Compositeur de musique à l'image",
      description: "Création d'univers musicaux singuliers pour des projets vidéos. Compositions modernes, orchestrales ou expérimentales pour le jeu vidéo, le cinéma, les courts-métrages et la publicité",
      ctaListen: "ÉCOUTER MES COMPOSITIONS",
      ctaServices: "Mes services",
    },
    biography: {
      tag: "À propos",
      title: "Benjamin Decret",
      para1: "Compositeur, mon identité musicale repose sur une pratique passionnée et diversifiée. Multi-instrumentiste, formé à la musique à l'image et aux techniques d'orchestration, mon langage sonore se trouve à l'intersection du classique, de l'électronique, du jazz et du Rock.",
      para2: "Ma démarche artistique consiste à utiliser ma diversité d'influences musicales pour trouver une identité qui correspond parfaitement à votre projet, que ce soit par de la création sonore, l'utilisation d'instruments méconnus, ou l'enregistrement d'instruments réels que je pratique. Qu'il s'agisse d'un long-métrage d'animation, d'un jeu vidéo à l'atmosphère épique, ou d'un court-métrage intimiste, j'adapte avec précision ma palette sonore pour créer l'univers musical de chaque projet et servir la narration.",
      parcourTitle: "Mon parcours :",
      parcour1: "Apprentissage du violoncelle en conservatoire pendant plus de 15 ans, et participation à de nombreux orchestres, notamment en tant que soliste",
      parcour2: "Apprentissage du saxophone en conservatoire pendant 10 ans, participation à des ensembles de Jazz et d'improvisation",
      parcour3: "Formation autodidacte à la basse et la guitare, pratiquées dans mes différents groupes de musiques signés chez des labels indépendants (styles : Rock psyché, Black Metal, Dance Pop…)",
      parcour4: "Formation au sound design, pratique des synthétiseurs et de la musique électronique",
      parcour5: "Formation à la musique à l'image, obtention d'une certification, participation à des Masterclasses…",
    },
    services: {
      tag: "Ce que je propose",
      title: "SERVICES",
      description: "Découvrez mes services de composition musicale sur mesure pour vos projets artistiques. Création de bandes sonores uniques et originales.",
      collabTitle: "Collaboration",
      collabDesc: "Discutons ensemble de vos besoins et vos références pour créer un univers musical cohérent avant la première note.",
      prodTitle: "Production",
      prodDesc: "De l'écriture mélodique à l'arrangement structurel, je conçois une œuvre originale sur mesure, pensée pour porter votre message ou votre image.",
      mixTitle: "Mixage & Mastering",
      mixDesc: "Travail sur l'équilibre, l'espace et la dynamique pour transformer la production en un produit fini prêt pour une diffusion professionnelle.",
      ctaProject: "Discutons de votre projet",
    },
    portfolio: {
      tag: "Mes créations",
      title: "Portfolio",
      subtitle: "Musique à l'image",
      fullPortfolioBtn: "Portfolio complet →",
      seeFullPortfolioBtn: "Voir le portfolio complet →",
      narrativeTitle: "Musiques Narratives",
      narrativeLink: "Lien Soundcloud →",
      discoTitle: "Discographie",
      discoSubtitle: "mes projets de musique actuelle : Bedroom / Dance Pop, Rock psychédélique…",
      listenTitle: "À écouter",
      listenSubtitle: "ambiances narratives, jeux vidéos…",
      imageTitle: "À l'image",
      imageSubtitle: "musique pour films, trailers, jeux vidéos",
      styleLabel: "Style :",
      scTracks: {
        laspiration: {
          desc: "Création musicale onirique hybride",
          style: "classique, électronique, Dreamy, ambient"
        },
        whisperingTrees: {
          desc: "Création musicale ambiante dark",
          style: "organique, violoncelle, gothique"
        },
        ambientTides: {
          desc: "Création musicale organique électronique",
          style: "hybride violoncelle / synthétiseurs analogiques, ambient"
        },
        cuteFriendlyAdventure: {
          desc: "Musique réalisée pour un jeu vidéo",
          style: "médiéval fantasy retro / léger"
        },
        cuteFriendlyBattle: {
          desc: "Musique réalisée pour un jeu vidéo",
          style: "médiéval fantasy retro / léger"
        },
        darkNoireAmbiance: {
          desc: "Musique réalisée pour un jeu vidéo",
          style: "policier, Jazz sombre, années 1940, \"noire\""
        },
        japanHorror: {
          desc: "Musique réalisée pour un jeu vidéo",
          style: "Japonais féodal, sombre, mystérieux"
        },
        horrorChase: {
          desc: "Musique réalisée pour un jeu vidéo",
          style: "Horreur, stressant, ambient"
        },
        jazzyCozy: {
          desc: "Musique réalisée pour un jeu vidéo",
          style: "Jazz, Lounge, influence Bossa"
        },
        jazzyBluesy: {
          desc: "Musique réalisée pour un court métrage",
          style: "Jazz, Lounge, influence Blues"
        },
        tvShowFunk: {
          desc: "Musique réalisée pour un concept de jeu télévisé",
          style: "Générique Funk"
        }
      },
      fullPortfolioTitle: "Portfolio Complet",
      fullPortfolioDesc: "Exploration de mes compositions originales classées par thématiques et genres.",
      badge: {
        listen: "🎧 À écouter",
        image: "🎬 À l'image"
      },
      categories: {
        fantasy: "Fantasy & aventure",
        epicCinematic: "Épique & cinématique",
        retroLudic: "Rétro & ludique",
        contemplative: "Contemplatif & émotions",
        horror: "Horreur & gothique",
        animation: "Animation",
        jazz: "Jazz, blues & funk",
        electro: "Électro & jeu",
        songs: "Chanson pour l'image",
        discography: "Discographie"
      },
      filters: {
        all: "Tous les styles"
      },
      listenAll: "Tout voir →",
      videos: {
        hobbitErebor: {
          title: "The Hobbit - scène d'Erebor",
          desc: "Ma composition pour cette scène du \"Hobbit, un voyage inattendu\"",
          style: "orchestral, épique, médiéval/fantasy"
        },
        dune: {
          title: "DUNE - trailer",
          desc: "Ma proposition musicale pour le film \"Dune\", dans le style de John Williams",
          style: "musique orchestrale uniquement"
        },
        ghostOfTsushima: {
          title: "Ghost of Tsushima",
          desc: "Ma proposition musicale pour le trailer du Jeu Vidéo \"Ghost of Tsushima\"",
          style: "musique orchestrale, japonaise, percussions"
        },
        crab: {
          title: "Légende du crabe phare - court métrage",
          desc: "Ma proposition de rescore pour ce court métrage",
          style: "orchestral, hybrid, léger, nostalgique"
        },
        firstMan: {
          title: "First Man - scène d'atterrissage sur la lune",
          desc: "Ma proposition musicale pour une scène du film \"First Man\" dans le style Jóhann Jóhannsson",
          style: "textural, sound design, onirique, DeepSpace"
        },
        hotWheels: {
          title: "Hot Wheels Unleashed",
          desc: "Ma proposition musicale pour le Jeu Vidéo \"Hot Wheels Unleashed\"",
          style: "musique électronique rétro, rythmée et fun"
        },
        portela: {
          title: "Portela",
          desc: "Ma proposition musicale pour un trailer présentant des costumes pour le carnaval de Rio",
          style: "Musique du monde, électronique et acoustique, influences Brésiliennes et d'Afrique de l'Ouest"
        },
        loupGarou: {
          title: "Loup Garou - générique",
          desc: "Ma proposition musicale pour le générique de la série \"Loups Garous\"",
          style: "Orchestral, électronique, mystérieux"
        },
        hobbitCombat: {
          title: "The Hobbit - scène de combat",
          desc: "Ma proposition pour une scène du film \"La désolation de Smaug\"",
          style: "orchestral, action"
        },
        loveSimon: {
          title: "Love, Simon - scène",
          desc: "Ma proposition musicale pour une scène du film \"Love, Simon\"",
          style: "moderne, minimaliste et émotif"
        },
        darkBlueDungeon: {
          title: "Dark Blue Dungeon",
          desc: "Musique originale réalisée pour le jeu mobile \"Dark Blue Dungeon\"",
          style: "Retro, 8-bit, Médiéval"
        },
        ratatouille: {
          title: "Ratatouille - scène",
          desc: "Ma proposition pour une scène du film \"Ratatouille\"",
          style: "Orchestral, nostalgique, animé"
        },
        bladeRunner: {
          title: "Blade Runner - chanson",
          desc: "Ma proposition de chanson composée pour une scène du film \"Blade Runner 2049\"",
          style: "Synthwave, Retro, électronique"
        },
        wallE: {
          title: "WALL-E - chanson",
          desc: "Ma proposition de chanson composée pour une scène du film d'animation \"WALL-E\"",
          style: "musique moderne, jazz-trap, chanson"
        }
      }
    },
    contact: {
      tag: "Travaillons ensemble",
      title: "Contact",
      description: "Un projet en tête ? Je serais ravi d'en discuter avec vous.",
      imgAlt: "Illustration décorative contact",
    },
    footer: {
      composer: "Benjamin Decret — Compositeur",
      musicComposer: "Benjamin Decret — Compositeur de Musique à l'Image",
      copyright: "© {year} Benjamin Decret — Compositeur de Musique à l'Image"
    }
  },
  en: {
    nav: {
      title: "Benjamin Decret - Composer",
      portfolio: "My Portfolio",
      services: "Services",
      about: "About",
      contact: "CONTACT",
      backToHome: "← Benjamin Decret - Composer",
      backToHomeBtn: "← Back to Home",
    },
    hero: {
      title: "Benjamin\nDecret",
      subtitle: "Music Composer",
      description: "Creating unique musical universes for video projects. Modern, orchestral, or experimental compositions for video games, cinema, short films, and advertising.",
      ctaListen: "LISTEN TO MY COMPOSITIONS",
      ctaServices: "My services",
    },
    biography: {
      tag: "About Me",
      title: "Benjamin Decret",
      para1: "As a composer and multi-instrumentalist, my musical identity is built on a passionate and diverse practice. Trained in film music and orchestration techniques, my sonic language sits at the intersection of classical, electronic, jazz, and rock.",
      para2: "My artistic approach is to draw on the breadth of my musical influences to find an identity that perfectly fits your project — whether through original sound creation, the use of lesser-known instruments, or the recording of real instruments I play myself. Whether it's an animated feature, an epic-atmosphere video game, or an intimate short film, I tailor my sonic palette with precision to create the musical universe of each project and serve the narrative.",
      parcourTitle: "My background:",
      parcour1: "15+ years of cello training at conservatory, with participation in numerous orchestras, including as a soloist",
      parcour2: "10 years of saxophone training at conservatory, participation in jazz and improvisation ensembles",
      parcour3: "Self-taught bass and guitar, played in various bands signed to independent labels (styles: psychedelic rock, black metal, dance pop…)",
      parcour4: "Training in sound design, synthesizers, and electronic music production",
      parcour5: "Film music training, professional certification obtained, participation in Masterclasses…",
    },
    services: {
      tag: "What I Offer",
      title: "SERVICES",
      description: "Discover my custom music composition services for your artistic projects. Creation of unique and original soundtracks.",
      collabTitle: "Collaboration",
      collabDesc: "Let's discuss your needs and references together to create a cohesive musical universe before the first note.",
      prodTitle: "Production",
      prodDesc: "From melodic writing to structural arrangement, I design a custom original work, tailored to carry your message or your visuals.",
      mixTitle: "Mixing & Mastering",
      mixDesc: "Work on balance, space, and dynamics to transform the production into a polished final product ready for professional distribution.",
      ctaProject: "Let's discuss your project",
    },
    portfolio: {
      tag: "My Creations",
      title: "Portfolio",
      subtitle: "Music for Screen",
      fullPortfolioBtn: "Full Portfolio →",
      seeFullPortfolioBtn: "See full portfolio →",
      narrativeTitle: "Narrative Music",
      narrativeLink: "Soundcloud Link →",
      discoTitle: "Discography",
      discoSubtitle: "my contemporary music projects: Bedroom / Dance Pop, Psychedelic Rock…",
      listenTitle: "To Listen",
      listenSubtitle: "narrative atmospheres, video games…",
      imageTitle: "For Screen",
      imageSubtitle: "music for films, trailers, video games",
      styleLabel: "Style:",
      scTracks: {
        laspiration: {
          desc: "Hybrid dreamlike musical creation",
          style: "classical, electronic, Dreamy, ambient"
        },
        whisperingTrees: {
          desc: "Dark ambient musical creation",
          style: "organic, cello, gothic"
        },
        ambientTides: {
          desc: "Organic electronic musical creation",
          style: "cello / analog synthesizers hybrid, ambient"
        },
        cuteFriendlyAdventure: {
          desc: "Music composed for a video game",
          style: "medieval fantasy retro / light"
        },
        cuteFriendlyBattle: {
          desc: "Music composed for a video game",
          style: "medieval fantasy retro / light"
        },
        darkNoireAmbiance: {
          desc: "Music composed for a video game",
          style: "crime, dark jazz, 1940s, \"noir\""
        },
        japanHorror: {
          desc: "Music composed for a video game",
          style: "feudal Japanese, dark, mysterious"
        },
        horrorChase: {
          desc: "Music composed for a video game",
          style: "horror, tense, ambient"
        },
        jazzyCozy: {
          desc: "Music composed for a video game",
          style: "Jazz, Lounge, Bossa influence"
        },
        jazzyBluesy: {
          desc: "Music composed for a short film",
          style: "Jazz, Lounge, Blues influence"
        },
        tvShowFunk: {
          desc: "Music composed for a TV game show concept",
          style: "Funk theme"
        }
      },
      fullPortfolioTitle: "Full Portfolio",
      fullPortfolioDesc: "Exploration of my original compositions sorted by themes and genres.",
      badge: {
        listen: "🎧 To Listen",
        image: "🎬 For Screen"
      },
      categories: {
        fantasy: "Fantasy & Adventure",
        epicCinematic: "Epic & Cinematic",
        retroLudic: "Retro & Playful",
        contemplative: "Contemplative & Emotions",
        horror: "Horror & Gothic",
        animation: "Animation",
        jazz: "Jazz, Blues & Funk",
        electro: "Electro & Games",
        songs: "Songs for Screen",
        discography: "Discography"
      },
      filters: {
        all: "All styles"
      },
      listenAll: "See all →",
      videos: {
        hobbitErebor: {
          title: "The Hobbit - Erebor scene",
          desc: "My composition for this scene from \"The Hobbit: An Unexpected Journey\"",
          style: "orchestral, epic, medieval/fantasy"
        },
        dune: {
          title: "DUNE - trailer",
          desc: "My rescore proposal for the film \"Dune\", in the style of John Williams",
          style: "orchestral music only"
        },
        ghostOfTsushima: {
          title: "Ghost of Tsushima",
          desc: "My rescore proposal for the video game trailer \"Ghost of Tsushima\"",
          style: "orchestral music, Japanese, percussion"
        },
        crab: {
          title: "Légende du crabe phare - short film",
          desc: "My rescore proposal for this short film",
          style: "orchestral, hybrid, light, nostalgic"
        },
        firstMan: {
          title: "First Man - moon landing scene",
          desc: "My rescore proposal for a scene from the film \"First Man\" in the style of Jóhann Jóhannsson",
          style: "textural, sound design, dreamlike, DeepSpace"
        },
        hotWheels: {
          title: "Hot Wheels Unleashed",
          desc: "My rescore proposal for the video game \"Hot Wheels Unleashed\"",
          style: "retro electronic music, rhythmic and fun"
        },
        portela: {
          title: "Portela",
          desc: "My rescore proposal for a trailer presenting costumes for the Rio Carnival",
          style: "World music, electronic and acoustic, Brazilian and West African influences"
        },
        loupGarou: {
          title: "Loup Garou - theme song",
          desc: "My rescore proposal for the theme song of the series \"Loup Garou\"",
          style: "Orchestral, electronic, mysterious"
        },
        hobbitCombat: {
          title: "The Hobbit - combat scene",
          desc: "My rescore proposal for a scene from the film \"The Desolation of Smaug\"",
          style: "orchestral, action"
        },
        loveSimon: {
          title: "Love, Simon - scene",
          desc: "My rescore proposal for a scene from the film \"Love, Simon\"",
          style: "modern, minimalist and emotional"
        },
        darkBlueDungeon: {
          title: "Dark Blue Dungeon",
          desc: "Original music created for the mobile game \"Dark Blue Dungeon\"",
          style: "Retro, 8-bit, Medieval"
        },
        ratatouille: {
          title: "Ratatouille - scene",
          desc: "My rescore proposal for a scene from the film \"Ratatouille\"",
          style: "Orchestral, nostalgic, animated"
        },
        bladeRunner: {
          title: "Blade Runner - song",
          desc: "My rescore song proposal for a scene from the film \"Blade Runner 2049\"",
          style: "Synthwave, Retro, electronic"
        },
        wallE: {
          title: "WALL-E - song",
          desc: "My rescore song proposal for a scene from the animated film \"WALL-E\"",
          style: "modern music, jazz-trap, song"
        }
      }
    },
    contact: {
      tag: "Let's Work Together",
      title: "Contact",
      description: "Have a project in mind? I would be delighted to discuss it with you.",
      imgAlt: "Decorative contact illustration",
    },
    footer: {
      composer: "Benjamin Decret — Composer",
      musicComposer: "Benjamin Decret — Music Composer",
      copyright: "© {year} Benjamin Decret — Music Composer"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang") as Language;
    if (savedLang === "fr" || savedLang === "en") {
      setTimeout(() => setLanguageState(savedLang), 0);
    } else {
      // Fallback to browser preference if available
      const browserLang = navigator.language.substring(0, 2);
      if (browserLang === "en") {
        setTimeout(() => setLanguageState("en"), 0);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
    // Update the html lang attribute for accessibility / SEO
    document.documentElement.lang = lang;
  };

  const t = (path: string): string => {
    const keys = path.split(".");
    let current: Record<string, unknown> | string | undefined = translations[language] as unknown as Record<string, unknown>;

    for (const key of keys) {
      if (current && typeof current === "object" && current[key] !== undefined) {
        current = current[key] as Record<string, unknown> | string;
      } else {
        // Fallback to FR translation if EN doesn't exist
        let fallback: Record<string, unknown> | string | undefined = translations["fr"] as unknown as Record<string, unknown>;
        for (const fKey of keys) {
          if (fallback && typeof fallback === "object" && fallback[fKey] !== undefined) {
            fallback = fallback[fKey] as Record<string, unknown> | string;
          } else {
            return path; // Fallback to path string if all fails
          }
        }
        return typeof fallback === "string" ? fallback : path;
      }
    }

    return typeof current === "string" ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
