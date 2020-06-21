(this["webpackJsonpvisualizing-commuter-data"] =
  this["webpackJsonpvisualizing-commuter-data"] || []).push([
  [3],
  {
    185: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(79),
        i = a(57),
        c = a(4),
        r = a.n(c),
        l = a(12),
        s = a(19),
        o = a(118),
        u = a(119),
        d = a(84),
        b = a(188),
        m = a(95);
      var O = function (e, t, a) {
          for (
            var n = Object(c.useState)(a),
              r = Object(i.a)(n, 2),
              l = r[0],
              s = r[1],
              O = arguments.length,
              j = new Array(O > 3 ? O - 3 : 0),
              v = 3;
            v < O;
            v++
          )
            j[v - 3] = arguments[v];
          var f = m.a.apply(void 0, [e, t, l].concat(j)),
            h = f.data,
            g = f.isValidating,
            p = f.error,
            S = Object(u.a)(f, ["data", "isValidating", "error"]);
          return (
            Object(b.a)(
              function () {
                s(
                  Object(d.a)(l, function (e) {
                    e.initialData = h;
                  })
                );
              },
              [h]
            ),
            Object(o.a)({}, S, { isValidating: g, error: p, data: h })
          );
        },
        j = a(121),
        v = a(73),
        f = Object(c.lazy)(function () {
          return Promise.all([a.e(12), a.e(4)]).then(a.bind(null, 187));
        });
      t.default = function (e) {
        var t = Object(c.useState)("active"),
          a = Object(i.a)(t, 2),
          o = a[0],
          u = a[1],
          d = Object(c.useState)(null),
          b = Object(i.a)(d, 2),
          m = b[0],
          h = b[1],
          g = Object(c.useState)({ stateCode: "NZ", districtName: null }),
          p = Object(i.a)(g, 2),
          S = p[0],
          E = p[1],
          N =
            (O("http://localhost:5000/work_csv", s.c, {
              revalidateOnMount: !0,
              refreshInterval: 1e5,
              revalidateOnFocus: !1,
            }).data,
            O("https://api.covid19india.org/v3/min/timeseries.min.json", s.c, {
              revalidateOnMount: !0,
              refreshInterval: 1e5,
              revalidateOnFocus: !1,
            }).data),
          Z = Object(c.useRef)(),
          k = Object(j.useIsVisible)(Z, { once: !0 });
        return (
          ["NZ"].concat(
            Object(n.a)(
              Object(n.a)(
                new Set(
                  [].concat(
                    Object(n.a)(
                      Object.keys(l.h).filter(function (e) {
                        return "NZ" !== e;
                      })
                    ),
                    Object(n.a)(
                      Object.keys(N || {}).filter(function (e) {
                        return "NZ" !== e;
                      })
                    )
                  )
                )
              ).sort()
            )
          ),
          r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              v.a,
              null,
              r.a.createElement(
                "title",
                null,
                "Visualization of Commuter Data - NZ Stats"
              ),
              r.a.createElement("meta", {
                name: "title",
                content:
                  "Visualization of Commuter Data - New Zealand Statistics",
              })
            ),
            r.a.createElement(
              "div",
              { ref: Z },
              k &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  N &&
                    r.a.createElement(
                      c.Suspense,
                      { fallback: r.a.createElement("div", null) },
                      r.a.createElement(
                        f,
                        Object.assign(
                          { stateCode: "NZ" },
                          { education_data: N },
                          { mapStatistic: o, setMapStatistic: u },
                          { regionHighlighted: S, setRegionHighlighted: E },
                          { anchor: m, setAnchor: h }
                        )
                      )
                    )
                )
            )
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=Home.7eb0a163.chunk.js.map
