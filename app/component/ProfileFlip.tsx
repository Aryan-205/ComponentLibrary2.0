"use client"
import React, { useRef, useState } from 'react'
import { FaCircleHalfStroke } from "react-icons/fa6";
import { motion } from 'motion/react';


export default function ProfileFlip() {

  const [isFlipped, setIsFlipped] = useState(false);
  const audioRef = useRef(null);

  return (
    <div className='h-screen w-full flex justify-center items-center bg-white text-black'>
      <audio ref={audioRef} src="/flipsound.wav" preload="auto" hidden/>
      <div 
        style={{
          backgroundImage: `linear-gradient(to right, black 50%, transparent 50%), 
                            linear-gradient(to right, black 50%, transparent 50%), 
                            linear-gradient(to bottom, black 50%, transparent 50%), 
                            linear-gradient(to bottom, black 50%, transparent 50%)`,
          backgroundPosition: `left top, left bottom, left top, right top`,
          backgroundRepeat: `repeat-x, repeat-x, repeat-y, repeat-y`,
          backgroundSize: `20px 1px, 20px 1px, 1px 20px, 1px 20px` 
        }}
        className='flex gap-6 p-6 justify-start  w-[40rem]'
      >
        <div className='w-40 h-40 bg-gray-100 p-1 rounded-xl border'>
          <motion.img 
            key={isFlipped ? "me" : "sukuna"} // Key ensures the animation re-runs on state change
            src={isFlipped ? "/me.jpeg" : "/sukuna.jpg"} 
            alt="profile" 
            className='w-full h-full object-cover rounded-lg' 
            animate={{ 
              x: [0, -3, 3, -3, 3, 0], 
              y: [0, 2, -2, 2, -2, 0] 
            }}
            transition={{ duration: 0.2 }} 
          />
        </div>
        <div className='flex flex-col justify-between py-2'>
          <div  
            className='flex flex-col cursor-pointer active:scale-95 hover:text-gray-400 transition-all duration-300' 
            onClick={() => {
              setIsFlipped(!isFlipped);
              
              if (audioRef.current) {
                // 1. Reset sound to the start so it plays even if clicked rapidly
                audioRef.current.currentTime = 0;
                audioRef.current.play();
          
                // 2. Stop the sound after 200ms (adjust this value for "shortness")
                setTimeout(() => {
                  if (audioRef.current) {
                    audioRef.current.pause();
                  }
                }, 200); 
              }
            }}
          >
            <FaCircleHalfStroke size={20} color='black' className={`${isFlipped ? "rotate-180" : ""}`} />
          </div>
          <div className='flex flex-col gap-2'>
            <div>
              <motion.p 
                key={isFlipped ? "sukuna" : "aryan"} // Key ensures the animation re-runs on state change
                animate={{ 
                  x: [0, -3, 3, -3, 3, 0], 
                  y: [0, 2, -2, 2, -2, 0] 
                }}
                transition={{ duration: 0.2 }} // Short duration creates the "hit" or "shake" effect
                className='text-black text-2xl font-bold'
              >
                {isFlipped ? "Aryan Bola" : "Sukuna"}
              </motion.p>
            </div>
            <motion.p 
              key={isFlipped ? "sukuna" : "aryan"} // Key ensures the animation re-runs on state change
              animate={{ 
                x: [0, -3, 3, -3, 3, 0], 
                y: [0, 2, -2, 2, -2, 0] 
              }}
              transition={{ duration: 0.2 }} 
              className='text-black text-sm'
            >
              { isFlipped ? "Web Developer" : "King of the Apocalypse"}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}
