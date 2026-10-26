"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

// ─── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

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
      <div className="safe-container flex items-center justify-between py-[9px]">
        {/* Logo */}
        <div className="flex items-center gap-3 min-w-0 shrink">
          <a href="#intro" className="flex items-center gap-2 group min-w-0">
            <span
              className="text-base sm:text-lg font-medium tracking-tighter truncate"
              style={{ color: "black", fontFamily: "var(--font-tight), sans-serif" }}
            >
              {t("nav.title")}
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: t("nav.portfolio"), href: "#portfolio" },
            { label: t("nav.services"), href: "#services" },
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
          <LanguageSwitcher />
          <a
            href="mailto:benjamin.decret@gmail.com"
            className="btn-primary"
            style={{ height: 'max-content', padding: '10px 24px', margin: 'auto 0' }}
          >
            {t("nav.contact")}
          </a>
        </nav>

        {/* Mobile Nav Actions */}
        <div className="flex md:hidden items-center shrink-0 gap-3">
          <LanguageSwitcher />
          <button
            className="p-2 ml-1 rounded-lg"
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
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F5E6D3]/98 backdrop-blur-md border-t border-purple-100 px-6 py-4 flex flex-col gap-4">
          <a href="#portfolio" className="font-medium" style={{ color: "var(--text-primary)" }} onClick={() => setMenuOpen(false)}>{t("nav.portfolio")}</a>
          <a href="#services" className="font-medium" style={{ color: "var(--text-primary)" }} onClick={() => setMenuOpen(false)}>{t("nav.services")}</a>
          <a href="#biographie" className="font-medium" style={{ color: "var(--text-primary)" }} onClick={() => setMenuOpen(false)}>Bio</a>
          <a href="mailto:benjamin.decret@gmail.com" className="btn-primary w-fit">{t("nav.contact")}</a>
        </div>
      )}
    </header>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  const { t } = useLanguage();

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
              {t("hero.subtitle")}
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-10 animate-fade-in-up delay-200"
              style={{ color: "black", opacity: 0.8 }}
            >
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up delay-400">
              <a href="#portfolio" className="btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t("hero.ctaListen")}
              </a>
              <a href="#services" className="btn-secondary">
                {t("hero.ctaServices")}
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
  const { t } = useLanguage();

  return (
    <section id="biographie" className="py-24" style={{ background: "var(--violet)" }}>
      <div className="safe-container">
        <p className="section-tag mb-2">{t("biography.tag")}</p>
        <h2
          className="text-4xl md:text-5xl font-bold mb-16"
          style={{ color: "var(--deep-purple)" }}
        >
          {t("biography.title")}
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
              {t("biography.para1")}
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-0"
              style={{ color: "var(--text-primary)", opacity: 0.9 }}
            >
              {t("biography.para2")}
            </p>

            {/* Small decorative brand image - Enlarged and full opacity - Moved further down to prevent text overlap, especially in English */}
            <div className="absolute bottom-[-185px] -right-20 w-48 h-48 pointer-events-none hidden md:block">
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
  const { t } = useLanguage();

  const services = [
    {
      img: "/collab.png",
      title: t("services.collabTitle"),
      desc: t("services.collabDesc"),
    },
    {
      img: "/Compo.png",
      title: t("services.prodTitle"),
      desc: t("services.prodDesc"),
    },
    {
      img: "/mixage.png",
      title: t("services.mixTitle"),
      desc: t("services.mixDesc"),
    },
  ];

  return (
    <section id="services" className="py-24" style={{ background: "var(--beige)" }}>
      <div className="safe-container">
        <p className="section-tag text-center mb-2">{t("services.tag")}</p>
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: "var(--deep-purple)" }}
        >
          {t("services.title")}
        </h2>
        <p
          className="text-center max-w-2xl mx-auto mb-16 text-base md:text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          {t("services.description")}
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
            {t("services.ctaProject")}
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────
import ScCard from "./components/ScCard";
import YtCard from "./components/YtCard";

