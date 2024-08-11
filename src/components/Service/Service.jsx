import React from 'react'
import './Service.css'
import simage from '../assests/logo/uiux.png'
import web from '../assests/logo/coding.png'

const Service = () => {
  return (
    <div className='service'>
        <span className='service-span-one'>Service</span>
        <h1>What I Do for Clients</h1>
        <span className='main-service'>Most common methods for designing websites that work well on desktop is responsive and adaptive design</span>
        <div className="service-box">
            <div className="box">
              <section className='s-img'>
                <img src={simage} alt="simage" />
              </section>
              <section className='s-content'>
                <span>Ui/Ux Design</span>
                <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
              </section>
            </div>
            <div className="box">
              <section className='s-img'>
                <img src={web} alt="simage" />
              </section>
              <section className='s-content'>
                <span>Ui/Ux Design</span>
                <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
              </section>
            </div>
        </div>
    </div>
  )
}

export default Service