import ButtonPopup from "./assets/components/ButtonPopup";
import LikeButton from "./assets/components/LikeButton";
import QuestionPopup from "./assets/components/QuestionPopup";

export default function App() {

  return (
    <div className="w-full">
      <ButtonPopup/>
      <QuestionPopup/>
      <LikeButton/>
    </div>
  );
}