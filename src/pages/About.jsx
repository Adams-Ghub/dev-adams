import React from 'react';
import profilePic from '../assets/profilePic.jpg';
// import {useLocation} from 'react-router-dom'

const About = () => {
  const headingTwo = 'text-[2.75rem] text-[#02B6B6]';
  const headingThree = 'text-[2rem] text-[#02B6B6]';

  // const location =useLocation();
  return (
    <div
      id="About"
      className="bg-[#0a0f14] w-full h-auto py-[2.5rem] px-[0.75rem]"
    >
      <h2 className={headingTwo}>About me</h2>
      <div className="flex flex-col md:flex-row ">
        <img
          className="w-[15rem] h-[15rem] rounded-[100%] mx-[1rem]"
          src={profilePic}
        />
        <div>
          <div>
            <p>
              I feel very fulfilled when I solve problems and make the lives of
              humanity better and I am always building my capacity to create the
              best solutions possible.
            </p>
            <p>
              Recently I enrolled in a software development school, Microverse
              which has 1% chance of admission and worked remotely 40 hours a
              week with other developers. I have use technologies including
              JavasScript, Ruby on Rails, PostgreSQL, React, React Native and
              others in building over 20 projects.
            </p>
            <p>
              I am currently working with a team on a a system that helps manage
              waste by rewarding anyone who disposes plastic waste appropriately
              in Africa. I am eager to leverage my skills, experience, and
              unwavering dedication to problem-solving to contribute to the
              success of forward-thinking institutions.
            </p>
          </div>
          <div className="flex flex-col md:flex-row my-[2rem]">
            <div className="w-[33.33%]">
              <h3 className={headingThree}>Languages</h3>
              <p></p>
            </div>
            <div className="w-[33.33%]">
              <h3 className={headingThree}>Frameworks</h3>
              <p></p>
            </div>
            <div className="w-[33.33%]">
              <h3 className={headingThree}>Skills</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
