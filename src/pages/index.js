import React from "react"
import Layout from "../components/layout"
import Home from "../components/sections/home"
import About from "../components/sections/about"

import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <Home/>
    <About/>
  </Layout>
)

export default IndexPage
