webpackJsonp([16228548823048030000],{

/***/ "./src/components/Icons.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _templateObject = _taggedTemplateLiteral(['\nmargin-top: 10%;\nwidth: 100%;\nheight: auto;\n'], ['\nmargin-top: 10%;\nwidth: 100%;\nheight: auto;\n']);
	
	var _styledComponents = __webpack_require__("./node_modules/styled-components/lib/index.js");
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var Certificate = _styledComponents2.default.img(_templateObject);
	
	exports.default = Certificate;
	module.exports = exports['default'];

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
	
	var _Content2 = _interopRequireDefault(_Content);
	
	var _Icons = __webpack_require__("./src/components/Icons.js");
	
	var _Icons2 = _interopRequireDefault(_Icons);
	
	var _cert = __webpack_require__("./src/data/images/cert.png");
	
	var _cert2 = _interopRequireDefault(_cert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var About = function About() {
	  return _react2.default.createElement(
	    _Content2.default,
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
	    _react2.default.createElement(_Icons2.default, { src: _cert2.default, alt: 'FCC Front End Certification' })
	  );
	};
	
	exports.default = About;
	module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=page-component---src-pages-about-js-9039ffe843b9cb361a5b.js.map