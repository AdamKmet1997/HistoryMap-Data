const fs = require('fs');
const path = require('path');

const events = [
  // Cold War Era & Modern History
  {
    id: "101",
    title: "Cuban Missile Crisis",
    description: "The **Cuban Missile Crisis** in October 1962 brought the world to the brink of nuclear war when the Soviet Union placed missiles in Cuba.\n\nPresident Kennedy demanded their removal and blockaded Cuba. After 13 tense days, Khrushchev agreed to remove the missiles in exchange for US promises not to invade Cuba.\n\nIt was the closest the Cold War came to escalating into nuclear conflict.",
    startDate: "1962-10-16",
    endDate: "1962-10-28",
    location: { latitude: 23.1136, longitude: -82.3666, country: "Cuba", city: "Havana" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Cuban_Missile_Crisis"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "102",
    title: "Assassination of JFK",
    description: "President **John F. Kennedy** was assassinated on November 22, 1963, in Dallas, Texas, while riding in a motorcade.\n\nLee Harvey Oswald was arrested for the murder but was killed two days later by Jack Ruby. The Warren Commission concluded Oswald acted alone.\n\nKennedy's death shocked the nation and sparked numerous conspiracy theories.",
    startDate: "1963-11-22",
    location: { latitude: 32.7767, longitude: -96.7970, country: "United States", city: "Dallas", region: "Texas" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Assassination_of_John_F._Kennedy"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "103",
    title: "March on Washington",
    description: "The **March on Washington for Jobs and Freedom** on August 28, 1963, drew over 250,000 people to the Lincoln Memorial.\n\nMartin Luther King Jr. delivered his famous \"I Have a Dream\" speech. The march pressured the Kennedy administration to advance civil rights legislation.\n\nIt remains one of the largest political rallies in American history.",
    startDate: "1963-08-28",
    location: { latitude: 38.8893, longitude: -77.0502, country: "United States", city: "Washington", region: "D.C." },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/March_on_Washington_for_Jobs_and_Freedom"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "104",
    title: "Apollo 11 Moon Landing",
    description: "On July 20, 1969, **Apollo 11** astronauts Neil Armstrong and Buzz Aldrin became the first humans to land on the Moon.\n\nArmstrong's first words were \"That's one small step for man, one giant leap for mankind.\" The mission fulfilled President Kennedy's goal set in 1961.\n\nOver 600 million people watched the historic event on television.",
    startDate: "1969-07-20",
    location: { latitude: 28.5729, longitude: -80.6490, country: "United States", city: "Cape Canaveral", region: "Florida" },
    category: "science",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Apollo_11"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "105",
    title: "Woodstock Festival",
    description: "The **Woodstock Music Festival** in August 1969 attracted 400,000 people to a farm in New York, becoming an icon of the 1960s counterculture.\n\nDespite rain, mud, and overcrowding, the festival featured legendary performances by Jimi Hendrix, Janis Joplin, The Who, and many others.\n\nWoodstock symbolized the peace and music movement of the era.",
    startDate: "1969-08-15",
    endDate: "1969-08-18",
    location: { latitude: 41.7012, longitude: -74.3649, country: "United States", city: "Bethel", region: "New York" },
    category: "culture",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Woodstock"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "106",
    title: "Watergate Scandal",
    description: "The **Watergate scandal** began with a break-in at the Democratic National Committee headquarters on June 17, 1972, and led to President Nixon's resignation.\n\nInvestigative journalism revealed Nixon's involvement in the cover-up. Facing impeachment, Nixon resigned on August 9, 1974.\n\nThe scandal damaged public trust in government and led to reforms.",
    startDate: "1972-06-17",
    location: { latitude: 38.8977, longitude: -77.0529, country: "United States", city: "Washington", region: "D.C." },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Watergate_scandal"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "107",
    title: "Vietnam War Ends",
    description: "The **Vietnam War** ended on April 30, 1975, when North Vietnamese forces captured Saigon, reunifying Vietnam under communist rule.\n\nThe war lasted nearly 20 years and killed over 58,000 Americans and millions of Vietnamese. The US withdrawal is considered its first major military defeat.\n\nThe war deeply divided American society and influenced foreign policy for decades.",
    startDate: "1975-04-30",
    location: { latitude: 10.8231, longitude: 106.6297, country: "Vietnam", city: "Ho Chi Minh City" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Fall_of_Saigon"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "108",
    title: "Chernobyl Nuclear Disaster",
    description: "The **Chernobyl nuclear disaster** on April 26, 1986, was the worst nuclear accident in history, releasing massive amounts of radioactive material.\n\nThe explosion and fire at reactor 4 killed 31 people immediately and caused long-term health effects and environmental damage. An exclusion zone still exists today.\n\nThe disaster contributed to the collapse of the Soviet Union.",
    startDate: "1986-04-26",
    location: { latitude: 51.3890, longitude: 30.0997, country: "Ukraine", city: "Chernobyl" },
    category: "disaster",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Chernobyl_disaster"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "109",
    title: "Fall of the Berlin Wall",
    description: "The **Berlin Wall** fell on November 9, 1989, symbolizing the end of the Cold War and German division.\n\nEast Germans were allowed to cross into West Berlin for the first time in 28 years. People celebrated by tearing down sections of the wall.\n\nGermany reunified less than a year later on October 3, 1990.",
    startDate: "1989-11-09",
    location: { latitude: 52.5200, longitude: 13.4050, country: "Germany", city: "Berlin" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Berlin_Wall"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "110",
    title: "Tiananmen Square Protests",
    description: "Pro-democracy protests in **Tiananmen Square** in Beijing lasted from April to June 4, 1989, when Chinese troops violently suppressed the demonstrations.\n\nHundreds, possibly thousands, were killed when tanks entered the square. The iconic \"Tank Man\" photo became a symbol of resistance.\n\nChina censors discussion of the event to this day.",
    startDate: "1989-06-04",
    location: { latitude: 39.9042, longitude: 116.4074, country: "China", city: "Beijing" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/1989_Tiananmen_Square_protests_and_massacre"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "111",
    title: "Dissolution of the Soviet Union",
    description: "The **Soviet Union** officially dissolved on December 26, 1991, ending 69 years of communist rule and marking the end of the Cold War.\n\nFifteen independent republics emerged from the USSR. Mikhail Gorbachev resigned as Soviet President on December 25.\n\nThe dissolution fundamentally changed global politics and ended the bipolar world order.",
    startDate: "1991-12-26",
    location: { latitude: 55.7558, longitude: 37.6173, country: "Russia", city: "Moscow" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Dissolution_of_the_Soviet_Union"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "112",
    title: "Rwandan Genocide",
    description: "The **Rwandan Genocide** from April to July 1994 resulted in the massacre of an estimated 500,000-800,000 Tutsis and moderate Hutus.\n\nThe genocide lasted 100 days and was fueled by ethnic tensions. The international community failed to intervene effectively.\n\nThe aftermath led to major reforms in international humanitarian law and intervention policies.",
    startDate: "1994-04-07",
    endDate: "1994-07-15",
    location: { latitude: -1.9536, longitude: 30.0606, country: "Rwanda", city: "Kigali" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Rwandan_genocide"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "113",
    title: "Princess Diana's Death",
    description: "**Princess Diana** died in a car crash in Paris on August 31, 1997, shocking the world and prompting an unprecedented outpouring of grief.\n\nThe crash in the Pont de l'Alma tunnel also killed her companion Dodi Fayed and driver Henri Paul. Paparazzi pursuit was initially blamed.\n\nHer funeral was watched by an estimated 2.5 billion people worldwide.",
    startDate: "1997-08-31",
    location: { latitude: 48.8566, longitude: 2.3522, country: "France", city: "Paris" },
    category: "disaster",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Death_of_Diana,_Princess_of_Wales"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "114",
    title: "September 11 Attacks",
    description: "The **September 11 terrorist attacks** in 2001 killed 2,977 people when al-Qaeda terrorists hijacked four planes, crashing two into the World Trade Center, one into the Pentagon, and one in Pennsylvania.\n\nThe Twin Towers collapsed, fundamentally changing American foreign policy and security. The attacks triggered the War on Terror.\n\nThe event reshaped global politics and led to wars in Afghanistan and Iraq.",
    startDate: "2001-09-11",
    location: { latitude: 40.7128, longitude: -74.0060, country: "United States", city: "New York", region: "New York" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/September_11_attacks"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "115",
    title: "Indian Ocean Tsunami",
    description: "The **Indian Ocean tsunami** on December 26, 2004, was triggered by a 9.1-9.3 magnitude earthquake off Sumatra, killing over 230,000 people in 14 countries.\n\nIt was one of the deadliest natural disasters in recorded history. Indonesia, Sri Lanka, India, and Thailand were hardest hit.\n\nThe disaster led to improved tsunami warning systems worldwide.",
    startDate: "2004-12-26",
    location: { latitude: 3.3167, longitude: 95.8545, country: "Indonesia", city: "Banda Aceh" },
    category: "disaster",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/2004_Indian_Ocean_earthquake_and_tsunami"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "116",
    title: "Barack Obama Elected President",
    description: "**Barack Obama** was elected the first African American President of the United States on November 4, 2008.\n\nHis victory was historic and symbolized racial progress in America. His campaign emphasized hope and change during the financial crisis.\n\nObama served two terms, implementing the Affordable Care Act and other major policies.",
    startDate: "2008-11-04",
    location: { latitude: 41.8781, longitude: -87.6298, country: "United States", city: "Chicago", region: "Illinois" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/2008_United_States_presidential_election"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "117",
    title: "Arab Spring Begins",
    description: "The **Arab Spring** began in Tunisia on December 17, 2010, when Mohamed Bouazizi set himself on fire in protest, sparking revolutions across the Middle East.\n\nProtests spread to Egypt, Libya, Syria, Yemen, and other countries, toppling several long-standing dictators. The movement emphasized democracy and human rights.\n\nThe aftermath has been mixed, with some countries achieving reforms and others descending into conflict.",
    startDate: "2010-12-17",
    location: { latitude: 36.8065, longitude: 10.1815, country: "Tunisia", city: "Tunis" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Arab_Spring"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "118",
    title: "Fukushima Nuclear Disaster",
    description: "The **Fukushima Daiichi nuclear disaster** on March 11, 2011, was triggered by a massive earthquake and tsunami that killed over 18,000 people.\n\nThe nuclear plant suffered meltdowns and released radioactive materials. Over 150,000 people were evacuated. It was the worst nuclear accident since Chernobyl.\n\nThe disaster led Japan to shut down all nuclear reactors and reconsider its energy policy.",
    startDate: "2011-03-11",
    location: { latitude: 37.4219, longitude: 141.0328, country: "Japan", city: "Fukushima" },
    category: "disaster",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Fukushima_nuclear_disaster"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "119",
    title: "Brexit Referendum",
    description: "The **Brexit referendum** on June 23, 2016, resulted in 51.9% of UK voters choosing to leave the European Union.\n\nThe decision shocked markets and began a complex withdrawal process. The UK officially left the EU on January 31, 2020.\n\nBrexit has had major political, economic, and social consequences for both the UK and EU.",
    startDate: "2016-06-23",
    location: { latitude: 51.5074, longitude: -0.1278, country: "United Kingdom", city: "London" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/2016_United_Kingdom_European_Union_membership_referendum"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "120",
    title: "COVID-19 Pandemic Declared",
    description: "The **COVID-19 pandemic** was declared by WHO on March 11, 2020, after the novel coronavirus spread globally from Wuhan, China.\n\nThe pandemic has killed millions worldwide and caused unprecedented disruption to daily life, economies, and healthcare systems.\n\nVaccines were developed in record time, but the pandemic's effects continue to reshape society.",
    startDate: "2020-03-11",
    location: { latitude: 46.2044, longitude: 6.1432, country: "Switzerland", city: "Geneva" },
    category: "disaster",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/COVID-19_pandemic"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },

  // Additional diversity events from various periods and regions
  {
    id: "121",
    title: "Meiji Restoration",
    description: "The **Meiji Restoration** in 1868 ended the Tokugawa shogunate and restored imperial rule in Japan under Emperor Meiji.\n\nJapan rapidly modernized and industrialized, transforming from a feudal society to a major world power within decades.\n\nThe restoration led to Japan's emergence as a modern nation-state.",
    startDate: "1868-01-03",
    location: { latitude: 35.6762, longitude: 139.6503, country: "Japan", city: "Tokyo" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Meiji_Restoration"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "122",
    title: "Boxer Rebellion",
    description: "The **Boxer Rebellion** (1899-1901) was an anti-foreign, anti-Christian uprising in China that sought to expel foreign influence.\n\nThe rebellion was eventually crushed by an eight-nation alliance. The defeat further weakened the Qing Dynasty.\n\nThe rebellion reflected Chinese resistance to foreign imperialism.",
    startDate: "1899-11-02",
    endDate: "1901-09-07",
    location: { latitude: 39.9042, longitude: 116.4074, country: "China", city: "Beijing" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Boxer_Rebellion"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "123",
    title: "Panama Canal Opens",
    description: "The **Panama Canal** opened on August 15, 1914, connecting the Atlantic and Pacific Oceans and revolutionizing global shipping.\n\nConstruction took 10 years and cost over 5,600 lives. The 82 km canal eliminated the need to sail around South America.\n\nThe canal remains one of the most important waterways in the world.",
    startDate: "1914-08-15",
    location: { latitude: 9.0810, longitude: -79.6805, country: "Panama", city: "Panama City" },
    category: "science",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Panama_Canal"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "124",
    title: "Amritsar Massacre",
    description: "The **Jallianwala Bagh massacre** on April 13, 1919, saw British troops kill hundreds of unarmed Indian civilians in Amritsar.\n\nBrigadier General Dyer ordered troops to fire on a peaceful gathering. The massacre shocked India and strengthened the independence movement.\n\nIt marked a turning point in Indian nationalism.",
    startDate: "1919-04-13",
    location: { latitude: 31.6205, longitude: 74.8757, country: "India", city: "Amritsar" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Jallianwala_Bagh_massacre"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "125",
    title: "Mao Zedong Proclaims People's Republic of China",
    description: "**Mao Zedong** proclaimed the **People's Republic of China** on October 1, 1949, from Tiananmen Square after the Communist victory in the Chinese Civil War.\n\nThe proclamation established communist rule in mainland China. The Nationalist government fled to Taiwan.\n\nMao's rule would transform China and influence global communism.",
    startDate: "1949-10-01",
    location: { latitude: 39.9042, longitude: 116.4074, country: "China", city: "Beijing" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Proclamation_of_the_People%27s_Republic_of_China"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "126",
    title: "Suez Crisis",
    description: "The **Suez Crisis** in 1956 erupted when Egypt nationalized the Suez Canal, leading to an invasion by Britain, France, and Israel.\n\nPressure from the US and Soviet Union forced the invaders to withdraw. The crisis marked the end of Britain and France as major global powers.\n\nIt demonstrated the shift of power to the US and USSR during the Cold War.",
    startDate: "1956-10-29",
    location: { latitude: 30.0444, longitude: 31.2357, country: "Egypt", city: "Cairo" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Suez_Crisis"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "127",
    title: "Construction of Burj Khalifa",
    description: "The **Burj Khalifa** in Dubai was completed in 2010, becoming the world's tallest building at 828 meters (2,717 feet).\n\nConstruction took six years and required innovative engineering. The building symbolizes Dubai's rapid development and ambition.\n\nIt remains an iconic landmark and tourist attraction.",
    startDate: "2010-01-04",
    location: { latitude: 25.1972, longitude: 55.2744, country: "United Arab Emirates", city: "Dubai" },
    category: "culture",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Burj_Khalifa"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "128",
    title: "Nelson Mandela Released from Prison",
    description: "**Nelson Mandela** was released from prison on February 11, 1990, after 27 years of imprisonment for fighting apartheid in South Africa.\n\nHis release marked the beginning of the end of apartheid. Mandela led negotiations for a peaceful transition to democracy.\n\nHe became South Africa's first Black president in 1994.",
    startDate: "1990-02-11",
    location: { latitude: -33.9249, longitude: 18.4241, country: "South Africa", city: "Cape Town" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Nelson_Mandela"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "129",
    title: "First Human Genome Sequenced",
    description: "The **Human Genome Project** was declared complete on April 14, 2003, having sequenced all 3 billion base pairs of human DNA.\n\nThe project took 13 years and involved scientists from around the world. It revolutionized medicine and biology.\n\nThe data enables personalized medicine and understanding of genetic diseases.",
    startDate: "2003-04-14",
    location: { latitude: 38.8977, longitude: -77.0365, country: "United States", city: "Washington", region: "D.C." },
    category: "science",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Human_Genome_Project"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: "130",
    title: "First iPhone Released",
    description: "Apple released the first **iPhone** on June 29, 2007, revolutionizing mobile technology and communication.\n\nSteve Jobs had unveiled it in January, calling it a revolutionary product that combined a phone, iPod, and internet device.\n\nThe iPhone fundamentally changed how people interact with technology and launched the smartphone era.",
    startDate: "2007-06-29",
    location: { latitude: 37.3352, longitude: -122.0116, country: "United States", city: "Cupertino", region: "California" },
    category: "science",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/IPhone_(1st_generation)"],
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  }
];

// Create directories and save files
events.forEach(event => {
  const country = event.location.country.toLowerCase().replace(/\s+/g, '-');
  const slug = event.title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  const dir = path.join(__dirname, '../events', country);
  const filepath = path.join(dir, `${slug}.json`);

  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write file
  fs.writeFileSync(filepath, JSON.stringify(event, null, 2));
  console.log(`✓ Created: ${country}/${slug}.json`);
});

console.log(`\n✅ Successfully created ${events.length} event files!`);
console.log(`\nTotal events in database: 43 (original) + 51 (first batch) + ${events.length} (second batch) = ${43 + 51 + events.length}`);
