(this["webpackJsonpvisualizing-commuter-data"] =
  this["webpackJsonpvisualizing-commuter-data"] || []).push([
  [4],
  {
    187: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(24),
        o = a(57),
        n = a(12),
        c = a(4),
        l = a.n(c),
        d = a(133),
        r = function (e) {
          var t = e.width,
            a = e.statistic,
            i = window.innerWidth;
          t || (t = i > 769 ? 480 : i);
          var o = ((i > 769 ? 0.9 : 1) * t) / 0.885,
            c = 42 + n.g + o;
          return l.a.createElement(
            d.a,
            {
              viewBox: "0 0 ".concat(t, " ").concat(c),
              height: c,
              width: t,
              speed: 2,
              backgroundColor: n.a[a],
            },
            l.a.createElement("circle", { cx: 0.4 * t, cy: c / 2, r: "5" }),
            l.a.createElement("circle", { cx: 0.5 * t, cy: c / 2, r: "5" }),
            l.a.createElement("circle", { cx: 0.6 * t, cy: c / 2, r: "5" })
          );
        },
        s = a(19),
        u = a(136),
        m = a(134),
        p = a.n(m),
        v = a(135),
        T = a.n(v),
        O = a(84),
        N = a(27),
        h = a.n(N),
        E = a(163),
        f = a(164),
        C = a(186),
        b = a(53),
        k = a(96),
        g = Object(c.lazy)(function () {
          return Promise.all([a.e(8), a.e(5)]).then(a.bind(null, 165));
        });
      t.default = l.a.memo(
        function (e) {
          var t,
            a,
            d = e.stateCode,
            m = e.education_data,
            v = e.regionHighlighted,
            T = e.setRegionHighlighted,
            N = e.anchor,
            S = e.setAnchor,
            j = e.mapStatistic,
            R = e.setMapStatistic,
            w = e.isCountryLoaded,
            y = void 0 === w || w,
            I = Object(C.a)().t,
            L = Object(b.g)(),
            _ = Object(c.useRef)(),
            M = Object(c.useState)({
              code: d,
              view: n.k.COUNTRY,
              option: n.h[d].mapType === n.k.COUNTRY ? n.i.HOTSPOTS : n.i.TOTAL,
            }),
            U = Object(o.a)(M, 2),
            Y = U[0],
            Z = U[1];
          console.log(n.h);
          var A = n.h[Y.code],
            P =
              A.mapType === n.k.COUNTRY
                ? m
                : Object(i.a)({}, Y.code, m[Y.code]);
          Object(c.useEffect)(
            function () {
              if (v.districtName) {
                if (
                  Y.code !== v.stateCode &&
                  (A.mapType !== n.k.COUNTRY || Y.view !== n.k.COUNTRY)
                ) {
                  if (!n.h[v.stateCode]) return;
                  Z({
                    code: v.stateCode,
                    view: n.k.COUNTRY,
                    option: Y.option === n.i.PER_MILLION ? n.i.TOTAL : Y.option,
                  });
                }
              } else
                y &&
                  A.mapType === n.k.STATE &&
                  Z({
                    code: "NZ",
                    view: Y.option === n.i.ZONES ? n.k.COUNTRY : n.k.DISTRICTS,
                    option: Y.option,
                  });
            },
            [
              y,
              v.stateCode,
              v.districtName,
              Y.code,
              Y.option,
              Y.view,
              A.mapType,
            ]
          );
          var H = Object(c.useCallback)(
            function (e) {
              var t = n.h[e];
              if (t)
                if (t.mapType === n.k.STATE) {
                  var a = m[e].districts || {},
                    i = Object.keys(a).sort(function (e, t) {
                      return (
                        Object(s.g)(a[t], "total", j) -
                        Object(s.g)(a[e], "total", j)
                      );
                    })[0];
                  h.a.unstable_batchedUpdates(function () {
                    T({ stateCode: e, districtName: i }),
                      Z({
                        code: e,
                        view: n.k.COUNTRY,
                        option:
                          Y.option === n.i.PER_MILLION ? n.i.TOTAL : Y.option,
                      });
                  });
                } else
                  h.a.unstable_batchedUpdates(function () {
                    Z({
                      code: "NZ",
                      view:
                        Y.option === n.i.HOTSPOTS ? n.k.COUNTRY : n.k.DISTRICTS,
                      option: Y.option,
                    }),
                      T({ stateCode: "TT", districtName: null });
                  });
            },
            [m, Y.option, j, T]
          );
          Object(c.useEffect)(
            function () {
              H(d);
            },
            [d, H]
          );
          var x = Object(c.useMemo)(
              function () {
                var e = Y.view === n.k.DISTRICTS ? v.stateCode : Y.code,
                  t = m[e] || {};
                return Object(O.a)(t, function (t) {
                  t.state = n.d[e];
                });
              },
              [m, v.stateCode, Y.view, Y.code]
            ),
            D = Object(c.useMemo)(
              function () {
                var e,
                  t,
                  a =
                    (v.districtName
                      ? null === (e = m[v.stateCode]) || void 0 === e
                        ? void 0
                        : null === (t = e.districts) || void 0 === t
                        ? void 0
                        : t[v.districtName]
                      : m[v.stateCode]) || {};
                return Object(O.a)(a, function (e) {
                  (e.name = v.districtName || n.d[v.stateCode]),
                    v.districtName ||
                      (e.population_millions = n.e[v.stateCode]);
                });
              },
              [m, v.stateCode, v.districtName]
            ),
            z = Object(k.c)(
              n.j.length,
              n.j.map(function (e) {
                return {
                  total: Object(s.g)(x, "total", e),
                  delta: Object(s.g)(x, "delta", e),
                  from: {
                    total: Object(s.g)(x, "total", e),
                    delta: Object(s.g)(x, "delta", e),
                  },
                  config: { tension: 500, clamp: !0 },
                };
              })
            );
          return l.a.createElement(
            "div",
            {
              className: p()(
                "MapExplorer",
                { stickied: "mapexplorer" === N },
                { hidden: N && "mapexplorer" !== N }
              ),
            },
            window.innerWidth > 769 &&
              l.a.createElement(
                "div",
                {
                  className: p()("anchor", { stickied: "mapexplorer" === N }),
                  onClick: function () {
                    S("mapexplorer" === N ? null : "mapexplorer");
                  },
                },
                l.a.createElement(u.a, null)
              ),
            l.a.createElement(
              "div",
              { className: "header" },
              l.a.createElement(
                "h1",
                null,
                "TT" === Y.code ? I("NZ") : I(n.d[Y.code]),
                " ",
                I("Map")
              ),
              l.a.createElement(
                "h6",
                null,
                I("{{action}} over a {{mapType}} for more details", {
                  action: I(window.innerWidth <= 769 ? "Tap" : "Hover"),
                  mapType: I(
                    A.mapType === n.k.COUNTRY ? "NZ" : "Regional District"
                  ),
                })
              )
            ),
            l.a.createElement(
              "div",
              { className: "map-stats" },
              n.j.map(function (e, t) {
                var a, i;
                return l.a.createElement(
                  "div",
                  {
                    key: e,
                    className: p()("stats", e, { focused: e === j }),
                    onClick: function () {
                      return R(e);
                    },
                  },
                  l.a.createElement("h5", null, I(Object(s.a)(e))),
                  l.a.createElement(
                    "div",
                    { className: "stats-bottom" },
                    l.a.createElement(
                      k.a.h1,
                      null,
                      z[t].total.interpolate(function (e) {
                        return Object(s.f)(Math.floor(e));
                      })
                    ),
                    "tested" !== e &&
                      "active" !== e &&
                      l.a.createElement(
                        k.a.h6,
                        null,
                        z[t].delta.interpolate(function (e) {
                          return e > 0
                            ? "+".concat(Object(s.f)(Math.floor(e)))
                            : "\xa0";
                        })
                      ),
                    "tested" === e &&
                      l.a.createElement(
                        "h6",
                        null,
                        (null === x || void 0 === x
                          ? void 0
                          : null === (a = x.total) || void 0 === a
                          ? void 0
                          : a.tested) &&
                          I("As of {{date}}", {
                            date: Object(s.d)(
                              x.meta.tested.last_updated,
                              "dd MMM"
                            ),
                          })
                      )
                  ),
                  "tested" === e &&
                    (null === x || void 0 === x
                      ? void 0
                      : null === (i = x.total) || void 0 === i
                      ? void 0
                      : i.tested) &&
                    l.a.createElement(
                      "a",
                      { href: x.meta.tested.source, target: "_noblank" },
                      l.a.createElement(E.a, null)
                    )
                );
              })
            ),
            l.a.createElement(
              "div",
              { className: "meta" },
              A.mapType === n.k.STATE &&
                l.a.createElement(
                  "div",
                  {
                    className: "map-button",
                    onClick: function () {
                      return L.push("district/".concat(Y.code));
                    },
                  },
                  I("Visit state page"),
                  l.a.createElement(f.a, null)
                ),
              A.mapType !== n.k.STATE &&
                (null === x || void 0 === x
                  ? void 0
                  : null === (t = x.meta) || void 0 === t
                  ? void 0
                  : t.last_updated) &&
                l.a.createElement(
                  "div",
                  { className: "last-update" },
                  l.a.createElement("h6", null, I("Last updated")),
                  l.a.createElement(
                    "h3",
                    null,
                    ""
                      .concat(Object(s.e)(x.meta.last_updated), " ")
                      .concat(I("ago"))
                  )
                ),
              l.a.createElement(
                "h2",
                {
                  className: p()(
                    j,
                    Object(i.a)(
                      {},
                      null === D || void 0 === D ? void 0 : D.zone,
                      Y.option === n.i.ZONES
                    )
                  ),
                },
                I(D.name),
                D.name === n.m && " (".concat(I(n.d[v.stateCode]), ")")
              ),
              A.mapType === n.k.STATE &&
                l.a.createElement(
                  "div",
                  {
                    className: "map-button",
                    onClick: function () {
                      return H("TT");
                    },
                  },
                  I("Back")
                ),
              Y.option !== n.i.ZONES &&
                ((Y.view === n.k.COUNTRY && v.districtName) ||
                  (Y.view === n.k.DISTRICTS && Y.option !== n.i.TOTAL)) &&
                l.a.createElement(
                  "h1",
                  { className: p()("district", j) },
                  Object(s.f)(
                    Object(s.g)(
                      D,
                      "total",
                      j,
                      Y.option === n.i.PER_MILLION ? D.population_millions : 1
                    )
                  ),
                  l.a.createElement("br", null),
                  l.a.createElement(
                    "span",
                    null,
                    I(j),
                    Y.option === n.i.PER_MILLION && " ".concat(I("per million"))
                  )
                )
            ),
            l.a.createElement(
              "div",
              { ref: _ },
              j &&
                l.a.createElement(
                  c.Suspense,
                  {
                    fallback: l.a.createElement(
                      r,
                      Object.assign(
                        { className: "map-loader" },
                        {
                          width:
                            null === (a = _.current) || void 0 === a
                              ? void 0
                              : a.clientWidth,
                          statistic: j,
                        }
                      )
                    ),
                  },
                  l.a.createElement(g, {
                    currentMap: Y,
                    data: P,
                    changeMap: H,
                    regionHighlighted: v,
                    setRegionHighlighted: T,
                    statistic: j,
                    isCountryLoaded: y,
                  })
                )
            ),
            l.a.createElement(
              "div",
              { className: "tabs-map" },
              Object.values(n.i).map(function (e) {
                return l.a.createElement(
                  "div",
                  {
                    key: e,
                    className: p()("tab", { focused: Y.option === e }),
                    onClick: function () {
                      return (function (e) {
                        switch (e) {
                          case n.i.TOTAL:
                            return (
                              Z({
                                code: Y.code,
                                view:
                                  A.mapType === n.k.COUNTRY
                                    ? n.k.DISTRICTS
                                    : n.k.COUNTRY,
                                option: n.i.TOTAL,
                              }),
                              void (
                                A.mapType === n.k.COUNTRY &&
                                T({
                                  stateCode: v.stateCode,
                                  districtName: null,
                                })
                              )
                            );
                          case n.i.PER_MILLION:
                            if (A.mapType === n.k.STATE) return;
                            return (
                              Z({
                                code: Y.code,
                                view: n.k.DISTRICTS,
                                option: n.i.PER_MILLION,
                              }),
                              void T({
                                stateCode: v.stateCode,
                                districtName: null,
                              })
                            );
                          case n.i.HOTSPOTS:
                            return void Z({
                              code: Y.code,
                              view: n.k.COUNTRY,
                              option: n.i.HOTSPOTS,
                            });
                          case n.i.ZONES:
                            return (
                              Z({
                                code: Y.code,
                                view: n.k.COUNTRY,
                                option: n.i.ZONES,
                              }),
                              void (
                                A.mapType === n.k.COUNTRY &&
                                T({ stateCode: "NZ", districtName: null })
                              )
                            );
                          default:
                            return;
                        }
                      })(e);
                    },
                  },
                  l.a.createElement(
                    "h4",
                    null,
                    I(e),
                    e === n.i.PER_MILLION &&
                      l.a.createElement("sup", null, "\u2020")
                  )
                );
              })
            ),
            l.a.createElement(
              "h6",
              { className: p()("footnote") },
              "\u2020 ",
              "".concat(I("Based on 2018 Census by NZ Statistics, see ")),
              l.a.createElement(
                "a",
                {
                  href:
                    "https://www.stats.govt.nz/2018-census/there-and-back-again-data-visualisation-competition",
                  target: "_noblank",
                  style: { color: "#6c757d" },
                },
                I("source")
              )
            )
          );
        },
        function (e, t) {
          var a, i, o, n, c, l, d, r, s, u;
          return (
            !!T()(e.stateCode, t.stateCode) &&
            !!T()(e.regionHighlighted, t.regionHighlighted) &&
            !!T()(e.mapStatistic, t.mapStatistic) &&
            !!T()(e.anchor, t.anchor) &&
            !!T()(
              null === (a = e.education_data) || void 0 === a
                ? void 0
                : null === (i = a.NZ) || void 0 === i
                ? void 0
                : null === (o = i.meta) || void 0 === o
                ? void 0
                : o.last_updated,
              null === (n = t.education_data) || void 0 === n
                ? void 0
                : null === (c = n.NZ) || void 0 === c
                ? void 0
                : null === (l = c.meta) || void 0 === l
                ? void 0
                : l.last_updated
            ) &&
            !!T()(
              null === (d = e.education_data) || void 0 === d
                ? void 0
                : null === (r = d.NZ) || void 0 === r
                ? void 0
                : r.total,
              null === (s = t.education_data) || void 0 === s
                ? void 0
                : null === (u = s.NZ) || void 0 === u
                ? void 0
                : u.total
            )
          );
        }
      );
    },
  },
]);
//# sourceMappingURL=MapExplorer.5d7b9e57.chunk.js.map
