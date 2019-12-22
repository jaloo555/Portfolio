import React from 'react'

import Header from './header'
import Head from './head'
import Footer from './footer'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery{
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return (
    <Container fluid={true} >
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: data.site.siteMetadata.description
          }
        ]}
      />

      <Head/>
      <Header/>
      <Container fluid={true} className="content">
        {children}
      </Container>
      <Footer/>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout