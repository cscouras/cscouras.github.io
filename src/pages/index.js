import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="home-content">
      <h1>Hey! I am Chris Scouras and this is my portfolio site.</h1>
      <p>
        I am teaching myself how to code utilizing resources online such as
        <a href="https://freecodecamp.org" target="_blank" rel="noopener noreferrer"> FreeCodeCamp </a>
        to achieve my goal of becoming a full stack JavaScript developer.
      </p>

      <p>
        I have received my
          <a href="https://www.freecodecamp.org/cscouras/front-end-certification" target="_blank"
            rel="noopener noreferrer" > Front End Development certificate </a> from FreeCodeCamp and am currently working through
          the Data Visualization section of the curriculum. I will continue to update
          the <Link to="/projects">projects section </Link> of this site as I complete projects and earn certifications.
      </p>

  </div>
)

export default IndexPage
