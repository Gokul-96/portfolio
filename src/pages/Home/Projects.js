import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { projects } from '../../resources/projects';
import { Link } from 'react-router-dom';
import '../../index';

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className='flex py-10 gap-20 sm:flex-col bg-primary'>
        {/* Left Side */}
        <div className='flex flex-col gap-10 w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
          {projects.map((project, index) => (
            <Link
              to={project.link_front_end}
              key={project.id}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className='cursor-pointer'
            >
              <h1 className={`text-xl px-5 ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31]" : "text-white"}`}>
                {project.title}
              </h1>
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className='flex flex-col gap-5'>
          <div className='card-style bg-card-color p-4 rounded-md'>
            <h1 className='text-secondary text-xl'>{projects[selectedItemIndex].title}</h1>
            <p className='text-white'>Skills: {projects[selectedItemIndex].skills.join(', ')}</p>
            <p className='text-white'>{projects[selectedItemIndex].details}</p>

            {/* GitHub Frontend Link */}
            {projects[selectedItemIndex].GitHub_frontend && (
              <div className='link-group'>
                <p className='text-white'>
                  GitHub Frontend:
                  <a href={projects[selectedItemIndex].GitHub_frontend} target='_blank' rel='noopener noreferrer' className='link-button link-github'>
                    <span className='link-icon'>&#128421;</span>
                    View on GitHub
                  </a>
                </p>
              </div>
            )}

            {/* GitHub Backend Link */}
            {projects[selectedItemIndex].GitHub_backend && (
              <div className='link-group'>
                <p className='text-white'>
                  GitHub Backend:
                  <a href={projects[selectedItemIndex].GitHub_backend} target='_blank' rel='noopener noreferrer' className='link-button link-github'>
                    <span className='link-icon'>&#128421;</span>
                    View on GitHub
                  </a>
                </p>
              </div>
            )}

            {/* Hosted Frontend Link */}
            {projects[selectedItemIndex].Hosted && (
              <div className='link-group'>
                <p className='text-white'>
                  Hosted:
                  <a href={projects[selectedItemIndex].Hosted} target='_blank' rel='noopener noreferrer' className='link-button link-hosted'>
                    <span className='link-icon'>&#128279;</span>
                    Visit Website
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;