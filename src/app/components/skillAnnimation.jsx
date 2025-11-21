import React, { useState, useEffect } from 'react';
import { skills } from '@/lib/skillArray';
import Switch from './Switch';


const SkillsTypingAnimation = ({currentSection}) => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isSwitchOn, setIsSwitchOn] = useState(true);


  useEffect(() => {
    if (!isSwitchOn) {
        setDisplayedSkills(skills);
        return;
      }
    if (currentSection !== 'about') {
      return;
    }  
    if (currentSkillIndex >= skills.length) {
      return;
    }

    const currentSkill = skills[currentSkillIndex].example;
    let typingSpeed = 150;

    const handleTyping = () => {
      if (isTyping) {
        if (currentText.length < currentSkill.length) {
          setCurrentText(currentSkill.substring(0, currentText.length + 1));
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setDisplayedSkills((prevSkills) => [...prevSkills, skills[currentSkillIndex]]);
            setCurrentText('');
            setCurrentSkillIndex((prevIndex) => prevIndex + 1);
            setIsTyping(true);
          }, 1000); // Wait for 1 second before starting the next skill
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [currentText, isTyping, currentSkillIndex,currentSection]);

    const handleToggle = () => {
        setIsSwitchOn(!isSwitchOn);
    };
  return (
    <div className=" min-w-[65vw] flex flex-col items-center justify-center mt-4 text-white">
      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="text-2xl flex-grow text-center">Current Skills:</h2>
        <Switch isOn={isSwitchOn} handleToggle={handleToggle} />
      </div>

      <ul className="list-disc list-inside text-lg">
        {displayedSkills.map((skill, index) => (
          <li key={index} className="font-mono flex items-center">
            <span className="mr-2">{skill.icon}</span>
            {skill.example}
          </li>
        ))}
        {currentText && (
          <li className="font-mono flex items-center">
            <span className="mr-2">{skills[currentSkillIndex].icon}</span>
            {currentText}
          </li>
        )}
      </ul>
    </div>
  );
};

export default SkillsTypingAnimation;