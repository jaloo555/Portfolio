import React from 'react'

import Header from './header'
import Footer from './footer'
import containerStyles from "./container.module.css"

const Layout = (props) => {
  return (
    <div className={containerStyles.container}>
      <div className={containerStyles.content}>
      <Header/>
        {props.children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout