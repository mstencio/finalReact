import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Work from './Work'

function App() {
  const info=[]

  return (
    <div className='App'>
      <div className='contenedor'>
        <div className='container-fluid'>
        <Header/>
        <div className='row'>
         
          <div className='col'>
          <About/>
          <Experience/>
          <Work/>
          </div>
          <div className='col-md-1'>
          <Sidebar a={<div class="sidebar">
                      <a href="https://github.com/mstencio" ><i class="bi bi-github"></i></a>
                      <a href="https://www.instagram.com/mauricio_tencio/"><i class="bi bi-instagram"></i></a>
                      <a href="https://twitter.com/"><i class="bi bi-twitter"></i></a>
                      <form action="mailto:andres.tencio@gmail.com" method="post" enctype="text/plain">
                        <input type="submit" value="andres.tencio@gmail.com"></input>
                      </form>
                    </div>} />
          </div>
          <Footer a={<div class="contact">
                <a href="https://github.com/mstencio" ><i class="bi bi-github"></i></a>
                <a href="https://www.instagram.com/mauricio_tencio/"><i class="bi bi-instagram"></i></a>
                <a href="https://twitter.com/"><i class="bi bi-twitter"></i></a>
                <form action="mailto:andres.tencio@gmail.com" method="post" enctype="text/plain">
            <input type="submit" value="andres.tencio@gmail.com"></input>
        </form>
              </div>}/>
        </div>
        
        </div>
       
       
        
      </div>
    </div>
  )
}

export default App
