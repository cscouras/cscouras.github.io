webpackJsonp([0x86e8cd016356d800],{"./src/components/ProjectsPage.js":function(A,e,n){"use strict";function t(A){return A&&A.__esModule?A:{default:A}}function a(A,e){return Object.freeze(Object.defineProperties(A,{raw:{value:Object.freeze(e)}}))}Object.defineProperty(e,"__esModule",{value:!0}),e.LangList=e.CardWrapper=e.ProjectContentWrapper=e.ProjectContainer=void 0;var g=a(["\n  flex-basis: 25%;\n  padding: 15px;\n  margin-bottom: .5em;\n  text-align: center;\n  h3 a {\n    white-space: pre;\n    padding: 5px;\n    color: #0092ca;\n    transition: background .5s;\n    &:hover {\n      background: #222831;\n    }\n  }\n  img {\n    margin: 10px auto 5px;\n    width: 200px;\n    height: 112px;\n    box-shadow: 0 0 2px #eee;\n    border-radius: 5px;\n  }\n\n  @media (max-width: 992px) {\n    flex-basis: 50%;\n  }\n\n  @media (max-width: 600px) {\n    flex-basis: 100%;\n    margin-right: 0;\n  }\n"],["\n  flex-basis: 25%;\n  padding: 15px;\n  margin-bottom: .5em;\n  text-align: center;\n  h3 a {\n    white-space: pre;\n    padding: 5px;\n    color: #0092ca;\n    transition: background .5s;\n    &:hover {\n      background: #222831;\n    }\n  }\n  img {\n    margin: 10px auto 5px;\n    width: 200px;\n    height: 112px;\n    box-shadow: 0 0 2px #eee;\n    border-radius: 5px;\n  }\n\n  @media (max-width: 992px) {\n    flex-basis: 50%;\n  }\n\n  @media (max-width: 600px) {\n    flex-basis: 100%;\n    margin-right: 0;\n  }\n"]),i=a(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > p {\n    line-height: 1.7;\n  }\n"],["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > p {\n    line-height: 1.7;\n  }\n"]),r=a(["\n  max-width: 960px;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n"],["\n  max-width: 960px;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n"]),s=a(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding-top: 10px;\n  > h3 {\n    width: 100%;\n    margin-bottom: 5px;\n    border-bottom: 5px solid #0092ca;\n    > span {\n      background: #0092ca;\n      color: #222831;\n      padding: 3px 8px;\n    }\n  }\n\n  @media (max-width: 992px) {\n    margin: 0 1em;\n  }\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding-top: 10px;\n  > h3 {\n    width: 100%;\n    margin-bottom: 5px;\n    border-bottom: 5px solid #0092ca;\n    > span {\n      background: #0092ca;\n      color: #222831;\n      padding: 3px 8px;\n    }\n  }\n\n  @media (max-width: 992px) {\n    margin: 0 1em;\n  }\n"]),o=n("./node_modules/styled-components/lib/index.js"),c=t(o),d=c.default.div(g),p=c.default.div(i),l=c.default.div(r),C=c.default.div(s);e.ProjectContainer=C,e.ProjectContentWrapper=l,e.CardWrapper=d,e.LangList=p},"./src/data/images/thumbnails/calculator.png":function(A,e){A.exports="data:image/png;base64,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"},"./src/data/images/thumbnails/gameoflife.png":function(A,e,n){A.exports=n.p+"static/gameoflife.f0be36f2.png"},"./src/data/images/thumbnails/leaderboard.png":function(A,e,n){A.exports=n.p+"static/leaderboard.faf1abe9.png"},"./src/data/images/thumbnails/markdown.png":function(A,e,n){A.exports=n.p+"static/markdown.c57bc5a2.png"},"./src/data/images/thumbnails/pomodoro.png":function(A,e,n){A.exports=n.p+"static/pomodoro.8d96e24e.png"},"./src/data/images/thumbnails/randomquote.png":function(A,e,n){A.exports=n.p+"static/randomquote.18e3e294.png"},"./src/data/images/thumbnails/recipebox.png":function(A,e,n){A.exports=n.p+"static/recipebox.1932324d.png"},"./src/data/images/thumbnails/simon.png":function(A,e,n){A.exports=n.p+"static/simon.5555f54a.png"},"./src/data/images/thumbnails/tictactoe.png":function(A,e){A.exports="data:image/png;base64,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"},"./src/data/images/thumbnails/twitch.png":function(A,e,n){A.exports=n.p+"static/twitch.b6154cce.png"},"./src/data/images/thumbnails/weather.png":function(A,e,n){A.exports=n.p+"static/weather.d8e7adab.png"},"./src/data/images/thumbnails/wiki.png":function(A,e,n){A.exports=n.p+"static/wiki.e8927385.png"},"./src/data/projects.js":function(A,e,n){"use strict";function t(A){return A&&A.__esModule?A:{default:A}}Object.defineProperty(e,"__esModule",{value:!0});var a=n("./src/data/images/thumbnails/markdown.png"),g=t(a),i=n("./src/data/images/thumbnails/leaderboard.png"),r=t(i),s=n("./src/data/images/thumbnails/recipebox.png"),o=t(s),c=n("./src/data/images/thumbnails/gameoflife.png"),d=t(c),p=n("./src/data/images/thumbnails/calculator.png"),l=t(p),C=n("./src/data/images/thumbnails/pomodoro.png"),u=t(C),Q=n("./src/data/images/thumbnails/tictactoe.png"),E=t(Q),m=n("./src/data/images/thumbnails/simon.png"),I=t(m),f=n("./src/data/images/thumbnails/randomquote.png"),B=t(f),h=n("./src/data/images/thumbnails/twitch.png"),b=t(h),v=n("./src/data/images/thumbnails/weather.png"),k=t(v),L=n("./src/data/images/thumbnails/wiki.png"),O=t(L),U=[{"React Projects":[{title:"Markdown Previewer",link:"https://codepen.io/cscouras/full/NpzmBp/",imgsrc:g.default,languages:["React","Sass","Marked Library"]},{title:"Camper Leaderboard",link:"https://codepen.io/cscouras/full/NjKLWo/",imgsrc:r.default,languages:["React","Sass","Axios Library"]},{title:"Recipe Box",link:"https://codepen.io/cscouras/full/MmNzYy/",imgsrc:o.default,languages:["React","Sass"]},{title:"Game of Life",link:"https://codepen.io/cscouras/full/qjRNZm/",imgsrc:d.default,languages:["React","Sass"]}]},{"Front End Projects":[{title:"JavaScript Calculator",link:"https://codepen.io/cscouras/full/GjGQNj/",imgsrc:l.default,languages:["HTML5","CSS3","JavaScript"]},{title:"Pomodoro Clock",link:"https://codepen.io/cscouras/full/XNWyxO/",imgsrc:u.default,languages:["HTML5","CSS3","JavaScript"]},{title:"Tic Tac Toe",link:"https://codepen.io/cscouras/full/yVrqVz/",imgsrc:E.default,languages:["HTML5","CSS3","JavaScript"]},{title:"Simon",link:"https://codepen.io/cscouras/full/XpzMmx/",imgsrc:I.default,languages:["HTML5","CSS3","JavaScript"]},{title:"Random Quote App",link:"https://codepen.io/cscouras/full/rLPEdN/",imgsrc:B.default,languages:["HTML5","CSS3","Bootstrap","JavaScript","jQuery"]},{title:"Local Weather App",link:"https://codepen.io/cscouras/full/PzLjXd/",imgsrc:k.default,languages:["HTML5","CSS3","Bootstrap","JavaScript","jQuery","Weather Underground API"]},{title:"Wikipedia Viewer",link:"https://codepen.io/cscouras/full/jARxdb/",imgsrc:O.default,languages:["HTML5","CSS3","Bootstrap","JavaScript","jQuery","Wikipedia API"]},{title:"Twitch User Status",link:"https://codepen.io/cscouras/full/OXZpNz/",imgsrc:b.default,languages:["HTML5","CSS3","Bootstrap","JavaScript","jQuery","Twitch API"]}]}];e.default=U,A.exports=e.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/chris/Documents/cscouras.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/chris/Documents/cscouras.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/chris/Documents/cscouras.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/chris/Documents/cscouras.github.io/node_modules/babel-preset-env/lib/index.js","/Users/chris/Documents/cscouras.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/chris/Documents/cscouras.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/projects.js':function(A,e,n){"use strict";function t(A){return A&&A.__esModule?A:{default:A}}Object.defineProperty(e,"__esModule",{value:!0});var a=n("./node_modules/react/react.js"),g=t(a),i=n("./node_modules/prop-types/index.js"),r=t(i),s=n("./src/components/ProjectsPage.js"),o=n("./src/data/projects.js"),c=t(o),d=function(A){return g.default.createElement(s.CardWrapper,null,g.default.createElement("h3",null,g.default.createElement("a",{href:A.link,target:"_blank",rel:"noopener noreferrer"},A.title)),g.default.createElement("a",{href:A.link,target:"_blank",rel:"noopener noreferrer"},g.default.createElement("img",{src:A.imgsrc,alt:A.title})),g.default.createElement(s.LangList,null,A.languages.map(function(A){return g.default.createElement("p",{key:A},A)})))};d.propTypes={link:r.default.string.isRequired,imgsrc:r.default.string.isRequired,title:r.default.string.isRequired,languages:r.default.arrayOf(r.default.string).isRequired};var p=function(){return g.default.createElement(s.ProjectContentWrapper,null,c.default.map(function(A){return g.default.createElement(s.ProjectContainer,{key:Object.keys(A)},g.default.createElement("h3",{key:Object.keys(A)},g.default.createElement("span",null,Object.keys(A))),A[Object.keys(A)].map(function(A){return g.default.createElement(d,{key:A.link,title:A.title,link:A.link,imgsrc:A.imgsrc,languages:A.languages})}))}))};e.default=p,A.exports=e.default}});
//# sourceMappingURL=page-component---src-pages-projects-js-68571471e76249e17c0e.js.map