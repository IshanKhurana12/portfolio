import React, { forwardRef } from 'react'
import style from './Nav.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import Content from '../Content/Content'
import Header from '../Header/Header'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'
import { ForwardedRef } from 'react'
const Nav = (props,ref) => {

  const aboutRef=useRef(null);
  const skillRef=useRef(null);
  const contactRef=useRef(null);
  const projectRef=useRef(null);
  const handleClick=()=>{
    aboutRef.current?.scrollIntoView({behavior:'smooth'});
  }
  const handleskill=()=>{
    skillRef.current?.scrollIntoView({behavior:'smooth'});
  }
  
  const handlecontact=()=>{
    contactRef.current?.scrollIntoView({behavior:'smooth'});
  }

  const handleprojects=()=>{
    projectRef.current?.scrollIntoView({behavior:'smooth'});
  }
  
  return (
    <>
    <div id={style.maindiv} ref={ref}>

        <h1 id={style.head}>Portfo<span style={{color:'orange'}}>lio.</span></h1>
        <div id={style.listcontainer}>

        <ul id={style.list}>
         
            <li onClick={handleClick}>About</li>
            <li onClick={handleskill}>Skills</li>
            <li onClick={handleprojects}>Projects</li>
            <li onClick={handlecontact}>Contact</li>
            <li><a href="https://github.com/IshanKhurana12">Github</a></li>
        </ul>

        </div>

 

    </div>
    <Header />
    <Content ref={aboutRef} />
    <Skills ref={skillRef}/>
    <Projects ref={projectRef}/>
    <Footer ref={contactRef} />
    </>

  )
}

export default forwardRef(Nav);
