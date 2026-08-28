/**
 * Sprint 9: Bulk WebP Conversion Script
 * Converts all .jpg/.jpeg/.png in /public/assets/Projects to .webp
 * Then deletes originals
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PROJECTS_DIR = path.join(__dirname, '../public/assets/Projects');
const QUALITY = 82; // Good quality/size balance

async function convertToWebp(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return null;

  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  try {
    const info = await sharp(filePath)
      .webp({ quality: QUALITY })
      .toFile(webpPath);
    
    const oldSize = fs.statSync(filePath).size;
    const newSize = fs.statSync(webpPath).size;
    const savings = (((oldSize - newSize) / oldSize) * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(filePath)} → ${path.basename(webpPath)} [${(oldSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB, saved ${savings}%]`);
    
    // Delete original
    fs.unlinkSync(filePath);
    
    return {
      original: path.basename(filePath),
      webp: path.basename(webpPath),
    };
  } catch (err) {
    console.error(`✗ Failed: ${filePath}`, err.message);
    return null;
  }
}

async function main() {
  console.log('🔄 Starting WebP conversion for Projects assets...\n');
  
  const files = fs.readdirSync(PROJECTS_DIR);
  const targets = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  
  console.log(`Found ${targets.length} images to convert.\n`);
  
  const results = await Promise.all(
    targets.map(f => convertToWebp(path.join(PROJECTS_DIR, f)))
  );
  
  const converted = results.filter(Boolean);
  console.log(`\n✅ Done. Converted ${converted.length}/${targets.length} images.`);
  
  // Print mapping for JSON update reference
  console.log('\n📋 Extension mapping (old → new):');
  converted.forEach(r => console.log(`  ${r.original} → ${r.webp}`));
}

main().catch(console.error);
