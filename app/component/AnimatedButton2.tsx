import { motion} from 'motion/react'

export default function AnimatedButton2() {
  return (
    <div className="flex-center h-screen w-full bg-neutral-100">
      <motion.button whileHover="hover" className="rounded-full px-12 py-4 border-2 border-black text-2xl flex-center relative overflow-hidden">
        <motion.p initial={{color:"#000000"}} variants={{hover:{color:"#ffffff"}}} className='relative z-10'>Submit</motion.p>
        <motion.div initial={{left:40, top:80}} variants={{hover:{top: 40}}} transition={{duration:0.3, ease:"easeInOut"}} className='w-24 h-24 rounded-full bg-black absolute'/>
        <motion.div initial={{left:40, top:-100}} variants={{hover:{top: -50}}} transition={{duration:0.3, ease:"easeInOut"}} className='w-24 h-24 rounded-full bg-black absolute'/>
        <motion.div initial={{left:-100, top:10}} variants={{hover:{left: 0}}} transition={{duration:0.3, ease:"easeInOut"}} className='w-20 h-20 rounded-full bg-black absolute'/>
        <motion.div initial={{left:-100, top:-40}} variants={{hover:{left: -30}}} transition={{duration:0.3, ease:"easeInOut"}} className='w-20 h-20 rounded-full bg-black absolute'/>
        <motion.div initial={{right:-100, top:10}} variants={{hover:{right: 0}}} transition={{duration:0.3, ease:"easeInOut"}} className='w-20 h-20 rounded-full bg-black absolute'/>
        <motion.div initial={{right:-100, top:-40}} variants={{hover:{right: -30}}} transition={{duration:0.3, ease:"easeInOut"}} className='w-20 h-20 rounded-full bg-black absolute'/>
      </motion.button>
    </div>
  )
}
