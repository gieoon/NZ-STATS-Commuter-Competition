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

export const getStatistic = (data, type, statistic, normalizer = 1) => {
  let count;
  if (statistic === "active") {
    const confirmed = data?.[type]?.confirmed || 0;
    const deceased = data?.[type]?.deceased || 0;
    const recovered = data?.[type]?.recovered || 0;
    const migrated = data?.[type]?.migrated || 0;
    count = confirmed - deceased - recovered - migrated;
  } else {
    count = data?.[type]?.[statistic] || 0;
  }
  return count / normalizer;
};

export const fetcher = (url) => {
  return fetch(url).then((response) => {
    // console.log('got response: ', response.body.getReader());
    return response; //.json();
  });
};
