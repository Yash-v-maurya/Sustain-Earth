"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function HomePage() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      if (user) {
        setIsSignedIn(true);
      }
    }
  }, []);

  const handleClick = () => {
    const randomPage = getRandomPage();
    router.push(randomPage);
  };

  const getRandomPage = () => {
    const pages = ["/FoodHub", "/MarketPlace/GreenMarket", "/Learn&Share/Learn"];
    const randomIndex = Math.floor(Math.random() * pages.length);
    return pages[randomIndex];
  };

  if (!isClient) {
    return null;
  }

  return (
    <header className="h-screen p-4">
      <div className="mb-48 items-center text-center flex flex-col justify-center mt-20">
        <div 
          style={{ 
            fontFamily: '"Source Serif 4", Georgia, serif',
            lineHeight: '1' 
          }}
        >
          <p className="w-80 sm:w-[450px] border-2 rounded-full font-bold flex items-center justify-center text-center bg-[#ffc8a2] border-[#ffc8a2] text-[13px] sm:text-[18px] py-2 sm:py-3">
            The Community Hub for Sustainable Living
          </p>
        </div>

        <p 
          style={{ 
            fontFamily: '"Source Serif 4", Georgia, serif', 
            letterSpacing: '-0.5px', 
            lineHeight: '56px' 
          }} 
          className="mt-9 mb-9 text-[48px] font-normal hidden lg:block"
        >
          <span className="block">Join a global movement towards sustainable practices</span>
          <span className="block">collaborate, share, and contribute</span>
          <span>to make a lasting impact</span>
        </p>

        <p 
          style={{
            fontFamily: '"Source Serif 4", Georgia, serif', 
            fontWeight: 'bold'
          }} 
          className="mt-6 mb-6 text-[41px] font-semibold block lg:hidden"
        >
          Join the Global Movement for Sustainable Impact.
        </p>

        <p
          style={{ 
            fontFamily: '"Source Serif 4", Georgia, serif',
            lineHeight: '1' 
          }}
          className="text-[20px] leading-8 font-normal"
        >
          Connect, collaborate, and share to create meaningful change for a sustainable future.
        </p>

        <button onClick={handleClick} type="submit" className="flex mt-[100px] justify-center px-4 py-3 gap-2 items-center mx-auto text-lg bg-[#ffc8a2] backdrop-blur-md lg:font-semibold isolation-auto border-[#ffc8a2] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-black hover:text-gray-50 hover:border-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 overflow-hidden border-2 rounded-full group">
        <span style={{ 
            fontFamily: '"Source Serif 4", Georgia, serif',
            lineHeight: '1' 
          }} className='font-bold text-[13px] sm:text-[18px]'>Explore</span>
      <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-gray-800" />
      </svg>
    </button>
      </div>
    </header>
  );
}


export default HomePage;
