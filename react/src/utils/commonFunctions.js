import { NZ_ISO_SUFFIX, LOCALE_SHORTHANDS } from "../constants";

import { format, formatDistance, formatISO, subDays } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import i18n from "i18next";

let locale = null;

const getLocale = () => {
  import("date-fns/locale/").then((localePackage) => {
    locale =
      localePackage[
        LOCALE_SHORTHANDS[i18n.language || window.localStorage.i18nextLng]
      ];
  });
};

export const isDevelopmentOrTest = () => {
  if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test")
    return true;
  return false;
};

export const getNZDate = () => {
  return utcToZonedTime(new Date(), "Auckland");
};

export const getNZDateISO = () => {
  return formatISO(getNZDate(), { representation: "date" });
};

export const getNZYesterdayISO = () => {
  return formatISO(subDays(getNZDate(), 1), { representation: "date" });
};

export const formatLastUpdated = (unformattedDate) => {
  getLocale();
  return formatDistance(new Date(unformattedDate), new Date(), {
    locale: locale,
  });
};

export const parseNZDate = (isoDate) => {
  return new Date(isoDate + NZ_ISO_SUFFIX);
};

export const formatDate = (unformattedDate, formatString) => {
  if (
    typeof unformattedDate === "string" &&
    unformattedDate.match(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g)
  )
    unformattedDate += NZ_ISO_SUFFIX;
  const date = utcToZonedTime(new Date(unformattedDate), "Auckland");
  return format(date, formatString, {
    locale: locale,
  });
};

export function sliceTimeseriesFromEnd(timeseries, days) {
  return timeseries.slice(-days);
}

export const formatNumber = (value) => {
  const numberFormatter = new Intl.NumberFormat("en-NZ", {
    maximumFractionDigits: 2,
  });
  return isNaN(value) ? "-" : numberFormatter.format(value);
};

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const capitalizeAll = (s) => {
  if (typeof s !== "string") return "";
  const str = s.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = capitalize(str[i]);
  }
  return str.join(" ");
};

export const abbreviate = (s) => {
  return s.slice(0, 1) + s.slice(1).replace(/[aeiou]/gi, "");
};

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const getStatistic = (data, statistic, normalizer = 1) => {
  let count = 0;
  
  // console.log(data, statistic);
  // const work_at_home = data?.[type]?.
  // const deceased = data?.[type]?.deceased || 0;
  // const recovered = data?.[type]?.recovered || 0;
  // const migrated = data?.[type]?.migrated || 0;
  // count = confirmed - deceased - recovered - migrated;
  // console.log(educationStatistic2Key(statistic), data[educationStatistic2Key(statistic)]);
  return Math.max(data[educationStatistic2Key(statistic)] || 0, 0); // Convert -999 to 0
};

const educationStatistic2Key = (s) => {
  switch(s){
    case "School/Public bus": return "School_bus";
    case "Work/Study from home": return "Study_at_home";
    case "Drive car/truck/van": return "Drive_a_car_truck_or_van";
    case "Passenger in car/truck/van": return "Passenger_in_a_car_truck_or_van";
    case "Walk/jog": return "Walk_or_jog";
    default: return s;
  }
}

export const fetcher = (url) => {
  return fetch(url).then( (response) => {
    // console.log('got response: ', await response.text());
    return response.text().then((csv) =>
      txt2Array(csv)
    ) //.json();
  })
  .catch(function(err) {
    console.log("Error fetching data: ", err);
  });
};

export const fetcherJSON = (url) => {
  return fetch(url).then((response) => {
    return response.json();
  })
  .catch(err => {
    console.error("Error fetching data: ", err);
  })
}

// Centroid data fetcher dict{key: txt2Array(csv)}
export const fetcherDICT = (url) => {
  return fetch(url).then((response) => {
    return response.json().then(dict => {
      const d = {};
      // console.log("dict: ", dict);
      Object.keys(dict).forEach((k) => {
        d[k] = txt2Array(dict[k]);
      })
      // console.log("d: ", d);
      return d;
    })
  })
}

// Convert input text into an array of objects
export const txt2Array = (allText) => {
  var allTextLines = allText.split(/\r\n|\n/);
  // console.log(allTextLines.length);
  var headers = allTextLines[0].split(",");
  var lines = [];

  for (var i = 1; i < allTextLines.length; i++) {
    var data = allTextLines[i].split(",");
    if (data.length == headers.length) {
      var row = {};
      // Need to skip the first one, but will do this on the serverside after sanitizing data
      for (var j = 0; j < headers.length; j++) {
        row[headers[j]] = data[j];
      }
      lines.push(row);
    }
  }
  return lines;
};

