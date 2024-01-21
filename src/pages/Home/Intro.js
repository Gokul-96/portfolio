import React from 'react';
import Typewriter from 'typewriter-effect';
//import Resume from '../../assests/docs/Resume-Gokulakrishnan.pdf'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 '>
    <h1 className='text-white'>Hi, I am</h1>
    <h1 className='text-secondary text-7xl sm:text-3xl font-semibold'>Gokulakrishnan M</h1>
    <p className='text-white w-2/3'>
    <Typewriter
  options={{
    strings: ['Senior Application Engineer ', 'MERN Stack Developer'],
    autoStart: true,
    loop: true,
  }}
/>
    </p>
   <div className='flex gap-5'>

    <a className='flex-row border-2 border-tertiary text-tertiary px-5 py-3 rounded' href='https://drive.google.com/file/d/1LiLK4POG1s3TPyB9lRjgnntp9_fmGtaA/view?usp=sharing' > My Resume</a>
    </div>
</div>
  )
}

export default Intro