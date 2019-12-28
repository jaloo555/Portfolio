import React from 'react'
import "../../styles/projects.scss"
import { useStaticQuery, graphql } from 'gatsby'


const Projects = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDataJson {
        edges {
          node {
            Projects {
              desc
              name
              tech
            }
          }
        }
      }
    }
  `)
  // console.log(data.allDataJson.edges[0].node.Projects);
  return (
    <section id="projects" className="projects-main section">
      <div className="section-title">Projects</div>
      <div className="section-content">
        {data.allDataJson.edges[0].node.Projects.map((edge, i) => {
          return (
            <div className="project">
              <div className="project-name">
                <a href="#" target="_blank" className="underline">{edge.name}</a>
              </div>
              <p>{edge.desc}</p>
              <div className="project-used">
                {edge.tech.map((t, i)=> {
                  return (
                    <span className="project-used-item">{t}</span>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects