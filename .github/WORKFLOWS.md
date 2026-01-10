# GitHub Actions Workflows

This document describes all the automated workflows in the HistoryMap-Data repository.

## 📋 Workflow Overview

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| **Validate Events** | PR, Push to main | Validates JSON schema and checks for duplicates |
| **Sync to Supabase** | Push to main | Syncs events to production database |
| **PR Comment** | PR opened/updated | Posts event preview in PR comments |
| **Auto Label** | PR opened/updated | Automatically labels PRs by category/country |
| **Update Stats** | Push to main, Manual | Generates repository statistics |

---

## 🔍 Validate Events

**File:** `.github/workflows/validate-events.yml`

### What it does:
1. **JSON Schema Validation**: Validates all event JSON files against `schema.json`
2. **Duplicate Detection**: Checks for duplicate event IDs and similar titles
3. **Parse Check**: Ensures all JSON files are valid and parseable

### When it runs:
- On pull requests that modify event files
- On pushes to the main branch

### Features:
- ✅ Validates against JSON schema using AJV
- ✅ Detects duplicate IDs (fails build)
- ⚠️  Warns about similar titles (potential duplicates)
- ✅ Caches npm dependencies for faster runs
- ✅ Detailed error messages showing which fields failed

### Output Example:
```
🔍 Found 139 event files to validate

✅ events/ireland/easter-rising-1916.json
✅ events/france/storming-of-bastille.json
❌ events/usa/invalid-event.json
   Errors:
   - /location/latitude must be number

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Validation Summary:
   ✅ Valid: 138
   ❌ Invalid: 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🔄 Sync to Supabase

**File:** `.github/workflows/sync-to-supabase.yml`

### What it does:
1. **Database Sync**: Upserts all events to Supabase PostgreSQL
2. **Vercel Trigger**: Triggers rebuild of the live website
3. **Vote Count Init**: Initializes vote counts for new events

### When it runs:
- On pushes to main branch (after PR merge)
- Only when event files are modified

### Database Fields Synced:
- `id`, `title`, `description`
- `start_date`, `end_date`, `year`
- `latitude`, `longitude`, `country`, `city`, `region`
- `category`, `status`, `sources`
- `vote_count_up`, `vote_count_down` (initialized to 0)

### Features:
- ✅ Upsert operation (insert or update)
- ✅ Handles new `year` field for BC dates
- ✅ Initializes voting system fields
- ✅ Triggers Vercel deployment webhook
- ✅ Detailed sync summary with counts
- ✅ Caches dependencies for faster runs

### Output Example:
```
🔄 Starting sync to Supabase...

📦 Found 139 event files

✅ argentina/falklands-war.json
✅ egypt/construction-of-great-pyramid.json
✅ japan/atomic-bombing-hiroshima.json
...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Sync Summary:
   ✅ Synced: 139
   ❌ Failed: 0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ All events synced successfully!
🔄 Triggering Vercel rebuild...
✅ Rebuild triggered!
🌐 Changes will be live within 2-3 minutes
```

---

## 💬 PR Comment with Event Preview

**File:** `.github/workflows/pr-comment.yml`

### What it does:
1. **Event Preview**: Shows formatted preview of new events in PR
2. **Quick Info**: Displays key details (title, country, category, date)
3. **File Count**: Shows total events in the PR

### When it runs:
- When a PR is opened
- When a PR is updated (new commits)

### Features:
- ✅ Automatically posts/updates comment on PR
- ✅ Shows formatted JSON with syntax highlighting
- ✅ Extracts and displays key event information
- ✅ Uses comment tags to update existing comment
- ✅ Helpful for reviewers to quickly see what's being added

### Example Comment:
```markdown
## 📝 Event Preview

### 📍 atomic-bombing-hiroshima

```json
{
  "id": "atomic-bombing-hiroshima",
  "title": "Atomic Bombing of Hiroshima",
  ...
}
```

**Quick Info:**
- 🏷️ Title: Atomic Bombing of Hiroshima
- 🌍 Country: Japan
- 📂 Category: war
- 📅 Date: 1945-08-06

---

✅ **Total events in this PR:** 1

