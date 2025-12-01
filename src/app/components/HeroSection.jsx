'use client'
import React, { useRef, useEffect, useState } from 'react'
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
    useMotionValue,
    useSpring,
} from 'framer-motion'
import DynamicIcon from './DynamicIcon'
import { LightRays } from '@/components/ui/light-rays'
import { Dock, DockIcon } from '@/components/ui/dock'
import { useLayoutEffect } from 'react'

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
        console.log('hiImOpacity:', v, v < 0.02)
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

    const dockX = useTransform(scrollY, (value) => {
        if (isMobile) return 0
        value = Math.max(40, Math.min(108, value))
        const offset =
            window.innerWidth / 2 -
            (dockRef?.current?.getBoundingClientRect().width || 0) / 2 -
            30
        return -offset * ((value - 40) / (108 - 40))
    })

    const dockY = useTransform(scrollY, [0, 120], ['16px', '-16px'])

    return (
        <motion.section
            className={`flex flex-col h-screen ${
                isMobile ? 'relative ' : 'fixed'
            } top-0 left-0 w-full ${
                hiImAbsolute && !isMobile ? 'gap-5' : ''
            }`}
            initial={{ justifyContent: 'center', alignItems: 'center' }}
        >
            <motion.div
                className="flex flex-col "
                style={isMobile ? {} : { x: nameX }}
                ref={heroRef}
            >
                <motion.div
                    className={`flex items-center ${isMobile ? 'justify-center' : ''}`}
                    style={isMobile ? {} : { gap: gapSpring }}
                >
                    <motion.span
                        className="pointer-events-none bg-clip-text text-start text-5xl md:text-8xl leading-none font-semibold text-neutral-300 inline-block overflow-hidden whitespace-nowrap"
                        style={
                            isMobile
                                ? {}
                                : { opacity: hiImOpacity, maxWidth: hiImMaxWidth }
                        }
                        transition={{ duration: 0.25 }}
                    >
                        Hi, I'm
                    </motion.span>

                    <motion.span
                        className="pointer-events-none bg-gradient-to-b from-gray-800 to-gray-300/80 bg-clip-text text-5xl md:text-8xl leading-none font-semibold text-transparent ml-0"
                        transition={{ duration: 0.6 }}
                    >
                        Chaim
                    </motion.span>
                </motion.div>

                <motion.p
                    ref={descriptionRef}
                    className="mt-4 ml-2 text-sm md:text-lg text-gray-300 max-w-3xl"
                    style={
                        isMobile
                            ? {}
                            : {
                                  opacity: descriptionOpacity,
                                  maxWidth: descriptionMaxWidth,
                                  position: hiImAbsolute ? 'absolute' : 'relative',
                                  left: hiImAbsolute ? '-10000px' : 0,
                                  pointerEvents: hiImAbsolute ? 'none' : 'auto',
                              }
                    }
                >
                    A full-stack developer creating A-Z from first sketch to
                    launch.
                </motion.p>

                <motion.div
                    className=""
                    style={isMobile ? {} : { y: dockY }}
                    animate={
                        isMobile
                            ? {}
                            : { marginTop: hiImAbsolute ? '0px' : '16px' }
                    }
                >
                    <Dock ref={dockRef}>
                        <DockIcon>
                            <DynamicIcon
                                name={'linkedin'}
                                className="text-neutral-300"
                            />
                        </DockIcon>
                        <DockIcon>
                            <DynamicIcon
                                name={'github'}
                                className="text-neutral-300"
                            />
                        </DockIcon>
                    </Dock>
                </motion.div>
            </motion.div>

            <LightRays />
        </motion.section>
    )
}

// I’ve built a wide range of projects: web apps, mobile apps, internal business tools, CRMs, dashboards, e-commerce features, real-estate utilities, game logic, and more. A lot of my work includes React, motion-driven UI, Supabase, Node.js, and custom APIs. Whether it’s setting up data models, handling real-time updates, building reliable backend routes, or polishing the front-end interactions, I try to make every part feel consistent and well thought out.
