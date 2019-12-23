import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFirstdraft, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer>
      <div className="contact01">
        <a className="social" href="https://github.com/jaloo555">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="social" href="https://www.instagram.com/chisanchen/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="social" href="https://www.linkedin.com/in/chenchisan/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="mail-link" href="mailto:chisanch@usc.edu">
          <FontAwesomeIcon icon="envelope" />
        </a>
        <a className="social">
          <FontAwesomeIcon icon={faFirstdraft} />
        </a>
      </div>
      <p>Created by Jason Chen, © 2020</p>
    </footer>
  )
}

export default Footer
