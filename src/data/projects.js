import markdown from './images/thumbnails/markdown.png'
import leaderboard from './images/thumbnails/leaderboard.png'
import recipebox from './images/thumbnails/recipebox.png'
import gameoflife from './images/thumbnails/gameoflife.png'
import jscalc from './images/thumbnails/calculator.png'
import pomodoro from './images/thumbnails/pomodoro.png'
import tictactoe from './images/thumbnails/tictactoe.png'
import simon from './images/thumbnails/simon.png'
import quote from './images/thumbnails/randomquote.png'
import twitch from './images/thumbnails/twitch.png'
import weather from './images/thumbnails/weather.png'
import wiki from './images/thumbnails/wiki.png'
import meteor from './images/thumbnails/meteor.png'
import scatterplot from './images/thumbnails/scatterplot.png'
import bar from './images/thumbnails/bar.png'
import force from './images/thumbnails/force.png'
import heatmap from './images/thumbnails/heatmap.png'

const Projects = [
  {
    'React Projects': [
      {
        title: 'Markdown Previewer',
        link: 'https://codepen.io/cscouras/full/NpzmBp/',
        imgsrc: markdown,
        languages: ['React', 'Sass', 'Marked Library'],
      },
      {
        title: 'Camper Leaderboard',
        link: 'https://codepen.io/cscouras/full/NjKLWo/',
        imgsrc: leaderboard,
        languages: ['React', 'Sass', 'Axios Library'],
      },
      {
        title: 'Recipe Box',
        link: 'https://codepen.io/cscouras/full/MmNzYy/',
        imgsrc: recipebox,
        languages: ['React', 'Sass'],
      },
      {
        title: 'Game of Life',
        link: 'https://codepen.io/cscouras/full/qjRNZm/',
        imgsrc: gameoflife,
        languages: ['React', 'Sass'],
      },
    ],
  },
  {
    'D3.js Projects': [
      {
        title: 'Meteor Strike Data',
        link: 'https://codepen.io/cscouras/full/gxVpdX/',
        imgsrc: meteor,
        languages: ['D3.js', 'HTML5', 'CSS3', 'JavaScript'],
      },
      {
        title: 'D3.js Scatterplot',
        link: 'https://codepen.io/cscouras/full/YxRjqq/',
        imgsrc: scatterplot,
        languages: ['D3.js', 'HTML5', 'CSS3', 'JavaScript'],
      },
      {
        title: 'D3.js Bar Chart',
        link: 'https://codepen.io/cscouras/full/MvzEyv/',
        imgsrc: bar,
        languages: ['D3.js', 'HTML5', 'CSS3', 'JavaScript'],
      },
      {
        title: 'D3.js Heat Map',
        link: 'https://codepen.io/cscouras/full/gxqpXV',
        imgsrc: heatmap,
        languages: ['D3.js', 'HTML5', 'CSS3', 'JavaScript'],
      },
      {
        title: 'D3.js Force Graph',
        link: 'https://codepen.io/cscouras/full/PKvaaa',
        imgsrc: force,
        languages: ['D3.js', 'HTML5', 'CSS3', 'JavaScript'],
      },
    ],
  },
  {
    'Front End Projects': [
      {
        title: 'JavaScript Calculator',
        link: 'https://codepen.io/cscouras/full/GjGQNj/',
        imgsrc: jscalc,
        languages: ['HTML5', 'CSS3', 'JavaScript'],
      },
      {
        title: 'Pomodoro Clock',
        link: 'https://codepen.io/cscouras/full/XNWyxO/',
        imgsrc: pomodoro,
        languages: ['HTML5', 'CSS3', 'JavaScript'],
      },
      {
        title: 'Tic Tac Toe',
        link: 'https://codepen.io/cscouras/full/yVrqVz/',
        imgsrc: tictactoe,
        languages: ['HTML5', 'CSS3', 'JavaScript'],
      },
      {
        title: 'Simon',
        link: 'https://codepen.io/cscouras/full/XpzMmx/',
        imgsrc: simon,
        languages: ['HTML5', 'CSS3', 'JavaScript'],
      },
      {
        title: 'Random Quote App',
        link: 'https://codepen.io/cscouras/full/rLPEdN/',
        imgsrc: quote,
        languages: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery'],
      },
      {
        title: 'Local Weather App',
        link: 'https://codepen.io/cscouras/full/PzLjXd/',
        imgsrc: weather,
        languages: [
          'HTML5',
          'CSS3',
          'Bootstrap',
          'JavaScript',
          'jQuery',
          'Weather Underground API',
        ],
      },
      {
        title: 'Wikipedia Viewer',
        link: 'https://codepen.io/cscouras/full/jARxdb/',
        imgsrc: wiki,
        languages: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'Wikipedia API'],
      },
      {
        title: 'Twitch User Status',
        link: 'https://codepen.io/cscouras/full/OXZpNz/',
        imgsrc: twitch,
        languages: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'Twitch API'],
      },
    ],
  },
]

export default Projects
