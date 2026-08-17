import React from 'react'
import myPhoto from '../assets/my portphoto.jpeg'

function About() {
  return (
    <section
      className="bg-black text-white min-vh-100 d-flex align-items-center py-5"
      id="about"
    >
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-12 col-md-4 text-center">
            <img
              src={myPhoto}
              alt="My profile"
              className="img-fluid rounded"
              style={{
                maxWidth: '350px',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>

         
          <div className="col-12 col-md-8">
            <h1 className="fs-1 fw-bold mb-4">
              <span className="bg-warning text-dark px-2">
                About Me
              </span>
            </h1>

            <p className="fs-5">
              I'm a CS student, passionate Frontend Developer focused on
              building modern, responsive, and user-friendly web applications.
              I work with HTML, CSS, JavaScript, React, and Bootstrap, and I
              have basic knowledge of backend development with Django (Python).
              I enjoy turning ideas and designs into clean, functional
              websites while continuously learning new technologies and
              improving my skills.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About