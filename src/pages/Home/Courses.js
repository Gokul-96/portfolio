import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { courses } from '../../resources/courses';


function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title="Course Certificates" />
      <div className='flex py-10 gap-20 sm:flex-col'>
        <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
          {courses.map((course, index) => (
            <div key={course.id}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className='cursor-pointer'
            >
              <h1 className={`text-xl px-5 ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31]" : "text-white"}`}>{course.title}</h1>
            </div>
          ))}
        </div>


        <div className='flex items-center justify-center gap-10 sm:flex-col'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-secondary text-xl'>Completion Date:{courses[selectedItemIndex].completion_date}</h1>
           
            
          </div>
          <img src={courses[selectedItemIndex].image} alt='Certificates'  />
        </div>
      </div>
    </div>
  );
}

export default Courses;