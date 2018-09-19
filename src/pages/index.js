import React from 'react'
import { Link } from 'gatsby'
import "../styles/style.css"

import Layout from '../components/layout'

const IndexPage = () => (
  <div className = "main">
    <nav className = "nav-bar">
      <ul className = "nav-link">
        <li><a href="#">Home</a></li>
        <li><a href = "#">About</a></li>
        <li><a href = "#">Projects</a></li>
        <li><a href = "#">Resume</a></li>
        <li><a href = "#">Contact</a></li>
      </ul>
    </nav>
    <div className = "intro">
      <h1>Hello World</h1>
      <p>I am Somya.</p>
      <p>I create awesome web sites and web applications.</p>
    </div>
  </div>
)

export default IndexPage
