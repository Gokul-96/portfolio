import React from 'react'
import Intro from './Intro';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Courses from './Courses';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './LeftSider';

function Home() {
  return (
    <div>
     
      <div  className='bg-primary px-40 sm:px-8'>
      <Intro/>
      
      </div>
      
    </div>
  )
}

export default Home