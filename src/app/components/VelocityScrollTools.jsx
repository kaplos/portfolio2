
import { ScrollVelocityContainer,ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import { skills,tools } from "@/lib/skillArray";
import { useMemo } from "react";
export default function VelocityScrollTools(){
    const [skills1, skills2] = useMemo(() => {
        const half = Math.ceil(skills.length / 2);
        return [skills.slice(0, half), skills.slice(half)];
    }, [skills]);
    let all3Arrays = [skills1, skills2,tools]
return (

        <div >

       { all3Arrays.map((array, index) => (
              <ScrollVelocityContainer key={index} className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]">

            <ScrollVelocityRow direction={ index % 2 === 0 ? 1 : -1 } baseVelocity={20}>
                {array.map((item, idx) => (
                    <div
                        key={idx}>
                          {item.icon}  
                    </div>))}
            </ScrollVelocityRow>
        </ScrollVelocityContainer>
        ))}
    </div>
)
};