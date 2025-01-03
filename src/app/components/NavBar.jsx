import React, { useEffect, useRef, useState } from 'react';
import DynamicIcon from "./DynamicIcon";

const NavBar = ({ currentSection,setCurrentSection}) => {
  const navRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [isOutOfView, setIsOutOfView] = useState(false);
  const sections = ['Home', 'About', 'Projects', 'Contact'];
  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);

      
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [position]);

  useEffect(() => {
    position > 45 ? (isOutOfView==true? "" :setIsOutOfView(true)) : (isOutOfView==false?"":setIsOutOfView(false));
  });
  
  return (
    <div
      ref={navRef}
      className={`transition-all duration-500 group ease-in-out z-50 ${
        isOutOfView ? ' fixed bottom-4 right-4 transform translate-x-0 translate-y-0 animate-move-to-corner'  : 'absolute top-0 w-full z-50 flex justify-center'
      }`}
    >
     <div className={` max-w-sm bg-white shadow-xl flex items-center justify-evenly  ${isOutOfView ? ' justify-center items-center hover:w-full w-18  h-16 rounded-full group-hover:px-4 group-hover:py-2 group-hover:mt-4' : ' rounded-full px-4 py-2 mt-4'}`}>
      <div className="flex items-center">          
        <nav className="flex space-x-4">
            <ul className="flex">
              {sections.map((section, index) => (
                <li key={index} className={`${isOutOfView && currentSection !== section.toLowerCase() ? 'hidden group-hover:block opacity-0 group-hover:visible group-hover:opacity-100 font-sans' : 'visible opacity-100 font-sans'}`}>
                  <a
                    href={`#${section.toLowerCase()}`}
                    className={`text-gray-600 hover:text-gray-900 px-3 py-2 rounded-full hover:bg-gray-200 transition duration-300 ${
                      currentSection === section.toLowerCase() ? (isOutOfView? 'text-gray-900 group-hover:underline decoration-slate-950 group-hover:underline-offset-4	' :'underline decoration-slate-950 underline-offset-4	') : ''
                    }`}
                    onClick={() => setCurrentSection(section.toLowerCase())}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {/* Additional elements can go here */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;