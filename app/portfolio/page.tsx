"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ScCard from "../components/ScCard";
import YtCard from "../components/YtCard";

// ─── TYPES ─────────────────────────────────────────────────────────────────────
type Tag =
  | "fantasy"
  | "horreur"
  | "contemplatif"
  | "jazz"
  | "animation"
  | "electro"
  | "chanson";

interface ScTrack {
  url: string;
  title: string;
  tags: Tag[];
}

interface VideoItem {
  youtubeId?: string;
  dailymotionId?: string;
  /** Key in t("portfolio.videos.{key}.title/desc/style") */
  key: string;
  tags: Tag[];
}

// ─── CONTENT DATA ──────────────────────────────────────────────────────────────
// NB: Titles for SC tracks are the same in FR and EN — hardcoded here.
const SC_TRACKS: ScTrack[] = [
  { url: "https://soundcloud.com/benjamin-decret/laspiration", title: "L'Aspiration", tags: ["contemplatif"] },
  { url: "https://soundcloud.com/benjamin-decret/whispering-forest", title: "Whispering Trees", tags: ["horreur"] },
  { url: "https://soundcloud.com/benjamin-decret/ambiant-tides-concept-ambiant", title: "Ambient Tides", tags: ["contemplatif"] },
  { url: "https://soundcloud.com/benjamin-decret/video-game-cute-fantasy-battle", title: "Cute Fantasy Battle", tags: ["fantasy"] },
  { url: "https://soundcloud.com/benjamin-decret/video-game-cute-fantasy", title: "Cute Fantasy Adventure", tags: ["fantasy"] },
  // Dark Jazz: multi-tag (horreur + jazz)
  { url: "https://soundcloud.com/benjamin-decret/ambient-video-game-dark-jazz", title: "Dark Jazz", tags: ["horreur", "jazz"] },
  { url: "https://soundcloud.com/benjamin-decret/jazzy-cozy-concept", title: "Jazzy Cozy Ambience", tags: ["jazz"] },
  { url: "https://soundcloud.com/benjamin-decret/jazz-saxo-concept", title: "Jazz Bluesy Ambience", tags: ["jazz"] },
  { url: "https://soundcloud.com/benjamin-decret/japan-horror-concept", title: "Japan Horror", tags: ["horreur"] },
  // Horror Chase — lien mis à jour
  { url: "https://soundcloud.com/benjamin-decret/horror-game-chase-demo", title: "Horror Chase", tags: ["horreur"] },
  { url: "https://soundcloud.com/benjamin-decret/tv-show-funk-concept", title: "TV Show Funk", tags: ["jazz"] },
];

const VIDEOS: VideoItem[] = [
  // Fantasy — Épique & cinématique
  { youtubeId: "EXrNm_RSwJA", key: "hobbitErebor", tags: ["fantasy"] },
  { youtubeId: "0aRqQLaKgUk", key: "hobbitCombat", tags: ["fantasy"] },
  { youtubeId: "NBPVIljJBqg", key: "dune", tags: ["fantasy"] },
  { youtubeId: "rrmwLnb5aqE", key: "ghostOfTsushima", tags: ["fantasy"] },
  // Fantasy — Rétro & ludique
  { youtubeId: "t2qj770DaEE", key: "darkBlueDungeon", tags: ["fantasy"] },
  // Horreur
  { youtubeId: "Rh3MHu5MPp0", key: "loupGarou", tags: ["horreur"] },
  // Contemplatif
  { youtubeId: "kvVGmnB_IDE", key: "firstMan", tags: ["contemplatif"] },
  { youtubeId: "bnHy42OgkXA", key: "loveSimon", tags: ["contemplatif"] },
  // Animation — Crabe Phare (Dailymotion — works on prod domain, not localhost)
  { dailymotionId: "k6gyPu1YFnJPCtG0DpQ", key: "crab", tags: ["animation"] },
  { youtubeId: "Zo0qV6-G_KY", key: "ratatouille", tags: ["animation"] },
  // Électro & jeu
  { youtubeId: "20P3-MGum8w", key: "hotWheels", tags: ["electro"] },
  { youtubeId: "zUmHYat-E1o", key: "portela", tags: ["electro"] },
  // Multi-tag: Blade Runner → electro + chanson
  { youtubeId: "-w1ESTbQs4k", key: "bladeRunner", tags: ["electro", "chanson"] },
  // Multi-tag: WALL-E → jazz + chanson
  { youtubeId: "inQW64to0k4", key: "wallE", tags: ["jazz", "chanson"] },
];

