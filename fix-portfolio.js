const fs = require('fs');
const lines = fs.readFileSync('app/portfolio/page.tsx', 'utf8').split('\n');

// Lines to keep:
// 0-235: includes the new unified block (filter pills + à écouter + à l'image)
// 315-316: closing </div> safe-container + blank
// Then inject plain discography (no card wrapper)
// 351 onwards: </main> footer etc.

const discography = [
  '        {/* Discographie — hors filtres */}',
  '        <div className="safe-container pb-24">',
  '          <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--deep-purple)" }}>',
  '            {t("portfolio.discoTitle")}',
  '          </h2>',
  '          <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>',
  '            {t("portfolio.discoSubtitle")}',
  '          </p>',
  '          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">',
  '            {SPOTIFY.map((sp) => (',
  '              <div key={sp.id} className="spotify-wrapper rounded-xl overflow-hidden shadow-sm">',
  '                <iframe',
  '                  src={`https://open.spotify.com/embed/track/${sp.id}?utm_source=generator&theme=0`}',
  '                  width="100%"',
  '                  height="152"',
  '                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"',
  '                  loading="lazy"',
  '                  title={sp.title}',
  '                  style={{ border: "none" }}',
  '                />',
  '              </div>',
  '            ))}',
  '          </div>',
  '        </div>',
];

const kept = [
  ...lines.slice(0, 236),     // unified block end (inclusive of closing </div>)
  '',
  ...discography,
  ...lines.slice(351),        // </main> footer etc.
];

fs.writeFileSync('app/portfolio/page.tsx', kept.join('\n'));
console.log('Done. Lines:', kept.length);
