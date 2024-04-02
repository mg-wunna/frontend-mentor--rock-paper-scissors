import bgTriangle from "../../images/bg-triangle.svg";
import { Icons } from "../app";
import PaperIconComponent from "../icons/paper-icon.component";
import RockIconComponent from "../icons/rock-icon.component";
import ScissorsComponent from "../icons/scissors-icon.component";

export type PickComponentProps = {
  setYourPick: React.Dispatch<React.SetStateAction<Icons>>;
};

const PickComponent = ({ setYourPick }: PickComponentProps) => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="relative">
        <PaperIconComponent
          className="left-0 top-0 -translate-x-4 -translate-y-8 cursor-pointer"
          onClick={() => setYourPick("paper")}
        />
        <ScissorsComponent
          className="right-0 top-0 -translate-y-8 translate-x-4 cursor-pointer"
          onClick={() => setYourPick("scissors")}
        />
        <RockIconComponent
          className="bottom-0 left-1/2 -translate-x-1/2 -translate-y-4 cursor-pointer"
          onClick={() => setYourPick("rock")}
        />
        <img src={bgTriangle} />
      </div>
    </div>
  );
};

export default PickComponent;
