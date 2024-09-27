import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-0 bottom-40 px-10 sm:static'>
        <div className='flex flex-col items-center'>
            <div className='flex flex-col gap-3 sm:flex-row'>
            <a href="https://www.linkedin.com/in/gokulakrishnan-m96/" target="_blank">{" "} <i class="ri-linkedin-fill text-gray-400 text-xl">  </i></a>

        
             
            <a href="https://github.com/Gokul-96" target="_blank"><i class="ri-github-fill text-gray-400 text-xl">
       
       </i></a>
        

            </div>
       
            <div className='w-[1px] h-32 bg-[#912727] sm:hidden'></div>
      
        </div>
        
    </div>
  )
}

export default LeftSider