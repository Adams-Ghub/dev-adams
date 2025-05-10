import React from 'react'

const ProjectCard = ({ number,image }) => {
    return (
        <div className="bg-[#223144] w-full  sm:w-[32%]">
            <img src={image}  alt={`project-${number} thumbnail`}/>

            <h2 className='text-[2.75rem] text-[#02B6B6] text-center'>
                {number}
            </h2>
        </div>
    )
}

export default ProjectCard