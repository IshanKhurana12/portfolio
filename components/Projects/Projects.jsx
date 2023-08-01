import React from 'react'
import style from './Projects.module.css'
import { forwardRef } from 'react'
import data from './projectdata.json';
import { useState } from 'react';
import Info from '../Info/Info';

const Projects = (props,ref) => {
  console.log(data); 
  
  const [name,setname]=useState('');
 
  
  return (
    <>
    <div class={style.container} ref={ref}>
        <h1>Projects</h1>
        <div class={style.boxes}>
          <br />
    {
      data.map((items,index)=>(
      
    
          <div class={style.box}>
            <p class={style.icon}>ik</p>
            <h2>{items.name}</h2>
            <p class={style.piececount}><a className={style.piececount} href={items.Github}>Github Link...</a> </p>
           {items.data}
           <br />
           <br />
           <a href={items.link} className={style.piececount}>ViewSite...</a>
           <br />
           <br />
           <p className={style.piececount}>TechStack- </p>
          <p className={style.piececount}>{items.stackused}</p> 
          <br />
        
          </div>
       
        
      ))
    }
      </div>
     </div>
   
   </>
  )
}

export default  forwardRef(Projects)


/*


      */