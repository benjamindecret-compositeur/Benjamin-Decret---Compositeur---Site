"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

interface VideoCardProps {
    youtubeId?: string;
    dailymotionId?: string;
    title: string;
    description: string;
    styleInfo?: string;
    category?: string;
}

function VideoCard({ youtubeId, dailymotionId, title, description, styleInfo }: VideoCardProps) {
    const [dmPlaying, setDmPlaying] = useState(false);
    const { t } = useLanguage();

    return (
        <div className="flex flex-col gap-4 group">
            <div className="video-wrapper rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                {youtubeId ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-none"
                    />
                ) : dailymotionId ? (
                    dmPlaying ? (
                        <iframe
                            src={`https://www.dailymotion.com/embed/video/${dailymotionId}?autoplay=1`}
                            title={title}
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full border-none"
                            style={{ width: "100%", height: "100%" }}
                        />
                    ) : (
                        <button
                            onClick={() => setDmPlaying(true)}
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                border: "none",
                                cursor: "pointer",
                                background: "#000",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            aria-label={`Lire ${title}`}
                        >
                            <img
                                src={`https://www.dailymotion.com/thumbnail/video/${dailymotionId}`}
                                alt={title}
                                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                            />
                            <div style={{
                                position: "relative",
                                zIndex: 2,
                                width: 68,
                                height: 48,
                                background: "rgba(0,0,0,0.75)",
                                borderRadius: 12,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "background 0.2s",
                            }}>
                                <svg width="24" height="28" viewBox="0 0 24 28" fill="white">
                                    <polygon points="4,2 22,14 4,26" />
                                </svg>
                            </div>
                        </button>
                    )
                ) : null}
            </div>
            <div className="px-1">
                <h4 className="text-xl font-bold mb-1" style={{ color: "var(--deep-purple)" }}>{title}</h4>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {description}
                </p>
                {styleInfo && (
                    <p className="text-sm md:text-base mt-2" style={{ color: "var(--text-secondary)" }}>
                        <span className="font-bold">{t("portfolio.styleLabel")}</span> {styleInfo}
                    </p>
                )}
            </div>
        </div>
    );
}

