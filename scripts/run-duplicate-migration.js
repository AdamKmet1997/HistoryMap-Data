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
  env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

async function runMigration() {
  console.log('🔄 Running duplicate reports migration...\n');

  // Read migration file
  const migrationPath = path.join(__dirname, '../../HistoryMap-repo/supabase/migrations/add_duplicate_reports.sql');
  const migrationSQL = fs.readFileSync(migrationPath, 'utf8');

  console.log('📝 Migration SQL to be executed:');
  console.log('=' .repeat(80));
  console.log(migrationSQL);
  console.log('=' .repeat(80));
  console.log('\n⚠️  This script cannot execute DDL statements directly via the Supabase client.');
  console.log('\n📌 Please follow these steps to run the migration:\n');
  console.log('1. Go to your Supabase Dashboard: https://fvugsiwfjodsmyoybkba.supabase.co');
  console.log('2. Navigate to the SQL Editor');
  console.log('3. Create a new query');
  console.log('4. Copy the SQL above and paste it into the editor');
  console.log('5. Click "Run" to execute the migration\n');
  console.log('Or copy the migration file from:');
  console.log(migrationPath);
  console.log('\n✅ Once complete, the duplicate reporting feature will work!\n');
}

runMigration().catch(console.error);
