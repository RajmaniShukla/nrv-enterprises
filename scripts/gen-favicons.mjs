import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "../public");
const svgPath = join(publicDir, "favicon.svg");
const svgBuffer = readFileSync(svgPath);

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "og-icon-512.png", size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(join(publicDir, name));
  console.log(`✅ Generated ${name} (${size}x${size})`);
}

console.log("Done!");
