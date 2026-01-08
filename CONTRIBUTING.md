# Contributing to HistoryMap Data

Thank you for your interest in contributing to HistoryMap! This guide will help you add historical events to our database.

---

## 📋 Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Step-by-Step Guide](#step-by-step-guide)
- [Event Guidelines](#event-guidelines)
- [JSON Schema](#json-schema)
- [Finding Information](#finding-information)
- [Review Process](#review-process)
- [Tips for Success](#tips-for-success)

---

## 🤝 Ways to Contribute

### 1. Submit via GitHub Issue (Easiest)
Perfect for non-technical contributors!

1. Go to [Issues → New](../../issues/new/choose)
2. Select "Submit a Historical Event"
3. Fill out the template
4. Click "Submit new issue"

A maintainer will review and add it for you.

### 2. Submit via Pull Request (Recommended)
For those comfortable with Git and JSON.

1. Fork this repository
2. Clone your fork
3. Create a new branch
4. Add your event JSON file
5. Submit a pull request

See [detailed steps below](#step-by-step-guide).

### 3. Submit via Website *(Coming Soon)*
Submit events directly through the HistoryMap interface.

---

## 🔨 Step-by-Step Guide

### Prerequisites
- A GitHub account
- Basic knowledge of Git (optional but helpful)
- A text editor

### Step 1: Fork the Repository

Click the "Fork" button at the top right of this page.

### Step 2: Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/HistoryMap-Data.git
cd HistoryMap-Data
```

### Step 3: Create a New Branch

```bash
git checkout -b add-event-battle-of-hastings
```

Use a descriptive branch name related to your event.

### Step 4: Find the Right Folder

Navigate to the appropriate country folder in `events/`:

```
events/
├── ireland/
├── slovakia/
├── united-kingdom/
├── france/
└── ...
```

If your country doesn't exist, create it:
```bash
mkdir events/your-country-name
```

Use lowercase and hyphens (e.g., `united-states`, `south-africa`).

### Step 5: Create Your Event JSON File

Create a new file with a descriptive name:
```bash
touch events/united-kingdom/battle-of-hastings.json
```

**Naming Convention**:
- Use lowercase letters
- Use hyphens instead of spaces
- Be specific but concise
- Example: `easter-rising-in-dublin.json`

### Step 6: Write the Event Data

Open the file and add your event data:

```json
{
  "id": "battle-of-hastings-1066",
  "title": "Battle of Hastings",
  "description": "The **Battle of Hastings** was fought on October 14, 1066, between the Norman-French army of William, Duke of Normandy, and an English army under the Anglo-Saxon King Harold Godwinson.\n\nThe battle took place approximately 7 miles northwest of Hastings, close to the present-day town of Battle, East Sussex. It was a decisive Norman victory that marked the beginning of the Norman conquest of England.\n\nKing Harold was killed in the battle, traditionally said to have been shot through the eye with an arrow, though this is disputed by historians. William became King of England on Christmas Day 1066.",
  "startDate": "1066-10-14",
  "location": {
    "latitude": 50.9117,
    "longitude": 0.4916,
    "country": "United Kingdom",
    "city": "Battle",
    "region": "East Sussex"
  },
  "category": "war",
  "status": "approved",
  "sources": [
    "https://en.wikipedia.org/wiki/Battle_of_Hastings",
    "https://www.britannica.com/event/Battle-of-Hastings-English-history"
  ],
  "createdAt": "2026-01-08",
  "updatedAt": "2026-01-08"
}
```

**Pro Tips**:
- Use Markdown in the description (bold, italic, links)
- Break description into paragraphs for readability
- Include interesting details and context
- Use today's date for `createdAt` and `updatedAt`

### Step 7: Validate Your JSON

Make sure your JSON is valid:
- Use a JSON validator: https://jsonlint.com
- Check against our [schema.json](schema.json)
- Ensure all required fields are present

### Step 8: Commit Your Changes

```bash
git add events/united-kingdom/battle-of-hastings.json
git commit -m "Add Battle of Hastings (1066)"
```

**Commit Message Format**:
- Start with "Add" for new events
- Include the event name and year
- Examples:
  - `Add Battle of Hastings (1066)`
  - `Add Apollo 11 Moon Landing (1969)`

### Step 9: Push to Your Fork

```bash
git push origin add-event-battle-of-hastings
```

### Step 10: Create a Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill out the PR template
4. Submit the pull request

Your event will be reviewed by a maintainer!

---

## 📖 Event Guidelines

### Quality Standards

#### Description Writing
- **Minimum**: 50 characters
- **Recommended**: 200-500 characters
- **Maximum**: 5000 characters

Good descriptions:
- Start with a bold event name
- Explain what happened
- Provide historical context
- Include interesting details
- Use multiple paragraphs
- Cite specific facts (dates, numbers, names)

**Example of a GOOD description**:
```
The **Easter Rising** was an armed insurrection in Ireland during Easter Week in April 1916.

The Rising was launched by Irish republicans against British rule in Ireland with the aim of establishing an independent Irish Republic while the United Kingdom was fighting the First World War.

It was the most significant uprising in Ireland since the rebellion of 1798...
```

**Example of a POOR description**:
```
A battle that happened in Ireland.
```

#### Geographic Coordinates
- Use decimal degrees format
- Get coordinates from Google Maps or Wikipedia
- Be as precise as possible
- Use the main location if the event spanned multiple places

**How to get coordinates**:
1. Go to Google Maps
2. Right-click on the location
3. Click the coordinates to copy them
4. First number is latitude, second is longitude

#### Sources
- **Minimum**: 1 source
- **Recommended**: 2-3 sources
- **Maximum**: 10 sources

**Acceptable sources**:
✅ Wikipedia (good starting point)
✅ Academic journals
✅ Museum websites
✅ Government archives
✅ Historical societies
✅ Reputable news organizations (for modern events)
✅ Educational institutions (.edu domains)

**Not acceptable**:
❌ Social media posts
❌ Personal blogs
❌ Unreliable websites
❌ Sources without citations

### Categories

Choose the **most appropriate** category:

| Category | Examples |
|----------|----------|
| **politics** | Treaties, independence, elections, revolutions, political reforms |
| **war** | Battles, sieges, military campaigns, declarations of war |
| **culture** | Artistic movements, construction of monuments, cultural festivals |
| **science** | Scientific discoveries, inventions, space missions |
| **disaster** | Earthquakes, floods, fires, famines, pandemics |
| **religion** | Religious movements, significant ceremonies, reformations |
| **exploration** | Geographic discoveries, expeditions, first contacts |

**When in doubt**:
- Choose the category that best represents the **primary** nature of the event
- If an event fits multiple categories, pick the most significant one
- Example: D-Day is primarily **war**, not politics (even though it had political implications)

### Date Format

Use ISO 8601 format: `YYYY-MM-DD`

**Examples**:
- `"2001-09-11"` (September 11, 2001)
- `"1969-07-20"` (July 20, 1969)
- `"1916-04-24"` (April 24, 1916)

**For ancient dates** (before year 1 AD):
- Use negative years: `"-0753-04-21"` (753 BC)
- Example: `"-2560-01-01"` (2560 BC)

**For uncertain dates**:
- Use January 1st if only the year is known
- Use the 15th if only month/year is known
- Mention uncertainty in the description

**For multi-day events**:
- Add `endDate` field
- Example:
  ```json
  "startDate": "1969-08-15",
  "endDate": "1969-08-18"
  ```

---

## 📝 JSON Schema

### Complete Schema

```json
{
  "id": "unique-event-id",
  "title": "Event Title",
  "description": "Detailed description with **Markdown** support",
  "startDate": "YYYY-MM-DD",
  "endDate": "YYYY-MM-DD",
  "location": {
    "latitude": 50.0,
    "longitude": 10.0,
    "country": "Country Name",
    "city": "City Name",
    "region": "Region/State"
  },
  "category": "politics|war|culture|science|disaster|religion|exploration",
  "status": "approved",
  "sources": [
    "https://source1.com",
    "https://source2.com"
  ],
  "createdAt": "YYYY-MM-DD",
  "updatedAt": "YYYY-MM-DD"
}
```

### Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ Yes | Unique identifier (kebab-case) |
| `title` | string | ✅ Yes | Event title (5-200 chars) |
| `description` | string | ✅ Yes | Event description (50-5000 chars, Markdown) |
| `startDate` | string | ✅ Yes | ISO 8601 date |
| `endDate` | string | ❌ No | ISO 8601 date (if multi-day) |
| `location.latitude` | number | ✅ Yes | -90 to 90 |
| `location.longitude` | number | ✅ Yes | -180 to 180 |
| `location.country` | string | ✅ Yes | Country name |
| `location.city` | string | ❌ No | City name |
| `location.region` | string | ❌ No | State/province/region |
| `category` | enum | ✅ Yes | One of 7 categories |
| `status` | enum | ✅ Yes | Usually "approved" |
| `sources` | array | ✅ Yes | 1-10 URLs |
| `createdAt` | string | ✅ Yes | ISO 8601 date |
| `updatedAt` | string | ✅ Yes | ISO 8601 date |

---

## 🔍 Finding Information

### Research Tips

1. **Start with Wikipedia**: Good overview and citations
2. **Follow citations**: Check Wikipedia's sources
3. **Use Google Scholar**: For academic sources
4. **Check museum websites**: Often have detailed information
5. **Look for primary sources**: Contemporary accounts, documents

### Verifying Facts

Before submitting, verify:
- ✅ Event date is accurate
- ✅ Location is correct
- ✅ Key facts are sourced
- ✅ Description is historically accurate
- ✅ No major historical errors

### Geographic Information

**Tools for finding coordinates**:
- [Google Maps](https://maps.google.com) - Right-click → Coordinates
- [Wikipedia](https://wikipedia.org) - Coordinates in infobox
- [GeoNames](http://www.geonames.org) - Geographic database

---

## 👀 Review Process

### What Happens After You Submit

1. **Automated Validation** (< 1 minute)
   - JSON syntax check
   - Schema validation
   - File naming check

2. **Maintainer Review** (1-7 days)
   - Historical accuracy check
   - Source verification
   - Quality assessment

3. **Feedback** (if needed)
   - Suggestions for improvement
   - Requests for clarification
   - Additional source requests

4. **Approval & Merge**
   - PR is merged to main branch
   - Event syncs to Supabase database
   - Appears on HistoryMap within minutes!

### Common Review Comments

**"Please add more context to the description"**
→ Expand your description with more details

**"Can you provide an additional source?"**
→ Add 1-2 more credible sources

**"The coordinates seem incorrect"**
→ Double-check your latitude/longitude

**"This event is too recent"**
→ We generally don't accept events from the last 5 years

**"This is a duplicate"**
→ Check existing events before submitting

---

## 💡 Tips for Success

### DO
✅ Read existing events for inspiration
✅ Use clear, descriptive titles
✅ Write engaging descriptions with details
✅ Provide multiple reliable sources
✅ Double-check your JSON syntax
✅ Be specific with locations
✅ Include interesting historical context

### DON'T
❌ Copy-paste entire Wikipedia articles
❌ Submit events without sources
❌ Use vague descriptions
❌ Submit duplicate events
❌ Include subjective opinions
❌ Submit fictional or mythological events as fact
❌ Use unreliable sources

### Example Workflow

```bash
# 1. Fork and clone
git clone https://github.com/YOUR_USERNAME/HistoryMap-Data.git
cd HistoryMap-Data

# 2. Create branch
git checkout -b add-moon-landing

# 3. Create event file
cat > events/united-states/apollo-11-moon-landing.json << EOF
{
  "id": "apollo-11-moon-landing",
  "title": "Apollo 11 Moon Landing",
  ...
}
EOF

# 4. Validate (optional)
npm run validate  # if validation script exists

# 5. Commit and push
git add events/united-states/apollo-11-moon-landing.json
git commit -m "Add Apollo 11 Moon Landing (1969)"
git push origin add-moon-landing

# 6. Create PR on GitHub
```

---

## ❓ Questions?

- 💬 [GitHub Discussions](../../discussions) - Ask questions
- 📧 [Open an Issue](../../issues/new) - Report problems
- 📖 [Read the README](README.md) - More information

---

## 🏆 Recognition

All contributors are recognized in our README and commit history. Thank you for helping build this historical database!

---

**Happy Contributing! 🎉**
