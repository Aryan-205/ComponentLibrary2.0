"use client";

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react';

export default function CopyText() {

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <motion.div 
      // layout
      className='rounded-full w-50 h-12 bg-gray-100 shadow-md flex justify-center items-center gap-4'>
      <AnimatePresence mode='popLayout' initial={false}>
      {
        !copied ? (
          <motion.div
            key="input-state"
            initial={{opacity: 0, scale: 0.95, filter: "blur(10px)"}} 
            animate={{opacity: 1, scale: 1, filter: "blur(0px)"}} 
            exit={{opacity: 0, scale: 0.95, filter: "blur(10px)"}} 
            transition={{duration:0.3 ,ease:"easeOut"}}   
            className='flex justify-between items-center gap-4 w-full pr-1 pl-4'
          >
            <p
              className='capitalize text-gray-500 font-semibold'
            >
              a9ah0dvsvn
            </p>
            <button
              className='rounded-full py-2 px-4 bg-white shadow-md cursor-pointer transition-all duration-200 active:scale-97' 
              onClick={() => setCopied(true)}
            >
              Copy
            </button>
          </motion.div>
        ) : (
            <motion.div 
              key="copied-state"
              initial={{opacity: 0, scale: 0.95, filter: "blur(10px)"}} 
              animate={{opacity: 1, scale: 1, filter: "blur(0px)"}} 
              exit={{opacity: 0, scale: 0.95, filter: "blur(10px)"}} 
              transition={{duration:0.3 ,ease:"easeOut"}} 
              className='w-full h-full flex justify-center items-center relative overflow-hidden rounded-full'>
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{duration:2 ,ease:"linear"}} 
                className='absolute inset-0 bg-gray-200 z-0'
              />
              <p className='capitalize text-gray-500 font-semibold relative z-10'>Copied</p>
            </motion.div>
        )
      }
      </AnimatePresence>
    </motion.div>
  )
}