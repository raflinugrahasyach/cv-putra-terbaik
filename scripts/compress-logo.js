const sharp = require('sharp');
const fs = require('fs');

async function run() {
  const src = 'public/logo_cv.png';
  const dest = 'public/logo_cv.webp';
  
  if (!fs.existsSync(src)) {
    console.log('SKIP: logo_cv.png not found');
    return;
  }

  const origSize = fs.statSync(src).size;
  const info = await sharp(src)
    .webp({ quality: 90, effort: 6, lossless: false })
    .toFile(dest);

  const pct = Math.round((1 - info.size / origSize) * 100);
  console.log(`OK: ${dest} | ${Math.round(origSize/1024)}KB -> ${Math.round(info.size/1024)}KB (-${pct}%)`);
}

run().catch(console.error);
