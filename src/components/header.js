import React from 'react'

import "../styles/header.css"

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <h1 className="logo"> Chi San Chen </h1>
        <ul className="main-nav">
          <li>01. About Me</li>
          <li>02. Work experience</li>
          <li>03. Projects</li>
          <li>04. Contact me</li>
        </ul>
        
      </nav>
    </header>
  )
}

export default Header