import { BiTask } from "react-icons/bi";
import { LuFolder } from "react-icons/lu";
import { IoIosCloseCircle } from "react-icons/io";
import { FaRegNoteSticky } from "react-icons/fa6";
import { AnimatePresence, motion } from 'motion/react';
import { IoTrophyOutline, IoFlagOutline, IoCalendarClearOutline } from "react-icons/io5";
import { useState } from "react";

export default function ButtonPopup(){

  const [open, setOpen] = useState(false); 
  return (
    <div className="h-full w-full bg-white flex justify-center items-center border rounded-xl">
        <AnimatePresence>
          
          <motion.div 
            layout 
            layoutId="container"
            className={`w-fit h-fit border border-neutral-300 rounded-3xl cursor-pointer ${open ? 'bg-neutral-50' : ''}`}
            onClick={() => !open && setOpen(true)}
          >
            <div className="flex justify-between items-center w-full px-4 py-2 font-medium">
              <motion.p layout layoutId="text" onClick={() => !open && setOpen(true)}>
                Create New
              </motion.p>
              
              <AnimatePresence>
                {open && (
                  <motion.div
                    key="close-icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{duration:0.1, ease:"easeInOut"}}
                  >
                    <IoIosCloseCircle size={24} onClick={(e) => { e.stopPropagation(); setOpen(false); }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* DROPDOWN MENU: Conditionally rendered with AnimatePresence */}
            <AnimatePresence>
              {open && (
                <motion.div
                  key="menu-content"
                  className="w-full h-full rounded-3xl bg-white p-4 border border-neutral-300 grid grid-cols-3 gap-2 origin-center"
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {/* Menu items */}
                  <div className="flex flex-col justify-center items-center rounded-2xl hover:bg-neutral-100 p-2">
                    <LuFolder size={30} color="gray" /><p>Project</p>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-2xl hover:bg-neutral-100 p-2">
                    <BiTask size={30} color="gray" /><p>Task</p>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-2xl hover:bg-neutral-100 p-2">
                    <FaRegNoteSticky size={30} color="gray" /><p>Notes</p>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-2xl hover:bg-neutral-100 p-2">
                    <IoTrophyOutline size={30} color="gray" /><p>Goal</p>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-2xl hover:bg-neutral-100 p-2">
                    <IoFlagOutline size={30} color="gray" /><p>Milestone</p>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-2xl hover:bg-neutral-100 p-2">
                    <IoCalendarClearOutline size={30} color="gray" /><p>Reminder</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
    </div>
  )
}