import React from 'react'
import './Design.css'
import dimg from '../assests/logo/website designi 0.png'

const Design = () => {
  return (
    <div className='design'>
        <section className='d-left'>
            <span>Design is Life</span>
            <h1>Design enhances life through innovation</h1>
            <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
        </section>
        <section className='d-right'>
            <img src={dimg} alt="" />
        </section>
    </div>
  )
}

export default Design