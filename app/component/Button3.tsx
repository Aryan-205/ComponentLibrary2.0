import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { motion } from "motion/react";

export default function Button3() {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      className="relative flex items-center h-12 px-2 overflow-hidden rounded-full cursor-pointer bg-transparent min-w-[160px]"
    >
      <motion.div
        variants={{
          initial: { width: "36px", height: "36px", left: "6px" },
          hover: { width: "100%", height: "100%", left: "0px" },
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.4, ease: "easeInOut" }}
        className="absolute top-1/2 -translate-y-1/2 bg-black rounded-full z-0"
      />

      <div className="relative z-10 flex items-center w-full gap-3">
        <motion.div
          className="relative flex items-center justify-center w-9 h-9 shrink-0"
        >
          <span
            className="absolute inset-0 flex items-center justify-center"
          >
            <FaArrowRight size={18} color="white" />
          </span>
        </motion.div>

        <motion.span
          variants={{
            initial: { color: "#000000" },
            hover: { color: "#ffffff" },
          }}
          className="text-lg font-medium"
        >
          Submit
        </motion.span>
      </div>
    </motion.button>
  );
}
