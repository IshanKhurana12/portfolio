import React from 'react'
import style from './Sc.module.css'
import data from '/Users/ishankhurana/Desktop/portfolio/Data.json'
import {useState} from 'react';



const Sc = ({val}) => {
  
  const [name,setname]=useState(val);
  if(name!=val){
   setname(val)
  }

console.log(data);
    
const skill=data.find(entry => entry.val === val);

console.log(skill);


  return (
    <div id={style.maindiv}>
   
   <p id={style.para} > {skill.data}</p>

   <h2> Proficiency: {skill.proficiency}</h2>
   
   <h2>  {skill.star}</h2>
    </div>
  )
}

export default Sc
