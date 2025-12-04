// import { useState, useEffect } from 'react'
// import CardCarousel from './CardCarousel'
// import ProjectCard from './ProjectCard'

// export default function ProjectLayout({ children }) {
//     const layout = 'grid'
//     const router = useRouter()
//     const [projects, setProjects] = useState([])
//     const [isLoading, setIsLoading] = useState(true)
//     useEffect(() => {
//         const fetchProjects = async () => {
//             const response = await fetch('/projects.json')
//             const data = await response.json()
//             setProjects(data)
//             setIsLoading(false)
//         }

//         fetchProjects()
//     }, [])

//     const handlePress = (id) => {
//         console.log('pressed', id)
//         router.push(`/projects/${id}`)
//     }
//     return (
//         <div
//             className="z-10 flex flex-col justify-center align-center  py-12"
//             id="projects"
//         >
//             {isLoading && <p className="text-white">Loading projects...</p>}
//             <h1 className="flex text-2xl font-bold justify-center mb-4 text-white">
//                 Projects I&apos;ve Made:
//             </h1>
//             {layout === 'grid' ? (
//                 <div
//                     className={
//                         'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4'
//                     }
//                 >
//                     {projects?.map((project) => (
//                         <ProjectCard
//                             key={project.id}
//                             project={project}
//                             handlePress={handlePress}
//                         />
//                     ))}
//                 </div>
//             ) : (
//                 <CardCarousel projects={projects} handlePress={handlePress} />
//             )}
//         </div>
//     )
// }
"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useRouter } from 'next/navigation'
import DynamicIcon from './DynamicIcon'

