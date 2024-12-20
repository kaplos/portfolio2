'use client'
import { useState } from "react";
import Navbar from "../../components/navBar";
import DynamicIcon from '../../components/DynamicIcon';
import Carousel from 'react-multi-carousel';
import ContactForm from "../../components/ContactForm";

export default function Home() {
  const projects = [
    {
    id:1,
    name:'Tehillim app',
    description:'A mobile app that allows users to read Tehillim',
    image:null,
    github:'',
    languages:['react','js','tailwind'],

  },
  {
    id:2,
    name:'Product Monitor',
    description:'A monitor that checks product availability on retail websites',
    image:null,
    github:'',
    languages:['js',],

  },
  {
    id:2,
    name:'Product Monitor',
    description:'A monitor that checks product availability on retail websites',
    image:null,
    github:'',
    languages:['js'],

  },
]
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: {max: 3000,min: 1024},
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const CardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };
    return (
      // <div className="bg-red-50 h-72">
      <div className="relative overflow-hidden w-full flex justify-center h-[6in]">
          <div className="carousel-container overflow-hidden   w-[90%] pt-5 self-center">
             <div className="carousel flex transition-transform duration-500 ease-in-out " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {/* <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              responsive={responsive}
          > */}
              {projects.map((project,index)=>{
                return(
                <div className="card bg-gray-500 shadow-md rounded-lg p-4 m-1 h-auto w-64 " key={index}>
                    <img src={project.image} alt={project.name} className="w-[16rem] h-44 object-cover mb-4 bg-gray-400 justify-self-center rounded-lg"/>
                    <div className="self-end ">
                      <h2 className="text-xl font-bold mb-2 text-black">{project.name}</h2>
                      <p className="text-black">{project.description}</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                      {project.languages.map((language)=>{
                        console.log(language);
                        return(
                          <span className="bg-gray-800 text-white p-1 rounded-lg hover:scale-125" key={language}>
                            {<DynamicIcon name={language}/>}
                        </span>
                        )
                      })}
                      </div>
                </div>
                )
              })}
            {/* </Carousel> */}
        </div>
          
        <div className="group">
          <button className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:scale-125 [&:not(:hover)]:bg-transparent"
          onClick={handlePrev}>
            &lt;
          </button>
          <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:scale-125 [&:not(:hover)]:bg-transparent"
          onClick={handleNext}>
            &gt;
          </button>
        </div>
       </div>
       </div>
          //   </div>
    );
  };
  
  
  return(
    <section className="h-auto">
    <Navbar/>
	<div className="bg-gray-500 min-h-[90vh] rounded-b-xl shadow-md shadow-white-bottom flex flex-col">
    <div className="justify-items-center p-20"> 
      {/* <h1 className="pt-1 text-xl animate-fade-in">Chaim Full Stack developer</h1> */}
      </div>
    <div className="bg-grey text-white py-20 justify-items-center content-center">
      <h1 className="text-4xl animate-fade-in">Welcome.</h1>
      <h1 className="text-lg animate-fade-in">Discover the power of innovation. Let's create something extraordinary together</h1>
    </div>
    <div className="animate-bounce-small flex justify-center items-end pb-4 h-full flex-grow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
  </div>
  <div className="min-h-screen h-[90vh] w-full bg-slate-950">
    < CardCarousel/>
    <ContactForm/>
  </div>
</section>
);
}
