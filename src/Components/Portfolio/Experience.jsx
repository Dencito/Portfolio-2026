import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import ExperienceData from './ExperienceData';
import Projects from './Projects';
export const Experience = () => {
    useEffect(() => {
        window.document.title = 'Mis experiencias - Denar Padilla Gutierrez'
    }, [])
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 1 }}
            transition={{ duration: 0.6 }} id='about-me' className="scroll-div w-full lg:w-2/3 rounded-lg flex flex-col gap-5 bg-[#181818] overflow-auto">
            <ExperienceData/>
            <Projects/>

        </motion.div>
    )
}
