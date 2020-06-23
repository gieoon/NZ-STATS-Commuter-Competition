// Server address providing map data, localization, and any other json files
export const DATA_URL_ROOT = "http://localhost:5000";
export const BASE_URL = "http://localhost:3000/";

export const MODES_OF_TRANSPORT = [
  "Work/Study from home",
  "Drive car/truck/van",
  "Passenger in car/truck/van",
  "Train",
  "Bicycle",
  "Walk/jog",
  "School/Public bus",
  "Ferry",
  "Other"
]

// What to show at the top
export const DISTRICT_STATISTICS_TOTAL = [
  "Total",
  // Combine these two into one.
  "Study at home",
  "Work from home",
  // -------------------
  // Combine these 3 into one
  "Drive private car/truck/van",
  "Drive company car/truck/van",
  "Drive a car/truck/van",
  // -------------------
  "Passenger in car/truck/van", // Combine between work & student
  "Train",
  "Bicycle",
  "Walk/jog",
  "School bus",
  "Public bus",
  "Ferry",
  "Other",
  "Commute distance" 
];

export const DISTRICT_STATISTICS_WORK = [
  "Total",
  "Work from home",
  "Drive private car/truck/van",
  "Drive company car/truck/van",
  "Passenger in car/truck/van",
  "Train",
  "Bicycle",
  "Walk/jog",
  "Public bus",
  "Ferry",
  "Other",
  "Commute distance",
]

export const DISTRICT_STATISTICS_EDUCATION = [
  "Total",
  "Study at home",
  "Drive a car/truck/van",
  "Passenger in car/truck/van",
  "Train",
  "Bicycle",
  "Walk/jog",
  "School bus",
  "Public bus",
  "Ferry",
  "Other",
  "Commute distance" 
]

// Data to show for overall data
export const DISTRICT_SUMMARY = [
  "Total",
  "Number of routes",
  "Drive a car/truck/van",
  "Passenger in car/truck/van",
  "Train",
  "Bicycle",
  "Walk/jog",
  "School bus",
  "Public bus",
  "Ferry",
  "Other",
  "Average commute distance", // Sum / total of all Haversine distances.
]

// Data created for each circle
export const CENTROID_SUMMARY = [
  "Total",
  "Study at home",
  "Drive a car/truck/van",
  "Passenger in car/truck/van",
  "Train",
  "Bicycle",
  "Walk/jog",
  "School bus",
  "Public bus",
  "Ferry",
  "Other",
  "Average commute distance from here", 
]

export const MAP_TYPES = {
  COUNTRY: 0,
  DISTRICT: 1,
};

export const MAP_OPTIONS = {
  TOTAL: "Total",
  WORK: "Work",
  EDUCATION: "Education",
};

// ISO suffix of things.
export const NZ_ISO_SUFFIX = "T00:00:00+12:00";

export const LOCALE_SHORTHANDS = {
  english: "en-US",
};

export const D3_TRANSITION_DURATION = 300;

export const MAP_LEGEND_HEIGHT = 50;

export const ZONE_COLORS = {
  Red: "#d73027",
  Orange: "#fee08b",
  Green: "#66bd63",
};

export const COLORS = {
  confirmed: "#ff073a",
  active: "#007bff",
  recovered: "#28a745",
  deceased: "#6c757d",
  tested: "#4b1eaa",
};

export const MAPS_DIR =
  process.env.NODE_ENV === "production" ? "/maps" : "/maps";

export const MAP_META = {
  NZ: {
    geoDataFile: `${MAPS_DIR}/new-zealand-districts.json`,
    // geoDataFile: `${MAPS_DIR}/andhrapradesh.json`,
    mapType: MAP_TYPES.COUNTRY,
    graphObjectStates: "NZL_adm2",
    graphObjectDistricts: "NZL_adm2",
  },
};

export const UNKNOWN_DISTRICT_KEY = "Unknown";

export const DISTRICT_NAMES = {
  Northland: "Northland",
  Auckland: "Auckland",
  Waikato: "Waikato",
  'Bay of Plenty': "Bay of Plenty",
  Gisborne: "Gisborne",
  "Hawke's Bay": "Hawke's Bay",
  Taranaki: "Taranaki",
  "Manawatu-Wanganui": "Manawatu-Wanganui",
  Wellington: "Wellington",
  Tasman: "Tasman",
  Nelson: "Nelson",
  Marlborough: "Marlborough",
  "West Coast": "West Coast",
  Canterbury: "Canterbury",
  Otago: "Otago",
  Southland: "Southland",
};

