import React from 'react'

const ProjectCard = ({ number, image, title, description, demo, codes }) => {
    const buttonStyle = 'text-[#ffffff] border border-[#ffffff] px-[1.2rem] py-[0.15rem] rounded'
    return (
        <div className="bg-[#223144] w-full  sm:w-[32%] md:w-[48%] lg:w-[32%]">
            <img src={image} alt={`project-${number} thumbnail`} />

            <h2 className='text-[1.5rem] text-[#ffffff] text-left px-[0.5rem] font-semibold'>
                {title}
            </h2>
            <p className='text-[#ffffff] px-[0.5rem]'>
                {
                    description
                }
            </p>
            <div className='flex flex-row justify-between p-[0.5rem] '>
                <a className={buttonStyle} href={`${demo}`}>Demo</a>
                <a className={buttonStyle} href={`${codes}`}>Codes</a>
            </div>
        </div>
    )
}

export default ProjectCard