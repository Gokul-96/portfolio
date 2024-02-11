import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { projects } from '../../resources/projects';
import '../../index';
import '../../projects.css'; 

function Projects() {
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className='flex flex-wrap py-10 gap-10 bg-primary'>
        {/* Project Cards */}
        {projects.map((project, index) => (
          <div key={project.id} className='project-card'>
            <h1 className='text-xl px-5'>{project.title}</h1>
            <div className='card-details'>
  <p className='text-white skill-label'>Skills: {project.skills.join(', ')}</p>
  <p className='text-white details-label'>{project.details}</p>
  {/* GitHub Frontend Link */}
  {project.GitHub_frontend && (
    <div className='link-group'>
      <p className='text-white github-label'>
        GitHub Frontend:
        <a href={project.GitHub_frontend} target='_blank' rel='noopener noreferrer' className='link-button link-github'>
          <span className='link-icon'>&#128421;</span>
          View on GitHub
        </a>
      </p>
    </div>
  )}
  {/* GitHub Backend Link */}
  {project.GitHub_backend && (
    <div className='link-group'>
      <p className='text-white github-label'>
        GitHub Backend:
        <a href={project.GitHub_backend} target='_blank' rel='noopener noreferrer' className='link-button link-github'>
          <span className='link-icon'>&#128421;</span>
          View on GitHub
        </a>
      </p>
    </div>
  )}
  {/* Hosted Frontend Link */}
  {project.Hosted && (
    <div className='link-group'>
      <p className='text-white hosted-label'>
        Hosted:
        <a href={project.Hosted} target='_blank' rel='noopener noreferrer' className='link-button link-hosted'>
          <span className='link-icon'>&#128279;</span>
          Visit Website
        </a>
      </p>
    </div>
  )}
</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

