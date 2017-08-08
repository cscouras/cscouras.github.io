import styled from 'styled-components'

const SiteContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  a {
    text-decoration: none;
    color: #0092CA;
    &:hover {
      cursor: pointer;
    }
`

const ContentWrapper = styled.div`flex: 1;`

export { SiteContainer, ContentWrapper }
