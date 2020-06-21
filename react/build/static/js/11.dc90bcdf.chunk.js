(this["webpackJsonpvisualizing-commuter-data"] =
  this["webpackJsonpvisualizing-commuter-data"] || []).push([
  [11],
  {
    118: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var n = r(24);
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
    },
    119: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      var n = r(65);
      function o(e, t) {
        if (null == e) return {};
        var r,
          o,
          i = Object(n.a)(e, t);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          for (o = 0; o < u.length; o++)
            (r = u[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
    },
    120: function (e, t, r) {
      "use strict";
      var n = Array.isArray,
        o = Object.keys,
        i = Object.prototype.hasOwnProperty;
      e.exports = function e(t, r) {
        if (t === r) return !0;
        if (t && r && "object" == typeof t && "object" == typeof r) {
          var u,
            a,
            c,
            f = n(t),
            s = n(r);
          if (f && s) {
            if ((a = t.length) != r.length) return !1;
            for (u = a; 0 !== u--; ) if (!e(t[u], r[u])) return !1;
            return !0;
          }
          if (f != s) return !1;
          var l = t instanceof Date,
            d = r instanceof Date;
          if (l != d) return !1;
          if (l && d) return t.getTime() == r.getTime();
          var p = t instanceof RegExp,
            y = r instanceof RegExp;
          if (p != y) return !1;
          if (p && y) return t.toString() == r.toString();
          var v = o(t);
          if ((a = v.length) !== o(r).length) return !1;
          for (u = a; 0 !== u--; ) if (!i.call(r, v[u])) return !1;
          for (u = a; 0 !== u--; ) if (!e(t[(c = v[u])], r[c])) return !1;
          return !0;
        }
        return t !== t && r !== r;
      };
    },
    121: function (e, t, r) {
      "use strict";
      var n = r(67);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "withIsVisible", {
          enumerable: !0,
          get: function () {
            return o.withIsVisible;
          },
        }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "useIsVisible", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "VisibilityObserver", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        });
      var o = r(122),
        i = n(r(85)),
        u = n(r(132)),
        a = n(r(74));
    },
    122: function (e, t, r) {
      "use strict";
      var n = r(67);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.withIsVisible = void 0);
      var o = n(r(123)),
        i = n(r(124)),
        u = n(r(4)),
        a = n(r(126)),
        c = n(r(85)),
        f = function (e) {
          return e.displayName || e.name || "Component";
        },
        s = { once: !1 };
      t.withIsVisible = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
          r = t.once,
          n = function (t) {
            var n = t.forwardedRef,
              a = (0, i.default)(t, ["forwardedRef"]);
            return u.default.createElement(c.default, {
              once: r,
              children: function (t) {
                return u.default.createElement(
                  e,
                  (0, o.default)({}, a, { isVisible: t, ref: n })
                );
              },
            });
          };
        function l(e, t) {
          return u.default.createElement(
            n,
            (0, o.default)({}, e, { forwardedRef: t })
          );
        }
        return (
          (n.displayName = "WithIsVisible(".concat(f(e), ")")),
          (0, a.default)(n, e),
          (l.displayName = "withIsVisible(".concat(f(e), ")")),
          u.default.forwardRef(l)
        );
      };
    },
    123: function (e, t) {
      function r() {
        return (
          (e.exports = r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      e.exports = r;
    },
    124: function (e, t, r) {
      var n = r(125);
      e.exports = function (e, t) {
        if (null == e) return {};
        var r,
          o,
          i = n(e, t);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          for (o = 0; o < u.length; o++)
            (r = u[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      };
    },
    125: function (e, t) {
      e.exports = function (e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      };
    },
    126: function (e, t, r) {
      "use strict";
      var n = r(72),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        u = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      function c(e) {
        return n.isMemo(e) ? u : a[e.$$typeof] || o;
      }
      a[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      };
      var f = Object.defineProperty,
        s = Object.getOwnPropertyNames,
        l = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        y = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" !== typeof r) {
          if (y) {
            var o = p(r);
            o && o !== y && e(t, o, n);
          }
          var u = s(r);
          l && (u = u.concat(l(r)));
          for (var a = c(t), v = c(r), h = 0; h < u.length; ++h) {
            var b = u[h];
            if (!i[b] && (!n || !n[b]) && (!v || !v[b]) && (!a || !a[b])) {
              var g = d(r, b);
              try {
                f(t, b, g);
              } catch (O) {}
            }
          }
          return t;
        }
        return t;
      };
    },
    127: function (e, t, r) {
      var n = r(128),
        o = r(86);
      e.exports = function (e, t) {
        return !t || ("object" !== n(t) && "function" !== typeof t) ? o(e) : t;
      };
    },
    128: function (e, t) {
      function r(e) {
        return (r =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function n(t) {
        return (
          "function" === typeof Symbol && "symbol" === r(Symbol.iterator)
            ? (e.exports = n = function (e) {
                return r(e);
              })
            : (e.exports = n = function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : r(e);
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    129: function (e, t) {
      function r(t) {
        return (
          (e.exports = r = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          r(t)
        );
      }
      e.exports = r;
    },
    130: function (e, t, r) {
      var n = r(131);
      e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && n(e, t);
      };
    },
    131: function (e, t) {
      function r(t, n) {
        return (
          (e.exports = r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          r(t, n)
        );
      }
      e.exports = r;
    },
    132: function (e, t, r) {
      "use strict";
      var n = r(67);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = n(r(82)),
        i = r(4),
        u = n(r(74)),
        a = { once: !1 };
      var c = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
          r = t.once,
          n = (0, i.useState)(!1),
          c = (0, o.default)(n, 2),
          f = c[0],
          s = c[1];
        function l(t) {
          var n = t.isIntersecting;
          s(n), n && r && u.default.unwatch(e.current);
        }
        return (
          (0, i.useEffect)(
            function () {
              return u.default.watch(e.current, l);
            },
            [e, l]
          ),
          f
        );
      };
      t.default = c;
    },
    188: function (e, t, r) {
      "use strict";
      var n = r(4);
      t.a = function (e, t) {
        var r = (function () {
          var e = Object(n.useRef)(!0);
          return e.current ? ((e.current = !1), !0) : e.current;
        })();
        Object(n.useEffect)(function () {
          if (!r) return e();
        }, t);
      };
    },
    67: function (e, t) {
      e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    },
    74: function (e, t, r) {
      "use strict";
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = {},
        i = new WeakMap(),
        u = function (e) {
          return e.forEach(function (e) {
            return i.get(e.target).call(null, e);
          });
        },
        a = function (e) {
          n.unobserve(e), i.delete(e);
        },
        c = {
          getSubscribers: function () {
            return i;
          },
          setIntersectionObserverOptions: function (e) {
            n || (o = e);
          },
          unwatch: a,
          watch: function (e, t) {
            if (e && !i.has(e))
              return (
                i.set(e, t),
                (n || (n = new IntersectionObserver(u, o)), n).observe(e),
                function () {
                  return a(e);
                }
              );
          },
        };
      t.default = c;
    },
    84: function (e, t, r) {
      "use strict";
      function n(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        throw Error(
          "[Immer] minified error nr: " +
            e +
            (r.length ? " " + r.join(",") : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf"
        );
      }
      function o(e) {
        return !!e && !!e[$];
      }
      function i(e) {
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            return !t || t === Object.prototype;
          })(e) ||
            Array.isArray(e) ||
            !!e[L] ||
            !!e.constructor[L] ||
            d(e) ||
            p(e))
        );
      }
      function u(e, t, r) {
        void 0 === r && (r = !1),
          0 === a(e)
            ? (r ? Object.keys : U)(e).forEach(function (n) {
                (r && "symbol" == typeof n) || t(n, e[n], e);
              })
            : e.forEach(function (r, n) {
                return t(n, r, e);
              });
      }
      function a(e) {
        var t = e[$];
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
          ? 1
          : d(e)
          ? 2
          : p(e)
          ? 3
          : 0;
      }
      function c(e, t) {
        return 2 === a(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function f(e, t) {
        return 2 === a(e) ? e.get(t) : e[t];
      }
      function s(e, t, r) {
        var n = a(e);
        2 === n ? e.set(t, r) : 3 === n ? (e.delete(t), e.add(r)) : (e[t] = r);
      }
      function l(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      function d(e) {
        return W && e instanceof Map;
      }
      function p(e) {
        return N && e instanceof Set;
      }
      function y(e) {
        return e.o || e.t;
      }
      function v(e) {
        if (Array.isArray(e)) return e.slice();
        var t = Object.getOwnPropertyDescriptors(e);
        for (var r in (delete t[$], t)) {
          var n = t[r];
          !1 === n.writable && ((n.writable = !0), (n.configurable = !0)),
            (n.get || n.set) &&
              (t[r] = {
                configurable: !0,
                writable: !0,
                enumerable: n.enumerable,
                value: e[r],
              });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function h(e, t) {
        Object.isFrozen(e) ||
          o(e) ||
          !i(e) ||
          (a(e) > 1 && (e.set = e.add = e.clear = e.delete = b),
          Object.freeze(e),
          t &&
            u(
              e,
              function (e, t) {
                return h(t, !0);
              },
              !0
            ));
      }
      function b() {
        n(2);
      }
      function g(e) {
        var t = H[e];
        return t || n(19, e), t;
      }
      function O() {
        return C;
      }
      function m(e, t) {
        t && (g("Patches"), (e.u = []), (e.s = []), (e.p = t));
      }
      function w(e) {
        j(e), e.v.forEach(_), (e.v = null);
      }
      function j(e) {
        e === C && (C = e.l);
      }
      function P(e) {
        return (C = { v: [], l: C, h: e, m: !0, _: 0 });
      }
      function _(e) {
        var t = e[$];
        0 === t.i || 1 === t.i ? t.j() : (t.O = !0);
      }
      function S(e, t) {
        t._ = t.v.length;
        var r = t.v[0],
          o = void 0 !== e && e !== r;
        return (
          t.h.g || g("ES5").S(t, e, o),
          o
            ? (r[$].P && (w(t), n(4)),
              i(e) && ((e = x(t, e)), t.l || I(t, e)),
              t.u && g("Patches").M(r[$], e, t.u, t.s))
            : (e = x(t, r, [])),
          w(t),
          t.u && t.p(t.u, t.s),
          e !== K ? e : void 0
        );
      }
      function x(e, t, r) {
        if (null == (n = t) || "object" != typeof n || Object.isFrozen(n))
          return t;
        var n,
          o = t[$];
        if (!o)
          return (
            u(
              t,
              function (n, i) {
                return E(e, o, t, n, i, r);
              },
              !0
            ),
            t
          );
        if (o.A !== e) return t;
        if (!o.P) return I(e, o.t, !0), o.t;
        if (!o.I) {
          (o.I = !0), o.A._--;
          var i = 4 === o.i || 5 === o.i ? (o.o = v(o.k)) : o.o;
          u(i, function (t, n) {
            return E(e, o, i, t, n, r);
          }),
            I(e, i, !1),
            r && e.u && g("Patches").R(o, r, e.u, e.s);
        }
        return o.o;
      }
      function E(e, t, r, n, u, a) {
        if (o(u)) {
          var f = x(
            e,
            u,
            a && t && 3 !== t.i && !c(t.D, n) ? a.concat(n) : void 0
          );
          if ((s(r, n, f), !o(f))) return;
          e.m = !1;
        }
        if (i(u) && !Object.isFrozen(u)) {
          if (!e.h.N && e._ < 1) return;
          x(e, u), (t && t.A.l) || I(e, u);
        }
      }
      function I(e, t, r) {
        void 0 === r && (r = !1), e.h.N && e.m && h(t, r);
      }
      function R(e, t) {
        var r = e[$];
        return (r ? y(r) : e)[t];
      }
      function D(e) {
        e.P || ((e.P = !0), e.l && D(e.l));
      }
      function A(e) {
        e.o || (e.o = v(e.t));
      }
      function k(e, t, r) {
        var n = d(t)
          ? g("MapSet").T(t, r)
          : p(t)
          ? g("MapSet").F(t, r)
          : e.g
          ? (function (e, t) {
              var r = Array.isArray(e),
                n = {
                  i: r ? 1 : 0,
                  A: t ? t.A : O(),
                  P: !1,
                  I: !1,
                  D: {},
                  l: t,
                  t: e,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                },
                o = n,
                i = J;
              r && ((o = [n]), (i = q));
              var u = Proxy.revocable(o, i),
                a = u.revoke,
                c = u.proxy;
              return (n.k = c), (n.j = a), c;
            })(t, r)
          : g("ES5").J(t, r);
        return (r ? r.A : O()).v.push(n), n;
      }
      function V(e) {
        return (
          o(e) || n(22, e),
          (function e(t) {
            if (!i(t)) return t;
            var r,
              n = t[$],
              o = a(t);
            if (n) {
              if (!n.P && (n.i < 4 || !g("ES5").K(n))) return n.t;
              (n.I = !0), (r = M(t, o)), (n.I = !1);
            } else r = M(t, o);
            return (
              u(r, function (t, o) {
                (n && f(n.t, t) === o) || s(r, t, e(o));
              }),
              3 === o ? new Set(r) : r
            );
          })(e)
        );
      }
      function M(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return v(e);
      }
      var T,
        C,
        z = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        W = "undefined" != typeof Map,
        N = "undefined" != typeof Set,
        F =
          "undefined" != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "undefined" != typeof Reflect,
        K = z ? Symbol("immer-nothing") : (((T = {})["immer-nothing"] = !0), T),
        L = z ? Symbol("immer-draftable") : "__$immer_draftable",
        $ = z ? Symbol("immer-state") : "__$immer_state",
        U =
          ("undefined" != typeof Symbol && Symbol.iterator,
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames),
        H = {},
        J = {
          get: function (e, t) {
            if (t === $) return e;
            var r = y(e);
            if (!c(r, t))
              return (function (e, t, r) {
                if (r in t)
                  for (var n = Object.getPrototypeOf(t); n; ) {
                    var o,
                      i = Object.getOwnPropertyDescriptor(n, r);
                    if (i)
                      return "value" in i
                        ? i.value
                        : null === (o = i.get) || void 0 === o
                        ? void 0
                        : o.call(e.k);
                    n = Object.getPrototypeOf(n);
                  }
              })(e, r, t);
            var n = r[t];
            return e.I || !i(n)
              ? n
              : n === R(e.t, t)
              ? (A(e), (e.o[t] = k(e.A.h, n, e)))
              : n;
          },
          has: function (e, t) {
            return t in y(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(y(e));
          },
          set: function (e, t, r) {
            if (((e.D[t] = !0), !e.P)) {
              if (l(r, R(y(e), t)) && void 0 !== r) return !0;
              A(e), D(e);
            }
            return (e.o[t] = r), !0;
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== R(e.t, t) || t in e.t
                ? ((e.D[t] = !1), A(e), D(e))
                : delete e.D[t],
              e.o && delete e.o[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var r = y(e),
              n = Reflect.getOwnPropertyDescriptor(r, t);
            return n
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || "length" !== t,
                  enumerable: n.enumerable,
                  value: r[t],
                }
              : n;
          },
          defineProperty: function () {
            n(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            n(12);
          },
        },
        q = {};
      u(J, function (e, t) {
        q[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (q.deleteProperty = function (e, t) {
          return J.deleteProperty.call(this, e[0], t);
        }),
        (q.set = function (e, t, r) {
          return J.set.call(this, e[0], t, r, e[0]);
        });
      var G = new ((function () {
          function e(e) {
            (this.g = F),
              (this.N = !1),
              "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze),
              (this.produce = this.produce.bind(this)),
              (this.produceWithPatches = this.produceWithPatches.bind(this));
          }
          var t = e.prototype;
          return (
            (t.produce = function (e, t, r) {
              if ("function" == typeof e && "function" != typeof t) {
                var o = t;
                t = e;
                var u = this;
                return function (e) {
                  var r = this;
                  void 0 === e && (e = o);
                  for (
                    var n = arguments.length,
                      i = Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    i[a - 1] = arguments[a];
                  return u.produce(e, function (e) {
                    var n;
                    return (n = t).call.apply(n, [r, e].concat(i));
                  });
                };
              }
              var a;
              if (
                ("function" != typeof t && n(6),
                void 0 !== r && "function" != typeof r && n(7),
                i(e))
              ) {
                var c = P(this),
                  f = k(this, e, void 0),
                  s = !0;
                try {
                  (a = t(f)), (s = !1);
                } finally {
                  s ? w(c) : j(c);
                }
                return "undefined" != typeof Promise && a instanceof Promise
                  ? a.then(
                      function (e) {
                        return m(c, r), S(e, c);
                      },
                      function (e) {
                        throw (w(c), e);
                      }
                    )
                  : (m(c, r), S(a, c));
              }
              if (!e || "object" != typeof e) {
                if ((a = t(e)) === K) return;
                return void 0 === a && (a = e), this.N && h(a, !0), a;
              }
              n(21, e);
            }),
            (t.produceWithPatches = function (e, t) {
              var r,
                n,
                o = this;
              return "function" == typeof e
                ? function (t) {
                    for (
                      var r = arguments.length,
                        n = Array(r > 1 ? r - 1 : 0),
                        i = 1;
                      i < r;
                      i++
                    )
                      n[i - 1] = arguments[i];
                    return o.produceWithPatches(t, function (t) {
                      return e.apply(void 0, [t].concat(n));
                    });
                  }
                : [
                    this.produce(e, t, function (e, t) {
                      (r = e), (n = t);
                    }),
                    r,
                    n,
                  ];
            }),
            (t.createDraft = function (e) {
              i(e) || n(8), o(e) && (e = V(e));
              var t = P(this),
                r = k(this, e, void 0);
              return (r[$].C = !0), j(t), r;
            }),
            (t.finishDraft = function (e, t) {
              var r = (e && e[$]).A;
              return m(r, t), S(void 0, r);
            }),
            (t.setAutoFreeze = function (e) {
              this.N = e;
            }),
            (t.setUseProxies = function (e) {
              e && !F && n(20), (this.g = e);
            }),
            (t.applyPatches = function (e, t) {
              var r;
              for (r = t.length - 1; r >= 0; r--) {
                var n = t[r];
                if (0 === n.path.length && "replace" === n.op) {
                  e = n.value;
                  break;
                }
              }
              var i = g("Patches").$;
              return o(e)
                ? i(e, t)
                : this.produce(e, function (e) {
                    return i(e, t.slice(r + 1));
                  });
            }),
            e
          );
        })())(),
        X = G.produce;
      G.produceWithPatches.bind(G),
        G.setAutoFreeze.bind(G),
        G.setUseProxies.bind(G),
        G.applyPatches.bind(G),
        G.createDraft.bind(G),
        G.finishDraft.bind(G);
      t.a = X;
    },
    85: function (e, t, r) {
      "use strict";
      var n = r(67);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = n(r(29)),
        i = n(r(30)),
        u = n(r(127)),
        a = n(r(129)),
        c = n(r(86)),
        f = n(r(130)),
        s = n(r(28)),
        l = n(r(4)),
        d = n(r(27)),
        p = n(r(74)),
        y = (function (e) {
          function t() {
            var e, r;
            (0, o.default)(this, t);
            for (var n = arguments.length, i = new Array(n), f = 0; f < n; f++)
              i[f] = arguments[f];
            return (
              (r = (0, u.default)(
                this,
                (e = (0, a.default)(t)).call.apply(e, [this].concat(i))
              )),
              (0, s.default)((0, c.default)(r), "state", { isVisible: !1 }),
              (0, s.default)(
                (0, c.default)(r),
                "handleVisibilityChange",
                function (e) {
                  var t = e.isIntersecting;
                  r.state.isVisible !== t && r.setState({ isVisible: t }),
                    t && r.props.once && r.unwatch();
                }
              ),
              r
            );
          }
          return (
            (0, f.default)(t, e),
            (0, i.default)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.unwatch = p.default.watch(
                    d.default.findDOMNode(this),
                    this.handleVisibilityChange
                  );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.unwatch();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.isVisible,
                    t = this.props.children(e);
                  return t && l.default.Children.only(t);
                },
              },
            ]),
            t
          );
        })(l.default.PureComponent);
      t.default = y;
    },
    86: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    95: function (e, t, r) {
      "use strict";
      var n = r(4),
        o = r(120),
        i = r.n(o);
      function u() {
        return (
          "undefined" === typeof document ||
          "undefined" === typeof document.visibilityState ||
          "hidden" !== document.visibilityState
        );
      }
      function a() {
        return "undefined" === typeof navigator.onLine || navigator.onLine;
      }
      var c = new WeakMap(),
        f = 0;
      var s = new ((function () {
          function e(e) {
            void 0 === e && (e = {}),
              (this.__cache = new Map(Object.entries(e))),
              (this.__listeners = []);
          }
          return (
            (e.prototype.get = function (e) {
              var t = this.serializeKey(e)[0];
              return this.__cache.get(t);
            }),
            (e.prototype.set = function (e, t, r) {
              void 0 === r && (r = !0);
              var n = this.serializeKey(e)[0];
              this.__cache.set(n, t), r && D(e, t, !1), this.notify();
            }),
            (e.prototype.keys = function () {
              return Array.from(this.__cache.keys());
            }),
            (e.prototype.has = function (e) {
              var t = this.serializeKey(e)[0];
              return this.__cache.has(t);
            }),
            (e.prototype.clear = function (e) {
              void 0 === e && (e = !0),
                e &&
                  this.__cache.forEach(function (e) {
                    return D(e, null, !1);
                  }),
                this.__cache.clear(),
                this.notify();
            }),
            (e.prototype.delete = function (e, t) {
              void 0 === t && (t = !0);
              var r = this.serializeKey(e)[0];
              t && D(e, null, !1), this.__cache.delete(r), this.notify();
            }),
            (e.prototype.serializeKey = function (e) {
              var t = null;
              if ("function" === typeof e)
                try {
                  e = e();
                } catch (r) {
                  e = "";
                }
              return (
                Array.isArray(e)
                  ? ((t = e),
                    (e = (function (e) {
                      if (!e.length) return "";
                      for (var t = "arg", r = 0; r < e.length; ++r) {
                        var n = void 0;
                        null === e[r] || "object" !== typeof e[r]
                          ? (n =
                              "string" === typeof e[r]
                                ? '"' + e[r] + '"'
                                : String(e[r]))
                          : c.has(e[r])
                          ? (n = c.get(e[r]))
                          : ((n = f), c.set(e[r], f++)),
                          (t += "@" + n);
                      }
                      return t;
                    })(e)))
                  : (e = String(e || "")),
                [e, t, e ? "err@" + e : ""]
              );
            }),
            (e.prototype.subscribe = function (e) {
              var t = this;
              if ("function" !== typeof e)
                throw new Error("Expected the listener to be a function.");
              var r = !0;
              return (
                this.__listeners.push(e),
                function () {
                  if (r) {
                    r = !1;
                    var n = t.__listeners.indexOf(e);
                    n > -1 &&
                      ((t.__listeners[n] =
                        t.__listeners[t.__listeners.length - 1]),
                      t.__listeners.length--);
                  }
                }
              );
            }),
            (e.prototype.notify = function () {
              for (var e = 0, t = this.__listeners; e < t.length; e++) {
                (0, t[e])();
              }
            }),
            e
          );
        })())(),
        l = {},
        d = {},
        p = {},
        y = {},
        v = {};
      var h =
          "undefined" !== typeof window &&
          navigator.connection &&
          -1 !== ["slow-2g", "2g"].indexOf(navigator.connection.effectiveType),
        b = {
          onLoadingSlow: function () {},
          onSuccess: function () {},
          onError: function () {},
          onErrorRetry: function (e, t, r, n, o) {
            if (
              u() &&
              !(r.errorRetryCount && o.retryCount > r.errorRetryCount)
            ) {
              var i = Math.min(o.retryCount || 0, 8),
                a = ~~((Math.random() + 0.5) * (1 << i)) * r.errorRetryInterval;
              setTimeout(n, a, o);
            }
          },
          errorRetryInterval: 1e3 * (h ? 10 : 5),
          focusThrottleInterval: 5e3,
          dedupingInterval: 2e3,
          loadingTimeout: 1e3 * (h ? 5 : 3),
          refreshInterval: 0,
          revalidateOnFocus: !0,
          revalidateOnReconnect: !0,
          refreshWhenHidden: !1,
          refreshWhenOffline: !1,
          shouldRetryOnError: !0,
          suspense: !1,
          compare: i.a,
        },
        g = !1;
      if ("undefined" !== typeof window && window.addEventListener && !g) {
        var O = function () {
          if (u() && a()) for (var e in p) p[e][0] && p[e][0]();
        };
        window.addEventListener("visibilitychange", O, !1),
          window.addEventListener("focus", O, !1),
          (g = !0);
      }
      var m = b;
      function w(e, t) {
        var r = !1;
        return function () {
          for (var n = [], o = 0; o < arguments.length; o++)
            n[o] = arguments[o];
          r ||
            ((r = !0),
            e.apply(void 0, n),
            setTimeout(function () {
              return (r = !1);
            }, t));
        };
      }
      var j = Object(n.createContext)({});
      j.displayName = "SWRConfigContext";
      var P = j,
        _ = function (e, t, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function u(e) {
              try {
                c(n.next(e));
              } catch (t) {
                i(t);
              }
            }
            function a(e) {
              try {
                c(n.throw(e));
              } catch (t) {
                i(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(u, a);
            }
            c((n = n.apply(e, t || [])).next());
          });
        },
        S = function (e, t) {
          var r,
            n,
            o,
            i,
            u = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function a(i) {
            return function (a) {
              return (function (i) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; u; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (o =
                          2 & i[0]
                            ? n.return
                            : i[0]
                            ? n.throw || ((o = n.return) && o.call(n), 0)
                            : n.next) &&
                        !(o = o.call(n, i[1])).done)
                    )
                      return o;
                    switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return u.label++, { value: i[1], done: !1 };
                      case 5:
                        u.label++, (n = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = u.ops.pop()), u.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = u.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          u = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          u.label = i[1];
                          break;
                        }
                        if (6 === i[0] && u.label < o[1]) {
                          (u.label = o[1]), (o = i);
                          break;
                        }
                        if (o && u.label < o[2]) {
                          (u.label = o[2]), u.ops.push(i);
                          break;
                        }
                        o[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    i = t.call(e, u);
                  } catch (a) {
                    (i = [6, a]), (n = 0);
                  } finally {
                    r = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, a]);
            };
          }
        },
        x = "undefined" === typeof window,
        E = x ? n.useEffect : n.useLayoutEffect,
        I = function (e, t) {
          void 0 === t && (t = !0);
          var r = s.serializeKey(e),
            n = r[0],
            o = r[2];
          if (!n) return Promise.resolve();
          var i = y[n];
          if (n && i) {
            for (
              var u = s.get(n), a = s.get(o), c = [], f = 0;
              f < i.length;
              ++f
            )
              c.push(i[f](t, u, a, f > 0));
            return Promise.all(c).then(function () {
              return s.get(n);
            });
          }
          return Promise.resolve(s.get(n));
        },
        R = function (e, t, r) {
          var n = y[e];
          if (e && n) for (var o = 0; o < n.length; ++o) n[o](!1, t, r);
        },
        D = function (e, t, r) {
          return (
            void 0 === r && (r = !0),
            _(void 0, void 0, void 0, function () {
              var n, o, i, u, a, c, f, l, p, h;
              return S(this, function (b) {
                switch (b.label) {
                  case 0:
                    if (!(n = s.serializeKey(e)[0])) return [2];
                    if ("undefined" === typeof t) return [2, I(e, r)];
                    if (
                      ((v[n] = Date.now() - 1),
                      (u = v[n]),
                      (a = d[n]),
                      !t || "function" !== typeof t)
                    )
                      return [3, 5];
                    b.label = 1;
                  case 1:
                    return b.trys.push([1, 3, , 4]), [4, t(s.get(n))];
                  case 2:
                    return (o = b.sent()), [3, 4];
                  case 3:
                    return (c = b.sent()), (i = c), [3, 4];
                  case 4:
                    return [3, 11];
                  case 5:
                    if (!t || "function" !== typeof t.then) return [3, 10];
                    b.label = 6;
                  case 6:
                    return b.trys.push([6, 8, , 9]), [4, t];
                  case 7:
                    return (o = b.sent()), [3, 9];
                  case 8:
                    return (f = b.sent()), (i = f), [3, 9];
                  case 9:
                    return [3, 11];
                  case 10:
                    (o = t), (b.label = 11);
                  case 11:
                    if (u !== v[n] || a !== d[n]) {
                      if (i) throw i;
                      return [2, o];
                    }
                    if (
                      ("undefined" !== typeof o && s.set(n, o, !1), (l = y[n]))
                    ) {
                      for (p = [], h = 0; h < l.length; ++h)
                        p.push(l[h](!!r, o, i, h > 0));
                      return [
                        2,
                        Promise.all(p).then(function () {
                          return s.get(n);
                        }),
                      ];
                    }
                    if (i) throw i;
                    return [2, o];
                }
              });
            })
          );
        };
      P.Provider;
      var A = function () {
        for (var e = this, t = [], r = 0; r < arguments.length; r++)
          t[r] = arguments[r];
        var o,
          i,
          c = {};
        t.length >= 1 && (o = t[0]),
          t.length > 2
            ? ((i = t[1]), (c = t[2]))
            : "function" === typeof t[1]
            ? (i = t[1])
            : "object" === typeof t[1] && (c = t[1]);
        var f = s.serializeKey(o),
          h = f[0],
          b = f[1],
          g = f[2];
        (c = Object.assign({}, m, Object(n.useContext)(P), c)),
          "undefined" === typeof i && (i = c.fetcher);
        var O = s.get(h) || c.initialData,
          j = s.get(g),
          I = Object(n.useRef)({ data: !1, error: !1, isValidating: !1 }),
          A = Object(n.useRef)({ data: O, error: j, isValidating: !1 }),
          k = Object(n.useState)(null)[1],
          V = Object(n.useCallback)(function (e) {
            var t = !1;
            for (var r in e) (A.current[r] = e[r]), I.current[r] && (t = !0);
            (t || c.suspense) && k({});
          }, []),
          M = Object(n.useRef)(!1),
          T = Object(n.useRef)(h),
          C = Object(n.useRef)({
            emit: function (e) {
              for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
              M.current || c[e].apply(c, t);
            },
          }),
          z = Object(n.useCallback)(
            function (e, t) {
              return D(h, e, t);
            },
            [h]
          ),
          W = Object(n.useCallback)(
            function (t) {
              return (
                void 0 === t && (t = {}),
                _(e, void 0, void 0, function () {
                  var e, r, n, o, u, a, f;
                  return S(this, function (p) {
                    switch (p.label) {
                      case 0:
                        if (!h || !i) return [2, !1];
                        if (M.current) return [2, !1];
                        (t = Object.assign({ dedupe: !1 }, t)),
                          (e = !0),
                          (r = "undefined" !== typeof l[h] && t.dedupe),
                          (p.label = 1);
                      case 1:
                        return (
                          p.trys.push([1, 6, , 7]),
                          V({ isValidating: !0 }),
                          (n = void 0),
                          (o = void 0),
                          r ? ((o = d[h]), [4, l[h]]) : [3, 3]
                        );
                      case 2:
                        return (n = p.sent()), [3, 5];
                      case 3:
                        return (
                          l[h] && (v[h] = Date.now() - 1),
                          c.loadingTimeout &&
                            !s.get(h) &&
                            setTimeout(function () {
                              e && C.current.emit("onLoadingSlow", h, c);
                            }, c.loadingTimeout),
                          (l[h] = null !== b ? i.apply(void 0, b) : i(h)),
                          (d[h] = o = Date.now()),
                          [4, l[h]]
                        );
                      case 4:
                        (n = p.sent()),
                          setTimeout(function () {
                            delete l[h], delete d[h];
                          }, c.dedupingInterval),
                          C.current.emit("onSuccess", n, h, c),
                          (p.label = 5);
                      case 5:
                        return v[h] && o <= v[h]
                          ? (V({ isValidating: !1 }), [2, !1])
                          : (s.set(h, n, !1),
                            s.set(g, void 0, !1),
                            (u = { isValidating: !1 }),
                            "undefined" !== typeof A.current.error &&
                              (u.error = void 0),
                            c.compare(A.current.data, n) || (u.data = n),
                            V(u),
                            r || R(h, n, void 0),
                            [3, 7]);
                      case 6:
                        return (
                          (a = p.sent()),
                          delete l[h],
                          delete d[h],
                          s.set(g, a, !1),
                          A.current.error !== a &&
                            (V({ isValidating: !1, error: a }),
                            r || R(h, void 0, a)),
                          C.current.emit("onError", a, h, c),
                          c.shouldRetryOnError &&
                            ((f = (t.retryCount || 0) + 1),
                            C.current.emit(
                              "onErrorRetry",
                              a,
                              h,
                              c,
                              W,
                              Object.assign({ dedupe: !0 }, t, {
                                retryCount: f,
                              })
                            )),
                          [3, 7]
                        );
                      case 7:
                        return (e = !1), [2, !0];
                    }
                  });
                })
              );
            },
            [h]
          );
        if (
          (E(
            function () {
              if (h) {
                M.current = !1;
                var e = A.current.data,
                  t = s.get(h) || c.initialData;
                (T.current === h && c.compare(e, t)) ||
                  (V({ data: t }), (T.current = h));
                var r,
                  n = function () {
                    return W({ dedupe: !0 });
                  };
                (c.revalidateOnMount ||
                  (!c.initialData && void 0 === c.revalidateOnMount)) &&
                  ("undefined" !== typeof t && !x && window.requestIdleCallback
                    ? window.requestIdleCallback(n)
                    : n()),
                  c.revalidateOnFocus &&
                    ((r = w(n, c.focusThrottleInterval)),
                    p[h] ? p[h].push(r) : (p[h] = [r]));
                var o = function (e, t, r, o) {
                  void 0 === e && (e = !0), void 0 === o && (o = !0);
                  var i = {},
                    u = !1;
                  return (
                    "undefined" === typeof t ||
                      c.compare(A.current.data, t) ||
                      ((i.data = t), (u = !0)),
                    A.current.error !== r && ((i.error = r), (u = !0)),
                    u && V(i),
                    !!e && (o ? n() : W())
                  );
                };
                y[h] ? y[h].push(o) : (y[h] = [o]);
                var i = null;
                return (
                  !x &&
                    window.addEventListener &&
                    c.revalidateOnReconnect &&
                    window.addEventListener("online", (i = n)),
                  function () {
                    var e, t;
                    ((V = function () {
                      return null;
                    }),
                    (M.current = !0),
                    r && p[h]) &&
                      (t = (e = p[h]).indexOf(r)) >= 0 &&
                      ((e[t] = e[e.length - 1]), e.pop());
                    y[h] &&
                      (t = (e = y[h]).indexOf(o)) >= 0 &&
                      ((e[t] = e[e.length - 1]), e.pop());
                    !x &&
                      window.removeEventListener &&
                      null !== i &&
                      window.removeEventListener("online", i);
                  }
                );
              }
            },
            [h, W]
          ),
          E(
            function () {
              var t = null;
              return (
                c.refreshInterval &&
                  (t = setTimeout(function r() {
                    return _(e, void 0, void 0, function () {
                      return S(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return A.current.error ||
                              (!c.refreshWhenHidden && !u()) ||
                              (!c.refreshWhenOffline && !a())
                              ? [3, 2]
                              : [4, W({ dedupe: !0 })];
                          case 1:
                            e.sent(), (e.label = 2);
                          case 2:
                            return (
                              c.refreshInterval &&
                                (t = setTimeout(r, c.refreshInterval)),
                              [2]
                            );
                        }
                      });
                    });
                  }, c.refreshInterval)),
                function () {
                  t && clearTimeout(t);
                }
              );
            },
            [c.refreshInterval, c.refreshWhenHidden, c.refreshWhenOffline, W]
          ),
          c.suspense)
        ) {
          var N = s.get(h) || O,
            F = s.get(g) || j;
          if ("undefined" === typeof N && "undefined" === typeof F) {
            if ((l[h] || W(), l[h] && "function" === typeof l[h].then))
              throw l[h];
            N = l[h];
          }
          if ("undefined" === typeof N && F) throw F;
          return {
            error: F,
            data: N,
            revalidate: W,
            mutate: z,
            isValidating: A.current.isValidating,
          };
        }
        return Object(n.useMemo)(
          function () {
            var e = { revalidate: W, mutate: z };
            return (
              Object.defineProperties(e, {
                error: {
                  get: function () {
                    return (
                      (I.current.error = !0),
                      T.current === h ? A.current.error : j
                    );
                  },
                  enumerable: !0,
                },
                data: {
                  get: function () {
                    return (
                      (I.current.data = !0),
                      T.current === h ? A.current.data : O
                    );
                  },
                  enumerable: !0,
                },
                isValidating: {
                  get: function () {
                    return (
                      (I.current.isValidating = !0), A.current.isValidating
                    );
                  },
                  enumerable: !0,
                },
              }),
              e
            );
          },
          [W]
        );
      };
      new Map();
      t.a = A;
    },
  },
]);
//# sourceMappingURL=11.dc90bcdf.chunk.js.map
