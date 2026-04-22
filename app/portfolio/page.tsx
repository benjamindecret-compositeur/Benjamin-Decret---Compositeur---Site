"use client";
import Image from "next/image";
import Link from "next/link";

interface VideoCardProps {
    youtubeId: string;
    title: string;
    description: string;
    styleInfo?: string;
    category?: string;
}

function VideoCard({ youtubeId, title, description, styleInfo, category }: VideoCardProps) {
    return (
        <div className="flex flex-col gap-4 group">
            <div className="video-wrapper rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-none"
                />
            </div>
            <div className="px-1">
                <h4 className="text-xl font-bold mb-1" style={{ color: "var(--deep-purple)" }}>{title}</h4>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
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

const categories = [
    {
        name: "Fantasy / Action",
        videos: [
            {
                youtubeId: "EXrNm_RSwJA",
                title: "The Hobbit - scène d'Erebor",
                description: "Ma composition pour cette scène du \"Hobbit, un voyage inattendu\"",
                styleInfo: "orchestral, épique, médiéval/fantasy"
            },
            {
                youtubeId: "NBPVIljJBqg",
                title: "DUNE - trailer",
                description: "Ma proposition musicale pour le film \"Dune\", dans le style de John Williams",
                styleInfo: "musique orchestrale uniquement"
            },
            {
                youtubeId: "0aRqQLaKgUk",
                title: "The Hobbit - scène de combat",
                description: "Ma proposition pour une scène du film \"La désolation de Smaug\"",
                styleInfo: "orchestral, action"
            },
        ],
    },
    {
        name: "Drame / Émotions",
        videos: [
            {
                youtubeId: "bnHy42OgkXA",
                title: "Love, Simon - scène",
                description: "Ma proposition musicale pour une scène du film \"Love, Simon\"",
                styleInfo: "moderne, minimaliste et émotif"
            },
            {
                youtubeId: "kvVGmnB_IDE",
                title: "First Man - scène d'atterissage sur la lune",
                description: "Ma proposition musicale pour une scène du film \"First Man\" dans le style Jóhann Jóhannsson",
                styleInfo: "textural, sound design, onirique, DeepSpace"
            },
        ],
    },
    {
        name: "Jeu Vidéo",
        videos: [
            {
                youtubeId: "20P3-MGum8w",
                title: "Hot Wheels Unleashed",
                description: "Ma proposition musicale pour le Jeu Vidéo \"Hot Wheels Unleashed\"",
                styleInfo: "musique électronique rétro, rythmée et fun"
            },
            {
                youtubeId: "t2qj770DaEE",
                title: "Dark Blue Dungeon",
                description: "Musique originale réalisée pour le jeu mobile \"Dark Blue Dungeon\"",
                styleInfo: "Retro, 8-bit, Médiéval"
            },
            {
                youtubeId: "rrmwLnb5aqE",
                title: "Ghost of Tsushima",
                description: "Ma proposition musicale pour le trailer du Jeu Vidéo \"Ghost of Tsushima\"",
                styleInfo: "musique orchestrale, japonaise, percussions"
            },
        ],
    },
    {
        name: "Générique télévisé",
        videos: [
            {
                youtubeId: "Rh3MHu5MPp0",
                title: "Loup Garou - générique",
                description: "Ma proposition musicale pour le générique de la série \"Loups Garous\"",
                styleInfo: "Orchestral, électronique, mystérieux"
            },
        ],
    },
    {
        name: "Publicité",
        videos: [
            {
                youtubeId: "zUmHYat-E1o",
                title: "Portela",
                description: "Ma proposition musicale pour un trailer présentant des costumes pour le carnaval de Rio",
                styleInfo: "Musique du monde, électronique et acoustique, influences Brésiliennes et d'Afrique de l'Ouest"
            },
        ],
    },
    {
        name: "Animation",
        videos: [
            {
                youtubeId: "Zo0qV6-G_KY",
                title: "Ratatouille - scène",
                description: "Ma proposition pour une scène du film \"Ratatouille\"",
                styleInfo: "Orchestral, nostalgique, animé"
            },
        ],
    },
    {
        name: "Chanson pour l'image",
        videos: [
            {
                youtubeId: "-w1ESTbQs4k",
                title: "Blade Runner - chanson",
                description: "Ma proposition de chanson composée pour une scène du film \"Blade Runner 2049\"",
                styleInfo: "Synthwave, Retro, électronique"
            },
            {
                youtubeId: "inQW64to0k4",
                title: "WALL-E - chanson",
                description: "Ma proposition de chanson composée pour une scène du film d'animation \"WALL-E\"",
                styleInfo: "musique moderne, jazz-trap, chanson"
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
    { url: "https://soundcloud.com/benjamin-decret/jdr-chroniques-du-desert_salle", title: "JDR - Chroniques du Desert" },
    { url: "https://soundcloud.com/benjamin-decret/destinee-dark-blue-dungeon", title: "Destinée - Dark Blue Dungeon" },
    { url: "https://soundcloud.com/benjamin-decret/rhapsodie-pour-violoncelle", title: "Rhapsodie pour Violoncelle" },
    { url: "https://soundcloud.com/benjamin-decret/emission-tele", title: "Emission Télé" }
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen relative overflow-x-hidden" style={{ background: "var(--violet)" }}>
            {/* Inline Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#E0DBFF]/90 backdrop-blur-md border-b" style={{ borderColor: "rgba(61,43,107,0.1)" }}>
                <div className="safe-container flex items-center justify-between" style={{ padding: '9px 0' }}>
                    <Link
                        href="/"
                        className="text-lg font-medium tracking-tighter"
                        style={{ color: "black", fontFamily: "var(--font-tight), sans-serif" }}
                    >
                        ← Benjamin Decret - Compositeur
                    </Link>
                    <a href="mailto:benjamin.decret@gmail.com" className="btn-primary text-sm" style={{ height: 'max-content', padding: '10px 24px', margin: 'auto 0' }}>
                        Contact
                    </a>
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
                        <p className="section-tag mb-2">Mes créations</p>
                        <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ color: "var(--deep-purple)" }}>
                            Portfolio Complet
                        </h1>
                        <p className="text-xl max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                            Exploration de mes compositions originales classées par thématiques et genres.
                        </p>
                    </div>

                    {categories.map((cat, idx) => {
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
                                        title={v.title}
                                        description={v.description}
                                        styleInfo={v.styleInfo}
                                    />
                                ))}
                            </div>
                        </section>
                        );
                    })}

                    {/* Spotify — Discographie - Wrapped in beige as requested */}
                    <div className="mb-16 p-8 md:p-12 rounded-3xl" style={{ background: "var(--beige)" }}>
                        <h3
                            className="text-2xl font-normal mb-8"
                            style={{ color: "var(--deep-purple)" }}
                        >
                            Discographie
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

                    {/* Soundcloud — Musiques Narratives */}
                    <div className="mb-16 p-8 md:p-12 rounded-3xl" style={{ background: "var(--beige)" }}>
                        <div className="flex items-center justify-between gap-4 mb-8">
                            <h3
                                className="text-2xl font-normal"
                                style={{ color: "var(--deep-purple)" }}
                            >
                                Musiques Narratives
                            </h3>
                            <a
                                href="https://soundcloud.com/benjamin-decret"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-bold hover:opacity-70 transition-opacity shrink-0"
                                style={{ color: "var(--deep-purple)" }}
                            >
                                Lien Soundcloud →
                            </a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {soundcloudEmbeds.map((sc, i) => (
                                <div key={i} className="soundcloud-wrapper rounded-xl overflow-hidden shadow-sm bg-white">
                                    <iframe
                                        width="100%"
                                        height="152"
                                        scrolling="no"
                                        frameBorder="no"
                                        allow="autoplay"
                                        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(sc.url)}&color=%233d2b6b&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`}
                                        title={sc.title}
                                        style={{ border: "none" }}
                                    ></iframe>
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
                            ← Retour à l'accueil
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 text-center relative z-10" style={{ background: "rgba(224,219,255,0.5)" }}>
                <div className="safe-container">
                    <p className="text-base mb-2" style={{ color: "var(--deep-purple)", fontFamily: "var(--font-tight), sans-serif" }}>
                        Benjamin Decret — Compositeur
                    </p>
                    <a href="mailto:benjamin.decret@gmail.com" className="text-lg font-medium hover:opacity-70 transition-opacity" style={{ color: "var(--deep-purple)" }}>
                        benjamin.decret@gmail.com
                    </a>
                </div>
            </footer>
        </div>
    );
}
