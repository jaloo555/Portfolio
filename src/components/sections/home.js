import React from 'react'

import "../../styles/home.scss"
import Container from "react-bootstrap/Container"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFirstdraft, faInstagram } from '@fortawesome/free-brands-svg-icons'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {

  }
  
  render() {
    return (
      <Container fluid={true} className="home-main">
        <p>
          Hello!
          My name is
        </p>
        <h1>
          <span className="name">Jason Chen.</span>
        </h1>
        <h1 className="sub-desc underline">I build software.</h1>
        <p className="description">
          I'm a software engineer in Los Angeles that builds web applications and
          experiments with data science.
        </p>

        <div className="contact01">
          <div className="divider"></div>
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
      </Container>
    )
  }
}

export default Home