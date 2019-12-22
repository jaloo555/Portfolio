import React from 'react'

import "../styles/header.css"
import { Link } from 'gatsby'
import {Button} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <h1>
          <Link to="/" className="logo">JC</Link>
        </h1>
        <ul className="main-nav">
          <li>About</li>
          <li>Work</li>
          <li>Projects</li>
          <li>Contact</li>
          <Button>Resume</Button>
        </ul>
        
      </nav>
    </header>
  )
}

export default Header