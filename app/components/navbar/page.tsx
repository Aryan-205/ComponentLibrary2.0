"use client"
import NavBar from "@/app/component/NavBar";
import NavBar2 from "@/app/component/NavBar2";
import NavBar3 from "@/app/component/NavBar3";
import NavBar4 from "@/app/component/NavBar4";
import InteractiveBar from "@/app/component/InteractiveBar";

export default function page() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex justify-center items-center w-full h-screen">
        <InteractiveBar/>
        <div/>
      </div>
      <div className="flex justify-center items-center w-full h-screen">
        <NavBar2/>
      </div>
      <div className="flex justify-center items-center w-full h-screen">
        <NavBar3/>
      </div>
      <div className="flex justify-center items-center w-full h-screen"> 
        <NavBar4/>
      </div>
    </div>
  )
}
