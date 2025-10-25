import { useState } from "react";
import { IoFolderOpenOutline } from "react-icons/io5";
import { motion } from 'motion/react'

export default function Button3D1() {
  const [isOpen, setIsOpen] = useState(false);

  // --- Background gradient for the entire page ---
  const metallicBg = {
    backgroundImage: [
      // White highlight near top
      `radial-gradient(ellipse at 50% 10%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.00) 40%)`,
      // Subtle bluish tone in center
      `radial-gradient(circle at 50% 45%, rgba(116,125,140,0.35) 0%, rgba(116,125,140,0.18) 30%, rgba(116,125,140,0.00) 60%)`,
      // Deep navy base
      `linear-gradient(180deg, #191D25 0%, #15181C 100%)`
    ].join(", "),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={metallicBg}
    >
      {/* Container to hold folder + glow */}
      <div className="relative h-80 w-80 flex items-center justify-center">
        
        {/* Blue glow */}
        <div
          className={`absolute -bottom-24 w-40 h-32 rounded-full transition-opacity duration-300 blur-xl pointer-events-none `}
          style={{
            background: `radial-gradient(circle at 50% 20%, rgba(70, 95, 255, 0.85) 0%, rgba(0, 23, 170, 0.00) 80%)`,
            opacity: isOpen ? 1 : 0,
          }}
        />

        {/* --- Folder box --- */}
        <motion.div
          style={{
            boxShadow: "inset 0 0 12px 4px rgba(200,200,200,0.1)",
            perspective: "800px"
          }}
          className={`relative h-80 w-80 rounded-3xl bg-black/50 cursor-pointer ease-[cubic-bezier(0.22,1,0.36,1)] border border-b-0 border-neutral-600 flex-center`}
        >
          {/* inner */}
          <div className="absolute w-full h-30 top-2 flex justify-center ">
            <motion.div animate={{top: isOpen ? -32 : 0}} transition={{duration:0.4, type:"spring", stiffness:400, damping:10, mass:0.4}} className="h-20 w-40 bg-gradient-to-b from-neutral-200 to-white shadow-[inset_0_2px_4px_4px_rgba(255,255,255,1)] rounded-xl absolute z-5 text-gray-400 text-center">Designed</motion.div>
            <motion.div animate={{top: isOpen ? -12 : 0}} transition={{duration:0.4,delay:0.05, type:"spring", stiffness:400, damping:10, mass:0.4}} className="h-20 w-56 bg-gradient-to-b from-neutral-200 to-white shadow-[inset_0_2px_4px_4px_rgba(255,255,255,1),0_2px_2px_2px_rgba(0,0,0,0.2)] rounded-2xl absolute z-10 text-gray-400 text-center">By</motion.div>
            <motion.div animate={{top: isOpen ? 12 : 24}} transition={{duration:0.4,delay:0.1, type:"spring", stiffness:400, damping:10, mass:0.4}} className="h-40 w-72 bg-gradient-to-b from-neutral-200 to-white shadow-[inset_0_2px_4px_4px_rgba(255,255,255,1),0_2px_2px_2px_rgba(0,0,0,0.2)] border-t border-white rounded-2xl absolute z-20 text-center text-gray-400 pt-2">Aryan Bola</motion.div>
          </div>


          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className={`absolute h-80 w-80 rounded-3xl cursor-pointer ease-[cubic-bezier(0.22,1,0.36,1)] flex-center z-50`}
            style={{
              transformStyle: "preserve-3d",
              backgroundImage: [
                `radial-gradient(ellipse at 50% 10%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.00) 100%)`,
                `radial-gradient(circle at 50% 25%, rgba(116,125,140,0.3) 0%, rgba(116,125,140,0.15) 30%, rgba(116,125,140,0.00) 80%)`,
                `linear-gradient(180deg, #191D25 0%, #15181C 100%)`
              ].join(", "),
              boxShadow: isOpen
                ? "inset 0 4px 12px 2px rgba(0,0,0,0.7)"
                : "inset 0 0 2px 2px rgba(0,0,0,1)",
            }}
            animate={{
              y: isOpen ? 56 : 0,
              rotateX: isOpen ? -35 : 0, // tilt forward
              scale: isOpen ? 1.1 : 1, // subtle scaling for realism
            }}
            transition={{duration:0.3, ease:"easeIn",type:"spring", stiffness:200, damping:8, mass:0.6}}
          >
            { isOpen && <div className="border-t border-neutral-600 w-full absolute top-2 h-72 rounded-2xl shadow-[0_-8px_8px_4px_rgba(210,210,255,0.1)]"/>}
            <IoFolderOpenOutline size={60} color="#DEB24C" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}