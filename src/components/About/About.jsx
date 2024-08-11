import React from 'react'
import '../About/About.css'
import Pic from '../assests/im doing a webs 1.png'
import {Link} from 'react-scroll'

function About() {
  return (
    <div className="about">
        <section className='left-about'>
          <img src={Pic} alt="Pic" />
        </section>
        <section className='right-about'>
          <span className='first-about'>I'm a Designer</span>
          <h1 className='about-h'>I Can Design Anything You Want</h1>
          <p>Hello there! I’m a web developer passionate about creating innovative, user-friendly websites and seeking exciting new opportunities to grow.</p>
          <button><Link activeClass='active' className='Link' to="contact" spy={true} smooth={true} offset={-50}><a href="" style={{color: "white"}}>Hire me</a></Link></button>
        </section>
    </div>
  )
}

export default About