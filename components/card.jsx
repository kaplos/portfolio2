'use client';

import React, { useState } from 'react';
import DynamicIcon from './DynamicIcon'; // Ensure DynamicIcon is correctly imported

const projects = [
  {
    id: 1,
    name: 'Tehillim app',
    description: 'A mobile app that allows users to read Tehillim',
    image: null,
    github: '',
    languages: ['react', 'js', 'tailwind'],
  },
  {
    id: 2,
    name: 'Product Monitor',
    description: 'A monitor that checks product availability on retail websites',
    image: null,
    github: '',
    languages: ['js'],
  },
  {
    id: 3,
    name: 'Product Monitor 2',
    description: 'A monitor that checks product availability on retail websites',
    image: null,
    github: '',
    languages: ['js'],
  },
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden w-full flex justify-center h-[80vh] lg:h-[70vh] xl:h-[60vh]">
      <div className="carousel-container overflow-hidden w-[90%] pt-5 self-center">
        <div
          className="carousel flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              className="card bg-gray-500 shadow-md rounded-lg p-4 m-1 h-full w-[18rem] md:w-[20rem] lg:w-[22rem]"
              key={index}
            >
              <img
                src={project.image || '/placeholder.jpg'} // Use a placeholder if `image` is null
                alt={project.name}
                className="w-full h-[12rem] md:h-[14rem] object-cover mb-4 bg-gray-400 justify-self-center rounded-lg"
              />
              <div>
                <h2 className="text-xl font-bold mb-2 text-black">{project.name}</h2>
                <p className="text-black">{project.description}</p>
              </div>
              <div className="flex gap-2 mt-4">
                {project.languages.map((language) => (
                  <span
                    className="bg-gray-800 text-white p-1 rounded-lg hover:scale-125"
                    key={language}
                  >
                    <DynamicIcon name={language} />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="group">
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:scale-125"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:scale-125"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
