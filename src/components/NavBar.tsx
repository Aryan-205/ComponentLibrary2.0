import { AnimatePresence,motion } from "motion/react";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar(){

  const [nav, setNav] = useState(false)

  return (
    <>
    <div className="w-full h-screen rounded-xl bg-white border relative overflow-hidden">
      <motion.button onClick={()=>setNav(p=>!p)} className="top-4 right-4 p-2 bg-neutral-100 rounded-xl border absolute z-10">{nav ? <IoCloseOutline size={30}/> : <RxHamburgerMenu size={30}/>}</motion.button>
      <AnimatePresence mode="wait">
      <motion.div initial={{right:-100}} animate={{right: nav ? 0 : -300}} exit={{right:-100}} transition={{duration:0.4, ease:"easeInOut"}} className="absolute h-full w-60 bg-neutral-200 top-0 z-0 p-4 flex flex-col gap-2 text-2xl border-t-2 border-white text-gray-500 font-light">
        <p>Home</p>
        <p>About</p>
        <p>Contact Us</p>
        <p>Gallery</p>
      </motion.div>
      </AnimatePresence>
    </div>
    </>
  )
}