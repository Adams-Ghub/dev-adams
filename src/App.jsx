import { useState, useEffect } from 'react';
import './App.css';

function App() {
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

      console.log('New firefly:', { color, startPos, toX, toY });

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

  useEffect(() => {
    // Hide title after 4 seconds
    const titleTimeout = setTimeout(() => {
      document.querySelector('.pageTop h1').style.opacity = 0;
    }, 4000);

    // Cleanup function to clear timeout
    return () => clearTimeout(titleTimeout);
  }, []);

  const randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <div className="bg-[#141414] flex flex-row">
      <div className="w-[20%]"></div>
      <div className='w-[80%'>
        <div className="backDrop">
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
                }, ${firefly.color[2] - 5}, 0.25)`,
              }}
            ></div>
          ))}
        </div>

        <div className="pageTop">
          <h1>Fireflies!</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
