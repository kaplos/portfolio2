'use client' 
import { LightRays } from '@/components/ui/light-rays';
import { useParams } from 'next/navigation'; 
import { useEffect, useState } from 'react';

export default function Page() {
    const {id} = useParams();
    const [project, setProject] = useState(null);
    const [currentPic, setCurrentPic] = useState('');
    
    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('/projects.json');
            const data = await response.json();
            let project = data.find(project => project.id === parseInt(id));
            setProject(project);
            setCurrentPic(project?.more?.images?.[0] || '');
        };
    
        if (id) {
            fetchProjects();
        }
    }, [id]);

    if (!project) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center bg-[#101010]">
                <p className="text-white text-xl">Loading...</p>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row items-start bg-[#101010] gap-8 p-4 md:p-8">
            {/* Image Section */}
            <div className="flex flex-col w-full md:w-1/2 items-center justify-center py-8">
                <img 
                    src={currentPic} 
                    alt={project?.name} 
                    className='w-full max-w-md h-96 object-cover rounded-lg'
                />
                <div className='flex justify-center w-full max-w-md mt-4 gap-2 overflow-x-auto pb-2'>
                    {project?.more?.images?.map((image, index) => (
                        <button 
                            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden transition-all ${
                                image === currentPic 
                                    ? 'border-2 border-orange-500 scale-105' 
                                    : 'border-2 border-transparent hover:border-gray-500'
                            }`}
                            onClick={() => setCurrentPic(image)} 
                            key={index}
                        >
                            <img 
                                src={image} 
                                alt={`${project?.name} ${index + 1}`} 
                                className='h-full w-full object-cover'
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col w-full md:w-1/2 justify-start py-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                    {project?.name}
                </h2>
                <h3 className="text-xl font-semibold text-white mb-4">
                    Project Details:
                </h3>
                <ul role="list" className="space-y-4 text-base text-gray-300 list-disc list-inside">
                    {project?.more?.descriptions?.map((description, index) => (
                        <li key={index} className="leading-relaxed">
                            {description}
                        </li>
                    ))}
                </ul>
            </div>
            <LightRays />
        </div>
    );
}