function PortfolioSection() {
  const { t } = useLanguage();

  // ── BLOC 1 : À écouter — 4 tracks, 2×2 grid ──────────────────────────────
  const scTracks = [
    { url: "https://soundcloud.com/benjamin-decret/laspiration", title: "L'Aspiration" },
    { url: "https://soundcloud.com/benjamin-decret/whispering-forest", title: "Whispering Trees" },
    { url: "https://soundcloud.com/benjamin-decret/ambiant-tides-concept-ambiant", title: "Ambient Tides" },
    { url: "https://soundcloud.com/benjamin-decret/video-game-cute-fantasy", title: "Cute Fantasy" },
  ];

  // ── BLOC 2 : À l'image — 4 videos, 2-col grid ────────────────────────────
  const imageVideos = [
    {
      youtubeId: "NBPVIljJBqg",
      title: t("portfolio.videos.dune.title"),
      description: t("portfolio.videos.dune.desc"),
      styleInfo: t("portfolio.videos.dune.style"),
    },
    {
      youtubeId: "EXrNm_RSwJA",
      title: t("portfolio.videos.hobbitErebor.title"),
      description: t("portfolio.videos.hobbitErebor.desc"),
      styleInfo: t("portfolio.videos.hobbitErebor.style"),
    },
    {
      dailymotionId: "k6gyPu1YFnJPCtG0DpQ",
      title: t("portfolio.videos.crab.title"),
      description: t("portfolio.videos.crab.desc"),
      styleInfo: t("portfolio.videos.crab.style"),
    },
    {
      youtubeId: "20P3-MGum8w",
      title: t("portfolio.videos.hotWheels.title"),
      description: t("portfolio.videos.hotWheels.desc"),
      styleInfo: t("portfolio.videos.hotWheels.style"),
    },
  ];

  // ── BLOC 3 : Discographie — 4 Spotify albums ────────────────────────────
  const spotifyEmbeds = [
    { id: "17bAoA6mVqGLxyGN6nEQrH", title: "Alma Real - Nostalnuit" },
    { id: "2l5TgEUTsIDimSpZ50K5JC", title: "Alma Real - Paradiso" },
    { id: "4ioNZeg74Mhd2j4phc1cyn", title: "Alma Real - Ocean" },
    { id: "2bEps8R0rTjuOkDQIPiGL2", title: "Alma Real - La mare aux songes" },
  ];

  return (
    <section id="portfolio" className="py-24 relative" style={{ background: "var(--violet)" }}>
      {/* Marge gauche : ImageBD2, ImageBD5, ImageBD9 (espacées verticalement) */}
      <img src="/ImageBD2.png" alt="" className="margin-deco margin-deco-left" style={{ top: "80px" }} />
      <img src="/ImageBD5.png" alt="" className="margin-deco margin-deco-left" style={{ top: "560px" }} />
      <img src="/ImageBD9.png" alt="" className="margin-deco margin-deco-left" style={{ top: "1040px" }} />
      {/* Marge droite : ImageBD3, ImageBD6, ImageBD10 — décalées pour alterner */}
      <img src="/ImageBD3.png" alt="" className="margin-deco margin-deco-right" style={{ top: "270px" }} />
      <img src="/ImageBD6.png" alt="" className="margin-deco margin-deco-right" style={{ top: "760px" }} />
      <img src="/ImageBD10.png" alt="" className="margin-deco margin-deco-right" style={{ top: "1210px" }} />
      <div className="safe-container">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <p className="section-tag mb-2">{t("portfolio.tag")}</p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--deep-purple)" }}
            >
              {t("portfolio.title")}
            </h2>
          </div>
          <Link href="/portfolio" className="self-start md:self-end btn-primary shrink-0 mb-8">
            {t("portfolio.fullPortfolioBtn")}
          </Link>
        </div>

        {/* ── BLOC 1 : À écouter ── */}
        <div className="mb-12 p-8 md:p-12 rounded-3xl" style={{ background: "var(--beige)" }}>
          <div className="flex items-center justify-between gap-4 mb-2">
            <h3 className="text-2xl font-bold" style={{ color: "var(--deep-purple)" }}>
              {t("portfolio.listenTitle")}
            </h3>
            <Link
              href="/portfolio"
              className="text-sm font-bold hover:opacity-70 transition-opacity shrink-0"
              style={{ color: "var(--deep-purple)" }}
            >
              {t("portfolio.listenAll")}
            </Link>
          </div>
          <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
            {t("portfolio.listenSubtitle")}
          </p>
          {/* 2×2 grid of square SC cards */}
          <div className="sc-grid">
            {scTracks.map((track) => (
              <ScCard key={track.url} url={track.url} title={track.title} />
            ))}
          </div>
          <div className="mt-6 text-right">
            <a
              href="https://soundcloud.com/benjamin-decret"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:opacity-70 transition-opacity inline-flex items-center gap-1.5"
              style={{ color: "var(--deep-purple)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.56 8.87V17h8.76c.87-.01 1.68-.64 1.68-1.56 0-.87-.69-1.58-1.56-1.58-.13 0-.26.02-.38.05-.03-2.1-1.73-3.8-3.84-3.8-.7 0-1.36.19-1.92.53V8.87c0-.48-.39-.87-.87-.87s-.87.39-.87.87zM0 15.24c0 .97.78 1.76 1.74 1.76.97 0 1.76-.79 1.76-1.76V11.5c0-.97-.79-1.74-1.76-1.74C.78 9.76 0 10.53 0 11.5v3.74zm5.24 1.27c0 .27.21.49.49.49s.49-.22.49-.49V9.4c0-.27-.22-.49-.49-.49s-.49.22-.49.49v7.11zm1.68.27c0 .27.21.49.49.49s.49-.22.49-.49V8.51c0-.27-.22-.49-.49-.49s-.49.22-.49.49v8.27zm1.68-.1c0 .27.21.49.49.49s.49-.22.49-.49V9.82c0-.27-.22-.49-.49-.49s-.49.22-.49.49v6.86z" />
              </svg>
              {t("portfolio.listenAll").replace("→", "")} sur SoundCloud ↗
            </a>
          </div>
        </div>

        {/* ── BLOC 2 : À l'image ── */}
        <div className="mb-12 p-8 md:p-12 rounded-3xl" style={{ background: "var(--beige)" }}>
          <div className="flex items-center justify-between gap-4 mb-2">
            <h3 className="text-2xl font-bold" style={{ color: "var(--deep-purple)" }}>
              {t("portfolio.imageTitle")}
            </h3>
            <Link
              href="/portfolio"
              className="text-sm font-bold hover:opacity-70 transition-opacity shrink-0"
              style={{ color: "var(--deep-purple)" }}
            >
              {t("portfolio.listenAll")}
            </Link>
          </div>
          <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
            {t("portfolio.imageSubtitle")}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {imageVideos.map((v, i) => (
              <YtCard
                key={i}
                youtubeId={v.youtubeId}
                dailymotionId={v.dailymotionId}
                title={v.title}
                description={v.description}
                styleInfo={v.styleInfo}
                styleLabel={t("portfolio.styleLabel")}
              />
            ))}
          </div>
        </div>

        {/* ── BLOC 3 : Discographie ── */}
        <div className="mb-16 p-8 md:p-12 rounded-3xl" style={{ background: "var(--beige)" }}>
          <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--deep-purple)" }}>
            {t("portfolio.discoTitle")}
          </h3>
          <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
            {t("portfolio.discoSubtitle")}
          </p>
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
        <div className="flex justify-center mb-16">
          <Link href="/portfolio" className="btn-primary">
            {t("portfolio.seeFullPortfolioBtn")}
          </Link>
        </div>

        {/* Decorative images — placed AFTER the CTA */}
        <div className="flex flex-row justify-center items-center gap-12 opacity-80">
          <div className="relative w-[200px] h-[200px]">
            <Image src="/ImageBD8.png" alt="" fill className="object-contain" />
          </div>
          <div className="relative w-[200px] h-[200px]" style={{ top: "20px" }}>
            <Image src="/ImageBD12.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
// ─── CONTACT ──────────────────────────────────────────────────────────────────
function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="pt-24 pb-12" style={{ background: "var(--beige)" }}>
      <div className="safe-container">
        <p className="section-tag mb-2">{t("contact.tag")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--deep-purple)" }}
            >
              {t("contact.title")}
            </h2>
            <p className="text-lg mb-6" style={{ color: "var(--text-secondary)" }}>
              {t("contact.description")}
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
                alt={t("contact.imgAlt")}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Photo gallery — 5 slots */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["BD1.png", "BD5.jpg", "BD3.png", "BD6.jpg", "BD7.jpg"].map((img, idx) => (
            <div key={idx} className="relative w-[calc(50%-0.5rem)] md:w-[calc(20%-0.8rem)] aspect-square rounded-xl overflow-hidden">
              <Image
                src={`/${img}`}
                alt={`Photo personnelle ${idx + 1}`}
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
  const { t } = useLanguage();

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
            { label: t("portfolio.title"), href: "#portfolio" },
            { label: t("nav.services"), href: "#services" },
            { label: "Bio", href: "#biographie" },
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
        {t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}
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
