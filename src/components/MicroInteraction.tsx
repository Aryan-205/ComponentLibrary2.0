import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";
import { TbReload } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp, IoLockClosedOutline, IoLockOpenOutline } from "react-icons/io5";
import { useState } from "react";

export default function MicroInteraction(){

  const [locked, setLocked] = useState(false)
  const [menu, setMenu] = useState(false)

  return (
    <>
      <div className="w-full h-screen bg-white flex justify-center items-center border rounded-xl">
        <div className="flex justify-center items-center rounded-2xl border-2 border-neutral-200 p-2">
          <motion.div className="hover:bg-neutral-200 rounded-lg p-2">
            <motion.span>
              <FaArrowLeftLong size={20}/>
            </motion.span>
          </motion.div>
          <motion.div className="hover:bg-neutral-200 rounded-lg p-2">
            <motion.span>
              <FaArrowRightLong size={20}/>
            </motion.span>
          </motion.div>
          <motion.div initial="rest" whileTap="tap" className="hover:bg-neutral-200 rounded-lg p-2">
            <motion.span animate="rest" variants={{tap:{rotate:100, transition:{duration:0.3, ease:"easeOut"}}}}><TbReload size={20}/></motion.span>
          </motion.div>
          <motion.div onClick={()=>setMenu(p=>!p)} className="hover:bg-neutral-200 rounded-lg p-2">
            <motion.span>
              {
                menu ? <IoIosMenu size={20} /> : <IoCloseSharp size={20}/>
              }
            </motion.span>
          </motion.div>
          <motion.div onClick={()=>setLocked(p=>!p)} className="hover:bg-neutral-200 rounded-lg p-2">
            <motion.span>
              {
                locked ? <IoLockClosedOutline size={20} /> : <IoLockOpenOutline size={20} />
              }
            </motion.span>
          </motion.div>
        </div>
      </div>
    </>
  )
}