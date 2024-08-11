import React from 'react'
import './Buttons.css'

function Buttons({button,filter}){
    return(
        <div className='s-btnmain'>
            {
                button.map((cat,i)=>{
                    return <button className='s-btn' onClick={()=>filter(cat)}>{cat}</button>
                })
            }
        </div>
    )
}

export default Buttons