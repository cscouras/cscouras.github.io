import React from 'react'
import styled from 'styled-components'
import ProjectsData from '../data/projects'
import PropTypes from 'prop-types'

const CardWrapper = styled.div`
  padding: 15px;
  margin-bottom: .5em;
  img {
    margin: 5px auto;
    width: 200px;
    height: 112px;
    box-shadow: 0 0 2px #eee;
    border-radius: 5px;
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
      padding: 3px 8x;
    }
  }
`

const Card = props => {
  return (
    <CardWrapper>
      <h3><a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a></h3>
      <a href={props.link} target="_blank" rel="noopener noreferrer"><img src={props.imgsrc} alt={props.title} /></a>
        <LangList>
          {props.languages.map(lang => {
            return (
              <p key={lang}>{lang}</p>
            )
          })}
        </LangList>
    </CardWrapper>
)}

Card.propTypes = {
    link: PropTypes.string,
    imgsrc: PropTypes.string,
    title: PropTypes.string,
    languages: PropTypes.array
}

const ProjectsPage = () => (
      <ProjectContentWrapper>
        {ProjectsData.map(project => {
          return (
            <ProjectContainer key={Object.keys(project)}>
              <h3 key={Object.keys(project)}>
                <span>{Object.keys(project)}</span>
              </h3>
              {project[Object.keys(project)].map(proj => {
                return (<Card key={proj.link} title={proj.title} link={proj.link} imgsrc={proj.imgsrc} languages={proj.languages}/>)
              })}
            </ProjectContainer>
          )
        })}
      </ProjectContentWrapper>
  )

export default ProjectsPage