Once validation passes and this PR is merged, these events will automatically sync to the live map!
```

---

## 🏷️ Auto Label PRs

**File:** `.github/workflows/auto-label.yml`

### What it does:
1. **Category Labels**: Adds labels like `category: war`, `category: science`
2. **Country Labels**: Adds country-specific labels for single-country PRs
3. **Multi-Country**: Labels PRs that add events from multiple countries
4. **New Event**: Marks all PRs as `new-event`

### When it runs:
- When a PR is opened
- When a PR is updated

### Labels Added:
- `category: war`, `category: politics`, `category: science`, etc.
- `country: United States`, `country: Ireland`, etc.
- `multiple-countries` (for PRs with events from 2+ countries)
- `new-event` (all new event PRs)

### Features:
- ✅ Automatic categorization for better organization
- ✅ Easy filtering in GitHub Issues/PRs
- ✅ Helps maintainers prioritize reviews
- ✅ Creates labels if they don't exist

---

## 📊 Update Stats

**File:** `.github/workflows/stats.yml`

### What it does:
1. **Generate Statistics**: Analyzes all events and creates `STATS.md`
2. **Category Breakdown**: Shows events per category with percentages
3. **Top Countries**: Lists top 10 countries by event count
4. **Timeline Info**: Shows oldest and newest events
5. **Auto-commit**: Commits updated stats back to repo

### When it runs:
- When events are pushed to main
- Can be triggered manually via GitHub Actions UI

### Generated Stats Include:
- Total events count
- Number of countries represented
- Number of BC (ancient) events
- Oldest and newest events
- Events by category with percentages
- Top 10 countries with event counts
- Historical span (years of coverage)

### Features:
- ✅ Automatically updates after each merge
- ✅ Creates/updates `STATS.md` file
- ✅ Can be run manually for on-demand stats
- ✅ Committed by GitHub Actions bot

### Example Output (`STATS.md`):
```markdown
# HistoryMap Statistics

*Last updated: 2026-01-09*

## 📊 Overview

- **Total Events**: 139
- **Countries Represented**: 40
- **Ancient Events (BC)**: 8
- **Oldest Event**: Construction of the Great Pyramid of Giza (2560 BC)
- **Newest Event**: COVID-19 Pandemic Declared (2020)

## 📂 Events by Category

- **war**: 45 (32.4%)
- **politics**: 38 (27.3%)
- **science**: 20 (14.4%)
...

## 🌍 Top 10 Countries

1. **United States**: 32 events (23.0%)
2. **United Kingdom**: 21 events (15.1%)
3. **France**: 12 events (8.6%)
...
```

---

## 🔐 Dependabot

**File:** `.github/dependabot.yml`

### What it does:
1. **Security Updates**: Automatically creates PRs for GitHub Actions updates
2. **Weekly Checks**: Runs every week to check for updates
3. **Auto-label**: Labels PRs with `dependencies` and `github-actions`

### Features:
- ✅ Keeps GitHub Actions up to date
- ✅ Security vulnerability patches
- ✅ Automatic PR creation
- ✅ Easy one-click merge for updates

---

## 🚀 Performance Improvements

All workflows now include:

### 1. **Dependency Caching**
```yaml
- name: Cache dependencies
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
```

**Benefits:**
- ⚡ 50-70% faster workflow runs
- 💰 Reduced GitHub Actions minutes usage
- 🌱 Lower environmental impact

### 2. **Node.js Caching**
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'
    cache: 'npm'
```

**Benefits:**
- ⚡ Faster npm install
- ✅ Built-in caching support

---

## 🔧 Required Secrets

Set these in your repository settings:

| Secret | Purpose | Required For |
|--------|---------|--------------|
| `SUPABASE_URL` | Supabase project URL | Sync workflow |
| `SUPABASE_SERVICE_KEY` | Supabase service role key | Sync workflow |
| `VERCEL_WEBHOOK_URL` | Vercel deploy webhook | Sync workflow (optional) |
| `GITHUB_TOKEN` | GitHub API access | Auto-provided by GitHub |

---

## 📝 Workflow Summary

### For Contributors:
1. Submit PR with new event JSON file
2. **Auto Label** adds category/country labels
3. **PR Comment** shows event preview
4. **Validate Events** checks JSON format
5. Maintainer reviews and merges
6. **Sync to Supabase** updates database
7. **Update Stats** regenerates stats
8. Changes live on map within minutes!

### For Maintainers:
- All PRs are automatically validated
- Labels help organize and prioritize
- Event previews make reviewing easier
- Stats stay up to date automatically
- Database syncs happen automatically
- Dependabot keeps Actions secure

---

## 🐛 Troubleshooting

### Validation Fails
- Check JSON syntax is valid
- Ensure all required fields are present
- Verify coordinates are within valid ranges
- Check dates are in YYYY-MM-DD format

### Sync Fails
- Verify Supabase secrets are set correctly
- Check database schema matches event structure
- Ensure vote_count fields exist in database

### Stats Don't Update
- Manually trigger the workflow from Actions tab
- Check git permissions for Actions bot
- Verify no merge conflicts in STATS.md

---

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Supabase Documentation](https://supabase.com/docs)
- [JSON Schema Validation](https://json-schema.org/)
- [AJV JSON Validator](https://ajv.js.org/)

---

**Last Updated:** January 2026
