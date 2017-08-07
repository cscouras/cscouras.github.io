import React from 'react'
import PropTypes from 'prop-types'
import { CardWrapper, LangList, ProjectContainer, ProjectContentWrapper } from '../components/ProjectsPage'
import ProjectsData from '../data/projects'


const Card = props => (
  <CardWrapper>
    <h3><a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a></h3>
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={props.imgsrc} alt={props.title} />
    </a>
    <LangList>
      {props.languages.map(lang => (
        <p key={lang}>{lang}</p>
      ))}
    </LangList>
  </CardWrapper>
)

Card.propTypes = {
  link: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf.isRequired,
}

const ProjectsPage = () => (
  <ProjectContentWrapper>
    {ProjectsData.map(project => (
      <ProjectContainer key={Object.keys(project)}>
        <h3 key={Object.keys(project)}>
          <span>{Object.keys(project)}</span>
        </h3>
        {project[Object.keys(project)].map(proj => (
          <Card
            key={proj.link}
            title={proj.title}
            link={proj.link}
            imgsrc={proj.imgsrc}
            languages={proj.languages}
          />
        ))}
      </ProjectContainer>
    ))}
  </ProjectContentWrapper>
)

export default ProjectsPage
