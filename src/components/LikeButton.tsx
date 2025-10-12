import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { AnimatePresence, motion } from "motion/react";

export default function LikeButton() {
  const [like, setLike] = useState(0);

  return (
    <>
      <div className="w-full h-full bg-white relative flex justify-center items-center border rounded-xl">
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