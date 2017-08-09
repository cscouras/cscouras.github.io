webpackJsonp([16228548823048030000],{

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

/***/ "./src/components/Icons.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Certificate = exports.LinkedInLogo = exports.GitHubLogo = undefined;
	
	var _templateObject = _taggedTemplateLiteral(['\n  font-size: 50px;\n  &:hover {\n    color: #0092CA;\n  }\n'], ['\n  font-size: 50px;\n  &:hover {\n    color: #0092CA;\n  }\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\nmargin-top: 10%;\nwidth: 100%;\nheight: auto;\n'], ['\nmargin-top: 10%;\nwidth: 100%;\nheight: auto;\n']);
	
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
	
	var Certificate = _styledComponents2.default.img(_templateObject2);
	
	exports.GitHubLogo = GitHubLogo;
	exports.LinkedInLogo = LinkedInLogo;
	exports.Certificate = Certificate;

/***/ }),

/***/ "./src/data/images/cert.png":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/cert.91174b14.png";

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/Chris/Documents/Sites/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/Chris/Documents/Sites/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/Chris/Documents/Sites/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/Chris/Documents/Sites/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[\"/Users/Chris/Documents/Sites/portfolio/node_modules/babel-preset-env/lib/index.js\",\"/Users/Chris/Documents/Sites/portfolio/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/Chris/Documents/Sites/portfolio/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/about.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__("./node_modules/gatsby-link/index.js");
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _Content = __webpack_require__("./src/components/Content.js");
	
	var _Icons = __webpack_require__("./src/components/Icons.js");
	
	var _cert = __webpack_require__("./src/data/images/cert.png");
	
	var _cert2 = _interopRequireDefault(_cert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var About = function About() {
	  return _react2.default.createElement(
	    _Content.ContentContainer,
	    null,
	    _react2.default.createElement(
	      'h1',
	      null,
	      'About'
	    ),
	    _react2.default.createElement(
	      'h2',
	      null,
	      'I\'m Chris Scouras and this is my portfolio site.'
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      'I am teaching myself how to code utilizing resources online such as',
	      " ",
	      _react2.default.createElement(
	        'a',
	        { href: 'https://freecodecamp.org', target: '_blank', rel: 'noopener noreferrer' },
	        'FreeCodeCamp'
	      ),
	      " ",
	      'to achieve my goal of becoming a full stack JavaScript developer.'
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      'I have received my',
	      " ",
	      _react2.default.createElement(
	        'a',
	        { href: 'https://www.freecodecamp.org/cscouras/front-end-certification', target: '_blank', rel: 'noopener noreferrer' },
	        'Front End Development certificate'
	      ),
	      " ",
	      'from FreeCodeCamp and am currently working through the Data Visualization section of the curriculum. I will continue to update the',
	      " ",
	      _react2.default.createElement(
	        _gatsbyLink2.default,
	        { to: '/projects' },
	        'projects section'
	      ),
	      " ",
	      'of this site as I complete projects and earn certifications.'
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      'Through the course of my self-directed study and completion of projects in the FreeCodeCamp curriculum I have learned about and used HTML5, CSS3, and JavaScript as well as libraries and technologies such as Twitter Bootstrap, jQuery, React, and Sass. In building my React applications I\'ve set up my development environment with Webpack and manually configured Sass and Babel loaders, though I\'ve learned that create-react-app can be a wonderful tool when I just want to get started. I do my best to keep up with the always changing web development landscape. Recently I\'ve been looking into CSS Grid and how I can implement it when considering layout for my projects. I am familiar with version control software, I have used Mercurial in the past and am using git and GitHub to manage my current projects.'
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      'If you would like to reach out please feel free to',
	      " ",
	      _react2.default.createElement(
	        _gatsbyLink2.default,
	        { to: '/contact' },
	        'contact me'
	      ),
	      '.'
	    ),
	    _react2.default.createElement(_Icons.Certificate, { src: _cert2.default, alt: 'FCC Front End Certification' })
	  );
	};
	
	exports.default = About;
	module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=page-component---src-pages-about-js-9d15fd2c9cb92f4d94f7.js.map