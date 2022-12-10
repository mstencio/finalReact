import React from 'react'
import './Work.css'

function Work() {
  return (
    <div id='work'>
        <h2>Work</h2>
      <div className='row text-center'>
        <div className='col-md'>
          <div class="card">
            <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOHpmvZVchQQCPosH1bS-dFOiCQUe9emdyA&usqp=CAU" alt="Card image cap"></img>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque officiis optio, cumque illum eveniet enim debitis repudiandae corrupti. Repudiandae?</p>
          </div>
         </div>
        </div>
        <div className='col-md'>
          <div class="card">
            <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Zp9JyJZOdl-aIR2U77zoFx1wit7EfBKraA&usqp=CAU"alt="Card image cap"></img>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque officiis optio, cumque illum eveniet enim debitis repudiandae corrupti. Repudiandae?</p>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Work