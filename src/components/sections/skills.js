import React from 'react'

import "../../styles/skills.scss"
import { Container, Row, Col } from 'react-bootstrap'

const Skills = () => {
  const languages = ["C++", "Java", "Python", "Javascript (ES6)", "SQL"]
  const frameworks = ["Pandas", "Numpy", "Keras", "Tensorflow", "React", "Node", "Java Servlets"]
  const tools = ["Bash", "Git & Github", "MySQL", "GCP", "AWS"]
  return (
    <Container fluid={true} id="skills" className="skills-main">
      <div className="skills-chunk">
        <div classname="skills-category" lg={3}>
          <ul className="skills-list">
            <li className="title">Languages</li>
            {languages.map((i) => <li className="skills-category-item">{i}</li>)}
          </ul>
        </div>
        <div classname="skills-category" lg={3}>
          <ul className="skills-list">
            <li className="title">Frameworks</li>
            {frameworks.map((i) => <li className="skills-category-item">{i}</li>)}
          </ul>
        </div>
        <div classname="skills-category" lg={3}>
          <ul className="skills-list">
            <li className="title">Tools</li>
            {tools.map((i) => <li className="skills-category-item">{i}</li>)}
          </ul>
        </div>
      </div>
      
    </Container>
  )
}

export default Skills