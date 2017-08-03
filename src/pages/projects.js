import React from 'react'
import PropTypes from 'prop-types'
import Projects from '../data/projects'

const Content = () => {
  return (
    <div className="content">
    {Projects.map(project => {
      return (
        <div key={Object.keys(project)} className="projectSection">
          <ProjectsTitle key={Object.keys(project)} title={Object.keys(project)} />
          {project[Object.keys(project)].map(proj => {
            return (
              <Card key={proj.link} title={proj.title} link={proj.link} imgsrc={proj.imgsrc}
                languages={proj.languages} />
            )
          })}
        </div>
      )
  })}
</div>
  )
}

const ProjectsTitle = ({title}) =>
  <h3 className="projectsTitle"><span>{title}</span></h3>

const Card = props => {
  return (
    <div className="card">
      <h3 className="card-title"><a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a></h3>
      <a href={props.link} target="_blank" rel="noopener noreferrer"><img className="thumbnail" src={props.imgsrc} alt={props.title} /></a>
        <div className="langList">
          {props.languages.map(lang => {
            return (
              <p key={lang}>{lang}</p>
            )
          })}
        </div>
    </div>
)}

const ProjectsPage = () => (
  <Content />
)

Card.propTypes = {
    link: PropTypes.string,
    imgsrc: PropTypes.string,
    title: PropTypes.string,
    languages: PropTypes.array
}

ProjectsTitle.propTypes = {
  title: PropTypes.array
}

export default ProjectsPage
