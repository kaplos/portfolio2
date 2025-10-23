'use client'
import DynamicIcon from './DynamicIcon';
import ProjectCard from "./ProjectCard";

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

export default function CardCarousel ({projects, handlePress}) {
 
    const [currentIndex, setCurrentIndex] = useState(0);
    
    
    const productTemplate = (project) => {
    return (
      <ProjectCard project={project} handlePress={handlePress} />
    );
    }
    return(
      <div className="z-10 flex flex-col justify-center align-center min-h-[90vh] " id="projects" >
        <h1 className="flex text-2xl font-bold justify-center mb-4 text-white">Projects I&apos;ve Made:</h1>
        <Carousel value={projects} numScroll={1} numVisible={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} circular={true} showIndicators={true} pt={{}}/>
      </div>
    );
  };
  