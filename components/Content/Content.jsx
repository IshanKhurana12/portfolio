import React from 'react'
import style from './Content.module.css'
import { forwardRef } from 'react'


const Content = (props,ref) => {

 
  



  return (
    <div id={style.content} ref={ref}>
      <h1 id={style.heading}>About<span style={{color:'orange'}}> Me</span></h1>
      <h2 id={style.head2}>A Little Bit Of Everything!</h2> 



      <div id={style.textcontainer} >
      <div id={style.container} className='animate__animated animate__lightSpeedInRight' > 
        <h1>Igniting digital wonders with creativity and code</h1>
      </div>
      <div id={style.container}><h1>Crafting captivating web experiences for a brighter online world. </h1></div>
      <div id={style.container}><h1>Let's bring your ideas to life.</h1></div>
      <div id={style.container}><h1>Welcome to my web development world.</h1></div>
      </div>


      <div id={style.quote}>
        <h1 id={style.asli}>"Design is thinking made visual."</h1>
      </div>


    </div>
    
  )
}

export default forwardRef(Content);
