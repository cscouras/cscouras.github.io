import React from 'react'
import {CardWrapper, LangList, ProjectContainer, ProjectContentWrapper } from '../components/ProjectsPage'
import ProjectsData from '../data/projects'
import PropTypes from 'prop-types'

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
