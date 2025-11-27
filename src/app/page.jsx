'use client'
import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import {AboutMe} from './components/AboutMe';
import ProjectLayout from './components/ProjectLayout';
import ContactForm from './components/ContactForm';
import NavBar from './components/NavBar';
import VelocityScrollTools from './components/VelocityScrollTools';
import { motion,useScroll,useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
export default function Page () {
  const { scrollY } = useScroll();
  const [currentSection, setCurrentSection] = useState('home');
  const sections = ['home', 'about', 'projects', 'contact'];
  // left (hero) shrinks earlier; right waits until hero has mostly shrunk,
  // so visually the hero splits first and then the rest slides into place.
  const leftDivWidth = useTransform(scrollY, [0, 160], ['100%', '33.3333%']);
  const rightDivWidth = useTransform(scrollY, [0, 160], ['100%', '66.6667%']);
  const maxWidth = useTransform(scrollY, [0, 160], ['100vw', '70vw']);
  
  // Calculate how much to shift the right div RIGHT as it shrinks from the left
  const rightMarginLeft = useTransform(scrollY, [0, 160], ['0%', '33.3333%']);
  
  const leftWidthSmoothed = useSpring(leftDivWidth, { damping: 25, stiffness: 150 });
  const rightWidthSmoothed = useSpring(rightDivWidth, { damping: 25, stiffness: 150 });
  const maxWidthSmoothed = useSpring(maxWidth, { damping: 25, stiffness: 150 });
  const rightMarginSmoothed = useSpring(rightMarginLeft, { damping: 25, stiffness: 150 });
  useMotionValueEvent(maxWidth, 'change', (latest) => {
      console.log('Max Width changed to: ', latest);
    });
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
          console.log(entry.target.id); // Log the ID of the intersecting element
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
    <div className=' overflow-y-auto scrollbar-thumb-red-200 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-red-500 bg-slate-900'>
      <NavBar currentSection={currentSection} setCurrentSection={setCurrentSection} />
        <motion.div
          /* allow stacking (wrap) when both are 100% initially, then split smoothly */
          style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}
          className="w-full bg-blue-500"
        >
          <motion.div
            className="bg-red-500 flex-shrink-0"
            /* use smoothed motion values for a nice continuous split */
            style={{ width: leftWidthSmoothed, minWidth: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            layout
          >
            <HeroSection />
          </motion.div>

          <motion.div
            className="bg-green-500 flex-shrink-0"
            style={{ 
              width: rightWidthSmoothed, 
              maxWidth: maxWidthSmoothed, 
              minWidth: 0,
              marginLeft: rightMarginSmoothed
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            layout
          >
             <AboutMe currentSection={currentSection}/>
             <VelocityScrollTools />
             {/* <CardCarousel /> */}
             <ProjectLayout />
             <ContactForm />
          </motion.div>
        </motion.div>
    </div>
  );
};
