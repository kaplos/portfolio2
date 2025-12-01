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
                    {/* <img
                        src={project.more.images[0]}
                        alt={project.name}
                        className=" object-cover justify-self-center rounded-lg"
                    /> */}
                    <img src={project.more.images[0]} alt={project.name} loading="lazy" decoding="async" fetchPriority="auto" width="1280" height="1024" class="w-full  object-cover group-hover:scale-105 transition-transform duration-300"></img>
                </CardHeader>
                
                {/* <CardFooter className="flex justify-between flex-1  rounded-b-xl ">
                    <div className="flex gap-2">
                        {project.languages.map((language) => (
                            <span
                                className="bg-gray-800 text-neutral-300 p-1 rounded-lg hover:scale-125  "
                                key={language}
                            >
                                <DynamicIcon name={language} size={30} />
                            </span>
                        ))}
                    </div>
                 <Button
    variant="default"
    className="px-4 rounded-lg bg-gray-800 hover:bg-gray-900 text-neutral-300  hover:scale-105 shadow-lg hover:shadow-xl"
    onClick={() => handlePress(project.id)}
>
    More Info
</Button>
                </CardFooter> */}
            </MagicCard>
        </Card>
    )
}
