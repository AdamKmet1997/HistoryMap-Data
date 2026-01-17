const fs = require('fs');
const path = require('path');

// Find all JSON files
function findJsonFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findJsonFiles(fullPath));
    } else if (item.endsWith('.json')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Group events by coordinates
const coords = {};
const eventsDir = path.join(__dirname, '..', 'events');
const files = findJsonFiles(eventsDir);

files.forEach(file => {
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const key = `${data.location.latitude.toFixed(4)},${data.location.longitude.toFixed(4)}`;

    if (!coords[key]) {
      coords[key] = [];
    }

    coords[key].push({
      file: file.replace(eventsDir + '/', ''),
      title: data.title,
      location: data.location
    });
  } catch (e) {
    console.error(`Error reading ${file}:`, e.message);
  }
});

// Print duplicates
console.log('Events with duplicate coordinates:\n');
let totalDuplicates = 0;

Object.entries(coords)
  .filter(([k, v]) => v.length > 1)
  .sort((a, b) => b[1].length - a[1].length)
  .forEach(([coord, events]) => {
    console.log(`${coord} (${events.length} events):`);
    events.forEach(e => {
      console.log(`  - ${e.title}`);
      console.log(`    ${e.file}`);
    });
    console.log('');
    totalDuplicates += events.length;
  });

console.log(`\nTotal events with duplicates: ${totalDuplicates}`);
console.log(`Unique locations with duplicates: ${Object.entries(coords).filter(([k, v]) => v.length > 1).length}`);
