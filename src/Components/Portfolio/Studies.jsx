import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { Skills } from './Skills';

export const Studies = () => {
  useEffect(() => {
    window.document.title = 'Estudios y Habilidades - Denar Padilla Gutierrez'
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 1 }}
      transition={{ duration: 0.6 }} id='about-me' className="scroll-div w-full lg:w-2/3 rounded-lg flex flex-col gap-5  p-5 py-10 bg-[#181818] overflow-auto">
      <h2 className='text-2xl font-normal text-white'>Habilidades <span className='text-[#ff4191]'>tecnicas💻</span></h2>
      <Skills/>

    </motion.div>
  )
}
