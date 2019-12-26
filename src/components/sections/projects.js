import React from 'react'

import "../../styles/projects.scss"

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
            projects
          </div>
        </div>
        
      </section>
    )
  }
}

export default Projects