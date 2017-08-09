webpackJsonp([17241999800008180000],{

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),

/***/ "./node_modules/deep-equal/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__("./node_modules/deep-equal/lib/keys.js");
	var isArguments = __webpack_require__("./node_modules/deep-equal/lib/is_arguments.js");
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ }),

/***/ "./node_modules/deep-equal/lib/is_arguments.js":
/***/ (function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ }),

/***/ "./node_modules/deep-equal/lib/keys.js":
/***/ (function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ }),

/***/ "./node_modules/exenv/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.Helmet = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSideEffect = __webpack_require__("./node_modules/react-side-effect/lib/index.js");
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _deepEqual = __webpack_require__("./node_modules/deep-equal/index.js");
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _HelmetUtils = __webpack_require__("./node_modules/react-helmet/lib/HelmetUtils.js");
	
	var _HelmetConstants = __webpack_require__("./node_modules/react-helmet/lib/HelmetConstants.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Helmet = function Helmet(Component) {
	    var _class, _temp;
	
	    return _temp = _class = function (_React$Component) {
	        _inherits(HelmetWrapper, _React$Component);
	
	        function HelmetWrapper() {
	            _classCallCheck(this, HelmetWrapper);
	
	            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	        }
	
	        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	            return !(0, _deepEqual2.default)(this.props, nextProps);
	        };
	
	        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
	            if (!nestedChildren) {
	                return null;
	            }
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.SCRIPT:
	                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    return {
	                        innerHTML: nestedChildren
	                    };
	
	                case _HelmetConstants.TAG_NAMES.STYLE:
	                    return {
	                        cssText: nestedChildren
	                    };
	            }
	
	            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
	        };
	
	        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
	            var _extends2;
	
	            var child = _ref.child,
	                arrayTypeChildren = _ref.arrayTypeChildren,
	                newChildProps = _ref.newChildProps,
	                nestedChildren = _ref.nestedChildren;
	
	            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
	        };
	
	        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
	            var _extends3, _extends4;
	
	            var child = _ref2.child,
	                newProps = _ref2.newProps,
	                newChildProps = _ref2.newChildProps,
	                nestedChildren = _ref2.nestedChildren;
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.TITLE:
	                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));
	
	                case _HelmetConstants.TAG_NAMES.BODY:
	                    return _extends({}, newProps, {
	                        bodyAttributes: _extends({}, newChildProps)
	                    });
	
	                case _HelmetConstants.TAG_NAMES.HTML:
	                    return _extends({}, newProps, {
	                        htmlAttributes: _extends({}, newChildProps)
	                    });
	            }
	
	            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
	        };
	
	        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
	            var newFlattenedProps = _extends({}, newProps);
	
	            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
	                var _extends5;
	
	                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
	            });
	
	            return newFlattenedProps;
	        };
	
	        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
	            if (false) {
	                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
	                    return child.type === name;
	                })) {
	                    if (typeof child.type === "function") {
	                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
	                    }
	
	                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
	                }
	
	                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
	                    return typeof nestedChild !== "string";
	                }))) {
	                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
	                }
	            }
	
	            return true;
	        };
	
	        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
	            var _this2 = this;
	
	            var arrayTypeChildren = {};
	
	            _react2.default.Children.forEach(children, function (child) {
	                if (!child || !child.props) {
	                    return;
	                }
	
	                var _child$props = child.props,
	                    nestedChildren = _child$props.children,
	                    childProps = _objectWithoutProperties(_child$props, ["children"]);
	
	                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);
	
	                _this2.warnOnInvalidChildren(child, nestedChildren);
	
	                switch (child.type) {
	                    case _HelmetConstants.TAG_NAMES.LINK:
	                    case _HelmetConstants.TAG_NAMES.META:
	                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    case _HelmetConstants.TAG_NAMES.SCRIPT:
	                    case _HelmetConstants.TAG_NAMES.STYLE:
	                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
	                            child: child,
	                            arrayTypeChildren: arrayTypeChildren,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	
	                    default:
	                        newProps = _this2.mapObjectTypeChildren({
	                            child: child,
	                            newProps: newProps,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	                }
	            });
	
	            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
	            return newProps;
	        };
	
	        HelmetWrapper.prototype.render = function render() {
	            var _props = this.props,
	                children = _props.children,
	                props = _objectWithoutProperties(_props, ["children"]);
	
	            var newProps = _extends({}, props);
	
	            if (children) {
	                newProps = this.mapChildrenToProps(children, newProps);
	            }
	
	            return _react2.default.createElement(Component, newProps);
	        };
	
	        _createClass(HelmetWrapper, null, [{
	            key: "canUseDOM",
	
	
	            // Component.peek comes from react-side-effect:
	            // For testing, you may use a static peek() method available on the returned component.
	            // It lets you get the current state without resetting the mounted instance stack.
	            // Don’t use it for anything other than testing.
	
	            /**
	             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
	             * @param {Object} bodyAttributes: {"className": "root"}
	             * @param {String} defaultTitle: "Default Title"
	             * @param {Boolean} encodeSpecialCharacters: true
	             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
	             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
	             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
	             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
	             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
	             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
	             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
	             * @param {String} title: "Title"
	             * @param {Object} titleAttributes: {"itemprop": "name"}
	             * @param {String} titleTemplate: "MySite.com - %s"
	             */
	            set: function set(canUseDOM) {
	                Component.canUseDOM = canUseDOM;
	            }
	        }]);
	
	        return HelmetWrapper;
	    }(_react2.default.Component), _class.propTypes = {
	        base: _propTypes2.default.object,
	        bodyAttributes: _propTypes2.default.object,
	        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
	        defaultTitle: _propTypes2.default.string,
	        encodeSpecialCharacters: _propTypes2.default.bool,
	        htmlAttributes: _propTypes2.default.object,
	        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        onChangeClientState: _propTypes2.default.func,
	        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        title: _propTypes2.default.string,
	        titleAttributes: _propTypes2.default.object,
	        titleTemplate: _propTypes2.default.string
	    }, _class.defaultProps = {
	        encodeSpecialCharacters: true
	    }, _class.peek = Component.peek, _class.rewind = function () {
	        var mappedState = Component.rewind();
	        if (!mappedState) {
	            // provide fallback if mappedState is undefined
	            mappedState = (0, _HelmetUtils.mapStateOnServer)({
	                baseTag: [],
	                bodyAttributes: {},
	                encodeSpecialCharacters: true,
	                htmlAttributes: {},
	                linkTags: [],
	                metaTags: [],
	                noscriptTags: [],
	                scriptTags: [],
	                styleTags: [],
	                title: "",
	                titleAttributes: {}
	            });
	        }
	
	        return mappedState;
	    }, _temp;
	};
	
	var NullComponent = function NullComponent() {
	    return null;
	};
	
	var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
	
	var HelmetExport = Helmet(HelmetSideEffects);
	HelmetExport.renderStatic = HelmetExport.rewind;
	
	exports.Helmet = HelmetExport;
	exports.default = HelmetExport;

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetConstants.js":
/***/ (function(module, exports) {

	exports.__esModule = true;
	var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
	    BODY: "bodyAttributes",
	    HTML: "htmlAttributes",
	    TITLE: "titleAttributes"
	};
	
	var TAG_NAMES = exports.TAG_NAMES = {
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
	};
	
	var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
	    return TAG_NAMES[name];
	});
	
	var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
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
	};
	
	var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
	    "accesskey": "accessKey",
	    "charset": "charSet",
	    "class": "className",
	    "contenteditable": "contentEditable",
	    "contextmenu": "contextMenu",
	    "http-equiv": "httpEquiv",
	    "itemprop": "itemProp",
	    "tabindex": "tabIndex"
	};
	
	var HELMET_PROPS = exports.HELMET_PROPS = {
	    DEFAULT_TITLE: "defaultTitle",
	    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
	    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
	    TITLE_TEMPLATE: "titleTemplate"
	};
	
	var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
	    obj[REACT_TAG_MAP[key]] = key;
	    return obj;
	}, {});
	
	var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
	
	var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetUtils.js":
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.warn = exports.requestIdleCallback = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__("./node_modules/object-assign/index.js");
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _HelmetConstants = __webpack_require__("./node_modules/react-helmet/lib/HelmetConstants.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
	    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (encode === false) {
	        return String(str);
	    }
	
	    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};
	
	var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
	    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
	    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);
	
	    if (innermostTemplate && innermostTitle) {
	        // use function arg to avoid need to escape $ characters
	        return innermostTemplate.replace(/%s/g, function () {
	            return innermostTitle;
	        });
	    }
	
	    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
	
	    return innermostTitle || innermostDefaultTitle || undefined;
	};
	
	var getOnChangeClientState = function getOnChangeClientState(propsList) {
	    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
	};
	
	var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[tagType] !== "undefined";
	    }).map(function (props) {
	        return props[tagType];
	    }).reduce(function (tagAttrs, current) {
	        return _extends({}, tagAttrs, current);
	    }, {});
	};
	
	var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstants.TAG_NAMES.BASE];
	    }).reverse().reduce(function (innermostBaseTag, tag) {
	        if (!innermostBaseTag.length) {
	            var keys = Object.keys(tag);
	
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
	                    return innermostBaseTag.concat(tag);
	                }
	            }
	        }
	
	        return innermostBaseTag;
	    }, []);
	};
	
	var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
	    // Calculate list of tags, giving priority innermost component (end of the propslist)
	    var approvedSeenTags = {};
	
	    return propsList.filter(function (props) {
	        if (Array.isArray(props[tagName])) {
	            return true;
	        }
	        if (typeof props[tagName] !== "undefined") {
	            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
	        }
	        return false;
	    }).map(function (props) {
	        return props[tagName];
	    }).reverse().reduce(function (approvedTags, instanceTags) {
	        var instanceSeenTags = {};
	
	        instanceTags.filter(function (tag) {
	            var primaryAttributeKey = void 0;
	            var keys = Object.keys(tag);
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
	                    primaryAttributeKey = lowerCaseAttributeKey;
	                }
	                // Special case for innerHTML which doesn't work lowercased
	                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
	                    primaryAttributeKey = attributeKey;
	                }
	            }
	
	            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
	                return false;
	            }
	
	            var value = tag[primaryAttributeKey].toLowerCase();
	
	            if (!approvedSeenTags[primaryAttributeKey]) {
	                approvedSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!instanceSeenTags[primaryAttributeKey]) {
	                instanceSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!approvedSeenTags[primaryAttributeKey][value]) {
	                instanceSeenTags[primaryAttributeKey][value] = true;
	                return true;
	            }
	
	            return false;
	        }).reverse().forEach(function (tag) {
	            return approvedTags.push(tag);
	        });
	
	        // Update seen tags with tags from this instance
	        var keys = Object.keys(instanceSeenTags);
	        for (var i = 0; i < keys.length; i++) {
	            var attributeKey = keys[i];
	            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
	
	            approvedSeenTags[attributeKey] = tagUnion;
	        }
	
	        return approvedTags;
	    }, []).reverse();
	};
	
	var getInnermostProperty = function getInnermostProperty(propsList, property) {
	    for (var i = propsList.length - 1; i >= 0; i--) {
	        var props = propsList[i];
	
	        if (props.hasOwnProperty(property)) {
	            return props[property];
	        }
	    }
	
	    return null;
	};
	
	var reducePropsToState = function reducePropsToState(propsList) {
	    return {
	        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
	        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
	        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
	        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
	        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        onChangeClientState: getOnChangeClientState(propsList),
	        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
	        title: getTitleFromPropsList(propsList),
	        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
	    };
	};
	
	var requestIdleCallback = function () {
	    if (typeof window !== "undefined" && typeof window.requestIdleCallback !== "undefined") {
	        return window.requestIdleCallback;
	    }
	
	    return function (cb) {
	        var start = Date.now();
	        return setTimeout(function () {
	            cb({
	                didTimeout: false,
	                timeRemaining: function timeRemaining() {
	                    return Math.max(0, 50 - (Date.now() - start));
	                }
	            });
	        }, 1);
	    };
	}();
	
	var cancelIdleCallback = function () {
	    if (typeof window !== "undefined" && typeof window.cancelIdleCallback !== "undefined") {
	        return window.cancelIdleCallback;
	    }
	
	    return function (id) {
	        return clearTimeout(id);
	    };
	}();
	
	var warn = function warn(msg) {
	    return console && typeof console.warn === "function" && console.warn(msg);
	};
	
	var _helmetIdleCallback = null;
	
	var handleClientStateChange = function handleClientStateChange(newState) {
	    var baseTag = newState.baseTag,
	        bodyAttributes = newState.bodyAttributes,
	        htmlAttributes = newState.htmlAttributes,
	        linkTags = newState.linkTags,
	        metaTags = newState.metaTags,
	        noscriptTags = newState.noscriptTags,
	        onChangeClientState = newState.onChangeClientState,
	        scriptTags = newState.scriptTags,
	        styleTags = newState.styleTags,
	        title = newState.title,
	        titleAttributes = newState.titleAttributes;
	
	
	    if (_helmetIdleCallback) {
	        cancelIdleCallback(_helmetIdleCallback);
	    }
	
	    _helmetIdleCallback = requestIdleCallback(function () {
	        updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
	        updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
	
	        updateTitle(title, titleAttributes);
	
	        var tagUpdates = {
	            baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
	            linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
	            metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
	            noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
	            scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
	            styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
	        };
	
	        var addedTags = {};
	        var removedTags = {};
	
	        Object.keys(tagUpdates).forEach(function (tagType) {
	            var _tagUpdates$tagType = tagUpdates[tagType],
	                newTags = _tagUpdates$tagType.newTags,
	                oldTags = _tagUpdates$tagType.oldTags;
	
	
	            if (newTags.length) {
	                addedTags[tagType] = newTags;
	            }
	            if (oldTags.length) {
	                removedTags[tagType] = tagUpdates[tagType].oldTags;
	            }
	        });
	
	        _helmetIdleCallback = null;
	        onChangeClientState(newState, addedTags, removedTags);
	    });
	};
	
	var updateTitle = function updateTitle(title, attributes) {
	    if (typeof title !== "undefined" && document.title !== title) {
	        document.title = Array.isArray(title) ? title.join("") : title;
	    }
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
	};
	
	var updateAttributes = function updateAttributes(tagName, attributes) {
	    var elementTag = document.getElementsByTagName(tagName)[0];
	
	    if (!elementTag) {
	        return;
	    }
	
	    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	    var attributesToRemove = [].concat(helmetAttributes);
	    var attributeKeys = Object.keys(attributes);
	
	    for (var i = 0; i < attributeKeys.length; i++) {
	        var attribute = attributeKeys[i];
	        var value = attributes[attribute] || "";
	
	        if (elementTag.getAttribute(attribute) !== value) {
	            elementTag.setAttribute(attribute, value);
	        }
	
	        if (helmetAttributes.indexOf(attribute) === -1) {
	            helmetAttributes.push(attribute);
	        }
	
	        var indexToSave = attributesToRemove.indexOf(attribute);
	        if (indexToSave !== -1) {
	            attributesToRemove.splice(indexToSave, 1);
	        }
	    }
	
	    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
	        elementTag.removeAttribute(attributesToRemove[_i]);
	    }
	
	    if (helmetAttributes.length === attributesToRemove.length) {
	        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
	        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
	    }
	};
	
	var updateTags = function updateTags(type, tags) {
	    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
	    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
	    var oldTags = Array.prototype.slice.call(tagNodes);
	    var newTags = [];
	    var indexToDelete = void 0;
	
	    if (tags && tags.length) {
	        tags.forEach(function (tag) {
	            var newElement = document.createElement(type);
	
	            for (var attribute in tag) {
	                if (tag.hasOwnProperty(attribute)) {
	                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
	                        newElement.innerHTML = tag.innerHTML;
	                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                        if (newElement.styleSheet) {
	                            newElement.styleSheet.cssText = tag.cssText;
	                        } else {
	                            newElement.appendChild(document.createTextNode(tag.cssText));
	                        }
	                    } else {
	                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
	                        newElement.setAttribute(attribute, value);
	                    }
	                }
	            }
	
	            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");
	
	            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	            if (oldTags.some(function (existingTag, index) {
	                indexToDelete = index;
	                return newElement.isEqualNode(existingTag);
	            })) {
	                oldTags.splice(indexToDelete, 1);
	            } else {
	                newTags.push(newElement);
	            }
	        });
	    }
	
	    oldTags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	    });
	    newTags.forEach(function (tag) {
	        return headElement.appendChild(tag);
	    });
	
	    return {
	        oldTags: oldTags,
	        newTags: newTags
	    };
	};
	
	var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
	    return Object.keys(attributes).reduce(function (str, key) {
	        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
	        return str ? str + " " + attr : attr;
	    }, "");
	};
	
	var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
	    var attributeString = generateElementAttributesAsString(attributes);
	    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(title, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(title, encode) + "</" + type + ">";
	};
	
	var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
	    return tags.reduce(function (str, tag) {
	        var attributeHtml = Object.keys(tag).filter(function (attribute) {
	            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
	        }).reduce(function (string, attribute) {
	            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
	            return string ? string + " " + attr : attr;
	        }, "");
	
	        var tagContent = tag.innerHTML || tag.cssText || "";
	
	        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
	
	        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
	    }, "");
	};
	
	var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
	    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(attributes).reduce(function (obj, key) {
	        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
	        return obj;
	    }, initProps);
	};
	
	var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
	    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(props).reduce(function (obj, key) {
	        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
	        return obj;
	    }, initAttributes);
	};
	
	var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
	    var _initProps;
	
	    // assigning into an array to define toString function on it
	    var initProps = (_initProps = {
	        key: title
	    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
	    var props = convertElementAttributestoReactProps(attributes, initProps);
	
	    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
	};
	
	var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
	    return tags.map(function (tag, i) {
	        var _mappedTag;
	
	        var mappedTag = (_mappedTag = {
	            key: i
	        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
	
	        Object.keys(tag).forEach(function (attribute) {
	            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;
	
	            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                var content = tag.innerHTML || tag.cssText;
	                mappedTag.dangerouslySetInnerHTML = { __html: content };
	            } else {
	                mappedTag[mappedAttribute] = tag[attribute];
	            }
	        });
	
	        return _react2.default.createElement(type, mappedTag);
	    });
	};
	
	var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
	    switch (type) {
	        case _HelmetConstants.TAG_NAMES.TITLE:
	            return {
	                toComponent: function toComponent() {
	                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
	                },
	                toString: function toString() {
	                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
	                }
	            };
	        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
	        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
	            return {
	                toComponent: function toComponent() {
	                    return convertElementAttributestoReactProps(tags);
	                },
	                toString: function toString() {
	                    return generateElementAttributesAsString(tags);
	                }
	            };
	        default:
	            return {
	                toComponent: function toComponent() {
	                    return generateTagsAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTagsAsString(type, tags, encode);
	                }
	            };
	    }
	};
	
	var mapStateOnServer = function mapStateOnServer(_ref) {
	    var baseTag = _ref.baseTag,
	        bodyAttributes = _ref.bodyAttributes,
	        encode = _ref.encode,
	        htmlAttributes = _ref.htmlAttributes,
	        linkTags = _ref.linkTags,
	        metaTags = _ref.metaTags,
	        noscriptTags = _ref.noscriptTags,
	        scriptTags = _ref.scriptTags,
	        styleTags = _ref.styleTags,
	        _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        titleAttributes = _ref.titleAttributes;
	    return {
	        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
	        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
	        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
	        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
	        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
	        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
	        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
	        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
	        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
	    };
	};
	
	exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
	exports.handleClientStateChange = handleClientStateChange;
	exports.mapStateOnServer = mapStateOnServer;
	exports.reducePropsToState = reducePropsToState;
	exports.requestIdleCallback = requestIdleCallback;
	exports.warn = warn;

