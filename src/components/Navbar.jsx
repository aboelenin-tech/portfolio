import React from 'react'

function Navbar() {
  return (
    <section >
    <nav className="navbar navbar-expand-lg bg-dark fixed-top col-sm-12 " data-bs-theme="dark">
      <div className="container-fluid">
          

        <a className="navbar-brand " href="#home">
          MY
        </a>
        

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item ">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
      
    </nav>
    </section>
  )
}

export default Navbar