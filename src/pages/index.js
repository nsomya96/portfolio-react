import React from 'react'
import { Link } from 'gatsby'

import "../styles/style.css"

import Layout from '../components/layout'

const IndexPage = () => (
  <div className = "main">
    <nav className = "nav-bar">
      <div className = "nav-link">
        <p className = "inside-nav"><a href="#">Home</a></p>
        <p className = "inside-nav"><Link to="/about/">About</Link></p>
        <p className = "inside-nav"><Link to = "/projects/">Projects</Link></p>
        <p className = "inside-nav"><Link to = "/contact">Contact</Link></p>
      </div>
    </nav>
    <div className = "intro">
      <h1>Hello World</h1>
      <p>I am Somya.</p>
      <p>I create awesome web sites and web applications.</p>
    </div>
  </div>
)

export default IndexPage
