'use client'
import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import ProjectLayout from './components/ProjectLayout';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import NavBar from './components/NavBar';
import VelocityScrollTools from './components/VelocityScrollTools';
import { motion,useScroll,useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
export default function Page () {
  const [isMobile, setIsMobile] = useState(false);
   useEffect(() => {
          const checkMobile = () => {
              setIsMobile(window.innerWidth <= 768)
          }   
          window.addEventListener('resize', checkMobile)
          checkMobile()
          return () => window.removeEventListener('resize', checkMobile)
      }, [])
  const { scrollY } = useScroll();
  const [currentSection, setCurrentSection] = useState('home');
  const sections = ['home', 'about', 'projects', 'contact'];
  
  const leftDivWidth = useTransform(scrollY, [0, 160], ['100%', '33.3333%']);
  const rightDivWidth = useTransform(scrollY, [0, 160], ['100%', '66.6667%']);
  const maxWidth = useTransform(scrollY, [0, 160], ['100vw', '70vw']);
  const rightMarginLeft = useTransform(scrollY, [0, 160], ['0%', '33.3333%']);
  
  const leftWidthSmoothed = useSpring(leftDivWidth, { damping: 25, stiffness: 150 });
  const rightWidthSmoothed = useSpring(rightDivWidth, { damping: 25, stiffness: 150 });
  const maxWidthSmoothed = useSpring(maxWidth, { damping: 25, stiffness: 150 });
  const rightMarginSmoothed = useSpring(rightMarginLeft, { damping: 25, stiffness: 150 });

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const options = { root: null, threshold: 0.5 };
    const observer = new IntersectionObserver(callback, options);

    const sectionElements = sections.map(id => document.getElementById(id));
    sectionElements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionElements.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className='overflow-y-auto bg-[#101010] scrollbar-thumb-red-200 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-red-500'>
        <motion.div
          style={isMobile ?  {}:{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' } }
          className="w-full"
        >
          <motion.div
            className="flex-shrink-0  h-[90vh]"
            style={isMobile ? {} : { width: leftWidthSmoothed, minWidth: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            layout
          >
            <HeroSection isMobile={isMobile} />
          </motion.div>

          <motion.div
            className="flex-shrink-0 "
            style={isMobile ? {} : {
              width: rightWidthSmoothed,
              minWidth: 0,
              marginLeft: rightMarginSmoothed
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            layout
          >
              <VelocityScrollTools />
              <AboutMe/>
              <ProjectLayout />
              <ContactForm />
          </motion.div>
        </motion.div>
    </div>
  );
};
