import React from 'react'

import screenshot from '../assets/Screenshot 2026-08-17 022205.png'
import Datelhikma from '../assets/Datelhikma.png'
import tictoc from '../assets/tictoc.jpg'

function Projects() {
  return (
    <section className="bg-black text-white py-5">
      <div className="container-fluid">

        
        <h1 className="mb-5">
          <span className="bg-warning text-dark px-2">
            My Projects
          </span>
        </h1>

        
        <div className="row g-4">

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card bg-dark text-white h-100">

              <img
                src={screenshot}
                className="card-img-top"
                alt="La Maison Restaurant"
                style={{
                  height: '220px',
                  objectFit: 'cover'
                }}
              />

              <div className="card-body d-flex flex-column">

                <h5 className="card-title">
                  La Maison
                </h5>

                <p className="card-text">
                  A responsive restaurant website built using React and
                  Bootstrap. It features a modern user interface,
                  responsive design, and interactive components.
                </p>

                <div className="mt-auto">

                  <a
                    href="https://la-maison-restaurant-phi.vercel.app/"
                    className="btn btn-primary me-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>

                  <a
                    href="https://github.com/aboelenin-tech/la-maison-restaurant"
                    className="btn btn-outline-light"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </div>
          </div>

       
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card bg-dark text-white h-100">

              <img
                src={Datelhikma}
                className="card-img-top"
                alt="Dar El Hikma Library"
                style={{
                  height: '220px',
                  objectFit: 'cover'
                }}
              />

              <div className="card-body d-flex flex-column">

                <h5 className="card-title">
                  Dar El Hikma
                </h5>

                <p className="card-text">
                  A full-stack online library application built using
                  HTML, CSS, JavaScript, Django, and SQLite. It includes
                  user authentication, book browsing, borrowing
                  functionality, and database management.
                </p>

                <div className="mt-auto">

                  <a
                    href="https://daralhikma.pythonanywhere.com/"
                    className="btn btn-primary me-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>

                  <a
                    href="https://github.com/aboelenin-tech/Dar-Al-Hikma-"
                    className="btn btn-outline-light"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card bg-dark text-white h-100">

              <img
                src={tictoc}
                className="card-img-top"
                alt="Tic Tac Toe Castle"
                style={{
                  height: '220px',
                  objectFit: 'cover'
                }}
              />

              <div className="card-body d-flex flex-column">

                <h5 className="card-title">
                  Tic Tac Toe Castle
                </h5>

                <p className="card-text">
                  A desktop Tic-Tac-Toe game developed using C++ and Qt.
                  The project applies object-oriented programming concepts
                  including inheritance, polymorphism, encapsulation,
                  and abstraction.
                </p>

                <div className="mt-auto">

                  <a
                    href="https://flyingfox-x.itch.io/tictactoe-castle"
                    className="btn btn-primary me-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>

                  <a
                    href="https://github.com/Elsawy4381/Dar-Al-Hikma-"
                    className="btn btn-outline-light"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects