# HistoryMap Data

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**Open-source database of historical events for the HistoryMap project.**

This repository contains a community-maintained collection of historical events from around the world. Events are stored as JSON files and automatically synced to the HistoryMap Supabase database when approved.

🌐 **View on the map**: [HistoryMap](https://historymap.vercel.app) *(coming soon)*

---

## 📊 Current Stats

- **Total Events**: 43
- **Countries**: 19
- **Categories**: Politics, War, Culture, Science, Disaster, Religion, Exploration
- **Date Range**: 2560 BC - 1998 AD

### Events by Country
- 🇮🇪 Ireland: 8 events
- 🇸🇰 Slovakia: 7 events
- 🇬🇧 United Kingdom: 4 events
- 🇺🇸 United States: 4 events
- 🇫🇷 France: 3 events
- 🇮🇹 Italy: 3 events
- 🇮🇳 India: 2 events
- And 12 more countries!

---

## 🎯 Purpose

This repository serves as:
- **Open Data**: Freely available historical events data for research and education
- **Community Project**: Anyone can contribute historical events
- **Version Control**: Full history of all changes and additions
- **Quality Control**: All events are reviewed before approval

---

## 📁 Repository Structure

```
HistoryMap-Data/
├── events/              # Historical events organized by country
│   ├── ireland/
│   │   ├── easter-rising-in-dublin.json
│   │   ├── great-irish-famine.json
│   │   └── ...
│   ├── slovakia/
│   │   ├── velvet-revolution-in-czechoslovakia.json
│   │   └── ...
│   └── ...
├── schema.json          # JSON schema for event validation
├── CONTRIBUTING.md      # Contribution guidelines
└── README.md           # This file
```

---

## 🚀 How to Contribute

We welcome contributions! You can add historical events in three ways:

### Option 1: Use the Contributor Tool (Easiest) ⭐

**[🚀 Open Contributor Tool Online](https://htmlpreview.github.io/?https://github.com/AdamKmet1997/HistoryMap-Data/blob/main/contribute.html)**

Or download [contribute.html](contribute.html) and open it in your browser (no installation needed!)

1. Fill out the form with event details
2. Click "Generate JSON" to create properly formatted JSON
3. Copy the generated JSON
4. Create a new file in `events/[country]/` and paste the JSON
5. Submit a pull request!

**✨ This tool prevents formatting errors and validates your data automatically. Works completely offline - just open the HTML file in any browser!**

### Option 2: Submit via Pull Request (Manual)
1. Fork this repository
2. Create a new JSON file in the appropriate country folder
3. Follow the [JSON schema](schema.json)
4. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions.

### Option 3: Submit via GitHub Issue
1. Go to [Issues](../../issues/new/choose)
2. Click "Submit a Historical Event"
3. Fill out the template
4. Submit!

We'll review it and add it to the database.

---

## 📝 Event Format

Each event is a JSON file following this structure:

```json
{
  "id": "easter-rising-1916",
  "title": "Easter Rising in Dublin",
  "description": "The Easter Rising was an armed insurrection...",
  "startDate": "1916-04-24",
  "endDate": "1916-04-30",
  "location": {
    "latitude": 53.3498,
    "longitude": -6.2603,
    "country": "Ireland",
    "city": "Dublin"
  },
  "category": "politics",
  "status": "approved",
  "sources": [
    "https://en.wikipedia.org/wiki/Easter_Rising",
    "https://www.historyireland.com/20th-century-contemporary-history/the-easter-rising/"
  ],
  "createdAt": "2024-01-01",
  "updatedAt": "2024-01-01"
}
```

### Required Fields
- **id**: Unique identifier (kebab-case)
- **title**: Event title (5-200 characters)
- **description**: Detailed description (50-5000 characters, supports Markdown)
- **startDate**: ISO 8601 date (YYYY-MM-DD)
- **location**: Geographic coordinates and place names
- **category**: One of: `politics`, `war`, `culture`, `science`, `disaster`, `religion`, `exploration`
- **status**: Usually `approved` for new submissions
- **sources**: Array of URLs (minimum 1, maximum 10)

### Optional Fields
- **endDate**: For events spanning multiple days
- **location.city**: City name
- **location.region**: State/province/region

See [schema.json](schema.json) for the complete specification.

---

## ✅ Contribution Guidelines

### Quality Standards

Events must meet these criteria:
- **Historically Accurate**: Backed by reliable sources
- **Well-Documented**: Minimum 1 credible source (Wikipedia, academic journals, museums, etc.)
- **Significant**: Notable events with historical impact
- **Complete**: All required fields filled out
- **Original**: Not already in the database

### Categories Explained

- **politics**: Political events, treaties, independence, elections, revolutions
- **war**: Battles, conflicts, military events
- **culture**: Art, architecture, cultural milestones, discoveries
- **science**: Scientific discoveries, inventions, space exploration
- **disaster**: Natural disasters, accidents, pandemics
- **religion**: Religious events, movements, significant moments
- **exploration**: Geographic discoveries, explorations

### What We Accept
✅ Historical events with clear dates
✅ Events from any time period
✅ Events from any country
✅ Multiple events from the same location
✅ Local/regional events if historically significant

### What We Don't Accept
❌ Recent events (< 5 years ago, for objectivity)
❌ Fictional events
❌ Events without reliable sources
❌ Duplicate events
❌ Overly broad topics (e.g., "The Renaissance")

---

## 🤖 Automated Workflow

When you submit a Pull Request:

1. **Validation**: GitHub Actions automatically validates your JSON against the schema
2. **Review**: A maintainer reviews your submission for accuracy
3. **Merge**: If approved, the PR is merged
4. **Sync**: GitHub Actions syncs the event to Supabase database
5. **Live**: Event appears on HistoryMap within minutes!

---

## 📜 License

This database is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

You are free to:
- **Share**: Copy and redistribute the material
- **Adapt**: Remix, transform, and build upon the material

Under the following terms:
- **Attribution**: Give appropriate credit
- **ShareAlike**: Distribute contributions under the same license

---

## 🌟 Contributors

Thanks to all contributors who have added historical events!

<!-- Contributors will be automatically listed here -->

---

## 📧 Contact

- **Issues**: [GitHub Issues](../../issues)
- **Discussions**: [GitHub Discussions](../../discussions)
- **Website**: [HistoryMap](https://historymap.vercel.app) *(coming soon)*

---

## 🔗 Related Repositories

- [HistoryMap](https://github.com/AdamKmet1997/HistoryMap-repo) - Main application (private)

---

## 🎓 Educational Use

This dataset is perfect for:
- History education
- Data visualization projects
- GIS and mapping applications
- Historical research
- Timeline projects

Feel free to use this data in your projects! Just give attribution.

---

## 📈 Roadmap

- [ ] Reach 100 events
- [ ] Add events from all continents
- [ ] Create automated quality checks
- [ ] Add multi-language support
- [ ] Create data export tools (CSV, GeoJSON)
- [ ] Build event relationship system (causes/effects)

---

**Made with ❤️ by the HistoryMap community**
