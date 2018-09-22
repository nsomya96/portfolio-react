import React from 'react'
import { Link } from 'gatsby'

import '..//styles/contact-style.css'

const Contact = () => (
  <main className="contacts">

    <div className="contact-context">
      <p>
        You can contact me via <a href="mailto:somya.1723@gmailcom">email</a>
      </p>
      <p>You can also connect through:</p>
      <div className="contact-via">
        <div class="wrapper-3">
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
    </div>
    
  </main>
)

export default Contact
