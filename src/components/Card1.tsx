import { BsLightningCharge } from "react-icons/bs";
import { FiClock, FiMap } from "react-icons/fi";
import {hover, motion} from 'motion/react'

export default function Card1() {
  return (
    <div className="h-screen w-full flex-center rounded-xl bg-neutral-100 border gap-40">
      <motion.div whileHover="hover" className="rounded-2xl shadow-lg border border-neutral-200 bg-white p-4 flex-center flex-col w-80 gap-4">
        <p className="text-6xl font-bold text-black text-wrap flex-center items-center">Mountain Hike</p>
        <div className="w-full relative py-12">
          <motion.div className="rounded-xl bg-white p-1 top-0 absolute z-5 shadow-md border">
            <img src="https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg" className="rounded-lg h-20 w-16" alt="" />
          </motion.div>
          <motion.div animate variants={{hover:{x:90}}} transition={{duration:0.3, type:"spring", mass:0.6, stiffness:200, damping:12}} className="rounded-xl bg-white p-1 top-0 ml-4 absolute z-10 shadow-md border">
            <img src="https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg" className="rounded-lg h-20 w-16" alt="" />
          </motion.div>
          <motion.div animate variants={{hover:{x:180}}} transition={{duration:0.3, type:"spring", mass:0.6, stiffness:200, damping:12}} className="rounded-xl bg-white p-1 top-0 ml-8 absolute z-20 shadow-md border">
            <img src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg" className="rounded-lg h-20 w-16" alt="" />
          </motion.div>
        </div>
        <div className="flex-col flex gap-2">
          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center gap-2">
              <FiClock color="#6b7280"/>
              <p className="text-sm text-gray-500">8 Hours</p>
            </div>
            <div className="flex items-center gap-2">
              <FiMap color="#6b7280"/>
              <p className="text-sm text-gray-500">8 km</p>
            </div>
            <div className="flex items-center gap-2">
              <BsLightningCharge color="#6b7280"/>
              <p className="text-sm text-gray-500">Medium Level</p>
            </div>
          </div>
          <p className="text-base text-gray-500">Hike on a mountain blends physical challenge with natural beauty, offering stunning views.</p>
        </div>
      </motion.div>


      <motion.div whileHover="hover" className="rounded-2xl shadow-lg border border-neutral-200 bg-white p-4 flex-center flex-col w-80 gap-4">
        <p className="text-6xl font-bold text-black text-wrap flex-center items-center">Mountain Hike</p>
        <div className="w-full relative py-12">
          <motion.div animate variants={{hover:{rotate:10}}} transition={{duration:0.3, type:"spring", mass:0.6, stiffness:200, damping:12}} className="rounded-xl bg-white p-1 top-0 absolute z-5 shadow-md border origin-top">
            <img src="https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg" className="rounded-lg h-20 w-16" alt="" />
          </motion.div>
          <motion.div animate variants={{hover:{rotate:-20, x:60, y:-20}}} transition={{duration:0.3, type:"spring", mass:0.6, stiffness:200, damping:12}} className="rounded-xl bg-white p-1 top-0 ml-4 absolute z-10 shadow-md border origin-top-right">
            <img src="https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg" className="rounded-lg h-20 w-16" alt="" />
          </motion.div>
          <motion.div animate variants={{hover:{rotate:-40, x:120, y:-50}}} transition={{duration:0.3, type:"spring", mass:0.6, stiffness:200, damping:12}} className="rounded-xl bg-white p-1 top-0 ml-8 absolute z-20 shadow-md border origin-top-right">
            <img src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg" className="rounded-lg h-20 w-16" alt="" />
          </motion.div>
        </div>
        <div className="flex-col flex gap-2">
          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center gap-2">
              <FiClock color="#6b7280"/>
              <p className="text-sm text-gray-500">8 Hours</p>
            </div>
            <div className="flex items-center gap-2">
              <FiMap color="#6b7280"/>
              <p className="text-sm text-gray-500">8 km</p>
            </div>
            <div className="flex items-center gap-2">
              <BsLightningCharge color="#6b7280"/>
              <p className="text-sm text-gray-500">Medium Level</p>
            </div>
          </div>
          <p className="text-base text-gray-500">Hike on a mountain blends physical challenge with natural beauty, offering stunning views.</p>
        </div>
      </motion.div>
    </div>
  )
}
