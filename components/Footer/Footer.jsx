import React from 'react'
import style from './Footer.module.css'
import { forwardRef } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'

const Footer = (props,ref) => {

  
  function handleClick(){
    
  window.scrollTo(0,0);
  }


  
  return (
    <div className={style.container} ref={ref}>
      
      <div className={style.boxes}>
        <div className={style.box}>
          <h1>Have an Idea.</h1>

          <div>
           <h2>Let's turn it into Reality.</h2> 
           <p>Unlock the full potential of your online presence with visually impressive and dynamic websites!</p>
           <a href=""><img id={style.image} src="https://cdn-icons-png.flaticon.com/128/888/888853.png" alt="gmail" />Ishankhurana176@gmail.com</a>
            </div>
        </div>
        <div className={style.box}>
          <h1>Social</h1>
          <div id={style.boxcontent}>
          <a  href="https://www.instagram.com/ishan_khurana12/"><img id={style.image} src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="instagram" /></a>
         <a  href="https://www.youtube.com/channel/UCFCiT71MNkgkofGCQRctVsA"><img id={style.image} src="https://cdn-icons-png.flaticon.com/128/1383/1383260.png" alt="youtube" /></a> 
         <a href="https://www.facebook.com/profile.php?id=100013876809533"> <img id={style.image} src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="facebook" /></a>
          <a href="https://www.linkedin.com/in/ishan-khurana-24b133203/"><img id={style.image} src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="linkedIn" /></a>
          
         
          </div>
       
        </div>
      </div>

<img id={style.back} src="https://cdn-icons-png.flaticon.com/128/17/17507.png" alt="top" onClick={handleClick}></img>


    </div>

  )

}

export default forwardRef(Footer)
