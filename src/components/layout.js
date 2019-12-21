import React from 'react'

import Header from './header'
import Footer from './footer'
import containerStyles from "./container.module.css"
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql `
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
    <div className={containerStyles.container}>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: data.site.siteMetadata.description
          }
        ]}
      />
      <div className={containerStyles.content}>
        <Header/>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout