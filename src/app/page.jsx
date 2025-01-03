'use client'
import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import {AboutMe} from './components/AboutMe';
import {CardCarousel} from './components/CardCarousel';
import ContactForm from './components/ContactForm';
import NavBar from './components/NavBar';

const Page = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const sections = ['home', 'about', 'projects', 'contact'];

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
      <section id="home" className="">
        <HeroSection />
      </section>
      <section id="about" className="">
        <AboutMe currentSection={currentSection}/>
      </section>
      <section id="projects" className="">
        <CardCarousel />
      </section>
      <section id="contact" className="">
        <ContactForm />
      </section>
    </div>
  );
};

export default Page;