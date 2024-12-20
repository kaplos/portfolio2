'use client';

import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-500 min-h-[90vh]  shadow-md shadow-white-bottom flex flex-col">
      <div className="justify-items-center p-20">
        {/* Add a heading or other content here if needed */}
      </div>
      <div className="bg-grey text-white py-20 justify-items-center content-center">
        <h1 className="text-4xl animate-fade-in">Welcome.</h1>
        <h1 className="text-lg animate-fade-in">
          Discover the power of innovation. Let's create something extraordinary together
        </h1>
      </div>
      <div className="animate-bounce-small flex justify-center items-end pb-4 h-full flex-grow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
