import React from 'react'
import { motion } from 'framer-motion'
const Marquee = () => {
  return (


    <div className='w-full py-10  rounded-tl-xl rounded-tr-xl bg-indigo-400 '>
        <div className="text-white border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
          <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:20}} className='text-[8vw] leading-none font-["Founders_Grotesk_X-Condensed"] -mb-[1vw] pt-1 font-semibold '>FOSSter 2025 • Explore. Build. Share. • Open Source for All •</motion.h1>
          <motion.h1   initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:20}}  className='text-[8vw] leading-none font-["Founders_Grotesk_X-Condensed"] -mb-[1vw] pt-1 font-semibold'>FOSSter 2025 • Explore. Build. Share. • Open Source for All •</motion.h1>
          <motion.h1   initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:20}}  className='text-[8vw] leading-none font-["Founders_Grotesk_X-Condensed"] -mb-[1vw] pt-1 font-semibold'>FOSSter 2025 • Explore. Build. Share. • Open Source for All •</motion.h1>

        </div>
        
    </div>
  )
}

export default Marquee