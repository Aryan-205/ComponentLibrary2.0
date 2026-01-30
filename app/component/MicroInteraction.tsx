import { motion } from 'motion/react'

export default function MicroInteraction() {
  return (
    <div className="w-full h-screen bg-neutral-100 flex-center rounded-xl border">
      <div className="rounded-2xl p-2 flex gap-2 border-2 bg-white shadow-lg">
        <motion.button whileHover="hover" className="hover:bg-neutral-100 p-2 rounded-lg"><LeftArrow/></motion.button>
        <motion.button whileHover="hover" className="hover:bg-neutral-100 p-2 rounded-xl"><RightArrow/></motion.button>
        <motion.button whileHover="hover" className="hover:bg-neutral-100 p-2 rounded-xl"><ReloadIcon/></motion.button>
        <motion.button initial="normal" whileHover="hover" className="hover:bg-neutral-100 p-2 rounded-xl"><LockIcon/></motion.button>
      </div>
    </div>
  )
}

const LeftArrow = () => (
  <motion.svg
    animate
    variants={{hover:{scale:1.2,x:10}}}
    transition={{duration:0.18, type:"spring", damping:12, stiffness:500, mass:0.6}}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="16"
    fill="none"
    viewBox="0 0 20 16"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 8h17.5M12 15l7-7-7-7"
    ></path>
  </motion.svg>
)

const RightArrow = () => (
  <motion.svg
    animate
    variants={{hover:{scale:1.2,x:-10}}}
    transition={{duration:0.18, type:"spring", damping:12, stiffness:500, mass:0.6}}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="16"
    fill="none"
    viewBox="0 0 20 16"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 8H1.5M8 15 1 8l7-7"
    ></path>
  </motion.svg>
)

const ReloadIcon = () => (
  <motion.svg
    animate
    variants={{hover:{scale:1.2,rotate:40}}}
    transition={{duration:0.18, type:"spring", damping:12, stiffness:500, mass:0.6}}
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16.932 10.044a8 8 0 1 1-9.925-8.788c3.9-1 7.935 1.007 9.425 4.747"
    ></path>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16.999 1.003v5h-5"
    ></path>
  </motion.svg>
)

const LockIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 18 22"
  >
    <motion.path
      variants={{
        normal: {
          d: "M7 13v2M3 9V5a4 4 0 0 1 8 2M2 18h10a1 1 0 0 0 1-1v-7a1 1 0 1 0-1-1H2a1 1 0 0 0-1 1v7a1 1 0 1 0 1 1"
        },
        hover: {
          d: "M7 13v2M3 9V5a4 4 0 0 1 8 0M2 18h10a1 1 0 0 0 1-1v-7a1 1 0 1 0-1-1H2a1 1 0 0 0-1 1v7a1 1 0 1 0 1 1",scale:1.2
        },
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 12,
        duration: 0.3,
      }}

      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </motion.svg>
);