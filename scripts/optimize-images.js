const sharp = require('sharp');
const fs = require('fs');

const targets = [
  { src: 'public/assets/Homepage/hero_rumah.png', dest: 'public/assets/Homepage/hero_rumah.webp' },
  { src: 'public/assets/Homepage/brosur.png', dest: 'public/assets/Homepage/brosur.webp' },
  { src: 'public/assets/Homepage/hero-illustration.png', dest: 'public/assets/Homepage/hero-illustration.webp' },
  { src: 'public/assets/Homepage/Homepage-Header.png', dest: 'public/assets/Homepage/Homepage-Header.webp' },
  { src: 'public/assets/Homepage/hero-system-real.png', dest: 'public/assets/Homepage/hero-system-real.webp' },
];

async function run() {
  for (const t of targets) {
    if (fs.existsSync(t.src)) {
      try {
        const info = await sharp(t.src).webp({ quality: 82, effort: 6 }).toFile(t.dest);
        const orig = fs.statSync(t.src).size;
        const pct = Math.round((1 - info.size / orig) * 100);
        console.log(`OK: ${t.dest} | ${Math.round(orig/1024)}KB -> ${Math.round(info.size/1024)}KB (-${pct}%)`);
      } catch(e) {
        console.error(`ERR: ${t.src}`, e.message);
      }
    } else {
      console.log(`SKIP (not found): ${t.src}`);
    }
  }
}

run();
