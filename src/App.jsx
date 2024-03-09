import { useState, useEffect } from 'react';
import Intro from './pages/Intro';
import { LiaUser, LiaHomeSolid, LiaTimesSolid } from 'react-icons/lia';
import { PiBriefcaseLight, PiChatCircleDotsLight } from 'react-icons/pi';
import { FaBarsStaggered } from 'react-icons/fa6';
import logo from '../public/Logo.png';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  const [hidden, setHidden] = useState(true);

  const handleToggleMenu = () => {
    setHidden(!hidden);
  };

  return (
    <div className=" flex flex-row h-full ">
      <a
        onClick={handleToggleMenu}
        className="bg-transparent fixed top-0 z-10 md:hidden p-[0.6rem]"
      >
        <FaBarsStaggered className="text-[2rem] text-[#02A2A2]" />
      </a>

      <div
        className={`${
          hidden ? 'hidden md:block' : 'md:block'
        } w-[20%] sm:w-[10%] md:w-[10%] fixed top-0 left-0 z-10 md:static  bg-[#0a0f14] border-solid border-r border-r-[#3D3D3D]`}
      >
        <div className="flex flex-col justify-start gap-[2.5rem] 2xl:gap-[4.5rem] md:pt-[3rem] md:2xl:pt-[4.5rem] items-center h-screen sticky top-0">
          <a
            onClick={handleToggleMenu}
            className="bg-transparent self-end px-[0.5rem] py-[0.5rem] md:hidden"
          >
            <LiaTimesSolid className="text-[1.2rem] text-[#707070]" />
          </a>
          <img src={logo} className="w-[3rem] h-[3rem] 2xl:w-[4.5rem] 2xl:h-[4.5rem]" alt="logo" />
          <a href="/#headline" className="bg-transparent ">
            <LiaHomeSolid className="text-[2rem] 2xl:text-[3.5rem] text-[#707070] hover:text-[#f5f5f5]" />
          </a>
          <a href="/#About" className="bg-transparent">
            <LiaUser className="text-[2rem] 2xl:text-[3.5rem] text-[#707070] hover:text-[#f5f5f5]" />
          </a>
          <a href="/#Projects" className="bg-transparent">
            <PiBriefcaseLight className="text-[2rem] 2xl:text-[3.5rem] text-[#707070] hover:text-[#f5f5f5]" />
          </a>
          <a href="/#Contact" className="bg-transparent">
            <PiChatCircleDotsLight className="text-[2rem] 2xl:text-[3.5rem] text-[#707070] hover:text-[#f5f5f5]" />
          </a>
        </div>
      </div>
      <div className="w-[100%] md:[80%]">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
