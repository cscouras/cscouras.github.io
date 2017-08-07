import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ContentContainer from '../components/Content'
import cert from '../data/images/cert.png'

const Certificate = styled.img`
  margin: 5% 0;
  width: 100%;
  height: auto;
`

const About = () =>
  (<ContentContainer>
    <h1>About</h1>
    <h3>I&apos;m Chris Scouras and this is my portfolio site.</h3>
    <p>
      I am teaching myself how to code by utilizing various online resources, primarily{' '}
      <a href="https://freecodecamp.org" target="_blank" rel="noopener noreferrer">
        freeCodeCamp
      </a>
      . My objective is to earn the Full Stack JavaScript certification from freeCodeCamp and to
      find my first full-time job as a developer.
    </p>
    <p>
      To date I have received my{' '}
      <a
        href="https://www.freecodecamp.org/cscouras/front-end-certification"
        target="_blank"
        rel="noopener noreferrer"
      >
        Front End Development certificate
      </a>{' '}
      from freeCodeCamp and am currently working through the Data Visualization section of the
      curriculum. I will continue to update the <Link to="/projects">projects section</Link> of this
      site as I complete projects and earn certifications.
    </p>
    <Certificate src={cert} alt="FCC Front End Certification" />
    <p>
      Thus far I have used HTML5, CSS3, and JavaScript as well as libraries and technologies such as
      Twitter Bootstrap, jQuery, React, and Sass to complete projects in the Front End Development
      and Data Visualization sections of the freeCodeCamp curriculum. While freeCodeCamp provides a
      good place to start it is up to me to find the best resources in order to learn the skills
      required to complete these projects.
    </p>
    <p>
      Since freeCodeCamp has not yet provided challenges or resources on the subjects of React and
      Sass my learning of those technologies has been entirely self-directed. I have learned not
      only the syntax and principles behind the React framework and Sass pre-compiler, but also how
      to manually configure Webpack to enable Sass to work alongside React. Through learning about
      how to configure Webpack I also discovered{' '}
      <a
        href="https://github.com/facebookincubator/create-react-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        create-react-app
      </a>{' '}
      which is a great tool getting started on a project when I don&apos;t want to worry about the
      configuration unless I absolutely need to. Through the process of learning to code I have also
      become familiar with version control software. I am using git and GitHub to manage my current
      projects and also am familiar with Mercurial and BitBucket.
    </p>
    <p>
      As I continue to learn I have discovered all kinds of interesting new technologies. In the
      development of this portfolio site I have used{' '}
      <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
        Gatsbyjs{' '}
      </a>
      (a static site generator for React) and experimented with using{' '}
      <a href="https://styled-components.com" target="_blank" rel="noopener noreferrer">
        styled-components{' '}
      </a>
      to style the site. I&apos;ve also become very interested in{' '}
      <a href="https://gridbyexample.com/learn/" target="_blank" rel="noopener noreferrer">
        CSS Grid
      </a>{' '}
      after watching{' '}
      <a href="" target="_blank" rel="noopener noreferrer">
        this presentation{' '}
      </a>
      on YouTube and plan to use it in future projects.
    </p>
    <p>
      There is ALWAYS something new to learn. I have quickly learned the importance of being
      flexible and open to new concepts. As soon as I feel comfortable with what I know I discover
      that there is a new/better/faster way to do it. I am embracing the fact that there is always
      room for improvement and I look forward to the challenge of continuing to evolve with the
      technology.
    </p>
    <p>
      Please check back often for updates and, if you would like to, please feel free to{' '}
      <Link to="/contact">contact me</Link>.
    </p>
  </ContentContainer>)

export default About
