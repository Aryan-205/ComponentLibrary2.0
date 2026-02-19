"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdLocationOn } from "react-icons/md";

const PIN_CX = 140;
const PIN_CY = 100;
const RIPPLE_R = 24;

export default function MapComponent() {
  return (
    <div className="relative w-80 h-80 bg-[#121212] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-end p-8 font-sans">
      <MdLocationOn className="text-white text-2xl" />
      {/* Background Grid/Map Pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(circle at 70% 30%, black, transparent 80%)'
        }}
      />

      {/* Wake SVG animations - ripples + radar sweep */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 320 320"
        fill="none"
      >
        <defs>
          <linearGradient id="wakeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
            <stop offset="60%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g style={{ transformOrigin: `${PIN_CX}px ${PIN_CY}px` }}>
          {/* Expanding ripple rings (wake circles) */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx={PIN_CX}
              cy={PIN_CY}
              r={RIPPLE_R}
              fill="none"
              stroke="rgb(59, 130, 246)"
              strokeWidth={1.5}
              initial={{ scale: 0.3, opacity: 0.7 }}
              animate={{ scale: 3.5, opacity: 0 }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                delay: i * 0.8,
                ease: "easeOut",
              }}
              style={{ transformOrigin: `${PIN_CX}px ${PIN_CY}px` }}
            />
          ))}

          {/* Rotating dashed arc (radar/sonar wake sweep) */}
          <motion.circle
            cx={PIN_CX}
            cy={PIN_CY}
            r={RIPPLE_R * 2.5}
            fill="none"
            stroke="url(#wakeGrad)"
            strokeWidth={1.5}
            strokeDasharray="25 115"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            style={{ transformOrigin: `${PIN_CX}px ${PIN_CY}px` }}
          />
        </g>
      </svg>

      {/* Pulsing Map Point */}
      <div className="absolute top-1/3 right-1/4">
        <div className="relative flex items-center justify-center">
          {/* Outer Pulse 1 */}
          <motion.div
            className="absolute h-12 w-12 rounded-full bg-blue-500/30"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
          />
          
          {/* Outer Pulse 2 */}
          <motion.div
            className="absolute h-12 w-12 rounded-full bg-blue-500/20"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeOut" }}
          />

          {/* Main Blue Dot */}
          <div className="relative h-4 w-4 bg-blue-500 rounded-full border-2 border-white shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10">
        <h2 className="text-white text-xl font-medium tracking-wide uppercase">
          Brooklyn
        </h2>
        <p className="text-gray-400 text-sm font-mono mt-1">
          40.6782° N, 73.9442° W
        </p>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </div>
  );
};