export default function PortfolioPage() {
    const { t } = useLanguage();

    const categories = [
        {
            name: t("portfolio.categories.fantasy"),
            videos: [
                {
                    youtubeId: "EXrNm_RSwJA",
                    title: t("portfolio.videos.hobbitErebor.title"),
                    description: t("portfolio.videos.hobbitErebor.desc"),
                    styleInfo: t("portfolio.videos.hobbitErebor.style")
                },
                {
                    youtubeId: "NBPVIljJBqg",
                    title: t("portfolio.videos.dune.title"),
                    description: t("portfolio.videos.dune.desc"),
                    styleInfo: t("portfolio.videos.dune.style")
                },
                {
                    youtubeId: "0aRqQLaKgUk",
                    title: t("portfolio.videos.hobbitCombat.title"),
                    description: t("portfolio.videos.hobbitCombat.desc"),
                    styleInfo: t("portfolio.videos.hobbitCombat.style")
                },
            ],
        },
        {
            name: t("portfolio.categories.drama"),
            videos: [
                {
                    youtubeId: "bnHy42OgkXA",
                    title: t("portfolio.videos.loveSimon.title"),
                    description: t("portfolio.videos.loveSimon.desc"),
                    styleInfo: t("portfolio.videos.loveSimon.style")
                },
                {
                    youtubeId: "kvVGmnB_IDE",
                    title: t("portfolio.videos.firstMan.title"),
                    description: t("portfolio.videos.firstMan.desc"),
                    styleInfo: t("portfolio.videos.firstMan.style")
                },
            ],
        },
        {
            name: t("portfolio.categories.videogame"),
            videos: [
                {
                    youtubeId: "20P3-MGum8w",
                    title: t("portfolio.videos.hotWheels.title"),
                    description: t("portfolio.videos.hotWheels.desc"),
                    styleInfo: t("portfolio.videos.hotWheels.style")
                },
                {
                    youtubeId: "t2qj770DaEE",
                    title: t("portfolio.videos.darkBlueDungeon.title"),
                    description: t("portfolio.videos.darkBlueDungeon.desc"),
                    styleInfo: t("portfolio.videos.darkBlueDungeon.style")
                },
                {
                    youtubeId: "rrmwLnb5aqE",
                    title: t("portfolio.videos.ghostOfTsushima.title"),
                    description: t("portfolio.videos.ghostOfTsushima.desc"),
                    styleInfo: t("portfolio.videos.ghostOfTsushima.style")
                },
            ],
        },
        {
            name: t("portfolio.categories.tvtheme"),
            videos: [
                {
                    youtubeId: "Rh3MHu5MPp0",
                    title: t("portfolio.videos.loupGarou.title"),
                    description: t("portfolio.videos.loupGarou.desc"),
                    styleInfo: t("portfolio.videos.loupGarou.style")
                },
            ],
        },
        {
            name: t("portfolio.categories.advertising"),
            videos: [
                {
                    youtubeId: "zUmHYat-E1o",
                    title: t("portfolio.videos.portela.title"),
                    description: t("portfolio.videos.portela.desc"),
                    styleInfo: t("portfolio.videos.portela.style")
                },
            ],
        },
        {
            name: t("portfolio.categories.animation"),
            videos: [
                {
                    dailymotionId: "k6gyPu1YFnJPCtG0DpQ",
                    title: t("portfolio.videos.crab.title"),
                    description: t("portfolio.videos.crab.desc"),
                    styleInfo: t("portfolio.videos.crab.style")
                },
                {
                    youtubeId: "Zo0qV6-G_KY",
                    title: t("portfolio.videos.ratatouille.title"),
                    description: t("portfolio.videos.ratatouille.desc"),
                    styleInfo: t("portfolio.videos.ratatouille.style")
                },
            ],
        },
        {
            name: t("portfolio.categories.songs"),
            videos: [
                {
                    youtubeId: "-w1ESTbQs4k",
                    title: t("portfolio.videos.bladeRunner.title"),
                    description: t("portfolio.videos.bladeRunner.desc"),
                    styleInfo: t("portfolio.videos.bladeRunner.style")
                },
                {
                    youtubeId: "inQW64to0k4",
                    title: t("portfolio.videos.wallE.title"),
                    description: t("portfolio.videos.wallE.desc"),
                    styleInfo: t("portfolio.videos.wallE.style")
                },
            ],
        },
    ];

    const spotifyEmbeds = [
        { id: "17bAoA6mVqGLxyGN6nEQrH", title: "Alma Real - Nostalnuit" },
        { id: "2l5TgEUTsIDimSpZ50K5JC", title: "Alma Real - Paradiso" },
        { id: "4ioNZeg74Mhd2j4phc1cyn", title: "Alma Real - Ocean" },
        { id: "2bEps8R0rTjuOkDQIPiGL2", title: "Alma Real - La mare aux songes" },
    ];

    const soundcloudEmbeds = [
        { url: "https://soundcloud.com/benjamin-decret/ambiant-tides-concept-ambiant", title: "Ambiant Tides Concept Ambiant" },
        { url: "https://soundcloud.com/benjamin-decret/ambient-video-game-dark-jazz", title: "Ambient Video Game Dark Jazz" },
        { url: "https://soundcloud.com/benjamin-decret/tv-show-funk-concept", title: "TV Show Funk Concept" },
        { url: "https://soundcloud.com/benjamin-decret/video-game-fantasy-vintage", title: "Video Game Fantasy Vintage" },
        { url: "https://soundcloud.com/benjamin-decret/jdr-chroniques-du-desert_salle", title: "JDR - Chroniques du Desert" },
        { url: "https://soundcloud.com/benjamin-decret/destinee-dark-blue-dungeon", title: "Destinée - Dark Blue Dungeon" },
        { url: "https://soundcloud.com/benjamin-decret/rhapsodie-pour-violoncelle", title: "Rhapsodie pour Violoncelle" },
        { url: "https://soundcloud.com/benjamin-decret/emission-tele", title: "Emission Télé" }
    ];

    return (
        <div className="min-h-screen relative overflow-x-hidden" style={{ background: "var(--violet)" }}>
            {/* Inline Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#E0DBFF]/90 backdrop-blur-md border-b" style={{ borderColor: "rgba(61,43,107,0.1)" }}>
                <div className="safe-container flex items-center justify-between" style={{ padding: '9px 0' }}>
                    {/* Back Link & Mobile Language Switcher */}
                    <div className="flex items-center gap-3 min-w-0 shrink">
                        <Link
                            href="/"
                            className="text-base sm:text-lg font-medium tracking-tighter truncate min-w-0 block"
                            style={{ color: "black", fontFamily: "var(--font-tight), sans-serif" }}
                        >
                            {t("nav.backToHome")}
                        </Link>
                        <div className="md:hidden shrink-0">
                            <LanguageSwitcher />
                        </div>
                    </div>
                    {/* Desktop Language Switcher & Contact */}
                    <div className="flex items-center gap-4 shrink-0">
                        <div className="hidden md:block">
                            <LanguageSwitcher />
                        </div>
                        <a href="mailto:benjamin.decret@gmail.com" className="btn-primary text-sm" style={{ height: 'max-content', padding: '10px 24px', margin: 'auto 0' }}>
                            {t("nav.contact")}
                        </a>
                    </div>
                </div>
            </header>

            {/* Decorative backgrounds distributed throughout - Moved slightly inward to avoid cropping */}
            <div className="absolute top-[15%] left-0 opacity-40 pointer-events-none w-64 h-64 animate-float-slow">
                <Image src="/ImageBD2.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute top-[25%] right-0 opacity-40 pointer-events-none w-72 h-72 animate-float">
                <Image src="/ImageBD3.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute top-[40%] left-0 opacity-30 pointer-events-none w-80 h-80">
                <Image src="/ImageBD4.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute top-[55%] right-0 opacity-40 pointer-events-none w-64 h-64 animate-float-slow">
                <Image src="/ImageBD5.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute top-[70%] left-0 opacity-40 pointer-events-none w-72 h-72">
                <Image src="/ImageBD6.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute top-[85%] right-0 opacity-40 pointer-events-none w-80 h-80 animate-float">
                <Image src="/ImageBD7.png" alt="" fill className="object-contain" />
            </div>

            <main className="pt-32 pb-24 relative z-10">
                <div className="safe-container">
                    <div className="mb-20">
                        <p className="section-tag mb-2">{t("portfolio.tag")}</p>
                        <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ color: "var(--deep-purple)" }}>
                            {t("portfolio.fullPortfolioTitle")}
                        </h1>
                        <p className="text-xl max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                            {t("portfolio.fullPortfolioDesc")}
                        </p>
                    </div>

                    {categories.map((cat) => {
                        const sectionId = cat.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                        return (
                        <section key={cat.name} id={sectionId} className="mb-24 scroll-mt-32">
                            <div className="flex items-center gap-6 mb-12">
                                <h2 className="text-3xl md:text-4xl font-normal" style={{ color: "var(--deep-purple)" }}>
                                    {cat.name}
                                </h2>
                                <div className="flex-1 h-px opacity-20" style={{ background: "var(--deep-purple)" }} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                {cat.videos.map((v, i) => (
                                    <VideoCard
                                        key={i}
                                        youtubeId={v.youtubeId}
                                        dailymotionId={v.dailymotionId}
                                        title={v.title}
                                        description={v.description}
                                        styleInfo={v.styleInfo}
                                    />
                                ))}
                            </div>
                        </section>
                        );
                    })}

                    {/* Soundcloud — Musiques Narratives */}
                    <div className="mb-16 p-8 md:p-12 rounded-3xl" style={{ background: "var(--beige)" }}>
                        <div className="flex items-center justify-between gap-4 mb-8">
                            <h3
                                className="text-2xl font-normal"
                                style={{ color: "var(--deep-purple)" }}
                            >
                                {t("portfolio.narrativeTitle")}
                            </h3>
                            <a
                                href="https://soundcloud.com/benjamin-decret"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-bold hover:opacity-70 transition-opacity shrink-0"
                                style={{ color: "var(--deep-purple)" }}
                            >
                                {t("portfolio.narrativeLink")}
                            </a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {soundcloudEmbeds.map((sc, i) => (
                                <div key={i} className="soundcloud-wrapper rounded-xl overflow-hidden shadow-sm bg-white">
                                    <iframe
                                        width="100%"
                                        height="166"
                                        scrolling="no"
                                        frameBorder="no"
                                        allow="autoplay"
                                        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(sc.url)}&color=%233d2b6b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false`}
                                        title={sc.title}
                                        style={{ border: "none" }}
                                    ></iframe>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Spotify — Discographie */}
                    <div className="mb-16 p-8 md:p-12 rounded-3xl" style={{ background: "var(--beige)" }}>
                        <h3
                            className="text-2xl font-normal mb-8"
                            style={{ color: "var(--deep-purple)" }}
                        >
                            {t("portfolio.discoTitle")}
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

                    {/* Final Bottom Decorations */}
                    <div className="flex justify-center items-center gap-16 mt-16 py-12 border-t opacity-60" style={{ borderColor: "rgba(61,43,107,0.1)" }}>
                        <div className="relative w-40 h-40">
                            <Image src="/ImageBD9.png" alt="" fill className="object-contain" />
                        </div>
                        <div className="relative w-40 h-40">
                            <Image src="/ImageBD11.png" alt="" fill className="object-contain" />
                        </div>
                    </div>

                    <div className="flex justify-center mt-12">
                        <Link href="/" className="btn-secondary py-4 px-10 text-lg">
                            {t("nav.backToHomeBtn")}
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 text-center relative z-10" style={{ background: "rgba(224,219,255,0.5)" }}>
                <div className="safe-container">
                    <p className="text-base mb-2" style={{ color: "var(--deep-purple)", fontFamily: "var(--font-tight), sans-serif" }}>
                        {t("footer.composer")}
                    </p>
                    <a href="mailto:benjamin.decret@gmail.com" className="text-lg font-medium hover:opacity-70 transition-opacity" style={{ color: "var(--deep-purple)" }}>
                        benjamin.decret@gmail.com
                    </a>
                </div>
            </footer>
        </div>
    );
}
