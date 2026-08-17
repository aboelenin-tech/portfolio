import React from 'react'

function Contact() {
  return (
    <section
      id="contact"
      className="bg-dark text-white py-5"
    >
      <div className="container">

        <h1 className="mb-5">
          <span className="bg-warning text-dark px-2">
            Contact Me
          </span>
        </h1>

        <div className="row g-4">

          
          <div className="col-12 col-md-5">

            <p className="fs-5 text-white-50">
              <i className="bi bi-envelope me-2"></i>
              E-mail:
              <br />

              <a
                href="mailto:mohamed.tech.yasser.2006@gmail.com?subject=Contact%20from%20Portfolio"
                className="d-inline-block mt-2 text-break"
              >
                mohamed.tech.yasser.2006@gmail.com
              </a>
            </p>

            <p className="fs-5 text-white-50">
              <i className="bi bi-linkedin me-2"></i>
              LinkedIn:
              <br />

              <a
                href="https://www.linkedin.com/in/mohamed-yasser-tech/"
                className="d-inline-block mt-2"
                target="_blank"
                rel="noreferrer"
              >
                Mohamed Yasser
              </a>
            </p>

            <p className="fs-5 text-white-50">
              <i className="bi bi-github me-2"></i>
              GitHub:
              <br />

              <a
                href="https://github.com/aboelenin-tech"
                className="d-inline-block mt-2"
                target="_blank"
                rel="noreferrer"
              >
                aboelenin-tech
              </a>
            </p>

          </div>

          <div className="col-12 col-md-7">

            <form
              action="mailto:mohamed.tech.yasser.2006@gmail.com"
              method="POST"
              encType="text/plain"
              className="border border-warning p-3 rounded"
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
                  rows="5"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-warning"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact