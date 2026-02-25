import type { ComponentType } from "react";
import Accordian from "./Accordian";
import AnimatedButton1 from "./AnimatedButton1";
import AnimatedButton2 from "./AnimatedButton2";
import AnimatedButton3 from "./AnimatedButton3";
import Billing from "./Billing";
import Button3 from "./Button3";
import Button3D1 from "./Button3D1";
import ButtonPopup from "./ButtonPopup";
import Buttons1 from "./Buttons1";
import Buttons2 from "./Buttons2";
import Card1 from "./Card1";
import CopyText from "./CopyText";
import CornerButton from "./CornerButton";
import FeedbackForm from "./FeedbackForm";
import InteractiveBar from "./InteractiveBar";
import LikeButton from "./LikeButton";
import Loginform from "./Loginform";
import MapComponent from "./MapComponent";
import MagnetTabBase from "./MagnetTab";

function MagnetTabPreview() {
  return (
    <MagnetTabBase
      slug="preview"
      options={["One", "Two", "Three"]}
      onSelect={() => {}}
      activeTab="One"
    />
  );
}
import MicroInteraction from "./MicroInteraction";
import MicroInteractions2 from "./MicroInteractions2";
import ModeSelector from "./ModeSelector";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import NavBar3 from "./NavBar3";
import NavBar4 from "./NavBar4";
import PillStepper from "./PillStepper";
import ProfileFlip from "./ProfileFlip";
import QuestionPopup from "./QuestionPopup";
import Radar from "./Radar";
import SelectTab from "./SelectTab";
import SemioticCarousel from "./SemioticCarousel";
import { PredictionConeMenu } from "./PredictionTriangle";

// Components may have required props; we render without props for preview.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentRegistry: Record<string, ComponentType<any>> = {
  Accordian,
  AnimatedButton1,
  AnimatedButton2,
  AnimatedButton3,
  Billing,
  Button3,
  Button3D1,
  ButtonPopup,
  Buttons1,
  Buttons2,
  Card1,
  CopyText,
  CornerButton,
  FeedbackForm,
  InteractiveBar,
  LikeButton,
  Loginform,
  MapComponent,
  MagnetTab: MagnetTabPreview,
  MicroInteraction,
  MicroInteractions2,
  ModeSelector,
  NavBar,
  NavBar2,
  NavBar3,
  NavBar4,
  PillStepper,
  ProfileFlip,
  QuestionPopup,
  Radar,
  SelectTab,
  SemioticCarousel,
  PredictionTriangle: PredictionConeMenu,
};
