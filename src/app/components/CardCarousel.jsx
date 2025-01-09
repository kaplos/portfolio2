'use client'
import { useState,useEffect } from "react";
import DynamicIcon from './DynamicIcon';
import { useRouter } from 'next/navigation';


import { Carousel } from 'primereact/carousel';
       

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
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/projects.json');
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();
    const handlePress = (id) => {
      console.log('pressed', id);
      router.push(`/projects/${id}`)
    };
    
    const productTemplate = (project) => {
    return (
      
      <div className="min-w-full p-2 flex justify-center z-10" >
                <div className="card bg-gray-500 shadow-md rounded-lg p-4 h-auto max-h-md max-w-md">
                  <img src={project.more.images[0]} alt={project.name} className="w-full h-auto object-cover mb-4 bg-gray-400 justify-self-center rounded-lg" />
                  <div className="self-end">
                    <h2 className="text-xl font-bold mb-2 text-black">{project.name}</h2>
                    <p className="text-black">{project.description}</p>
                  </div>
                  <div className="flex mt-4 justify-between">
                    <div className="flex gap-2">
                      {project.languages.map((language) => (
                        <span className="bg-gray-800 text-white p-1 rounded-lg hover:scale-125  " key={language}>
                          <DynamicIcon name={language} />
                        </span>
                      ))}
                    </div>
                    <button className="px-4 border-gray-800 border-2 rounded-lg text-gray-800 hover:bg-gray-800 hover:text-white" onClick={()=>handlePress(project.id)}>More Info</button>
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
  