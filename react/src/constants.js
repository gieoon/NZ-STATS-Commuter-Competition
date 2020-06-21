// Server address providing map data, localization, and any other json files
export const DATA_URL_ROOT = "http://localhost:5000";
export const BASE_URL = "http://localhost:3000/";

export const PRIMARY_STATISTICS = [
  "confirmed",
  "active",
  "recovered",
  "deceased",
];

// CONVERT FROM id >> Human Friendly Name
export const DISTRICT_CODES = {};

export const MAP_STATISTICS = [...PRIMARY_STATISTICS, "tested"];

export const MAP_TYPES = {
  COUNTRY: 0,
  DISTRICT: 1,
};

export const MAP_OPTIONS = {
  TOTAL: "Total",
  PER_MILLION: "Per million",
  HOTSPOTS: "Hotspots",
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
  NORTHLAND: "Northland",
  AUCKLAND: "Auckland",
  WAIKATO: "Waikato",
  BAY_OF_PLENTY: "Bay of Plenty",
  GISBORNE: "Gisborne",
  HAWKES_BAY: "Hawke's bay",
  TARANAKI: "Taranaki",
  MANAWATU_WHANGANUI: "Manawatu Whanganui",
  WELLINGTON: "Wellington",
  TASMAN: "Tasman",
  NELSON: "Nelson",
  MARLBOROUGH: "Marlborough",
  WEST_COAST: "West Coast",
  CANTERBURY: "Canterbury",
  OTAGO: "Otago",
  SOUTHLAND: "Southland",
};

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
