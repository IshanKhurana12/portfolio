import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import Content from '../components/Content/Content'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Nav from '../components/Nav/Nav';
import { Link,RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  const router=createBrowserRouter([
    {path:'/',element:<Nav/>}
  ]);


  return (
    <>
    <Nav/>
   
   
    </>
  )
}

export default App
