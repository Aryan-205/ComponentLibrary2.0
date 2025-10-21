import { FaFolderOpen } from "react-icons/fa6";
import { IoSparklesSharp } from "react-icons/io5";
import { LuArrowRight } from "react-icons/lu";

export default function Buttons1(){
  return (
    <>
    <div className="w-full h-screen bg-white border rounded-xl grid grid-cols-2">
      {/* 1 */}
      <div className="w-full h-full flex-center bg-gradient-to-t from-[#fbaa63] to-[#faeadb]">
        <button className="bg-black text-white px-4 py-2 rounded-full hover:shadow-[inset_0_0_8px_4px_rgba(255,255,255,0.5)]">Send Request</button>
      </div>
      {/* 2 */}
      <div className="w-full h-full flex-center bg-neutral-100">
        <div className="bg-white p-1 w-fit h-fit rounded-full border shadow-[8px_8px_20px_10px_rgba(0,0,0,0.1)]">
          <button className="bg-neutral-100 border-2 font-medium border-neutral-300 rounded-full px-4 py-2 relative overflow-hidden shadow-[inset_0_0_8px_4px_rgba(150,150,150,0.2)]">
            <p className="z-10 relative">Unlock It</p>
            <div className="absolute w-[84%] top-[2px] left-2 rounded-3xl h-1/2 bg-white z-0"/>
          </button>
        </div>
      </div>
      {/* 3 */}
      <div className="w-full h-full flex-center bg-[#8177f8]">
        <button className="bg-white border-2 border-black pl-4 pr-2 py-2 gap-4 rounded-full font-semibold flex-center">Hello <div className="bg-black p-1 rounded-full"><LuArrowRight size={20} color="white"/></div></button>
      </div>
      {/* 4 */}
      <div className="w-full h-full flex-center bg-[#dadada]">
        <button className="rounded-full px-4 py-2 bg-[#e1e1e0]
      
      bg-[radial-gradient(circle_at_center,theme(colors.white)_10%,theme(colors.gray.100)_70%,theme(colors.gray.200)_100%)]
      
      shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),_inset_0px_0px_0px_1px_rgba(255,255,255,0.7),_inset_0px_1px_0px_0px_rgba(255,255,255,0.4)]
"><div className=""/>Book now</button>
      </div>
      {/* 5 */}
      <div className="w-full h-full flex-center bg-[#2d2b40]">
        <div className="rounded-full p-2 relative bg-[#6e5c5e] shadow-[0px_0px_24px_1px_rgba(255,200,174,0.25)] overflow-hidden">
          <button className="rounded-full flex-center gap-2 shadow-[0px_10px_24px_4px_#00000080] [background:radial-gradient(50%_50%_at_50%_50%,rgba(237,205,177,1)_0%,rgba(240,145,120,1)_100%)] px-4 py-2"><IoSparklesSharp />Generate</button>
        </div>
      </div>
      {/* 6 */}
      <div className="w-full h-full flex-center bg-black">
        <button className="bg-[#252549] px-4 py-2 rounded-full gap-2 flex-center border-2 border-[#303151] text-[#7b81fe]"><FaFolderOpen color="#7b81fe" size={20}/>Upload File</button>
      </div>
    </div>
    </>
  )
}