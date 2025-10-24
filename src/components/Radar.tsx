import { motion } from 'motion/react'

export default function Radar() {
  return (
    <div className="h-screen w-full flex-center flex-col gap-4 bg-[#2C2C2C]">
      <div className="rounded-full bg-[#393B3C] h-80 w-80  flex-center relative overflow-hidden">
        <div className='h-2 w-2 bg-[#3AE483] absolute top-11 right-20 rounded-full animate-pulse'/>
        <div className='h-2 w-2 bg-[#3AE483] absolute top-21 right-24 rounded-full animate-pulse'/>
        <div className='h-2 w-2 bg-[#3AE483] absolute bottom-20 right-60 rounded-full animate-pulse'/>
        <div className='w-full h-full absolute z-10 animate-spin-slow'>
          <img src="/radar.png" className='absolute inset-0 w-full h-full ' alt="" />
          <div className='w-40 h-1 bg-[#3AE483] absolute right-0 bottom-[49%] z-20 rounded-full'/>
        </div>
        <div className="rounded-full flex-center w-60 h-60 border border-black shadow-[inset_0_0_2px_1px_rgba(169,169,169,0.25)]">
          <div className="rounded-full w-40 h-40 flex-center border border-black shadow-[inset_0_0_2px_1px_rgba(169,169,169,0.25)]">
            <div className='w-8 h-8 bg-[#3AE483] rounded-full relative z-40'/>
            <motion.div
              className="border-2 bg-transparent border-[#3AE483] absolute rounded-full z-10 origin-center w-2 h-2"
              animate={{ width:"360px", height:"360px" ,opacity:0}}
              transition={{ duration: 2.4, ease: "easeOut", repeat: Infinity }}
            />
          </div>
        </div>
      </div>
      <div className='text-center text-white uppercase font-extralight text-xl'>
        <p className='text-[#3AE483]'>Radar</p>
        <p>By Aryan Bola</p>
      </div>
    </div>
  )
}
