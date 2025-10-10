import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ModeSelector() {
  const [isSystem, setIsSystem] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
              {isSystem ? 'System' : 'Light'}
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