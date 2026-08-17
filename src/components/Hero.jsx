import React from 'react'

function Hero() {
  return (
    <section className="bg-black text-white position-relative" style={{ height: "100vh" }} >
    <div className="position-absolute top-50 start-0 translate-middle-y px-3 py-5 col-sm-9 col-md-5">
      <h1 className="fs-1 fw-bold">
        Frontend that <span className="text-warning">ships</span> fast
      </h1>
  
      <p className="fs-5 text-white-50 mt-3">
        Mohamed Yasser -- frontend Developer obsesses over performance,
        accessibility, and user experience. He crafts responsive,
        high-quality web applications using HTML, CSS, JavaScript, React,
        and Bootstrap. With a focus on clean code and continuous learning,
        he delivers seamless digital experiences that delight users.
      </p>
    </div>
  
    <div className="position-absolute bottom-0 start-50 translate-middle-x px-3 py-5 d-flex justify-content-center">
      <a href="#projects" className="btn btn-primary">
        View My Projects
      </a>
  
      <a href="https://drive.google.com/file/d/1vjKhcLIApYq_aP24lBcQ9KRPlPeBgtL9/view?usp=sharing"
        className="btn btn-warning ms-3" >
        Download CV
      </a>
    </div>
  
    <hr className="position-absolute bottom-0 start-0 w-100" />
  </section>
  )
}

export default Hero