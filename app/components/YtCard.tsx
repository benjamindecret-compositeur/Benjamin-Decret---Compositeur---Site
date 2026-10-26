"use client";
import { useState } from "react";

interface YtCardProps {
  youtubeId?: string;
  /**
   * Dailymotion video ID.
   * DM restreint les iframes aux domaines whitelistés — y compris localhost.
   * Solution retenue : clic sur la miniature = ouverture du lien DM dans un
   * nouvel onglet. Pas d'iframe DM. Fonctionne partout sans configuration.
   */
  dailymotionId?: string;
  title: string;
  description?: string;
  styleInfo?: string;
  styleLabel?: string;
}

export default function YtCard({
  youtubeId,
  dailymotionId,
  title,
  description,
  styleInfo,
  styleLabel = "Style :",
}: YtCardProps) {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [thumbErr, setThumbErr] = useState(false);

  const isYt = !!youtubeId;
  const isDm = !!dailymotionId;

  // Thumbnails
  const thumbSrc = isYt
    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    : isDm
    ? `https://www.dailymotion.com/thumbnail/video/${dailymotionId}`
    : null;

  // YouTube embed (autoplay au clic)
  const embedSrc = isYt
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`
    : null;

  // Dailymotion — lien direct (pas d'iframe)
  const dmLink = isDm
    ? `https://www.dailymotion.com/video/${dailymotionId}`
    : null;

  // Shared thumbnail content (used inside both <button> and <a>)
  const ThumbnailContent = () => (
    <>
      {thumbSrc && !thumbErr ? (
        <img
          src={thumbSrc}
          alt={title}
          onError={() => setThumbErr(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.03)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #0f0820 0%, #3D2B6B 60%, #5B3FCE 100%)",
          }}
        />
      )}

      {/* Subtle dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)" }} />

      {/* Play button */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${hovered ? 1.08 : 1})`,
          transition: "transform 0.2s ease",
          width: 64,
          height: 44,
          background: isYt ? "#FF0000" : "#003ec0",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.45)",
        }}
      >
        <svg width="20" height="24" viewBox="0 0 20 24" fill="white">
          <polygon points="4,2 18,12 4,22" />
        </svg>
      </div>

      {/* Badge plateforme pour DM */}
      {isDm && (
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            background: "rgba(0,62,192,0.88)",
            color: "white",
            fontSize: "0.65rem",
            fontWeight: 700,
            padding: "3px 8px",
            borderRadius: 4,
            letterSpacing: "0.05em",
          }}
        >
          DAILYMOTION ↗
        </div>
      )}
    </>
  );

  return (
    <div className="flex flex-col gap-3">
      {/* Conteneur 16:9 */}
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: hovered
            ? "0 16px 48px rgba(61,43,107,0.30)"
            : "0 6px 24px rgba(61,43,107,0.15)",
          transition: "box-shadow 0.25s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ── YouTube chargé ── */}
        {loaded && embedSrc ? (
          <iframe
            src={embedSrc}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture; accelerometer; clipboard-write; encrypted-media; gyroscope"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />

        ) : dmLink ? (
          /* ── Dailymotion : lien vers page DM, pas d'iframe ── */
          <a
            href={dmLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir sur Dailymotion : ${title}`}
            style={{ position: "absolute", inset: 0, display: "block", background: "#0f0820", cursor: "pointer" }}
          >
            <ThumbnailContent />
          </a>

        ) : (
          /* ── YouTube non chargé : bouton click-to-play ── */
          <button
            onClick={() => setLoaded(true)}
            aria-label={`Lire : ${title}`}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
              cursor: "pointer",
              padding: 0,
              background: "#0f0820",
              display: "block",
            }}
          >
            <ThumbnailContent />
          </button>
        )}
      </div>

      {/* Métadonnées */}
      <div className="px-1">
        <h4
          style={{
            color: "var(--deep-purple)",
            fontWeight: 700,
            fontSize: "1.05rem",
            lineHeight: 1.3,
            marginBottom: "0.3rem",
            fontFamily: "var(--font-tight), sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h4>
        {description && (
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.55 }}>
            {description}
          </p>
        )}
        {styleInfo && (
          <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: "0.3rem" }}>
            <strong>{styleLabel}</strong> {styleInfo}
          </p>
        )}
      </div>
    </div>
  );
}
