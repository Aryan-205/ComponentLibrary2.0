import { useState } from "react"
import { GoClock, GoHome, GoPerson, GoSearch } from "react-icons/go";

export default function NavBar3() {

  const [selected, setSelected] = useState("home")
  
    return (
      <div className="h-screen w-full bg-white rounded-xl border flex-center">
        <div className="flex-center gap-8 rounded-3xl bg-black p-2 px-8 overflow-hidden">
          {/* 1 */}
          <div className={`relative p-1 rounded-b-full transition-all duration-200 ease-in-out ${selected=="home" ? "bg-white -translate-y-3" : "bg-black"}`}>
            <div className={`absolute -left-4 w-4 h-4 ${selected=="home" ? "bg-white" : "bg-black"}`}>
              <div className="w-full h-full bg-black rounded-tr-full"/>
            </div>
            <div className={`absolute -right-4 w-4 h-4 ${selected=="home" ? "bg-white" : "bg-black"}`}>
              <div className="w-full h-full bg-black rounded-tl-full"/>
            </div>
            <p onClick={()=>setSelected("home")} className={`cursor-pointer rounded-full p-2 ${selected == "home" ? "bg-lime-500 text-black" : "bg-black text-white hover:bg-neutral-700"}`}><GoHome size={40}/></p>
          </div>
          {/* 2 */}
          <div className={`relative p-1 rounded-b-full transition-all duration-200 ease-in-out ${selected=="clock" ? "bg-white -translate-y-3" : "bg-black"}`}>
            <div className={`absolute -left-4 w-4 h-4 ${selected=="clock" ? "bg-white" : "bg-black"}`}>
              <div className="w-full h-full bg-black rounded-tr-full"/>
            </div>
            <div className={`absolute -right-4 w-4 h-4 ${selected=="clock" ? "bg-white" : "bg-black"}`}>
              <div className="w-full h-full bg-black rounded-tl-full"/>
            </div>
            <p onClick={()=>setSelected("clock")} className={`cursor-pointer rounded-full p-2 ${selected == "clock" ? "bg-lime-500 text-black" : "bg-black text-white hover:bg-neutral-700"}`}><GoClock size={40}/></p>
          </div>
          {/* 3 */}
          <div className={`relative p-1 rounded-b-full transition-all duration-200 ease-in-out ${selected=="search" ? "bg-white -translate-y-3" : "bg-black"}`}>
            <div className={`absolute -left-4 w-4 h-4 ${selected=="search" ? "bg-white" : "bg-black"}`}>
              <div className="w-full h-full bg-black rounded-tr-full"/>
            </div>
            <div className={`absolute -right-4 w-4 h-4 ${selected=="search" ? "bg-white" : "bg-black"}`}>
              <div className="w-full h-full bg-black rounded-tl-full"/>
            </div>
            <p onClick={()=>setSelected("search")} className={`cursor-pointer rounded-full p-2 ${selected == "search" ? "bg-lime-500 text-black" : "bg-black text-white hover:bg-neutral-700"}`}><GoSearch size={40}/></p>
          </div>
          {/* 4 */}
          <div className={`relative p-1 rounded-b-full transition-all duration-200 ease-in-out ${selected=="person" ? "bg-white -translate-y-3" : "bg-black"}`}>
            <div className={`absolute -left-4 w-4 h-4 ${selected=="person" ? "bg-white" : "bg-black"}`}>
              <div className="w-full h-full bg-black rounded-tr-full"/>
            </div>
            <div className={`absolute -right-4 w-4 h-4 ${selected=="person" ? "bg-white" : "bg-black"}`}>
              <div className="w-full h-full bg-black rounded-tl-full"/>
            </div>
            <p onClick={()=>setSelected("person")} className={`cursor-pointer rounded-full p-2 ${selected == "person" ? "bg-lime-500 text-black" : "bg-black text-white hover:bg-neutral-700"}`}><GoPerson size={40}/></p>
          </div>
  
        </div>
      </div>
    )
}
