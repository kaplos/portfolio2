import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from '@/components/ui/scroll-based-velocity'
import SkillsTypingAnimation from './skillAnnimation'

export default function AboutMe() {
    return (
        <section className="min-h-[90vh] flex items-center justify-center " id="about">
                <div className="items-center justify-center">
                    <h1 className="text-4xl text-center text-neutral-300 mb-4">
                        About Me:
                    </h1>
                    <div className=" items-center flex flex-col pt-5 text-neutral-300">
                        <p className="text-lg font-sans text-center px-4 max-w-full">
                            I’ve built a wide range of projects: web apps, mobile
                            apps, internal business tools, CRMs, dashboards,
                            e-commerce features, real-estate utilities, game logic,
                            and more. A lot of my work includes React, motion-driven
                            UI, Supabase, Node.js, and custom APIs. Whether it’s
                            setting up data models, handling real-time updates,
                            building reliable backend routes, or polishing the
                            front-end interactions, I try to make every part feel
                            consistent and well thought out.
                        </p>
                        {/* <SkillsTypingAnimation currentSection={currentSection} /> */}
                    </div>
                </div>
        </section>
    )
}
