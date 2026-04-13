/**
 * Generates a basic OG image (1200x630) for social sharing.
 * Uses sharp to composite SVG icon + text-on-canvas approach.
 * For production, consider a proper design tool or Satori.
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "../public");

// Create OG image via SVG template
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Background -->
  <rect width="1200" height="630" fill="#0f172a"/>

  <!-- Blue accent bar left -->
  <rect x="0" y="0" width="8" height="630" fill="#1d4ed8"/>

  <!-- Grid pattern background -->
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e3a5f" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#grid)" opacity="0.4"/>

  <!-- Gear icon (large, background) -->
  <g transform="translate(820, 80) scale(3.2)" opacity="0.12">
    <path d="M24 2 L26.8 7.2 L32.4 5.6 L33.2 11.6 L38.8 14.4 L36.8 20.0 L41.6 24.0 L36.8 28.0 L38.8 33.6 L33.2 36.4 L32.4 42.4 L26.8 40.8 L24 46.0 L21.2 40.8 L15.6 42.4 L14.8 36.4 L9.2 33.6 L11.2 28.0 L6.4 24.0 L11.2 20.0 L9.2 14.4 L14.8 11.6 L15.6 5.6 L21.2 7.2 Z" fill="#1d4ed8"/>
    <circle cx="24" cy="24" r="10" fill="white"/>
  </g>

  <!-- Gear icon (smaller, foreground accent) -->
  <g transform="translate(960, 340) scale(2.0)" opacity="0.18">
    <path d="M24 2 L26.8 7.2 L32.4 5.6 L33.2 11.6 L38.8 14.4 L36.8 20.0 L41.6 24.0 L36.8 28.0 L38.8 33.6 L33.2 36.4 L32.4 42.4 L26.8 40.8 L24 46.0 L21.2 40.8 L15.6 42.4 L14.8 36.4 L9.2 33.6 L11.2 28.0 L6.4 24.0 L11.2 20.0 L9.2 14.4 L14.8 11.6 L15.6 5.6 L21.2 7.2 Z" fill="#60a5fa"/>
    <circle cx="24" cy="24" r="10" fill="#1e3a5f"/>
  </g>

  <!-- Main content area -->
  <!-- NRV badge -->
  <rect x="80" y="120" width="100" height="100" rx="20" fill="#1d4ed8"/>
  <text x="130" y="185" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="900" fill="white">NRV</text>

  <!-- Company name -->
  <text x="80" y="310" font-family="Arial, sans-serif" font-size="68" font-weight="900" fill="white" letter-spacing="1">NRV Enterprises</text>

  <!-- Blue underline -->
  <rect x="80" y="328" width="540" height="5" rx="2.5" fill="#1d4ed8"/>

  <!-- Tagline -->
  <text x="80" y="400" font-family="Arial, sans-serif" font-size="26" font-weight="400" fill="#94a3b8">Lubricants &amp; Industrial Products</text>

  <!-- Sub-tagline -->
  <text x="80" y="445" font-family="Arial, sans-serif" font-size="20" font-weight="400" fill="#64748b">Trusted supplier across India</text>

  <!-- Bottom divider -->
  <rect x="80" y="520" width="1040" height="1" fill="#1e3a5f"/>
  <text x="80" y="555" font-family="Arial, sans-serif" font-size="16" fill="#475569">Engine Oils · Gear Oils · Hydraulic Oils · Greases · Industrial Lubricants</text>
</svg>`;

await sharp(Buffer.from(ogSvg))
  .resize(1200, 630)
  .png()
  .toFile(join(publicDir, "og-image.png"));

console.log("✅ Generated og-image.png (1200x630)");
