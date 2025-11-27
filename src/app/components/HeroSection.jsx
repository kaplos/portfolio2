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

export default function HeroSection() {
    const { scrollY } = useScroll()
    const heroRef = useRef(null)
    const dockRef = useRef(null)
    const descriptionRef= useRef(null)
    const [hiImAbsolute, setHiImAbsolute] = useState(false)
    const [descriptionSize, setDescriptionSize] = useState({ w: 0, h: 0 })
    // useMotionValueEvent(scrollY, 'change', (latest) => {
    //     console.log('Page scroll: ', latest)
    // })
    // fade first, then collapse its layout space slightly after fade starts
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
        // threshold can be adjusted; when nearly invisible mark as absolute
        console.log('hiImOpacity:', v, v < 0.02)
        setHiImAbsolute(v < 0.02)
        setDescriptionSize(v < 0.02)
    })
//      useLayoutEffect(() => {
//     if (!descriptionRef.current) return
//     const update = () => {
//       const r = descriptionRef.current.getBoundingClientRect()
//       setDescriptionSize({ w: Math.round(r.width), h: Math.round(r.height) })
//     }
//     update()
//     const ro = new ResizeObserver(update)
//     ro.observe(descriptionRef.current)
//     return () => ro.disconnect()
//   }, [])
    // description fades with the heading
    // move the entire block to the left after heading has mostly collapsed
    // const nameX = useTransform(scrollY, [40, 120], [0, -window.innerWidth / 2])
    const nameX = useTransform(scrollY, (value) => {
        value = Math.max(40, Math.min(120, value))
        const offset =
            window.innerWidth / 2 -
            (heroRef?.current?.getBoundingClientRect().width || 0) / 2 -
            30
        return -offset * ((value - 40) / (120 - 40))
    })
    const dockX = useTransform(scrollY, (value) => {
        value = Math.max(40, Math.min(108, value))
        const offset =
            window.innerWidth / 2 -
            (dockRef?.current?.getBoundingClientRect().width || 0) / 2 -
            30
        return -offset * ((value - 40) / (108 - 40))
    })

    // new: lift the dock up (closer to the name) as soon as fade starts
    // adjust ranges/values to taste
    const dockY = useTransform(scrollY, [0, 120], ['16px', '-16px'])

    return (
        <motion.main
            className={`flex flex-col h-screen bg-black fixed top-0 left-0 w-full ${hiImAbsolute ? 'gap-5' : ''  }`}
            initial={{ justifyContent: 'center', alignItems: 'center' }}
        >
            <motion.div
                className="flex flex-col "
                style={{ x: nameX }}
                ref={heroRef}
            >
                <motion.div
                    className={`flex items-center`}
                    style={{ gap: gapSpring }}
                >
                    {/* first span fades then collapses its width — use inline-block + overflow to release space */}
                    <motion.span
                        className="pointer-events-none bg-clip-text text-start text-8xl leading-none font-semibold text-white inline-block overflow-hidden whitespace-nowrap"
                        style={{ opacity: hiImOpacity, maxWidth: hiImMaxWidth }}
                        transition={{ duration: 0.25 }}
                    >
                        Hi, I'm
                    </motion.span>

                    {/* when the first span collapses, this span will move left into the start of the container */}
                    <motion.span
                        className="pointer-events-none bg-gradient-to-b from-gray-800 to-gray-300/80 bg-clip-text text-8xl leading-none font-semibold text-transparent ml-0"
                        transition={{ duration: 0.6 }}
                    >
                        Chaim
                    </motion.span>
                </motion.div>
                
                <motion.p
                    ref={descriptionRef}
                    className="mt-4 ml-2 text-lg text-gray-300 max-w-3xl"
                    style={{
                        opacity: descriptionOpacity,
                        maxWidth: descriptionMaxWidth,
                        // toggle out of flow once hidden so the second span takes the space
                        position: hiImAbsolute ? 'absolute' : 'relative',
                        left: hiImAbsolute ? '-10000px' : 0,
                        // keep it non-interactive when absolute
                        pointerEvents: hiImAbsolute ? 'none' : 'auto',
                    }}
                >
                    A full-stack developer creating A-Z from first sketch to
                    launch.
                </motion.p>

                <motion.div className="" style={{ y: dockY}} animate={{ marginTop: hiImAbsolute ? '0px' : '16px' }}>
                    <Dock ref={dockRef}>
                        <DockIcon>
                            <DynamicIcon
                                name={'linkedin'}
                                className="text-white"
                            />
                        </DockIcon>
                        <DockIcon>
                            <DynamicIcon
                                name={'github'}
                                className="text-white"
                            />
                        </DockIcon>
                    </Dock>
                </motion.div>
            </motion.div>

            <LightRays />
        </motion.main>
    )
}

// I’ve built a wide range of projects: web apps, mobile apps, internal business tools, CRMs, dashboards, e-commerce features, real-estate utilities, game logic, and more. A lot of my work includes React, motion-driven UI, Supabase, Node.js, and custom APIs. Whether it’s setting up data models, handling real-time updates, building reliable backend routes, or polishing the front-end interactions, I try to make every part feel consistent and well thought out.
