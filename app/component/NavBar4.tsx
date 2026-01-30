// import { useState, type ReactElement } from "react";
// import { FiFolder } from "react-icons/fi";
// import { GrHomeRounded } from "react-icons/gr";
// import { MdOutlinePerson } from "react-icons/md";
// import {motion} from 'motion/react'

// interface activeTab {
//   name: string;
//   icon: ReactElement;
// }

// const tabs: activeTab[] = [
//     { name: "home", icon: <GrHomeRounded size={20} color="currentColor" /> },
//     { name: "profile", icon: <MdOutlinePerson size={20} color="currentColor" /> },
//     { name: "files", icon: <FiFolder size={20} color="currentColor" /> },
// ];
// export default function NavBar4() {

//   const [active, setActive] = useState("home");

//   return (
//     <div className="flex-center h-screen w-full bg-neutral-100 rounded-xl border">
//       <div className="rounded-2xl shadow-md bg-white p-2">
//         <div className="rounded-full bg-black p-1 flex items-center gap-4 h-full relative">
//           {
//             tabs.map((i,index)=>(
//               <motion.div key={index} layoutId={index + i.name} layout onClick={()=>setActive(i.name)} className={`flex items-center gap-2  px-4 py-2 cursor-pointer ${active === i.name ? "bg-white rounded-full" : ""}`}>
//                 <span className={active=== i.name ? "text-black" : "text-white"}>{i.icon}</span>
//                 {
//                   active === i.name && <p className="text-lg">{i.name}</p>
//                 }
//               </motion.div>
//             ))
//           }
//         </div>
//       </div>
//     </div>
//   )
// }


import { useState, type ReactElement } from "react";
import { FiFolder } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlinePerson } from "react-icons/md";
// Import motion correctly from 'framer-motion'
import { motion } from 'framer-motion'; 

// ... interface and tabs array remain the same ...
interface activeTab {
  name: string;
  icon: ReactElement;
}

const tabs: activeTab[] = [
    // Note: Icons use currentColor which will be set by the parent text class
    { name: "home", icon: <GrHomeRounded size={20} color="currentColor" /> },
    { name: "profile", icon: <MdOutlinePerson size={20} color="currentColor" /> },
    { name: "files", icon: <FiFolder size={20} color="currentColor" /> },
];

export default function NavBar4() {

  const [active, setActive] = useState("home");

  return (
    <div className="flex-center h-screen w-full bg-neutral-100 rounded-xl border">
      <div className="rounded-2xl shadow-md bg-white p-2">
        {/* Parent must be relative to anchor the absolute background */}
        <div className="rounded-full bg-black p-1 flex items-center gap-4 h-full relative">
          {
            tabs.map((i) => (
              <div 
                key={i.name}
                onClick={() => setActive(i.name)} 
                // Z-20 ensures this area is clickable above the absolute background
                className="flex items-center gap-2 px-4 py-2 cursor-pointer relative z-20"
              >
                {/* The icon and text color change based on the active tab */}
                <span className={active === i.name ? "text-black" : "text-white"}>
                    {i.icon}
                </span>
                {
                  // Show the text only when active
                  active === i.name && <p className="text-lg text-black">{i.name}</p>
                }
              
                {/* The Moving Background:
                  1. Renders ONLY when active (to trigger the layout animation)
                  2. Uses position: absolute (Tailwind: absolute inset-0)
                  3. Has layoutId and layout
                */}
                {active === i.name && (
                  <motion.div 
                    layoutId="activeTabBackground" // Unique ID for the moving element
                    className="absolute inset-0 bg-white rounded-full z-10" // absolute is KEY
                    initial={false} // Prevents initial flash/jump
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}