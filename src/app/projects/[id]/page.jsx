'use client' 
import { useParams } from 'next/navigation'; 
import { useEffect, useState } from 'react';

export default function Page() {
    const {id} = useParams();
    console.log(id);

    const [project, setProject] = useState(null);
    const [currentPic,setCurrentPic] = useState();
      useEffect(() => {
        const fetchProjects = async () => {
          const response = await fetch('/projects.json');
          const data = await response.json();
          console.log(data,'first');
          let project = data.find(project => project.id === parseInt(id))
          setProject(project);
          setCurrentPic(project.more.images[0]);
        };
    
        fetchProjects();
      }, []);
      console.log(project);
      return (
        <div className="h-screen  w-full flex flex-col md:flex-row items-center bg-backgroundColor">
        <div className="flex flex-col p-5 justify-center h-full w-full">
            {/* Main image */}
            <div className='flex flex-col justify-center items-center h-full w-full'>
              <div className='flex flex-col justify-center items-center '>
                  <img src={currentPic} alt={project?.name} className='h-1/  p-4 object-cover '/>
                  {/* Smaller images */}
                  <div className='flex justify-center h-1/6 w-full gap-2 overflow-x-auto '>
                    {project?.more?.images?.map((image, index) => (
                        <button 
                        className={`flex-none w-1/6 ${image === currentPic ? 'border-2 border-orange-500' : ''}`}
                        onClick={() => setCurrentPic(image)} key={index}>
                            <div key={index} >
                                <img src={image} alt={project?.name} className='h-full w-full object-cover'/>
                            </div>
                        </button>
                    ))}
                  </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full  h-full md:h-[85%] justify-start items-center bg-backgroundColor ">
            <h2 className="text-2xl font-bold pl-4 md:pl-0 text-white sm:text-3xl self-start">
            Project Details:
            </h2>
            <ul role="list" className="mt-6 ml-3 h-full space-y-4 text-lg sm:text-md md:text-md text-gray-400 list-disc list-inside">
                {project?.more?.descriptions?.map((description, index) => (
                    
                    <li className="flex items-start" key={index}>
                        {description}
                    </li>
                ))}
            </ul>
        </div>
        </div>
        
      );
}
