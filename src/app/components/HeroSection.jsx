'use client'
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import NavBar from './NavBar';
import DynamicIcon from './DynamicIcon';

 const HeroSection = () => {
  return (
    <div className="relative bg-gray-500 min-h-[90vh] max-h-[95vh] rounded-b-xl shadow-md shadow-white-bottom flex flex-col overflow-hidden z-10" id='home'>
      <NavBar/>
      
      
      <div className=" absolute z-10 grid grid-rows-2 grid-cols-2 min-h-xl items-center w-full mt-20 ">
        <div className="row-start-1 z-20 col-start-1 h-full">
          <DotLottieReact
            className="row-start-1 col-start-1 h-full "
            src='3cM5jq1RUy.lottie'
            loop
            autoplay
          />
        </div>
        <div className="row-start-1 z-20 col-start-2  ">
          <DotLottieReact
            className="row-start-1 col-start-2 h-full"
            src='JVYss7mfq6.lottie'
            loop
            autoplay
          />
        </div>
      </div>
      {/* this div is for the backdrop */}
    <div className='backdrop-blur-sm z-20 w-full h-full absolute rounded-b-xl'></div>

      <div className='z-50 flex flex-col items-center justify-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        <div className=" text-white py-20 flex flex-col items-center justify-center w-full  ">
          <h1 className="text-4xl animate-fade-in font-sans">Welcome.</h1>
          <h1 className="text-xl sm:text-sm animate-fade-in p-5 font-sans">Discover the power of innovation. Let&apos;s create something extraordinary together</h1>
          <div className='flex justify-evenly items-center z-60 gap-2 pt-2 animate-fade-in'>
            <button className='p-2 bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-300 flex items-center justify-center shadow-sm' onClick={() => window.open('https://github.com/kaplos ','_blank')}>
              <DynamicIcon name={'github'} className=" text-white" />
            </button>
            <button className='p-2 bg-indigo-600   rounded-full hover:bg-indigo-700 transition duration-300 flex items-center justify-center shadow-sm' onClick={() => window.open('https://www.linkedin.com/in/haym-mallakh-58216b1b8/ ','_blank')}>
              <DynamicIcon name={'linkedin'} className=" text-white" />
        
            </button>
          </div>
        </div>
        <div className=" animate-bounce-small flex justify-center items-end p-4 w-full text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-white" >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" stroke="white"/>
          </svg>
        </div>
            </div>
      </div>
  );
};

export default HeroSection