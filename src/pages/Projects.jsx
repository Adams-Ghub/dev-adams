import React from 'react';
import ProjectCard from '../compents/ProjectCard';

const Projects = () => {
  const headingTwo = 'text-[2.75rem] text-[#02B6B6]';
  const headingThree = 'text-[1.5rem] text-[#02B6B6]';
  const buttonStyle = "outline-none border-none text-[1rem] sm:text-[1.5rem]";

  const projects = [1, 2, 3, 4, 5, 6];

  return (
    <div className='bg-[#0a0f14] w-full h-auto py-[4rem] sm:px-[2.5rem]'>
      <div id="Projects" className={` ${headingTwo}`}>
        Projects
      </div>
      <div>
        <div className='flex md:flex-row gap-[2rem] py-[1rem] justify-center'>
          <a type="a" className={`${buttonStyle}`}>all</a>
          <a type="a" className={`${buttonStyle}`}>mobile app</a>
          <a type="a" className={`${buttonStyle}`}>web app</a>
        </div>
      </div>
      <div className='flex flex-col w-full p-[1rem] md:flex-row flex-wrap gap-[1rem] justify-start w-full'>
        {
          projects.map((project, index) => {
            return (

              <ProjectCard number={index + 1} />

            )
          })
        }
      </div>
    </div>

  );
}

export default Projects;
