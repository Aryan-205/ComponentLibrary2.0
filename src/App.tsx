import { useState } from "react";
import ButtonPopup from "./components/ButtonPopup";
import CornerButton from "./components/CornerButton";
import LikeButton from "./components/LikeButton";
import MagnetTabs from "./components/MagnetTab";
import MicroInteraction from "./components/MicroInteraction";
import ModeSelector from "./components/ModeSelector";
import QuestionPopup from "./components/QuestionPopup";
import NavBar from "./components/NavBar";
import AnimatedButton1 from "./components/AnimatedButton1";
import SelectTab from "./components/SelectTab";
import Buttons1 from "./components/Buttons1";
import NavBar2 from "./components/NavBar2";
import Billing from "./components/Billing";

export default function App() {

  const [activeTab, setActiveTab] = useState('Tab 1');

  return (
    <div className="w-full p-4 bg-neutral-200 relative overflow-x-hidden">
      <div className="absolute w-full top-0 flex justify-center font-semibold text-lg z-10 bg-white py-2 border animate-pulse text-blue-800">Under Building</div>
      <ButtonPopup/>
      <QuestionPopup/>
      <LikeButton/>
      <MicroInteraction/>
      <CornerButton/>
      <ModeSelector/>
      <MagnetTabs
        slug="magnet-tabs"
        options={[
          'Tab 1',
          'Tab 2',
          'Tab 3',
          'Tab 4',
          'Tab 5',
          'Tab 6',
          'Tab 7',
          'Tab 8',
          'Tab 9',
          'Tab 10'
        ]}
        onSelect={(option) => setActiveTab(option)}
        activeTab={activeTab}
      />
      <NavBar/>
      <AnimatedButton1/>
      <SelectTab/>
      <Buttons1/>
      <NavBar2/>
      <Billing/>
    </div>
  );
}