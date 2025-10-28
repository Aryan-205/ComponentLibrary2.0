import {motion} from 'motion/react'

export default function MicroInteractions2() {
  return (
    <div className="w-full h-screen flex-center gap-8 border bg-neutral-200">
      <motion.button whileHover="hover" whileTap="tap" className="shadow-md bg-neutral-100 hover:bg-white text-gray-500 transition-colors flex-center gap-2 px-4 py-2"><Bin/> Delete</motion.button>
      <button className="shadow-md bg-neutral-100 hover:bg-white text-gray-500 transition-colors flex-center gap-2 px-4 py-2">Call</button>
      <button className="shadow-md bg-neutral-100 hover:bg-white text-gray-500 transition-colors flex-center gap-2 px-4 py-2">Copy</button>
      <button className="shadow-md bg-neutral-100 hover:bg-white text-gray-500 transition-colors flex-center gap-2 px-4 py-2">Search</button>
    </div>
  )
}


const Bin = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <motion.path
      animate
      variants={{hover:{scale:4},tap:{scale:2}}}
      fill="#6b7280"
      fillRule="evenodd"
      d="M10.31 2.25h3.38c.217 0 .406 0 .584.028a2.25 2.25 0 0 1 1.64 1.183c.084.16.143.339.212.544l.111.335.03.085a1.25 1.25 0 0 0 1.233.825h3a.75.75 0 1 1 0 1.5h-17a.75.75 0 0 1 0-1.5h3.09a1.25 1.25 0 0 0 1.173-.91l.112-.335c.068-.205.127-.384.21-.544a2.25 2.25 0 0 1 1.641-1.183c.178-.028.367-.028.583-.028m-1.302 3a3 3 0 0 0 .175-.428l.1-.3c.091-.273.112-.328.133-.368a.75.75 0 0 1 .547-.395 3 3 0 0 1 .392-.009h3.29c.288 0 .348.002.392.01a.75.75 0 0 1 .547.394c.021.04.042.095.133.369l.1.3.039.112q.06.164.136.315z"
      clipRule="evenodd"
    ></motion.path>
    <path
      fill="#6b7280"
      d="M5.915 8.45a.75.75 0 1 0-1.497.1l.464 6.952c.085 1.282.154 2.318.316 3.132.17.845.455 1.55 1.047 2.104.592.553 1.315.793 2.17.904.822.108 1.86.108 3.146.108h.88c1.284 0 2.323 0 3.145-.108.854-.111 1.578-.35 2.17-.904.591-.553.877-1.26 1.046-2.104.162-.813.23-1.85.316-3.132l.464-6.952a.75.75 0 0 0-1.497-.1l-.46 6.9c-.09 1.347-.154 2.285-.294 2.99-.137.685-.327 1.047-.6 1.303-.274.256-.648.422-1.34.512-.713.093-1.653.095-3.004.095h-.774c-1.35 0-2.29-.002-3.004-.095-.692-.09-1.066-.256-1.34-.512-.273-.256-.463-.618-.6-1.302-.14-.706-.204-1.644-.294-2.992z"
    ></path>
    <path
      fill="#6b7280"
      d="M9.425 10.254a.75.75 0 0 1 .821.671l.5 5a.75.75 0 0 1-1.492.15l-.5-5a.75.75 0 0 1 .671-.821m5.15 0a.75.75 0 0 1 .671.82l-.5 5a.75.75 0 0 1-1.492-.149l.5-5a.75.75 0 0 1 .821-.671"
    ></path>
  </motion.svg>
);

