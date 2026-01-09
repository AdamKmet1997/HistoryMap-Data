const fs = require('fs');
const path = require('path');

// Get all event files recursively
function getAllEventFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllEventFiles(filePath, fileList);
    } else if (file.endsWith('.json')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Extract ID from filename
function getIdFromFilename(filepath) {
  const filename = path.basename(filepath, '.json');
  return filename;
}

// Fix event IDs
function fixEventIds() {
  const eventsDir = path.join(__dirname, '../events');
  const eventFiles = getAllEventFiles(eventsDir);

  let fixedCount = 0;
  let errorCount = 0;

  console.log(`Found ${eventFiles.length} event files\n`);

  eventFiles.forEach(filepath => {
    try {
      const eventData = JSON.parse(fs.readFileSync(filepath, 'utf8'));
      const correctId = getIdFromFilename(filepath);

      if (eventData.id !== correctId) {
        console.log(`Fixing: ${filepath}`);
        console.log(`  Old ID: "${eventData.id}"`);
        console.log(`  New ID: "${correctId}"`);

        eventData.id = correctId;

        fs.writeFileSync(filepath, JSON.stringify(eventData, null, 2) + '\n', 'utf8');
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filepath}:`, error.message);
      errorCount++;
    }
  });

  console.log('\n' + '='.repeat(60));
  console.log('Summary:');
  console.log('='.repeat(60));
  console.log(`✅ Fixed: ${fixedCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`📁 Total files: ${eventFiles.length}`);
  console.log('='.repeat(60));
}

fixEventIds();
