import styled from 'styled-components'

const CardWrapper = styled.div`
  flex-basis: 25%;
  padding: 15px;
  margin-bottom: .5em;
  text-align: center;
  h3 a {
    padding: 5px;
    color: #0092CA;
    transition: background .5s;
    &:hover {
      background: #222831;
    }
  }
  img {
    margin: 10px auto 5px;
    width: 200px;
    height: 112px;
    box-shadow: 0 0 2px #eee;
    border-radius: 5px;
  }

  @media (max-width: 992px){
    flex-basis: 50%;
  }

  @media (max-width: 600px){
    flex-basis: 100%;
    margin-right: 0;
  }
`

const LangList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    line-height: 1.7;
  }
`

const ProjectContentWrapper = styled.div`
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-self: center;
`
const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
  > h3 {
    width: 100%;
    margin-bottom: 5px;
    border-bottom: 5px solid #0092CA;
    > span {
      background:#0092CA;
      color: #222831;
      padding: 3px 8px;
    }
  }

  @media (max-width: 992px){
    margin: 0 1em;
  }
`

export { ProjectContainer, ProjectContentWrapper, CardWrapper, LangList}
