import ButtonPopup from "./components/ButtonPopup";
import CornerButton from "./components/CornerButton";
import LikeButton from "./components/LikeButton";
import MicroInteraction from "./components/MicroInteraction";
import ModeSelector from "./components/ModeSelector";
import QuestionPopup from "./components/QuestionPopup";

export default function App() {

  return (
    <div className="w-full">
      <ButtonPopup/>
      <QuestionPopup/>
      <LikeButton/>
      <MicroInteraction/>
      <CornerButton/>
      <ModeSelector/>
    </div>
  );
}