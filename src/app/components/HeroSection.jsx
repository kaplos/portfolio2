'use client'
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import NavBar from './NavBar'
import DynamicIcon from './DynamicIcon'
import { motion } from 'framer-motion'
import { Particles } from '@/components/ui/particles'
import { Dock,DockIcon, } from '@/components/ui/dock'
import { LightRays } from '@/components/ui/light-rays'
import { MorphingText } from '@/components/ui/morphing-text'
const texts = [
    'Full-Stack Developer',
    "Front-End Developer",
    "Back-End Developer",
    "Mobile App Developer",
    'Software Engineer',
    'Tech Enthusiast',


]
export default function HeroSection() {
    return (
        <motion.main className="flex flex-col h-screen justify-center items-center bg-black">
            <div className="flex flex-col">
              {/* <div>
                <MorphingText texts={texts} className={'text-white text-md'}/>
              </div> */}
                <motion.div className="flex gap-4">

                  <motion.span
                          className="pointer-events-none  bg-clip-text text-start text-8xl leading-none font-semibold text-white dark:from-white dark:to-slate-900/10"
                           initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                          exit={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1 }}
                      >
                          {' '}
                          Hi, I'm
                      </motion.span>{' '}
                  <motion.span
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="pointer-events-none bg-gradient-to-b from-gray-800 to-gray-300/80 bg-clip-text  text-8xl leading-none font-semibold  text-transparent dark:from-white dark:to-slate-900/10"
                  >
                  
                      Chaim
                  </motion.span>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-4 text-lg text-gray-300"
                >
                    A full-stack developer creating A-Z from first sketch to
                    launch.
                </motion.p>
                   
                    <Dock>
                      <DockIcon>
                        <DynamicIcon name={'linkedin'} className=" text-white" />
                      </DockIcon>
                      <DockIcon>
                        <DynamicIcon name={'github'} className=" text-white" /> 
                      </DockIcon>
                    </Dock>
            </div>
            <LightRays />
        </motion.main>
    )
}

// I’ve built a wide range of projects: web apps, mobile apps, internal business tools, CRMs, dashboards, e-commerce features, real-estate utilities, game logic, and more. A lot of my work includes React, motion-driven UI, Supabase, Node.js, and custom APIs. Whether it’s setting up data models, handling real-time updates, building reliable backend routes, or polishing the front-end interactions, I try to make every part feel consistent and well thought out.
