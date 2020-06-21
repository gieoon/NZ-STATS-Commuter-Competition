(this["webpackJsonpvisualizing-commuter-data"] =
  this["webpackJsonpvisualizing-commuter-data"] || []).push([
  [6],
  {
    12: function (n, e, t) {
      "use strict";
      t.d(e, "c", function () {
        return r;
      }),
        t.d(e, "j", function () {
          return o;
        }),
        t.d(e, "k", function () {
          return a;
        }),
        t.d(e, "i", function () {
          return i;
        }),
        t.d(e, "l", function () {
          return u;
        }),
        t.d(e, "f", function () {
          return c;
        }),
        t.d(e, "b", function () {
          return d;
        }),
        t.d(e, "g", function () {
          return l;
        }),
        t.d(e, "n", function () {
          return s;
        }),
        t.d(e, "a", function () {
          return f;
        }),
        t.d(e, "h", function () {
          return A;
        }),
        t.d(e, "m", function () {
          return v;
        }),
        t.d(e, "d", function () {
          return N;
        }),
        t.d(e, "e", function () {
          return O;
        });
      var r = {},
        o = [].concat(
          ["confirmed", "active", "recovered", "deceased"],
          ["tested"]
        ),
        a = { COUNTRY: 0, DISTRICT: 1 },
        i = {
          TOTAL: "Total",
          PER_MILLION: "Per million",
          HOTSPOTS: "Hotspots",
        },
        u = "T00:00:00+12:00",
        c = { english: "en-US" },
        d = 300,
        l = 50,
        s = { Red: "#d73027", Orange: "#fee08b", Green: "#66bd63" },
        f = {
          confirmed: "#ff073a",
          active: "#007bff",
          recovered: "#28a745",
          deceased: "#6c757d",
          tested: "#4b1eaa",
        },
        A = {
          NZ: {
            geoDataFile: "".concat("/maps", "/new-zealand-districts.json"),
            mapType: a.COUNTRY,
            graphObjectStates: "NZL_adm2",
            graphObjectDistricts: "NZL_adm2",
          },
        },
        v = "Unknown",
        N = {
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
        },
        O = {
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
    },
    19: function (n, e, t) {
      "use strict";
      t.d(e, "h", function () {
        return d;
      }),
        t.d(e, "e", function () {
          return l;
        }),
        t.d(e, "d", function () {
          return s;
        }),
        t.d(e, "f", function () {
          return f;
        }),
        t.d(e, "a", function () {
          return A;
        }),
        t.d(e, "b", function () {
          return v;
        }),
        t.d(e, "g", function () {
          return N;
        }),
        t.d(e, "c", function () {
          return O;
        });
      var r = t(12),
        o = (t(34), t(46), t(45)),
        a = t(44),
        i = t(35),
        u = t(10),
        c = null,
        d = function () {
          return !1;
        },
        l = function (n) {
          return (
            t
              .e(13)
              .then(t.bind(null, 49))
              .then(function (n) {
                c = n[r.f[u.a.language || window.localStorage.i18nextLng]];
              }),
            Object(o.a)(new Date(n), new Date(), { locale: c })
          );
        },
        s = function (n, e) {
          "string" === typeof n &&
            n.match(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g) &&
            (n += r.l);
          var t = Object(i.a)(new Date(n), "Auckland");
          return Object(a.a)(t, e, { locale: c });
        };
      var f = function (n) {
          var e = new Intl.NumberFormat("en-NZ", { maximumFractionDigits: 2 });
          return isNaN(n) ? "-" : e.format(n);
        },
        A = function (n) {
          return "string" !== typeof n
            ? ""
            : n.charAt(0).toUpperCase() + n.slice(1);
        },
        v = function (n) {
          if ("string" !== typeof n) return "";
          for (var e = n.toLowerCase().split(" "), t = 0; t < e.length; t++)
            e[t] = A(e[t]);
          return e.join(" ");
        },
        N = function (n, e, t) {
          var r,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1;
          if ("active" === t) {
            var a,
              i,
              u,
              c,
              d =
                (null === n || void 0 === n
                  ? void 0
                  : null === (a = n[e]) || void 0 === a
                  ? void 0
                  : a.confirmed) || 0,
              l =
                (null === n || void 0 === n
                  ? void 0
                  : null === (i = n[e]) || void 0 === i
                  ? void 0
                  : i.deceased) || 0,
              s =
                (null === n || void 0 === n
                  ? void 0
                  : null === (u = n[e]) || void 0 === u
                  ? void 0
                  : u.recovered) || 0,
              f =
                (null === n || void 0 === n
                  ? void 0
                  : null === (c = n[e]) || void 0 === c
                  ? void 0
                  : c.migrated) || 0;
            r = d - l - s - f;
          } else {
            var A;
            r =
              (null === n || void 0 === n
                ? void 0
                : null === (A = n[e]) || void 0 === A
                ? void 0
                : A[t]) || 0;
          }
          return r / o;
        },
        O = function (n) {
          return fetch(n).then(function (n) {
            return n.json();
          });
        };
    },
    37: function (n, e, t) {
      n.exports = t(43);
    },
    42: function (n, e, t) {},
    43: function (n, e, t) {
      "use strict";
      t.r(e);
      var r = t(4),
        o = t.n(r),
        a = t(27),
        i = t.n(a),
        u = (t(42), t(19)),
        c = t(10),
        d = t(31),
        l = t(32),
        s = t(48);
      c.a
        .use(l.a)
        .use(d.a)
        .use(s.e)
        .init({
          debug: Object(u.h)() && !1,
          keySeparator: !1,
          returnEmptyString: !1,
          fallbackLng: "english",
          load: "languageOnly",
          backend: {
            loadPath:
              "https://api.covid19india.org/locales/locale_{{lng}}.json",
            addPath: "http://localhost:9999/",
          },
          saveMissing: Object(u.h)() && !1,
          interpolation: { escapeValue: !1 },
        });
      c.a,
        Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      var f = Object(r.lazy)(function () {
        return Promise.all([t.e(10), t.e(1)]).then(t.bind(null, 184));
      });
      i.a.render(
        o.a.createElement(
          r.Suspense,
          { fallback: o.a.createElement("div", null) },
          o.a.createElement(f, null)
        ),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (n) {
            n.unregister();
          });
    },
  },
  [[37, 7, 9]],
]);
//# sourceMappingURL=main.fdd1f750.chunk.js.map
