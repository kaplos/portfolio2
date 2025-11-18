import SkillsTypingAnimation from "./skillAnnimation";

export const AboutMe = ({currentSection}) => {
    return(

        <div className="min-h-[90vh] flex items-center justify-center" id="about">
        <div className="">
          <h1 className="text-4xl text-center text-white mb-4">About Me:</h1>
          <div className="max-w-[65vw] items-center flex flex-col pt-5 text-white">
            <span className="text-lg font-sans">
I’ve built a wide range of projects: web apps, mobile apps, internal business tools, CRMs, dashboards, e-commerce features, real-estate utilities, game logic, and more. A lot of my work includes React, motion-driven UI, Supabase, Node.js, and custom APIs. Whether it’s setting up data models, handling real-time updates, building reliable backend routes, or polishing the front-end interactions, I try to make every part feel consistent and well thought out.

            </span>
            {/* <SkillsTypingAnimation currentSection={currentSection} /> */}
          </div>
        </div>
      </div>
) ;
}
