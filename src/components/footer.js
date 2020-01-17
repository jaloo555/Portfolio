import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFirstdraft, faInstagram } from '@fortawesome/free-brands-svg-icons'
import "../styles/footer.scss"

const Footer = () => {
  return (
    <div className="contact-footer">
      <div className="contact02">
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
        <a className="social" href="./Resume.pdf">
          <FontAwesomeIcon icon={faFirstdraft} />
        </a>
      </div>
      <p>Created by Jason Chen, © 2020</p>
      <p className="inspiration">Inspired by bchiang7</p>
    </div>
  )
}

export default Footer
