import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from '@/components/ui/scroll-based-velocity'
import { skills, tools } from '@/lib/skillArray'
import { useMemo } from 'react'
export default function VelocityScrollTools() {
    const [skills1, skills2] = useMemo(() => {
        const half = Math.ceil(skills.length / 2)
        return [skills.slice(0, half), skills.slice(half)]
    }, [])
    let all3Arrays = [skills1, skills2, tools]
    return (
        <div className=' py-6'>
            {all3Arrays.map((array, index) => (
                <ScrollVelocityContainer
                    key={index}
                    className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]"
                >
                    <ScrollVelocityRow
                        direction={index % 2 === 0 ? 1 : -1}
                        baseVelocity={10}
                    >
                        {array.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-gray-700 mx-3 flex flex-col items-center gap-3 min-w-[120px]"
                            >
                                <div className="text-white">{item.icon}</div>
                                <p className="text-sm text-gray-300 font-medium">
                                    {item.skill}
                                </p>
                            </div>
                        ))}
                    </ScrollVelocityRow>
                </ScrollVelocityContainer>
            ))}
        </div>
    )
}
