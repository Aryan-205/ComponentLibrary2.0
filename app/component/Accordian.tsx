import React, { ReactElement, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MousePointer2, 
  Layers, 
  Pointer, 
  Send, 
  History, 
  ChevronDown 
} from 'lucide-react';

const accordionData = [
  {
    id: 1,
    title: "What is Interaction Design?",
    icon: <MousePointer2 size={20} />,
    content: "The practice of designing interactive digital products, environments, systems, and services."
  },
  {
    id: 2,
    title: "Principles & Patterns",
    icon: <Layers size={20} />,
    content: "Common solutions to recurring design problems and the fundamental laws of UX."
  },
  {
    id: 3,
    title: "Usability & Accessibility",
    icon: <Pointer size={20} />,
    content: "Designing experiences that are easy to use and accessible to people of all abilities."
  },
  {
    id: 4,
    title: "Prototyping & Testing",
    icon: <Send size={20} />,
    content: "Creating low to high fidelity simulations to validate ideas with real users."
  },
  {
    id: 5,
    title: "UX Optimisation",
    icon: <History size={20} />,
    content: "The process of improving the user experience based on data and feedback."
  }
];

interface Item {
  id:number,
  icon: ReactElement,
  title:string,
  content:string
}

const AccordionItem = ({ item, isOpen, onClick, selectedId }: { item: Item; isOpen: boolean; onClick: () => void; selectedId: number }) => {
  console.log(selectedId);
  return (
    <div 
      className={`border-gray-200 transition-all duration-300 bg-gray-50 
        ${isOpen ? "rounded-2xl my-2 border" : "border-x"}
        ${selectedId + 1 === item.id ? "rounded-t-2xl border bg-blue-500" : "border-x"}
        ${selectedId - 1 === item.id ? "rounded-b-2xl border bg-blue-500" : "border-x"}
        ${ item.id === 1 ? "rounded-t-2xl border bg-blue-500" : "border-x"}
        ${ item.id === 5 ? "rounded-b-2xl border bg-blue-500" : "border-x"}
      `}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left group"
      >
        <div className="flex items-center gap-4">
          <span className="text-gray-700">{item.icon}</span>
          <span className="font-medium text-[17px] text-gray-800 tracking-tight">
            {item.title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pl-[56px] pr-8 pb-6 text-gray-500 leading-relaxed text-[16px]">
              {item.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export type AccordianProps = {
  /** Controlled: which item is open (number = item id, null = none) */
  openId?: number;
  /** Controlled: called when an item is clicked with the new open id (or null to close) */
  setOpenId?: (id: number) => void;
};

export default function Accordian({ openId: controlledOpenId, setOpenId: controlledSetOpenId }: AccordianProps = {}) {
  const [internalOpenId, setInternalOpenId] = useState<number | null>(3);
  const isControlled = controlledOpenId !== undefined && controlledSetOpenId !== undefined;
  const openId = isControlled ? controlledOpenId : internalOpenId;
  const setOpenId = isControlled ? controlledSetOpenId! : setInternalOpenId;

  const handleClick = (itemId: number) => {
    setOpenId(openId === itemId ? null : itemId);
  };

  return (
    <div className="flex justify-center items-start h-screen bg-white pt-20">
      <div className="w-full max-w-[480px] px-6">
        {accordionData.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onClick={() => handleClick(item.id)}
            selectedId={openId}
          />
        ))}
      </div>
    </div>
  );
}