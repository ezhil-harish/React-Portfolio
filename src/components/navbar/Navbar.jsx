import './Navbar.css'
import {Link} from 'react-scroll'
import menu from '../assests/logo/menu.png'
import exit from '../assests/logo/exit.png'
import { useState } from 'react'
import resume from './main.PDF'
const Navbar = () => {  
  const [select, setselect]=useState(false);

  return (
    <div className='navbar'>
      <div className="main">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <div className={select?"linkactive":"links"}>
          <ul className='menu'>
            <img src={exit} alt="" className='exit' />
            <Link activeClass='active' className='Link' to="home" spy={true} smooth={true} offset={-60}>Home</Link>
            <Link activeClass='active' className='Link' to="about" spy={true} smooth={true} offset={-60}>About</Link>
            <Link activeClass='active' className='Link' to="service" spy={true} smooth={true} offset={-50}>Service</Link>
            <Link activeClass='active' className='Link' to="skill" spy={true} smooth={true} offset={-50}>Skills</Link>
            <Link activeClass='active' className='Link' to="projects" spy={true} smooth={true} offset={-60}>Projects</Link>
            <Link activeClass='active' className='Link' to="contact" spy={true} smooth={true} offset={-50}>Contact</Link>
          </ul>
          <div className="navbtn">
            <ul><p><a href={resume} download="Resume">Download Resume</a></p></ul>
          </div>
        </div>
        <div className="menu-btn">
            <button><img src={menu} alt="" onClick={()=>{
              setselect(!select)
            }}/></button>
          </div>
      </div>
    </div>
  )
}

export default Navbar