export default function ProjectLayout() {
      const router = useRouter()
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('/projects.json')
            const data = await response.json()
            setProjects(data)
            setIsLoading(false)
        }

        fetchProjects()
    }, [])
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div id="projects" className="py-20">
      {/* Sophisticated section header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="inline-block">
          <h2 className=" text-5xl md:text-6xl font-bold text-grey-100 mb-2 tracking-tight">
            Selected Work
          </h2>
          <div className="h-1 w-20 bg-grey-600 rounded-full"></div>
        </div>
        <p className="mt-6 text-grey-400 text-lg md:text-xl font-light max-w-2xl">
          A curated collection of projects showcasing my skills.
        </p>
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-[90]" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className=" fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] bg-primary-900/95 h-fit md:max-h-[90%] flex flex-col sm:rounded-3xl overflow-hidden border border-grey-700/40 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <motion.div layoutId={`image-${active.name}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.more.images[0]}
                  alt={active.name}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      className="font-bold text-grey-100">
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-grey-400">
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.name}-${id}`}
                    href={`/projects/${active.id}`}
                    // target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-semibold bg-grey-600 hover:bg-grey-500 text-white transition-colors">
                    {'More Info'}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs md:text-sm lg:text-base max-h-60 md:max-h-96 pb-10 flex flex-col items-start gap-4 overflow-y-auto text-grey-400 [scrollbar-width:thin] [scrollbar-color:rgba(156,163,175,0.3)_transparent]">
                      {active.more.descriptions.slice(0, 2).map((paragraph, index) => (
                        <p key={index} className="leading-6">
                          {paragraph}
                        </p>
                      ))}
                      <p className="text-grey-300 font-medium mt-2 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 16 16 12 12 8"/>
                          <line x1="8" y1="12" x2="16" y2="12"/>
                        </svg>
                        Click "More Info" to read full details about this project
                      </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="px-6 mx-auto w-full max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((card, index) => (
          <motion.div
            layoutId={`card-${card.name}-${id}`}
            key={`card-${card.name}-${id}`}
            onClick={() => setActive(card)}
            className="relative flex flex-col bg-gradient-to-br from-primary-900/50 to-grey-900/50 backdrop-blur-sm rounded-3xl overflow-hidden cursor-pointer group hover:scale-[1.01] transition-all duration-700 ease-out border border-grey-700/30 hover:border-grey-600/50 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            {/* Image Container */}
            <motion.div layoutId={`image-${card.name}-${id}`} className="relative h-56 w-full overflow-hidden">
              <img
                width={400}
                height={300}
                src={card?.more.images[0] || ""}
                alt={card.name}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/30 via-grey-900/20 to-transparent" />
              
              {/* Hover overlay (subtle, neutral) */}
              <div className="absolute inset-0 bg-grey-800/0 group-hover:bg-grey-800/5 transition-all duration-700" />
            </motion.div>

            {/* Content Container */}
            <div className="p-6 flex flex-col gap-3">
              <motion.h3
                layoutId={`title-${card.name}-${id}`}
                className="font-light text-2xl text-grey-100 tracking-tight leading-tight">
                {card.name}
              </motion.h3>
              
              {/* <p className="text-grey-400 font-light text-base line-clamp-2 leading-relaxed">
                {card.more.descriptions[0]}
              </p> */}
              
              <div className="mt-auto pt-4">
                <span className="inline-flex items-center gap-2 text-grey-300 font-light text-sm tracking-wide group-hover:text-grey-100 group-hover:gap-3 transition-all duration-500">
                  <span>View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Lana Del Rey",
    name: "Summertime Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
                    her melancholic and cinematic music style. Born Elizabeth Woolridge
                    Grant in New York City, she has captivated audiences worldwide with
                    her haunting voice and introspective lyrics. <br /> <br />Her songs
                    often explore themes of tragic romance, glamour, and melancholia,
                    drawing inspiration from both contemporary and vintage pop culture.
                    With a career that has seen numerous critically acclaimed albums, Lana
                    Del Rey has established herself as a unique and influential figure in
                    the music industry, earning a dedicated fan base and numerous
                    accolades.
                  </p>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>Babu Maan, a legendary Punjabi singer, is renowned for his soulful
                    voice and profound lyrics that resonate deeply with his audience. Born
                    in the village of Khant Maanpur in Punjab, India, he has become a
                    cultural icon in the Punjabi music industry. <br /> <br />His songs
                    often reflect the struggles and triumphs of everyday life, capturing
                    the essence of Punjabi culture and traditions. With a career spanning
                    over two decades, Babu Maan has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                  </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>Metallica, an iconic American heavy metal band, is renowned for their
                    powerful sound and intense performances that resonate deeply with
                    their audience. Formed in Los Angeles, California, they have become a
                    cultural icon in the heavy metal music industry. <br /> <br />Their
                    songs often reflect themes of aggression, social issues, and personal
                    struggles, capturing the essence of the heavy metal genre. With a
                    career spanning over four decades, Metallica has released numerous hit
                    albums and singles that have garnered them a massive fan following
                    both in the United States and abroad.
                  </p>
      );
    },
  },
  {
    description: "Led Zeppelin",
    title: "Stairway To Heaven",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>Led Zeppelin, a legendary British rock band, is renowned for their
                    innovative sound and profound impact on the music industry. Formed in
                    London in 1968, they have become a cultural icon in the rock music
                    world. <br /> <br />Their songs often reflect a blend of blues, hard
                    rock, and folk music, capturing the essence of the 1970s rock era.
                    With a career spanning over a decade, Led Zeppelin has released
                    numerous hit albums and singles that have garnered them a massive fan
                    following both in the United Kingdom and abroad.
                  </p>
      );
    },
  },
  {
    description: "Mustafa Zahid",
    title: "Toh Phir Aao",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>"Aawarapan", a Bollywood movie starring Emraan Hashmi, is
                    renowned for its intense storyline and powerful performances. Directed
                    by Mohit Suri, the film has become a significant work in the Indian
                    film industry. <br /> <br />The movie explores themes of love,
                    redemption, and sacrifice, capturing the essence of human emotions and
                    relationships. With a gripping narrative and memorable music,
                    "Aawarapan" has garnered a massive fan following both in
                    India and abroad, solidifying Emraan Hashmi's status as a
                    versatile actor.
                  </p>
      );
    },
  },
];
