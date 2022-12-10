import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Sidebar from './Sidebar'
import Footer from './Footer'

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
          </div>
          <div className='col-md-1'>
          <Sidebar a={<div class="sidebar">
                      <a href="#" ><i class="bi bi-github"></i></a>
                      <a href="#"><i class="bi bi-instagram"></i></a>
                      <a href="#"><i class="bi bi-twitter"></i></a>
                      <form action="mailto:andres.tencio@gmail.com" method="post" enctype="text/plain">
                        <input type="submit" value="andres.tencio@gmail.com"></input>
                      </form>
                    </div>} />
          </div>
          <Footer a={<div class="contact">
                <a href="#" ><i class="bi bi-github"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-twitter"></i></a>
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
