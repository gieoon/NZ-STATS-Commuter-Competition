(this["webpackJsonpvisualizing-commuter-data"] =
  this["webpackJsonpvisualizing-commuter-data"] || []).push([
  [0],
  {
    161: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(57),
        c = a(4),
        o = a.n(c),
        s = a(73);
      t.default = function (e) {
        var t = Object(c.useState)([]),
          a = Object(n.a)(t, 2),
          i = a[0],
          l = a[1];
        Object(c.useEffect)(function () {
          u();
        }, []),
          Object(c.useEffect)(function () {
            window.scrollTo(0, 0);
          }, []);
        var u = function () {
          fetch("http://localhost:5000/faq_data")
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              l(e.faq);
            })
            .catch(function (e) {
              console.log(e);
            });
        };
        return o.a.createElement(
          "div",
          { className: "FAQ" },
          o.a.createElement(
            s.a,
            null,
            o.a.createElement("title", null, "FAQ - NZ Commuter Data"),
            o.a.createElement("meta", {
              name: "title",
              content: "Visualization of Commuter data in NZ",
            })
          ),
          i.map(function (e, t) {
            return o.a.createElement(
              "div",
              {
                key: t,
                className: "faq fadeInUp",
                style: { animationDelay: "".concat(0.5 + 0.1 * t, "s") },
              },
              o.a.createElement("h2", { className: "question" }, e.question),
              o.a.createElement("h2", {
                className: "answer",
                dangerouslySetInnerHTML: { __html: e.answer },
              })
            );
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=About.a26380d0.chunk.js.map
