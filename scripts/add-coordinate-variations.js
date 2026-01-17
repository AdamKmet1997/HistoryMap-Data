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

// Generate a small random offset (100-200 meters = ~0.0009-0.0018 degrees)
function generateOffset() {
  const baseOffset = 0.0009; // ~100 meters
  const randomExtra = Math.random() * 0.0009; // up to additional ~100 meters
  const sign = Math.random() > 0.5 ? 1 : -1;
  return sign * (baseOffset + randomExtra);
}

// Apply variations to coordinates
function applyVariations() {
  const coords = {};
  const eventsDir = path.join(__dirname, '..', 'events');
  const files = findJsonFiles(eventsDir);

  // First pass: group events by coordinates
  files.forEach(file => {
    try {
      const data = JSON.parse(fs.readFileSync(file, 'utf8'));
      const key = `${data.location.latitude.toFixed(4)},${data.location.longitude.toFixed(4)}`;

      if (!coords[key]) {
        coords[key] = [];
      }

      coords[key].push({
        file: file,
        data: data
      });
    } catch (e) {
      console.error(`Error reading ${file}:`, e.message);
    }
  });

  // Second pass: apply variations to duplicates
  let totalModified = 0;
  let locationsModified = 0;

  Object.entries(coords)
    .filter(([k, v]) => v.length > 1)
    .forEach(([coord, events]) => {
      console.log(`\nProcessing ${coord} (${events.length} events):`);

      // Keep the first event at original location, modify the rest
      events.forEach((event, index) => {
        if (index === 0) {
          console.log(`  ✓ ${event.data.title} - keeping original location`);
        } else {
          // Apply random offset
          const latOffset = generateOffset();
          const lonOffset = generateOffset();

          const originalLat = event.data.location.latitude;
          const originalLon = event.data.location.longitude;

          event.data.location.latitude = parseFloat((originalLat + latOffset).toFixed(6));
          event.data.location.longitude = parseFloat((originalLon + lonOffset).toFixed(6));

          // Calculate approximate distance in meters
          const distance = Math.sqrt(
            Math.pow((latOffset * 111000), 2) +
            Math.pow((lonOffset * 111000 * Math.cos(originalLat * Math.PI / 180)), 2)
          );

          // Write updated data back to file
          fs.writeFileSync(event.file, JSON.stringify(event.data, null, 2) + '\n');

          console.log(`  ✓ ${event.data.title} - moved ~${Math.round(distance)}m`);
          totalModified++;
        }
      });

      locationsModified++;
    });

  console.log(`\n✅ Summary:`);
  console.log(`   Locations with duplicates: ${locationsModified}`);
  console.log(`   Events modified: ${totalModified}`);
  console.log(`   Events kept at original location: ${locationsModified}`);
  console.log(`   Total events affected: ${totalModified + locationsModified}`);
}

// Run the script
console.log('🔧 Adding coordinate variations to duplicate events...\n');
applyVariations();
