import React from 'react'
import { Link } from 'gatsby'

import '../styles/contact-style.css'

const Contact = () => (
  <main className="contacts">
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
    <div className="contact-context">
      <p>
        You can contact me via <a href="mailto:somya.1723@gmailcom">email</a>
      </p>
      <p>You can also connect through:</p>
      <div className="contact-via">
        <div className="contact-inside">
          <a href="www.facebook.com">Facebook</a>
        </div>
        <div className="contact-inside">
          <a href="www.twitter.com">Twitter</a>
        </div>
        <div className="contact-inside">
          <a href="www.codepen.com">Codepen</a>
        </div>
        <div className="contact-inside">
          <a href="www.github.com">Github</a>
        </div>
      </div>
    </div>
  </main>
)

export default Contact
