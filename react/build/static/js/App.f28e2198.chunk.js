(this["webpackJsonpvisualizing-commuter-data"] =
  this["webpackJsonpvisualizing-commuter-data"] || []).push([
  [1],
  {
    101: function (e, a, t) {},
    102: function (e) {
      e.exports = JSON.parse('{"english":"English"}');
    },
    184: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(4),
        l = t.n(n),
        i = (t(101), t(57)),
        r = t(102),
        c = t(157),
        o = t(158),
        u = t(159),
        s = t(160),
        m = t(186),
        d = t(66),
        p = t(96),
        v = t(156),
        b = t(181),
        E = {
          position: "absolute",
          transform: "translate3d(-20rem, 0, 0)",
          height: "100vh",
          zIndex: -1,
        },
        f = { position: "absolute", transform: "translate3d(10rem, 0, 0)" },
        h = {
          opacity: 1,
          position: "absolute",
          height: "100vh",
          top: 64,
          zIndex: 999,
        },
        g = {
          opacity: 1,
          position: "absolute",
          height: "100vh",
          top: 64,
          zIndex: 999,
        };
      function w(e) {
        var a = e.pages,
          t = e.setExpand,
          i = e.darkMode,
          r = e.windowSize,
          c = Object(n.useRef)(null),
          o = Object(m.a)().t;
        return l.a.createElement(
          "div",
          {
            className: "expand",
            ref: c,
            onMouseLeave: function () {
              r.width > 768 && t(!1);
            },
          },
          a.map(function (e, a) {
            return !0 === e.showInNavbar
              ? l.a.createElement(
                  d.b,
                  {
                    to: e.pageLink,
                    key: a,
                    onClick: function () {
                      t(!1);
                    },
                  },
                  l.a.createElement(
                    "span",
                    y(e.pageLink, e.animationDelayForNavbar),
                    o(e.displayName)
                  )
                )
              : null;
          }),
          r.width < 768 && l.a.createElement(O, { darkMode: i }),
          l.a.createElement(
            "div",
            { className: "expand-bottom" },
            l.a.createElement("h5", null, o("Powered by NZ Stats"))
          )
        );
      }
      var k = function (e) {
          var a,
            t = e.pages,
            u = e.darkMode,
            s = (e.showLanguageSwitcher, e.setShowLanguageSwitcher),
            k = Object(m.a)(),
            y = k.i18n,
            j = k.t,
            z = Object.keys(r).includes(
              null === y || void 0 === y ? void 0 : y.language
            )
              ? null === y || void 0 === y
                ? void 0
                : y.language
              : null === y || void 0 === y
              ? void 0
              : null === (a = y.options) || void 0 === a
              ? void 0
              : a.fallbackLng[0],
            S = Object(n.useState)(!1),
            M = Object(i.a)(S, 2),
            x = M[0],
            C = M[1];
          Object(v.a)(x);
          var L = Object(b.a)(),
            I = Object(p.b)(function () {
              return { opacity: 0 };
            }),
            J = Object(i.a)(I, 3),
            Z = J[0],
            D = J[1],
            F = J[2];
          D({ opacity: 1 }), F();
          var A = Object(p.d)(x, null, {
            from: L.width < 769 ? h : E,
            enter: L.width < 769 ? g : f,
            leave: L.width < 769 ? h : E,
            config: { mass: 1, tension: 210, friction: 26 },
          });
          return l.a.createElement(
            p.a.div,
            { className: "Navbar", style: Z },
            l.a.createElement(
              "div",
              {
                className: "navbar-left",
                onClick: function () {
                  s(function (e) {
                    return !e;
                  });
                },
              },
              r[z]
            ),
            l.a.createElement(
              "div",
              { className: "navbar-middle" },
              l.a.createElement(
                d.b,
                {
                  to: "/",
                  onClick: function () {
                    C(!1);
                  },
                },
                "Commuter",
                l.a.createElement("span", null, " New Zealand")
              )
            ),
            l.a.createElement(
              "div",
              {
                className: "navbar-right",
                onClick: function () {
                  C(!x);
                },
                onMouseEnter: function () {
                  L.width > 769 && C(!0);
                },
              },
              L.width < 769 &&
                l.a.createElement("span", null, j(x ? "Close" : "Menu")),
              L.width > 769 &&
                l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(
                    "span",
                    null,
                    l.a.createElement(
                      d.b,
                      { to: "/" },
                      l.a.createElement(c.a, N("/"))
                    )
                  ),
                  l.a.createElement(
                    "span",
                    null,
                    l.a.createElement(
                      d.b,
                      { to: "/about" },
                      l.a.createElement(o.a, N("/about"))
                    )
                  ),
                  l.a.createElement(
                    "span",
                    null,
                    L.width > 768 && l.a.createElement(O, { darkMode: u })
                  )
                )
            ),
            A.map(function (e) {
              var a = e.item,
                n = e.key,
                i = e.props;
              return a
                ? l.a.createElement(
                    p.a.div,
                    { key: n, style: i },
                    l.a.createElement(w, {
                      pages: t,
                      setExpand: C,
                      darkMode: u,
                      windowSize: L,
                    })
                  )
                : l.a.createElement(p.a.div, { key: n, style: i });
            })
          );
        },
        y = function (e, a) {
          return {
            className: "".concat(
              window.location.pathname === e ? "focused" : ""
            ),
          };
        },
        N = function (e) {
          return {
            style: { stroke: window.location.pathname === e ? "#4c75f2" : "" },
          };
        },
        O = function (e) {
          var a = e.darkMode;
          return l.a.createElement(
            "div",
            {
              className: "SunMoon",
              onClick: function () {
                a.toggle();
              },
            },
            l.a.createElement(
              "div",
              null,
              a.value
                ? l.a.createElement(u.a, { color: "#ffc107" })
                : l.a.createElement(s.a, null)
            )
          );
        },
        j = t(73),
        z = t(53);
      function S() {
        var e = Object(z.h)().pathname;
        return (
          Object(n.useEffect)(
            function () {
              window.scrollTo(0, 0);
            },
            [e]
          ),
          null
        );
      }
      var M = t(116),
        x = {
          "@context": "http://schema.org/",
          "@type": "GO",
          name: "Visualizing Commuter Data | NZ Statistics",
          alternateName: "NZ Commuter Visualization",
          url: "http://nz-commuter.com",
          image: "",
        },
        C = Object(n.lazy)(function () {
          return Promise.all([t.e(11), t.e(3)]).then(t.bind(null, 185));
        }),
        L = Object(n.lazy)(function () {
          return t.e(0).then(t.bind(null, 161));
        }),
        I = Object(n.lazy)(function () {
          return t.e(2).then(t.bind(null, 162));
        });
      a.default = function () {
        var e = Object(M.a)(!1),
          a = [
            { pageLink: "/", view: C, displayName: "Home", showInNavbar: !0 },
            {
              pageLink: "/about",
              view: L,
              displayName: "About",
              showInNavbar: !0,
            },
            {
              pageLink: "/district/:districtCode",
              view: I,
              displayName: "Regional District",
              showInNavbar: !1,
            },
          ];
        return l.a.createElement(
          "div",
          { className: "App" },
          l.a.createElement(
            j.a,
            null,
            l.a.createElement(
              "script",
              { type: "application/ld+json" },
              JSON.stringify(x)
            )
          ),
          l.a.createElement(
            n.Suspense,
            { fallback: l.a.createElement("div", null) },
            l.a.createElement(
              d.a,
              null,
              l.a.createElement(S, null),
              l.a.createElement(
                k,
                Object.assign({ pages: a }, { darkMode: e })
              ),
              l.a.createElement(z.b, {
                render: function (e) {
                  var t = e.location;
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      z.d,
                      { location: t },
                      a.map(function (e, a) {
                        return l.a.createElement(z.b, {
                          exact: !0,
                          path: e.pageLink,
                          render: function (a) {
                            a.match;
                            return l.a.createElement(e.view, null);
                          },
                          key: a,
                        });
                      }),
                      l.a.createElement(z.a, { to: "/" })
                    )
                  );
                },
              })
            )
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=App.f28e2198.chunk.js.map
