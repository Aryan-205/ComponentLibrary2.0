import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ModeSelector() {
  const [isSystem, setIsSystem] = useState(true);

  return (
    <div className="flex items-center justify-center h-screen bg-white border rounded-xl">
      <div className="relative">
        {/* Toggle Container */}
        <div 
          className="relative w-[360px] h-16 bg-gray-200 rounded-full cursor-pointer shadow-lg border border-neutral-300 overflow-hidden"
          onClick={() => setIsSystem(!isSystem)}
        >
          {/* Animated Black Slider */}
          <motion.div
            className="absolute top-0 left-0 h-full w-1/2 bg-black rounded-full flex items-center justify-center"
            animate={{
              x: isSystem ? 0 : '100%'
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <span className="text-white text-xl font-light">
              <AnimatePresence mode='wait'>
              {isSystem
              ?  <motion.span initial={{opacity:0,y:-10}} animate={{opacity:1,y:0, transition:{duration:0.3}}} exit={{opacity:0,y:-10, transition:{duration:0.3}}}>
                  System
                </motion.span>
              : <motion.span initial={{opacity:0,y:-10}} animate={{opacity:1,y:0, transition:{duration:0.3}}} exit={{opacity:0,y:-10, transition:{duration:0.3}}}>
                  Manual
                </motion.span>
              }
              </AnimatePresence>
            </span>
          </motion.div>

          {/* Static Labels */}
          <div className="absolute inset-0 flex">
            <div className="w-1/2 flex items-center justify-center">
              <span 
                className={`text-xl font-light transition-colors duration-300 ${
                  isSystem ? 'text-transparent' : 'text-gray-700'
                }`}
              >
                System
              </span>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <span 
                className={`text-xl font-light transition-colors duration-300 ${
                  !isSystem ? 'text-transparent' : 'text-gray-700'
                }`}
              >
                Light
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}