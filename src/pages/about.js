import React from 'react'
import { Link } from 'gatsby'

import '../styles/about-style.css'

const About = () => (
  <main className="context">
    <div className="main-content">
      <nav className="nav-bar">
        <div className="nav-link">
          <p className="inside-nav">
            <a href="#">Home</a>
          </p>
          <p className="inside-nav">
            <Link to="/about/">About</Link>
          </p>
          <p className="inside-nav">
            <Link to="/projects/">Projects</Link>
          </p>
          <p className="inside-nav">
            <Link to="/contact/">Contact</Link>
          </p>
        </div>
      </nav>
      <h1 className="heading">About Me</h1>
      <p className="para">
        I am Somya and I am web developer. The main accepts of my work are HTML,
        CSS and JavaScript.
      </p>
      <p className="para">
        I am a self taught web developer and surely it took time but was totaly
        worth it.
      </p>
      <p className="para">
        I love learning and working with new things. Self teaching has been hard
        but I would say that it is not impossible.
      </p>
      <p className="para">
        I am on the way of learning React.js and will accopmplish that in
        meanwhile.
      </p>
    </div>

    <div className="resume">
      <h1>/* Resume */</h1>
    </div>
  </main>
)

export default About
