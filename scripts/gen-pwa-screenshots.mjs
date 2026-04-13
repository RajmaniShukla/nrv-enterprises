/**
 * Generates PWA screenshot placeholders for the web manifest.
 * Wide (desktop): 1280x720
 * Narrow (mobile): 750x1334
 */
import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "../public");

const wideSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  <rect width="1280" height="720" fill="#0f172a"/>
  <rect x="0" y="0" width="8" height="720" fill="#1d4ed8"/>
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e3a5f" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1280" height="720" fill="url(#grid)" opacity="0.4"/>
  <rect x="40" y="40" width="80" height="80" rx="16" fill="#1d4ed8"/>
  <text x="80" y="92" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" font-weight="900" fill="white">NRV</text>
  <text x="140" y="72" font-family="Arial, sans-serif" font-size="48" font-weight="900" fill="white">NRV Enterprises</text>
  <rect x="140" y="80" width="380" height="4" rx="2" fill="#1d4ed8"/>
  <text x="140" y="120" font-family="Arial, sans-serif" font-size="22" fill="#94a3b8">Lubricants &amp; Industrial Products</text>
  <text x="640" y="380" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#475569">— Desktop Preview —</text>
</svg>`;

const narrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="750" height="1334" viewBox="0 0 750 1334">
  <rect width="750" height="1334" fill="#0f172a"/>
  <rect x="0" y="0" width="6" height="1334" fill="#1d4ed8"/>
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e3a5f" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="750" height="1334" fill="url(#grid)" opacity="0.4"/>
  <rect x="30" y="80" width="70" height="70" rx="14" fill="#1d4ed8"/>
  <text x="65" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="white">NRV</text>
  <text x="30" y="220" font-family="Arial, sans-serif" font-size="42" font-weight="900" fill="white">NRV</text>
  <text x="30" y="268" font-family="Arial, sans-serif" font-size="42" font-weight="900" fill="white">Enterprises</text>
  <rect x="30" y="278" width="300" height="4" rx="2" fill="#1d4ed8"/>
  <text x="30" y="320" font-family="Arial, sans-serif" font-size="20" fill="#94a3b8">Lubricants &amp; Industrial</text>
  <text x="30" y="348" font-family="Arial, sans-serif" font-size="20" fill="#94a3b8">Products</text>
  <text x="375" y="700" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#475569">— Mobile Preview —</text>
</svg>`;

await sharp(Buffer.from(wideSvg))
  .resize(1280, 720)
  .png()
  .toFile(join(publicDir, "screenshot-wide.png"));
console.log("✅ Generated screenshot-wide.png (1280x720)");

await sharp(Buffer.from(narrowSvg))
  .resize(750, 1334)
  .png()
  .toFile(join(publicDir, "screenshot-mobile.png"));
console.log("✅ Generated screenshot-mobile.png (750x1334)");

console.log("Done!");
