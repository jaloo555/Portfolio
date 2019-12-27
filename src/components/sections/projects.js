import React from 'react'
import {Card} from 'react-bootstrap'

import "../../styles/projects.scss"

const ProjectCard = (props) => {
  return(
    <Card bg="white" text="white">
      <Card.Header className="card-header">Featured Project</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
      </Card.Body>
    </Card>
  )
}

class Projects extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="projects" className="projects-main projects section">
        <div className="section-title">Projects</div>
        <div className="section-content">
          <div className="projects-chunk">

            
          </div>
        </div>
        
      </section>
    )
  }
}

export default Projects