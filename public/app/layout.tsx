import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const tight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-tight",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Benjamin Decret — Compositeur de Musique à l'Image",
  description:
    "Compositeur et multi-instrumentiste, Benjamin Decret crée des univers musicaux singuliers pour le jeu vidéo, le cinéma, les courts-métrages et la publicité.",
  keywords: [
    "compositeur musique image",
    "Benjamin Decret",
    "musique cinéma",
    "composition jeu vidéo",
    "musique orchestrale",
    "bande sonore",
    "compositeur Paris",
  ],
  authors: [{ name: "Benjamin Decret" }],
  icons: {
    icon: "/FavIcon_BD.png",
    shortcut: "/FavIcon_BD.png",
    apple: "/FavIcon_BD.png",
  },
  openGraph: {
    title: "Benjamin Decret — Compositeur de Musique à l'Image",
    description:
      "Création d'univers musicaux singuliers pour des projets vidéos. Compositions modernes, orchestrales ou expérimentales.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`scroll-smooth ${inter.variable} ${tight.variable}`}>
      <body className={`antialiased ${inter.className}`}>{children}</body>
    </html>
  );
}

