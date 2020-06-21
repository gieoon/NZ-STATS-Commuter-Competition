(this["webpackJsonpvisualizing-commuter-data"] =
  this["webpackJsonpvisualizing-commuter-data"] || []).push([
  [5],
  {
    165: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n(79),
        r = n(137),
        a = n.n(r),
        c = n(4),
        o = n.n(c),
        s = n(95),
        u = n(171),
        l = n(173),
        p = n(144),
        d = n(183),
        O = n(166),
        f = n(167),
        b = n(168),
        v = n(169),
        m = n(170),
        j = n(172),
        g = n(176),
        h = n(143),
        T = n(178),
        E = n(180),
        S = n(147),
        k = n(186),
        N = n(146),
        y = n(177),
        M = n(12),
        w = n(19),
        I = function (t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          return Object(w.g)(t, "total", e, n);
        },
        R = {
          confirmed: function (t) {
            return Object(O.a)(0.85 * t);
          },
          active: function (t) {
            return Object(f.a)(0.85 * t);
          },
          recovered: function (t) {
            return Object(b.a)(0.85 * t);
          },
          deceased: function (t) {
            return Object(v.a)(0.85 * t);
          },
          tested: function (t) {
            return Object(m.a)(0.85 * t);
          },
        };
      e.default = function (t) {
        var e,
          n,
          r = t.currentMap,
          O = t.data,
          f = t.changeMap,
          b = (t.regionHighlighted, t.setRegionHighlighted),
          v = t.statistic,
          m = (t.isCountryLoaded, Object(k.a)().t),
          x = Object(c.useRef)(null),
          _ = M.h[r.code],
          L = Object(s.a)(
            _.geoDataFile,
            function (t) {
              return a.a.async(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), a.a.awrap(Object(u.a)(t));
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              });
            },
            { revalidateOnFocus: !1, suspense: !0 }
          ).data,
          P = Object(c.useMemo)(
            function () {
              var t = Object.keys(O).filter(function (t) {
                return "NZ" !== t && Object.keys(M.h).includes(t);
              });
              return r.view === M.k.COUNTRY
                ? Object(j.a)(t, function (t) {
                    return I(
                      O[t],
                      v,
                      r.option === M.i.PER_MILLION ? M.e[t] : 1
                    );
                  })
                : Object(j.a)(t, function (t) {
                    var e;
                    return (
                      null === (e = O[t]) || void 0 === e ? void 0 : e.districts
                    )
                      ? Object(j.a)(Object.values(O[t].districts), function (
                          t
                        ) {
                          return I(t, v);
                        })
                      : 0;
                  });
            },
            [O, r.option, r.view, v]
          ),
          A = Object(c.useMemo)(
            function () {
              return I(
                O[r.code],
                v,
                r.option === M.i.PER_MILLION ? M.e[r.code] : 1
              );
            },
            [O, r.code, r.option, v]
          ),
          C = Object(c.useMemo)(
            function () {
              return r.option === M.i.ZONES
                ? Object(l.a)(Object.keys(M.n), Object.values(M.n))
                : r.option === M.i.HOTSPOTS
                ? Object(p.b)([0, Math.max(P, 1)], [0, 40])
                    .clamp(!0)
                    .nice(3)
                : Object(d.a)([0, Math.max(1, P)], R[v]).clamp(!0);
            },
            [r.option, v, P]
          );
        return (
          Object(c.useEffect)(function () {
            console.log(L);
            var t = N.a(
                L,
                L.objects[_.graphObjectStates || _.graphObjectDistricts]
              ),
              e = Object(g.a)(x.current),
              n = Object(T.a)().fitSize([432, 488], t),
              a = Object(E.a)(n),
              c =
                r.view === M.k.DISTRICT
                  ? N.a(L, L.objects[_.graphObjectStates]).features
                  : _.mapType === M.k.COUNTRY && r.option === M.i.HOTSPOTS
                  ? [].concat(
                      Object(i.a)(
                        N.a(L, L.objects[_.graphObjectStates]).features
                      ),
                      Object(i.a)(
                        N.a(L, L.objects[_.graphObjectDistricts]).features
                      )
                    )
                  : N.a(L, L.objects[_.graphObjectDistricts]).features;
            c = c.map(function (t) {
              var e = t.properties.district,
                n = t.properties.st_nm,
                i = Object.assign({}, t);
              return (
                (i.id = ""
                  .concat(r.code, "-")
                  .concat(n)
                  .concat(e ? "-" + e : "")),
                i
              );
            });
            var o = function (t) {
                var e,
                  n,
                  i = M.c[t.properties.st_nm],
                  a = t.properties.district,
                  c = O[i],
                  o =
                    null === c || void 0 === c
                      ? void 0
                      : null === (e = c.districts) || void 0 === e
                      ? void 0
                      : e[a];
                return 0 ===
                  (n =
                    r.option === M.i.ZONES
                      ? (null === o || void 0 === o ? void 0 : o.zone) || 0
                      : a
                      ? I(o, v)
                      : I(c, v, r.option === M.i.PER_MILLION ? M.e[i] : 1))
                  ? "#ffffff00"
                  : C(n);
              },
              s = function (t) {
                return r.option === M.i.ZONES ? "#343a40" : M.a[v];
              },
              u = Object(S.a)().duration(M.b),
              l = null;
            e
              .select(".regions")
              .selectAll("path")
              .data(r.option !== M.i.HOTSPOTS ? c : [], function (t) {
                return t.id;
              })
              .join(
                function (t) {
                  var e = t
                    .append("path")
                    .attr("d", a)
                    .attr("stroke-width", 1.8)
                    .attr("stroke-opacity", 0)
                    .style("cursor", "pointer")
                    .on("mouseenter", function (t) {
                      b({
                        stateCode: M.c[t.properties.st_nm],
                        districtName: t.properties.district,
                      });
                    })
                    .on("mouseleave", function (t) {
                      l === t && (l = null);
                    })
                    .on("touchstart", function (t) {
                      l = l === t ? null : t;
                    })
                    .attr("fill", o)
                    .attr("stroke", s);
                  return e.append("title"), e;
                },
                function (t) {
                  return t.call(function (t) {
                    return t.transition(u).attr("fill", o).attr("stroke", s);
                  });
                }
              )
              .attr("pointer-events", "all")
              .on("click", function (t) {
                var n;
                h.b.stopPropagation();
                var i = M.c[t.properties.st_nm];
                !l &&
                  _.mapType !== M.k.STATE &&
                  (null === (n = O[i]) || void 0 === n
                    ? void 0
                    : n.districts) &&
                  (e.attr("pointer-events", "none"),
                  e
                    .select(".regions")
                    .selectAll("path")
                    .attr("pointer-events", "none"),
                  f(M.c[t.properties.st_nm]));
              })
              .select("title")
              .text(function (t) {
                if (r.option === M.i.TOTAL) {
                  var e,
                    n,
                    i = t.properties.st_nm,
                    a = M.c[i],
                    c = t.properties.district,
                    o = O[a],
                    s =
                      null === o || void 0 === o
                        ? void 0
                        : null === (e = o.districts) || void 0 === e
                        ? void 0
                        : e[c];
                  return (
                    (n = I(c ? s : o, v)),
                    Object(w.f)((n / (A || 0.001)) * 100) +
                      "% from " +
                      Object(w.b)(c || i)
                  );
                }
              }),
              e
                .transition()
                .duration(_.mapType === M.k.STATE ? u.duration() / 2 : 0)
                .on("end", function () {
                  return e.attr("class", r.option === M.i.ZONES ? "zone" : "");
                });
          }),
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: "svg-parent" },
              o.a.createElement(
                "svg",
                {
                  id: "chart",
                  viewBox: "0 0 ".concat(432, " ").concat(488),
                  preserveAspectRatio: "xMidYMid meet",
                  ref: x,
                },
                o.a.createElement("g", { className: "regions" }),
                o.a.createElement("g", { className: "state-borders" }),
                r.view === M.k.DISTRICTS &&
                  o.a.createElement("g", { className: "district-borders" }),
                r.option === M.i.HOTSPOTS &&
                  o.a.createElement("g", { className: "circles" })
              ),
              _.mapType === M.k.STATE &&
                !!I(
                  null === (e = O[r.code]) || void 0 === e
                    ? void 0
                    : null === (n = e.districts) || void 0 === n
                    ? void 0
                    : n[M.m],
                  v
                ) &&
                o.a.createElement(
                  "div",
                  { className: "disclaimer" },
                  o.a.createElement(y.a, null),
                  m("District-wise {{statistic}} numbers need reconciliation", {
                    statistic: m(v),
                  })
                )
            ),
            o.a.createElement(
              "svg",
              { style: { position: "absolute", height: 0 } },
              o.a.createElement(
                "defs",
                null,
                o.a.createElement(
                  "filter",
                  { id: "balance-color", colorInterpolationFilters: "sRGB" },
                  o.a.createElement("feColorMatrix", {
                    type: "matrix",
                    values:
                      "0.91372549  0           0            0  0.08627451 0           0.91372549  0            0  0.08627451 0           0           0.854901961  0  0.145098039 0           0           0            1  0",
                  })
                )
              )
            )
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=MapVisualizer.e7979a63.chunk.js.map
