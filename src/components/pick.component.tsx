import bgTriangle from "../../images/bg-triangle.svg";
import PaperIconComponent from "./paper-icon.component";
import RockIconComponent from "./rock-icon.component";
import ScissorsComponent from "./scissors-icon.component";

const PickComponent = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="relative">
        <PaperIconComponent className="left-0 top-0 -translate-x-4 -translate-y-8" />
        <ScissorsComponent className="right-0 top-0 -translate-y-8 translate-x-4" />
        <RockIconComponent className="bottom-0 left-1/2 -translate-x-1/2 -translate-y-4" />
        <img src={bgTriangle} />
      </div>
    </div>
  );
};

export default PickComponent;
