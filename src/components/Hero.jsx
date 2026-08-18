import React from 'react'

function Hero() {
  return (
    <section
      id="home"
      className="bg-black text-white min-vh-100 d-flex align-items-center position-relative overflow-hidden"
    >

    
      <h1 className="hero-bg-text position-absolute fw-bold text-white">
          MY
                </h1>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">

          <div className="col-12 col-md-8 col-lg-7">

            <h1 className="display-4 fw-bold">
              Frontend that <span className="text-warning">ships</span> fast
            </h1>

            <p className="fs-5 text-white-50 mt-3">
              Mohamed Yasser -- frontend Developer obsessed with performance,
              accessibility, and user experience. He crafts responsive,
              high-quality web applications using HTML, CSS, JavaScript,
              React, and Bootstrap. With a focus on clean code and continuous
              learning, he delivers seamless digital experiences that delight
              users.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 mt-4">

              <a href="#projects" className="btn btn-primary">
                View My Projects
              </a>

              <a
                href="https://drive.google.com/file/d/1vjKhcLIApYq_aP24lBcQ9KRPlPeBgtL9/view?usp=sharing"
                className="btn btn-warning"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>

            </div>

          </div>

        </div>
      </div>
     

    </section>
  )
}

export default Hero