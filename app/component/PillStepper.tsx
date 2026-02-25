import { useState } from "react";
import {motion} from 'motion/react'

export default function PillStepper() {
  const [a, setA] = useState(3); 
  const total = 6;

  return (
    <div className="w-full h-full flex justify-center items-center bg-neutral-100 rounded-xl border">
      <div className="rounded-full w-40 h-12 border border-black overflow-hidden flex shadow-lg">

        <motion.button
          animate={{ flex: a }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.8,
          }}
          onClick={() => setA((p) => Math.max(0, p - 1))}
          className={`h-full bg-black text-white font-bold ${a == 0 ? "hidden" : "w-full" }`}
        >
          –
        </motion.button>

        <motion.button
          onClick={() => setA((p) => Math.min(total, p + 1))}
          animate={{ flex: total - a }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
            mass: 0.8,
          }}
          className={`h-full bg-white font-bold ${a == total ? "hidden" : "w-full"}`}
        >
          +
        </motion.button>
      </div>
    </div>
  );
}