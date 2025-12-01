import React from 'react';
import { FaJsSquare, FaReact,FaDiscord   } from 'react-icons/fa';
import { RiTailwindCssFill,RiNextjsFill    } from 'react-icons/ri';
import { CiDark,CiLight     } from 'react-icons/ci';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt,FaShopify  } from 'react-icons/fa';




const iconMap = {
  'js': FaJsSquare,
  'tailwind': RiTailwindCssFill ,
  'nextjs': RiNextjsFill ,
  'react': FaReact,
  'dark': CiDark ,
  'css': FaCss3Alt ,
  '.liquid':FaShopify,
  'html': FaHtml5,
  'light': CiLight,
  'github': FiGithub,
  'linkedin': FaLinkedinIn,
  'discord': FaDiscord,


};

export default function DynamicIcon({ name,className="",size=17}) {
  // console.log(className);
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return(
    <IconComponent title={name} className={[className,"text-neutral-300 "].join(" ")} fontSize={size} />
    );
};
