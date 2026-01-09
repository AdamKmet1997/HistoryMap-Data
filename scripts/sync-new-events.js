const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load from repo .env.local file
const envPath = path.join(__dirname, '../../HistoryMap-repo/.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    env[match[1]] = match[2];
  }
});

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);

async function syncAllEvents() {
  console.log('🔄 Starting sync to Supabase...\n');

  // Get all event files
  const eventsDir = path.join(__dirname, '../events');
  const countries = fs.readdirSync(eventsDir).filter(f => {
    const stat = fs.statSync(path.join(eventsDir, f));
    return stat.isDirectory();
  });

  const eventFiles = [];
  countries.forEach(country => {
    const countryDir = path.join(eventsDir, country);
    const files = fs.readdirSync(countryDir).filter(f => f.endsWith('.json'));
    files.forEach(file => {
      eventFiles.push({ country, file: path.join(countryDir, file) });
    });
  });

  console.log(`📦 Found ${eventFiles.length} event files\n`);

  let insertedCount = 0;
  let updatedCount = 0;
  let errorCount = 0;

  for (const { country, file } of eventFiles) {
    try {
      const eventData = JSON.parse(fs.readFileSync(file, 'utf-8'));

      // Transform to database format
      const dbEvent = {
        id: eventData.id,
        title: eventData.title,
        description: eventData.description,
        start_date: eventData.startDate,
        end_date: eventData.endDate || null,
        year: eventData.year || null,
        latitude: eventData.location.latitude,
        longitude: eventData.location.longitude,
        country: eventData.location.country,
        city: eventData.location.city || null,
        region: eventData.location.region || null,
        category: eventData.category,
        status: eventData.status,
        sources: eventData.sources || [],
        vote_count_up: 0,
        vote_count_down: 0,
      };

      // Upsert (insert or update)
      const { error } = await supabase
        .from('events')
        .upsert(dbEvent, {
          onConflict: 'id',
        });

      if (error) {
        console.error(`❌ ${country}/${path.basename(file)}: ${error.message}`);
        errorCount++;
      } else {
        console.log(`✅ ${country}/${path.basename(file)}`);
        insertedCount++;
      }
    } catch (error) {
      console.error(`❌ ${country}/${path.basename(file)}: ${error.message}`);
      errorCount++;
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`📊 Sync Summary:`);
  console.log(`   ✅ Synced: ${insertedCount}`);
  console.log(`   ❌ Failed: ${errorCount}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  if (errorCount > 0) {
    console.error('⚠️  Some events failed to sync');
  } else {
    console.log('✨ All events synced successfully!');
  }

  // Get final count from database
  const { count } = await supabase
    .from('events')
    .select('*', { count: 'exact', head: true });

  console.log(`📊 Total events in database: ${count}\n`);
}

syncAllEvents().catch(console.error);
