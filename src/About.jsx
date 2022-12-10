import React from 'react'
import './About.css'
import assets from './assets/img.jpg'
function About() {
  return (
    <div id='about'>
        <h1 className='text-center'>Andrés Tencio.</h1> 
        <p className='text-center'>I`m a software developer Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nihil ipsum ea quis provident omnis eius quo  adipisci harum quam nesciunt, <br /> eum nam non sit  facilis quas  deserunt asperiores vero rerum?</p>
       
        <div id='row' className='row'>
          <div className='col-md'>
            <h4>About Me</h4>
            <p>Hello! My name is Andrés and I enjoy creating things that live
              <br /> on the internet. My interest in web development started back in 2020 <br /> 
              when I decided to try  Lorem ipsum dolor sit amet consectetur <br /> 
              adipisicing elit. Sunt, porro.
            </p>
          </div>
          <div className='col-md'>
            <img src={assets} class="" alt="..."></img>
          </div>
        </div>

          
          


         
       
    </div>
  )
}

export default About