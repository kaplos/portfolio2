'use client'
import React, { useRef, useEffect, useState } from 'react'
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
    useSpring,
} from 'framer-motion'
import DynamicIcon from './DynamicIcon'
import { LightRays } from '@/components/ui/light-rays'
import { Dock, DockIcon } from '@/components/ui/dock'
import { MorphingText } from '@/components/ui/morphing-text'
const texts = [
    'Full-Stack Developer',
    'Front-End Developer',
    'Back-End Developer',
    'Mobile App Developer',
    'Software Engineer',
    'Tech Enthusiast',
]
export default function HeroSection({ isMobile = false }) {
    const { scrollY } = useScroll()
    const heroRef = useRef(null)
    const dockRef = useRef(null)
    const descriptionRef = useRef(null)
    const [hiImAbsolute, setHiImAbsolute] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)
    useEffect(() => {
        const getWindowWidth = () => {
            setWindowWidth(window.innerWidth)
        }
        getWindowWidth()
    }, [])

    const descriptionOpacity = useTransform(scrollY, [0, 100], [1, 0])
    const hiImMaxWidth = useTransform(scrollY, [40, 160], ['600px', '0px'])
    const descriptionMaxWidth = useTransform(
        scrollY,
        [120, 160],
        ['600px', '0px']
    )

    const gapTransform = useTransform(scrollY, [0, 120], ['1.25rem', '0rem'])
    const gapSpring = useSpring(gapTransform, { damping: 24, stiffness: 160 })
    const hiImOpacity = useTransform(scrollY, [0, 100], [1, 0])

    useMotionValueEvent(descriptionOpacity, 'change', (v) => {
        setHiImAbsolute(v < 0.02)
    })

    const nameX = useTransform(scrollY, (value) => {
        if (isMobile) return 0
        value = Math.max(40, Math.min(120, value))
        const offset =
            windowWidth / 2 -
            (heroRef?.current?.getBoundingClientRect().width || 0) / 2 -
            30
        return -offset * ((value - 40) / (120 - 40))
    })

    const dockY = useTransform(scrollY, [0, 120], ['16px', '-16px'])

    return (
        <motion.section
            className={`flex flex-col h-screen ${
                isMobile ? 'relative' : 'fixed'
            } top-0 left-0 w-full ${hiImAbsolute && !isMobile ? 'gap-5' : ''}`}
            initial={{ justifyContent: 'center', alignItems: 'center' }}
        >
            <motion.div
                className="flex flex-col px-4"
                style={isMobile ? {} : { x: nameX }}
                ref={heroRef}
            >
                <motion.div
                    className="flex items-center"
                    style={isMobile ? {} : { gap: gapSpring }}
                >
                  <motion.span
    className="pointer-events-none bg-clip-text text-neutral-400 text-start text-5xl md:text-8xl leading-none font-semibold  inline-block overflow-hidden whitespace-nowrap"
    style={
        isMobile
            ? {}
            : {
                  opacity: hiImOpacity,
                  maxWidth: hiImMaxWidth,
              }
    }
>
    Hi, Were 
</motion.span>

                    <motion.span
                    className="pointer-events-none text-white  text-5xl md:text-8xl leading-[0.9] font-semibold ml-0 tracking-[-0.02em]"
                        style={{ textShadow: '0 0 40px rgba(156,163,175,0.1)' }}
                        transition={{ duration: 0.6 }}
                    >
                        Candm inc 
                    </motion.span>
                </motion.div>

                <motion.p
                    ref={descriptionRef}
                    className="mt-8 ml-1 text-lg md:text-2xl text-grey-400 max-w-2xl font-light tracking-tight leading-relaxed"
                    style={
                        isMobile
                            ? {}
                            : {
                                  opacity: descriptionOpacity,
                                  maxWidth: descriptionMaxWidth,
                                  position: hiImAbsolute
                                      ? 'absolute'
                                      : 'relative',
                                  left: hiImAbsolute ? '-10000px' : 0,
                                  pointerEvents: hiImAbsolute ? 'none' : 'auto',
                              }
                    }
                >
                    
                    <MorphingText
                        texts={texts}
                        className="text-primary-600 font-normal italic inline-block align-baseline ml-2 mr-6"
                    />creating A-Z from first sketch to launch
                </motion.p>

                <motion.div
                    className=""
                    style={isMobile ? {} : { y: dockY }}
                    animate={
                        isMobile
                            ? {}
                            : { marginTop: hiImAbsolute ? '0px' : '24px' }
                    }
                >
                    {/* <Dock
                        ref={dockRef}
                        className="bg-grey-900/40 border-grey-700/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                    >
                        <DockIcon className="hover:bg-accent-500/10 hover:text-accent-300 transition-all duration-500 ease-out">
                            <a
                                href="https://www.linkedin.com/in/haym-mallakh-58216b1b8/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <DynamicIcon
                                    name={'linkedin'}
                                    className="text-grey-400 hover:text-grey-100 transition-colors"
                                />
                            </a>
                        </DockIcon>
                        <DockIcon className="hover:bg-accent-500/10 hover:text-accent-300 transition-all duration-500 ease-out">
                            <a
                                href="https://github.com/kaplos"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <DynamicIcon
                                    name={'github'}
                                    className="text-grey-400 hover:text-grey-100 transition-colors"
                                />
                            </a>
                        </DockIcon>
                    </Dock> */}
                </motion.div>
            </motion.div>

            <LightRays className="opacity-40" />
        </motion.section>
    )
}

// I’ve built a wide range of projects: web apps, mobile apps, internal business tools, CRMs, dashboards, e-commerce features, real-estate utilities, game logic, and more. A lot of my work includes React, motion-driven UI, Supabase, Node.js, and custom APIs. Whether it’s setting up data models, handling real-time updates, building reliable backend routes, or polishing the front-end interactions, I try to make every part feel consistent and well thought out.