// Discography — Spotify
const SPOTIFY = [
  { id: "17bAoA6mVqGLxyGN6nEQrH", title: "Alma Real - Nostalnuit" },
  { id: "2l5TgEUTsIDimSpZ50K5JC", title: "Alma Real - Paradiso" },
  { id: "4ioNZeg74Mhd2j4phc1cyn", title: "Alma Real - Ocean" },
  { id: "2bEps8R0rTjuOkDQIPiGL2", title: "Alma Real - La mare aux songes" },
];

// ─── FILTER CONFIG ─────────────────────────────────────────────────────────────
const FILTER_TAGS: Array<{ id: Tag | "all"; labelKey: string }> = [
  { id: "fantasy", labelKey: "portfolio.categories.fantasy" },
  { id: "horreur", labelKey: "portfolio.categories.horror" },
  { id: "contemplatif", labelKey: "portfolio.categories.contemplative" },
  { id: "jazz", labelKey: "portfolio.categories.jazz" },
  { id: "animation", labelKey: "portfolio.categories.animation" },
  { id: "electro", labelKey: "portfolio.categories.electro" },
  { id: "chanson", labelKey: "portfolio.categories.songs" },
  { id: "all", labelKey: "portfolio.filters.all" },
];

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const { t } = useLanguage();
  // Default filter: "fantasy". Restored from URL hash if present.
  const [activeFilter, setActiveFilter] = useState<Tag | "all">("fantasy");

  // On mount: read hash and pre-select the matching filter
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && FILTER_TAGS.some((f) => f.id === hash)) {
      setActiveFilter(hash as Tag | "all");
    }
  }, []);

  // Click handler: update state + push hash to URL
  const handleFilterClick = (id: Tag | "all") => {
    setActiveFilter(id);
    if (id === "all") {
      window.history.replaceState(null, "", window.location.pathname);
    } else {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  // Filter helpers
  const filteredTracks =
    activeFilter === "all"
      ? SC_TRACKS
      : SC_TRACKS.filter((tr) => tr.tags.includes(activeFilter));

  const filteredVideos =
    activeFilter === "all"
      ? VIDEOS
      : VIDEOS.filter((v) => v.tags.includes(activeFilter));

  const hasAudio = filteredTracks.length > 0;
  const hasVideo = filteredVideos.length > 0;

  return (
    <>
      {/* ── Navbar ── */}
      <header
        className="sticky top-0 z-50 bg-[#E0DBFF]/95 backdrop-blur-md border-b"
        style={{ borderColor: "rgba(61,43,107,0.12)" }}
      >
        <div className="safe-container flex items-center justify-between py-3">
          <Link
            href="/"
            className="text-sm font-semibold hover:opacity-70 transition-opacity"
            style={{ color: "var(--deep-purple)" }}
          >
            {t("nav.backToHome")}
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a href="mailto:benjamin.decret@gmail.com" className="btn-primary" style={{ fontSize: "0.8rem", padding: "0.4rem 1rem" }}>
              {t("nav.contact")}
            </a>
          </div>
        </div>
      </header>

      <main style={{ background: "var(--violet)", minHeight: "100vh" }} className="relative">
        {/* Marge gauche : ImageBD4, ImageBD7 — évite ImageBD1/8/12 déjà en bas */}
        <img src="/ImageBD4.png" alt="" className="margin-deco margin-deco-left" style={{ top: "350px" }} />
        <img src="/ImageBD7.png" alt="" className="margin-deco margin-deco-left" style={{ top: "960px" }} />
        {/* Marge droite : ImageBD11, ImageBD13 — décalées */}
        <img src="/ImageBD11.png" alt="" className="margin-deco margin-deco-right" style={{ top: "620px" }} />
        <img src="/ImageBD13.png" alt="" className="margin-deco margin-deco-right" style={{ top: "1240px" }} />
        <div className="safe-container py-16">

          {/* Page title */}
          <div className="mb-10">
            <p className="section-tag mb-2">{t("portfolio.tag")}</p>
            <h1
              className="text-5xl md:text-6xl font-black mb-4"
              style={{ color: "var(--deep-purple)" }}
            >
              {t("portfolio.fullPortfolioTitle")}
            </h1>
            <p className="text-base md:text-lg" style={{ color: "var(--text-secondary)" }}>
              {t("portfolio.fullPortfolioDesc")}
            </p>
          </div>


          {/* ── Bloc filtres + contenu — conteneur beige unifié ── */}
          <div className="mb-10 rounded-3xl overflow-hidden" style={{ background: "var(--beige)" }}>

            {/* Filtre pills */}
            <div
              className="px-8 md:px-12 pt-8 pb-6"
              style={{ borderBottom: "1.5px solid rgba(61,43,107,0.1)" }}
            >
              <div className="filter-pills">
                {FILTER_TAGS.map(({ id, labelKey }) => (
                  <button
                    key={id}
                    className={`filter-pill${activeFilter === id ? " active" : ""}`}
                    onClick={() => handleFilterClick(id)}
                  >
                    {t(labelKey)}
                  </button>
                ))}
              </div>
            </div>

            {/* ── À écouter ── */}
            {hasAudio && (
              <div
                className="px-8 md:px-12 py-10"
                style={hasVideo ? { borderBottom: "1.5px solid rgba(61,43,107,0.1)" } : undefined}
              >
                <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--deep-purple)" }}>
                  {t("portfolio.listenTitle")}
                </h2>
                <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
                  {t("portfolio.listenSubtitle")}
                </p>
                <div className="sc-grid">
                  {filteredTracks.map((track) => (
                    <ScCard key={track.url} url={track.url} title={track.title} />
                  ))}
                </div>
              </div>
            )}

            {/* ── À l'image ── */}
            {hasVideo && (
              <div className="px-8 md:px-12 py-10">
                <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--deep-purple)" }}>
                  {t("portfolio.imageTitle")}
                </h2>
                <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
                  {t("portfolio.imageSubtitle")}
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {filteredVideos.map((v) => (
                    <YtCard
                      key={v.key}
                      youtubeId={v.youtubeId}
                      dailymotionId={v.dailymotionId}
                      title={t(`portfolio.videos.${v.key}.title`)}
                      description={t(`portfolio.videos.${v.key}.desc`)}
                      styleInfo={t(`portfolio.videos.${v.key}.style`)}
                      styleLabel={t("portfolio.styleLabel")}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Empty state */}
            {!hasAudio && !hasVideo && (
              <div
                className="px-8 md:px-12 py-16 flex items-center justify-center"
                style={{ minHeight: 160 }}
              >
                <p style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>
                  Aucun élément pour ce filtre.
                </p>
              </div>
            )}

          </div>{/* fin conteneur unifié */}

        </div>{/* fin safe-container py-16 */}

        {/* Discographie — hors filtres */}
        <div className="safe-container pb-24">
          <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--deep-purple)" }}>
            {t("portfolio.discoTitle")}
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
            {t("portfolio.discoSubtitle")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SPOTIFY.map((sp) => (
              <div key={sp.id} className="spotify-wrapper rounded-xl overflow-hidden shadow-sm">
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

          {/* CTA — Retour à l'accueil */}
          <div className="flex justify-center mt-14 mb-2">
            <Link href="/" className="btn-secondary">
              {t("nav.backToHomeBtn")}
            </Link>
          </div>

          {/* Decorative images */}
          <div className="flex flex-row justify-center items-end gap-8 md:gap-12 opacity-80 mt-14 pointer-events-none select-none overflow-hidden">
            <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] hidden sm:block">
              <img src="/ImageBD8.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="relative w-[160px] h-[160px] md:w-[210px] md:h-[210px]" style={{ marginBottom: "-12px" }}>
              <img src="/ImageBD12.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] hidden sm:block">
              <img src="/ImageBD1.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="py-8 border-t"
        style={{ background: "var(--violet)", borderColor: "rgba(61,43,107,0.12)" }}
      >
        <div className="safe-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("nav.backToHomeBtn")}
          </Link>
          <a
            href="https://soundcloud.com/benjamin-decret"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold hover:opacity-70 transition-opacity flex items-center gap-2"
            style={{ color: "var(--deep-purple)" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M11.56 8.87V17h8.76c.87-.01 1.68-.64 1.68-1.56 0-.87-.69-1.58-1.56-1.58-.13 0-.26.02-.38.05-.03-2.1-1.73-3.8-3.84-3.8-.7 0-1.36.19-1.92.53V8.87c0-.48-.39-.87-.87-.87s-.87.39-.87.87zM0 15.24c0 .97.78 1.76 1.74 1.76.97 0 1.76-.79 1.76-1.76V11.5c0-.97-.79-1.74-1.76-1.74C.78 9.76 0 10.53 0 11.5v3.74zm5.24 1.27c0 .27.21.49.49.49s.49-.22.49-.49V9.4c0-.27-.22-.49-.49-.49s-.49.22-.49.49v7.11zm1.68.27c0 .27.21.49.49.49s.49-.22.49-.49V8.51c0-.27-.22-.49-.49-.49s-.49.22-.49.49v8.27zm1.68-.1c0 .27.21.49.49.49s.49-.22.49-.49V9.82c0-.27-.22-.49-.49-.49s-.49.22-.49.49v6.86z" />
            </svg>
            SoundCloud ↗
          </a>
        </div>
        <p className="text-xs mt-4 text-center" style={{ color: "var(--text-secondary)", opacity: 0.5 }}>
          {t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}
        </p>
      </footer>
    </>
  );
}
