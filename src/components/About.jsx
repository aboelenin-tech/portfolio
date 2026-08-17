import React from 'react'
import myPhoto from '../assets/my portphoto.jpeg'

function About() {
  return (
    <section className="bg-black text-white min-vh-100 d-flex align-items-center" id="about">
         <div className="col-md-4 text-center">
            <img src={myPhoto} alt="My profile" className="img-fluid rounded"
              style={{ width: '350px', height: '380px', objectFit: 'cover' }}
            />
          </div>

      <div className="container">
        <div className="row align-items-center">

          
          <div className="col-md-8">
            <h1 className="fs-1 fw-bold mb-4">
           <span className='bg-warning'> About Me </span>  
            </h1>

            <p>I'm a Cs student ,passionate Frontend Developer focused on building
              modern, responsive, and user-friendly web applications.
              I work with HTML, CSS, JavaScript, React, and Bootstrap,
              and I have basic knowledge of backend development with Django(python). I enjoy
              turning ideas and designs into clean, functional websites
              while continuously learning new technologies and improving
              my skills.
              
            </p>
            
          </div>

          
       
        </div>
      </div>
      
    </section>
    
  )
}

export default About