'use client'
import { useState } from "react";
import DynamicIcon from './DynamicIcon';

import { Carousel } from 'primereact/carousel';
        
const projects = [
    {
    id:1,
    name:'Tehillim app',
    description:'A mobile app that allows users to read Tehillim',
    image:'Tehillim-main.jpeg',
    github:'',
    languages:['react','js','tailwind'],

  },
  {
    id:2,
    name:'Product Monitor',
    description:'A monitor that checks product availability on retail websites',
    image:'ProductMonitor-main.png',
    github:'',
    languages:['js',],

  },
  {
    id:3,
    name:'Shopify Store Webpage Design',
    description:'A implementation of a webpage design for a Shopify store',
    image:'Shipsure-main.png',
    github:'',
    languages:['.liquid','html','css'],
  },
]
const responsiveOptions = [
  {
      breakpoint: '1400px',
      numVisible:1,
      numScroll: 1
  },
  {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
  },
  {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
  },
  {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
  }
];

export const CardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    
    const productTemplate = (project) => {
    return (
      
      <div className="min-w-full flex justify-center z-10" >
                <div className="card bg-gray-500 shadow-md rounded-lg p-4 h-auto max-h-md max-w-md">
                  <img src={project.image} alt={project.name} className="w-full h-auto object-cover mb-4 bg-gray-400 justify-self-center rounded-lg" />
                  <div className="self-end">
                    <h2 className="text-xl font-bold mb-2 text-black">{project.name}</h2>
                    <p className="text-black">{project.description}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {project.languages.map((language) => (
                      <span className="bg-gray-800 text-white p-1 rounded-lg hover:scale-125" key={language}>
                        <DynamicIcon name={language} />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
      
        
      );
    }
    return(
      <div className="z-10 flex flex-col justify-center align-center min-h-[90vh] " id="projects" >
        <h1 className="flex text-2xl font-bold justify-center mb-4 text-white">Projects I&apos;ve Made:</h1>
        <Carousel value={projects} numScroll={1} numVisible={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} circular={true} showIndicators={true} pt={{}}/>
      </div>
    );
  };
  