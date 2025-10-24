'use client';
import React, { useMemo } from 'react';
import SkillsTypingAnimation from './skillAnnimation';
import {
    Card,
    CardTitle,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import Marquee from 'react-fast-marquee';
import { skills, tools } from '@/lib/skillsArray';

const SkillCard = React.memo(function SkillCard({ skill }) {
    return (
        <Card className="flex flex-col items-center bg-gray-500 min-w-60 min-h-22 flex-shrink-0 m-2">
            <CardHeader className="self-start">
                <span className="bg-gray-800 text-white p-1 rounded-lg hover:scale-125">
                    {skill.icon}
                </span>
            </CardHeader>
            <CardContent className="text-sm font-medium text-black self-start leading-tight">
                {skill.example}
            </CardContent>
        </Card>
    );
});

function MarqueeList({ items, direction = 'left' }) {
    return (
        <Marquee
            className="gap-2"
            speed={50}
            delay={10}
            pauseOnHover={true}
            autoFill
            loop={0}
            direction={direction}
        >
            {items.map((skill, idx) => (
                <SkillCard key={skill.id ?? skill.name ?? idx} skill={skill} />
            ))}
        </Marquee>
    );
}

export default function AboutMe({ currentSection }) {
    const [skills1, skills2] = useMemo(() => {
        const half = Math.ceil(skills.length / 2);
        return [skills.slice(0, half), skills.slice(half)];
    }, [skills]);

    return (
        <div className="min-h-[90vh] flex items-center justify-center w-full" id="about">
            <div>
                <h1 className="text-4xl text-center text-white mb-4">About Me:</h1>
                <div className="w-[65vw] items-center flex flex-col pt-5 text-white">
                    <p className="text-lg font-sans">
                        I&apos;m a passionate new software developer eager to take on challenges. With
                        experience in back-end, full-stack, and mobile app development. I&apos;m eager
                        to contribute to innovative projects and grow my skills. Let&apos;s create
                        something amazing together!
                    </p>
                    <SkillsTypingAnimation currentSection={currentSection} />
                </div>

                {/* <div className="flex flex-col items-center justify-center overflow-hidden mt-10">
                    <MarqueeList items={skills1} />
                    <MarqueeList items={skills2} direction="right" />
                    <MarqueeList items={tools} />
                </div> */}
            </div>
        </div>
    );
}