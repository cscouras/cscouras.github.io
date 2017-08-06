import styled from 'styled-components'

const ContentContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-self: center;
  flex: 1;
  a {
    color: #0092CA;
  }
  p {
    margin: 10px 0;
    line-height: 1.5;
  }
  @media (max-width: 600px){
    margin: 0 1.5em;
    h1 {
      font-size: 1.5em;
    }
  }
`
export  default ContentContainer
