import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaPython,
    FaJava,
    FaMobileAlt,
    
  } from 'react-icons/fa'
  import { VscVscode } from "react-icons/vsc";
import { SiTailwindcss, SiExpress, SiNextdotjs,SiNpm, SiPostman,SiPrisma} from 'react-icons/si'

export const skills = [
    {
        skill: 'JavaScript',
        example: 'console.log("JavaScript");',
        icon: <FaJs size={24} className='text-white'/>,
    },
    {
        skill: 'React',
        example: 'const element = <h1>React</h1>;',
        icon: <FaReact size={24} />,
    },
    {
        skill: 'Express',
        example: 'app.get("/", (req, res) => res.send("Express"));',
        icon: <SiExpress size={24} />,
    },
    { skill: 'HTML', example: '<h1>HTML</h1>', icon: <FaHtml5 size={24} /> },
    {
        skill: 'Tailwind CSS',
        example: '<div className="text-white">Tailwind</div>',
        icon: <SiTailwindcss size={24} />,
    },
    { skill: 'Python', example: 'print("Python")', icon: <FaPython size={24} /> },
    { skill: 'Java', example: 'System.out.println("Java");', icon: <FaJava size={24} /> },
    {
        skill: 'Next.js',
        example: 'export default function Page() { return <div /> }',
        icon: <SiNextdotjs size={24} />,
    },
    {
        skill: 'React Native',
        example:
            ' return (<View><Text>Hello RN</Text></View>) }',
        icon: <FaMobileAlt size={24} />,
    },
]
export const tools = [
    { skill: 'Git', example: 'git commit -m "Git"', icon: <FaGitAlt size={24} /> },
    { skill: 'VS Code', example: 'code HelloWorld.js', icon: <VscVscode size={24} /> },
     { skill: 'Postman', example: 'GET /HelloWorld', icon: <SiPostman size={24} /> },
        { skill: 'npm', example: 'npm install', icon: <SiNpm size={24} /> },
        { skill: 'Prisma (ORM)', example: 'model Users {id Int, Name String}', icon: <SiPrisma size={24} /> }
]
