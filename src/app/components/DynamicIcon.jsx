import React from 'react';
import { FaJsSquare, FaReact,FaDiscord   } from 'react-icons/fa';
import { RiTailwindCssFill   } from 'react-icons/ri';
import { CiDark,CiLight     } from 'react-icons/ci';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt,FaShopify  } from 'react-icons/fa';




const iconMap = {
  'js': FaJsSquare,
  'tailwind': RiTailwindCssFill ,
  'react': FaReact,
  'dark': CiDark ,
  'css': FaCss3Alt ,
  '.liquid':FaShopify,
  'html': FaHtml5,
  'light': CiLight,
  'github': FiGithub,
  'linkedin': FaLinkedinIn,
  'discord': FaDiscord,


  // Add more icons here
};

const DynamicIcon = ({ name,className=""}) => {
  console.log(className);
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return(
    <IconComponent title={name} className={className} fontSize={30} />
    // <div className="icon-container" title={name}>
    //  <span className="hover-text">{name}</span> 
    // </div>
    );
};

export default DynamicIcon;