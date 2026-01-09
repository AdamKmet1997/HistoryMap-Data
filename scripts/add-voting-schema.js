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

async function addVotingColumns() {
  console.log('🔄 Adding voting columns to events table...\n');

  // First, check if columns already exist
  const { data: existingEvents, error: checkError } = await supabase
    .from('events')
    .select('id, vote_count_up, vote_count_down')
    .limit(1);

  if (!checkError) {
    console.log('✅ Voting columns already exist!\n');
    console.log('Current vote counts:', existingEvents[0]);
    return;
  }

  console.log('📝 Columns not found. You need to run this SQL in Supabase Dashboard:\n');
  console.log('=' .repeat(80));

  const migrationPath = path.join(__dirname, '../../HistoryMap-repo/supabase/migrations/add_voting.sql');
  const migration = fs.readFileSync(migrationPath, 'utf8');

  console.log(migration);
  console.log('=' .repeat(80));
  console.log('\n📍 Go to: Supabase Dashboard > SQL Editor > New Query');
  console.log('📋 Copy the SQL above and run it\n');
}

addVotingColumns().catch(console.error);
