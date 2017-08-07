import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import ContentContainer from '../components/Content';
import cert from '../data/images/cert.png';

const Certificate = styled.img`
  margin-top: 10%;
  width: 100%;
  height: auto;
`;

const About = () =>
  (<ContentContainer>
    <h1>About</h1>
    <h3>I&apos;m Chris Scouras and this is my portfolio site.</h3>
    <p>
      I am teaching myself how to code utilizing resources online such as{' '}
      <a href="https://freecodecamp.org" target="_blank" rel="noopener noreferrer">
        FreeCodeCamp
      </a>{' '}
      to achieve my goal of becoming a full stack JavaScript developer.
    </p>
    <p>
      I have received my{' '}
      <a
        href="https://www.freecodecamp.org/cscouras/front-end-certification"
        target="_blank"
        rel="noopener noreferrer"
      >
        Front End Development certificate
      </a>{' '}
      from FreeCodeCamp and am currently working through the Data Visualization section of the
      curriculum. I will continue to update the <Link to="/projects">projects section</Link> of this
      site as I complete projects and earn certifications.
    </p>
    <p>
      Through the course of my self-directed study and completion of projects in the FreeCodeCamp
      curriculum I have learned about and used HTML5, CSS3, and JavaScript as well as libraries and
      technologies such as Twitter Bootstrap, jQuery, React, and Sass. In building my React
      applications I&apos;ve set up my development environment with Webpack and manually configured
      Sass and Babel loaders, though I&apos;ve learned that create-react-app can be a wonderful tool
      when I just want to get started. I do my best to keep up with the always changing web
      development landscape. Recently I&apos;ve been looking into CSS Grid and how I can implement
      it when considering layout for my projects. I am familiar with version control software, I
      have used Mercurial in the past and am using git and GitHub to manage my current projects.
    </p>
    <p>
      If you would like to reach out please feel free to <Link to="/contact">contact me</Link>.
    </p>
    <Certificate src={cert} alt="FCC Front End Certification" />
  </ContentContainer>);

export default About;
