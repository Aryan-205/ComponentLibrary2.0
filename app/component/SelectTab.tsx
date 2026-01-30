// import { motion, AnimatePresence } from "motion/react";
// import { useState } from "react";

// export default function SelectTab() {

//   const [mode, setMode] = useState("")

//   function handleMode(mode:string){
//     if(mode !== ""){
//       setMode("")
//     } else {
//       setMode(mode)
//     }
//   }

//   return (
//     <div className="flex flex-col items-center justify-center h-full w-full bg-white border rounded-xl">
//       <div className="flex flex-col items-start justify-center">
//         <div onClick={()=>handleMode("foundation")} className="overflow-hidden">
//           <p className="rounded-xl hover:bg-neutral-200 px-4 py-2">Foundation</p>
//           <AnimatePresence mode="wait">
//           {
//             mode == "foundation" && 
//               <motion.div
//                   initial={{opacity:0}}
//                   animate={{ opacity:1}}
//                   exit={{ opacity:0}}
//                   transition={{duration:0.3, ease:"easeInOut"}}
//                   className="pl-8">
//                 <p className="rounded-xl hover:bg-neutral-200 py-1 px-2">Course</p>
//                 <p className="rounded-xl hover:bg-neutral-200 py-1 px-2">Free Trial</p>
//                 <p className="rounded-xl hover:bg-neutral-200 py-1 px-2">Study</p>
//               </motion.div>
            
//           }
//           </AnimatePresence>
//         </div>
//         <div onClick={()=>setMode("component")} className="overflow-hidden">
//           <p className="rounded-xl hover:bg-neutral-200 px-4 py-2">Components</p>
//           <AnimatePresence mode="wait">
//           {
//             mode == "component" && 
//               <motion.div
//                   initial={{opacity:0}}
//                   animate={{ opacity:1}}
//                   exit={{ opacity:0}}
//                   transition={{duration:0.3, ease:"easeInOut"}}
//                   className="pl-8">
//                 <p className="rounded-xl hover:bg-neutral-200 py-1 px-2">Button</p>
//                 <p className="rounded-xl hover:bg-neutral-200 py-1 px-2">Cards</p>
//                 <p className="rounded-xl hover:bg-neutral-200 py-1 px-2">Transition</p>
//               </motion.div>
            
//           }
//           </AnimatePresence>
//         </div>
//         <div onClick={()=>setMode("documentation")} className="overflow-hidden">
//           <p className="rounded-xl hover:bg-neutral-200 px-4 py-2">Documentation</p>
//           <AnimatePresence mode="wait">
//           {
//             mode == "documentation" && 
//               <motion.div
//                   initial={{opacity:0}}
//                   animate={{ opacity:1}}
//                   exit={{ opacity:0}}
//                   transition={{duration:0.3, ease:"easeInOut"}}
//                   className="pl-8">
//                 <p className="rounded-xl hover:bg-neutral-200 py-1 px-2">Course</p>
//                 <p className="rounded-xl hover:bg-neutral-200 py-1 px-2">Free Trial</p>
//                 <p className="rounded-xl hover:bg-neutral-200 py-1 px-2">Study</p>
//               </motion.div>
            
//           }
//           </AnimatePresence>
//         </div>
//         <div onClick={()=>setMode("about")} className="overflow-hidden">
//           <p className="rounded-xl hover:bg-neutral-200 px-4 py-2">About Us</p>
//           <AnimatePresence mode="wait">
//           {
//             mode == "about" && 
//               <motion.div
//                   initial={{opacity:0}}
//                   animate={{ opacity:1}}
//                   exit={{ opacity:0}}
//                   transition={{duration:0.3, ease:"easeInOut"}}
//                   className="pl-8 w-full">
//                 <p className="rounded-xl hover:bg-neutral-200 py-1 px-2">Course</p>
//                 <p className="rounded-xl hover:bg-neutral-200 p-1 px-2">Free Trial</p>
//                 <p className="rounded-xl hover:bg-neutral-200 p-1 px-2">Study</p>
//               </motion.div>
            
//           }
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }


import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function SelectTab() {

  const [mode, setMode] = useState("");

  function handleMode(tabName: string){
    setMode(prevMode => (prevMode === tabName ? "" : tabName));
  }

  const MenuItem = ({ title, tabKey, subItems }: { title: string, tabKey: string, subItems: string[] }) => (
    <div onClick={() => handleMode(tabKey)} className="overflow-hidden cursor-pointer">
      <p className="rounded-xl px-4 py-2 hover:bg-neutral-200">{title}</p>
      
      <AnimatePresence mode="wait" initial={false}> 
        {
          mode === tabKey && 
            <motion.div
                key={tabKey} 
                initial={{opacity: 0, height: 0,transition:{duration:1, ease:"easeOut"}}}
                animate={{opacity: 1, height: "auto",transition:{duration:1, ease:"easeOut"}}}
                exit={{opacity: 1, height: "auto",transition:{duration:1, ease:"easeOut"}}}
                
                className="pl-8 text-sm"
            >
              {subItems.map((item, index) => (
                <p key={index} className="rounded-xl hover:bg-neutral-200 py-1 px-2">{item}</p>
              ))}
            </motion.div>
        }
      </AnimatePresence>
    </div>
  );

  return (
    <div className="flex items-center justify-center h-screen w-full bg-white border rounded-xl p-4 shadow-lg">
      <div className="flex flex-col items-start justify-center">
        
        <MenuItem 
          title="Foundation" 
          tabKey="foundation" 
          subItems={["Course", "Free Trial", "Study"]} 
        />
        
        <MenuItem 
          title="Components" 
          tabKey="component" 
          subItems={["Button", "Cards", "Transition"]} 
        />
        
        <MenuItem 
          title="Documentation" 
          tabKey="documentation" 
          subItems={["API Reference", "Examples", "Guides"]} 
        />
        
        <MenuItem 
          title="About Us" 
          tabKey="about" 
          subItems={["Our Team", "Careers", "Contact"]} 
        />
        
      </div>
    </div>
  );
}