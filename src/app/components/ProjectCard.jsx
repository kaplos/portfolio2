import DynamicIcon from './DynamicIcon';



export default function ProjectCard({ project, handlePress }) {
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
    )
}