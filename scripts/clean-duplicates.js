const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '../HistoryMap-repo/.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function cleanDuplicates() {
  console.log('🔍 Finding all events...');

  const { data: allEvents, error } = await supabase
    .from('events')
    .select('id, title, start_date')
    .order('title');

  if (error) {
    console.error('Error fetching events:', error);
    return;
  }

  console.log(`Found ${allEvents.length} total events`);

  // Group by title (case-insensitive)
  const byTitle = {};
  allEvents.forEach(event => {
    const title = event.title.toLowerCase().trim();
    if (!byTitle[title]) byTitle[title] = [];
    byTitle[title].push(event);
  });

  // Find and delete duplicates (keep the one with text ID, delete numeric IDs)
  let deletedCount = 0;

  for (const [title, events] of Object.entries(byTitle)) {
    if (events.length > 1) {
      console.log(`\n📦 Duplicate: "${title}" (${events.length} entries)`);

      // Sort: text IDs first, then numeric IDs
      events.sort((a, b) => {
        const aIsNumeric = /^\d+$/.test(a.id);
        const bIsNumeric = /^\d+$/.test(b.id);

        if (aIsNumeric && !bIsNumeric) return 1;
        if (!aIsNumeric && bIsNumeric) return -1;
        return 0;
      });

      // Keep the first one (should be text ID), delete the rest
      const toKeep = events[0];
      const toDelete = events.slice(1);

      console.log(`  ✅ Keeping: ${toKeep.id}`);

      for (const event of toDelete) {
        console.log(`  ❌ Deleting: ${event.id}`);

        const { error: deleteError } = await supabase
          .from('events')
          .delete()
          .eq('id', event.id);

        if (deleteError) {
          console.error(`  ⚠️  Error deleting ${event.id}:`, deleteError);
        } else {
          deletedCount++;
        }
      }
    }
  }

  console.log(`\n✨ Cleanup complete! Deleted ${deletedCount} duplicate entries.`);

  // Count remaining events
  const { count } = await supabase
    .from('events')
    .select('*', { count: 'exact', head: true });

  console.log(`📊 Remaining events in database: ${count}`);
}

cleanDuplicates().catch(console.error);
