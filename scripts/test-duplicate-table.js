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

async function testTable() {
  console.log('🔍 Testing duplicate_reports table...\n');

  // Try to query the table
  const { data, error } = await supabase
    .from('duplicate_reports')
    .select('*')
    .limit(1);

  if (error) {
    console.error('❌ Error accessing table:');
    console.error(error);
    console.log('\n⚠️  The table might not exist yet. Please run the migration in Supabase Dashboard.');
    return;
  }

  console.log('✅ Table exists and is accessible!');
  console.log('📊 Current reports:', data.length);

  if (data.length > 0) {
    console.log('\nSample data:');
    console.log(data[0]);
  }
}

testTable().catch(console.error);
