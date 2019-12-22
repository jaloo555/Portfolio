import React, { Component } from 'react'

import "../styles/header.css"
import { Navbar, Nav, Container } from 'react-bootstrap'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      scrollPos: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }
  handleScroll() {
    const { scrollPos } = this.state
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos
    })
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="sm" sticky="top" className={`nav-bar ${this.state.show ? "active": "hidden"}`}>
        <Navbar.Brand href="/"><span className="logo">JC</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-links ml-auto">
            <Nav.Link href="#about" className="links">About</Nav.Link>
            <Nav.Link href="#work" className="links">Work</Nav.Link>
            <Nav.Link href="#projects" className="links">Projects</Nav.Link>
            <Nav.Link href="#contact" className="links">Contact</Nav.Link>
            <Nav.Link href="#resume" className="underline">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header