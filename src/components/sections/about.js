import React from 'react'

import "../../styles/about.css"
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container fluid={true} id="about" className="about-main">
      <div className="heading">
        <h4>About me</h4>
        <div className= "divider"></div>
      </div>
      <div className="about-desc">
        <p>
          I am a Computer Science major at the <span>University of Southern California</span>. 
          I enjoy developing websites and tweaking machine learning models.
        </p>
        <p>
          As a software engineer, I've interned at <a className="highlight" href="www.xunlei.com">Xunlei</a> and <a className="highlight" href="https://www.uliza.org/">Uliza</a> where I got to work on a variety of interesting problems.
        </p>
        <p>
          In my spare time, I enjoy building proof-of-concepts to validate cool ideas.
          When I'm not coding, you can usually find me at the gym or helping out <a className="highlight" href="https://www.trojansupport.org/">Trojan Support</a>. 
        </p>
      </div>
      
    </Container>
  )
}

export default About