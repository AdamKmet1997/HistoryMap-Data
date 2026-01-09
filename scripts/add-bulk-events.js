const fs = require('fs');
const path = require('path');

// Comprehensive list of historical events
const events = [
  // Ancient History - Asia
  {
    id: "50",
    title: "Construction of the Great Wall of China",
    description: "The **Great Wall of China** was built over many dynasties, with major construction during the Qin Dynasty (221-206 BC) under Emperor Qin Shi Huang.\n\nStretching over 13,000 miles, it was built to protect Chinese states from nomadic invasions. The wall represents one of humanity's most impressive architectural achievements.\n\nMuch of the wall that exists today was built during the Ming Dynasty (1368-1644 AD).",
    startDate: "0221-01-01",
    year: -221,
    endDate: "1644-12-31",
    location: { latitude: 40.4319, longitude: 116.5704, country: "China", city: "Beijing" },
    category: "culture",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Great_Wall_of_China"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "51",
    title: "Battle of Thermopylae",
    description: "The **Battle of Thermopylae** was fought in 480 BC during the Persian Wars. King Leonidas I led 300 Spartans and allied Greek forces against the massive Persian army of Xerxes I.\n\nDespite being vastly outnumbered, the Greeks held the narrow pass for three days before being outflanked. The battle became a symbol of courage against overwhelming odds.\n\nThe sacrifice of Leonidas and his men bought time for Greece to prepare its defenses.",
    startDate: "0480-08-11",
    year: -480,
    location: { latitude: 38.7996, longitude: 22.5367, country: "Greece", city: "Thermopylae" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Battle_of_Thermopylae"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "52",
    title: "Birth of Buddha",
    description: "**Siddhartha Gautama**, the founder of Buddhism, was born in Lumbini (present-day Nepal) around 563 BC.\n\nAfter witnessing suffering in the world, he renounced his princely life to seek enlightenment. He achieved enlightenment under the Bodhi tree and spent the rest of his life teaching the Middle Way.\n\nBuddhism spread throughout Asia and remains one of the world's major religions with over 500 million followers.",
    startDate: "0563-01-01",
    year: -563,
    location: { latitude: 27.4833, longitude: 83.2764, country: "Nepal", city: "Lumbini" },
    category: "religion",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Gautama_Buddha"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "53",
    title: "Alexander the Great's Conquest of Persia",
    description: "**Alexander the Great** defeated the Persian Empire in a series of battles from 334-330 BC, creating one of the largest empires in ancient history.\n\nHis conquests spread Greek culture across three continents and marked the beginning of the Hellenistic period. He was never defeated in battle.\n\nAlexander died at age 32 in Babylon, leaving an empire that stretched from Greece to India.",
    startDate: "0334-01-01",
    year: -334,
    endDate: "0330-12-31",
    location: { latitude: 38.0406, longitude: 23.8103, country: "Greece", city: "Athens" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Alexander_the_Great"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "54",
    title: "Eruption of Mount Vesuvius",
    description: "The catastrophic eruption of **Mount Vesuvius** on August 24, 79 AD destroyed the Roman cities of Pompeii and Herculaneum.\n\nThe cities were buried under 4-6 meters of volcanic ash and pumice, preserving them for nearly 1,700 years. Thousands of people died from the eruption.\n\nThe excavated ruins provide an extraordinary snapshot of Roman life frozen in time.",
    startDate: "0079-08-24",
    location: { latitude: 40.8218, longitude: 14.4261, country: "Italy", city: "Pompeii" },
    category: "disaster",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Eruption_of_Mount_Vesuvius_in_79_AD"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },

  // Medieval Period
  {
    id: "55",
    title: "Fall of the Western Roman Empire",
    description: "The **Western Roman Empire** officially ended in 476 AD when the Germanic chieftain Odoacer deposed the last Roman emperor, Romulus Augustulus.\n\nThis marked the end of ancient Rome and the beginning of the Middle Ages in Europe. The Eastern Roman Empire (Byzantine) continued for another thousand years.\n\nThe fall was caused by economic troubles, overexpansion, military defeats, and internal corruption.",
    startDate: "0476-09-04",
    location: { latitude: 41.9028, longitude: 12.4964, country: "Italy", city: "Rome" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "56",
    title: "Muhammad's First Revelation",
    description: "According to Islamic tradition, the Prophet **Muhammad** received his first revelation from God through the angel Gabriel in 610 AD in a cave on Mount Hira near Mecca.\n\nThis marked the beginning of Islam, which would become one of the world's major religions. The revelations continued over 23 years and were compiled into the Quran.\n\nIslam now has over 1.8 billion followers worldwide.",
    startDate: "0610-01-01",
    location: { latitude: 21.4225, longitude: 39.8262, country: "Saudi Arabia", city: "Mecca" },
    category: "religion",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Muhammad%27s_first_revelation"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "57",
    title: "Battle of Hastings",
    description: "The **Battle of Hastings** was fought on October 14, 1066, between Norman forces under William the Conqueror and English forces under King Harold II.\n\nWilliam's victory led to the Norman conquest of England, fundamentally changing English culture, language, and governance. Harold II was killed in the battle.\n\nThis battle is commemorated in the famous Bayeux Tapestry.",
    startDate: "1066-10-14",
    location: { latitude: 50.9117, longitude: 0.4912, country: "United Kingdom", city: "Hastings" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Battle_of_Hastings"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "58",
    title: "Magna Carta Signed",
    description: "The **Magna Carta** was signed by King John of England at Runnymede on June 15, 1215, limiting royal power and establishing that everyone, including the king, was subject to the law.\n\nIt guaranteed rights like habeas corpus and trial by jury. Though much of it has been repealed, it remains a cornerstone of constitutional law.\n\nThe Magna Carta influenced constitutional development worldwide, including the US Constitution.",
    startDate: "1215-06-15",
    location: { latitude: 51.4404, longitude: -0.5682, country: "United Kingdom", city: "Runnymede" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Magna_Carta"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "59",
    title: "Black Death Pandemic",
    description: "The **Black Death** was one of the most devastating pandemics in human history, killing an estimated 75-200 million people across Europe, Asia, and North Africa from 1347-1353.\n\nCaused by the bubonic plague, it killed 30-60% of Europe's population. The pandemic led to major social, economic, and religious changes.\n\nIt took 200 years for Europe's population to recover to pre-plague levels.",
    startDate: "1347-01-01",
    endDate: "1353-12-31",
    location: { latitude: 45.4408, longitude: 12.3155, country: "Italy", city: "Venice" },
    category: "disaster",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Black_Death"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "60",
    title: "Fall of Constantinople",
    description: "**Constantinople**, capital of the Byzantine Empire, fell to the Ottoman Turks on May 29, 1453, marking the end of the Byzantine Empire.\n\nSultan Mehmed II conquered the city after a 53-day siege, using massive cannons to breach the ancient walls. The city became the capital of the Ottoman Empire.\n\nMany historians mark this as the end of the Middle Ages and the beginning of the Renaissance.",
    startDate: "1453-05-29",
    location: { latitude: 41.0082, longitude: 28.9784, country: "Turkey", city: "Istanbul" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Fall_of_Constantinople"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },

  // Age of Exploration
  {
    id: "61",
    title: "Christopher Columbus Reaches the Americas",
    description: "**Christopher Columbus** landed in the Bahamas on October 12, 1492, believing he had reached Asia. This voyage marked the beginning of sustained European exploration and colonization of the Americas.\n\nColumbus made four voyages to the New World, opening the way for widespread European exploration. The Columbian Exchange transformed both the Old and New Worlds.\n\nThis encounter had devastating consequences for indigenous peoples through disease and colonization.",
    startDate: "1492-10-12",
    location: { latitude: 24.2500, longitude: -74.5000, country: "Bahamas", city: "San Salvador" },
    category: "exploration",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Christopher_Columbus"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "62",
    title: "Protestant Reformation Begins",
    description: "On October 31, 1517, Martin Luther nailed his **Ninety-five Theses** to the door of the Castle Church in Wittenberg, challenging Catholic Church practices.\n\nThis act sparked the Protestant Reformation, splitting Western Christianity and reshaping European politics and culture. Luther's translation of the Bible into German made scripture accessible to common people.\n\nThe Reformation led to religious wars and the establishment of Protestant denominations.",
    startDate: "1517-10-31",
    location: { latitude: 51.8667, longitude: 12.6433, country: "Germany", city: "Wittenberg" },
    category: "religion",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Reformation"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "63",
    title: "Spanish Armada Defeated",
    description: "In 1588, the **Spanish Armada**, a fleet of 130 ships sent by King Philip II to invade England, was defeated by the English navy and storms.\n\nThis victory established England as a major naval power and marked the beginning of Spain's decline. The battle was fought in the English Channel.\n\nQueen Elizabeth I's famous speech at Tilbury rallied English troops during this crisis.",
    startDate: "1588-07-29",
    location: { latitude: 50.7833, longitude: 0.0833, country: "United Kingdom", city: "English Channel" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Spanish_Armada"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "64",
    title: "Founding of Jamestown",
    description: "**Jamestown**, the first permanent English settlement in North America, was established on May 14, 1607, in present-day Virginia.\n\nThe colony struggled initially with disease, starvation, and conflict with Native Americans. John Smith's leadership and Pocahontas's intervention helped the colony survive.\n\nJamestown became the capital of the Virginia Colony and the birthplace of representative government in America.",
    startDate: "1607-05-14",
    location: { latitude: 37.2054, longitude: -76.7793, country: "United States", city: "Jamestown", region: "Virginia" },
    category: "exploration",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Jamestown,_Virginia"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "65",
    title: "Mayflower Arrives at Plymouth",
    description: "The **Mayflower** landed at Plymouth, Massachusetts, on December 21, 1620, carrying 102 Pilgrims seeking religious freedom.\n\nBefore disembarking, they signed the Mayflower Compact, establishing a form of self-government. About half died during the first winter.\n\nWith help from Native Americans like Squanto, the survivors established Plymouth Colony, celebrating the first Thanksgiving in 1621.",
    startDate: "1620-12-21",
    location: { latitude: 41.9584, longitude: -70.6673, country: "United States", city: "Plymouth", region: "Massachusetts" },
    category: "exploration",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Mayflower"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },

  // 17th-18th Century
  {
    id: "66",
    title: "Galileo's Trial",
    description: "In 1633, **Galileo Galilei** was tried by the Roman Inquisition for supporting heliocentrism - the idea that Earth orbits the Sun.\n\nHe was found guilty of heresy and spent the rest of his life under house arrest. Despite this, his scientific work laid the foundation for modern physics and astronomy.\n\nThe Catholic Church formally acknowledged its error in 1992.",
    startDate: "1633-06-22",
    location: { latitude: 41.9028, longitude: 12.4964, country: "Italy", city: "Rome" },
    category: "science",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Galileo_affair"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "67",
    title: "English Civil War",
    description: "The **English Civil War** (1642-1651) was fought between Parliamentarians and Royalists over how England should be governed.\n\nThe war ended with the execution of King Charles I and the brief establishment of a republic under Oliver Cromwell. It fundamentally changed the balance of power between Parliament and monarchy.\n\nThe conflict resulted in over 200,000 deaths and reshaped British constitutional government.",
    startDate: "1642-08-22",
    endDate: "1651-09-03",
    location: { latitude: 51.5074, longitude: -0.1278, country: "United Kingdom", city: "London" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/English_Civil_War"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "68",
    title: "Isaac Newton Publishes Principia",
    description: "In 1687, **Isaac Newton** published *Philosophiæ Naturalis Principia Mathematica*, laying the foundation for classical mechanics.\n\nThe work described universal gravitation and the three laws of motion, revolutionizing scientific understanding of the physical world.\n\nPrincipia is considered one of the most important scientific works ever published.",
    startDate: "1687-07-05",
    location: { latitude: 51.5074, longitude: -0.1278, country: "United Kingdom", city: "London" },
    category: "science",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Philosophi%C3%A6_Naturalis_Principia_Mathematica"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "69",
    title: "Signing of the Declaration of Independence",
    description: "The **Declaration of Independence** was adopted by the Continental Congress on July 4, 1776, announcing the thirteen American colonies' separation from Great Britain.\n\nWritten primarily by Thomas Jefferson, it articulated the principles of individual liberty and government by consent. The document inspired democratic movements worldwide.\n\nJuly 4th is celebrated as Independence Day in the United States.",
    startDate: "1776-07-04",
    location: { latitude: 39.9526, longitude: -75.1652, country: "United States", city: "Philadelphia", region: "Pennsylvania" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/United_States_Declaration_of_Independence"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "70",
    title: "Storming of the Bastille",
    description: "On July 14, 1789, Parisian revolutionaries stormed the **Bastille** prison, a symbol of royal tyranny, marking the beginning of the French Revolution.\n\nThe revolution overthrew the monarchy, executed King Louis XVI, and established democratic principles. It fundamentally changed European politics.\n\nBastille Day is now France's national holiday.",
    startDate: "1789-07-14",
    location: { latitude: 48.8534, longitude: 2.3691, country: "France", city: "Paris" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Storming_of_the_Bastille"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },

  // 19th Century
  {
    id: "71",
    title: "Battle of Waterloo",
    description: "The **Battle of Waterloo** on June 18, 1815, marked Napoleon Bonaparte's final defeat. The Duke of Wellington and Prussian forces under Blücher defeated the French army.\n\nThis battle ended the Napoleonic Wars and Napoleon's rule as Emperor of France. He was exiled to Saint Helena where he died in 1821.\n\nThe battle ushered in nearly a century of relative peace in Europe.",
    startDate: "1815-06-18",
    location: { latitude: 50.6800, longitude: 4.4114, country: "Belgium", city: "Waterloo" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Battle_of_Waterloo"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "72",
    title: "Abolition of Slavery in British Empire",
    description: "The **Slavery Abolition Act** was passed in 1833, abolishing slavery throughout the British Empire (except in territories controlled by the East India Company).\n\nOver 800,000 enslaved people were freed. The act provided compensation to slave owners but not to the enslaved.\n\nThis marked a major victory for the abolitionist movement led by figures like William Wilberforce.",
    startDate: "1833-08-28",
    location: { latitude: 51.5074, longitude: -0.1278, country: "United Kingdom", city: "London" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Slavery_Abolition_Act_1833"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "73",
    title: "California Gold Rush",
    description: "The **California Gold Rush** began on January 24, 1848, when James W. Marshall discovered gold at Sutter's Mill in Coloma, California.\n\nOver 300,000 people migrated to California during the rush. It accelerated California's admission to the Union and spurred the development of San Francisco.\n\nThe influx devastated Native American populations and transformed California's economy and landscape.",
    startDate: "1848-01-24",
    location: { latitude: 38.7996, longitude: -120.8977, country: "United States", city: "Coloma", region: "California" },
    category: "exploration",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/California_Gold_Rush"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "74",
    title: "Darwin Publishes On the Origin of Species",
    description: "Charles Darwin published **On the Origin of Species** on November 24, 1859, introducing the scientific theory of evolution through natural selection.\n\nThe book provided extensive evidence that species evolved over time from common ancestors. It revolutionized biology and our understanding of life on Earth.\n\nThe first edition sold out on its first day.",
    startDate: "1859-11-24",
    location: { latitude: 51.5074, longitude: -0.1278, country: "United Kingdom", city: "London" },
    category: "science",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/On_the_Origin_of_Species"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "75",
    title: "American Civil War Begins",
    description: "The **American Civil War** began on April 12, 1861, when Confederate forces attacked Fort Sumter in South Carolina.\n\nThe war was fought between the Union (North) and Confederate (South) states over slavery and states' rights. It lasted four years and resulted in over 600,000 deaths.\n\nThe Union victory preserved the nation and led to the abolition of slavery.",
    startDate: "1861-04-12",
    location: { latitude: 32.7522, longitude: -79.8743, country: "United States", city: "Charleston", region: "South Carolina" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/American_Civil_War"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "76",
    title: "Emancipation Proclamation",
    description: "President Abraham Lincoln issued the **Emancipation Proclamation** on January 1, 1863, declaring all enslaved people in Confederate states to be free.\n\nWhile it didn't immediately free all enslaved people, it fundamentally transformed the character of the Civil War and paved the way for the 13th Amendment.\n\nThe proclamation allowed Black men to serve in the Union Army and Navy.",
    startDate: "1863-01-01",
    location: { latitude: 38.8977, longitude: -77.0365, country: "United States", city: "Washington", region: "D.C." },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Emancipation_Proclamation"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "77",
    title: "First Transatlantic Telegraph Cable",
    description: "The first **transatlantic telegraph cable** successfully transmitted messages between Ireland and Newfoundland on August 16, 1858.\n\nThis revolutionary technology allowed near-instantaneous communication between North America and Europe for the first time. The cable shortened communication from 10 days to minutes.\n\nThough it failed after three weeks, later cables established permanent transatlantic communication.",
    startDate: "1858-08-16",
    location: { latitude: 51.8969, longitude: -8.4863, country: "Ireland", city: "Cork" },
    category: "science",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Transatlantic_telegraph_cable"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "78",
    title: "Unification of Germany",
    description: "The **German Empire** was proclaimed on January 18, 1871, in the Hall of Mirrors at Versailles, unifying German states under Prussian leadership.\n\nOtto von Bismarck orchestrated the unification through diplomacy and war. King Wilhelm I of Prussia became the German Emperor.\n\nGerman unification created a new European power that would dominate continental politics.",
    startDate: "1871-01-18",
    location: { latitude: 48.8049, longitude: 2.1204, country: "France", city: "Versailles" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Unification_of_Germany"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "79",
    title: "Invention of the Telephone",
    description: "**Alexander Graham Bell** made the first successful telephone call on March 10, 1876, saying \"Mr. Watson, come here, I want to see you.\"\n\nThe telephone revolutionized communication, allowing voice transmission over long distances. Bell founded the Bell Telephone Company in 1877.\n\nThe invention transformed business, society, and personal communication worldwide.",
    startDate: "1876-03-10",
    location: { latitude: 42.3601, longitude: -71.0589, country: "United States", city: "Boston", region: "Massachusetts" },
    category: "science",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Invention_of_the_telephone"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "80",
    title: "Invention of the Light Bulb",
    description: "**Thomas Edison** successfully tested a practical incandescent light bulb on October 21, 1879, that could burn for hours.\n\nWhile others had invented light bulbs before, Edison created a practical, long-lasting design. His Pearl Street Station in New York City became the first commercial electric power station.\n\nElectric lighting transformed cities, extended productive hours, and improved quality of life.",
    startDate: "1879-10-21",
    location: { latitude: 40.5795, longitude: -74.3387, country: "United States", city: "Menlo Park", region: "New Jersey" },
    category: "science",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Incandescent_light_bulb"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },

  // Early 20th Century
  {
    id: "81",
    title: "Wright Brothers' First Flight",
    description: "On December 17, 1903, the **Wright Brothers** achieved the first powered, sustained, and controlled airplane flight in Kitty Hawk, North Carolina.\n\nOrville Wright flew 120 feet in 12 seconds. The brothers made four flights that day, with the longest lasting 59 seconds and covering 852 feet.\n\nThis achievement launched the aviation age and transformed transportation and warfare.",
    startDate: "1903-12-17",
    location: { latitude: 36.0182, longitude: -75.6701, country: "United States", city: "Kitty Hawk", region: "North Carolina" },
    category: "science",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Wright_brothers"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "82",
    title: "San Francisco Earthquake",
    description: "The **1906 San Francisco earthquake** struck on April 18 with a magnitude of 7.9, devastating the city and causing massive fires.\n\nOver 3,000 people died and 80% of San Francisco was destroyed. The disaster led to major improvements in earthquake preparedness and building codes.\n\nThe city was rebuilt and emerged as a major West Coast metropolis.",
    startDate: "1906-04-18",
    location: { latitude: 37.7749, longitude: -122.4194, country: "United States", city: "San Francisco", region: "California" },
    category: "disaster",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/1906_San_Francisco_earthquake"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "83",
    title: "Sinking of the Titanic",
    description: "The RMS **Titanic**, the largest ship afloat, struck an iceberg and sank on April 15, 1912, during its maiden voyage from Southampton to New York.\n\nOver 1,500 people died in the disaster. The tragedy exposed inadequate safety regulations and led to major improvements in maritime safety.\n\nThe ship's wreck was discovered in 1985 at a depth of about 12,500 feet.",
    startDate: "1912-04-15",
    location: { latitude: 41.7325, longitude: -49.9469, country: "Atlantic Ocean" },
    category: "disaster",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Sinking_of_the_Titanic"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "84",
    title: "Assassination of Archduke Franz Ferdinand",
    description: "**Archduke Franz Ferdinand** of Austria and his wife were assassinated in Sarajevo on June 28, 1914, by Gavrilo Princip, a Bosnian Serb nationalist.\n\nThis event triggered a chain of events that led to World War I. Austria-Hungary declared war on Serbia, setting off a cascade of alliances.\n\nThe war would last four years and claim over 17 million lives.",
    startDate: "1914-06-28",
    location: { latitude: 43.8563, longitude: 18.4131, country: "Bosnia and Herzegovina", city: "Sarajevo" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Assassination_of_Archduke_Franz_Ferdinand"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "85",
    title: "Russian Revolution",
    description: "The **Russian Revolution** of 1917 overthrew the Tsarist autocracy and led to the rise of the Soviet Union.\n\nThe February Revolution forced Tsar Nicholas II to abdicate. The October Revolution brought the Bolsheviks to power under Vladimir Lenin.\n\nThe revolution fundamentally changed Russia and influenced global politics for the rest of the 20th century.",
    startDate: "1917-03-08",
    endDate: "1917-11-07",
    location: { latitude: 59.9343, longitude: 30.3351, country: "Russia", city: "Saint Petersburg" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Russian_Revolution"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "86",
    title: "Spanish Flu Pandemic",
    description: "The **1918 influenza pandemic** infected 500 million people worldwide (one-third of the global population) and killed an estimated 50-100 million.\n\nThe pandemic spread rapidly due to World War I troop movements. It was unusual in killing many healthy young adults.\n\nThe pandemic ended in 1920 after the virus mutated to a less lethal strain.",
    startDate: "1918-02-01",
    endDate: "1920-04-01",
    location: { latitude: 48.8566, longitude: 2.3522, country: "France", city: "Paris" },
    category: "disaster",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Spanish_flu"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "87",
    title: "Treaty of Versailles",
    description: "The **Treaty of Versailles** was signed on June 28, 1919, officially ending World War I. It imposed harsh penalties on Germany, including territorial losses and reparations.\n\nThe treaty created the League of Nations but failed to prevent future conflict. Many historians believe its punitive terms contributed to World War II.\n\nThe United States Senate refused to ratify the treaty.",
    startDate: "1919-06-28",
    location: { latitude: 48.8049, longitude: 2.1204, country: "France", city: "Versailles" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Treaty_of_Versailles"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "88",
    title: "Discovery of Penicillin",
    description: "**Alexander Fleming** discovered penicillin on September 28, 1928, when he noticed that a mold had killed bacteria in a petri dish.\n\nThis accidental discovery led to the development of antibiotics, revolutionizing medicine. Penicillin saved countless lives during World War II.\n\nFleming, along with Howard Florey and Ernst Chain, won the Nobel Prize in 1945.",
    startDate: "1928-09-28",
    location: { latitude: 51.5074, longitude: -0.1278, country: "United Kingdom", city: "London" },
    category: "science",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Penicillin"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "89",
    title: "Stock Market Crash of 1929",
    description: "The **stock market crash** began on October 24, 1929 (Black Thursday), with the most devastating drop on October 29 (Black Tuesday).\n\nThe crash marked the beginning of the Great Depression, the worst economic downturn in modern history. Millions lost their savings and jobs.\n\nThe depression lasted throughout the 1930s and only ended with World War II.",
    startDate: "1929-10-29",
    location: { latitude: 40.7128, longitude: -74.0060, country: "United States", city: "New York", region: "New York" },
    category: "disaster",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Wall_Street_Crash_of_1929"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "90",
    title: "Invasion of Poland - WWII Begins",
    description: "**World War II** began on September 1, 1939, when Nazi Germany invaded Poland. Britain and France declared war on Germany two days later.\n\nThe war would become the deadliest conflict in human history, killing an estimated 70-85 million people. It involved nations from around the world.\n\nThe war ended in 1945 with Allied victory and fundamentally reshaped global politics.",
    startDate: "1939-09-01",
    location: { latitude: 52.2297, longitude: 21.0122, country: "Poland", city: "Warsaw" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Invasion_of_Poland"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  }
];

// Add more events to reach 100+ total
const moreEvents = [
  {
    id: "91",
    title: "Attack on Pearl Harbor",
    description: "The Japanese attack on **Pearl Harbor** on December 7, 1941, brought the United States into World War II.\n\nThe surprise military strike killed 2,403 Americans and damaged the US Pacific Fleet. President Roosevelt called it \"a date which will live in infamy.\"\n\nThe attack unified American public opinion in favor of entering the war.",
    startDate: "1941-12-07",
    location: { latitude: 21.3606, longitude: -157.9289, country: "United States", city: "Honolulu", region: "Hawaii" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "92",
    title: "D-Day - Normandy Landings",
    description: "On June 6, 1944, Allied forces launched **Operation Overlord**, the largest seaborne invasion in history, landing on the beaches of Normandy, France.\n\nOver 150,000 troops stormed five beaches, suffering heavy casualties but establishing a crucial foothold in Nazi-occupied Europe.\n\nD-Day marked the beginning of the liberation of Western Europe from Nazi control.",
    startDate: "1944-06-06",
    location: { latitude: 49.3428, longitude: -0.5156, country: "France", city: "Normandy" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Normandy_landings"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "93",
    title: "Atomic Bombing of Hiroshima",
    description: "The United States dropped an **atomic bomb** on Hiroshima on August 6, 1945, killing an estimated 140,000 people by the end of the year.\n\nThis was the first use of nuclear weapons in warfare. Three days later, Nagasaki was also bombed. Japan surrendered on August 15, ending World War II.\n\nThe bombings ushered in the nuclear age and the Cold War arms race.",
    startDate: "1945-08-06",
    location: { latitude: 34.3853, longitude: 132.4553, country: "Japan", city: "Hiroshima" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "94",
    title: "United Nations Founded",
    description: "The **United Nations** was officially established on October 24, 1945, after World War II to prevent future conflicts.\n\nThe UN Charter was signed by 51 countries. The organization aims to maintain international peace and security, develop friendly relations among nations, and promote social progress.\n\nToday, the UN has 193 member states.",
    startDate: "1945-10-24",
    location: { latitude: 37.7749, longitude: -122.4194, country: "United States", city: "San Francisco", region: "California" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/United_Nations"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "95",
    title: "Indian Independence",
    description: "**India** gained independence from British rule on August 15, 1947, ending nearly 200 years of colonial rule.\n\nThe partition created two independent nations: India and Pakistan. Mass migration and communal violence resulted in over a million deaths.\n\nMahatma Gandhi's non-violent resistance movement was instrumental in achieving independence.",
    startDate: "1947-08-15",
    location: { latitude: 28.6139, longitude: 77.2090, country: "India", city: "New Delhi" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Indian_independence_movement"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "96",
    title: "State of Israel Declared",
    description: "**Israel** declared independence on May 14, 1948, establishing a Jewish homeland. David Ben-Gurion became the first Prime Minister.\n\nThe declaration led to the 1948 Arab-Israeli War. The conflict displaced hundreds of thousands of Palestinians and created ongoing regional tensions.\n\nIsrael's creation fulfilled Zionist aspirations but remains a source of conflict in the Middle East.",
    startDate: "1948-05-14",
    location: { latitude: 32.0853, longitude: 34.7818, country: "Israel", city: "Tel Aviv" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Israeli_Declaration_of_Independence"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "97",
    title: "Korean War Begins",
    description: "The **Korean War** began on June 25, 1950, when North Korea invaded South Korea, starting a proxy war between communist and democratic powers.\n\nThe war involved UN forces (primarily American) supporting South Korea against North Korea and China. It ended in an armistice in 1953.\n\nThe war resulted in millions of casualties and Korea remains divided today.",
    startDate: "1950-06-25",
    location: { latitude: 37.5665, longitude: 126.9780, country: "South Korea", city: "Seoul" },
    category: "war",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Korean_War"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "98",
    title: "Discovery of DNA Structure",
    description: "On February 28, 1953, **James Watson and Francis Crick** discovered the double helix structure of DNA at Cambridge University.\n\nTheir model, building on work by Rosalind Franklin, revolutionized biology and medicine. It explained how genetic information is stored and replicated.\n\nWatson, Crick, and Maurice Wilkins won the Nobel Prize in 1962.",
    startDate: "1953-02-28",
    location: { latitude: 52.2053, longitude: 0.1218, country: "United Kingdom", city: "Cambridge" },
    category: "science",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Molecular_Structure_of_Nucleic_Acids"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "99",
    title: "Rosa Parks and Montgomery Bus Boycott",
    description: "On December 1, 1955, **Rosa Parks** refused to give up her seat to a white passenger on a Montgomery bus, sparking the Montgomery Bus Boycott.\n\nThe boycott, led by Martin Luther King Jr., lasted 381 days and ended with the Supreme Court ruling that bus segregation was unconstitutional.\n\nThis event launched the modern civil rights movement in America.",
    startDate: "1955-12-01",
    location: { latitude: 32.3668, longitude: -86.3000, country: "United States", city: "Montgomery", region: "Alabama" },
    category: "politics",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Montgomery_bus_boycott"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "100",
    title: "Sputnik 1 Launched",
    description: "The Soviet Union launched **Sputnik 1**, the first artificial Earth satellite, on October 4, 1957, marking the beginning of the Space Age.\n\nThe 58 cm diameter sphere transmitted radio signals for 21 days. Its launch shocked the United States and sparked the Space Race.\n\nSputnik led to the creation of NASA and accelerated space exploration efforts.",
    startDate: "1957-10-04",
    location: { latitude: 45.9200, longitude: 63.3400, country: "Kazakhstan", city: "Baikonur" },
    category: "science",
    status: "approved",
    sources: ["https://en.wikipedia.org/wiki/Sputnik_1"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  }
];

// Combine all events
const allEvents = [...events, ...moreEvents];

// Create directories and save files
allEvents.forEach(event => {
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

console.log(`\n✅ Successfully created ${allEvents.length} event files!`);
