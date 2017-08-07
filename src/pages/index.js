import React from 'react'
import Link from 'gatsby-link'
import ContentContainer from '../components/Content'

const IndexPage = () =>
  (<ContentContainer>
    <h1>Hey! I&apos;m Chris Scouras and this is my portfolio site.</h1>
    <p>
      I am teaching myself how to code utilizing online resources, primarily{' '}
      <a href="https://freecodecamp.org" target="_blank" rel="noopener noreferrer">
        freeCodeCamp
      </a>
      . My objective is to complete the freeCodeCamp curriculum and achieve the Full Stack
      Development Certification.
    </p>

    <p>
      To date I have received my{' '}
      <a
        href="https://www.freecodecamp.org/cscouras/front-end-certification"
        target="_blank"
        rel="noopener noreferrer"
      >
        Front End Development certificate
      </a>
      , which focuses primarily on completing code challenges and creating projects using HTML5,
      CSS3, Bootstrap, JavaScript and jQuery. I am currently working through the Data Visualization
      section of the curriculum, in which I am teaching myself React, Sass, and D3 in order to
      complete the projects.
    </p>
    <p>
      I will continue to update the <Link to="/projects">projects section</Link> of this site as I
      complete projects and earn certifications.
    </p>
  </ContentContainer>)

export default IndexPage
