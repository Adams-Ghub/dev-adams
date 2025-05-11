import React from 'react';
import ProjectCard from '../compents/ProjectCard';
import { projects } from '../compents/constants';

const Projects = () => {
  const headingTwo = 'text-[2.75rem] text-[#02B6B6]';
  const headingThree = 'text-[1.5rem] text-[#02B6B6]';
  const buttonStyle = "outline-none border-none text-[1rem] sm:text-[1.5rem]";
  const projectImg = 'https://plus.unsplash.com/premium_photo-1706259481452-f857c96ceaca?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D'



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

              <ProjectCard number={index + 1} image={project.image} title={project.title} description={project.description} demo={project.demo} codes={project.codes} />

            )
          })
        }
      </div>
    </div>

  );
}

export default Projects;
