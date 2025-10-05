// import { IoTrophyOutline,IoFlagOutline,IoCalendarClearOutline } from "react-icons/io5";
// import { BiTask } from "react-icons/bi";
// import { LuFolder } from "react-icons/lu";
// import { IoIosCloseCircle } from "react-icons/io";
// import { FaRegNoteSticky } from "react-icons/fa6";
// import { AnimatePresence,motion } from 'motion/react';
// import { useState } from "react";

// export default function App() {

//   const [open, setOpen] = useState(false)

//   return (
//     <div className="h-screen w-full bg-white flex justify-center items-center">
//       <AnimatePresence>
//       <motion.div className="w-fit h-fit border bg-neutral-50 rounded-3xl border-neutral-300 cursor-pointer">
//         <div className="flex justify-between items-center w-full px-4 py-2 font-medium">
//           <p onClick={()=>setOpen(true)} >Create New</p>
//           {
//             open && <IoIosCloseCircle size={24} onClick={()=>setOpen(false)}/>
//           }
//         </div>
//         { open && 
//           <motion.div className="w-full h-full rounded-3xl bg-white p-4 border border-neutral-300 grid grid-cols-3 gap-2">
//             <div className="flex flex-col justify-center items-center">
//               <LuFolder size={30} color="gray"/>
//               <p>Project</p>
//             </div>
//             <div className="flex flex-col justify-center items-center">
//               <BiTask size={30} color="gray" />
//               <p>Tesk</p>
//             </div>
//             <div className="flex flex-col justify-center items-center">
//               <FaRegNoteSticky size={30} color="gray"/>
//               <p>Notes</p>
//             </div>
//             <div className="flex flex-col justify-center items-center">
//               <IoTrophyOutline size={30} color="gray"/>
//               <p>Goal</p>
//             </div>
//             <div className="flex flex-col justify-center items-center">
//               <IoFlagOutline size={30} color="gray"/>
//               <p>Milestone</p>
//             </div>
//             <div className="flex flex-col justify-center items-center">
//               <IoCalendarClearOutline size={30} color="gray"/>
//               <p>Reminder</p>
//             </div>
//           </motion.div>
//         }
//       </motion.div>
//       </AnimatePresence>
//     </div>
//   )
// }

import { IoTrophyOutline, IoFlagOutline, IoCalendarClearOutline } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { LuFolder } from "react-icons/lu";
import { IoIosCloseCircle } from "react-icons/io";
import { FaRegNoteSticky } from "react-icons/fa6";
import { AnimatePresence, motion } from 'motion/react';
import { useState } from "react";

export default function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-white flex justify-center items-center">
      <AnimatePresence>
        <motion.div 
          className="w-fit h-fit border bg-neutral-50 rounded-3xl border-neutral-300 cursor-pointer"
          layout
        >
          <div className="flex justify-between items-center w-full px-4 py-2 font-medium">
            <p onClick={() => setOpen(true)}>Create New</p>
            {
              open && <IoIosCloseCircle size={24} onClick={() => setOpen(false)} />
            }
          </div>
          <AnimatePresence>
            {open &&
              <motion.div
                className="w-full h-full rounded-3xl bg-white p-4 border border-neutral-300 grid grid-cols-3 gap-2"
                initial={{ opacity: 0, scale: 0.1}}
                animate={{ opacity: 1, scale: 1}}
                exit={{ opacity: 0, scale: 0.1}}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                layout
              >
                <div className="flex flex-col justify-center items-center rounded-2xl hover:bg-neutral-100 p-2">
                  <LuFolder size={30} color="gray" />
                  <p>Project</p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-2xl hover:bg-neutral-100 p-2">
                  <BiTask size={30} color="gray" />
                  <p>Task</p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-2xl hover:bg-neutral-100 p-2">
                  <FaRegNoteSticky size={30} color="gray" />
                  <p>Notes</p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-2xl hover:bg-neutral-100 p-2">
                  <IoTrophyOutline size={30} color="gray" />
                  <p>Goal</p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-2xl hover:bg-neutral-100 p-2">
                  <IoFlagOutline size={30} color="gray" />
                  <p>Milestone</p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-2xl hover:bg-neutral-100 p-2">
                  <IoCalendarClearOutline size={30} color="gray" />
                  <p>Reminder</p>
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}