/***/ }),

/***/ "./node_modules/react-icon-base/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var IconBase = function IconBase(_ref, _ref2) {
	  var children = _ref.children;
	  var color = _ref.color;
	  var size = _ref.size;
	  var style = _ref.style;
	
	  var props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style']);
	
	  var _ref2$reactIconBase = _ref2.reactIconBase;
	  var reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;
	
	  var computedSize = size || reactIconBase.size || '1em';
	  return _react2.default.createElement('svg', _extends({
	    children: children,
	    fill: 'currentColor',
	    preserveAspectRatio: 'xMidYMid meet',
	    height: computedSize,
	    width: computedSize
	  }, reactIconBase, props, {
	    style: _extends({
	      verticalAlign: 'middle',
	      color: color || reactIconBase.color
	    }, reactIconBase.style || {}, style)
	  }));
	};
	
	IconBase.propTypes = {
	  color: _propTypes2.default.string,
	  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	  style: _propTypes2.default.object
	};
	
	IconBase.contextTypes = {
	  reactIconBase: _propTypes2.default.shape(IconBase.propTypes)
	};
	
	exports.default = IconBase;
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/fa/github-square.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIconBase = __webpack_require__("./node_modules/react-icon-base/lib/index.js");
	
	var _reactIconBase2 = _interopRequireDefault(_reactIconBase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FaGithubSquare = function FaGithubSquare(props) {
	    return _react2.default.createElement(
	        _reactIconBase2.default,
	        _extends({ viewBox: '0 0 40 40' }, props),
	        _react2.default.createElement(
	            'g',
	            null,
	            _react2.default.createElement('path', { d: 'm14.6 26.8q0.1-0.1-0.1-0.3-0.2-0.2-0.3 0-0.1 0.1 0.1 0.2 0.2 0.2 0.3 0.1z m-0.6-0.9q-0.2-0.2-0.3-0.1-0.1 0.1 0 0.3 0.1 0.1 0.3 0.1 0.1-0.1 0-0.3z m-1-0.9q0.1-0.1-0.1-0.2-0.1 0-0.1 0-0.1 0.2 0 0.2 0.2 0.1 0.2 0z m0.5 0.5q0.1 0 0-0.1t0-0.1q-0.2-0.2-0.3-0.1t0.1 0.3q0.1 0.1 0.2 0z m1.9 1.7q0.1-0.2-0.2-0.3-0.2 0-0.3 0.1 0 0.2 0.2 0.3 0.2 0 0.3-0.1z m1 0q0-0.1-0.3-0.1-0.2 0-0.2 0.1t0.2 0.2 0.3-0.2z m0.8-0.1q0-0.2-0.2-0.1t-0.2 0.2q0 0.1 0.2 0.1t0.2-0.2z m14.4-7.1q0-4.7-3.4-8.1t-8.1-3.3-8 3.3-3.4 8.1q0 3.7 2.2 6.7t5.6 4.1q0.4 0.1 0.6-0.1t0.2-0.4q0-1.2 0-2.1-0.1 0-0.4 0t-0.8 0.1-1-0.1-1-0.5-0.7-0.9q-0.5-1.3-1.2-1.6-0.1-0.1-0.1-0.1l-0.2-0.2-0.2-0.2 0.1-0.2 0.5-0.1q0.1 0 0.3 0.1t0.7 0.3 0.7 0.8q0.4 0.7 0.8 1t1 0.3 0.9-0.1 0.6-0.2q0.2-1.1 0.8-1.6-1.1-0.1-1.9-0.4t-1.7-0.8-1.2-1.7-0.5-2.7q0-1.8 1.2-3.1-0.5-1.3 0.1-3 0.5-0.1 1.3 0.2t1.3 0.6l0.6 0.4q1.3-0.4 2.8-0.4t2.9 0.4q0.3-0.2 0.6-0.4t1.3-0.6 1.3-0.2q0.6 1.7 0.1 3 1.1 1.3 1.1 3.1 0 1.3-0.3 2.2t-0.8 1.6-1.2 1-1.3 0.6-1.6 0.2q0.8 0.7 0.8 2.2 0 0.9 0 2t0 1.1q0 0.3 0.2 0.4t0.6 0.1q3.4-1.1 5.6-4.1t2.2-6.7z m5.7-10.7v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
	        )
	    );
	};
	
	exports.default = FaGithubSquare;
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/fa/linkedin-square.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIconBase = __webpack_require__("./node_modules/react-icon-base/lib/index.js");
	
	var _reactIconBase2 = _interopRequireDefault(_reactIconBase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FaLinkedinSquare = function FaLinkedinSquare(props) {
	    return _react2.default.createElement(
	        _reactIconBase2.default,
	        _extends({ viewBox: '0 0 40 40' }, props),
	        _react2.default.createElement(
	            'g',
	            null,
	            _react2.default.createElement('path', { d: 'm8.3 31.6h5.1v-15.5h-5.1v15.5z m5.5-20.3q0-1.2-0.8-1.9t-2.1-0.8-2.1 0.8-0.8 1.9q0 1.1 0.8 1.9t2 0.8h0.1q1.3 0 2.1-0.8t0.8-1.9z m13 20.3h5.2v-8.9q0-3.5-1.6-5.2t-4.3-1.8q-3.1 0-4.7 2.6h0v-2.2h-5.1q0 1.4 0 15.5h5.1v-8.7q0-0.8 0.2-1.2 0.3-0.8 1-1.4t1.7-0.5q2.5 0 2.5 3.5v8.3z m10.5-22.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
	        )
	    );
	};
	
	exports.default = FaLinkedinSquare;
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _exenv = __webpack_require__("./node_modules/exenv/index.js");
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var _shallowequal = __webpack_require__("./node_modules/shallowequal/index.js");
	
	var _shallowequal2 = _interopRequireDefault(_shallowequal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }
	
	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }
	
	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }
	
	    var mountedInstances = [];
	    var state = void 0;
	
	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));
	
	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }
	
	    var SideEffect = function (_Component) {
	      _inherits(SideEffect, _Component);
	
	      function SideEffect() {
	        _classCallCheck(this, SideEffect);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      // Try to use displayName of wrapped component
	      SideEffect.peek = function peek() {
	        return state;
	      };
	
	      // Expose canUseDOM so tests can monkeypatch it
	
	
	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
	        }
	
	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };
	
	      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !(0, _shallowequal2.default)(nextProps, this.props);
	      };
	
	      SideEffect.prototype.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };
	
	      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };
	
	      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };
	
	      SideEffect.prototype.render = function render() {
	        return _react2.default.createElement(WrappedComponent, this.props);
	      };
	
	      return SideEffect;
	    }(_react.Component);
	
	    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
	    SideEffect.canUseDOM = _exenv2.default.canUseDOM;
	
	
	    return SideEffect;
	  };
	};

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/***/ (function(module, exports) {

	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	
	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	    if(ret !== void 0) {
	        return !!ret;
	    }
	
	    if(objA === objB) {
	        return true;
	    }
	
	    if(typeof objA !== 'object' || !objA ||
	       typeof objB !== 'object' || !objB) {
	        return false;
	    }
	
	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);
	
	    if(keysA.length !== keysB.length) {
	        return false;
	    }
	
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	
	    // Test for A's keys different from B.
	    for(var idx = 0; idx < keysA.length; idx++) {
	
	        var key = keysA[idx];
	
	        if(!bHasOwnProperty(key)) {
	            return false;
	        }
	
	        var valueA = objA[key];
	        var valueB = objB[key];
	
	        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	
	        if(ret === false ||
	           ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	
	    }
	
	    return true;
	
	};


/***/ }),

