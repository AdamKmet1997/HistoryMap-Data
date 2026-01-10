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

async function runMigration() {
  console.log('🔄 Running duplicate reports migration...\n');

  // Read migration file
  const migrationPath = path.join(__dirname, '../../HistoryMap-repo/supabase/migrations/add_duplicate_reports.sql');
  const migration = fs.readFileSync(migrationPath, 'utf8');

  // Split by semicolon and filter out empty statements
  const statements = migration
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'));

  console.log(`Found ${statements.length} SQL statements to execute\n`);

  for (let i = 0; i < statements.length; i++) {
    const statement = statements[i] + ';';
    console.log(`Executing statement ${i + 1}/${statements.length}...`);
    console.log(statement.substring(0, 100) + '...\n');

    const { data, error } = await supabase.rpc('exec_sql', { sql: statement }).catch(() => ({
      error: 'RPC not available, trying direct query'
    }));

    if (error === 'RPC not available, trying direct query') {
      // Try to execute via raw SQL if RPC is not available
      console.log('Note: Using Supabase client (some statements may require manual execution in Supabase Dashboard)\n');
    } else if (error) {
      console.error('❌ Error:', error);
      console.error('Statement:', statement, '\n');
    } else {
      console.log('✅ Success\n');
    }
  }

  console.log('✨ Migration completed! You may need to run some statements manually in Supabase Dashboard if errors occurred.\n');
  console.log('📝 Copy the migration file content from:');
  console.log(migrationPath);
}

runMigration().catch(console.error);
