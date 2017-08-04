import styled from 'styled-components'

const HeaderContainer = styled.header`
  border-bottom: 5px solid #222831;
  padding: 1em;
  margin-bottom: 1em;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;
  max-width: 960px;

  @media (max-width: 600px){
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
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
        transition: background .5s;
        &:hover {
          background: #0092CA;
        }
      }
    }
  }
  @media (max-width: 600px){
    margin-top: 15px;
  }
`

export {HeaderContainer, HeaderContent, Logo, SiteNav}
