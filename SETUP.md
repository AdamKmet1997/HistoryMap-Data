# HistoryMap-Data Setup Guide

This guide will help you complete the setup of the HistoryMap-Data repository.

---

## ✅ What's Already Done

The following has been set up for you:

- ✅ Repository structure created
- ✅ 43 historical events migrated to JSON files
- ✅ JSON schema for validation
- ✅ README and contributing guidelines
- ✅ GitHub Actions workflows
- ✅ Issue and PR templates

---

## 🔧 Required: Configure GitHub Secrets

For the GitHub Actions to work, you need to add three secrets to your repository:

### Step 1: Go to Repository Settings

1. Go to: https://github.com/AdamKmet1997/HistoryMap-Data
2. Click **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**

### Step 2: Add the Secrets

Add these three secrets:

#### Secret 1: `SUPABASE_URL`
- **Name**: `SUPABASE_URL`
- **Value**: `https://fvugsiwfjodsmyoybkba.supabase.co`

#### Secret 2: `SUPABASE_SERVICE_KEY`
- **Name**: `SUPABASE_SERVICE_KEY`
- **Value**: Your Supabase service role key
  - Get it from: https://fvugsiwfjodsmyoybkba.supabase.co
  - Go to **Settings** → **API**
  - Copy the **service_role** key (NOT the anon key!)
  - It should start with `eyJ...` and be very long (100+ characters)

#### Secret 3: `VERCEL_WEBHOOK_URL` (Optional for now)
- **Name**: `VERCEL_WEBHOOK_URL`
- **Value**: Will be configured later when you deploy to Vercel

**After adding secrets, they should look like this:**
```
SUPABASE_URL
SUPABASE_SERVICE_KEY
VERCEL_WEBHOOK_URL (optional)
```

---

## 📤 Push to GitHub

Now let's push all the files to your repository:

```bash
cd /Users/adamkmet/Desktop/Projects/HistoryMap-Data

# Add all files
git add .

# Commit
git commit -m "Initial setup: Add 43 historical events and repository structure

- Add events for 19 countries (Ireland, Slovakia, etc.)
- Add JSON schema for validation
- Add GitHub Actions for validation and Supabase sync
- Add comprehensive documentation (README, CONTRIBUTING)
- Add issue and PR templates for community contributions
"

# Push to GitHub
git push origin main
```

---

## ✅ Verify Everything Works

### 1. Check GitHub Actions

After pushing:
1. Go to: https://github.com/AdamKmet1997/HistoryMap-Data/actions
2. You should see workflows running
3. Wait for them to complete (should be green ✅)

### 2. Test Validation

The validation workflow should:
- ✅ Validate all 43 JSON files
- ✅ Check for duplicate IDs
- ✅ Pass successfully

### 3. Test Supabase Sync

The sync workflow will fail initially because you haven't added the secrets yet. After adding secrets:

1. Make a small test change (e.g., edit a file)
2. Commit and push
3. Workflow should sync events to Supabase
4. Check your Supabase table to verify

---

## 🧪 Testing the Workflow

### Test 1: Create a Test Event

Create a test event to verify everything works:

```bash
cd events/ireland

cat > test-event.json << 'EOF'
{
  "id": "test-event-2026",
  "title": "Test Event",
  "description": "This is a test event to verify the workflow is working correctly. It will be deleted after testing.",
  "startDate": "2026-01-08",
  "location": {
    "latitude": 53.3498,
    "longitude": -6.2603,
    "country": "Ireland",
    "city": "Dublin"
  },
  "category": "culture",
  "status": "approved",
  "sources": [
    "https://github.com/AdamKmet1997/HistoryMap-Data"
  ],
  "createdAt": "2026-01-08",
  "updatedAt": "2026-01-08"
}
EOF

git add events/ireland/test-event.json
git commit -m "Test: Add test event to verify workflow"
git push origin main
```

Then:
1. Check GitHub Actions runs successfully
2. Check Supabase to see if the event was synced
3. Delete the test event:
   ```bash
   git rm events/ireland/test-event.json
   git commit -m "Remove test event"
   git push origin main
   ```

---

## 🎯 What Each Workflow Does

### Validation Workflow (`validate-events.yml`)
**Triggers on**: Pull requests and pushes to main
**Does**:
- Validates JSON syntax
- Checks against schema
- Looks for duplicate IDs
- Prevents invalid events from being merged

### Sync Workflow (`sync-to-supabase.yml`)
**Triggers on**: Push to main (when events change)
**Does**:
- Reads all event JSON files
- Syncs them to Supabase database
- Triggers Vercel rebuild (optional)
- Events appear on website within minutes

---

## 🚀 Going Live

### Enable Community Contributions

Once everything is working:

1. **Update README**: Change the website URL from "coming soon" to your actual URL
2. **Share the repo**: Post on social media, forums, etc.
3. **Accept contributions**: Review and merge PRs from contributors

### Enable Issue Submissions

Users can submit events via issues:
1. Go to: https://github.com/AdamKmet1997/HistoryMap-Data/issues/new/choose
2. Select "Submit a Historical Event"
3. Fill out the form
4. You review and add it manually (or create a PR)

---

## 📊 Monitoring

### Check Activity
- **Actions**: https://github.com/AdamKmet1997/HistoryMap-Data/actions
- **Issues**: https://github.com/AdamKmet1997/HistoryMap-Data/issues
- **Pull Requests**: https://github.com/AdamKmet1997/HistoryMap-Data/pulls

### Supabase Database
- **Table Editor**: https://fvugsiwfjodsmyoybkba.supabase.co/project/default/editor
- Click on `events` table to see all synced events

---

## 🔧 Troubleshooting

### GitHub Actions failing?

**Check 1: Are secrets configured?**
- Go to Settings → Secrets and variables → Actions
- Make sure all 3 secrets are present

**Check 2: Is the Supabase key correct?**
- The service_role key should be very long (100+ chars)
- It should start with `eyJ...`
- Get it from Settings → API in Supabase dashboard

**Check 3: Check the error logs**
- Go to Actions tab
- Click on the failed workflow
- Read the error message

### Events not syncing?

**Check**:
- Is the sync workflow running?
- Are there errors in the logs?
- Is the Supabase table configured correctly?

**Solution**: Run the migration again from HistoryMap-repo:
```bash
cd /Users/adamkmet/Desktop/Projects/HistoryMap-repo
npm run db:seed:force
```

---

## 📚 Documentation Links

- [README](README.md) - Repository overview
- [CONTRIBUTING](CONTRIBUTING.md) - Contribution guidelines
- [schema.json](schema.json) - Event data schema
- [Main Architecture](../HistoryMap-repo/ARCHITECTURE.md) - Full system architecture

---

## ✨ Next Steps

1. ✅ Add GitHub secrets
2. ✅ Push to GitHub
3. ✅ Verify workflows pass
4. ✅ Test with a sample event
5. ✅ Deploy main app to Vercel (if not already)
6. ✅ Configure Vercel webhook
7. ✅ Share with the community!

---

## 🆘 Need Help?

If you run into issues:
1. Check the troubleshooting section above
2. Review the GitHub Actions logs
3. Check Supabase for errors
4. Review the ARCHITECTURE.md in the main repo

---

**You're all set! 🎉**

The HistoryMap-Data repository is ready for community contributions!
