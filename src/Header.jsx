import React from 'react'
import document from './Docs/resume.pdf'
import './Header.css'


function Header() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

  return (
    <div>
        <nav id='navbar' className="navbar navbar-expand-md navbar-light  fixed-top ">
            <div className="container-fluid ">
             
              <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div  className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item">
                    <a className="nav-link active" href="#about"><h6>About</h6></a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" href="#experience"><h6>Experience</h6></a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" href="#work"><h6>Work</h6></a>
                  </li>

                  <li id='contact' className="nav-item">
                    <a className="nav-link active" href="#contacto"><h6>Contact</h6></a>
                  </li>

                 
                  <button id='boton' onClick={() => openInNewTab(document)}>
                   Resume
                  </button>
                </ul>
               
              </div>
            </div>
          </nav>
         

    </div>
  )
}

export default Header