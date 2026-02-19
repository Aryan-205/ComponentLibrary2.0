"use client";
import AnimatedButton2 from "@/app/component/AnimatedButton2";
import AnimatedButton1 from "@/app/component/AnimatedButton1";
import ButtonPopup from "@/app/component/ButtonPopup";
import Button3D1 from "@/app/component/Button3D1";
import Button3 from "@/app/component/Button3";
import Buttons1 from "@/app/component/Buttons1";
import Buttons2 from "@/app/component/Buttons2";
import AnimatedButton3 from "@/app/component/AnimatedButton3";
import MapComponent from "@/app/component/MapComponent";
import CopyText from "@/app/component/CopyText";

export default function page() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex justify-center items-center w-full h-screen">
        <AnimatedButton1 />
      </div>
      <div className="flex justify-center items-center w-full h-screen">
        <AnimatedButton2 />
      </div>
      <div className="flex justify-center items-center w-full h-screen">
        <ButtonPopup />
      </div>
      <div className="flex justify-center items-center w-full h-screen">
        <Button3 />
      </div>
      <div className="flex justify-center items-center w-full h-screen">
        <Buttons1 />
      </div>
      <div className="flex justify-center items-center w-full h-screen">
        <Buttons2 />
      </div>
        <div className="flex justify-center items-center w-full h-screen">
          <AnimatedButton3 />
        </div>
        <div className="flex justify-center items-center w-full h-screen">
          <MapComponent />
        </div>
        <div className="flex justify-center items-center w-full h-screen">
          <CopyText />
        </div>
    </div>
  );
}
