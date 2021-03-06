import React from 'react'
import { Link } from 'gatsby'

import '../styles/project-style.css'

const Projects = () => (
  <main className="projects">
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
    <div className="project-context">
      <h1>Project Name</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint tempora
        rerum dolorum doloremque libero architecto? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quae voluptatibus neque omnis veritatis
        totam!
      </p>
      <h1>project 2</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        necessitatibus perferendis voluptatum provident consequuntur obcaecati
        eligendi praesentium quibusdam fugit sed? Suscipit aperiam ad in
        molestiae fuga odio ipsam nobis voluptas?
      </p>
    </div>
  </main>
)

export default Projects
