import { AnimatePresence, motion } from 'motion/react'
import { FaArrowRight } from "react-icons/fa";
import { TbReceipt } from "react-icons/tb";
import { PiHamburgerBold } from "react-icons/pi";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

export default function Billing() {

  const data = [
    {
      id:1,
      icon:<TbReceipt color="white " size={30}/>,
      brand:"Netflix",
      type:"Subscription",
      price:"6.99",
    },{
      id:2,
      icon:<MdOutlineSignalCellularAlt color="white " size={30}/>,
      brand:"Verizon",
      type:"Mobile Recharge",
      price:"4.05",
    },{
      id:3,
      icon:<TbReceipt color="white " size={30}/>,
      brand:"Rive",
      type:"Subscription",
      price:"32.00",
    },{
      id:4,
      icon:<TbReceipt color="white " size={30}/>,
      brand:"Figma",
      type:"Subscription",
      price:"15.00",
    },{
      id:5,
      icon:<PiHamburgerBold color="white " size={30}/>,
      brand:"Big Belly Burger",
      type:"Restaurant",
      price:"12.05",
    },
  ]

  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="h-screen w-full bg-neutral-100 rounded-xl border flex justify-center items-center">
      <motion.div layout className="rounded-3xl shadow-2xl bg-white text-base p-4 w-80 font-sans">
        {openId == null && <p className="text-neutral-500">Transactions</p>}
        <div className={`w-full flex flex-col gap-2 ${openId == null ? "py-4" : "py-0"}`}>
          <AnimatePresence initial={false}>
            {data.map(i=>(
              <CardTab 
                id={i.id} 
                key={i.id} 
                icon={i.icon} 
                brand={i.brand} 
                type={i.type} 
                price={i.price} 
                openId={openId} 
                setOpenId={setOpenId}
              />
            ))}
          </AnimatePresence>
        </div>
        {openId == null && 
          <button className="flex justify-center items-center bg-neutral-200 rounded-xl px-4 py-2 w-full gap-2 text-sm text-neutral-700 font-medium hover:bg-neutral-300 transition-colors">
            All Transactions 
            <FaArrowRight size={14}/>
          </button>
        }
      </motion.div>
    </div>
  )
}

interface card {
  id:number,
  icon:React.ReactNode,
  brand:string,
  type:string,
  price:string,
  openId: number | null,
  setOpenId: React.Dispatch<React.SetStateAction<number | null>>
}

function CardTab({icon, brand, type, price, id, openId, setOpenId}:card){

  const isOpen = openId === id;

  const isVisible = openId === null || isOpen;

  return (
    <motion.div
        initial={{ opacity: 1 }}
        animate={{ 
            opacity: isVisible ? 1 : 0,
            transition: { duration: 0.3 }
        }}
        exit={{ opacity: 0 }}
        layout
        onClick={()=>setOpenId(isOpen ? null : id)} 
        // Apply conditional classes
        className={`w-full rounded-xl cursor-pointer overflow-hidden transition-all
            ${isVisible ? 'block' : 'hidden'} 
          ` 
        }
    >
      <div className={`flex w-full gap-2 ${isOpen ? "flex-col" : "items-center"}`}>
        {/* icon div */}
        <div style={{width: isOpen ? "100%" : ""}} className='flex justify-between items-start'>
          <motion.span layout className={`p-2 text-white bg-black transition-all duration-300 w-fit h-fit 
            ${isOpen ? "rounded-xl" : "rounded-full"}`
          }>
            {icon}
          </motion.span>
          {
            isOpen && (
              <button 
                  onClick={(e) => { e.stopPropagation(); setOpenId(null); }} 
                  className='bg-black rounded-full p-1 flex justify-center items-center text-white hover:bg-neutral-400 transition-colors'>
                <IoClose size={16}/>
              </button> 
            )
          }
        </div>

        {/* text div */}
        <motion.div layout className='w-full flex justify-between items-center'>
          <div>
            <p className='font-semibold text-black -mb-1'>{brand}</p>
            <p className='text-neutral-500 text-sm -mt-1'>{type}</p>
          </div>
          <p className='text-neutral-600 font-semibold'>-${price}</p>
        </motion.div>

        {/* conditional elements */}
        {
          isOpen && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='text-xs text-neutral-500 w-full font-medium mt-2 space-y-2'
            >
              <div className='border-y-2 border-dotted border-neutral-300 py-2 space-y-1'>
                <div className='flex justify-between'><p>Transaction ID:</p><p className='text-black'>#54325</p></div>
                <div className='flex justify-between'><p>Date:</p><p className='text-black'>September 10</p></div>
                <div className='flex justify-between'><p>Time:</p><p className='text-black'>02:11 am</p></div>
              </div>
              <div className='pt-2 space-y-1'>
                <div className='flex justify-between'><p>Payment Method:</p><p className='text-black'>Credit Card</p></div>
                <div className='flex justify-between'>
                    <p>Card Number:</p>
                    <p className='text-black'>XXXX 9342 <span className='uppercase italic text-black font-bold'>VISA</span></p>
                </div>
              </div>
            </motion.div>
          )
        }
      </div>
    </motion.div>
  )
}
