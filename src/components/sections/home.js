import React from 'react'

import "../../styles/home.css"

const Home = () => {
  return (
    <div className="home-main">
      <p>Hello! <span role="img" aria-label="wave">👋</span></p>
      <h1>I'm <span className="name">Jason Chen</span>, a software engineer.</h1>
      <h2>I build all sorts of stuff.</h2>
      <a className="mail-link" href="mailto:chisanch@usc.edu">
        Contact me
      </a>
    </div>
  )
}

export default Home