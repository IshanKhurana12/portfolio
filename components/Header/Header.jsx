import React from 'react'
import style from './Header.module.css'
import image from '/Users/ishankhurana/Desktop/portfolio/components/Assets/background.png'
import Typed from 'typed.js';
import { useEffect,useRef } from 'react';
import Nav from '../Nav/Nav';
import { forwardRef } from 'react';

const Header = (props,top) => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["UI/UX Designer ", "Developer ","Web Developer. "], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
   
  return (
    <>
   

    <div id={style.header} ref={top} >
    <div id={style.nameContainer} className='animate__animated animate__bounce'>
        <h1 id={style.Text}>Hi, My name is <span className={style.orange}>Ishan</span> and I am a passionate</h1>

        <div id={style.web} className='animate__animated animate__tada'>
          <br />
           <h1 id={style.change} className={style.orange}><span ref={el}>Web Developer</span></h1> 
            </div>

</div>
      <div id={style.imageContainer}>
        <img src={image} id={style.image} alt='logo'></img>
      </div>

    



    </div>

   



    </>
  )
}

export default forwardRef(Header);
/*






*/