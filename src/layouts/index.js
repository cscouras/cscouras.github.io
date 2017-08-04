import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import logo from '../data/images/CS-logo.svg'
import {HeaderContainer, HeaderContent, Logo, SiteNav} from '../components/Header'
import './flexstyles.css'

import GithubIcon from 'react-icons/lib/fa/github-square'
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square'

// Social Media Icons
const GitHubLogo = styled(GithubIcon)`
  font-size: 50px;
  &:hover {
    color: #0092CA;
  }
`

const LinkedInLogo = styled(LinkedInIcon)`
  font-size: 50px;
  &:hover {
    color: #0092CA;
  }
`


const Footer = styled.footer`
  background: #222831;
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;


  @media (max-width: 600px){
    justify-content: center;
  }
`

const FooterContent = styled.div`
  margin-right: 15%;

  @media (max-width: 600px){
    margin-right: 0px;
  }
`

const FooterNav = styled.nav`
  > ul {
    padding:0;
    list-style: none;
    display: flex;
  }
`

const SiteContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  flex:1;
`

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
      </HeaderContainer>

      <ContentWrapper>
        {children()}
      </ContentWrapper>
      <Footer>
        <FooterContent>
          <FooterNav>
            <ul>
              <a href="https://github.com/cscouras" target="_blank" rel="noopener noreferrer">
                <li><GitHubLogo /></li>
              </a>
              <a href="https://www.linkedin.com/in/cscouras/" target="_blank" rel="noopener noreferrer">
                <li><LinkedInLogo /></li>
              </a>
            </ul>
          </FooterNav>
        </FooterContent>
      </Footer>
    </SiteContainer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
