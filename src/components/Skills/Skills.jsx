import './Skills.css'
import SkillData from './SkillData'
import Buttons from './Buttons'
import { useState } from 'react'

function Skills() {
  const allcat=['All', ...new Set(SkillData.map(SkillData=>SkillData.category))];
  const [buttones,setbtn]=useState(allcat);
  const [MenuItem,SetMenu]=useState(SkillData);
  const filter=(button)=>{
    if(button==='All'){
      SetMenu(SkillData);
      return;
    }
    const filterBtn=SkillData.filter(SkillData=>SkillData.category===button);
    SetMenu(filterBtn);
  }
  return (
    <div className='skill'>
        <span>Skills</span>
        <div className="s-main">
          <div className="s-btn1">
            <Buttons button={buttones} filter={filter}/>
          </div>
          <div className="s-skill">
          {MenuItem.map((SkillData)=>{
            return <div className='s-box'>
                <img src={SkillData.img} alt="" />
                </div>
        })}
          </div>
            
        </div>
    </div>
  )
}

export default Skills