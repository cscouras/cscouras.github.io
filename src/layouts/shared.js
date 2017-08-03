import styled from 'styled-components'

const SiteHeader = styled.header`
  display: flex;
  color: #eee;
  border-bottom: 5px solid #222831;
  padding: 1em;
  margin-bottom: 1em;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;
  width: 960px;
`

const Logo = styled.img`
  width: 75px;
  height: auto;
  margin; 5px
`

const SiteNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  > ul {
    width: 250px;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    > li {
      margin: 0px;
      > a {
        padding: 3px;
        &:hover {
          background: #0092CA;
        }
      }
    }
  }
`

const Footer = styled.footer`
  background: #222831;
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
`

const FooterContent = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`

const FooterNav = styled.nav`
  > ul {
    list-style: none;
    margin-right: 10%;
    padding: 0;
  }
  > li {
    margin-top: 5px;
  }
`

export {
  SiteHeader,
  HeaderContent,
  Logo,
  SiteNav,
  Footer,
  FooterContent,
  FooterNav}
