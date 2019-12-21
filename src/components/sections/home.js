import React from 'react'

import "../../styles/home.css"

const Home = () => {
  return (
    <div className="home-main">
      <p>Hello! <span role="img" aria-label="wave">👋</span></p>
      <h2>I'm Jason Chen, a software engineer.</h2>
      <p>Need a developer? <a href="mailto:chisanch@usc.edu">Contact me.</a></p>
    </div>
  )
}

export default Home