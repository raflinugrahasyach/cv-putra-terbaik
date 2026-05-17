const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../src/data/articles.json');
const articles = JSON.parse(fs.readFileSync(file, 'utf8'));

// Sequential dates: Nov 2025 → Apr 2026, ~12 days apart
const dates = [
  '2025-11-03', '2025-11-17', '2025-12-01', '2025-12-15',
  '2025-12-29', '2026-01-12', '2026-01-26', '2026-02-09',
  '2026-02-23', '2026-03-09', '2026-03-23', '2026-04-06',
  '2026-04-07', '2026-04-08', '2026-04-14', '2026-04-21',
];

const updated = articles.map((a, i) => ({
  datePublished: dates[i] || '2026-01-01',
  ...a,
}));

fs.writeFileSync(file, JSON.stringify(updated, null, 2), 'utf8');
console.log(`Updated ${updated.length} articles with datePublished.`);
updated.forEach((a, i) => console.log(`  [${i+1}] ${a.id} -> ${a.datePublished}`));