/***/ "./src/data/images/CS-logo.svg":
/***/ (function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSItMTMuOTg2MDA3NjkwNDI5Njg4IC0xLjc0ODI0NTIzOTI1NzgxMjUgMjUwIDI1MCIgd2lkdGg9IjUwMHB4IiBoZWlnaHQ9IjUwMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InBhdHRlcm4tMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAwIEwgNTAgMCBMIDUwIDEwMCBMIDAgMTAwIFoiIHN0eWxlPSJmaWxsOiBibGFjazsiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHBhdGggZD0iTSA5Ni4xMzYgMTY2Ljk5MSBDIDg0LjAzIDE2Ni45OTEgNzQuMDE0IDE2MS4xMDkgNjYuMDk0IDE0OS4zNTMgQyA1OC4xNTUgMTM3LjU3IDU0LjE4NSAxMjIuMTggNTQuMTg1IDEwMy4xNzQgQyA1NC4xODUgODQuMTcxIDU2LjkxOCA2Ni44MzcgNjIuMzggNTEuMTcgQyA2Ny44NDIgMzUuNTMgNzUuNjQ0IDIyLjc5OCA4NS43ODUgMTIuOTgxIEMgOTUuOTI4IDMuMTYzIDEwNi43NTUgLTEuNzQ4IDExOC4yNjEgLTEuNzQ4IEMgMTI5Ljc2NyAtMS43NDggMTM5LjA2NCAxLjM3MyAxNDYuMTQ3IDcuNjE0IEMgMTUzLjIyOSAxMy44MzIgMTU2Ljc3MSAyMS4yNjEgMTU2Ljc3MSAyOS44OTggQyAxNTYuNzcxIDM4LjU2MiAxNTQuNjMzIDQ1LjkyNSAxNTAuMzU0IDUxLjk5MSBDIDE0Ni4xODMgNTEuOTkxIDE0MS41MDMgNTAuOSAxMzYuMzE0IDQ4LjcxNyBDIDEzMS4xMDYgNDYuNTM2IDEyNy4yIDQzLjg5OCAxMjQuNTk4IDQwLjc5OCBMIDEyOC4zMTEgMTcuMTcgQyAxMjUuMTc5IDE0LjgzNyAxMjEuMDgzIDEzLjY3IDExNi4wMjIgMTMuNjcgQyAxMDguMDgyIDEzLjY3IDEwMS4wNjIgMjEuODA3IDk0Ljk2MiAzOC4wODQgQyA4OC44NDYgNTQuMzc4IDg1Ljc4NSA3NC40NCA4NS43ODUgOTguMjYzIEMgODUuNzg1IDExMy45OTYgODcuOTYzIDEyNS40MDUgOTIuMzEzIDEzMi40OTggQyA5Ni42NjQgMTM5LjU5IDEwMS45NjUgMTQzLjEzMSAxMDguMjEgMTQzLjEzMSBDIDExMC4wODMgMTQzLjEzMSAxMTEuOTQyIDE0Mi45MzkgMTEzLjc5IDE0Mi41NTcgQyAxMTMuMzM0IDE0MS40MzEgMTEyLjg4MiAxNDAuMjg5IDExMi40MzYgMTM5LjEzMyBDIDEwOC44MTYgMTI5Ljc5NiAxMDYuOTM5IDEyMS4zMDEgMTA2LjgwNiAxMTMuNjQ0IEMgMTA2LjU4OSAxMDEuMjMgMTA5Ljg4OCA5MC44ODUgMTE2LjcgODIuNjE3IEMgMTIzLjUxNCA3NC4zNDggMTMxLjI2NiA2OS41MjUgMTM5Ljk1MSA2OC4xNSBDIDE0OC42MzcgNjYuNzc5IDE1NS40MjkgNjguNDA1IDE2MC4zMjIgNzMuMDIgQyAxNjUuMjEgNzcuNjU4IDE2Ny43MTggODMuMzk5IDE2Ny44MzggOTAuMjQ0IEMgMTY3Ljk1NSA5Ny4xMDggMTY2LjI3NSAxMDQuNDEzIDE2Mi43ODkgMTEyLjE1NyBDIDE1OS4yODkgMTE5LjkwMiAxNTUuNzc1IDEyNi4xODcgMTUyLjI0IDEzMS4wMTIgTCAxNDYuOTQgMTM4LjIxOSBDIDE0OC4zNDUgMTQwLjYxMyAxNTAuMDQyIDE0My43MDIgMTUyLjAyNSAxNDcuNDc5IEMgMTU0LjAyMSAxNTEuMjU4IDE1Ni43MzIgMTU3Ljc4OCAxNjAuMTY1IDE2Ny4wNzggQyAxNjMuNjA4IDE3Ni4zNDQgMTY1LjM4NiAxODQuMDgxIDE2NS40OTQgMTkwLjI4NyBDIDE2NS43NjYgMjA1Ljk1MiAxNjEuODY2IDIxOS4wMDggMTUzLjc4OSAyMjkuNDUzIEMgMTQ1LjcxNiAyMzkuODgxIDEzNS44MTIgMjQ2LjAyMyAxMjQuMDc2IDI0Ny44NzYgQyAxMTYuMTc4IDI0OS4xMjUgMTA5LjYxMSAyNDcuMjYxIDEwNC4zNzkgMjQyLjI5IEMgOTkuMTQ1IDIzNy4yOTggOTYuMjEyIDIzMi44MTMgOTUuNTc4IDIyOC44MTkgQyA5Ni43MjggMjIzLjI0OSA5OS4yNzcgMjE2Ljc4NSAxMDMuMjI0IDIwOS40MzIgQyAxMDcuMTcyIDIwMi4wOTkgMTEwLjc2MSAxOTcuNDQyIDExMy45OTggMTk1LjQ1NyBDIDExOS44NSAxOTkuOTQxIDEyNS40MjEgMjExLjA5NSAxMzAuNzAyIDIyOC45MTQgQyAxMzguMDM0IDIyNy40MjQgMTQxLjYwMiAyMjEuMDUzIDE0MS40MDcgMjA5Ljc5OSBDIDE0MS4zIDIwMy41OTIgMTM5LjQ0MyAxOTYuMjM2IDEzNS44MzggMTg3LjczMSBDIDEzMi4yNDQgMTc5LjIwMiAxMjguMzQ5IDE3MS4zMDggMTI0LjE0NiAxNjQuMDQyIEMgMTIzLjI2MiAxNjIuNTExIDEyMi4zODggMTYwLjkzNCAxMjEuNTMgMTU5LjMxMSBDIDExOS4wMjMgMTYwLjc4NSAxMTYuMjEzIDE2Mi4xNzcgMTEzLjEwMSAxNjMuNDkxIEMgMTA3LjUwOCAxNjUuODIyIDEwMS44NTQgMTY2Ljk5MSA5Ni4xMzYgMTY2Ljk5MSBaIE0gMTUxLjE0NCAxMTIuMDE4IEMgMTUyLjYzNCAxMDkuNjcgMTUzLjk3MyAxMDYuODg5IDE1NS4xNjQgMTAzLjY3NyBDIDE1Ni4zNTQgMTAwLjQ0MyAxNTYuOTIgOTcuMTUyIDE1Ni44NjQgOTMuODExIEMgMTU2LjgwNCA5MC40NjQgMTU1LjM5NiA4Ny44NjUgMTUyLjY0NyA4Ni4wMTIgQyAxNDkuOTA3IDg0LjE1NyAxNDYuNjQ2IDgzLjUzMSAxNDIuODYxIDg0LjEyNyBDIDEzOS4wNzkgODQuNzI1IDEzNS45NDcgODYuNDg4IDEzMy40NjUgODkuNDIxIEMgMTMwLjk2OCA5Mi4zNTUgMTI5Ljc1MiA5NS41NzEgMTI5LjgxMSA5OS4wNyBDIDEyOS44NzMgMTAyLjU5IDEzMC43NTkgMTA2LjU0NCAxMzIuNDczIDExMC45MjcgQyAxMzQuMTgzIDExNS4zMzIgMTM1Ljg2MiAxMTguOTUzIDEzNy41MDYgMTIxLjc5NSBMIDE0MC4xMTEgMTI2LjAzNSBDIDE0MS4yMzQgMTI1LjA0MSAxNDIuOTggMTIzLjA1MSAxNDUuMzU3IDEyMC4wNTQgQyAxNDcuNzMgMTE3LjA2NiAxNDkuNjYzIDExNC4zODUgMTUxLjE0NCAxMTIuMDE4IFoiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyBmaWxsOiAjMDA5MkNBOyIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/layouts/flexstyles.css":
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v14/cJZKeOuBrn4kERxqtaUH3ZBw1xU1rKptJj_0jans920.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\n}\n\nhtml {\n  box-sizing: border-box;\n  min-width: 320px;\n  overflow-y: scroll;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody {\n  width: 100%;\n  margin: 0;\n  font-family: 'Open Sans', sans-serif;\n  background: #393E46;\n  color: #eee;\n}\n\nh1,\nh2,\nh3,\np {\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: #eee;\n}\n\na:hover {\n  cursor: pointer;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n}\n", ""]);
	
	// exports


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/Chris/Documents/Sites/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/Chris/Documents/Sites/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/Chris/Documents/Sites/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/Chris/Documents/Sites/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[\"/Users/Chris/Documents/Sites/portfolio/node_modules/babel-preset-env/lib/index.js\",\"/Users/Chris/Documents/Sites/portfolio/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/Chris/Documents/Sites/portfolio/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/layouts/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__("./node_modules/gatsby-link/index.js");
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactHelmet = __webpack_require__("./node_modules/react-helmet/lib/Helmet.js");
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _CSLogo = __webpack_require__("./src/data/images/CS-logo.svg");
	
	var _CSLogo2 = _interopRequireDefault(_CSLogo);
	
	var _shared = __webpack_require__("./src/layouts/shared.js");
	
	__webpack_require__("./src/layouts/flexstyles.css");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TemplateWrapper = function TemplateWrapper(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_reactHelmet2.default, { title: 'Chris Scouras - Front End Web Developer', meta: [{
	        name: 'description',
	        content: 'Chris Scouras\'s Front End Web Portfolio'
	      }, {
	        name: 'keywords',
	        content: 'portfolio, web development, front end'
	      }] }),
	    _react2.default.createElement(
	      _shared.SiteContainer,
	      null,
	      _react2.default.createElement(
	        _shared.SiteHeader,
	        null,
	        _react2.default.createElement(
	          _shared.HeaderContent,
	          null,
	          _react2.default.createElement(
	            _gatsbyLink2.default,
	            { to: '/' },
	            _react2.default.createElement(_shared.Logo, { src: _CSLogo2.default, alt: 'logo' })
	          ),
	          _react2.default.createElement(
	            _shared.SiteNav,
	            null,
	            _react2.default.createElement(
	              'ul',
	              null,
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  _gatsbyLink2.default,
	                  { to: '/projects' },
	                  'Projects'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  _gatsbyLink2.default,
	                  { to: '/about' },
	                  'About'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  _gatsbyLink2.default,
	                  { to: '/contact' },
	                  'Contact'
	                )
	              )
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        _shared.ContentWrapper,
	        null,
	        children()
	      ),
	      _react2.default.createElement(
	        _shared.Footer,
	        null,
	        _react2.default.createElement(
	          _shared.FooterContent,
	          null,
	          _react2.default.createElement(
	            _shared.FooterNav,
	            null,
	            _react2.default.createElement(
	              'ul',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: 'https://github.com/cscouras', target: '_blank', rel: 'noopener noreferrer' },
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement(_shared.GitHubLogo, null)
	                )
	              ),
	              _react2.default.createElement(
	                'a',
	                { href: 'https://www.linkedin.com/in/cscouras/', target: '_blank', rel: 'noopener noreferrer' },
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement(_shared.LinkedInLogo, null)
	                )
	              )
	            )
	          )
	        )
	      )
	    )
	  );
	};
	
	TemplateWrapper.propTypes = {
	  children: _propTypes2.default.func
	};
	
	exports.default = TemplateWrapper;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/layouts/shared.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ContentWrapper = exports.SiteContainer = exports.FooterNav = exports.FooterContent = exports.Footer = exports.LinkedInLogo = exports.GitHubLogo = exports.SiteNav = exports.Logo = exports.HeaderContent = exports.SiteHeader = undefined;
	
	var _templateObject = _taggedTemplateLiteral(['\n  font-size: 50px;\n  &:hover {\n    color: #0092CA;\n  }\n'], ['\n  font-size: 50px;\n  &:hover {\n    color: #0092CA;\n  }\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  color: #eee;\n  border-bottom: 5px solid #222831;\n  padding: 1em;\n  margin-bottom: 1em;\n\n  @media (max-width: 600px){\n    align-items: center;\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  color: #eee;\n  border-bottom: 5px solid #222831;\n  padding: 1em;\n  margin-bottom: 1em;\n\n  @media (max-width: 600px){\n    align-items: center;\n    flex-direction: column;\n  }\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin: 0 auto;\n  width: 960px;\n'], ['\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin: 0 auto;\n  width: 960px;\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n  width: 75px;\n  height: auto;\n  margin; 5px\n'], ['\n  width: 75px;\n  height: auto;\n  margin; 5px\n']),
	    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: flex-end;\n  > ul {\n    width: 250px;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    > li {\n      margin: 0px;\n      > a {\n        padding: 3px;\n        &:hover {\n          background: #0092CA;\n        }\n      }\n    }\n  }\n'], ['\n  display: flex;\n  justify-content: flex-end;\n  > ul {\n    width: 250px;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    > li {\n      margin: 0px;\n      > a {\n        padding: 3px;\n        &:hover {\n          background: #0092CA;\n        }\n      }\n    }\n  }\n']),
	    _templateObject6 = _taggedTemplateLiteral(['\n  background: #222831;\n  height: 120px;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n\n  @media (max-width: 600px){\n    justify-content: center;\n  }\n'], ['\n  background: #222831;\n  height: 120px;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n\n  @media (max-width: 600px){\n    justify-content: center;\n  }\n']),
	    _templateObject7 = _taggedTemplateLiteral(['\n  margin-right: 15%;\n\n  @media (max-width: 600px){\n    margin-right: 0px;\n  }\n'], ['\n  margin-right: 15%;\n\n  @media (max-width: 600px){\n    margin-right: 0px;\n  }\n']),
	    _templateObject8 = _taggedTemplateLiteral(['\n  > ul {\n    list-style: none;\n    display: flex;\n  }\n'], ['\n  > ul {\n    list-style: none;\n    display: flex;\n  }\n']),
	    _templateObject9 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n'], ['\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n']),
	    _templateObject10 = _taggedTemplateLiteral(['\n  margin: 0 auto;\n  max-width: 960px;\n  padding: 0px 1.0875rem 1.45rem;\n  padding-top: 0;\n  flex:1;\n'], ['\n  margin: 0 auto;\n  max-width: 960px;\n  padding: 0px 1.0875rem 1.45rem;\n  padding-top: 0;\n  flex:1;\n']);
	
	var _styledComponents = __webpack_require__("./node_modules/styled-components/lib/index.js");
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _githubSquare = __webpack_require__("./node_modules/react-icons/lib/fa/github-square.js");
	
	var _githubSquare2 = _interopRequireDefault(_githubSquare);
	
	var _linkedinSquare = __webpack_require__("./node_modules/react-icons/lib/fa/linkedin-square.js");
	
	var _linkedinSquare2 = _interopRequireDefault(_linkedinSquare);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	// Social Media Icons
	var GitHubLogo = (0, _styledComponents2.default)(_githubSquare2.default)(_templateObject);
	
	var LinkedInLogo = (0, _styledComponents2.default)(_linkedinSquare2.default)(_templateObject);
	
	var SiteHeader = _styledComponents2.default.header(_templateObject2);
	
	var HeaderContent = _styledComponents2.default.div(_templateObject3);
	
	var Logo = _styledComponents2.default.img(_templateObject4);
	
	var SiteNav = _styledComponents2.default.nav(_templateObject5);
	var Footer = _styledComponents2.default.footer(_templateObject6);
	
	var FooterContent = _styledComponents2.default.div(_templateObject7);
	
	var FooterNav = _styledComponents2.default.nav(_templateObject8);
	
	var SiteContainer = _styledComponents2.default.main(_templateObject9);
	
	var ContentWrapper = _styledComponents2.default.div(_templateObject10);
	exports.SiteHeader = SiteHeader;
	exports.HeaderContent = HeaderContent;
	exports.Logo = Logo;
	exports.SiteNav = SiteNav;
	exports.GitHubLogo = GitHubLogo;
	exports.LinkedInLogo = LinkedInLogo;
	exports.Footer = Footer;
	exports.FooterContent = FooterContent;
	exports.FooterNav = FooterNav;
	exports.SiteContainer = SiteContainer;
	exports.ContentWrapper = ContentWrapper;

/***/ })

});
//# sourceMappingURL=layout-component---index-24e4e511c54689d50522.js.map