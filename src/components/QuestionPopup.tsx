import { IoMdClose } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import {motion,AnimatePresence} from 'motion/react'
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { useState } from "react";

export default function QuestionPopup(){

  const [open, setOpen] = useState(false)

  return (
    <div className="h-screen w-full bg-white border  flex justify-center items-center relative rounded-xl">
      <AnimatePresence mode="popLayout">
        <motion.div
          animate={{
            width: open ? "320px" : "60px",
            height: open ? "140px" : "60px",
            borderColor: !open ? '#3F3F46' : '#888888'
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 27
          }}
          className="rounded-2xl bg-neutral-100 border-2 absolute right-20 bottom-20 flex justify-center items-center overflow-hidden"
        >
          {!open && 
            <motion.div
              className="w-full h-full hover:bg-neutral-200 overflow-hidden flex justify-center items-center"
              >
                <LuMessageCircle size={30} onClick={()=>setOpen(true)}/> 
            </motion.div>
          }
          {
            open &&
              <div className="flex flex-col justify-between p-4 h-full w-full">
                <div className="flex items-center justify-start w-full gap-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.1,
                      ease: 'linear',
                      delay: 0.1
                    }}
                    className="rounded-full h-[42px] w-[42px] bg-gradient-to-b from-yellow-400 to-purple-500 flex items-center justify-center overflow-hidden"
                  />
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.1,
                      ease: 'linear',
                      delay: 0.1
                    }}
                    className="text-lg truncate text-black flex flex-col justify-center"
                  >
                    Got a Question ?
                    <br />
                    <span className="text-sm text-gray-500">Ask Up</span>
                  </motion.p>
                </div>
                <motion.div
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  transition={{
                    duration: 0.1,
                    ease: 'linear',
                    delay: 0.1,
                    staggerChildren: 0.1
                  }}
                  className="flex flex-col mt-4"
                >
                  <motion.a whileHover={{x:10}} transition={{duration:0.1}} href="" className="hover:text-green-500 w-fit flex gap-2 items-center"><FaXTwitter /> DM me on X</motion.a>
                  <motion.a whileHover={{x:10}} transition={{duration:0.1}} href="" className="hover:text-blue-500 w-fit flex gap-2 items-center"><IoMailOutline />Send me an email</motion.a>
                </motion.div>
                <div className="absolute bottom-4 right-4">
                  <motion.button
                    key="close-button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center hover:bg-neutral-200 place-self-end h-[32px] w-[32px] rounded-md"
                  >
                    <IoMdClose size={20} />
                  </motion.button>
                </div>
              </div>
          }
        </motion.div>
      </AnimatePresence>
      </div>
  )
}
