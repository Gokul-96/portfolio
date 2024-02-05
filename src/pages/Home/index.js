import React from 'react'
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Experiences from './Experiences';
import Courses from './Courses';
import LeftSider from './LeftSider';
import Footer from './Footer';
import Contact from './Contact';


function Home() {
  return (
    <div>
     
      <div  className='bg-primary px-40 sm:px-8'>
      <Intro/>
      <About/>
      <Projects/>
      <Experiences/>
      <Courses/>
      <Contact/>
      <Footer/>
      <LeftSider/>
     
      
      
      </div>
      
    </div>
  )
}

export default Home