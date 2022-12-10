import React from 'react'
import './Footer.css'


function Footer(props) {
  return (
    <div id='contacto' className='footer text-center'>
       
        <a href="">{props.a}</a>
        <p>Designed & Buil by Andres Tencio <br />2022</p>

    </div>
  )
}

export default Footer