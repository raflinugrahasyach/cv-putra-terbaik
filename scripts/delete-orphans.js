const fs = require('fs');
const path = require('path');

const toDelete = [
  'public/assets/Projects/Gemini_Generated_Image_6r6c2b6r6c2b6r6c (1) 1.png',
  'public/assets/Projects/Gemini_Generated_Image_xfpafmxfpafmxfpa (1) 1 (2) 1.png',
  'public/assets/Projects/project-4 1.png',
];

toDelete.forEach(f => {
  const full = path.join(__dirname, '..', f);
  if (fs.existsSync(full)) {
    const kb = Math.round(fs.statSync(full).size / 1024);
    fs.unlinkSync(full);
    console.log(`DELETED: ${f} (${kb}KB)`);
  } else {
    console.log(`SKIP (not found): ${f}`);
  }
});
