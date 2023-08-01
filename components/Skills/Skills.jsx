import React from 'react'
import style from './Skills.module.css'
import react from '/Users/ishankhurana/Desktop/portfolio/components/Assets/react.png'
import javascript from '/Users/ishankhurana/Desktop/portfolio/components/Assets/javascript.png'
import nodejs from '/Users/ishankhurana/Desktop/portfolio/components/Assets/nodejs.png'
import mongodb  from '/Users/ishankhurana/Desktop/portfolio/components/Assets/mongo-db.png'
import github from '/Users/ishankhurana/Desktop/portfolio/components/Assets/github.png'
import { forwardRef } from 'react'
import { useState } from 'react'
import Sc from '../Sc/Sc'

const Skills = (props,ref) => {
   
  const [val,setval]=useState("React");

  const handleClick=(argument)=>{
        setval(argument);
       console.log(val);
        
  }



  return (
    <div id={style.skills} ref={ref}>
   
   
    

<ul>
    <div> <li> <img src={react} alt="React" onClick={()=>handleClick("React")} /></li></div>
    <div><li> <img src={javascript} alt="javascript" onClick={()=>handleClick("Javascript")} /></li></div>
    <div>  <li> <img src={nodejs} alt="nodejs" onClick={()=>handleClick("Node.js")} /></li></div>
    <div>  <li> <img src={mongodb} alt="mongodb" onClick={()=>handleClick("MongoDB")} /></li></div>
    <div><li><img src={github} alt="github" onClick={()=>handleClick("Github")} /></li></div>
</ul>

<div> 
<h1 style={{color:'orange'}}>{val}</h1>
<Sc val={val}/> 
</div>   

<div id={style.skild}>
     <h1 id={style.skil}>SKILLS</h1>
     <p style={{color:'orange'}}>Click on the Icons to know more...</p>
    </div>

    </div>
  )
}

export default forwardRef(Skills);
