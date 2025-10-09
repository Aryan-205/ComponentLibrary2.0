// import { useState } from "react"
// import { CiHeart } from "react-icons/ci";
// import {AnimatePresence, motion} from 'motion/react'

// export default function LikeButton(){

//   const [like, setLike] = useState(0)

//   return (
//     <>
//       <div className="w-full h-screen bg-white relative flex justify-center items-center">
//         <button 
//           onClick={()=>setLike(p=>p+1)}
//           className="rounded-3xl bg-slate-50 hover:bg-slate-100 active:bg-slate-50 border border-neutral-300 px-4 py-2 flex justify-center items-center gap-1 w-f"
//         > 
//         <AnimatePresence>
//           <CiHeart size={18} strokeWidth={0.8}  color={like ? "#f81980" : "000000"}/>
//           <motion.span 
//             className="font-light"
//             initial={{y:-10}}
//             animate={{y:0}}
//             exit={{y:-10}}
//             transition={{duration:1}}
            
//           >
//             {like>0? like : ""} 
//           </motion.span>
//           <span className="font-light">
//             Like
//             <motion.span
//               initial={{y:-10}}
//               animate={{y:0}}
//               transition={{duration:1}}
//             >
//               {like>0 ? "s" : ""}
//             </motion.span>
//           </span>
//         </AnimatePresence>
//         </button>
//       </div>
//     </>
//   )
// }

import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion"; // Correct import for Framer Motion

export default function LikeButton() {
  const [like, setLike] = useState(0);

  // Define the common animation properties
  // const animationProps = {
  //   initial: { y: 10, opacity: 0 },
  //   animate: { y: 0, opacity: 1 },
  //   exit: { y: -10, opacity: 0 },
  //   transition: { duration: 0.3 }, // Shorter duration for a snappier feel
  // };

  // Variant for the 'like' count - a different element for each number
  // const countVariants = {
  //   initial: { y: 10, opacity: 0 },
  //   animate: { y: 0, opacity: 1 },
  //   exit: { y: -10, opacity: 0 },
  // };

  return (
    <>
      <div className="w-full h-screen bg-white relative flex justify-center items-center">
        <button
          onClick={() => setLike(p => p + 1)}
          style={{width: like > 0 ? "110px" : "90px"}}
          className="rounded-3xl bg-slate-50 hover:bg-neutral-100 active:bg-slate-50 border border-neutral-300 px-4 py-2 flex justify-between items-center "
        >
          <CiHeart
            size={18}
            strokeWidth={0.8}
            color={like ? "#f81980" : "000000"}
          />
          <AnimatePresence mode="wait">
            {
              like > 0 && (
              <motion.span
                className="font-light inline-block relative"
                key={like} 
                initial={{y:10, opacity:0}}
                animate={{y:0, opacity:1}}
                exit={{y:-10, opacity:0}}
                transition={{ duration: 0.1 }}
              >
                {like}
              </motion.span>
            )}
          </AnimatePresence>
          <span className="font-light">
            Like
            <AnimatePresence mode="wait">
              {like > 0 && (
                <motion.span
                  initial={{y:10}}
                  animate={{y:0}}
                  exit={{y:-10}}
                  transition={{ duration: 0.8 }}
                >
                  s
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </button>
      </div>
    </>
  );
}