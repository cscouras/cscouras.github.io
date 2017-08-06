import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import logo from '../data/images/CS-logo.svg'
import { HeaderContainer, HeaderContent, Logo, Nav } from '../components/Header'
import { FooterContainer, FooterContent, FooterSocial } from '../components/Footer'
import { SiteContainer, ContentWrapper } from './shared'
import { GitHubLogo, LinkedInLogo } from '../components/Icons'
import './flexstyles.css'


const TemplateWrapper = ({children}) => (
  <div>
    <Helmet title="Chris Scouras - Front End Web Developer" meta={[
      {
        name: 'description',
        content: 'Chris Scouras\'s Front End Web Portfolio'
      }, {
        name: 'keywords',
        content: 'portfolio, web development, front end'
      }
    ]}/>
  <SiteContainer>
      <HeaderContainer>
        <HeaderContent>
          <Link to="/">
            <Logo src={logo} alt="logo"></Logo>
          </Link>
          <Nav>
            <ul>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Nav>
        </HeaderContent>
      </HeaderContainer>

      <ContentWrapper>
        {children()}
      </ContentWrapper>

      <FooterContainer>
        <FooterContent>
          <FooterSocial>
            <ul>
              <a href="https://github.com/cscouras" target="_blank" rel="noopener noreferrer">
                <li><GitHubLogo /></li>
              </a>
              <a href="https://www.linkedin.com/in/cscouras/" target="_blank" rel="noopener noreferrer">
                <li><LinkedInLogo /></li>
              </a>
            </ul>
          </FooterSocial>
        </FooterContent>
      </FooterContainer>
    </SiteContainer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
