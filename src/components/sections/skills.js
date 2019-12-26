import React from 'react'

import "../../styles/skills.scss"

const Skills = () => {
  const languages = ["C++", "Java", "Python", "Javascript (ES6)", "SQL"]
  const frameworks = ["Keras", "Tensorflow", "React", "NodeJS", "Java Servlets"]
  const tools = ["Bash", "Git & Github", "MySQL", "Google Cloud Platform", "AWS"]
  return (
    <section id="skills" className="skills-main skills section">
      <div className="section-title">Skills</div>
      <div className="section-content">
        <div className="skills-chunk">
          <div className="skills-category" lg={3}>
            <div className="skills-category-label">Languages</div>
            <ul>
              {languages.map((row,i) => <li className="skills-category-item" key={i}>{row}</li>)}
            </ul>
          </div>
          <div className="skills-category" lg={3}>
            <div className="skills-category-label">Frameworks</div>
            <ul>
              {frameworks.map((row, i) => <li className="skills-category-item" key={i}>{row}</li>)}
            </ul>
          </div>
          <div className="skills-category" lg={3}>
            <div className="skills-category-label">Tools</div>
            <ul>
              {tools.map((row,i) => <li className="skills-category-item" key={i}>{row}</li>)}
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Skills