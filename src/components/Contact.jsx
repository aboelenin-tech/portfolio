import React from 'react'

function Contact() {
  return (
    <section
       
      className="bg-dark text-white container-fluid py-5"
      style={{ minHeight: "75vh" }}>
      <h1 className="mb-5">
        <span className="bg-warning text-dark px-2">
          Contact Me
        </span>
      </h1>
      <div className='row'>
        <div className='col-md-5 mb-4'> 
        <p className='fs-5 text-white-50 mt-3'>
      <i className="bi bi-envelope"></i> E-mail:
      <a
  href="mailto:mohamed.tech.yasser.2006@gmail.com?subject=Contact%20from%20Portfolio" className="ms-2">
  mohamed.tech.yasser.2006@gmail.com </a>
  </p>
  <p className='fs-5 text-white-50 mt-3'>

  <i className="bi bi-linkedin"></i> Linkedin:
      <a
  href="https://www.linkedin.com/in/mohamed-yasser-tech/" className="ms-2">
  Mohamed yasser</a>
    
  </p>
  <p className='fs-5 text-white-50 mt-3'>
  <i className="bi bi-github"></i> Github:
      <a href='https://github.com/aboelenin-tech' className="ms-2">
      aboelenin-tech</a>
  </p>
  </div>
  <form
  action="mailto:mohamed.tech.yasser.2006@gmail.com"
  method="POST"
  encType="text/plain"
  className='border border border-warning p-3 rounded col-md-7'
>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">
      Email address
    </label>

    <input
      type="email"
      className="form-control"
      id="email"
      name="email"
      placeholder="name@example.com"
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="message" className="form-label">
      Message
    </label>

    <textarea
      className="form-control"
      id="message"
      name="message"
      rows="4"
      placeholder="Write your message..."
      required
    ></textarea>
  </div>

  <button type="submit" className="btn btn-warning">
    Send Message
  </button>
</form>
      </div>
    
    </section>
  )
}

export default Contact