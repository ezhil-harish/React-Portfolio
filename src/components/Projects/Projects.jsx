import React from 'react'
import './Projects.css'
import Data from './Data'

const Projects = () => {
  return (
    <div className='projects'>
        <span>From My Blog</span>
        <h1>Our Recent Projects</h1>
        <div className="pro-main">
        {Data.map((val)=>(
            <div className='p-box'>
                <img src={val.img} alt="" />
                <h3>{val.title}</h3>
                <a href={val.href}>{val.btn}</a>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Projects