import styled from 'styled-components'

const FooterContainer = styled.footer`
  background: #222831;
  margin-top: 1em;
  padding: 1em;
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 600px){
    justify-content: center;
  }
`

const FooterContent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 960px;

  @media (max-width: 600px){
    justify-content: center;
  }
`

const FooterSocial = styled.nav`
  > ul {
    padding:0;
    list-style: none;
    display: flex;
  }
`

export { FooterContainer, FooterContent, FooterSocial }
