"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div 
      className="flex items-center gap-1 border rounded-full p-1 bg-white/50 backdrop-blur-sm shadow-[0_2px_8px_rgba(61,43,107,0.05)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(61,43,107,0.1)]"
      style={{ borderColor: "rgba(61, 43, 107, 0.15)" }}
    >
      {/* FR Button */}
      <button
        onClick={() => setLanguage("fr")}
        className={`flex items-center gap-1.5 text-xs font-bold tracking-wider transition-all duration-300 py-1 px-2.5 rounded-full select-none cursor-pointer ${
          language === "fr"
            ? "bg-[#3D2B6B] text-white shadow-sm"
            : "text-[#3D2B6B]/75 hover:text-[#3D2B6B] hover:bg-[#3D2B6B]/5"
        }`}
        aria-label="Version française"
        title="Version française"
      >
        <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 rounded-full overflow-hidden inline-block shadow-sm">
          <rect x="0" y="0" width="10.66" height="32" fill="#0055A5" />
          <rect x="10.66" y="0" width="10.66" height="32" fill="#FFFFFF" />
          <rect x="21.33" y="0" width="10.66" height="32" fill="#E81622" />
        </svg>
        FR
      </button>

      {/* EN Button */}
      <button
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1.5 text-xs font-bold tracking-wider transition-all duration-300 py-1 px-2.5 rounded-full select-none cursor-pointer ${
          language === "en"
            ? "bg-[#3D2B6B] text-white shadow-sm"
            : "text-[#3D2B6B]/75 hover:text-[#3D2B6B] hover:bg-[#3D2B6B]/5"
        }`}
        aria-label="English version"
        title="English version"
      >
        <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 rounded-full overflow-hidden inline-block shadow-sm">
          <rect width="32" height="32" fill="#012169" />
          <path d="M0,0 L32,32 M0,32 L32,0" stroke="#FFFFFF" strokeWidth="4" />
          <path d="M0,0 L32,32 M0,32 L32,0" stroke="#C8102E" strokeWidth="2" />
          <path d="M16,0 L16,32 M0,16 L32,16" stroke="#FFFFFF" strokeWidth="6" />
          <path d="M16,0 L16,32 M0,16 L32,16" stroke="#C8102E" strokeWidth="4" />
        </svg>
        EN
      </button>
    </div>
  );
}
