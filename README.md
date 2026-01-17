# HistoryMap Data

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**Open-source database of historical events for the HistoryMap project.**

This repository contains a community-maintained collection of historical events from around the world. Events are stored as JSON files and automatically synced to the HistoryMap Supabase database when approved.

🌐 **View on the map**: [HistoryMap](https://historymap.vercel.app) *(coming soon)*
🎨 **[Contributor Tool](https://htmlpreview.github.io/?https://github.com/AdamKmet1997/HistoryMap-Data/blob/main/contribute.html)** - Generate properly formatted events in seconds!

## 🎉 Recent Updates (January 2026)

- 📊 **198 Events**: Major milestone reached with diverse global coverage across 55 countries
- 👍 **Voting System**: Community engagement with thumbs up/down on every event
- ⏱️ **Interactive Timeline**: Visual exploration of history with histogram visualization
- 🌏 **Expanded Coverage**: Added events from Peru, South Korea, Kenya, Brazil, Chile, Cambodia, and many more
- 🏛️ **Ancient to Modern**: Events now span from 2560 BC (Great Pyramid) to present day

## 📋 Quick Links

- 🚀 **[Start Contributing](#-how-to-contribute)** - Add your first event!
- 📝 **[Event Format](#-event-format)** - JSON structure and examples
- ✅ **[Guidelines](#-contribution-guidelines)** - Quality standards and rules
- 🤖 **[Automated Workflow](#-automated-workflow)** - How PRs are processed
- 📜 **[Schema](schema.json)** - Technical specification
- 📖 **[Contributing Guide](CONTRIBUTING.md)** - Detailed instructions

---

## 📊 Current Stats

- **Total Events**: 198 ✅
- **Countries**: 55
- **Contributors**: Growing community
- **Categories**: Politics, War, Culture, Science, Disaster, Religion, Exploration
- **Date Range**: 2560 BC - Present
- **Coverage**: All continents represented
- **Community Engagement**: Voting system with thumbs up/down on every event

### Geographic Coverage
- 🇺🇸 United States (30+ events)
- 🇬🇧 United Kingdom (20+ events)
- 🇫🇷 France (10+ events)
- 🇮🇪 Ireland (10+ events)
- 🇩🇪 Germany
- 🇮🇹 Italy
- 🇨🇳 China
- 🇮🇳 India
- 🇯🇵 Japan
- 🇲🇽 Mexico
- And 45+ more countries across all continents including Argentina, Australia, Brazil, Cambodia, Chile, Egypt, Ghana, Greece, Haiti, Indonesia, Kenya, Lithuania, Nepal, New Zealand, Pakistan, Panama, Peru, Philippines, Poland, Russia, Rwanda, Saudi Arabia, South Africa, South Korea, Spain, Switzerland, Tanzania, Thailand, Tunisia, Turkey, Ukraine, United Arab Emirates, Vietnam, and more!

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
│   │   ├── easter-rising-1916.json
│   │   ├── great-irish-famine.json
│   │   └── ...
│   ├── france/
│   │   ├── storming-of-bastille-1789.json
│   │   └── ...
│   ├── united-states/
│   │   ├── declaration-of-independence-1776.json
│   │   └── ...
│   └── [35+ countries...]
├── contribute.html      # ⭐ Interactive event submission tool
├── schema.json          # JSON schema for event validation
├── CONTRIBUTING.md      # Detailed contribution guidelines
└── README.md           # This file
```

---

## 🚀 How to Contribute

We welcome contributions from everyone! Adding historical events is easy - choose the method that works best for you:

### 🌟 Option 1: Interactive Contributor Tool (Recommended)

**[🚀 Open Contributor Tool Online](https://htmlpreview.github.io/?https://github.com/AdamKmet1997/HistoryMap-Data/blob/main/contribute.html)**

The easiest way to contribute! This tool:
- ✅ Validates all your inputs in real-time
- ✅ Prevents formatting errors
- ✅ Generates properly formatted JSON for you
- ✅ Works completely offline (no installation needed)
- ✅ Includes helpful links for finding coordinates

**How to use:**
1. Click the link above (or download [contribute.html](contribute.html) and open it locally)
2. Fill out the form with your event details
3. Click "Generate JSON" button
4. Copy the generated JSON to your clipboard
5. Fork this repository
6. Create a new file: `events/[country-name]/[event-id].json`
7. Paste the JSON and submit a pull request
8. That's it! We'll review and merge your contribution

**Finding Coordinates:**
- Use [LatLong.net](https://www.latlong.net/) to find accurate coordinates
- Or right-click on Google Maps and copy the coordinates

---

### 📝 Option 2: Manual JSON File (Advanced)

If you're comfortable with JSON:

1. Fork this repository
2. Create a new JSON file in `events/[country]/[event-id].json`
3. Follow the [schema.json](schema.json) format (see example below)
4. Validate your JSON against the schema
5. Submit a pull request with your event

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed technical guidelines.

---

### 💬 Option 3: Submit via GitHub Issue (No Coding Required)

Don't want to deal with files and JSON?

1. Go to [Issues](../../issues/new/choose)
2. Click "Submit a Historical Event"
3. Fill out the event details in the template
4. Submit the issue
5. A maintainer will create the JSON file and add it for you!

This option is perfect if you're not familiar with Git or JSON.

---

## 📝 Event Format

Each event is stored as a JSON file. Here's a complete example:

```json
{
  "id": "easter-rising-1916",
  "title": "Easter Rising in Dublin",
  "description": "The Easter Rising was an armed insurrection in Ireland during Easter Week in April 1916. Members of the Irish Volunteers and the Irish Citizen Army seized key locations in Dublin and proclaimed an Irish Republic. The uprising lasted six days before the rebels surrendered. While initially unsuccessful, it became a significant event that contributed to Irish independence.",
  "startDate": "1916-04-24",
  "endDate": "1916-04-30",
  "year": 1916,
  "location": {
    "latitude": 53.3498,
    "longitude": -6.2603,
    "country": "Ireland",
    "city": "Dublin",
    "region": "Leinster"
  },
  "category": "politics",
  "status": "approved",
  "sources": [
    "https://en.wikipedia.org/wiki/Easter_Rising",
    "https://www.historyireland.com/20th-century-contemporary-history/the-easter-rising/"
  ],
  "contributedBy": "YourGitHubUsername",
  "createdAt": "2024-01-01",
  "updatedAt": "2024-01-01"
}
```

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| **id** | string | Unique identifier in kebab-case | `"easter-rising-1916"` |
| **title** | string | Event title (5-200 chars) | `"Easter Rising in Dublin"` |
| **description** | string | Detailed description (50-5000 chars, Markdown supported) | `"The Easter Rising was..."` |
| **startDate** | string | ISO 8601 date (YYYY-MM-DD) | `"1916-04-24"` |
| **location** | object | Geographic information | See below |
| **location.latitude** | number | Latitude (-90 to 90) | `53.3498` |
| **location.longitude** | number | Longitude (-180 to 180) | `-6.2603` |
| **location.country** | string | Country name | `"Ireland"` |
| **category** | string | Event category | `"politics"`, `"war"`, `"culture"`, `"science"`, `"disaster"`, `"religion"`, `"exploration"` |
| **status** | string | Approval status | `"approved"` (default) |
| **sources** | array | Source URLs (1-10 URLs) | `["https://..."]` |
| **createdAt** | string | Creation date (YYYY-MM-DD) | `"2024-01-01"` |
| **updatedAt** | string | Last update date (YYYY-MM-DD) | `"2024-01-01"` |

### Automatic Fields (Added by System)

These fields are automatically managed by the HistoryMap system:

| Field | Type | Description |
|-------|------|-------------|
| **voteCountUp** | integer | Number of positive votes (managed automatically) |
| **voteCountDown** | integer | Number of negative votes (managed automatically) |

### Optional Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| **endDate** | string | End date for multi-day events | `"1916-04-30"` |
| **year** | integer | Actual year (negative for BC dates) | `1916` or `-2560` for 2560 BC |
| **location.city** | string | City name | `"Dublin"` |
| **location.region** | string | State/province/region | `"Leinster"` |
| **contributedBy** | string | GitHub username or contributor name | `"JohnDoe"` |

### Special Notes

**BC Dates:**
For events before 1 AD (BC dates), use negative years:
- 2560 BC = `-2560`
- 753 BC = `-753`
- 44 BC = `-44`

The `startDate` field should use a placeholder like `"2560-01-01"` for display purposes.

**Contributor Attribution:**
Add your GitHub username in the `contributedBy` field to get credited on the dashboard!

See [schema.json](schema.json) for the complete technical specification and validation rules.

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

Thanks to all contributors who have added historical events! Your contributions are making history more accessible to everyone.

### How to Get Credit

Add your GitHub username or name to the `contributedBy` field in your event JSON:

```json
{
  "contributedBy": "YourGitHubUsername",
  ...
}
```

Your contributions will be tracked and displayed on the [HistoryMap Dashboard](https://historymap.vercel.app/dashboard)!

<!-- Contributors will be automatically listed here -->

---

## 📧 Contact

- **Issues**: [GitHub Issues](../../issues)
- **Discussions**: [GitHub Discussions](../../discussions)
- **Website**: [HistoryMap](https://historymap.vercel.app) *(coming soon)*

---

## 🔗 Related Repositories

- [HistoryMap](https://github.com/AdamKmet1997/HistoryMap-repo) - Main application repository

---

## 🎓 Educational Use

This dataset is perfect for:
- History education and teaching
- Data visualization projects
- GIS and mapping applications
- Historical research and analysis
- Timeline and chronology projects
- Machine learning and NLP training data

Feel free to use this data in your projects! Just give attribution.

---

## ❓ FAQ

### How do I add an event from before 1 AD (BC)?
Use a negative year value in the `year` field. For example, 2560 BC = `-2560`. The contributor tool handles this automatically!

### Can I add events from my local area?
Absolutely! We welcome locally significant events as long as they're historically notable and well-documented.

### What makes a good source?
Reliable sources include: Wikipedia, academic journals, museum websites, government archives, established historical societies, and reputable news sources.

### How long does it take for my event to appear on the map?
Once your PR is reviewed and merged, events sync to the database within minutes and appear on the live map within 1 hour (due to ISR caching).

### Can I update an existing event?
Yes! Submit a PR with your changes to the existing JSON file. Make sure to update the `updatedAt` date.

### I found an error in an event. How do I report it?
Open an issue with the event ID and describe the error. Or submit a PR with the fix directly!

### Do I need to know how to code to contribute?
No! You can use our [interactive contributor tool](https://htmlpreview.github.io/?https://github.com/AdamKmet1997/HistoryMap-Data/blob/main/contribute.html) or submit via GitHub Issues. No coding required!

---

## 📈 Roadmap

### Completed ✅
- [x] Reach 100 events (198!)
- [x] Add events from all continents
- [x] Create interactive contributor tool
- [x] Add contributor attribution system
- [x] Support BC dates
- [x] Add voting system with engagement tracking
- [x] Implement "Suggest Edit" feature
- [x] Add interactive timeline with histogram visualization
- [x] Expand to 55+ countries

### In Progress 🚧
- [ ] Reach 250 events
- [ ] Add automated quality checks with GitHub Actions
- [ ] Create comprehensive CONTRIBUTING guide with examples
- [ ] Add event images and media support

### Future Goals 🎯
- [ ] Reach 500 events
- [ ] Reach 1,000 events
- [ ] Add multi-language support (translations)
- [ ] Create data export tools (CSV, GeoJSON, KML)
- [ ] Build event relationship system (causes/effects)
- [ ] Create data visualization examples
- [ ] Develop mobile-friendly contributor app
- [ ] Add event verification badges for highly-sourced events

---

## 🚀 Ready to Contribute?

**[Start Adding Events Now!](https://htmlpreview.github.io/?https://github.com/AdamKmet1997/HistoryMap-Data/blob/main/contribute.html)**

Every event you add helps make world history more accessible and engaging. Whether it's a major world event or an important local occurrence, your contribution matters!

---

<div align="center">

**Made with ❤️ by the HistoryMap community**

[⭐ Star this repo](../../stargazers) • [🐛 Report Bug](../../issues) • [💡 Request Feature](../../issues) • [🤝 Contribute](#-how-to-contribute)

</div>
