"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// ─── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#F5E6D3]/95 shadow-sm backdrop-blur-md"
        : "bg-transparent"
        }`}
    >
      <div className="safe-container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#intro" className="flex items-center gap-2 group">
          <span
            className="text-lg font-medium tracking-tighter"
            style={{ color: "black", fontFamily: "var(--font-tight), sans-serif" }}
          >
            Benjamin Decret - Compositeur
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Mon Portfolio", href: "#portfolio" },
            { label: "Services", href: "#services" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-semibold"
              style={{ color: "black" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:benjamin.decret@gmail.com"
            className="btn-primary"
          >
            CONTACT
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--deep-purple)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F5E6D3]/98 backdrop-blur-md border-t border-purple-100 px-6 py-4 flex flex-col gap-4">
          <a href="#portfolio" className="font-medium" style={{ color: "var(--text-primary)" }} onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#services" className="font-medium" style={{ color: "var(--text-primary)" }} onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#biographie" className="font-medium" style={{ color: "var(--text-primary)" }} onClick={() => setMenuOpen(false)}>À propos</a>
          <a href="mailto:benjamin.decret@gmail.com" className="btn-primary w-fit">Contact</a>
        </div>
      )}
    </header>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section id="intro" className="flex flex-col" style={{ background: "var(--beige)" }}>
      {/* Text Content */}
      <div className="safe-container flex-1 flex flex-col justify-center pt-52 pb-20">
        <h1
          className="text-5xl md:text-6xl font-black mt-12 mb-8 leading-[0.95] animate-fade-in-up"
          style={{ color: "black", fontFamily: "var(--font-tight), sans-serif", letterSpacing: "-0.05em" }}
        >
          Benjamin<br />Decret
        </h1>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start w-full">
          {/* Left side spacer to match Biography photo slot */}
          <div className="hidden md:block md:w-1/4 flex-shrink-0" aria-hidden="true" />

          <div className="flex-1">
            <h2
              className="text-2xl md:text-3xl font-bold mb-8 animate-fade-in-up delay-100"
              style={{ color: "black", fontFamily: "var(--font-tight), sans-serif" }}
            >
              Compositeur de musique à l&apos;image
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-10 animate-fade-in-up delay-200"
              style={{ color: "black", opacity: 0.8 }}
            >
              Création d&apos;univers musicaux singuliers pour des projets vidéos.
              Compositions modernes, orchestrales ou expérimentales pour le jeu vidéo,
              le cinéma, les courts-métrages et la publicité
            </p>
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up delay-400">
              <a href="#portfolio" className="btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ÉCOUTER MES COMPOSITIONS
              </a>
              <a href="#services" className="btn-secondary">
                Mes services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── BIOGRAPHY ────────────────────────────────────────────────────────────────
function BiographySection() {
  return (
    <section id="biographie" className="py-24" style={{ background: "var(--violet)" }}>
      <div className="safe-container">
        <p className="section-tag mb-2">À propos</p>
        <h2
          className="text-4xl md:text-5xl font-bold mb-16"
          style={{ color: "var(--deep-purple)" }}
        >
          Benjamin Decret
        </h2>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
          {/* Photo */}
          <div className="relative w-1/3 md:w-1/4 flex-shrink-0">
            <div
              className="aspect-[4/5] relative rounded-xl overflow-hidden border-2 border-black"
              style={{ boxShadow: "0 20px 60px rgba(61,43,107,0.15)" }}
            >
              <Image
                src="/BD_Profil.jpg"
                alt="Benjamin Decret - Portrait"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-40 animate-float"
              style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
            />
          </div>

          {/* Text content */}
          <div className="flex-1 relative">
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-primary)", opacity: 0.9 }}
            >
              Compositeur, mon identité musicale repose sur une pratique passionnée et diversifiée. Multi-instrumentiste, formé à la musicologie et aux techniques d&apos;orchestration, mon langage sonore se trouve à l&apos;intersection du classique, de l&apos;électronique, du jazz et du Pop Rock.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-0"
              style={{ color: "var(--text-primary)", opacity: 0.9 }}
            >
              Ma démarche artistique consiste à m&apos;immerger profondément dans chaque projet pour en saisir l&apos;essence dramatique et émotionnelle. Qu&apos;il s&apos;agisse d&apos;un long-métrage d&apos;animation, d&apos;un jeu vidéo à l&apos;atmosphère épique, ou d&apos;un court-métrage intimiste, j&apos;adapte avec précision ma palette sonore pour créer l&apos;univers musical de chaque projet et servir la narration.
            </p>

            {/* Small decorative brand image - Enlarged and full opacity - Moved 7px further down (total 148px offset) */}
            <div className="absolute bottom-[-148px] -right-20 w-48 h-48 pointer-events-none hidden md:block">
              <Image
                src="/ImageBD1.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function ServicesSection() {
  const services = [
    {
      img: "/collab.png",
      title: "Collaboration",
      desc: "Discutons ensemble de vos besoins et vos références pour créer un univers musical cohérent avant la première note.",
    },
    {
      img: "/Compo.png",
      title: "Production",
      desc: "De l'écriture mélodique à l'arrangement structurel, je conçois une œuvre originale sur mesure, pensée pour porter votre message ou votre image.",
    },
    {
      img: "/mixage.png",
      title: "Mixage & Mastering",
      desc: "Travail sur l'équilibre, l'espace et la dynamique pour transformer la production en un produit fini prêt pour une diffusion professionnelle.",
    },
  ];

  return (
    <section id="services" className="py-24" style={{ background: "var(--beige)" }}>
      <div className="safe-container">
        <p className="section-tag text-center mb-2">Ce que je propose</p>
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: "var(--deep-purple)" }}
        >
          SERVICES
        </h2>
        <p
          className="text-center max-w-2xl mx-auto mb-16 text-base md:text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          Découvrez mes services de composition musicale sur mesure pour vos projets artistiques.
          Création de bandes sonores uniques et originales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card bg-white/60 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center text-center"
              style={{ boxShadow: "0 4px 24px rgba(61,43,107,0.08)" }}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mb-6 relative" style={{ boxShadow: "0 8px 24px rgba(91,63,206,0.2)" }}>
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--deep-purple)" }}
              >
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="mailto:benjamin.decret@gmail.com" className="btn-primary">
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────
interface VideoCardProps {
  youtubeId: string;
  title: string;
  description: string;
  styleInfo?: string;
}

function VideoCard({ youtubeId, title, description, styleInfo }: VideoCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div>
        <h4 className="font-extrabold text-lg md:text-xl mb-2" style={{ color: "var(--deep-purple)", fontFamily: "var(--font-tight), sans-serif" }}>
          {title}
        </h4>
        <p className="text-sm md:text-base mb-1" style={{ color: "var(--text-primary)" }}>
          {description}
        </p>
        {styleInfo && (
          <p className="text-sm md:text-base mt-2" style={{ color: "var(--text-secondary)" }}>
            <span className="font-bold">Style :</span> {styleInfo}
          </p>
        )}
      </div>
    </div>
  );
}

function PortfolioSection() {
  // Replace with actual YouTube IDs
  const musicALImage = [
    {
      id: "TdaB6ceDu7Q",
      title: "DUNE",
      desc: "Ma proposition musicale pour le film \"Dune\", dans le style de John Williams",
      style: "musique orchestrale uniquement"
    },
    {
      id: "20P3-MGum8w",
      title: "Hot Wheels Unleashed",
      desc: "Ma proposition musicale pour le Jeu Vidéo \"Hot Wheels Unleashed\"",
      style: "musique électronique rétro, rythmée et fun"
    },
    {
      id: "Rh3MHu5MPp0",
      title: "Loups Garous Générique",
      desc: "Ma proposition musicale pour le générique de la série \"Loups Garous\"",
      style: "Orchestral, électronique, mystérieux"
    },
    {
      id: "zUmHYat-E1o",
      title: "Portela",
      desc: "Ma proposition musicale pour un trailer présentant des costumes pour le carnaval de Rio",
      style: "Musique du monde, électronique et acoustique, influences Brésiliennes et d'Afrique de l'Ouest"
    },
    {
      id: "ko6iEFALhlY",
      title: "Blade Runner 2049, Chanson",
      desc: "Ma proposition de chanson composée pour une scène du film \"Blade Runner 2049\"",
      style: "Synthwave, Retro, électronique"
    },
    {
      id: "Zo0qV6-G_KY",
      title: "Ratatouille, scène",
      desc: "Ma proposition pour une scène du film \"Ratatouille\"",
      style: "Orchestral, nostalgique, animé"
    },
  ];

  const spotifyEmbeds = [
    { id: "17bAoA6mVqGLxyGN6nEQrH", title: "Alma Real - Nostalnuit" },
    { id: "2l5TgEUTsIDimSpZ50K5JC", title: "Alma Real - Paradiso" },
    { id: "4ioNZeg74Mhd2j4phc1cyn", title: "Alma Real - Ocean" },
    { id: "2bEps8R0rTjuOkDQIPiGL2", title: "Alma Real - La mare aux songes" },
  ];

  return (
    <section id="portfolio" className="py-24" style={{ background: "var(--violet)" }}>
      <div className="safe-container">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="section-tag mb-2">Mes créations</p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--deep-purple)" }}
            >
              Portfolio
            </h2>
            <h3
              className="text-2xl font-normal mb-8"
              style={{ color: "var(--deep-purple)" }}
            >
              Musique à l&apos;image
            </h3>
          </div>
          <Link
            href="/portfolio"
            className="self-end text-sm font-medium opacity-50 hover:opacity-100 transition-opacity shrink-0 mb-8"
            style={{ color: "var(--deep-purple)" }}
          >
            Portfolio complet →
          </Link>
        </div>

        {/* 6 YouTube videos - 2 columns for larger display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
          {musicALImage.map((v, i) => (
            <VideoCard
              key={i}
              youtubeId={v.id}
              title={v.title}
              description={v.desc}
              styleInfo={v.style}
            />
          ))}
        </div>

        {/* Decorative branding images - Centered and tightened - Increased size to 200px */}
        <div className="flex flex-row justify-center items-center gap-12 mb-12 opacity-80">
          <div className="relative w-[200px] h-[200px]">
            <Image src="/ImageBD8.png" alt="" fill className="object-contain" />
          </div>
          <div className="relative w-[200px] h-[200px]" style={{ top: "20px" }}>
            <Image src="/ImageBD12.png" alt="" fill className="object-contain" />
          </div>
        </div>

        {/* Spotify — Projets musicaux - Wrapped in beige as requested */}
        <div className="mb-16 p-8 md:p-12 rounded-3xl" style={{ background: "var(--beige)" }}>
          <h3
            className="text-2xl font-normal mb-8"
            style={{ color: "var(--deep-purple)" }}
          >
            Projets Musicaux
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {spotifyEmbeds.map((sp, i) => (
              <div key={i} className="spotify-wrapper rounded-xl overflow-hidden shadow-sm">
                <iframe
                  src={`https://open.spotify.com/embed/track/${sp.id}?utm_source=generator&theme=0`}
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={sp.title}
                  style={{ border: "none" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA — Portfolio complet */}
        <div className="flex justify-center">
          <Link href="/portfolio" className="btn-primary text-base py-3 px-8">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Voir le portfolio complet
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section id="contact" className="pt-24 pb-12" style={{ background: "var(--beige)" }}>
      <div className="safe-container">
        <p className="section-tag mb-2">Travaillons ensemble</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--deep-purple)" }}
            >
              Contact
            </h2>
            <p className="text-lg mb-6" style={{ color: "var(--text-secondary)" }}>
              Un projet en tête ? Je serais ravi d&apos;en discuter avec vous.
            </p>
            <a
              href="mailto:benjamin.decret@gmail.com"
              className="btn-primary text-base py-3 px-8 mb-4 inline-flex"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Benjamin.decret@Gmail.com
            </a>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-[296px] h-[296px] opacity-90 animate-fade-in" style={{ marginTop: "-20px" }}>
              <Image
                src="/ImageBD10.png"
                alt="Illustration décorative contact"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Photo gallery — 4 slots */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={`/BD${n}.png`}
                alt={`Photo personnelle ${n}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{ background: "var(--beige)", borderColor: "rgba(61,43,107,0.1)" }}
    >
      <div className="safe-container flex flex-col md:flex-row items-center justify-between gap-6">
        <span
          className="text-lg"
          style={{ color: "black", fontFamily: "var(--font-tight), sans-serif" }}
        >
          Benjamin Decret
        </span>
        <nav className="flex flex-wrap justify-center gap-6">
          {[
            { label: "Portfolio", href: "#portfolio" },
            { label: "Services", href: "#services" },
            { label: "À propos", href: "#biographie" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm hover:underline"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:benjamin.decret@gmail.com"
          className="text-sm font-medium hover:underline"
          style={{ color: "var(--accent-violet-dark)" }}
        >
          benjamin.decret@gmail.com
        </a>
      </div>
      <div className="text-center mt-6 text-xs" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>
        © {new Date().getFullYear()} Benjamin Decret — Compositeur de Musique à l&apos;Image
      </div>
    </footer>
  );
}

// ─── PAGE ROOT ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* High Quality Illustration - BD_BG_AG.png */}
        <div className="w-full" style={{ background: "var(--beige)" }}>
          <div className="w-[85%] mx-auto pb-16">
            <Image
              src="/BD_BG_AG.png"
              alt="Musical illustration banner high quality"
              width={1920}
              height={800}
              className="object-contain w-auto h-auto mx-auto block"
              priority
            />
          </div>
        </div>
        <BiographySection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
