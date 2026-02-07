import React from 'react'
import Image from 'next/image'
import './animatedButton3.css'

export default function AnimatedButton3() {
  return (
    <div className="flex gap-8 justify-center items-center h-screen w-full">
      {[1, 2, 3].map((i) => (
        <button key={i} className="animated-btn rounded-4xl overflow-hidden">
          <Image 
            src="/sukuna.jpg" 
            alt="background" 
            fill 
            sizes="200px"
          />
          <Image 
            src="/me.jpeg" 
            alt="foreground" 
            fill 
            sizes="200px"
          />
        </button>
      ))}
    </div>
  )
}