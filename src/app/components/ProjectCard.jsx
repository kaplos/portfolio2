import DynamicIcon from './DynamicIcon'
import { MagicCard } from '@/components/ui/magic-card'
import {
    Card,
    CardTitle,
    CardHeader,
    CardFooter,
    CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ProjectCard({ project, handlePress }) {
    return (
        <Card className=" flex flex-col justify-center border-none p-0 shadow-none bg-gray-500  rounded-xl overflow-hidden ">
            <MagicCard gradientColor="#1f2937" className="flex-1  " gradientSize={200} gradientOpacity={.3}>
                <CardHeader className=" rounded-t-xl ">
                    <img
                        src={project.more.images[0]}
                        alt={project.name}
                        className=" object-cover justify-self-center rounded-lg"
                    />
                </CardHeader>
                <CardContent className=" ">
                    {/* <div className="card shadow-md rounded-lg p-4 h-auto max-h-md max-w-md"> */}
                    {/* <img src={project.more.images[0]} alt={project.name} className="w-full h-auto object-cover mb-4 bg-gray-400 justify-self-center rounded-lg" /> */}
                    <div className="self-end">
                        <h2 className="text-xl font-bold mb-2 text-black">
                            {project.name}
                        </h2>
                        <p className="text-black">{project.description}</p>
                    </div>

                    {/* </div> */}
                </CardContent>
                <CardFooter className="flex justify-between flex-1  rounded-b-xl ">
                    <div className="flex gap-2">
                        {project.languages.map((language) => (
                            <span
                                className="bg-gray-800 text-white p-1 rounded-lg hover:scale-125  "
                                key={language}
                            >
                                <DynamicIcon name={language} size={30} />
                            </span>
                        ))}
                    </div>
                 <Button
    variant="default"
    className="px-4 rounded-lg bg-gray-800 hover:bg-gray-900 text-white  hover:scale-105 shadow-lg hover:shadow-xl"
    onClick={() => handlePress(project.id)}
>
    More Info
</Button>
                </CardFooter>
            </MagicCard>
        </Card>
    )
}
