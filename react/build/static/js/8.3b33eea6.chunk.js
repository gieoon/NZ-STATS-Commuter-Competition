(this["webpackJsonpvisualizing-commuter-data"] =
  this["webpackJsonpvisualizing-commuter-data"] || []).push([
  [8],
  Array(52).concat([
    function (t, n, e) {
      "use strict";
      e.d(n, "h", function () {
        return r;
      }),
        e.d(n, "l", function () {
          return i;
        }),
        e.d(n, "j", function () {
          return o;
        }),
        e.d(n, "m", function () {
          return a;
        }),
        e.d(n, "s", function () {
          return u;
        }),
        e.d(n, "g", function () {
          return c;
        }),
        e.d(n, "n", function () {
          return f;
        }),
        e.d(n, "a", function () {
          return l;
        }),
        e.d(n, "d", function () {
          return s;
        }),
        e.d(n, "e", function () {
          return h;
        }),
        e.d(n, "f", function () {
          return p;
        }),
        e.d(n, "i", function () {
          return d;
        }),
        e.d(n, "k", function () {
          return v;
        }),
        e.d(n, "p", function () {
          return g;
        }),
        e.d(n, "o", function () {
          return y;
        }),
        e.d(n, "q", function () {
          return b;
        }),
        e.d(n, "r", function () {
          return m;
        }),
        e.d(n, "b", function () {
          return w;
        }),
        e.d(n, "c", function () {
          return _;
        });
      var r = 1e-6,
        i = Math.PI,
        o = i / 2,
        a = i / 4,
        u = 2 * i,
        c = 180 / i,
        f = i / 180,
        l = Math.abs,
        s = Math.atan,
        h = Math.atan2,
        p = Math.cos,
        d = (Math.ceil, Math.exp),
        v = (Math.floor, Math.log),
        g = (Math.pow, Math.sin),
        y =
          Math.sign ||
          function (t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
          },
        b = Math.sqrt,
        m = Math.tan;
      function w(t) {
        return t > 1 ? 0 : t < -1 ? i : Math.acos(t);
      }
      function _(t) {
        return t > 1 ? o : t < -1 ? -o : Math.asin(t);
      }
    },
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      function r(t, n) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(n).domain(t);
        }
        return this;
      }
      function i(t, n) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            "function" === typeof t ? this.interpolator(t) : this.range(t);
            break;
          default:
            this.domain(t),
              "function" === typeof n ? this.interpolator(n) : this.range(n);
        }
        return this;
      }
      e.d(n, "b", function () {
        return r;
      }),
        e.d(n, "a", function () {
          return i;
        });
    },
    ,
    ,
    function (t, n, e) {
      "use strict";
      n.a = function (t) {
        for (var n = (t.length / 6) | 0, e = new Array(n), r = 0; r < n; )
          e[r] = "#" + t.slice(6 * r, 6 * ++r);
        return e;
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(149);
      n.a = function (t) {
        return Object(r.b)(t[t.length - 1]);
      };
    },
    function (t, n, e) {
      "use strict";
      function r() {}
      e.d(n, "a", function () {
        return r;
      });
    },
    function (t, n, e) {
      "use strict";
      var r = function (t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      };
      var i = (function (t) {
          var n;
          return (
            1 === t.length &&
              ((n = t),
              (t = function (t, e) {
                return r(n(t), e);
              })),
            {
              left: function (n, e, r, i) {
                for (
                  null == r && (r = 0), null == i && (i = n.length);
                  r < i;

                ) {
                  var o = (r + i) >>> 1;
                  t(n[o], e) < 0 ? (r = o + 1) : (i = o);
                }
                return r;
              },
              right: function (n, e, r, i) {
                for (
                  null == r && (r = 0), null == i && (i = n.length);
                  r < i;

                ) {
                  var o = (r + i) >>> 1;
                  t(n[o], e) > 0 ? (i = o) : (r = o + 1);
                }
                return r;
              },
            }
          );
        })(r),
        o = i.right,
        a = (i.left, o),
        u = e(182),
        c = e(75),
        f = e(174),
        l = function (t) {
          return +t;
        };
      e.d(n, "c", function () {
        return h;
      }),
        e.d(n, "a", function () {
          return g;
        }),
        e.d(n, "d", function () {
          return y;
        }),
        e.d(n, "b", function () {
          return b;
        });
      var s = [0, 1];
      function h(t) {
        return t;
      }
      function p(t, n) {
        return (n -= t = +t)
          ? function (e) {
              return (e - t) / n;
            }
          : ((e = isNaN(n) ? NaN : 0.5),
            function () {
              return e;
            });
        var e;
      }
      function d(t, n, e) {
        var r = t[0],
          i = t[1],
          o = n[0],
          a = n[1];
        return (
          i < r
            ? ((r = p(i, r)), (o = e(a, o)))
            : ((r = p(r, i)), (o = e(o, a))),
          function (t) {
            return o(r(t));
          }
        );
      }
      function v(t, n, e) {
        var r = Math.min(t.length, n.length) - 1,
          i = new Array(r),
          o = new Array(r),
          u = -1;
        for (
          t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
          ++u < r;

        )
          (i[u] = p(t[u], t[u + 1])), (o[u] = e(n[u], n[u + 1]));
        return function (n) {
          var e = a(t, n, 1, r) - 1;
          return o[e](i[e](n));
        };
      }
      function g(t, n) {
        return n
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function y() {
        var t,
          n,
          e,
          r,
          i,
          o,
          a = s,
          p = s,
          g = u.a,
          y = h;
        function b() {
          var t = Math.min(a.length, p.length);
          return (
            y !== h &&
              (y = (function (t, n) {
                var e;
                return (
                  t > n && ((e = t), (t = n), (n = e)),
                  function (e) {
                    return Math.max(t, Math.min(n, e));
                  }
                );
              })(a[0], a[t - 1])),
            (r = t > 2 ? v : d),
            (i = o = null),
            m
          );
        }
        function m(n) {
          return isNaN((n = +n)) ? e : (i || (i = r(a.map(t), p, g)))(t(y(n)));
        }
        return (
          (m.invert = function (e) {
            return y(n((o || (o = r(p, a.map(t), c.a)))(e)));
          }),
          (m.domain = function (t) {
            return arguments.length ? ((a = Array.from(t, l)), b()) : a.slice();
          }),
          (m.range = function (t) {
            return arguments.length ? ((p = Array.from(t)), b()) : p.slice();
          }),
          (m.rangeRound = function (t) {
            return (p = Array.from(t)), (g = f.a), b();
          }),
          (m.clamp = function (t) {
            return arguments.length ? ((y = !!t || h), b()) : y !== h;
          }),
          (m.interpolate = function (t) {
            return arguments.length ? ((g = t), b()) : g;
          }),
          (m.unknown = function (t) {
            return arguments.length ? ((e = t), m) : e;
          }),
          function (e, r) {
            return (t = e), (n = r), b();
          }
        );
      }
      function b() {
        return y()(h, h);
      }
    },
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      var r = e(76);
      n.a = function (t) {
        return (t = Object(r.a)(Math.abs(t))) ? t[1] : NaN;
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      n.a = function (t, n) {
        return (
          (t = +t),
          (n = +n),
          function (e) {
            return t * (1 - e) + n * e;
          }
        );
      };
    },
    function (t, n, e) {
      "use strict";
      n.a = function (t, n) {
        if (
          (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf(
            "e"
          )) < 0
        )
          return null;
        var e,
          r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
      };
    },
    function (t, n, e) {
      "use strict";
      function r() {
        this.reset();
      }
      (n.a = function () {
        return new r();
      }),
        (r.prototype = {
          constructor: r,
          reset: function () {
            this.s = this.t = 0;
          },
          add: function (t) {
            o(i, t, this.t),
              o(this, i.s, this.s),
              this.s ? (this.t += i.t) : (this.s = i.t);
          },
          valueOf: function () {
            return this.s;
          },
        });
      var i = new r();
      function o(t, n, e) {
        var r = (t.s = n + e),
          i = r - n,
          o = r - i;
        t.t = n - o + (e - i);
      }
    },
    function (t, n, e) {
      "use strict";
      var r = e(175),
        i = (e(62), e(56), e(145)),
        o = e(68),
        a = e(179),
        u = function (t, n, e, u) {
          var c,
            f = Object(r.c)(t, n, e);
          switch ((u = Object(i.a)(null == u ? ",f" : u)).type) {
            case "s":
              var l = Math.max(Math.abs(t), Math.abs(n));
              return (
                null != u.precision ||
                  isNaN(
                    (c = (function (t, n) {
                      return Math.max(
                        0,
                        3 *
                          Math.max(
                            -8,
                            Math.min(8, Math.floor(Object(o.a)(n) / 3))
                          ) -
                          Object(o.a)(Math.abs(t))
                      );
                    })(f, l))
                  ) ||
                  (u.precision = c),
                Object(a.b)(u, l)
              );
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
              null != u.precision ||
                isNaN(
                  (c = (function (t, n) {
                    return (
                      (t = Math.abs(t)),
                      (n = Math.abs(n) - t),
                      Math.max(0, Object(o.a)(n) - Object(o.a)(t)) + 1
                    );
                  })(f, Math.max(Math.abs(t), Math.abs(n))))
                ) ||
                (u.precision = c - ("e" === u.type));
              break;
            case "f":
            case "%":
              null != u.precision ||
                isNaN(
                  (c = (function (t) {
                    return Math.max(0, -Object(o.a)(Math.abs(t)));
                  })(f))
                ) ||
                (u.precision = c - 2 * ("%" === u.type));
          }
          return Object(a.a)(u);
        };
      function c(t) {
        var n = t.domain;
        return (
          (t.ticks = function (t) {
            var e = n();
            return Object(r.a)(e[0], e[e.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, e) {
            var r = n();
            return u(r[0], r[r.length - 1], null == t ? 10 : t, e);
          }),
          (t.nice = function (e) {
            null == e && (e = 10);
            var i,
              o = n(),
              a = 0,
              u = o.length - 1,
              c = o[a],
              f = o[u];
            return (
              f < c && ((i = c), (c = f), (f = i), (i = a), (a = u), (u = i)),
              (i = Object(r.b)(c, f, e)) > 0
                ? ((c = Math.floor(c / i) * i),
                  (f = Math.ceil(f / i) * i),
                  (i = Object(r.b)(c, f, e)))
                : i < 0 &&
                  ((c = Math.ceil(c * i) / i),
                  (f = Math.floor(f * i) / i),
                  (i = Object(r.b)(c, f, e))),
              i > 0
                ? ((o[a] = Math.floor(c / i) * i),
                  (o[u] = Math.ceil(f / i) * i),
                  n(o))
                : i < 0 &&
                  ((o[a] = Math.ceil(c * i) / i),
                  (o[u] = Math.floor(f * i) / i),
                  n(o)),
              t
            );
          }),
          t
        );
      }
      e.d(n, "a", function () {
        return c;
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      n.a = function (t) {
        return function () {
          return t;
        };
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(89);
      n.a = function (t) {
        var n = (t += ""),
          e = n.indexOf(":");
        return (
          e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
          r.a.hasOwnProperty(n) ? { space: r.a[n], local: t } : t
        );
      };
    },
    function (t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return r;
      });
      var r = "http://www.w3.org/1999/xhtml";
      n.a = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: r,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      };
    },
    function (t, n, e) {
      "use strict";
      function r() {}
      n.a = function (t) {
        return null == t
          ? r
          : function () {
              return this.querySelector(t);
            };
      };
    },
    function (t, n, e) {
      "use strict";
      n.a = function (t) {
        return (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          (t.document && t) ||
          t.defaultView
        );
      };
    },
    function (t, n, e) {
      "use strict";
      n.a = function (t) {
        return t;
      };
    },
    function (t, n, e) {
      "use strict";
      function r(t, n) {
        t && o.hasOwnProperty(t.type) && o[t.type](t, n);
      }
      var i = {
          Feature: function (t, n) {
            r(t.geometry, n);
          },
          FeatureCollection: function (t, n) {
            for (var e = t.features, i = -1, o = e.length; ++i < o; )
              r(e[i].geometry, n);
          },
        },
        o = {
          Sphere: function (t, n) {
            n.sphere();
          },
          Point: function (t, n) {
            (t = t.coordinates), n.point(t[0], t[1], t[2]);
          },
          MultiPoint: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              (t = e[r]), n.point(t[0], t[1], t[2]);
          },
          LineString: function (t, n) {
            a(t.coordinates, n, 0);
          },
          MultiLineString: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              a(e[r], n, 0);
          },
          Polygon: function (t, n) {
            u(t.coordinates, n);
          },
          MultiPolygon: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              u(e[r], n);
          },
          GeometryCollection: function (t, n) {
            for (var e = t.geometries, i = -1, o = e.length; ++i < o; )
              r(e[i], n);
          },
        };
      function a(t, n, e) {
        var r,
          i = -1,
          o = t.length - e;
        for (n.lineStart(); ++i < o; ) (r = t[i]), n.point(r[0], r[1], r[2]);
        n.lineEnd();
      }
      function u(t, n) {
        var e = -1,
          r = t.length;
        for (n.polygonStart(); ++e < r; ) a(t[e], n, 1);
        n.polygonEnd();
      }
      n.a = function (t, n) {
        t && i.hasOwnProperty(t.type) ? i[t.type](t, n) : r(t, n);
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(61),
        i = 1 / 0,
        o = i,
        a = -i,
        u = a,
        c = {
          point: function (t, n) {
            t < i && (i = t);
            t > a && (a = t);
            n < o && (o = n);
            n > u && (u = n);
          },
          lineStart: r.a,
          lineEnd: r.a,
          polygonStart: r.a,
          polygonEnd: r.a,
          result: function () {
            var t = [
              [i, o],
              [a, u],
            ];
            return (a = u = -(o = i = 1 / 0)), t;
          },
        };
      n.a = c;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      t.exports = e(138);
    },
    function (t, n, e) {
      var r = (function (t) {
        "use strict";
        var n = Object.prototype,
          e = n.hasOwnProperty,
          r = "function" === typeof Symbol ? Symbol : {},
          i = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          a = r.toStringTag || "@@toStringTag";
        function u(t, n, e, r) {
          var i = n && n.prototype instanceof l ? n : l,
            o = Object.create(i.prototype),
            a = new j(r || []);
          return (
            (o._invoke = (function (t, n, e) {
              var r = "suspendedStart";
              return function (i, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === i) throw o;
                  return x();
                }
                for (e.method = i, e.arg = o; ; ) {
                  var a = e.delegate;
                  if (a) {
                    var u = m(a, e);
                    if (u) {
                      if (u === f) continue;
                      return u;
                    }
                  }
                  if ("next" === e.method) e.sent = e._sent = e.arg;
                  else if ("throw" === e.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), e.arg);
                    e.dispatchException(e.arg);
                  } else "return" === e.method && e.abrupt("return", e.arg);
                  r = "executing";
                  var l = c(t, n, e);
                  if ("normal" === l.type) {
                    if (
                      ((r = e.done ? "completed" : "suspendedYield"),
                      l.arg === f)
                    )
                      continue;
                    return { value: l.arg, done: e.done };
                  }
                  "throw" === l.type &&
                    ((r = "completed"), (e.method = "throw"), (e.arg = l.arg));
                }
              };
            })(t, e, a)),
            o
          );
        }
        function c(t, n, e) {
          try {
            return { type: "normal", arg: t.call(n, e) };
          } catch (r) {
            return { type: "throw", arg: r };
          }
        }
        t.wrap = u;
        var f = {};
        function l() {}
        function s() {}
        function h() {}
        var p = {};
        p[i] = function () {
          return this;
        };
        var d = Object.getPrototypeOf,
          v = d && d(d(O([])));
        v && v !== n && e.call(v, i) && (p = v);
        var g = (h.prototype = l.prototype = Object.create(p));
        function y(t) {
          ["next", "throw", "return"].forEach(function (n) {
            t[n] = function (t) {
              return this._invoke(n, t);
            };
          });
        }
        function b(t) {
          var n;
          this._invoke = function (r, i) {
            function o() {
              return new Promise(function (n, o) {
                !(function n(r, i, o, a) {
                  var u = c(t[r], t, i);
                  if ("throw" !== u.type) {
                    var f = u.arg,
                      l = f.value;
                    return l && "object" === typeof l && e.call(l, "__await")
                      ? Promise.resolve(l.__await).then(
                          function (t) {
                            n("next", t, o, a);
                          },
                          function (t) {
                            n("throw", t, o, a);
                          }
                        )
                      : Promise.resolve(l).then(
                          function (t) {
                            (f.value = t), o(f);
                          },
                          function (t) {
                            return n("throw", t, o, a);
                          }
                        );
                  }
                  a(u.arg);
                })(r, i, n, o);
              });
            }
            return (n = n ? n.then(o, o) : o());
          };
        }
        function m(t, n) {
          var e = t.iterator[n.method];
          if (void 0 === e) {
            if (((n.delegate = null), "throw" === n.method)) {
              if (
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = void 0),
                m(t, n),
                "throw" === n.method)
              )
                return f;
              (n.method = "throw"),
                (n.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var r = c(e, t.iterator, n.arg);
          if ("throw" === r.type)
            return (
              (n.method = "throw"), (n.arg = r.arg), (n.delegate = null), f
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((n[t.resultName] = i.value),
                (n.next = t.nextLoc),
                "return" !== n.method &&
                  ((n.method = "next"), (n.arg = void 0)),
                (n.delegate = null),
                f)
              : i
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              f);
        }
        function w(t) {
          var n = { tryLoc: t[0] };
          1 in t && (n.catchLoc = t[1]),
            2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
            this.tryEntries.push(n);
        }
        function _(t) {
          var n = t.completion || {};
          (n.type = "normal"), delete n.arg, (t.completion = n);
        }
        function j(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(w, this),
            this.reset(!0);
        }
        function O(t) {
          if (t) {
            var n = t[i];
            if (n) return n.call(t);
            if ("function" === typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function n() {
                  for (; ++r < t.length; )
                    if (e.call(t, r)) return (n.value = t[r]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          return { next: x };
        }
        function x() {
          return { value: void 0, done: !0 };
        }
        return (
          (s.prototype = g.constructor = h),
          (h.constructor = s),
          (h[a] = s.displayName = "GeneratorFunction"),
          (t.isGeneratorFunction = function (t) {
            var n = "function" === typeof t && t.constructor;
            return (
              !!n &&
              (n === s || "GeneratorFunction" === (n.displayName || n.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, h)
                : ((t.__proto__ = h), a in t || (t[a] = "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          y(b.prototype),
          (b.prototype[o] = function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (n, e, r, i) {
            var o = new b(u(n, e, r, i));
            return t.isGeneratorFunction(e)
              ? o
              : o.next().then(function (t) {
                  return t.done ? t.value : o.next();
                });
          }),
          y(g),
          (g[a] = "Generator"),
          (g[i] = function () {
            return this;
          }),
          (g.toString = function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var n = [];
            for (var e in t) n.push(e);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = O),
          (j.prototype = {
            constructor: j,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(_),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    e.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function r(e, r) {
                return (
                  (a.type = "throw"),
                  (a.arg = t),
                  (n.next = e),
                  r && ((n.method = "next"), (n.arg = void 0)),
                  !!r
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  a = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var u = e.call(o, "catchLoc"),
                    c = e.call(o, "finallyLoc");
                  if (u && c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (u) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, n) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r];
                if (
                  i.tryLoc <= this.prev &&
                  e.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= n &&
                n <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = n),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(a)
              );
            },
            complete: function (t, n) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && n && (this.next = n),
                f
              );
            },
            finish: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.finallyLoc === t)
                  return this.complete(e.completion, e.afterLoc), _(e), f;
              }
            },
            catch: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.tryLoc === t) {
                  var r = e.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    _(e);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, e) {
              return (
                (this.delegate = { iterator: O(t), resultName: n, nextLoc: e }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = r;
      } catch (i) {
        Function("r", "regeneratorRuntime = r")(r);
      }
    },
    function (t, n, e) {
      "use strict";
      var r = e(75),
        i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        o = new RegExp(i.source, "g");
      n.a = function (t, n) {
        var e,
          a,
          u,
          c = (i.lastIndex = o.lastIndex = 0),
          f = -1,
          l = [],
          s = [];
        for (t += "", n += ""; (e = i.exec(t)) && (a = o.exec(n)); )
          (u = a.index) > c &&
            ((u = n.slice(c, u)), l[f] ? (l[f] += u) : (l[++f] = u)),
            (e = e[0]) === (a = a[0])
              ? l[f]
                ? (l[f] += a)
                : (l[++f] = a)
              : ((l[++f] = null), s.push({ i: f, x: Object(r.a)(e, a) })),
            (c = o.lastIndex);
        return (
          c < n.length && ((u = n.slice(c)), l[f] ? (l[f] += u) : (l[++f] = u)),
          l.length < 2
            ? s[0]
              ? (function (t) {
                  return function (n) {
                    return t(n) + "";
                  };
                })(s[0].x)
              : (function (t) {
                  return function () {
                    return t;
                  };
                })(n)
            : ((n = s.length),
              function (t) {
                for (var e, r = 0; r < n; ++r) l[(e = s[r]).i] = e.x(t);
                return l.join("");
              })
        );
      };
    },
    function (t, n, e) {
      "use strict";
      n.a = function (t) {
        return function () {
          return this.matches(t);
        };
      };
    },
    function (t, n, e) {
      "use strict";
      function r() {
        return [];
      }
      n.a = function (t) {
        return null == t
          ? r
          : function () {
              return this.querySelectorAll(t);
            };
      };
    },
    function (t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return u;
      });
      var r = e(91);
      function i(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function o(t, n, e) {
        return function () {
          this.style.setProperty(t, n, e);
        };
      }
      function a(t, n, e) {
        return function () {
          var r = n.apply(this, arguments);
          null == r
            ? this.style.removeProperty(t)
            : this.style.setProperty(t, r, e);
        };
      }
      function u(t, n) {
        return (
          t.style.getPropertyValue(n) ||
          Object(r.a)(t).getComputedStyle(t, null).getPropertyValue(n)
        );
      }
      n.a = function (t, n, e) {
        return arguments.length > 1
          ? this.each(
              (null == n ? i : "function" === typeof n ? a : o)(
                t,
                n,
                null == e ? "" : e
              )
            )
          : u(this.node(), t);
      };
    },
    function (t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return i;
      });
      var r = {},
        i = null;
      "undefined" !== typeof document &&
        ("onmouseenter" in document.documentElement ||
          (r = { mouseenter: "mouseover", mouseleave: "mouseout" }));
      function o(t, n, e) {
        return (
          (t = a(t, n, e)),
          function (n) {
            var e = n.relatedTarget;
            (e && (e === this || 8 & e.compareDocumentPosition(this))) ||
              t.call(this, n);
          }
        );
      }
      function a(t, n, e) {
        return function (r) {
          var o = i;
          i = r;
          try {
            t.call(this, this.__data__, n, e);
          } finally {
            i = o;
          }
        };
      }
      function u(t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = "",
              e = t.indexOf(".");
            return (
              e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
              { type: t, name: n }
            );
          });
      }
      function c(t) {
        return function () {
          var n = this.__on;
          if (n) {
            for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
              (e = n[r]),
                (t.type && e.type !== t.type) || e.name !== t.name
                  ? (n[++i] = e)
                  : this.removeEventListener(e.type, e.listener, e.capture);
            ++i ? (n.length = i) : delete this.__on;
          }
        };
      }
      function f(t, n, e) {
        var i = r.hasOwnProperty(t.type) ? o : a;
        return function (r, o, a) {
          var u,
            c = this.__on,
            f = i(n, o, a);
          if (c)
            for (var l = 0, s = c.length; l < s; ++l)
              if ((u = c[l]).type === t.type && u.name === t.name)
                return (
                  this.removeEventListener(u.type, u.listener, u.capture),
                  this.addEventListener(
                    u.type,
                    (u.listener = f),
                    (u.capture = e)
                  ),
                  void (u.value = n)
                );
          this.addEventListener(t.type, f, e),
            (u = {
              type: t.type,
              name: t.name,
              value: n,
              listener: f,
              capture: e,
            }),
            c ? c.push(u) : (this.__on = [u]);
        };
      }
      n.a = function (t, n, e) {
        var r,
          i,
          o = u(t + ""),
          a = o.length;
        if (!(arguments.length < 2)) {
          for (l = n ? f : c, null == e && (e = !1), r = 0; r < a; ++r)
            this.each(l(o[r], n, e));
          return this;
        }
        var l = this.node().__on;
        if (l)
          for (var s, h = 0, p = l.length; h < p; ++h)
            for (r = 0, s = l[h]; r < a; ++r)
              if ((i = o[r]).type === s.type && i.name === s.name)
                return s.value;
      };
    },
    function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return f;
      }),
        e.d(n, "b", function () {
          return s;
        });
      var r = e(78),
        i = e(62),
        o = e(56);
      function a(t) {
        return function (n) {
          return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
        };
      }
      function u(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function c(t) {
        return t < 0 ? -t * t : t * t;
      }
      function f(t) {
        var n = t(i.c, i.c),
          e = 1;
        function o() {
          return 1 === e
            ? t(i.c, i.c)
            : 0.5 === e
            ? t(u, c)
            : t(a(e), a(1 / e));
        }
        return (
          (n.exponent = function (t) {
            return arguments.length ? ((e = +t), o()) : e;
          }),
          Object(r.a)(n)
        );
      }
      function l() {
        var t = f(Object(i.d)());
        return (
          (t.copy = function () {
            return Object(i.a)(t, l()).exponent(t.exponent());
          }),
          o.b.apply(t, arguments),
          t
        );
      }
      function s() {
        return l.apply(null, arguments).exponent(0.5);
      }
    },
    function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return i;
      });
      var r = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function i(t) {
        if (!(n = r.exec(t))) throw new Error("invalid format: " + t);
        var n;
        return new o({
          fill: n[1],
          align: n[2],
          sign: n[3],
          symbol: n[4],
          zero: n[5],
          width: n[6],
          comma: n[7],
          precision: n[8] && n[8].slice(1),
          trim: n[9],
          type: n[10],
        });
      }
      function o(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
          (this.align = void 0 === t.align ? ">" : t.align + ""),
          (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
          (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? "" : t.type + "");
      }
      (i.prototype = o.prototype),
        (o.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
    },
    function (t, n, e) {
      "use strict";
      var r = function (t) {
          return t;
        },
        i = function (t) {
          if (null == t) return r;
          var n,
            e,
            i = t.scale[0],
            o = t.scale[1],
            a = t.translate[0],
            u = t.translate[1];
          return function (t, r) {
            r || (n = e = 0);
            var c = 2,
              f = t.length,
              l = new Array(f);
            for (
              l[0] = (n += t[0]) * i + a, l[1] = (e += t[1]) * o + u;
              c < f;

            )
              (l[c] = t[c]), ++c;
            return l;
          };
        },
        o = function (t, n) {
          return "GeometryCollection" === n.type
            ? {
                type: "FeatureCollection",
                features: n.geometries.map(function (n) {
                  return a(t, n);
                }),
              }
            : a(t, n);
        };
      function a(t, n) {
        var e = n.id,
          r = n.bbox,
          i = null == n.properties ? {} : n.properties,
          o = u(t, n);
        return null == e && null == r
          ? { type: "Feature", properties: i, geometry: o }
          : null == r
          ? { type: "Feature", id: e, properties: i, geometry: o }
          : { type: "Feature", id: e, bbox: r, properties: i, geometry: o };
      }
      function u(t, n) {
        var e = i(t.transform),
          r = t.arcs;
        function o(t, n) {
          n.length && n.pop();
          for (var i = r[t < 0 ? ~t : t], o = 0, a = i.length; o < a; ++o)
            n.push(e(i[o], o));
          t < 0 &&
            (function (t, n) {
              for (var e, r = t.length, i = r - n; i < --r; )
                (e = t[i]), (t[i++] = t[r]), (t[r] = e);
            })(n, a);
        }
        function a(t) {
          return e(t);
        }
        function u(t) {
          for (var n = [], e = 0, r = t.length; e < r; ++e) o(t[e], n);
          return n.length < 2 && n.push(n[0]), n;
        }
        function c(t) {
          for (var n = u(t); n.length < 4; ) n.push(n[0]);
          return n;
        }
        function f(t) {
          return t.map(c);
        }
        return (function t(n) {
          var e,
            r = n.type;
          switch (r) {
            case "GeometryCollection":
              return { type: r, geometries: n.geometries.map(t) };
            case "Point":
              e = a(n.coordinates);
              break;
            case "MultiPoint":
              e = n.coordinates.map(a);
              break;
            case "LineString":
              e = u(n.arcs);
              break;
            case "MultiLineString":
              e = n.arcs.map(u);
              break;
            case "Polygon":
              e = f(n.arcs);
              break;
            case "MultiPolygon":
              e = n.arcs.map(f);
              break;
            default:
              return null;
          }
          return { type: r, coordinates: e };
        })(n);
      }
      var c = new ArrayBuffer(16);
      new Float64Array(c), new Uint32Array(c);
      Math.PI, Math.abs, Math.atan2, Math.cos, Math.sin;
      e.d(n, "a", function () {
        return o;
      });
    },
    function (t, n, e) {
      "use strict";
      var r = e(148),
        i = { value: function () {} };
      function o() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
          if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t))
            throw new Error("illegal type: " + t);
          r[t] = [];
        }
        return new a(r);
      }
      function a(t) {
        this._ = t;
      }
      function u(t, n) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var e = "",
              r = t.indexOf(".");
            if (
              (r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))),
              t && !n.hasOwnProperty(t))
            )
              throw new Error("unknown type: " + t);
            return { type: t, name: e };
          });
      }
      function c(t, n) {
        for (var e, r = 0, i = t.length; r < i; ++r)
          if ((e = t[r]).name === n) return e.value;
      }
      function f(t, n, e) {
        for (var r = 0, o = t.length; r < o; ++r)
          if (t[r].name === n) {
            (t[r] = i), (t = t.slice(0, r).concat(t.slice(r + 1)));
            break;
          }
        return null != e && t.push({ name: n, value: e }), t;
      }
      a.prototype = o.prototype = {
        constructor: a,
        on: function (t, n) {
          var e,
            r = this._,
            i = u(t + "", r),
            o = -1,
            a = i.length;
          if (!(arguments.length < 2)) {
            if (null != n && "function" !== typeof n)
              throw new Error("invalid callback: " + n);
            for (; ++o < a; )
              if ((e = (t = i[o]).type)) r[e] = f(r[e], t.name, n);
              else if (null == n) for (e in r) r[e] = f(r[e], t.name, null);
            return this;
          }
          for (; ++o < a; )
            if ((e = (t = i[o]).type) && (e = c(r[e], t.name))) return e;
        },
        copy: function () {
          var t = {},
            n = this._;
          for (var e in n) t[e] = n[e].slice();
          return new a(t);
        },
        call: function (t, n) {
          if ((e = arguments.length - 2) > 0)
            for (var e, r, i = new Array(e), o = 0; o < e; ++o)
              i[o] = arguments[o + 2];
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          for (o = 0, e = (r = this._[t]).length; o < e; ++o)
            r[o].value.apply(n, i);
        },
        apply: function (t, n, e) {
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
            r[i].value.apply(n, e);
        },
      };
      var l,
        s,
        h = o,
        p = 0,
        d = 0,
        v = 0,
        g = 0,
        y = 0,
        b = 0,
        m =
          "object" === typeof performance && performance.now
            ? performance
            : Date,
        w =
          "object" === typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (t) {
                setTimeout(t, 17);
              };
      function _() {
        return y || (w(j), (y = m.now() + b));
      }
      function j() {
        y = 0;
      }
      function O() {
        this._call = this._time = this._next = null;
      }
      function x(t, n, e) {
        var r = new O();
        return r.restart(t, n, e), r;
      }
      function M() {
        (y = (g = m.now()) + b), (p = d = 0);
        try {
          !(function () {
            _(), ++p;
            for (var t, n = l; n; )
              (t = y - n._time) >= 0 && n._call.call(null, t), (n = n._next);
            --p;
          })();
        } finally {
          (p = 0),
            (function () {
              var t,
                n,
                e = l,
                r = 1 / 0;
              for (; e; )
                e._call
                  ? (r > e._time && (r = e._time), (t = e), (e = e._next))
                  : ((n = e._next),
                    (e._next = null),
                    (e = t ? (t._next = n) : (l = n)));
              (s = t), N(r);
            })(),
            (y = 0);
        }
      }
      function E() {
        var t = m.now(),
          n = t - g;
        n > 1e3 && ((b -= n), (g = t));
      }
      function N(t) {
        p ||
          (d && (d = clearTimeout(d)),
          t - y > 24
            ? (t < 1 / 0 && (d = setTimeout(M, t - m.now() - b)),
              v && (v = clearInterval(v)))
            : (v || ((g = m.now()), (v = setInterval(E, 1e3))), (p = 1), w(M)));
      }
      O.prototype = x.prototype = {
        constructor: O,
        restart: function (t, n, e) {
          if ("function" !== typeof t)
            throw new TypeError("callback is not a function");
          (e = (null == e ? _() : +e) + (null == n ? 0 : +n)),
            this._next ||
              s === this ||
              (s ? (s._next = this) : (l = this), (s = this)),
            (this._call = t),
            (this._time = e),
            N();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), N());
        },
      };
      var S = function (t, n, e) {
          var r = new O();
          return (
            (n = null == n ? 0 : +n),
            r.restart(
              function (e) {
                r.stop(), t(e + n);
              },
              n,
              e
            ),
            r
          );
        },
        k = h("start", "end", "cancel", "interrupt"),
        A = [],
        L = function (t, n, e, r, i, o) {
          var a = t.__transition;
          if (a) {
            if (e in a) return;
          } else t.__transition = {};
          !(function (t, n, e) {
            var r,
              i = t.__transition;
            function o(c) {
              var f, l, s, h;
              if (1 !== e.state) return u();
              for (f in i)
                if ((h = i[f]).name === e.name) {
                  if (3 === h.state) return S(o);
                  4 === h.state
                    ? ((h.state = 6),
                      h.timer.stop(),
                      h.on.call("interrupt", t, t.__data__, h.index, h.group),
                      delete i[f])
                    : +f < n &&
                      ((h.state = 6),
                      h.timer.stop(),
                      h.on.call("cancel", t, t.__data__, h.index, h.group),
                      delete i[f]);
                }
              if (
                (S(function () {
                  3 === e.state &&
                    ((e.state = 4), e.timer.restart(a, e.delay, e.time), a(c));
                }),
                (e.state = 2),
                e.on.call("start", t, t.__data__, e.index, e.group),
                2 === e.state)
              ) {
                for (
                  e.state = 3,
                    r = new Array((s = e.tween.length)),
                    f = 0,
                    l = -1;
                  f < s;
                  ++f
                )
                  (h = e.tween[f].value.call(
                    t,
                    t.__data__,
                    e.index,
                    e.group
                  )) && (r[++l] = h);
                r.length = l + 1;
              }
            }
            function a(n) {
              for (
                var i =
                    n < e.duration
                      ? e.ease.call(null, n / e.duration)
                      : (e.timer.restart(u), (e.state = 5), 1),
                  o = -1,
                  a = r.length;
                ++o < a;

              )
                r[o].call(t, i);
              5 === e.state &&
                (e.on.call("end", t, t.__data__, e.index, e.group), u());
            }
            function u() {
              for (var r in ((e.state = 6), e.timer.stop(), delete i[n], i))
                return;
              delete t.__transition;
            }
            (i[n] = e),
              (e.timer = x(
                function (t) {
                  (e.state = 1),
                    e.timer.restart(o, e.delay, e.time),
                    e.delay <= t && o(t - e.delay);
                },
                0,
                e.time
              ));
          })(t, e, {
            name: n,
            index: r,
            group: i,
            on: k,
            tween: A,
            time: o.time,
            delay: o.delay,
            duration: o.duration,
            ease: o.ease,
            timer: null,
            state: 0,
          });
        };
      function P(t, n) {
        var e = C(t, n);
        if (e.state > 0) throw new Error("too late; already scheduled");
        return e;
      }
      function q(t, n) {
        var e = C(t, n);
        if (e.state > 3) throw new Error("too late; already running");
        return e;
      }
      function C(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("transition not found");
        return e;
      }
      var T,
        z,
        R,
        F,
        I = e(75),
        X = 180 / Math.PI,
        $ = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        },
        D = function (t, n, e, r, i, o) {
          var a, u, c;
          return (
            (a = Math.sqrt(t * t + n * n)) && ((t /= a), (n /= a)),
            (c = t * e + n * r) && ((e -= t * c), (r -= n * c)),
            (u = Math.sqrt(e * e + r * r)) && ((e /= u), (r /= u), (c /= u)),
            t * r < n * e && ((t = -t), (n = -n), (c = -c), (a = -a)),
            {
              translateX: i,
              translateY: o,
              rotate: Math.atan2(n, t) * X,
              skewX: Math.atan(c) * X,
              scaleX: a,
              scaleY: u,
            }
          );
        };
      function G(t, n, e, r) {
        function i(t) {
          return t.length ? t.pop() + " " : "";
        }
        return function (o, a) {
          var u = [],
            c = [];
          return (
            (o = t(o)),
            (a = t(a)),
            (function (t, r, i, o, a, u) {
              if (t !== i || r !== o) {
                var c = a.push("translate(", null, n, null, e);
                u.push(
                  { i: c - 4, x: Object(I.a)(t, i) },
                  { i: c - 2, x: Object(I.a)(r, o) }
                );
              } else (i || o) && a.push("translate(" + i + n + o + e);
            })(o.translateX, o.translateY, a.translateX, a.translateY, u, c),
            (function (t, n, e, o) {
              t !== n
                ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
                  o.push({
                    i: e.push(i(e) + "rotate(", null, r) - 2,
                    x: Object(I.a)(t, n),
                  }))
                : n && e.push(i(e) + "rotate(" + n + r);
            })(o.rotate, a.rotate, u, c),
            (function (t, n, e, o) {
              t !== n
                ? o.push({
                    i: e.push(i(e) + "skewX(", null, r) - 2,
                    x: Object(I.a)(t, n),
                  })
                : n && e.push(i(e) + "skewX(" + n + r);
            })(o.skewX, a.skewX, u, c),
            (function (t, n, e, r, o, a) {
              if (t !== e || n !== r) {
                var u = o.push(i(o) + "scale(", null, ",", null, ")");
                a.push(
                  { i: u - 4, x: Object(I.a)(t, e) },
                  { i: u - 2, x: Object(I.a)(n, r) }
                );
              } else
                (1 === e && 1 === r) ||
                  o.push(i(o) + "scale(" + e + "," + r + ")");
            })(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, c),
            (o = a = null),
            function (t) {
              for (var n, e = -1, r = c.length; ++e < r; )
                u[(n = c[e]).i] = n.x(t);
              return u.join("");
            }
          );
        };
      }
      var Y = G(
          function (t) {
            return "none" === t
              ? $
              : (T ||
                  ((T = document.createElement("DIV")),
                  (z = document.documentElement),
                  (R = document.defaultView)),
                (T.style.transform = t),
                (t = R.getComputedStyle(
                  z.appendChild(T),
                  null
                ).getPropertyValue("transform")),
                z.removeChild(T),
                (t = t.slice(7, -1).split(",")),
                D(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
          },
          "px, ",
          "px)",
          "deg)"
        ),
        B = G(
          function (t) {
            return null == t
              ? $
              : (F ||
                  (F = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g"
                  )),
                F.setAttribute("transform", t),
                (t = F.transform.baseVal.consolidate())
                  ? ((t = t.matrix), D(t.a, t.b, t.c, t.d, t.e, t.f))
                  : $);
          },
          ", ",
          ")",
          ")"
        ),
        H = e(88);
      function V(t, n) {
        var e, r;
        return function () {
          var i = q(this, t),
            o = i.tween;
          if (o !== e)
            for (var a = 0, u = (r = e = o).length; a < u; ++a)
              if (r[a].name === n) {
                (r = r.slice()).splice(a, 1);
                break;
              }
          i.tween = r;
        };
      }
      function U(t, n, e) {
        var r, i;
        if ("function" !== typeof e) throw new Error();
        return function () {
          var o = q(this, t),
            a = o.tween;
          if (a !== r) {
            i = (r = a).slice();
            for (var u = { name: n, value: e }, c = 0, f = i.length; c < f; ++c)
              if (i[c].name === n) {
                i[c] = u;
                break;
              }
            c === f && i.push(u);
          }
          o.tween = i;
        };
      }
      function J(t, n, e) {
        var r = t._id;
        return (
          t.each(function () {
            var t = q(this, r);
            (t.value || (t.value = {}))[n] = e.apply(this, arguments);
          }),
          function (t) {
            return C(t, r).value[n];
          }
        );
      }
      var W = e(189),
        Z = e(149),
        K = e(139),
        Q = function (t, n) {
          var e;
          return ("number" === typeof n
            ? I.a
            : n instanceof W.a
            ? Z.a
            : (e = Object(W.a)(n))
            ? ((n = e), Z.a)
            : K.a)(t, n);
        };
      function tt(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function nt(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function et(t, n, e) {
        var r,
          i,
          o = e + "";
        return function () {
          var a = this.getAttribute(t);
          return a === o ? null : a === r ? i : (i = n((r = a), e));
        };
      }
      function rt(t, n, e) {
        var r,
          i,
          o = e + "";
        return function () {
          var a = this.getAttributeNS(t.space, t.local);
          return a === o ? null : a === r ? i : (i = n((r = a), e));
        };
      }
      function it(t, n, e) {
        var r, i, o;
        return function () {
          var a,
            u,
            c = e(this);
          if (null != c)
            return (a = this.getAttribute(t)) === (u = c + "")
              ? null
              : a === r && u === i
              ? o
              : ((i = u), (o = n((r = a), c)));
          this.removeAttribute(t);
        };
      }
      function ot(t, n, e) {
        var r, i, o;
        return function () {
          var a,
            u,
            c = e(this);
          if (null != c)
            return (a = this.getAttributeNS(t.space, t.local)) === (u = c + "")
              ? null
              : a === r && u === i
              ? o
              : ((i = u), (o = n((r = a), c)));
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function at(t, n) {
        return function (e) {
          this.setAttribute(t, n.call(this, e));
        };
      }
      function ut(t, n) {
        return function (e) {
          this.setAttributeNS(t.space, t.local, n.call(this, e));
        };
      }
      function ct(t, n) {
        var e, r;
        function i() {
          var i = n.apply(this, arguments);
          return i !== r && (e = (r = i) && ut(t, i)), e;
        }
        return (i._value = n), i;
      }
      function ft(t, n) {
        var e, r;
        function i() {
          var i = n.apply(this, arguments);
          return i !== r && (e = (r = i) && at(t, i)), e;
        }
        return (i._value = n), i;
      }
      function lt(t, n) {
        return function () {
          P(this, t).delay = +n.apply(this, arguments);
        };
      }
      function st(t, n) {
        return (
          (n = +n),
          function () {
            P(this, t).delay = n;
          }
        );
      }
      function ht(t, n) {
        return function () {
          q(this, t).duration = +n.apply(this, arguments);
        };
      }
      function pt(t, n) {
        return (
          (n = +n),
          function () {
            q(this, t).duration = n;
          }
        );
      }
      function dt(t, n) {
        if ("function" !== typeof n) throw new Error();
        return function () {
          q(this, t).ease = n;
        };
      }
      var vt = e(140);
      function gt(t, n, e) {
        var r,
          i,
          o = (function (t) {
            return (t + "")
              .trim()
              .split(/^|\s+/)
              .every(function (t) {
                var n = t.indexOf(".");
                return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
              });
          })(n)
            ? P
            : q;
        return function () {
          var a = o(this, t),
            u = a.on;
          u !== r && (i = (r = u).copy()).on(n, e), (a.on = i);
        };
      }
      var yt = e(90),
        bt = e(141),
        mt = r.b.prototype.constructor,
        wt = e(142);
      function _t(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function jt(t, n, e) {
        return function (r) {
          this.style.setProperty(t, n.call(this, r), e);
        };
      }
      function Ot(t, n, e) {
        var r, i;
        function o() {
          var o = n.apply(this, arguments);
          return o !== i && (r = (i = o) && jt(t, o, e)), r;
        }
        return (o._value = n), o;
      }
      function xt(t) {
        return function (n) {
          this.textContent = t.call(this, n);
        };
      }
      function Mt(t) {
        var n, e;
        function r() {
          var r = t.apply(this, arguments);
          return r !== e && (n = (e = r) && xt(r)), n;
        }
        return (r._value = t), r;
      }
      var Et = 0;
      function Nt(t, n, e, r) {
        (this._groups = t),
          (this._parents = n),
          (this._name = e),
          (this._id = r);
      }
      function St(t) {
        return Object(r.b)().transition(t);
      }
      function kt() {
        return ++Et;
      }
      var At = r.b.prototype;
      Nt.prototype = St.prototype = {
        constructor: Nt,
        select: function (t) {
          var n = this._name,
            e = this._id;
          "function" !== typeof t && (t = Object(yt.a)(t));
          for (
            var r = this._groups, i = r.length, o = new Array(i), a = 0;
            a < i;
            ++a
          )
            for (
              var u,
                c,
                f = r[a],
                l = f.length,
                s = (o[a] = new Array(l)),
                h = 0;
              h < l;
              ++h
            )
              (u = f[h]) &&
                (c = t.call(u, u.__data__, h, f)) &&
                ("__data__" in u && (c.__data__ = u.__data__),
                (s[h] = c),
                L(s[h], n, e, h, s, C(u, e)));
          return new Nt(o, this._parents, n, e);
        },
        selectAll: function (t) {
          var n = this._name,
            e = this._id;
          "function" !== typeof t && (t = Object(bt.a)(t));
          for (
            var r = this._groups, i = r.length, o = [], a = [], u = 0;
            u < i;
            ++u
          )
            for (var c, f = r[u], l = f.length, s = 0; s < l; ++s)
              if ((c = f[s])) {
                for (
                  var h,
                    p = t.call(c, c.__data__, s, f),
                    d = C(c, e),
                    v = 0,
                    g = p.length;
                  v < g;
                  ++v
                )
                  (h = p[v]) && L(h, n, e, v, p, d);
                o.push(p), a.push(c);
              }
          return new Nt(o, a, n, e);
        },
        filter: function (t) {
          "function" !== typeof t && (t = Object(vt.a)(t));
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var o, a = n[i], u = a.length, c = (r[i] = []), f = 0;
              f < u;
              ++f
            )
              (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
          return new Nt(r, this._parents, this._name, this._id);
        },
        merge: function (t) {
          if (t._id !== this._id) throw new Error();
          for (
            var n = this._groups,
              e = t._groups,
              r = n.length,
              i = e.length,
              o = Math.min(r, i),
              a = new Array(r),
              u = 0;
            u < o;
            ++u
          )
            for (
              var c,
                f = n[u],
                l = e[u],
                s = f.length,
                h = (a[u] = new Array(s)),
                p = 0;
              p < s;
              ++p
            )
              (c = f[p] || l[p]) && (h[p] = c);
          for (; u < r; ++u) a[u] = n[u];
          return new Nt(a, this._parents, this._name, this._id);
        },
        selection: function () {
          return new mt(this._groups, this._parents);
        },
        transition: function () {
          for (
            var t = this._name,
              n = this._id,
              e = kt(),
              r = this._groups,
              i = r.length,
              o = 0;
            o < i;
            ++o
          )
            for (var a, u = r[o], c = u.length, f = 0; f < c; ++f)
              if ((a = u[f])) {
                var l = C(a, n);
                L(a, t, e, f, u, {
                  time: l.time + l.delay + l.duration,
                  delay: 0,
                  duration: l.duration,
                  ease: l.ease,
                });
              }
          return new Nt(r, this._parents, t, e);
        },
        call: At.call,
        nodes: At.nodes,
        node: At.node,
        size: At.size,
        empty: At.empty,
        each: At.each,
        on: function (t, n) {
          var e = this._id;
          return arguments.length < 2
            ? C(this.node(), e).on.on(t)
            : this.each(gt(e, t, n));
        },
        attr: function (t, n) {
          var e = Object(H.a)(t),
            r = "transform" === e ? B : Q;
          return this.attrTween(
            t,
            "function" === typeof n
              ? (e.local ? ot : it)(e, r, J(this, "attr." + t, n))
              : null == n
              ? (e.local ? nt : tt)(e)
              : (e.local ? rt : et)(e, r, n)
          );
        },
        attrTween: function (t, n) {
          var e = "attr." + t;
          if (arguments.length < 2) return (e = this.tween(e)) && e._value;
          if (null == n) return this.tween(e, null);
          if ("function" !== typeof n) throw new Error();
          var r = Object(H.a)(t);
          return this.tween(e, (r.local ? ct : ft)(r, n));
        },
        style: function (t, n, e) {
          var r = "transform" === (t += "") ? Y : Q;
          return null == n
            ? this.styleTween(
                t,
                (function (t, n) {
                  var e, r, i;
                  return function () {
                    var o = Object(wt.b)(this, t),
                      a = (this.style.removeProperty(t), Object(wt.b)(this, t));
                    return o === a
                      ? null
                      : o === e && a === r
                      ? i
                      : (i = n((e = o), (r = a)));
                  };
                })(t, r)
              ).on("end.style." + t, _t(t))
            : "function" === typeof n
            ? this.styleTween(
                t,
                (function (t, n, e) {
                  var r, i, o;
                  return function () {
                    var a = Object(wt.b)(this, t),
                      u = e(this),
                      c = u + "";
                    return (
                      null == u &&
                        (this.style.removeProperty(t),
                        (c = u = Object(wt.b)(this, t))),
                      a === c
                        ? null
                        : a === r && c === i
                        ? o
                        : ((i = c), (o = n((r = a), u)))
                    );
                  };
                })(t, r, J(this, "style." + t, n))
              ).each(
                (function (t, n) {
                  var e,
                    r,
                    i,
                    o,
                    a = "style." + n,
                    u = "end." + a;
                  return function () {
                    var c = q(this, t),
                      f = c.on,
                      l = null == c.value[a] ? o || (o = _t(n)) : void 0;
                    (f === e && i === l) || (r = (e = f).copy()).on(u, (i = l)),
                      (c.on = r);
                  };
                })(this._id, t)
              )
            : this.styleTween(
                t,
                (function (t, n, e) {
                  var r,
                    i,
                    o = e + "";
                  return function () {
                    var a = Object(wt.b)(this, t);
                    return a === o ? null : a === r ? i : (i = n((r = a), e));
                  };
                })(t, r, n),
                e
              ).on("end.style." + t, null);
        },
        styleTween: function (t, n, e) {
          var r = "style." + (t += "");
          if (arguments.length < 2) return (r = this.tween(r)) && r._value;
          if (null == n) return this.tween(r, null);
          if ("function" !== typeof n) throw new Error();
          return this.tween(r, Ot(t, n, null == e ? "" : e));
        },
        text: function (t) {
          return this.tween(
            "text",
            "function" === typeof t
              ? (function (t) {
                  return function () {
                    var n = t(this);
                    this.textContent = null == n ? "" : n;
                  };
                })(J(this, "text", t))
              : (function (t) {
                  return function () {
                    this.textContent = t;
                  };
                })(null == t ? "" : t + "")
          );
        },
        textTween: function (t) {
          var n = "text";
          if (arguments.length < 1) return (n = this.tween(n)) && n._value;
          if (null == t) return this.tween(n, null);
          if ("function" !== typeof t) throw new Error();
          return this.tween(n, Mt(t));
        },
        remove: function () {
          return this.on(
            "end.remove",
            ((t = this._id),
            function () {
              var n = this.parentNode;
              for (var e in this.__transition) if (+e !== t) return;
              n && n.removeChild(this);
            })
          );
          var t;
        },
        tween: function (t, n) {
          var e = this._id;
          if (((t += ""), arguments.length < 2)) {
            for (
              var r, i = C(this.node(), e).tween, o = 0, a = i.length;
              o < a;
              ++o
            )
              if ((r = i[o]).name === t) return r.value;
            return null;
          }
          return this.each((null == n ? V : U)(e, t, n));
        },
        delay: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(("function" === typeof t ? lt : st)(n, t))
            : C(this.node(), n).delay;
        },
        duration: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(("function" === typeof t ? ht : pt)(n, t))
            : C(this.node(), n).duration;
        },
        ease: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(dt(n, t))
            : C(this.node(), n).ease;
        },
        end: function () {
          var t,
            n,
            e = this,
            r = e._id,
            i = e.size();
          return new Promise(function (o, a) {
            var u = { value: a },
              c = {
                value: function () {
                  0 === --i && o();
                },
              };
            e.each(function () {
              var e = q(this, r),
                i = e.on;
              i !== t &&
                ((n = (t = i).copy())._.cancel.push(u),
                n._.interrupt.push(u),
                n._.end.push(c)),
                (e.on = n);
            });
          });
        },
      };
      var Lt = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (t) {
          return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
        },
      };
      function Pt(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]); )
          if (!(t = t.parentNode)) return (Lt.time = _()), Lt;
        return e;
      }
      (r.b.prototype.interrupt = function (t) {
        return this.each(function () {
          !(function (t, n) {
            var e,
              r,
              i,
              o = t.__transition,
              a = !0;
            if (o) {
              for (i in ((n = null == n ? null : n + ""), o))
                (e = o[i]).name === n
                  ? ((r = e.state > 2 && e.state < 5),
                    (e.state = 6),
                    e.timer.stop(),
                    e.on.call(
                      r ? "interrupt" : "cancel",
                      t,
                      t.__data__,
                      e.index,
                      e.group
                    ),
                    delete o[i])
                  : (a = !1);
              a && delete t.__transition;
            }
          })(this, t);
        });
      }),
        (r.b.prototype.transition = function (t) {
          var n, e;
          t instanceof Nt
            ? ((n = t._id), (t = t._name))
            : ((n = kt()),
              ((e = Lt).time = _()),
              (t = null == t ? null : t + ""));
          for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
            for (var a, u = r[o], c = u.length, f = 0; f < c; ++f)
              (a = u[f]) && L(a, t, n, f, u, e || Pt(a, n));
          return new Nt(r, this._parents, t, n);
        });
      e.d(n, "a", function () {
        return St;
      });
    },
    function (t, n, e) {
      "use strict";
      var r = e(90),
        i = e(141),
        o = e(140),
        a = function (t) {
          return new Array(t.length);
        };
      function u(t, n) {
        (this.ownerDocument = t.ownerDocument),
          (this.namespaceURI = t.namespaceURI),
          (this._next = null),
          (this._parent = t),
          (this.__data__ = n);
      }
      u.prototype = {
        constructor: u,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, n) {
          return this._parent.insertBefore(t, n);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      };
      function c(t, n, e, r, i, o) {
        for (var a, c = 0, f = n.length, l = o.length; c < l; ++c)
          (a = n[c])
            ? ((a.__data__ = o[c]), (r[c] = a))
            : (e[c] = new u(t, o[c]));
        for (; c < f; ++c) (a = n[c]) && (i[c] = a);
      }
      function f(t, n, e, r, i, o, a) {
        var c,
          f,
          l,
          s = {},
          h = n.length,
          p = o.length,
          d = new Array(h);
        for (c = 0; c < h; ++c)
          (f = n[c]) &&
            ((d[c] = l = "$" + a.call(f, f.__data__, c, n)),
            l in s ? (i[c] = f) : (s[l] = f));
        for (c = 0; c < p; ++c)
          (f = s[(l = "$" + a.call(t, o[c], c, o))])
            ? ((r[c] = f), (f.__data__ = o[c]), (s[l] = null))
            : (e[c] = new u(t, o[c]));
        for (c = 0; c < h; ++c) (f = n[c]) && s[d[c]] === f && (i[c] = f);
      }
      function l(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }
      var s = e(88);
      function h(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function p(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function d(t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      }
      function v(t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      }
      function g(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
        };
      }
      function y(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e
            ? this.removeAttributeNS(t.space, t.local)
            : this.setAttributeNS(t.space, t.local, e);
        };
      }
      var b = e(142);
      function m(t) {
        return function () {
          delete this[t];
        };
      }
      function w(t, n) {
        return function () {
          this[t] = n;
        };
      }
      function _(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? delete this[t] : (this[t] = e);
        };
      }
      function j(t) {
        return t.trim().split(/^|\s+/);
      }
      function O(t) {
        return t.classList || new x(t);
      }
      function x(t) {
        (this._node = t), (this._names = j(t.getAttribute("class") || ""));
      }
      function M(t, n) {
        for (var e = O(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
      }
      function E(t, n) {
        for (var e = O(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
      }
      function N(t) {
        return function () {
          M(this, t);
        };
      }
      function S(t) {
        return function () {
          E(this, t);
        };
      }
      function k(t, n) {
        return function () {
          (n.apply(this, arguments) ? M : E)(this, t);
        };
      }
      x.prototype = {
        add: function (t) {
          this._names.indexOf(t) < 0 &&
            (this._names.push(t),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (t) {
          var n = this._names.indexOf(t);
          n >= 0 &&
            (this._names.splice(n, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      function A() {
        this.textContent = "";
      }
      function L(t) {
        return function () {
          this.textContent = t;
        };
      }
      function P(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.textContent = null == n ? "" : n;
        };
      }
      function q() {
        this.innerHTML = "";
      }
      function C(t) {
        return function () {
          this.innerHTML = t;
        };
      }
      function T(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.innerHTML = null == n ? "" : n;
        };
      }
      function z() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function R() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      var F = e(89);
      function I(t) {
        return function () {
          var n = this.ownerDocument,
            e = this.namespaceURI;
          return e === F.b && n.documentElement.namespaceURI === F.b
            ? n.createElement(t)
            : n.createElementNS(e, t);
        };
      }
      function X(t) {
        return function () {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      }
      var $ = function (t) {
        var n = Object(s.a)(t);
        return (n.local ? X : I)(n);
      };
      function D() {
        return null;
      }
      function G() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }
      function Y() {
        var t = this.cloneNode(!1),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function B() {
        var t = this.cloneNode(!0),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      var H = e(143),
        V = e(91);
      function U(t, n, e) {
        var r = Object(V.a)(t),
          i = r.CustomEvent;
        "function" === typeof i
          ? (i = new i(n, e))
          : ((i = r.document.createEvent("Event")),
            e
              ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
              : i.initEvent(n, !1, !1)),
          t.dispatchEvent(i);
      }
      function J(t, n) {
        return function () {
          return U(this, t, n);
        };
      }
      function W(t, n) {
        return function () {
          return U(this, t, n.apply(this, arguments));
        };
      }
      e.d(n, "c", function () {
        return Z;
      }),
        e.d(n, "a", function () {
          return K;
        });
      var Z = [null];
      function K(t, n) {
        (this._groups = t), (this._parents = n);
      }
      function Q() {
        return new K([[document.documentElement]], Z);
      }
      K.prototype = Q.prototype = {
        constructor: K,
        select: function (t) {
          "function" !== typeof t && (t = Object(r.a)(t));
          for (
            var n = this._groups, e = n.length, i = new Array(e), o = 0;
            o < e;
            ++o
          )
            for (
              var a,
                u,
                c = n[o],
                f = c.length,
                l = (i[o] = new Array(f)),
                s = 0;
              s < f;
              ++s
            )
              (a = c[s]) &&
                (u = t.call(a, a.__data__, s, c)) &&
                ("__data__" in a && (u.__data__ = a.__data__), (l[s] = u));
          return new K(i, this._parents);
        },
        selectAll: function (t) {
          "function" !== typeof t && (t = Object(i.a)(t));
          for (
            var n = this._groups, e = n.length, r = [], o = [], a = 0;
            a < e;
            ++a
          )
            for (var u, c = n[a], f = c.length, l = 0; l < f; ++l)
              (u = c[l]) && (r.push(t.call(u, u.__data__, l, c)), o.push(u));
          return new K(r, o);
        },
        filter: function (t) {
          "function" !== typeof t && (t = Object(o.a)(t));
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var a, u = n[i], c = u.length, f = (r[i] = []), l = 0;
              l < c;
              ++l
            )
              (a = u[l]) && t.call(a, a.__data__, l, u) && f.push(a);
          return new K(r, this._parents);
        },
        data: function (t, n) {
          if (!t)
            return (
              (g = new Array(this.size())),
              (h = -1),
              this.each(function (t) {
                g[++h] = t;
              }),
              g
            );
          var e,
            r = n ? f : c,
            i = this._parents,
            o = this._groups;
          "function" !== typeof t &&
            ((e = t),
            (t = function () {
              return e;
            }));
          for (
            var a = o.length,
              u = new Array(a),
              l = new Array(a),
              s = new Array(a),
              h = 0;
            h < a;
            ++h
          ) {
            var p = i[h],
              d = o[h],
              v = d.length,
              g = t.call(p, p && p.__data__, h, i),
              y = g.length,
              b = (l[h] = new Array(y)),
              m = (u[h] = new Array(y));
            r(p, d, b, m, (s[h] = new Array(v)), g, n);
            for (var w, _, j = 0, O = 0; j < y; ++j)
              if ((w = b[j])) {
                for (j >= O && (O = j + 1); !(_ = m[O]) && ++O < y; );
                w._next = _ || null;
              }
          }
          return ((u = new K(u, i))._enter = l), (u._exit = s), u;
        },
        enter: function () {
          return new K(this._enter || this._groups.map(a), this._parents);
        },
        exit: function () {
          return new K(this._exit || this._groups.map(a), this._parents);
        },
        join: function (t, n, e) {
          var r = this.enter(),
            i = this,
            o = this.exit();
          return (
            (r = "function" === typeof t ? t(r) : r.append(t + "")),
            null != n && (i = n(i)),
            null == e ? o.remove() : e(o),
            r && i ? r.merge(i).order() : i
          );
        },
        merge: function (t) {
          for (
            var n = this._groups,
              e = t._groups,
              r = n.length,
              i = e.length,
              o = Math.min(r, i),
              a = new Array(r),
              u = 0;
            u < o;
            ++u
          )
            for (
              var c,
                f = n[u],
                l = e[u],
                s = f.length,
                h = (a[u] = new Array(s)),
                p = 0;
              p < s;
              ++p
            )
              (c = f[p] || l[p]) && (h[p] = c);
          for (; u < r; ++u) a[u] = n[u];
          return new K(a, this._parents);
        },
        order: function () {
          for (var t = this._groups, n = -1, e = t.length; ++n < e; )
            for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0; )
              (r = i[o]) &&
                (a &&
                  4 ^ r.compareDocumentPosition(a) &&
                  a.parentNode.insertBefore(r, a),
                (a = r));
          return this;
        },
        sort: function (t) {
          function n(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e;
          }
          t || (t = l);
          for (
            var e = this._groups, r = e.length, i = new Array(r), o = 0;
            o < r;
            ++o
          ) {
            for (
              var a, u = e[o], c = u.length, f = (i[o] = new Array(c)), s = 0;
              s < c;
              ++s
            )
              (a = u[s]) && (f[s] = a);
            f.sort(n);
          }
          return new K(i, this._parents).order();
        },
        call: function () {
          var t = arguments[0];
          return (arguments[0] = this), t.apply(null, arguments), this;
        },
        nodes: function () {
          var t = new Array(this.size()),
            n = -1;
          return (
            this.each(function () {
              t[++n] = this;
            }),
            t
          );
        },
        node: function () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
              var a = r[i];
              if (a) return a;
            }
          return null;
        },
        size: function () {
          var t = 0;
          return (
            this.each(function () {
              ++t;
            }),
            t
          );
        },
        empty: function () {
          return !this.node();
        },
        each: function (t) {
          for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
            for (var i, o = n[e], a = 0, u = o.length; a < u; ++a)
              (i = o[a]) && t.call(i, i.__data__, a, o);
          return this;
        },
        attr: function (t, n) {
          var e = Object(s.a)(t);
          if (arguments.length < 2) {
            var r = this.node();
            return e.local
              ? r.getAttributeNS(e.space, e.local)
              : r.getAttribute(e);
          }
          return this.each(
            (null == n
              ? e.local
                ? p
                : h
              : "function" === typeof n
              ? e.local
                ? y
                : g
              : e.local
              ? v
              : d)(e, n)
          );
        },
        style: b.a,
        property: function (t, n) {
          return arguments.length > 1
            ? this.each((null == n ? m : "function" === typeof n ? _ : w)(t, n))
            : this.node()[t];
        },
        classed: function (t, n) {
          var e = j(t + "");
          if (arguments.length < 2) {
            for (var r = O(this.node()), i = -1, o = e.length; ++i < o; )
              if (!r.contains(e[i])) return !1;
            return !0;
          }
          return this.each(("function" === typeof n ? k : n ? N : S)(e, n));
        },
        text: function (t) {
          return arguments.length
            ? this.each(null == t ? A : ("function" === typeof t ? P : L)(t))
            : this.node().textContent;
        },
        html: function (t) {
          return arguments.length
            ? this.each(null == t ? q : ("function" === typeof t ? T : C)(t))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(z);
        },
        lower: function () {
          return this.each(R);
        },
        append: function (t) {
          var n = "function" === typeof t ? t : $(t);
          return this.select(function () {
            return this.appendChild(n.apply(this, arguments));
          });
        },
        insert: function (t, n) {
          var e = "function" === typeof t ? t : $(t),
            i = null == n ? D : "function" === typeof n ? n : Object(r.a)(n);
          return this.select(function () {
            return this.insertBefore(
              e.apply(this, arguments),
              i.apply(this, arguments) || null
            );
          });
        },
        remove: function () {
          return this.each(G);
        },
        clone: function (t) {
          return this.select(t ? B : Y);
        },
        datum: function (t) {
          return arguments.length
            ? this.property("__data__", t)
            : this.node().__data__;
        },
        on: H.a,
        dispatch: function (t, n) {
          return this.each(("function" === typeof n ? W : J)(t, n));
        },
      };
      n.b = Q;
    },
    function (t, n, e) {
      "use strict";
      var r = e(189);
      function i(t, n, e, r, i) {
        var o = t * t,
          a = o * t;
        return (
          ((1 - 3 * t + 3 * o - a) * n +
            (4 - 6 * o + 3 * a) * e +
            (1 + 3 * t + 3 * o - 3 * a) * r +
            a * i) /
          6
        );
      }
      var o = e(87);
      function a(t, n) {
        return function (e) {
          return t + e * n;
        };
      }
      function u(t) {
        return 1 === (t = +t)
          ? c
          : function (n, e) {
              return e - n
                ? (function (t, n, e) {
                    return (
                      (t = Math.pow(t, e)),
                      (n = Math.pow(n, e) - t),
                      (e = 1 / e),
                      function (r) {
                        return Math.pow(t + r * n, e);
                      }
                    );
                  })(n, e, t)
                : Object(o.a)(isNaN(n) ? e : n);
            };
      }
      function c(t, n) {
        var e = n - t;
        return e ? a(t, e) : Object(o.a)(isNaN(t) ? n : t);
      }
      e.d(n, "b", function () {
        return l;
      });
      n.a = (function t(n) {
        var e = u(n);
        function i(t, n) {
          var i = e((t = Object(r.b)(t)).r, (n = Object(r.b)(n)).r),
            o = e(t.g, n.g),
            a = e(t.b, n.b),
            u = c(t.opacity, n.opacity);
          return function (n) {
            return (
              (t.r = i(n)),
              (t.g = o(n)),
              (t.b = a(n)),
              (t.opacity = u(n)),
              t + ""
            );
          };
        }
        return (i.gamma = t), i;
      })(1);
      function f(t) {
        return function (n) {
          var e,
            i,
            o = n.length,
            a = new Array(o),
            u = new Array(o),
            c = new Array(o);
          for (e = 0; e < o; ++e)
            (i = Object(r.b)(n[e])),
              (a[e] = i.r || 0),
              (u[e] = i.g || 0),
              (c[e] = i.b || 0);
          return (
            (a = t(a)),
            (u = t(u)),
            (c = t(c)),
            (i.opacity = 1),
            function (t) {
              return (i.r = a(t)), (i.g = u(t)), (i.b = c(t)), i + "";
            }
          );
        };
      }
      var l = f(function (t) {
        var n = t.length - 1;
        return function (e) {
          var r =
              e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
            o = t[r],
            a = t[r + 1],
            u = r > 0 ? t[r - 1] : 2 * o - a,
            c = r < n - 1 ? t[r + 2] : 2 * a - o;
          return i((e - r / n) * n, u, o, a, c);
        };
      });
      f(function (t) {
        var n = t.length;
        return function (e) {
          var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
            o = t[(r + n - 1) % n],
            a = t[r % n],
            u = t[(r + 1) % n],
            c = t[(r + 2) % n];
          return i((e - r / n) * n, o, a, u, c);
        };
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      var r = e(59),
        i = e(60),
        o = new Array(3)
          .concat(
            "fee0d2fc9272de2d26",
            "fee5d9fcae91fb6a4acb181d",
            "fee5d9fcae91fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
          )
          .map(r.a);
      n.a = Object(i.a)(o);
    },
    function (t, n, e) {
      "use strict";
      var r = e(59),
        i = e(60),
        o = new Array(3)
          .concat(
            "deebf79ecae13182bd",
            "eff3ffbdd7e76baed62171b5",
            "eff3ffbdd7e76baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
          )
          .map(r.a);
      n.a = Object(i.a)(o);
    },
    function (t, n, e) {
      "use strict";
      var r = e(59),
        i = e(60),
        o = new Array(3)
          .concat(
            "e5f5e0a1d99b31a354",
            "edf8e9bae4b374c476238b45",
            "edf8e9bae4b374c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
          )
          .map(r.a);
      n.a = Object(i.a)(o);
    },
    function (t, n, e) {
      "use strict";
      var r = e(59),
        i = e(60),
        o = new Array(3)
          .concat(
            "f0f0f0bdbdbd636363",
            "f7f7f7cccccc969696525252",
            "f7f7f7cccccc969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
          )
          .map(r.a);
      n.a = Object(i.a)(o);
    },
    function (t, n, e) {
      "use strict";
      var r = e(59),
        i = e(60),
        o = new Array(3)
          .concat(
            "efedf5bcbddc756bb1",
            "f2f0f7cbc9e29e9ac86a51a3",
            "f2f0f7cbc9e29e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
          )
          .map(r.a);
      n.a = Object(i.a)(o);
    },
    function (t, n, e) {
      "use strict";
      function r(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        if (204 !== t.status && 205 !== t.status) return t.json();
      }
      n.a = function (t, n) {
        return fetch(t, n).then(r);
      };
    },
    function (t, n, e) {
      "use strict";
      function r(t, n) {
        var e;
        if (void 0 === n) {
          var r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, u = t[Symbol.iterator]();
              !(r = (a = u.next()).done);
              r = !0
            ) {
              var c = a.value;
              null != c && (e < c || (void 0 === e && c >= c)) && (e = c);
            }
          } catch (g) {
            (i = !0), (o = g);
          } finally {
            try {
              r || null == u.return || u.return();
            } finally {
              if (i) throw o;
            }
          }
        } else {
          var f = -1,
            l = !0,
            s = !1,
            h = void 0;
          try {
            for (
              var p, d = t[Symbol.iterator]();
              !(l = (p = d.next()).done);
              l = !0
            ) {
              var v = p.value;
              null != (v = n(v, ++f, t)) &&
                (e < v || (void 0 === e && v >= v)) &&
                (e = v);
            }
          } catch (g) {
            (s = !0), (h = g);
          } finally {
            try {
              l || null == d.return || d.return();
            } finally {
              if (s) throw h;
            }
          }
        }
        return e;
      }
      e.d(n, "a", function () {
        return r;
      });
    },
    function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return o;
      });
      var r = e(56),
        i = Symbol("implicit");
      function o() {
        var t = new Map(),
          n = [],
          e = [],
          a = i;
        function u(r) {
          var o = r + "",
            u = t.get(o);
          if (!u) {
            if (a !== i) return a;
            t.set(o, (u = n.push(r)));
          }
          return e[(u - 1) % e.length];
        }
        return (
          (u.domain = function (e) {
            if (!arguments.length) return n.slice();
            (n = []), (t = new Map());
            var r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done);
                r = !0
              ) {
                var f = a.value,
                  l = f + "";
                t.has(l) || t.set(l, n.push(f));
              }
            } catch (s) {
              (i = !0), (o = s);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (i) throw o;
              }
            }
            return u;
          }),
          (u.range = function (t) {
            return arguments.length ? ((e = Array.from(t)), u) : e.slice();
          }),
          (u.unknown = function (t) {
            return arguments.length ? ((a = t), u) : a;
          }),
          (u.copy = function () {
            return o(n, e).unknown(a);
          }),
          r.b.apply(u, arguments),
          u
        );
      }
    },
    function (t, n, e) {
      "use strict";
      n.a = function (t, n) {
        return (
          (t = +t),
          (n = +n),
          function (e) {
            return Math.round(t * (1 - e) + n * e);
          }
        );
      };
    },
    function (t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return a;
      }),
        e.d(n, "c", function () {
          return u;
        });
      var r = Math.sqrt(50),
        i = Math.sqrt(10),
        o = Math.sqrt(2);
      function a(t, n, e) {
        var a = (n - t) / Math.max(0, e),
          u = Math.floor(Math.log(a) / Math.LN10),
          c = a / Math.pow(10, u);
        return u >= 0
          ? (c >= r ? 10 : c >= i ? 5 : c >= o ? 2 : 1) * Math.pow(10, u)
          : -Math.pow(10, -u) / (c >= r ? 10 : c >= i ? 5 : c >= o ? 2 : 1);
      }
      function u(t, n, e) {
        var a = Math.abs(n - t) / Math.max(0, e),
          u = Math.pow(10, Math.floor(Math.log(a) / Math.LN10)),
          c = a / u;
        return (
          c >= r ? (u *= 10) : c >= i ? (u *= 5) : c >= o && (u *= 2),
          n < t ? -u : u
        );
      }
      n.a = function (t, n, e) {
        var r,
          i,
          o,
          u,
          c = -1;
        if (((e = +e), (t = +t) === (n = +n) && e > 0)) return [t];
        if (
          ((r = n < t) && ((i = t), (t = n), (n = i)),
          0 === (u = a(t, n, e)) || !isFinite(u))
        )
          return [];
        if (u > 0)
          for (
            t = Math.ceil(t / u),
              n = Math.floor(n / u),
              o = new Array((i = Math.ceil(n - t + 1)));
            ++c < i;

          )
            o[c] = (t + c) * u;
        else
          for (
            t = Math.floor(t * u),
              n = Math.ceil(n * u),
              o = new Array((i = Math.ceil(t - n + 1)));
            ++c < i;

          )
            o[c] = (t - c) / u;
        return r && o.reverse(), o;
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(148);
      n.a = function (t) {
        return "string" === typeof t
          ? new r.a([[document.querySelector(t)]], [document.documentElement])
          : new r.a([[t]], r.c);
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(4),
        i = e.n(r),
        o = e(54),
        a = e.n(o);
      function u() {
        return (u =
          Object.assign ||
          function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = arguments[n];
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function c(t, n) {
        if (null == t) return {};
        var e,
          r,
          i = (function (t, n) {
            if (null == t) return {};
            var e,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (e = o[r]), n.indexOf(e) >= 0 || (i[e] = t[e]);
            return i;
          })(t, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (e = o[r]),
              n.indexOf(e) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, e) &&
                  (i[e] = t[e]));
        }
        return i;
      }
      var f = Object(r.forwardRef)(function (t, n) {
        var e = t.color,
          r = void 0 === e ? "currentColor" : e,
          o = t.size,
          a = void 0 === o ? 24 : o,
          f = c(t, ["color", "size"]);
        return i.a.createElement(
          "svg",
          u(
            {
              ref: n,
              xmlns: "http://www.w3.org/2000/svg",
              width: a,
              height: a,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: r,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            f
          ),
          i.a.createElement("circle", { cx: "12", cy: "12", r: "10" }),
          i.a.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
          i.a.createElement("line", {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16",
          })
        );
      });
      (f.propTypes = {
        color: a.a.string,
        size: a.a.oneOfType([a.a.string, a.a.number]),
      }),
        (f.displayName = "AlertCircle"),
        (n.a = f);
    },
    function (t, n, e) {
      "use strict";
      var r = e(52),
        i = function (t, n) {
          function e(e, r) {
            return (e = t(e, r)), n(e[0], e[1]);
          }
          return (
            t.invert &&
              n.invert &&
              (e.invert = function (e, r) {
                return (e = n.invert(e, r)) && t.invert(e[0], e[1]);
              }),
            e
          );
        };
      function o(t, n) {
        return [Object(r.a)(t) > r.l ? t + Math.round(-t / r.s) * r.s : t, n];
      }
      function a(t, n, e) {
        return (t %= r.s)
          ? n || e
            ? i(c(t), f(n, e))
            : c(t)
          : n || e
          ? f(n, e)
          : o;
      }
      function u(t) {
        return function (n, e) {
          return [(n += t) > r.l ? n - r.s : n < -r.l ? n + r.s : n, e];
        };
      }
      function c(t) {
        var n = u(t);
        return (n.invert = u(-t)), n;
      }
      function f(t, n) {
        var e = Object(r.f)(t),
          i = Object(r.p)(t),
          o = Object(r.f)(n),
          a = Object(r.p)(n);
        function u(t, n) {
          var u = Object(r.f)(n),
            c = Object(r.f)(t) * u,
            f = Object(r.p)(t) * u,
            l = Object(r.p)(n),
            s = l * e + c * i;
          return [
            Object(r.e)(f * o - s * a, c * e - l * i),
            Object(r.c)(s * o + f * a),
          ];
        }
        return (
          (u.invert = function (t, n) {
            var u = Object(r.f)(n),
              c = Object(r.f)(t) * u,
              f = Object(r.p)(t) * u,
              l = Object(r.p)(n),
              s = l * o - f * a;
            return [
              Object(r.e)(f * o + l * a, c * e + s * i),
              Object(r.c)(s * e - c * i),
            ];
          }),
          u
        );
      }
      o.invert = o;
      var l = e(61),
        s = function () {
          var t,
            n = [];
          return {
            point: function (n, e, r) {
              t.push([n, e, r]);
            },
            lineStart: function () {
              n.push((t = []));
            },
            lineEnd: l.a,
            rejoin: function () {
              n.length > 1 && n.push(n.pop().concat(n.shift()));
            },
            result: function () {
              var e = n;
              return (n = []), (t = null), e;
            },
          };
        },
        h = function (t, n) {
          return (
            Object(r.a)(t[0] - n[0]) < r.h && Object(r.a)(t[1] - n[1]) < r.h
          );
        };
      function p(t, n, e, r) {
        (this.x = t),
          (this.z = n),
          (this.o = e),
          (this.e = r),
          (this.v = !1),
          (this.n = this.p = null);
      }
      var d = function (t, n, e, i, o) {
        var a,
          u,
          c = [],
          f = [];
        if (
          (t.forEach(function (t) {
            if (!((n = t.length - 1) <= 0)) {
              var n,
                e,
                i = t[0],
                u = t[n];
              if (h(i, u)) {
                if (!i[2] && !u[2]) {
                  for (o.lineStart(), a = 0; a < n; ++a)
                    o.point((i = t[a])[0], i[1]);
                  return void o.lineEnd();
                }
                u[0] += 2 * r.h;
              }
              c.push((e = new p(i, t, null, !0))),
                f.push((e.o = new p(i, null, e, !1))),
                c.push((e = new p(u, t, null, !1))),
                f.push((e.o = new p(u, null, e, !0)));
            }
          }),
          c.length)
        ) {
          for (f.sort(n), v(c), v(f), a = 0, u = f.length; a < u; ++a)
            f[a].e = e = !e;
          for (var l, s, d = c[0]; ; ) {
            for (var g = d, y = !0; g.v; ) if ((g = g.n) === d) return;
            (l = g.z), o.lineStart();
            do {
              if (((g.v = g.o.v = !0), g.e)) {
                if (y)
                  for (a = 0, u = l.length; a < u; ++a)
                    o.point((s = l[a])[0], s[1]);
                else i(g.x, g.n.x, 1, o);
                g = g.n;
              } else {
                if (y)
                  for (l = g.p.z, a = l.length - 1; a >= 0; --a)
                    o.point((s = l[a])[0], s[1]);
                else i(g.x, g.p.x, -1, o);
                g = g.p;
              }
              (l = (g = g.o).z), (y = !y);
            } while (!g.v);
            o.lineEnd();
          }
        }
      };
      function v(t) {
        if ((n = t.length)) {
          for (var n, e, r = 0, i = t[0]; ++r < n; )
            (i.n = e = t[r]), (e.p = i), (i = e);
          (i.n = e = t[0]), (e.p = i);
        }
      }
      var g = e(77);
      function y(t) {
        return [Object(r.e)(t[1], t[0]), Object(r.c)(t[2])];
      }
      function b(t) {
        var n = t[0],
          e = t[1],
          i = Object(r.f)(e);
        return [i * Object(r.f)(n), i * Object(r.p)(n), Object(r.p)(e)];
      }
      function m(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
      }
      function w(t, n) {
        return [
          t[1] * n[2] - t[2] * n[1],
          t[2] * n[0] - t[0] * n[2],
          t[0] * n[1] - t[1] * n[0],
        ];
      }
      function _(t, n) {
        (t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2]);
      }
      function j(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n];
      }
      function O(t) {
        var n = Object(r.q)(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        (t[0] /= n), (t[1] /= n), (t[2] /= n);
      }
      var x = Object(g.a)();
      function M(t) {
        return Object(r.a)(t[0]) <= r.l
          ? t[0]
          : Object(r.o)(t[0]) * (((Object(r.a)(t[0]) + r.l) % r.s) - r.l);
      }
      var E = function (t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      };
      var N = (function (t) {
        var n;
        return (
          1 === t.length &&
            ((n = t),
            (t = function (t, e) {
              return E(n(t), e);
            })),
          {
            left: function (n, e, r, i) {
              for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
                var o = (r + i) >>> 1;
                t(n[o], e) < 0 ? (r = o + 1) : (i = o);
              }
              return r;
            },
            right: function (n, e, r, i) {
              for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
                var o = (r + i) >>> 1;
                t(n[o], e) > 0 ? (i = o) : (r = o + 1);
              }
              return r;
            },
          }
        );
      })(E);
      N.right, N.left;
      var S = Array.prototype;
      S.slice, S.map, Math.sqrt(50), Math.sqrt(10), Math.sqrt(2);
      var k = function (t) {
        for (var n, e, r, i = t.length, o = -1, a = 0; ++o < i; )
          a += t[o].length;
        for (e = new Array(a); --i >= 0; )
          for (n = (r = t[i]).length; --n >= 0; ) e[--a] = r[n];
        return e;
      };
      var A = function (t, n, e, i) {
        return function (o) {
          var a,
            u,
            c,
            f = n(o),
            l = s(),
            h = n(l),
            p = !1,
            v = {
              point: g,
              lineStart: m,
              lineEnd: _,
              polygonStart: function () {
                (v.point = j),
                  (v.lineStart = E),
                  (v.lineEnd = N),
                  (u = []),
                  (a = []);
              },
              polygonEnd: function () {
                (v.point = g), (v.lineStart = m), (v.lineEnd = _), (u = k(u));
                var t = (function (t, n) {
                  var e = M(n),
                    i = n[1],
                    o = Object(r.p)(i),
                    a = [Object(r.p)(e), -Object(r.f)(e), 0],
                    u = 0,
                    c = 0;
                  x.reset(),
                    1 === o ? (i = r.j + r.h) : -1 === o && (i = -r.j - r.h);
                  for (var f = 0, l = t.length; f < l; ++f)
                    if ((h = (s = t[f]).length))
                      for (
                        var s,
                          h,
                          p = s[h - 1],
                          d = M(p),
                          v = p[1] / 2 + r.m,
                          g = Object(r.p)(v),
                          y = Object(r.f)(v),
                          m = 0;
                        m < h;
                        ++m, d = j, g = N, y = S, p = _
                      ) {
                        var _ = s[m],
                          j = M(_),
                          E = _[1] / 2 + r.m,
                          N = Object(r.p)(E),
                          S = Object(r.f)(E),
                          k = j - d,
                          A = k >= 0 ? 1 : -1,
                          L = A * k,
                          P = L > r.l,
                          q = g * N;
                        if (
                          (x.add(
                            Object(r.e)(
                              q * A * Object(r.p)(L),
                              y * S + q * Object(r.f)(L)
                            )
                          ),
                          (u += P ? k + A * r.s : k),
                          P ^ (d >= e) ^ (j >= e))
                        ) {
                          var C = w(b(p), b(_));
                          O(C);
                          var T = w(a, C);
                          O(T);
                          var z = (P ^ (k >= 0) ? -1 : 1) * Object(r.c)(T[2]);
                          (i > z || (i === z && (C[0] || C[1]))) &&
                            (c += P ^ (k >= 0) ? 1 : -1);
                        }
                      }
                  return (u < -r.h || (u < r.h && x < -r.h)) ^ (1 & c);
                })(a, i);
                u.length
                  ? (p || (o.polygonStart(), (p = !0)), d(u, P, t, e, o))
                  : t &&
                    (p || (o.polygonStart(), (p = !0)),
                    o.lineStart(),
                    e(null, null, 1, o),
                    o.lineEnd()),
                  p && (o.polygonEnd(), (p = !1)),
                  (u = a = null);
              },
              sphere: function () {
                o.polygonStart(),
                  o.lineStart(),
                  e(null, null, 1, o),
                  o.lineEnd(),
                  o.polygonEnd();
              },
            };
          function g(n, e) {
            t(n, e) && o.point(n, e);
          }
          function y(t, n) {
            f.point(t, n);
          }
          function m() {
            (v.point = y), f.lineStart();
          }
          function _() {
            (v.point = g), f.lineEnd();
          }
          function j(t, n) {
            c.push([t, n]), h.point(t, n);
          }
          function E() {
            h.lineStart(), (c = []);
          }
          function N() {
            j(c[0][0], c[0][1]), h.lineEnd();
            var t,
              n,
              e,
              r,
              i = h.clean(),
              f = l.result(),
              s = f.length;
            if ((c.pop(), a.push(c), (c = null), s))
              if (1 & i) {
                if ((n = (e = f[0]).length - 1) > 0) {
                  for (
                    p || (o.polygonStart(), (p = !0)), o.lineStart(), t = 0;
                    t < n;
                    ++t
                  )
                    o.point((r = e[t])[0], r[1]);
                  o.lineEnd();
                }
              } else
                s > 1 && 2 & i && f.push(f.pop().concat(f.shift())),
                  u.push(f.filter(L));
          }
          return v;
        };
      };
      function L(t) {
        return t.length > 1;
      }
      function P(t, n) {
        return (
          ((t = t.x)[0] < 0 ? t[1] - r.j - r.h : r.j - t[1]) -
          ((n = n.x)[0] < 0 ? n[1] - r.j - r.h : r.j - n[1])
        );
      }
      var q = A(
        function () {
          return !0;
        },
        function (t) {
          var n,
            e = NaN,
            i = NaN,
            o = NaN;
          return {
            lineStart: function () {
              t.lineStart(), (n = 1);
            },
            point: function (a, u) {
              var c = a > 0 ? r.l : -r.l,
                f = Object(r.a)(a - e);
              Object(r.a)(f - r.l) < r.h
                ? (t.point(e, (i = (i + u) / 2 > 0 ? r.j : -r.j)),
                  t.point(o, i),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(c, i),
                  t.point(a, i),
                  (n = 0))
                : o !== c &&
                  f >= r.l &&
                  (Object(r.a)(e - o) < r.h && (e -= o * r.h),
                  Object(r.a)(a - c) < r.h && (a -= c * r.h),
                  (i = (function (t, n, e, i) {
                    var o,
                      a,
                      u = Object(r.p)(t - e);
                    return Object(r.a)(u) > r.h
                      ? Object(r.d)(
                          (Object(r.p)(n) *
                            (a = Object(r.f)(i)) *
                            Object(r.p)(e) -
                            Object(r.p)(i) *
                              (o = Object(r.f)(n)) *
                              Object(r.p)(t)) /
                            (o * a * u)
                        )
                      : (n + i) / 2;
                  })(e, i, a, u)),
                  t.point(o, i),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(c, i),
                  (n = 0)),
                t.point((e = a), (i = u)),
                (o = c);
            },
            lineEnd: function () {
              t.lineEnd(), (e = i = NaN);
            },
            clean: function () {
              return 2 - n;
            },
          };
        },
        function (t, n, e, i) {
          var o;
          if (null == t)
            (o = e * r.j),
              i.point(-r.l, o),
              i.point(0, o),
              i.point(r.l, o),
              i.point(r.l, 0),
              i.point(r.l, -o),
              i.point(0, -o),
              i.point(-r.l, -o),
              i.point(-r.l, 0),
              i.point(-r.l, o);
          else if (Object(r.a)(t[0] - n[0]) > r.h) {
            var a = t[0] < n[0] ? r.l : -r.l;
            (o = (e * a) / 2), i.point(-a, o), i.point(0, o), i.point(a, o);
          } else i.point(n[0], n[1]);
        },
        [-r.l, -r.j]
      );
      function C(t, n, e, i, o, a) {
        if (e) {
          var u = Object(r.f)(n),
            c = Object(r.p)(n),
            f = i * e;
          null == o
            ? ((o = n + i * r.s), (a = n - f / 2))
            : ((o = T(u, o)),
              (a = T(u, a)),
              (i > 0 ? o < a : o > a) && (o += i * r.s));
          for (var l, s = o; i > 0 ? s > a : s < a; s -= f)
            (l = y([u, -c * Object(r.f)(s), -c * Object(r.p)(s)])),
              t.point(l[0], l[1]);
        }
      }
      function T(t, n) {
        ((n = b(n))[0] -= t), O(n);
        var e = Object(r.b)(-n[1]);
        return ((-n[2] < 0 ? -e : e) + r.s - r.h) % r.s;
      }
      var z = function (t) {
        var n = Object(r.f)(t),
          e = 6 * r.n,
          i = n > 0,
          o = Object(r.a)(n) > r.h;
        function a(t, e) {
          return Object(r.f)(t) * Object(r.f)(e) > n;
        }
        function u(t, e, i) {
          var o = [1, 0, 0],
            a = w(b(t), b(e)),
            u = m(a, a),
            c = a[0],
            f = u - c * c;
          if (!f) return !i && t;
          var l = (n * u) / f,
            s = (-n * c) / f,
            h = w(o, a),
            p = j(o, l);
          _(p, j(a, s));
          var d = h,
            v = m(p, d),
            g = m(d, d),
            O = v * v - g * (m(p, p) - 1);
          if (!(O < 0)) {
            var x = Object(r.q)(O),
              M = j(d, (-v - x) / g);
            if ((_(M, p), (M = y(M)), !i)) return M;
            var E,
              N = t[0],
              S = e[0],
              k = t[1],
              A = e[1];
            S < N && ((E = N), (N = S), (S = E));
            var L = S - N,
              P = Object(r.a)(L - r.l) < r.h;
            if (
              (!P && A < k && ((E = k), (k = A), (A = E)),
              P || L < r.h
                ? P
                  ? (k + A > 0) ^ (M[1] < (Object(r.a)(M[0] - N) < r.h ? k : A))
                  : k <= M[1] && M[1] <= A
                : (L > r.l) ^ (N <= M[0] && M[0] <= S))
            ) {
              var q = j(d, (-v + x) / g);
              return _(q, p), [M, y(q)];
            }
          }
        }
        function c(n, e) {
          var o = i ? t : r.l - t,
            a = 0;
          return (
            n < -o ? (a |= 1) : n > o && (a |= 2),
            e < -o ? (a |= 4) : e > o && (a |= 8),
            a
          );
        }
        return A(
          a,
          function (t) {
            var n, e, f, l, s;
            return {
              lineStart: function () {
                (l = f = !1), (s = 1);
              },
              point: function (p, d) {
                var v,
                  g = [p, d],
                  y = a(p, d),
                  b = i
                    ? y
                      ? 0
                      : c(p, d)
                    : y
                    ? c(p + (p < 0 ? r.l : -r.l), d)
                    : 0;
                if (
                  (!n && (l = f = y) && t.lineStart(),
                  y !== f &&
                    (!(v = u(n, g)) || h(n, v) || h(g, v)) &&
                    (g[2] = 1),
                  y !== f)
                )
                  (s = 0),
                    y
                      ? (t.lineStart(), (v = u(g, n)), t.point(v[0], v[1]))
                      : ((v = u(n, g)), t.point(v[0], v[1], 2), t.lineEnd()),
                    (n = v);
                else if (o && n && i ^ y) {
                  var m;
                  b & e ||
                    !(m = u(g, n, !0)) ||
                    ((s = 0),
                    i
                      ? (t.lineStart(),
                        t.point(m[0][0], m[0][1]),
                        t.point(m[1][0], m[1][1]),
                        t.lineEnd())
                      : (t.point(m[1][0], m[1][1]),
                        t.lineEnd(),
                        t.lineStart(),
                        t.point(m[0][0], m[0][1], 3)));
                }
                !y || (n && h(n, g)) || t.point(g[0], g[1]),
                  (n = g),
                  (f = y),
                  (e = b);
              },
              lineEnd: function () {
                f && t.lineEnd(), (n = null);
              },
              clean: function () {
                return s | ((l && f) << 1);
              },
            };
          },
          function (n, r, i, o) {
            C(o, t, e, i, n, r);
          },
          i ? [0, -t] : [-r.l, t - r.l]
        );
      };
      function R(t, n, e, i) {
        function o(r, o) {
          return t <= r && r <= e && n <= o && o <= i;
        }
        function a(r, o, a, c) {
          var l = 0,
            s = 0;
          if (
            null == r ||
            (l = u(r, a)) !== (s = u(o, a)) ||
            (f(r, o) < 0) ^ (a > 0)
          )
            do {
              c.point(0 === l || 3 === l ? t : e, l > 1 ? i : n);
            } while ((l = (l + a + 4) % 4) !== s);
          else c.point(o[0], o[1]);
        }
        function u(i, o) {
          return Object(r.a)(i[0] - t) < r.h
            ? o > 0
              ? 0
              : 3
            : Object(r.a)(i[0] - e) < r.h
            ? o > 0
              ? 2
              : 1
            : Object(r.a)(i[1] - n) < r.h
            ? o > 0
              ? 1
              : 0
            : o > 0
            ? 3
            : 2;
        }
        function c(t, n) {
          return f(t.x, n.x);
        }
        function f(t, n) {
          var e = u(t, 1),
            r = u(n, 1);
          return e !== r
            ? e - r
            : 0 === e
            ? n[1] - t[1]
            : 1 === e
            ? t[0] - n[0]
            : 2 === e
            ? t[1] - n[1]
            : n[0] - t[0];
        }
        return function (r) {
          var u,
            f,
            l,
            h,
            p,
            v,
            g,
            y,
            b,
            m,
            w,
            _ = r,
            j = s(),
            O = {
              point: x,
              lineStart: function () {
                (O.point = M), f && f.push((l = []));
                (m = !0), (b = !1), (g = y = NaN);
              },
              lineEnd: function () {
                u && (M(h, p), v && b && j.rejoin(), u.push(j.result()));
                (O.point = x), b && _.lineEnd();
              },
              polygonStart: function () {
                (_ = j), (u = []), (f = []), (w = !0);
              },
              polygonEnd: function () {
                var n = (function () {
                    for (var n = 0, e = 0, r = f.length; e < r; ++e)
                      for (
                        var o,
                          a,
                          u = f[e],
                          c = 1,
                          l = u.length,
                          s = u[0],
                          h = s[0],
                          p = s[1];
                        c < l;
                        ++c
                      )
                        (o = h),
                          (a = p),
                          (s = u[c]),
                          (h = s[0]),
                          (p = s[1]),
                          a <= i
                            ? p > i &&
                              (h - o) * (i - a) > (p - a) * (t - o) &&
                              ++n
                            : p <= i &&
                              (h - o) * (i - a) < (p - a) * (t - o) &&
                              --n;
                    return n;
                  })(),
                  e = w && n,
                  o = (u = k(u)).length;
                (e || o) &&
                  (r.polygonStart(),
                  e && (r.lineStart(), a(null, null, 1, r), r.lineEnd()),
                  o && d(u, c, n, a, r),
                  r.polygonEnd());
                (_ = r), (u = f = l = null);
              },
            };
          function x(t, n) {
            o(t, n) && _.point(t, n);
          }
          function M(r, a) {
            var u = o(r, a);
            if ((f && l.push([r, a]), m))
              (h = r),
                (p = a),
                (v = u),
                (m = !1),
                u && (_.lineStart(), _.point(r, a));
            else if (u && b) _.point(r, a);
            else {
              var c = [
                  (g = Math.max(-1e9, Math.min(1e9, g))),
                  (y = Math.max(-1e9, Math.min(1e9, y))),
                ],
                s = [
                  (r = Math.max(-1e9, Math.min(1e9, r))),
                  (a = Math.max(-1e9, Math.min(1e9, a))),
                ];
              !(function (t, n, e, r, i, o) {
                var a,
                  u = t[0],
                  c = t[1],
                  f = 0,
                  l = 1,
                  s = n[0] - u,
                  h = n[1] - c;
                if (((a = e - u), s || !(a > 0))) {
                  if (((a /= s), s < 0)) {
                    if (a < f) return;
                    a < l && (l = a);
                  } else if (s > 0) {
                    if (a > l) return;
                    a > f && (f = a);
                  }
                  if (((a = i - u), s || !(a < 0))) {
                    if (((a /= s), s < 0)) {
                      if (a > l) return;
                      a > f && (f = a);
                    } else if (s > 0) {
                      if (a < f) return;
                      a < l && (l = a);
                    }
                    if (((a = r - c), h || !(a > 0))) {
                      if (((a /= h), h < 0)) {
                        if (a < f) return;
                        a < l && (l = a);
                      } else if (h > 0) {
                        if (a > l) return;
                        a > f && (f = a);
                      }
                      if (((a = o - c), h || !(a < 0))) {
                        if (((a /= h), h < 0)) {
                          if (a > l) return;
                          a > f && (f = a);
                        } else if (h > 0) {
                          if (a < f) return;
                          a < l && (l = a);
                        }
                        return (
                          f > 0 && ((t[0] = u + f * s), (t[1] = c + f * h)),
                          l < 1 && ((n[0] = u + l * s), (n[1] = c + l * h)),
                          !0
                        );
                      }
                    }
                  }
                }
              })(c, s, t, n, e, i)
                ? u && (_.lineStart(), _.point(r, a), (w = !1))
                : (b || (_.lineStart(), _.point(c[0], c[1])),
                  _.point(s[0], s[1]),
                  u || _.lineEnd(),
                  (w = !1));
            }
            (g = r), (y = a), (b = u);
          }
          return O;
        };
      }
      var F = e(92);
      function I(t) {
        return function (n) {
          var e = new X();
          for (var r in t) e[r] = t[r];
          return (e.stream = n), e;
        };
      }
      function X() {}
      X.prototype = {
        constructor: X,
        point: function (t, n) {
          this.stream.point(t, n);
        },
        sphere: function () {
          this.stream.sphere();
        },
        lineStart: function () {
          this.stream.lineStart();
        },
        lineEnd: function () {
          this.stream.lineEnd();
        },
        polygonStart: function () {
          this.stream.polygonStart();
        },
        polygonEnd: function () {
          this.stream.polygonEnd();
        },
      };
      var $ = e(93),
        D = e(94);
      function G(t, n, e) {
        var r = t.clipExtent && t.clipExtent();
        return (
          t.scale(150).translate([0, 0]),
          null != r && t.clipExtent(null),
          Object($.a)(e, t.stream(D.a)),
          n(D.a.result()),
          null != r && t.clipExtent(r),
          t
        );
      }
      function Y(t, n, e) {
        return G(
          t,
          function (e) {
            var r = n[1][0] - n[0][0],
              i = n[1][1] - n[0][1],
              o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
              a = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
              u = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * o).translate([a, u]);
          },
          e
        );
      }
      var B = Object(r.f)(30 * r.n),
        H = function (t, n) {
          return +n
            ? (function (t, n) {
                function e(i, o, a, u, c, f, l, s, h, p, d, v, g, y) {
                  var b = l - i,
                    m = s - o,
                    w = b * b + m * m;
                  if (w > 4 * n && g--) {
                    var _ = u + p,
                      j = c + d,
                      O = f + v,
                      x = Object(r.q)(_ * _ + j * j + O * O),
                      M = Object(r.c)((O /= x)),
                      E =
                        Object(r.a)(Object(r.a)(O) - 1) < r.h ||
                        Object(r.a)(a - h) < r.h
                          ? (a + h) / 2
                          : Object(r.e)(j, _),
                      N = t(E, M),
                      S = N[0],
                      k = N[1],
                      A = S - i,
                      L = k - o,
                      P = m * A - b * L;
                    ((P * P) / w > n ||
                      Object(r.a)((b * A + m * L) / w - 0.5) > 0.3 ||
                      u * p + c * d + f * v < B) &&
                      (e(
                        i,
                        o,
                        a,
                        u,
                        c,
                        f,
                        S,
                        k,
                        E,
                        (_ /= x),
                        (j /= x),
                        O,
                        g,
                        y
                      ),
                      y.point(S, k),
                      e(S, k, E, _, j, O, l, s, h, p, d, v, g, y));
                  }
                }
                return function (n) {
                  var r,
                    i,
                    o,
                    a,
                    u,
                    c,
                    f,
                    l,
                    s,
                    h,
                    p,
                    d,
                    v = {
                      point: g,
                      lineStart: y,
                      lineEnd: w,
                      polygonStart: function () {
                        n.polygonStart(), (v.lineStart = _);
                      },
                      polygonEnd: function () {
                        n.polygonEnd(), (v.lineStart = y);
                      },
                    };
                  function g(e, r) {
                    (e = t(e, r)), n.point(e[0], e[1]);
                  }
                  function y() {
                    (l = NaN), (v.point = m), n.lineStart();
                  }
                  function m(r, i) {
                    var o = b([r, i]),
                      a = t(r, i);
                    e(
                      l,
                      s,
                      f,
                      h,
                      p,
                      d,
                      (l = a[0]),
                      (s = a[1]),
                      (f = r),
                      (h = o[0]),
                      (p = o[1]),
                      (d = o[2]),
                      16,
                      n
                    ),
                      n.point(l, s);
                  }
                  function w() {
                    (v.point = g), n.lineEnd();
                  }
                  function _() {
                    y(), (v.point = j), (v.lineEnd = O);
                  }
                  function j(t, n) {
                    m((r = t), n),
                      (i = l),
                      (o = s),
                      (a = h),
                      (u = p),
                      (c = d),
                      (v.point = m);
                  }
                  function O() {
                    e(l, s, f, h, p, d, i, o, r, a, u, c, 16, n),
                      (v.lineEnd = w),
                      w();
                  }
                  return v;
                };
              })(t, n)
            : (function (t) {
                return I({
                  point: function (n, e) {
                    (n = t(n, e)), this.stream.point(n[0], n[1]);
                  },
                });
              })(t);
        };
      var V = I({
        point: function (t, n) {
          this.stream.point(t * r.n, n * r.n);
        },
      });
      function U(t, n, e, r, i) {
        function o(o, a) {
          return [n + t * (o *= r), e - t * (a *= i)];
        }
        return (
          (o.invert = function (o, a) {
            return [((o - n) / t) * r, ((e - a) / t) * i];
          }),
          o
        );
      }
      function J(t, n, e, i, o, a) {
        var u = Object(r.f)(a),
          c = Object(r.p)(a),
          f = u * t,
          l = c * t,
          s = u / t,
          h = c / t,
          p = (c * e - u * n) / t,
          d = (c * n + u * e) / t;
        function v(t, r) {
          return [f * (t *= i) - l * (r *= o) + n, e - l * t - f * r];
        }
        return (
          (v.invert = function (t, n) {
            return [i * (s * t - h * n + p), o * (d - h * t - s * n)];
          }),
          v
        );
      }
      function W(t) {
        return (function (t) {
          var n,
            e,
            o,
            u,
            c,
            f,
            l,
            s,
            h,
            p,
            d = 150,
            v = 480,
            g = 250,
            y = 0,
            b = 0,
            m = 0,
            w = 0,
            _ = 0,
            j = 0,
            O = 1,
            x = 1,
            M = null,
            E = q,
            N = null,
            S = F.a,
            k = 0.5;
          function A(t) {
            return s(t[0] * r.n, t[1] * r.n);
          }
          function L(t) {
            return (t = s.invert(t[0], t[1])) && [t[0] * r.g, t[1] * r.g];
          }
          function P() {
            var t = J(d, 0, 0, O, x, j).apply(null, n(y, b)),
              r = (j ? J : U)(d, v - t[0], g - t[1], O, x, j);
            return (
              (e = a(m, w, _)), (l = i(n, r)), (s = i(e, l)), (f = H(l, k)), C()
            );
          }
          function C() {
            return (h = p = null), A;
          }
          return (
            (A.stream = function (t) {
              return h && p === t
                ? h
                : (h = V(
                    (function (t) {
                      return I({
                        point: function (n, e) {
                          var r = t(n, e);
                          return this.stream.point(r[0], r[1]);
                        },
                      });
                    })(e)(E(f(S((p = t)))))
                  ));
            }),
            (A.preclip = function (t) {
              return arguments.length ? ((E = t), (M = void 0), C()) : E;
            }),
            (A.postclip = function (t) {
              return arguments.length
                ? ((S = t), (N = o = u = c = null), C())
                : S;
            }),
            (A.clipAngle = function (t) {
              return arguments.length
                ? ((E = +t ? z((M = t * r.n)) : ((M = null), q)), C())
                : M * r.g;
            }),
            (A.clipExtent = function (t) {
              return arguments.length
                ? ((S =
                    null == t
                      ? ((N = o = u = c = null), F.a)
                      : R(
                          (N = +t[0][0]),
                          (o = +t[0][1]),
                          (u = +t[1][0]),
                          (c = +t[1][1])
                        )),
                  C())
                : null == N
                ? null
                : [
                    [N, o],
                    [u, c],
                  ];
            }),
            (A.scale = function (t) {
              return arguments.length ? ((d = +t), P()) : d;
            }),
            (A.translate = function (t) {
              return arguments.length
                ? ((v = +t[0]), (g = +t[1]), P())
                : [v, g];
            }),
            (A.center = function (t) {
              return arguments.length
                ? ((y = (t[0] % 360) * r.n), (b = (t[1] % 360) * r.n), P())
                : [y * r.g, b * r.g];
            }),
            (A.rotate = function (t) {
              return arguments.length
                ? ((m = (t[0] % 360) * r.n),
                  (w = (t[1] % 360) * r.n),
                  (_ = t.length > 2 ? (t[2] % 360) * r.n : 0),
                  P())
                : [m * r.g, w * r.g, _ * r.g];
            }),
            (A.angle = function (t) {
              return arguments.length ? ((j = (t % 360) * r.n), P()) : j * r.g;
            }),
            (A.reflectX = function (t) {
              return arguments.length ? ((O = t ? -1 : 1), P()) : O < 0;
            }),
            (A.reflectY = function (t) {
              return arguments.length ? ((x = t ? -1 : 1), P()) : x < 0;
            }),
            (A.precision = function (t) {
              return arguments.length
                ? ((f = H(l, (k = t * t))), C())
                : Object(r.q)(k);
            }),
            (A.fitExtent = function (t, n) {
              return Y(A, t, n);
            }),
            (A.fitSize = function (t, n) {
              return (function (t, n, e) {
                return Y(t, [[0, 0], n], e);
              })(A, t, n);
            }),
            (A.fitWidth = function (t, n) {
              return (function (t, n, e) {
                return G(
                  t,
                  function (e) {
                    var r = +n,
                      i = r / (e[1][0] - e[0][0]),
                      o = (r - i * (e[1][0] + e[0][0])) / 2,
                      a = -i * e[0][1];
                    t.scale(150 * i).translate([o, a]);
                  },
                  e
                );
              })(A, t, n);
            }),
            (A.fitHeight = function (t, n) {
              return (function (t, n, e) {
                return G(
                  t,
                  function (e) {
                    var r = +n,
                      i = r / (e[1][1] - e[0][1]),
                      o = -i * e[0][0],
                      a = (r - i * (e[1][1] + e[0][1])) / 2;
                    t.scale(150 * i).translate([o, a]);
                  },
                  e
                );
              })(A, t, n);
            }),
            function () {
              return (
                (n = t.apply(this, arguments)), (A.invert = n.invert && L), P()
              );
            }
          );
        })(function () {
          return t;
        })();
      }
      function Z(t, n) {
        return [t, Object(r.k)(Object(r.r)((r.j + n) / 2))];
      }
      Z.invert = function (t, n) {
        return [t, 2 * Object(r.d)(Object(r.i)(n)) - r.j];
      };
      n.a = function () {
        return (function (t) {
          var n,
            e,
            i,
            o = W(t),
            u = o.center,
            c = o.scale,
            f = o.translate,
            l = o.clipExtent,
            s = null;
          function h() {
            var u = r.l * c(),
              f = o(
                (function (t) {
                  function n(n) {
                    return (
                      ((n = t(n[0] * r.n, n[1] * r.n))[0] *= r.g),
                      (n[1] *= r.g),
                      n
                    );
                  }
                  return (
                    (t = a(
                      t[0] * r.n,
                      t[1] * r.n,
                      t.length > 2 ? t[2] * r.n : 0
                    )),
                    (n.invert = function (n) {
                      return (
                        ((n = t.invert(n[0] * r.n, n[1] * r.n))[0] *= r.g),
                        (n[1] *= r.g),
                        n
                      );
                    }),
                    n
                  );
                })(o.rotate()).invert([0, 0])
              );
            return l(
              null == s
                ? [
                    [f[0] - u, f[1] - u],
                    [f[0] + u, f[1] + u],
                  ]
                : t === Z
                ? [
                    [Math.max(f[0] - u, s), n],
                    [Math.min(f[0] + u, e), i],
                  ]
                : [
                    [s, Math.max(f[1] - u, n)],
                    [e, Math.min(f[1] + u, i)],
                  ]
            );
          }
          return (
            (o.scale = function (t) {
              return arguments.length ? (c(t), h()) : c();
            }),
            (o.translate = function (t) {
              return arguments.length ? (f(t), h()) : f();
            }),
            (o.center = function (t) {
              return arguments.length ? (u(t), h()) : u();
            }),
            (o.clipExtent = function (t) {
              return arguments.length
                ? (null == t
                    ? (s = n = e = i = null)
                    : ((s = +t[0][0]),
                      (n = +t[0][1]),
                      (e = +t[1][0]),
                      (i = +t[1][1])),
                  h())
                : null == s
                ? null
                : [
                    [s, n],
                    [e, i],
                  ];
            }),
            h()
          );
        })(Z).scale(961 / r.s);
      };
    },
    function (t, n, e) {
      "use strict";
      var r,
        i,
        o,
        a,
        u = e(68),
        c = e(145),
        f = e(76),
        l = function (t, n) {
          var e = Object(f.a)(t, n);
          if (!e) return t + "";
          var r = e[0],
            i = e[1];
          return i < 0
            ? "0." + new Array(-i).join("0") + r
            : r.length > i + 1
            ? r.slice(0, i + 1) + "." + r.slice(i + 1)
            : r + new Array(i - r.length + 2).join("0");
        },
        s = {
          "%": function (t, n) {
            return (100 * t).toFixed(n);
          },
          b: function (t) {
            return Math.round(t).toString(2);
          },
          c: function (t) {
            return t + "";
          },
          d: function (t) {
            return Math.round(t).toString(10);
          },
          e: function (t, n) {
            return t.toExponential(n);
          },
          f: function (t, n) {
            return t.toFixed(n);
          },
          g: function (t, n) {
            return t.toPrecision(n);
          },
          o: function (t) {
            return Math.round(t).toString(8);
          },
          p: function (t, n) {
            return l(100 * t, n);
          },
          r: l,
          s: function (t, n) {
            var e = Object(f.a)(t, n);
            if (!e) return t + "";
            var i = e[0],
              o = e[1],
              a =
                o - (r = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
              u = i.length;
            return a === u
              ? i
              : a > u
              ? i + new Array(a - u + 1).join("0")
              : a > 0
              ? i.slice(0, a) + "." + i.slice(a)
              : "0." +
                new Array(1 - a).join("0") +
                Object(f.a)(t, Math.max(0, n + a - 1))[0];
          },
          X: function (t) {
            return Math.round(t).toString(16).toUpperCase();
          },
          x: function (t) {
            return Math.round(t).toString(16);
          },
        },
        h = function (t) {
          return t;
        },
        p = Array.prototype.map,
        d = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "\xb5",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ],
        v = function (t) {
          var n,
            e,
            i =
              void 0 === t.grouping || void 0 === t.thousands
                ? h
                : ((n = p.call(t.grouping, Number)),
                  (e = t.thousands + ""),
                  function (t, r) {
                    for (
                      var i = t.length, o = [], a = 0, u = n[0], c = 0;
                      i > 0 &&
                      u > 0 &&
                      (c + u + 1 > r && (u = Math.max(1, r - c)),
                      o.push(t.substring((i -= u), i + u)),
                      !((c += u + 1) > r));

                    )
                      u = n[(a = (a + 1) % n.length)];
                    return o.reverse().join(e);
                  }),
            o = void 0 === t.currency ? "" : t.currency[0] + "",
            a = void 0 === t.currency ? "" : t.currency[1] + "",
            f = void 0 === t.decimal ? "." : t.decimal + "",
            l =
              void 0 === t.numerals
                ? h
                : (function (t) {
                    return function (n) {
                      return n.replace(/[0-9]/g, function (n) {
                        return t[+n];
                      });
                    };
                  })(p.call(t.numerals, String)),
            v = void 0 === t.percent ? "%" : t.percent + "",
            g = void 0 === t.minus ? "-" : t.minus + "",
            y = void 0 === t.nan ? "NaN" : t.nan + "";
          function b(t) {
            var n = (t = Object(c.a)(t)).fill,
              e = t.align,
              u = t.sign,
              h = t.symbol,
              p = t.zero,
              b = t.width,
              m = t.comma,
              w = t.precision,
              _ = t.trim,
              j = t.type;
            "n" === j
              ? ((m = !0), (j = "g"))
              : s[j] || (void 0 === w && (w = 12), (_ = !0), (j = "g")),
              (p || ("0" === n && "=" === e)) &&
                ((p = !0), (n = "0"), (e = "="));
            var O =
                "$" === h
                  ? o
                  : "#" === h && /[boxX]/.test(j)
                  ? "0" + j.toLowerCase()
                  : "",
              x = "$" === h ? a : /[%p]/.test(j) ? v : "",
              M = s[j],
              E = /[defgprs%]/.test(j);
            function N(t) {
              var o,
                a,
                c,
                s = O,
                h = x;
              if ("c" === j) (h = M(t) + h), (t = "");
              else {
                var v = (t = +t) < 0 || 1 / t < 0;
                if (
                  ((t = isNaN(t) ? y : M(Math.abs(t), w)),
                  _ &&
                    (t = (function (t) {
                      t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                        switch (t[r]) {
                          case ".":
                            i = n = r;
                            break;
                          case "0":
                            0 === i && (i = r), (n = r);
                            break;
                          default:
                            if (!+t[r]) break t;
                            i > 0 && (i = 0);
                        }
                      return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
                    })(t)),
                  v && 0 === +t && "+" !== u && (v = !1),
                  (s =
                    (v
                      ? "(" === u
                        ? u
                        : g
                      : "-" === u || "(" === u
                      ? ""
                      : u) + s),
                  (h =
                    ("s" === j ? d[8 + r / 3] : "") +
                    h +
                    (v && "(" === u ? ")" : "")),
                  E)
                )
                  for (o = -1, a = t.length; ++o < a; )
                    if (48 > (c = t.charCodeAt(o)) || c > 57) {
                      (h = (46 === c ? f + t.slice(o + 1) : t.slice(o)) + h),
                        (t = t.slice(0, o));
                      break;
                    }
              }
              m && !p && (t = i(t, 1 / 0));
              var N = s.length + t.length + h.length,
                S = N < b ? new Array(b - N + 1).join(n) : "";
              switch (
                (m &&
                  p &&
                  ((t = i(S + t, S.length ? b - h.length : 1 / 0)), (S = "")),
                e)
              ) {
                case "<":
                  t = s + t + h + S;
                  break;
                case "=":
                  t = s + S + t + h;
                  break;
                case "^":
                  t = S.slice(0, (N = S.length >> 1)) + s + t + h + S.slice(N);
                  break;
                default:
                  t = S + s + t + h;
              }
              return l(t);
            }
            return (
              (w =
                void 0 === w
                  ? 6
                  : /[gprs]/.test(j)
                  ? Math.max(1, Math.min(21, w))
                  : Math.max(0, Math.min(20, w))),
              (N.toString = function () {
                return t + "";
              }),
              N
            );
          }
          return {
            format: b,
            formatPrefix: function (t, n) {
              var e = b((((t = Object(c.a)(t)).type = "f"), t)),
                r =
                  3 * Math.max(-8, Math.min(8, Math.floor(Object(u.a)(n) / 3))),
                i = Math.pow(10, -r),
                o = d[8 + r / 3];
              return function (t) {
                return e(i * t) + o;
              };
            },
          };
        };
      e.d(n, "a", function () {
        return o;
      }),
        e.d(n, "b", function () {
          return a;
        }),
        (i = v({
          decimal: ".",
          thousands: ",",
          grouping: [3],
          currency: ["$", ""],
          minus: "-",
        })),
        (o = i.format),
        (a = i.formatPrefix);
    },
    function (t, n, e) {
      "use strict";
      var r,
        i,
        o,
        a,
        u = e(92),
        c = e(93),
        f = e(77),
        l = e(52),
        s = e(61),
        h = Object(f.a)(),
        p = Object(f.a)(),
        d = {
          point: s.a,
          lineStart: s.a,
          lineEnd: s.a,
          polygonStart: function () {
            (d.lineStart = v), (d.lineEnd = b);
          },
          polygonEnd: function () {
            (d.lineStart = d.lineEnd = d.point = s.a),
              h.add(Object(l.a)(p)),
              p.reset();
          },
          result: function () {
            var t = h / 2;
            return h.reset(), t;
          },
        };
      function v() {
        d.point = g;
      }
      function g(t, n) {
        (d.point = y), (r = o = t), (i = a = n);
      }
      function y(t, n) {
        p.add(a * t - o * n), (o = t), (a = n);
      }
      function b() {
        y(r, i);
      }
      var m,
        w,
        _,
        j,
        O = d,
        x = e(94),
        M = 0,
        E = 0,
        N = 0,
        S = 0,
        k = 0,
        A = 0,
        L = 0,
        P = 0,
        q = 0,
        C = {
          point: T,
          lineStart: z,
          lineEnd: I,
          polygonStart: function () {
            (C.lineStart = X), (C.lineEnd = $);
          },
          polygonEnd: function () {
            (C.point = T), (C.lineStart = z), (C.lineEnd = I);
          },
          result: function () {
            var t = q
              ? [L / q, P / q]
              : A
              ? [S / A, k / A]
              : N
              ? [M / N, E / N]
              : [NaN, NaN];
            return (M = E = N = S = k = A = L = P = q = 0), t;
          },
        };
      function T(t, n) {
        (M += t), (E += n), ++N;
      }
      function z() {
        C.point = R;
      }
      function R(t, n) {
        (C.point = F), T((_ = t), (j = n));
      }
      function F(t, n) {
        var e = t - _,
          r = n - j,
          i = Object(l.q)(e * e + r * r);
        (S += (i * (_ + t)) / 2),
          (k += (i * (j + n)) / 2),
          (A += i),
          T((_ = t), (j = n));
      }
      function I() {
        C.point = T;
      }
      function X() {
        C.point = D;
      }
      function $() {
        G(m, w);
      }
      function D(t, n) {
        (C.point = G), T((m = _ = t), (w = j = n));
      }
      function G(t, n) {
        var e = t - _,
          r = n - j,
          i = Object(l.q)(e * e + r * r);
        (S += (i * (_ + t)) / 2),
          (k += (i * (j + n)) / 2),
          (A += i),
          (L += (i = j * t - _ * n) * (_ + t)),
          (P += i * (j + n)),
          (q += 3 * i),
          T((_ = t), (j = n));
      }
      var Y = C;
      function B(t) {
        this._context = t;
      }
      B.prototype = {
        _radius: 4.5,
        pointRadius: function (t) {
          return (this._radius = t), this;
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          0 === this._line && this._context.closePath(), (this._point = NaN);
        },
        point: function (t, n) {
          switch (this._point) {
            case 0:
              this._context.moveTo(t, n), (this._point = 1);
              break;
            case 1:
              this._context.lineTo(t, n);
              break;
            default:
              this._context.moveTo(t + this._radius, n),
                this._context.arc(t, n, this._radius, 0, l.s);
          }
        },
        result: s.a,
      };
      var H,
        V,
        U,
        J,
        W,
        Z = Object(f.a)(),
        K = {
          point: s.a,
          lineStart: function () {
            K.point = Q;
          },
          lineEnd: function () {
            H && tt(V, U), (K.point = s.a);
          },
          polygonStart: function () {
            H = !0;
          },
          polygonEnd: function () {
            H = null;
          },
          result: function () {
            var t = +Z;
            return Z.reset(), t;
          },
        };
      function Q(t, n) {
        (K.point = tt), (V = J = t), (U = W = n);
      }
      function tt(t, n) {
        (J -= t), (W -= n), Z.add(Object(l.q)(J * J + W * W)), (J = t), (W = n);
      }
      var nt = K;
      function et() {
        this._string = [];
      }
      function rt(t) {
        return (
          "m0," +
          t +
          "a" +
          t +
          "," +
          t +
          " 0 1,1 0," +
          -2 * t +
          "a" +
          t +
          "," +
          t +
          " 0 1,1 0," +
          2 * t +
          "z"
        );
      }
      et.prototype = {
        _radius: 4.5,
        _circle: rt(4.5),
        pointRadius: function (t) {
          return (
            (t = +t) !== this._radius &&
              ((this._radius = t), (this._circle = null)),
            this
          );
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          0 === this._line && this._string.push("Z"), (this._point = NaN);
        },
        point: function (t, n) {
          switch (this._point) {
            case 0:
              this._string.push("M", t, ",", n), (this._point = 1);
              break;
            case 1:
              this._string.push("L", t, ",", n);
              break;
            default:
              null == this._circle && (this._circle = rt(this._radius)),
                this._string.push("M", t, ",", n, this._circle);
          }
        },
        result: function () {
          if (this._string.length) {
            var t = this._string.join("");
            return (this._string = []), t;
          }
          return null;
        },
      };
      n.a = function (t, n) {
        var e,
          r,
          i = 4.5;
        function o(t) {
          return (
            t &&
              ("function" === typeof i &&
                r.pointRadius(+i.apply(this, arguments)),
              Object(c.a)(t, e(r))),
            r.result()
          );
        }
        return (
          (o.area = function (t) {
            return Object(c.a)(t, e(O)), O.result();
          }),
          (o.measure = function (t) {
            return Object(c.a)(t, e(nt)), nt.result();
          }),
          (o.bounds = function (t) {
            return Object(c.a)(t, e(x.a)), x.a.result();
          }),
          (o.centroid = function (t) {
            return Object(c.a)(t, e(Y)), Y.result();
          }),
          (o.projection = function (n) {
            return arguments.length
              ? ((e = null == n ? ((t = null), u.a) : (t = n).stream), o)
              : t;
          }),
          (o.context = function (t) {
            return arguments.length
              ? ((r = null == t ? ((n = null), new et()) : new B((n = t))),
                "function" !== typeof i && r.pointRadius(i),
                o)
              : n;
          }),
          (o.pointRadius = function (t) {
            return arguments.length
              ? ((i = "function" === typeof t ? t : (r.pointRadius(+t), +t)), o)
              : i;
          }),
          o.projection(t).context(n)
        );
      };
    },
    ,
    function (t, n, e) {
      "use strict";
      var r = e(189),
        i = e(149),
        o = function (t, n) {
          n || (n = []);
          var e,
            r = t ? Math.min(n.length, t.length) : 0,
            i = n.slice();
          return function (o) {
            for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o;
            return i;
          };
        };
      function a(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView);
      }
      function u(t, n) {
        var e,
          r = n ? n.length : 0,
          i = t ? Math.min(r, t.length) : 0,
          o = new Array(i),
          a = new Array(r);
        for (e = 0; e < i; ++e) o[e] = p(t[e], n[e]);
        for (; e < r; ++e) a[e] = n[e];
        return function (t) {
          for (e = 0; e < i; ++e) a[e] = o[e](t);
          return a;
        };
      }
      var c = function (t, n) {
          var e = new Date();
          return (
            (t = +t),
            (n = +n),
            function (r) {
              return e.setTime(t * (1 - r) + n * r), e;
            }
          );
        },
        f = e(75),
        l = function (t, n) {
          var e,
            r = {},
            i = {};
          for (e in ((null !== t && "object" === typeof t) || (t = {}),
          (null !== n && "object" === typeof n) || (n = {}),
          n))
            e in t ? (r[e] = p(t[e], n[e])) : (i[e] = n[e]);
          return function (t) {
            for (e in r) i[e] = r[e](t);
            return i;
          };
        },
        s = e(139),
        h = e(87),
        p = (n.a = function (t, n) {
          var e,
            p = typeof n;
          return null == n || "boolean" === p
            ? Object(h.a)(n)
            : ("number" === p
                ? f.a
                : "string" === p
                ? (e = Object(r.a)(n))
                  ? ((n = e), i.a)
                  : s.a
                : n instanceof r.a
                ? i.a
                : n instanceof Date
                ? c
                : a(n)
                ? o
                : Array.isArray(n)
                ? u
                : ("function" !== typeof n.valueOf &&
                    "function" !== typeof n.toString) ||
                  isNaN(n)
                ? l
                : f.a)(t, n);
        });
    },
    function (t, n, e) {
      "use strict";
      var r = e(57),
        i = e(182),
        o = e(174),
        a = e(62),
        u = e(56),
        c = e(78);
      e(175), e(179);
      e(144);
      function f() {
        var t,
          n,
          e,
          u,
          c,
          f = 0,
          l = 1,
          s = a.c,
          h = !1;
        function p(n) {
          return isNaN((n = +n))
            ? c
            : s(
                0 === e
                  ? 0.5
                  : ((n = (u(n) - t) * e), h ? Math.max(0, Math.min(1, n)) : n)
              );
        }
        function d(t) {
          return function (n) {
            var e, i, o, a;
            return arguments.length
              ? ((e = n),
                (o = (i = Object(r.a)(e, 2))[0]),
                (a = i[1]),
                (s = t(o, a)),
                p)
              : [s(0), s(1)];
          };
        }
        return (
          (p.domain = function (i) {
            var o, a;
            return arguments.length
              ? ((o = i),
                (a = Object(r.a)(o, 2)),
                (f = a[0]),
                (l = a[1]),
                (t = u((f = +f))),
                (n = u((l = +l))),
                (e = t === n ? 0 : 1 / (n - t)),
                p)
              : [f, l];
          }),
          (p.clamp = function (t) {
            return arguments.length ? ((h = !!t), p) : h;
          }),
          (p.interpolator = function (t) {
            return arguments.length ? ((s = t), p) : s;
          }),
          (p.range = d(i.a)),
          (p.rangeRound = d(o.a)),
          (p.unknown = function (t) {
            return arguments.length ? ((c = t), p) : c;
          }),
          function (r) {
            return (
              (u = r),
              (t = r(f)),
              (n = r(l)),
              (e = t === n ? 0 : 1 / (n - t)),
              p
            );
          }
        );
      }
      function l(t, n) {
        return n
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function s() {
        var t = Object(c.a)(f()(a.c));
        return (
          (t.copy = function () {
            return l(t, s());
          }),
          u.a.apply(t, arguments)
        );
      }
      e.d(n, "a", function () {
        return s;
      });
    },
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      var r = function (t, n, e) {
        (t.prototype = n.prototype = e), (e.constructor = t);
      };
      function i(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e;
      }
      function o() {}
      e.d(n, "a", function () {
        return m;
      }),
        e.d(n, "b", function () {
          return O;
        });
      var a = "\\s*([+-]?\\d+)\\s*",
        u = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        c = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        f = /^#([0-9a-f]{3,8})$/,
        l = new RegExp("^rgb\\(" + [a, a, a] + "\\)$"),
        s = new RegExp("^rgb\\(" + [c, c, c] + "\\)$"),
        h = new RegExp("^rgba\\(" + [a, a, a, u] + "\\)$"),
        p = new RegExp("^rgba\\(" + [c, c, c, u] + "\\)$"),
        d = new RegExp("^hsl\\(" + [u, c, c] + "\\)$"),
        v = new RegExp("^hsla\\(" + [u, c, c, u] + "\\)$"),
        g = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function y() {
        return this.rgb().formatHex();
      }
      function b() {
        return this.rgb().formatRgb();
      }
      function m(t) {
        var n, e;
        return (
          (t = (t + "").trim().toLowerCase()),
          (n = f.exec(t))
            ? ((e = n[1].length),
              (n = parseInt(n[1], 16)),
              6 === e
                ? w(n)
                : 3 === e
                ? new x(
                    ((n >> 8) & 15) | ((n >> 4) & 240),
                    ((n >> 4) & 15) | (240 & n),
                    ((15 & n) << 4) | (15 & n),
                    1
                  )
                : 8 === e
                ? _(
                    (n >> 24) & 255,
                    (n >> 16) & 255,
                    (n >> 8) & 255,
                    (255 & n) / 255
                  )
                : 4 === e
                ? _(
                    ((n >> 12) & 15) | ((n >> 8) & 240),
                    ((n >> 8) & 15) | ((n >> 4) & 240),
                    ((n >> 4) & 15) | (240 & n),
                    (((15 & n) << 4) | (15 & n)) / 255
                  )
                : null)
            : (n = l.exec(t))
            ? new x(n[1], n[2], n[3], 1)
            : (n = s.exec(t))
            ? new x(
                (255 * n[1]) / 100,
                (255 * n[2]) / 100,
                (255 * n[3]) / 100,
                1
              )
            : (n = h.exec(t))
            ? _(n[1], n[2], n[3], n[4])
            : (n = p.exec(t))
            ? _(
                (255 * n[1]) / 100,
                (255 * n[2]) / 100,
                (255 * n[3]) / 100,
                n[4]
              )
            : (n = d.exec(t))
            ? S(n[1], n[2] / 100, n[3] / 100, 1)
            : (n = v.exec(t))
            ? S(n[1], n[2] / 100, n[3] / 100, n[4])
            : g.hasOwnProperty(t)
            ? w(g[t])
            : "transparent" === t
            ? new x(NaN, NaN, NaN, 0)
            : null
        );
      }
      function w(t) {
        return new x((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function _(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new x(t, n, e, r);
      }
      function j(t) {
        return (
          t instanceof o || (t = m(t)),
          t ? new x((t = t.rgb()).r, t.g, t.b, t.opacity) : new x()
        );
      }
      function O(t, n, e, r) {
        return 1 === arguments.length
          ? j(t)
          : new x(t, n, e, null == r ? 1 : r);
      }
      function x(t, n, e, r) {
        (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
      }
      function M() {
        return "#" + N(this.r) + N(this.g) + N(this.b);
      }
      function E() {
        var t = this.opacity;
        return (
          (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
            ? "rgb("
            : "rgba(") +
          Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
          (1 === t ? ")" : ", " + t + ")")
        );
      }
      function N(t) {
        return (
          ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16
            ? "0"
            : "") + t.toString(16)
        );
      }
      function S(t, n, e, r) {
        return (
          r <= 0
            ? (t = n = e = NaN)
            : e <= 0 || e >= 1
            ? (t = n = NaN)
            : n <= 0 && (t = NaN),
          new A(t, n, e, r)
        );
      }
      function k(t) {
        if (t instanceof A) return new A(t.h, t.s, t.l, t.opacity);
        if ((t instanceof o || (t = m(t)), !t)) return new A();
        if (t instanceof A) return t;
        var n = (t = t.rgb()).r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = Math.min(n, e, r),
          a = Math.max(n, e, r),
          u = NaN,
          c = a - i,
          f = (a + i) / 2;
        return (
          c
            ? ((u =
                n === a
                  ? (e - r) / c + 6 * (e < r)
                  : e === a
                  ? (r - n) / c + 2
                  : (n - e) / c + 4),
              (c /= f < 0.5 ? a + i : 2 - a - i),
              (u *= 60))
            : (c = f > 0 && f < 1 ? 0 : u),
          new A(u, c, f, t.opacity)
        );
      }
      function A(t, n, e, r) {
        (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
      }
      function L(t, n, e) {
        return (
          255 *
          (t < 60
            ? n + ((e - n) * t) / 60
            : t < 180
            ? e
            : t < 240
            ? n + ((e - n) * (240 - t)) / 60
            : n)
        );
      }
      r(o, m, {
        copy: function (t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable: function () {
          return this.rgb().displayable();
        },
        hex: y,
        formatHex: y,
        formatHsl: function () {
          return k(this).formatHsl();
        },
        formatRgb: b,
        toString: b,
      }),
        r(
          x,
          O,
          i(o, {
            brighter: function (t) {
              return (
                (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new x(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new x(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb: function () {
              return this;
            },
            displayable: function () {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: M,
            formatHex: M,
            formatRgb: E,
            toString: E,
          })
        ),
        r(
          A,
          function (t, n, e, r) {
            return 1 === arguments.length
              ? k(t)
              : new A(t, n, e, null == r ? 1 : r);
          },
          i(o, {
            brighter: function (t) {
              return (
                (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new A(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new A(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb: function () {
              var t = (this.h % 360) + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                r = e + (e < 0.5 ? e : 1 - e) * n,
                i = 2 * e - r;
              return new x(
                L(t >= 240 ? t - 240 : t + 120, i, r),
                L(t, i, r),
                L(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity
              );
            },
            displayable: function () {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl: function () {
              var t = this.opacity;
              return (
                (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                  ? "hsl("
                  : "hsla(") +
                (this.h || 0) +
                ", " +
                100 * (this.s || 0) +
                "%, " +
                100 * (this.l || 0) +
                "%" +
                (1 === t ? ")" : ", " + t + ")")
              );
            },
          })
        );
    },
  ]),
]);
//# sourceMappingURL=8.3b33eea6.chunk.js.map
