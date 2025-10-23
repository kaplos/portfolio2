import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import CardCarousel from './CardCarousel'
import ProjectCard from './ProjectCard'

export default function ProjectLayout({ children }) {
    const layout = 'grid'
    const router = useRouter()
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('/projects.json')
            const data = await response.json()
            setProjects(data)
            setIsLoading(false)
        }

        fetchProjects()
    }, [])

    const handlePress = (id) => {
        console.log('pressed', id)
        router.push(`/projects/${id}`)
    }
    return (
        <div
            className="z-10 flex flex-col justify-center align-center min-h-[90vh] "
            id="projects"
        >
            {isLoading && <p className="text-white">Loading projects...</p>}
            <h1 className="flex text-2xl font-bold justify-center mb-4 text-white">
                Projects I&apos;ve Made:
            </h1>
            {layout === 'grid' ? (
                <div
                    className={
                        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'
                    }
                >
                    {projects?.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            handlePress={handlePress}
                        />
                    ))}
                </div>
            ) : (
                <CardCarousel projects={projects} handlePress={handlePress} />
            )}
        </div>
    )
}
