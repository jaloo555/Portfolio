import React from 'react'

import Header from './header'
import Head from './head'
import Footer from './footer'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import "../styles/layout.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import {faFacebookF, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faFacebookF, faLinkedin, faGithub)

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offset: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }
  
  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };

  render() {
    return (
      <Container fluid={true} className="lgContainer" style={{backgroundPositionY: this.state.offset}} >
        <Head/>
        <Header />
        {/* <div id='stars1' style={{top: this.state.offset * 0.7}}></div> */}
        <div id='stars2' style={{bottom: this.state.offset * 0.5}}></div>
        <div id='stars3' style={{bottom: this.state.offset * 0.5}}></div>
        <Container fluid={true} className="content">
          {this.props.children}
        </Container>
        <Footer/>
      </Container>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout