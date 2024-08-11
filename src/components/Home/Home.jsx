import React from 'react'
import './Home.css'
import Pic from '../assests/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWhatsapp,faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
function Home() {
  return (
    <div className="home">
        <section className='left'>
            <span className='first'>Hello, I'm</span>
            <h1>Ezhil Elumalai</h1>
            <span className='third'>A <span className='creative'>Creative Designer</span> From <span className='pondy'>Puducherry</span></span>
            <span className='fourth'>I'm creative designer based in Puducherry, and I'm very passionate and dedicated to my work.</span>
            <div className="logos">
              <a href="https://wa.me/qr/MRK4MAWEHPFSM1"><FontAwesomeIcon className='icons' icon={faWhatsapp} /></a>
              <a href="https://github.com/ezhil-harish"><FontAwesomeIcon className='icons' icon={faGithub} /></a>
              <a href="https://linkedin.com/in/ezhil-harish-79b561223"><FontAwesomeIcon className='icons' icon={faLinkedin} /></a>
            </div>
        </section>
        <section className='right'>
            <img src={Pic} alt='Pic'/>
        </section>
    </div>
  )
}

export default Home