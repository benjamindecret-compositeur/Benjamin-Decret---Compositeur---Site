"use client";

/**
 * ScCard — simple SoundCloud iframe embed with optional subtitle/style metadata.
 * visual=false : lecteur compact avec barre de lecture, pas de fond artwork.
 * Pas de Widget API.
 */
export interface ScCardProps {
  url: string;
  title: string;
  description?: string;
  styleInfo?: string;
  styleLabel?: string;
}

export default function ScCard({ url, title, description, styleInfo, styleLabel = "Style :" }: ScCardProps) {
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
      {(description || styleInfo) && (
        <div className="px-3 py-2" style={{ background: "var(--beige)" }}>
          {description && (
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.55, margin: 0 }}>
              {description}
            </p>
          )}
          {styleInfo && (
            <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: description ? "0.3rem" : 0, marginBottom: 0 }}>
              <strong>{styleLabel}</strong> {styleInfo}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
