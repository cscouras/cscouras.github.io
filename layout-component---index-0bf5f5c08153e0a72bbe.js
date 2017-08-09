webpackJsonp([0xef47e37750d80000], {
  "./node_modules/css-loader/lib/css-base.js": function(e, t) {
    e.exports = function() {
      var e = [];
      return e.toString = function() {
        for (var e = [], t = 0; t < this.length; t++) {
          var n = this[t];
          n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
        }
        return e.join("")
      }, e.i = function(t, n) {
        "string" == typeof t && (t = [
          [null, t, ""]
        ]);
        for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];
          "number" == typeof i && (r[i] = !0)
        }
        for (o = 0; o < t.length; o++) {
          var u = t[o];
          "number" == typeof u[0] && r[u[0]] || (n && !u[2] ? u[2] = n : n && (u[2] = "(" + u[2] + ") and (" + n + ")"), e.push(u))
        }
      }, e
    }
  },
  "./node_modules/deep-equal/index.js": function(e, t, n) {
    function r(e) {
      return null === e || void 0 === e
    }

    function o(e) {
      return !(!e || "object" != typeof e || "number" != typeof e.length) && ("function" == typeof e.copy && "function" == typeof e.slice && !(e.length > 0 && "number" != typeof e[0]))
    }

    function i(e, t, n) {
      var i, s;
      if (r(e) || r(t)) return !1;
      if (e.prototype !== t.prototype) return !1;
      if (l(e)) return !!l(t) && (e = u.call(e), t = u.call(t), c(e, t, n));
      if (o(e)) {
        if (!o(t)) return !1;
        if (e.length !== t.length) return !1;
        for (i = 0; i < e.length; i++)
          if (e[i] !== t[i]) return !1;
        return !0
      }
      try {
        var T = a(e),
          d = a(t)
      } catch (e) {
        return !1
      }
      if (T.length != d.length) return !1;
      for (T.sort(), d.sort(), i = T.length - 1; i >= 0; i--)
        if (T[i] != d[i]) return !1;
      for (i = T.length - 1; i >= 0; i--)
        if (s = T[i], !c(e[s], t[s], n)) return !1;
      return typeof e == typeof t
    }
    var u = Array.prototype.slice,
      a = n("./node_modules/deep-equal/lib/keys.js"),
      l = n("./node_modules/deep-equal/lib/is_arguments.js"),
      c = e.exports = function(e, t, n) {
        return n || (n = {}), e === t || (e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !e || !t || "object" != typeof e && "object" != typeof t ? n.strict ? e === t : e == t : i(e, t, n))
      }
  },
  "./node_modules/deep-equal/lib/is_arguments.js": function(e, t) {
    function n(e) {
      return "[object Arguments]" == Object.prototype.toString.call(e)
    }

    function r(e) {
      return e && "object" == typeof e && "number" == typeof e.length && Object.prototype.hasOwnProperty.call(e, "callee") && !Object.prototype.propertyIsEnumerable.call(e, "callee") || !1
    }
    var o = "[object Arguments]" == function() {
      return Object.prototype.toString.call(arguments)
    }();
    t = e.exports = o ? n : r, t.supported = n, t.unsupported = r
  },
  "./node_modules/deep-equal/lib/keys.js": function(e, t) {
    function n(e) {
      var t = [];
      for (var n in e) t.push(n);
      return t
    }
    t = e.exports = "function" == typeof Object.keys ? Object.keys : n, t.shim = n
  },
  "./node_modules/exenv/index.js": function(e, t, n) {
    var r;
    ! function() {
      "use strict";
      var o = !("undefined" == typeof window || !window.document || !window.document.createElement),
        i = {
          canUseDOM: o,
          canUseWorkers: "undefined" != typeof Worker,
          canUseEventListeners: o && !(!window.addEventListener && !window.attachEvent),
          canUseViewport: o && !!window.screen
        };
      r = function() {
        return i
      }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
    }()
  },
  "./node_modules/react-helmet/lib/Helmet.js": function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function o(e, t) {
      var n = {};
      for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
      return n
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    t.__esModule = !0, t.Helmet = void 0;
    var l = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      },
      c = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      s = n("./node_modules/react/react.js"),
      T = r(s),
      d = n("./node_modules/prop-types/index.js"),
      f = r(d),
      M = n("./node_modules/react-side-effect/lib/index.js"),
      E = r(M),
      p = n("./node_modules/deep-equal/index.js"),
      g = r(p),
      A = n("./node_modules/react-helmet/lib/HelmetUtils.js"),
      y = n("./node_modules/react-helmet/lib/HelmetConstants.js"),
      I = function(e) {
        var t, n;
        return n = t = function(t) {
          function n() {
            return i(this, n), u(this, t.apply(this, arguments))
          }
          return a(n, t), n.prototype.shouldComponentUpdate = function(e) {
            return !(0, g.default)(this.props, e)
          }, n.prototype.mapNestedChildrenToProps = function(e, t) {
            if (!t) return null;
            switch (e.type) {
              case y.TAG_NAMES.SCRIPT:
              case y.TAG_NAMES.NOSCRIPT:
                return {
                  innerHTML: t
                };
              case y.TAG_NAMES.STYLE:
                return {
                  cssText: t
                }
            }
            throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
          }, n.prototype.flattenArrayTypeChildren = function(e) {
            var t, n = e.child,
              r = e.arrayTypeChildren,
              o = e.newChildProps,
              i = e.nestedChildren;
            return l({}, r, (t = {}, t[n.type] = [].concat(r[n.type] || [], [l({}, o, this.mapNestedChildrenToProps(n, i))]), t))
          }, n.prototype.mapObjectTypeChildren = function(e) {
            var t, n, r = e.child,
              o = e.newProps,
              i = e.newChildProps,
              u = e.nestedChildren;
            switch (r.type) {
              case y.TAG_NAMES.TITLE:
                return l({}, o, (t = {}, t[r.type] = u, t.titleAttributes = l({}, i), t));
              case y.TAG_NAMES.BODY:
                return l({}, o, {
                  bodyAttributes: l({}, i)
                });
              case y.TAG_NAMES.HTML:
                return l({}, o, {
                  htmlAttributes: l({}, i)
                })
            }
            return l({}, o, (n = {}, n[r.type] = l({}, i), n))
          }, n.prototype.mapArrayTypeChildrenToProps = function(e, t) {
            var n = l({}, t);
            return Object.keys(e).forEach(function(t) {
              var r;
              n = l({}, n, (r = {}, r[t] = e[t], r))
            }), n
          }, n.prototype.warnOnInvalidChildren = function(e, t) {
            return !0
          }, n.prototype.mapChildrenToProps = function(e, t) {
            var n = this,
              r = {};
            return T.default.Children.forEach(e, function(e) {
              if (e && e.props) {
                var i = e.props,
                  u = i.children,
                  a = o(i, ["children"]),
                  l = (0, A.convertReactPropstoHtmlAttributes)(a);
                switch (n.warnOnInvalidChildren(e, u), e.type) {
                  case y.TAG_NAMES.LINK:
                  case y.TAG_NAMES.META:
                  case y.TAG_NAMES.NOSCRIPT:
                  case y.TAG_NAMES.SCRIPT:
                  case y.TAG_NAMES.STYLE:
                    r = n.flattenArrayTypeChildren({
                      child: e,
                      arrayTypeChildren: r,
                      newChildProps: l,
                      nestedChildren: u
                    });
                    break;
                  default:
                    t = n.mapObjectTypeChildren({
                      child: e,
                      newProps: t,
                      newChildProps: l,
                      nestedChildren: u
                    })
                }
              }
            }), t = this.mapArrayTypeChildrenToProps(r, t)
          }, n.prototype.render = function() {
            var t = this.props,
              n = t.children,
              r = o(t, ["children"]),
              i = l({}, r);
            return n && (i = this.mapChildrenToProps(n, i)), T.default.createElement(e, i)
          }, c(n, null, [{
            key: "canUseDOM",
            set: function(t) {
              e.canUseDOM = t
            }
          }]), n
        }(T.default.Component), t.propTypes = {
          base: f.default.object,
          bodyAttributes: f.default.object,
          children: f.default.oneOfType([f.default.arrayOf(f.default.node), f.default.node]),
          defaultTitle: f.default.string,
          encodeSpecialCharacters: f.default.bool,
          htmlAttributes: f.default.object,
          link: f.default.arrayOf(f.default.object),
          meta: f.default.arrayOf(f.default.object),
          noscript: f.default.arrayOf(f.default.object),
          onChangeClientState: f.default.func,
          script: f.default.arrayOf(f.default.object),
          style: f.default.arrayOf(f.default.object),
          title: f.default.string,
          titleAttributes: f.default.object,
          titleTemplate: f.default.string
        }, t.defaultProps = {
          encodeSpecialCharacters: !0
        }, t.peek = e.peek, t.rewind = function() {
          var t = e.rewind();
          return t || (t = (0, A.mapStateOnServer)({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {}
          })), t
        }, n
      },
      N = function() {
        return null
      },
      j = (0, E.default)(A.reducePropsToState, A.handleClientStateChange, A.mapStateOnServer)(N),
      m = I(j);
    m.renderStatic = m.rewind, t.Helmet = m, t.default = m
  },
  "./node_modules/react-helmet/lib/HelmetConstants.js": function(e, t) {
    t.__esModule = !0;
    var n = (t.ATTRIBUTE_NAMES = {
        BODY: "bodyAttributes",
        HTML: "htmlAttributes",
        TITLE: "titleAttributes"
      }, t.TAG_NAMES = {
        BASE: "base",
        BODY: "body",
        HEAD: "head",
        HTML: "html",
        LINK: "link",
        META: "meta",
        NOSCRIPT: "noscript",
        SCRIPT: "script",
        STYLE: "style",
        TITLE: "title"
      }),
      r = (t.VALID_TAG_NAMES = Object.keys(n).map(function(e) {
        return n[e]
      }), t.TAG_PROPERTIES = {
        CHARSET: "charset",
        CSS_TEXT: "cssText",
        HREF: "href",
        HTTPEQUIV: "http-equiv",
        INNER_HTML: "innerHTML",
        ITEM_PROP: "itemprop",
        NAME: "name",
        PROPERTY: "property",
        REL: "rel",
        SRC: "src"
      }, t.REACT_TAG_MAP = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex"
      });
    t.HELMET_PROPS = {
      DEFAULT_TITLE: "defaultTitle",
      ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
      ON_CHANGE_CLIENT_STATE: "onChangeClientState",
      TITLE_TEMPLATE: "titleTemplate"
    }, t.HTML_TAG_MAP = Object.keys(r).reduce(function(e, t) {
      return e[r[t]] = t, e
    }, {}), t.SELF_CLOSING_TAGS = [n.NOSCRIPT, n.SCRIPT, n.STYLE], t.HELMET_ATTRIBUTE = "data-react-helmet"
  },
  "./node_modules/react-helmet/lib/HelmetUtils.js": function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.__esModule = !0, t.warn = t.requestIdleCallback = t.reducePropsToState = t.mapStateOnServer = t.handleClientStateChange = t.convertReactPropstoHtmlAttributes = void 0;
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      },
      u = n("./node_modules/react/react.js"),
      a = r(u),
      l = n("./node_modules/object-assign/index.js"),
      c = r(l),
      s = n("./node_modules/react-helmet/lib/HelmetConstants.js"),
      T = function(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
      },
      d = function(e) {
        var t = g(e, s.TAG_NAMES.TITLE),
          n = g(e, s.HELMET_PROPS.TITLE_TEMPLATE);
        if (n && t) return n.replace(/%s/g, function() {
          return t
        });
        var r = g(e, s.HELMET_PROPS.DEFAULT_TITLE);
        return t || r || void 0
      },
      f = function(e) {
        return g(e, s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function() {}
      },
      M = function(e, t) {
        return t.filter(function(t) {
          return "undefined" != typeof t[e]
        }).map(function(t) {
          return t[e]
        }).reduce(function(e, t) {
          return i({}, e, t)
        }, {})
      },
      E = function(e, t) {
        return t.filter(function(e) {
          return "undefined" != typeof e[s.TAG_NAMES.BASE]
        }).map(function(e) {
          return e[s.TAG_NAMES.BASE]
        }).reverse().reduce(function(t, n) {
          if (!t.length)
            for (var r = Object.keys(n), o = 0; o < r.length; o++) {
              var i = r[o],
                u = i.toLowerCase();
              if (e.indexOf(u) !== -1 && n[u]) return t.concat(n)
            }
          return t
        }, [])
      },
      p = function(e, t, n) {
        var r = {};
        return n.filter(function(t) {
          return !!Array.isArray(t[e]) || ("undefined" != typeof t[e] && N("Helmet: " + e + ' should be of type "Array". Instead found type "' + o(t[e]) + '"'), !1)
        }).map(function(t) {
          return t[e]
        }).reverse().reduce(function(e, n) {
          var o = {};
          n.filter(function(e) {
            for (var n = void 0, i = Object.keys(e), u = 0; u < i.length; u++) {
              var a = i[u],
                l = a.toLowerCase();
              t.indexOf(l) === -1 || n === s.TAG_PROPERTIES.REL && "canonical" === e[n].toLowerCase() || l === s.TAG_PROPERTIES.REL && "stylesheet" === e[l].toLowerCase() || (n = l), t.indexOf(a) === -1 || a !== s.TAG_PROPERTIES.INNER_HTML && a !== s.TAG_PROPERTIES.CSS_TEXT && a !== s.TAG_PROPERTIES.ITEM_PROP || (n = a)
            }
            if (!n || !e[n]) return !1;
            var c = e[n].toLowerCase();
            return r[n] || (r[n] = {}), o[n] || (o[n] = {}), !r[n][c] && (o[n][c] = !0, !0)
          }).reverse().forEach(function(t) {
            return e.push(t)
          });
          for (var i = Object.keys(o), u = 0; u < i.length; u++) {
            var a = i[u],
              l = (0, c.default)({}, r[a], o[a]);
            r[a] = l
          }
          return e
        }, []).reverse()
      },
      g = function(e, t) {
        for (var n = e.length - 1; n >= 0; n--) {
          var r = e[n];
          if (r.hasOwnProperty(t)) return r[t]
        }
        return null
      },
      A = function(e) {
        return {
          baseTag: E([s.TAG_PROPERTIES.HREF], e),
          bodyAttributes: M(s.ATTRIBUTE_NAMES.BODY, e),
          encode: g(e, s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
          htmlAttributes: M(s.ATTRIBUTE_NAMES.HTML, e),
          linkTags: p(s.TAG_NAMES.LINK, [s.TAG_PROPERTIES.REL, s.TAG_PROPERTIES.HREF], e),
          metaTags: p(s.TAG_NAMES.META, [s.TAG_PROPERTIES.NAME, s.TAG_PROPERTIES.CHARSET, s.TAG_PROPERTIES.HTTPEQUIV, s.TAG_PROPERTIES.PROPERTY, s.TAG_PROPERTIES.ITEM_PROP], e),
          noscriptTags: p(s.TAG_NAMES.NOSCRIPT, [s.TAG_PROPERTIES.INNER_HTML], e),
          onChangeClientState: f(e),
          scriptTags: p(s.TAG_NAMES.SCRIPT, [s.TAG_PROPERTIES.SRC, s.TAG_PROPERTIES.INNER_HTML], e),
          styleTags: p(s.TAG_NAMES.STYLE, [s.TAG_PROPERTIES.CSS_TEXT], e),
          title: d(e),
          titleAttributes: M(s.ATTRIBUTE_NAMES.TITLE, e)
        }
      },
      y = function() {
        return "undefined" != typeof window && "undefined" != typeof window.requestIdleCallback ? window.requestIdleCallback : function(e) {
          var t = Date.now();
          return setTimeout(function() {
            e({
              didTimeout: !1,
              timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - t))
              }
            })
          }, 1)
        }
      }(),
      I = function() {
        return "undefined" != typeof window && "undefined" != typeof window.cancelIdleCallback ? window.cancelIdleCallback : function(e) {
          return clearTimeout(e)
        }
      }(),
      N = function(e) {
        return console && "function" == typeof console.warn && console.warn(e)
      },
      j = null,
      m = function(e) {
        var t = e.baseTag,
          n = e.bodyAttributes,
          r = e.htmlAttributes,
          o = e.linkTags,
          i = e.metaTags,
          u = e.noscriptTags,
          a = e.onChangeClientState,
          l = e.scriptTags,
          c = e.styleTags,
          T = e.title,
          d = e.titleAttributes;
        j && I(j), j = y(function() {
          h(s.TAG_NAMES.BODY, n), h(s.TAG_NAMES.HTML, r), S(T, d);
          var f = {
              baseTag: D(s.TAG_NAMES.BASE, t),
              linkTags: D(s.TAG_NAMES.LINK, o),
              metaTags: D(s.TAG_NAMES.META, i),
              noscriptTags: D(s.TAG_NAMES.NOSCRIPT, u),
              scriptTags: D(s.TAG_NAMES.SCRIPT, l),
              styleTags: D(s.TAG_NAMES.STYLE, c)
            },
            M = {},
            E = {};
          Object.keys(f).forEach(function(e) {
            var t = f[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (M[e] = n), r.length && (E[e] = f[e].oldTags)
          }), j = null, a(e, M, E)
        })
      },
      S = function(e, t) {
        "undefined" != typeof e && document.title !== e && (document.title = Array.isArray(e) ? e.join("") : e), h(s.TAG_NAMES.TITLE, t)
      },
      h = function(e, t) {
        var n = document.getElementsByTagName(e)[0];
        if (n) {
          for (var r = n.getAttribute(s.HELMET_ATTRIBUTE), o = r ? r.split(",") : [], i = [].concat(o), u = Object.keys(t), a = 0; a < u.length; a++) {
            var l = u[a],
              c = t[l] || "";
            n.getAttribute(l) !== c && n.setAttribute(l, c), o.indexOf(l) === -1 && o.push(l);
            var T = i.indexOf(l);
            T !== -1 && i.splice(T, 1)
          }
          for (var d = i.length - 1; d >= 0; d--) n.removeAttribute(i[d]);
          o.length === i.length ? n.removeAttribute(s.HELMET_ATTRIBUTE) : n.getAttribute(s.HELMET_ATTRIBUTE) !== u.join(",") && n.setAttribute(s.HELMET_ATTRIBUTE, u.join(","))
        }
      },
      D = function(e, t) {
        var n = document.head || document.querySelector(s.TAG_NAMES.HEAD),
          r = n.querySelectorAll(e + "[" + s.HELMET_ATTRIBUTE + "]"),
          o = Array.prototype.slice.call(r),
          i = [],
          u = void 0;
        return t && t.length && t.forEach(function(t) {
          var n = document.createElement(e);
          for (var r in t)
            if (t.hasOwnProperty(r))
              if (r === s.TAG_PROPERTIES.INNER_HTML) n.innerHTML = t.innerHTML;
              else if (r === s.TAG_PROPERTIES.CSS_TEXT) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
          else {
            var a = "undefined" == typeof t[r] ? "" : t[r];
            n.setAttribute(r, a)
          }
          n.setAttribute(s.HELMET_ATTRIBUTE, "true"), o.some(function(e, t) {
            return u = t, n.isEqualNode(e)
          }) ? o.splice(u, 1) : i.push(n)
        }), o.forEach(function(e) {
          return e.parentNode.removeChild(e)
        }), i.forEach(function(e) {
          return n.appendChild(e)
        }), {
          oldTags: o,
          newTags: i
        }
      },
      x = function(e) {
        return Object.keys(e).reduce(function(t, n) {
          var r = "undefined" != typeof e[n] ? n + '="' + e[n] + '"' : "" + n;
          return t ? t + " " + r : r
        }, "")
      },
      O = function(e, t, n, r) {
        var o = x(n);
        return o ? "<" + e + " " + s.HELMET_ATTRIBUTE + '="true" ' + o + ">" + T(t, r) + "</" + e + ">" : "<" + e + " " + s.HELMET_ATTRIBUTE + '="true">' + T(t, r) + "</" + e + ">"
      },
      b = function(e, t, n) {
        return t.reduce(function(t, r) {
          var o = Object.keys(r).filter(function(e) {
              return !(e === s.TAG_PROPERTIES.INNER_HTML || e === s.TAG_PROPERTIES.CSS_TEXT)
            }).reduce(function(e, t) {
              var o = "undefined" == typeof r[t] ? t : t + '="' + T(r[t], n) + '"';
              return e ? e + " " + o : o
            }, ""),
            i = r.innerHTML || r.cssText || "",
            u = s.SELF_CLOSING_TAGS.indexOf(e) === -1;
          return t + "<" + e + " " + s.HELMET_ATTRIBUTE + '="true" ' + o + (u ? "/>" : ">" + i + "</" + e + ">")
        }, "")
      },
      _ = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return Object.keys(e).reduce(function(t, n) {
          return t[s.REACT_TAG_MAP[n] || n] = e[n], t
        }, t)
      },
      L = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return Object.keys(e).reduce(function(t, n) {
          return t[s.HTML_TAG_MAP[n] || n] = e[n], t
        }, t)
      },
      C = function(e, t, n) {
        var r, o = (r = {
            key: t
          }, r[s.HELMET_ATTRIBUTE] = !0, r),
          i = _(n, o);
        return [a.default.createElement(s.TAG_NAMES.TITLE, i, t)]
      },
      w = function(e, t) {
        return t.map(function(t, n) {
          var r, o = (r = {
            key: n
          }, r[s.HELMET_ATTRIBUTE] = !0, r);
          return Object.keys(t).forEach(function(e) {
            var n = s.REACT_TAG_MAP[e] || e;
            if (n === s.TAG_PROPERTIES.INNER_HTML || n === s.TAG_PROPERTIES.CSS_TEXT) {
              var r = t.innerHTML || t.cssText;
              o.dangerouslySetInnerHTML = {
                __html: r
              }
            } else o[n] = t[e]
          }), a.default.createElement(e, o)
        })
      },
      v = function(e, t, n) {
        switch (e) {
          case s.TAG_NAMES.TITLE:
            return {
              toComponent: function() {
                return C(e, t.title, t.titleAttributes, n)
              },
              toString: function() {
                return O(e, t.title, t.titleAttributes, n)
              }
            };
          case s.ATTRIBUTE_NAMES.BODY:
          case s.ATTRIBUTE_NAMES.HTML:
            return {
              toComponent: function() {
                return _(t)
              },
              toString: function() {
                return x(t)
              }
            };
          default:
            return {
              toComponent: function() {
                return w(e, t)
              },
              toString: function() {
                return b(e, t, n)
              }
            }
        }
      },
      P = function(e) {
        var t = e.baseTag,
          n = e.bodyAttributes,
          r = e.encode,
          o = e.htmlAttributes,
          i = e.linkTags,
          u = e.metaTags,
          a = e.noscriptTags,
          l = e.scriptTags,
          c = e.styleTags,
          T = e.title,
          d = void 0 === T ? "" : T,
          f = e.titleAttributes;
        return {
          base: v(s.TAG_NAMES.BASE, t, r),
          bodyAttributes: v(s.ATTRIBUTE_NAMES.BODY, n, r),
          htmlAttributes: v(s.ATTRIBUTE_NAMES.HTML, o, r),
          link: v(s.TAG_NAMES.LINK, i, r),
          meta: v(s.TAG_NAMES.META, u, r),
          noscript: v(s.TAG_NAMES.NOSCRIPT, a, r),
          script: v(s.TAG_NAMES.SCRIPT, l, r),
          style: v(s.TAG_NAMES.STYLE, c, r),
          title: v(s.TAG_NAMES.TITLE, {
            title: d,
            titleAttributes: f
          }, r)
        }
      };
    t.convertReactPropstoHtmlAttributes = L, t.handleClientStateChange = m, t.mapStateOnServer = P, t.reducePropsToState = A, t.requestIdleCallback = y, t.warn = N
  },
  "./node_modules/react-side-effect/lib/index.js": function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = n("./node_modules/react/react.js"),
      l = r(a),
      c = n("./node_modules/exenv/index.js"),
      s = r(c),
      T = n("./node_modules/shallowequal/index.js"),
      d = r(T);
    e.exports = function(e, t, n) {
      function r(e) {
        return e.displayName || e.name || "Component"
      }
      if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
      if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
      if ("undefined" != typeof n && "function" != typeof n) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
      return function(c) {
        function T() {
          M = e(f.map(function(e) {
            return e.props
          })), E.canUseDOM ? t(M) : n && (M = n(M))
        }
        if ("function" != typeof c) throw new Error("Expected WrappedComponent to be a React component.");
        var f = [],
          M = void 0,
          E = function(e) {
            function t() {
              return o(this, t), i(this, e.apply(this, arguments))
            }
            return u(t, e), t.peek = function() {
              return M
            }, t.rewind = function() {
              if (t.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
              var e = M;
              return M = void 0, f = [], e
            }, t.prototype.shouldComponentUpdate = function(e) {
              return !(0, d.default)(e, this.props)
            }, t.prototype.componentWillMount = function() {
              f.push(this), T()
            }, t.prototype.componentDidUpdate = function() {
              T()
            }, t.prototype.componentWillUnmount = function() {
              var e = f.indexOf(this);
              f.splice(e, 1), T()
            }, t.prototype.render = function() {
              return l.default.createElement(c, this.props)
            }, t
          }(a.Component);
        return E.displayName = "SideEffect(" + r(c) + ")", E.canUseDOM = s.default.canUseDOM, E
      }
    }
  },
  "./node_modules/shallowequal/index.js": function(e, t) {
    e.exports = function(e, t, n, r) {
      var o = n ? n.call(r, e, t) : void 0;
      if (void 0 !== o) return !!o;
      if (e === t) return !0;
      if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
      var i = Object.keys(e),
        u = Object.keys(t);
      if (i.length !== u.length) return !1;
      for (var a = Object.prototype.hasOwnProperty.bind(t), l = 0; l < i.length; l++) {
        var c = i[l];
        if (!a(c)) return !1;
        var s = e[c],
          T = t[c];
        if (o = n ? n.call(r, s, T, c) : void 0, o === !1 || void 0 === o && s !== T) return !1
      }
      return !0
    }
  },
  "./src/Components/Footer.js": function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = n("./node_modules/react/react.js"),
      i = r(o),
      u = function() {
        return i.default.createElement("footer", {
          className: "footer"
        }, i.default.createElement("div", {
          className: "footer-content"
        }, i.default.createElement("ul", {
          className: "social-footer"
        }, i.default.createElement("a", {
          href: "https://github.com/cscouras",
          target: "_blank",
          rel: "noopener noreferrer"
        }, i.default.createElement("li", null, "GitHub")), i.default.createElement("a", {
          href: "https://www.linkedin.com/in/cscouras/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, i.default.createElement("li", null, "LinkedIn")))))
      };
    t.default = u, e.exports = t.default
  },
  "./src/Components/Header.js": function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = n("./node_modules/react/react.js"),
      i = r(o),
      u = n("./node_modules/gatsby-link/index.js"),
      a = r(u),
      l = n("./src/media/CS-logo.svg"),
      c = r(l),
      s = function() {
        return i.default.createElement("header", {
          className: "header"
        }, i.default.createElement("div", {
          className: "header-content"
        }, i.default.createElement(a.default, {
          to: "/"
        }, i.default.createElement("img", {
          src: c.default,
          alt: "logo",
          className: "logo"
        })), i.default.createElement("ul", {
          className: "nav"
        }, i.default.createElement("li", null, i.default.createElement(a.default, {
          to: "/projects"
        }, "Projects")), i.default.createElement("li", null, i.default.createElement(a.default, {
          to: "/about"
        }, "About")), i.default.createElement("li", null, i.default.createElement(a.default, {
          to: "/contact"
        }, "Contact")))))
      };
    t.default = s, e.exports = t.default
  },
  "./src/layouts/flexstyles.css": function(e, t, n) {
    t = e.exports = n("./node_modules/css-loader/lib/css-base.js")(), t.push([e.id, '@font-face{font-family:Open Sans;font-style:normal;font-weight:400;src:local("Open Sans Regular"),local("OpenSans-Regular"),url(https://fonts.gstatic.com/s/opensans/v14/cJZKeOuBrn4kERxqtaUH3ZBw1xU1rKptJj_0jans920.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2212,u+2215}html{box-sizing:border-box;min-width:320px;overflow-y:scroll}*,:after,:before{box-sizing:inherit}body{width:100%;font-family:Open Sans,sans-serif;background:#393e46;color:#eee}body,h1,h2,h3,p{margin:0}a{text-decoration:none;color:#eee}a:hover{cursor:pointer}.logo{width:75px;height:auto;margin:5px}.site{display:flex;flex-direction:column;min-height:100vh}.header{display:flex;color:#eee;border-bottom:5px solid #222831;padding:1em;margin-bottom:1em}.header-content{align-items:flex-end;margin:0 auto;width:960px}.header-content,.nav{display:flex;justify-content:space-between}.nav{margin:0;padding:0;width:250px}.nav li{list-style-type:none}.wrapper-content{flex:1}.content{display:flex;flex-direction:column;align-self:center}.projectSection{display:flex;flex-wrap:wrap;justify-content:center;padding-top:10px}.projectsTitle{width:100%;margin-bottom:5px;border-bottom:5px solid #0092ca}.projectsTitle>span{background:#0092ca;color:#222831;padding:3px 8px}.card{padding:15px;margin-bottom:.5em}.card img{margin:5px auto;width:200px;height:112px;box-shadow:0 0 2px #eee;border-radius:5px}.langList{display:flex;flex-direction:column;align-items:center}.langList p{line-height:1.7}.about-content,.home-content{max-width:500px;margin-top:10px}.about-content a,.contact a,.home-content a{color:#0092ca}.about-content p,.home-content p{margin:10px 0;line-height:1.5}.contact p{max-width:500px;margin:10px 0}.cert{margin-top:10%;width:100%;height:auto}.footer{background:#222831;height:120px;width:100%;display:flex;align-items:center}.footer-content{width:960px;margin:0 auto;display:flex;justify-content:flex-end}.social-footer{margin-right:10%;padding:0}.social-footer li{list-style-type:none;margin-top:5px}@media screen and (max-width:600px){.header-content{align-items:center;flex-direction:column}.footer-content{justify-content:center}.social-footer{margin:0}}', ""])
  },
  './node_modules/babel-loader/lib/index.js?{"plugins":["/Users/Chris/Documents/Sites/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/Chris/Documents/Sites/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Chris/Documents/Sites/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Chris/Documents/Sites/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/Chris/Documents/Sites/portfolio/node_modules/babel-preset-env/lib/index.js","/Users/Chris/Documents/Sites/portfolio/node_modules/babel-preset-stage-0/lib/index.js","/Users/Chris/Documents/Sites/portfolio/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js': function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = n("./node_modules/react/react.js"),
      i = r(o),
      u = n("./node_modules/prop-types/index.js"),
      a = r(u),
      l = n("./node_modules/react-helmet/lib/Helmet.js"),
      c = r(l),
      s = n("./src/Components/Header.js"),
      T = r(s),
      d = n("./src/Components/Footer.js"),
      f = r(d);
    n("./src/layouts/flexstyles.css");var M=function(e){var t = e.children;return i.default.createElement("div", null,i.default.createElement(c.default,{title:"Chris Scouras - Front End Web Developer",meta:[{name:"description",content:"Chris Scouras's Front End Web Portfolio"},{name: "keywords",content:"portfolio, web development, front end"}]}),i.default.createElement("main",{className: "site"},i.default.createElement(T.default, null),i.default.createElement("div",{className:"wrapper-content",style:{margin: "0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t()),i.default.createElement(f.default, null)))};M.propTypes={children: a.default.func}, t.default = M, e.exports = t.default},"./src/media/CS-logo.svg": function(e, t){e.exports ="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSItMTMuOTg2MDA3NjkwNDI5Njg4IC0xLjc0ODI0NTIzOTI1NzgxMjUgMjUwIDI1MCIgd2lkdGg9IjUwMHB4IiBoZWlnaHQ9IjUwMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InBhdHRlcm4tMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAwIEwgNTAgMCBMIDUwIDEwMCBMIDAgMTAwIFoiIHN0eWxlPSJmaWxsOiBibGFjazsiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHBhdGggZD0iTSA5Ni4xMzYgMTY2Ljk5MSBDIDg0LjAzIDE2Ni45OTEgNzQuMDE0IDE2MS4xMDkgNjYuMDk0IDE0OS4zNTMgQyA1OC4xNTUgMTM3LjU3IDU0LjE4NSAxMjIuMTggNTQuMTg1IDEwMy4xNzQgQyA1NC4xODUgODQuMTcxIDU2LjkxOCA2Ni44MzcgNjIuMzggNTEuMTcgQyA2Ny44NDIgMzUuNTMgNzUuNjQ0IDIyLjc5OCA4NS43ODUgMTIuOTgxIEMgOTUuOTI4IDMuMTYzIDEwNi43NTUgLTEuNzQ4IDExOC4yNjEgLTEuNzQ4IEMgMTI5Ljc2NyAtMS43NDggMTM5LjA2NCAxLjM3MyAxNDYuMTQ3IDcuNjE0IEMgMTUzLjIyOSAxMy44MzIgMTU2Ljc3MSAyMS4yNjEgMTU2Ljc3MSAyOS44OTggQyAxNTYuNzcxIDM4LjU2MiAxNTQuNjMzIDQ1LjkyNSAxNTAuMzU0IDUxLjk5MSBDIDE0Ni4xODMgNTEuOTkxIDE0MS41MDMgNTAuOSAxMzYuMzE0IDQ4LjcxNyBDIDEzMS4xMDYgNDYuNTM2IDEyNy4yIDQzLjg5OCAxMjQuNTk4IDQwLjc5OCBMIDEyOC4zMTEgMTcuMTcgQyAxMjUuMTc5IDE0LjgzNyAxMjEuMDgzIDEzLjY3IDExNi4wMjIgMTMuNjcgQyAxMDguMDgyIDEzLjY3IDEwMS4wNjIgMjEuODA3IDk0Ljk2MiAzOC4wODQgQyA4OC44NDYgNTQuMzc4IDg1Ljc4NSA3NC40NCA4NS43ODUgOTguMjYzIEMgODUuNzg1IDExMy45OTYgODcuOTYzIDEyNS40MDUgOTIuMzEzIDEzMi40OTggQyA5Ni42NjQgMTM5LjU5IDEwMS45NjUgMTQzLjEzMSAxMDguMjEgMTQzLjEzMSBDIDExMC4wODMgMTQzLjEzMSAxMTEuOTQyIDE0Mi45MzkgMTEzLjc5IDE0Mi41NTcgQyAxMTMuMzM0IDE0MS40MzEgMTEyLjg4MiAxNDAuMjg5IDExMi40MzYgMTM5LjEzMyBDIDEwOC44MTYgMTI5Ljc5NiAxMDYuOTM5IDEyMS4zMDEgMTA2LjgwNiAxMTMuNjQ0IEMgMTA2LjU4OSAxMDEuMjMgMTA5Ljg4OCA5MC44ODUgMTE2LjcgODIuNjE3IEMgMTIzLjUxNCA3NC4zNDggMTMxLjI2NiA2OS41MjUgMTM5Ljk1MSA2OC4xNSBDIDE0OC42MzcgNjYuNzc5IDE1NS40MjkgNjguNDA1IDE2MC4zMjIgNzMuMDIgQyAxNjUuMjEgNzcuNjU4IDE2Ny43MTggODMuMzk5IDE2Ny44MzggOTAuMjQ0IEMgMTY3Ljk1NSA5Ny4xMDggMTY2LjI3NSAxMDQuNDEzIDE2Mi43ODkgMTEyLjE1NyBDIDE1OS4yODkgMTE5LjkwMiAxNTUuNzc1IDEyNi4xODcgMTUyLjI0IDEzMS4wMTIgTCAxNDYuOTQgMTM4LjIxOSBDIDE0OC4zNDUgMTQwLjYxMyAxNTAuMDQyIDE0My43MDIgMTUyLjAyNSAxNDcuNDc5IEMgMTU0LjAyMSAxNTEuMjU4IDE1Ni43MzIgMTU3Ljc4OCAxNjAuMTY1IDE2Ny4wNzggQyAxNjMuNjA4IDE3Ni4zNDQgMTY1LjM4NiAxODQuMDgxIDE2NS40OTQgMTkwLjI4NyBDIDE2NS43NjYgMjA1Ljk1MiAxNjEuODY2IDIxOS4wMDggMTUzLjc4OSAyMjkuNDUzIEMgMTQ1LjcxNiAyMzkuODgxIDEzNS44MTIgMjQ2LjAyMyAxMjQuMDc2IDI0Ny44NzYgQyAxMTYuMTc4IDI0OS4xMjUgMTA5LjYxMSAyNDcuMjYxIDEwNC4zNzkgMjQyLjI5IEMgOTkuMTQ1IDIzNy4yOTggOTYuMjEyIDIzMi44MTMgOTUuNTc4IDIyOC44MTkgQyA5Ni43MjggMjIzLjI0OSA5OS4yNzcgMjE2Ljc4NSAxMDMuMjI0IDIwOS40MzIgQyAxMDcuMTcyIDIwMi4wOTkgMTEwLjc2MSAxOTcuNDQyIDExMy45OTggMTk1LjQ1NyBDIDExOS44NSAxOTkuOTQxIDEyNS40MjEgMjExLjA5NSAxMzAuNzAyIDIyOC45MTQgQyAxMzguMDM0IDIyNy40MjQgMTQxLjYwMiAyMjEuMDUzIDE0MS40MDcgMjA5Ljc5OSBDIDE0MS4zIDIwMy41OTIgMTM5LjQ0MyAxOTYuMjM2IDEzNS44MzggMTg3LjczMSBDIDEzMi4yNDQgMTc5LjIwMiAxMjguMzQ5IDE3MS4zMDggMTI0LjE0NiAxNjQuMDQyIEMgMTIzLjI2MiAxNjIuNTExIDEyMi4zODggMTYwLjkzNCAxMjEuNTMgMTU5LjMxMSBDIDExOS4wMjMgMTYwLjc4NSAxMTYuMjEzIDE2Mi4xNzcgMTEzLjEwMSAxNjMuNDkxIEMgMTA3LjUwOCAxNjUuODIyIDEwMS44NTQgMTY2Ljk5MSA5Ni4xMzYgMTY2Ljk5MSBaIE0gMTUxLjE0NCAxMTIuMDE4IEMgMTUyLjYzNCAxMDkuNjcgMTUzLjk3MyAxMDYuODg5IDE1NS4xNjQgMTAzLjY3NyBDIDE1Ni4zNTQgMTAwLjQ0MyAxNTYuOTIgOTcuMTUyIDE1Ni44NjQgOTMuODExIEMgMTU2LjgwNCA5MC40NjQgMTU1LjM5NiA4Ny44NjUgMTUyLjY0NyA4Ni4wMTIgQyAxNDkuOTA3IDg0LjE1NyAxNDYuNjQ2IDgzLjUzMSAxNDIuODYxIDg0LjEyNyBDIDEzOS4wNzkgODQuNzI1IDEzNS45NDcgODYuNDg4IDEzMy40NjUgODkuNDIxIEMgMTMwLjk2OCA5Mi4zNTUgMTI5Ljc1MiA5NS41NzEgMTI5LjgxMSA5OS4wNyBDIDEyOS44NzMgMTAyLjU5IDEzMC43NTkgMTA2LjU0NCAxMzIuNDczIDExMC45MjcgQyAxMzQuMTgzIDExNS4zMzIgMTM1Ljg2MiAxMTguOTUzIDEzNy41MDYgMTIxLjc5NSBMIDE0MC4xMTEgMTI2LjAzNSBDIDE0MS4yMzQgMTI1LjA0MSAxNDIuOTggMTIzLjA1MSAxNDUuMzU3IDEyMC4wNTQgQyAxNDcuNzMgMTE3LjA2NiAxNDkuNjYzIDExNC4zODUgMTUxLjE0NCAxMTIuMDE4IFoiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyBmaWxsOiAjMDA5MkNBOyIvPgo8L3N2Zz4K"}});
//# sourceMappingURL=layout-component---index-0bf5f5c08153e0a72bbe.js.map