export const CITY_NAMES = {
  Auckland: "Auckland",
  Franklin: "Franklin",
  Manukau: "Manukau",
  Hamilton: "Hamilton",
  Hauraki: "Hauraki",
  "Matamata-Piako": "Matamata-Piako",
  Otorohanga: "Otorohanga",
  Rotorua: "Rotorua",
  "South Waikato": "South Waikato",
  Taupo: "Taupo",
  "Thames-Coromandel": "Thames-Coromandel",
  Rodney: "Rodney",
  Waitakere: "Waitakere",
  Opotiki: "Opotiki",
  Rotorua: "Rotorua",
  Taupo: "Taupo",
  "Western Bay of Plenty": "Western Bay of Plenty",
  Whakatane: "Whakatane",
  Ashburton: "Ashburton",
  Christchurch: "Christchurch",
  Hurunui: "Hurunui",
  Kaikoura: "Kaikoura",
  Mackenzie: "Mackenzie",
  Selwyn: "Selwyn",
  Timaru: "Timaru",
  Waimakariri: "Waimakariri",
  Waimate: "Waimate",
  Waitaki: "Waitaki",
  Gisborne: "Gisborne",
  "Central Hawke's Bay": "Central Hawke's Bay",
  Hastings: "Hastings",
  "Hastings city": "Hastings city",
  Napier: "Napier",
  Wairoa: "Wairoa",
  Horowhenua: "Horowhenua",
  Manawatu: "Manawatu",
  "Palmerston North": "Palmerston North",
  Rangitikei: "Rangitikei",
  Ruapehu: "Ruapehu",
  Tararua: "Tararua",
  Wanganui: "Wanganui",
  Marlborough: "Marlborough",
  Nelson: "Nelson",
  Tasman: "Tasman",
  "Far North": "Far North",
  Kaipara: "Kaipara",
  Whangarei: "Whangarei",
  "Central Otago": "Central Otago",
  Clutha: "Clutha",
  Dunedin: "Dunedin",
  "Queenstown-Lakes": "Queenstown-Lakes",
  Waitaki: "Waitaki",
  Gore: "Gore",
  Invercargill: "Invercargill",
  Southland: "Southland",
  "New Plymouth": "New Plymouth",
  "South Taranaki": "South Taranaki",
  Stratford: "Stratford",
  Franklin: "Franklin",
  Waikato: "Waikato",
  Waipa: "Waipa",
  Waitomo: "Waitomo",
  Carterton: "Carterton",
  "Hutt city": "Hutt city",
  "Kapiti Coast": "Kapiti Coast",
  Masterton: "Masterton",
  Porirua: "Porirua",
  "South Wairarapa": "South Wairarapa",
  "Upper Hutt": "Upper Hutt",
  Wellington: "Wellington",
  Buller: "Buller",
  Grey: "Grey",
  Westland: "Westland",
}

// CONVERT FROM id >> Human Friendly Name
// This is required for the highlighting functionality.
const cityCodesMap = {};
// Reverse dictionary of DISTRICT_NAMES;
Object.keys(CITY_NAMES).map((key, index) => {
  cityCodesMap[CITY_NAMES[key]] = key;
  return null;
});
export const CITY_CODES = cityCodesMap;

// https://en.wikipedia.org/wiki/Regions_of_New_Zealand
export const DISTRICT_POPULATIONS_MIL = {
  NORTHLAND: 188700,
  AUCKLAND: 1642800,
  WAIKATO: 482100,
  BAY_OF_PLENTY: 324200,
  GISBORNE: 49300,
  HAWKES_BAY: 173700,
  TARANAKI: 122700,
  MANAWATU_WHANGANUI: 234500,
  WELLINGTON: 527800,
  TASMAN: 54800,
  NELSON: 52900,
  MARLBOROUGH: 49200,
  WEST_COAST: 32600,
  CANTERBURY: 628600,
  OTAGO: 236200,
  SOUTHLAND: 101200,
};
