import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import logo from '../data/images/CS-logo.svg'
import {
  SiteHeader,
  HeaderContent,
  Logo,
  SiteNav,
  Footer,
  FooterContent,
  FooterNav
} from './shared'

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
    <main className="site">
      <SiteHeader>
        <HeaderContent>
          <Link to="/">
            <Logo src={logo} alt="logo"></Logo>
          </Link>
          <SiteNav>
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
          </SiteNav>
        </HeaderContent>
      </SiteHeader>

      <div className="wrapper-content" style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}>

        {children()}
      </div>
      <Footer>
        <FooterContent>
          <FooterNav>
            <ul>
              <a href="https://github.com/cscouras" target="_blank" rel="noopener noreferrer">
                <li>GitHub</li>
              </a>
              <a href="https://www.linkedin.com/in/cscouras/" target="_blank" rel="noopener noreferrer">
                <li>LinkedIn</li>
              </a>
            </ul>
          </FooterNav>
        </FooterContent>
      </Footer>
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
