import React from 'react';
import { FaJsSquare, FaReact   } from 'react-icons/fa';
import { RiTailwindCssFill   } from 'react-icons/ri';

const iconMap = {
  'js': FaJsSquare,
  'tailwind': RiTailwindCssFill ,
  'react': FaReact,
  // Add more icons here
};

const DynamicIcon = ({ name }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent  fontSize={30}/>;
};

export default DynamicIcon;