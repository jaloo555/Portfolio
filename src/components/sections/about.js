import React from 'react'

import "../../styles/about.css"
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container id="about" className="about-main">
      <h1>About me</h1>
      <hr/>
      <p>
        Hi! I'm Jason, a Computer Science major at the University of Southern California. 
        I enjoy playing with data, developing websites and tweaking machine learning models.
      </p>
      <p>
        As a software engineer, I've interned at Xunlei and Uliza where I got to work on a variety of interesting problems.
        In my spare time, I enjoy building proof-of-concepts to validate cool ideas.
        When I'm not coding, you can usually find me at the gym or driving around in LA. 
      </p>
    </Container>
  )
}

export default About