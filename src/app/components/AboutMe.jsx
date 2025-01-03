import SkillsTypingAnimation from "./skillAnnimation";

export const AboutMe = ({currentSection}) => {
    return(

        <div className="min-h-[90vh] flex items-center justify-center" id="about">
        <div className="">
          <h1 className="text-4xl text-center text-white mb-4">About Me:</h1>
          <div className="max-w-[65vw] items-center flex flex-col pt-5 text-white">
            <span className="text-lg font-sans">
              I&apos;m a passionate new software developer eager to take on challenges. With experience in back-end, full-stack, and mobile app development. I&apos;m eager to contribute to innovative projects and grow my skills. Let&apos;s create something amazing together!
            </span>
            <SkillsTypingAnimation currentSection={currentSection} />
          </div>
        </div>
      </div>
) ;
}
