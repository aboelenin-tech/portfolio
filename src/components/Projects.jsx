import React from 'react'
import screenshot from '../assets/Screenshot 2026-08-17 022205.png'
import Datelhikma from'../assets/Datelhikma.png'
import tictoc from '../assets/tictoc.jpg'
function Projects() {
  return (
    <div
      className="bg-black text-white container-fluid py-5"
      style={{ minHeight: "100vh" }}
    >
      <h1 className="mb-5">
        <span className="bg-warning text-dark px-2">
          My Projects
        </span>
      </h1>

      <div className="row g-4">

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100">
            <img
              src={screenshot}
              className="card-img-top"
              alt="La Maison Project"
            />

            <div className="card-body text-light bg-dark ">
              <h5 className="card-title">La Maison</h5>

              <p className="card-text">
                This is a restaurant website built using React and Bootstrap.
                It features a responsive design, interactive components, and
                a modern user interface.
              </p>

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
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100">
            <img
              src={Datelhikma}
              className="card-img-top"
              alt="Project"
            />

            <div className="card-body text-light bg-dark">
              <h5 className="card-title ">Dar elhikma</h5>

              <p className="card-text">
              Developed a full-stack online library application using HTML, CSS, JavaScript, Django, and SQLite.

Implemented user authentication, book browsing, borrowing functionality, and responsive database
management.
Designed responsive user interfaces and integrated backend services with a relational database. components.
              </p>

             
              <a href="https://daralhikma.pythonanywhere.com/" className="btn btn-primary me-2">
                View Project
              </a>

              <a href="https://github.com/aboelenin-tech/Dar-Al-Hikma-" className="btn btn-dark">
                GitHub
              </a>
            </div>
          </div>
        </div>

        
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100">
            <img
              src={tictoc}
              className="card-img-top"
              alt="Project"
            />

            <div className="card-body text-light bg-dark">
              <h5 className="card-title">TIC TAC TOE castle</h5>

              <p className="card-text">
              Developed a desktop application featuring multiple Tic-Tac-Toe game modes using C++ and Qt.
Applied object-oriented programming concepts including inheritance, polymorphism, encapsulation, and
abstraction while building an interactive graphical user interface.
              </p>

              <a href="https://flyingfox-x.itch.io/tictactoe-castle" className="btn btn-primary me-2">
                View Project
              </a>

              <a href="https://github.com/Elsawy4381/Dar-Al-Hikma-" className="btn btn-dark">
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
      <hr className="position-absolute bottom-0 start-0 w-100" />
    </div>
  )
}

export default Projects