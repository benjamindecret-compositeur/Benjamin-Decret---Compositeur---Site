"use client";

/**
 * ScCard — simple SoundCloud iframe embed.
 * visual=false : lecteur compact avec barre de lecture, pas de fond artwork.
 * Pas de Widget API.
 */
export interface ScCardProps {
  url: string;
  title: string;
}

export default function ScCard({ url, title }: ScCardProps) {
  const src =
    `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}` +
    `&color=%233d2b6b` +
    `&auto_play=false` +
    `&hide_related=true` +
    `&show_comments=false` +
    `&show_user=true` +
    `&show_reposts=false` +
    `&show_teaser=false` +
    `&visual=false` +
    `&buying=false` +
    `&liking=false` +
    `&download=false` +
    `&sharing=false`;

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ boxShadow: "0 2px 12px rgba(61,43,107,0.10)" }}
    >
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={src}
        title={title}
        style={{ border: "none", display: "block" }}
      />
    </div>
  );
}
