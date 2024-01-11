import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { projects } from '../../resources/projects';
import { Link } from 'react-router-dom';

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className='flex py-10 gap-20 sm:flex-col bg-primary'>
        <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
          {projects.map((project, index) => (
            <Link
              to={project.link_front_end}
              key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className='cursor-pointer'
            >
              <h1 className={`text-xl px-5 ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31]" : "text-white"}`}>{project.title}</h1>
            </Link>
          ))}
        </div>
        {/* <div className='flex items-center gap-10'>
          <img src={projects[selectedItemIndex].image} alt='' className='h-60 w-72' /> */}
          <div className='flex flex-col gap-5'>
            <h1 className='text-secondary text-xl'>{projects[selectedItemIndex].title}</h1>
            <p className='text-white'>Skills: {projects[selectedItemIndex].skills.join(', ')}</p>
            <p className='text-white'>{projects[selectedItemIndex].details}</p>
            {projects[selectedItemIndex].GitHub_frontend && (
              <p className='text-white'>
                GitHub Frontend: <a href={projects[selectedItemIndex].GitHub_frontend} target='_blank' rel='noopener noreferrer'>{projects[selectedItemIndex].GitHub_frontend}</a>
              </p>
            )}
            {projects[selectedItemIndex].GitHub_backend && (
              <p className='text-white'>
                GitHub Backend: <a href={projects[selectedItemIndex].GitHub_backend} target='_blank' rel='noopener noreferrer'>{projects[selectedItemIndex].GitHub_backend}</a>
              </p>
            )}
            {projects[selectedItemIndex].Hosted_frontend && (
              <p className='text-white'>
                Hosted Frontend: <a href={projects[selectedItemIndex].Hosted_frontend} target='_blank' rel='noopener noreferrer'>{projects[selectedItemIndex].Hosted_frontend}</a>
              </p>
            )}
            {projects[selectedItemIndex].Hosted_backend && (
              <p className='text-white'>
                Hosted Backend: <a href={projects[selectedItemIndex].Hosted_backend} target='_blank' rel='noopener noreferrer'>{projects[selectedItemIndex].Hosted_backend}</a>
              </p>
            )}
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Projects;