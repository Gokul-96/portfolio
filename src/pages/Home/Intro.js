import React from 'react';
import Typewriter from 'typewriter-effect';
//import Resume from '../../assests/docs/Resume-Gokulakrishnan.pdf'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 '>
    <h1 className='text-white'>Good day, let me present myself, I am</h1>
    <h1 className='text-secondary text-7xl sm:text-3xl font-semibold'>Gokulakrishnan M</h1>
    <p className='text-white w-2/3'>
    <Typewriter
  options={{
    strings: ['Senior Application Engineer ', 'MERN Stack Developer', 'Front End Developer','Web Developer','Full Stack Developer','Self Motivator'],
    autoStart: true,
    loop: true,
  }}
/>

<p className='text-white w-2/3 mt-4 font-light text-base sm:text-lg'>Eager to Learn and Innovate!!!!</p>
    </p>
   <div className='flex gap-5'>

    <a className='flex-row border-2 border-tertiary text-tertiary px-5 py-3 rounded' href='https://drive.google.com/file/d/1LiLK4POG1s3TPyB9lRjgnntp9_fmGtaA/view?usp=sharing' target="_blank" rel="noopener noreferrer"> My Resume</a>
    </div>
</div>
  )
}

export default Intro