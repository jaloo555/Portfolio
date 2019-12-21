import React from 'react'

import "../styles/header.css"
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <h1>
          <Link to="/" className="logo">Chi San Chen</Link>
        </h1>
        <ul className="main-nav">
          <li>About</li>
          <li>Work</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
        
      </nav>
    </header>
  )
}

export default Header