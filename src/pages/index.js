import React from "react"
import Layout from "../components/layout"
import Home from "../components/sections/home"
import About from "../components/sections/about"
import Projects from "../components/sections/projects"
import "../styles/index.scss"
import {Zoom, Fade} from 'react-reveal'
import Skills from "../components/sections/skills"
import { graphql } from "gatsby"
import Head from "../components/head"

const IndexPage = ({ data }) => (
  <>
    <Head/>
    <Layout>
      <Fade>
        <Home />
      </Fade>
      <Zoom>
        <About />
      </Zoom>
      <Fade>
        <Skills/>
      </Fade>
      <Zoom>
        <Projects/>
      </Zoom>
    </Layout>
  </>
)

export const query = graphql`
  query HeadQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
