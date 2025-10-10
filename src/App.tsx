import ButtonPopup from "./components/ButtonPopup";
import LikeButton from "./components/LikeButton";
import MicroInteraction from "./components/MicroInteraction";
import QuestionPopup from "./components/QuestionPopup";

export default function App() {

  return (
    <div className="w-full">
      <ButtonPopup/>
      <QuestionPopup/>
      <LikeButton/>
      <MicroInteraction/>
    </div>
  );
}