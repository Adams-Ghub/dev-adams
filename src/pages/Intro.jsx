import React, { useState, useEffect } from 'react';
import { LiaLinkedin } from 'react-icons/lia';
import { FaGitAlt, FaSquareFacebook } from 'react-icons/fa6';
import '../App.css';

const Intro = () => {
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const flyingInterval = setInterval(() => {
      let newFireflies = [...fireflies];
      const angle = randNum(0, 361);
      const dist = randNum(100, 450);
      const wWidth = window.innerWidth;
      const wHeight = window.innerHeight;
      const toX = Math.cos((angle * Math.PI) / 180) * dist;
      const toY = Math.sin((angle * Math.PI) / 180) * (dist / 1.5);
      const color = [randNum(40, 80), randNum(100, 140), randNum(120, 160)];
      const startPos = [randNum(0, wWidth), randNum(0, wHeight)];

      newFireflies.push({ color, startPos, toX, toY });

      setFireflies(newFireflies);

      // Remove fireflies after animation
      setTimeout(() => {
        setFireflies((prevFireflies) => prevFireflies.slice(1));
      }, 7000);
    }, 100);

    // Cleanup function to clear interval
    return () => clearInterval(flyingInterval);
  }, [fireflies]);

  // useEffect(() => {
  //   // Hide title after 4 seconds
  //   const titleTimeout = setTimeout(() => {
  //     document.querySelector('.pageTop h1').style.opacity = 0;
  //   }, 4000);

  //   // Cleanup function to clear timeout
  //   return () => clearTimeout(titleTimeout);
  // }, []);

  const randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <div id="headline" className="h-screen">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0a0f14] overflow-hidden">
        {fireflies.map((firefly, index) => (
          <div
            key={index}
            className="pixel"
            style={{
              backgroundColor: `rgba(${firefly.color[0]}, ${firefly.color[1]}, ${firefly.color[2]}, 0.65)`,
              top: firefly.startPos[1] + 'px',
              left: firefly.startPos[0] + 'px',
              boxShadow: `0px 0px 7px 7px rgba(${firefly.color[0] - 5}, ${
                firefly.color[1] - 5
              }, ${firefly.color[2] - 5}, 0.35)`,
            }}
          ></div>
        ))}
      </div>

      <div className="pageTop">
        <h1
          id="headline"
          className="text-[3rem] md:text-[3.5rem] text-[#ffffff]"
        >
          Adams Bamfo
        </h1>
        <p className="text-[#ffffff] w-[20rem] sm:w-[25rem] text-center font-thin text-[1rem] leading-tight py-[1rem]">
          A Full-Stack Developer passionate about crafting web and mobile
          solutions that change the lives of humanity for the better.
        </p>
        <div className="flex flex-row items-center mb-[1rem]">
          <a
            href="https://www.linkedin.com/in/adams-bamfo/"
            target="_blank"
            className=""
          >
            <LiaLinkedin className="text-[#707070] text-[2.5rem] hover:text-[#f5f5f5]" />
          </a>
          <a href="https://github.com/Adams-Ghub" target="_blank" className="">
            <FaGitAlt className="text-[#707070] text-[2rem] hover:text-[#f5f5f5]" />
          </a>
          <a href="#" className="">
            <FaSquareFacebook className="text-[#707070] text-[2rem] hover:text-[#f5f5f5]" />
          </a>
        </div>
        <div>
          <a
            href="/#Contact"
            className="border-solid border rounded-sm flex flex-col items-center justify-center w-[8rem] py-[0.25rem] px-[1.5rem] text-[#ffffff]"
          >
            contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
