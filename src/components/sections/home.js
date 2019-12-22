import React from 'react'

import "../../styles/home.css"
import Container from "react-bootstrap/Container"

const Home = () => {
  return (
    <Container fluid={true} className="home-main">
      <p>Hello! <span role="img" aria-label="wave">👋</span> My name is</p>
      <h1><span className="name">Jason Chen</span>.</h1>
      <h1>I build all sorts of stuff.</h1>
      <p className="description">I'm a software engineer in Los Angeles that builds web applications and experiments with data science.</p>
      <a className="mail-link" href="mailto:chisanch@usc.edu">
        Contact me
      </a>
    </Container>
  )
}

export default Home