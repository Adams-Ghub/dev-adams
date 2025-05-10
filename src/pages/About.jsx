import React from 'react';
import profilePic from '../assets/profilePic.jpg';
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5';
import {
  SiRuby,
  SiCsswizardry,
  SiRubyonrails,
  SiTailwindcss,
} from 'react-icons/si';
import {
  FaReact,
  FaBootstrap,
  FaFigma,
  FaGithub,
  FaGitAlt,
} from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { BiLogoPostgresql, BiLogoMongodb } from 'react-icons/bi';

const About = () => {
  const headingTwo = 'text-[2.75rem] text-[#02B6B6]';
  const headingThree = 'text-[1.5rem] text-[#02B6B6]';
  const iconStyle = 'text-[2rem]';

  // const location =useLocation();
  return (
    <div
      id="About"
      className="bg-[#151F29] w-full h-auto py-[4rem] sm:px-[2.5rem]"
    >
      <h2 className={headingTwo}>About me</h2>
      <div className="flex flex-col md:flex-row ">
        <img
          className="w-[15rem] self-center h-[15rem] rounded-[100%] mx-[1rem]"
          src={profilePic}
        />
        <div>
          <div className='text-[#f5f5f5]'>
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
          <div className="flex flex-col md:flex-row my-[2rem] gap-[1rem]">
            <div className="w-[33.33%]">
              <h3 className={headingThree}>Languages</h3>
              <div className="flex flex-row w-[100%] sm:flex-wrap gap-[1.3rem] sm:gap-[0.5rem]">
                <div>
                  <IoLogoJavascript className={iconStyle} />
                </div>
                <div>
                  <SiRuby className={iconStyle} />
                </div>
                <div>
                  <SiCsswizardry className={iconStyle} />
                </div>
                <div>
                  <BiLogoPostgresql className={iconStyle} />
                </div>
              </div>
            </div>
            <div className="w-[33.33%]">
              <h3 className={headingThree}>Frameworks</h3>
              <div className="flex flex-row flex-wrap gap-[0.5rem]">
                <div>
                  <SiRubyonrails className={iconStyle} />
                </div>
                <div>
                  <FaReact className={iconStyle} />
                </div>
                <div>
                  <TbBrandReactNative className={iconStyle} />
                </div>
                <div>
                  <FaBootstrap className={iconStyle} />
                </div>
                <div>
                  <SiTailwindcss className={iconStyle} />
                </div>
              </div>
            </div>
            <div className="w-[33.33%]">
              <h3 className={headingThree}>Skills</h3>
              <div className="flex flex-row flex-wrap gap-[0.5rem]">
                <div>
                  <FaFigma className={iconStyle} />
                </div>
                <div>
                  <FaGithub className={iconStyle} />
                </div>
                <div>
                  <BiLogoMongodb className={iconStyle} />
                </div>
                <div>
                  <FaGitAlt className={iconStyle} />
                </div>
                <div>
                  <IoLogoFirebase className={iconStyle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
