import bgTriangle from "../../images/bg-triangle.svg";
import iconRock from "../../images/icon-rock.svg";
import PaperIconComponent from "./paper-icon.component";
import ScissorsComponent from "./scissors-icon.component";

const PickComponent = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="relative">
        <PaperIconComponent className="absolute left-0 top-0 -translate-x-4 -translate-y-8" />
        <ScissorsComponent className="absolute right-0 top-0 -translate-y-8 translate-x-4" />
        <div className="absolute bottom-0 left-1/2 flex h-[100px] w-[100px] -translate-x-1/2 -translate-y-4 items-center justify-center rounded-full">
          <div className="absolute -z-10 h-[140px] w-[140px] rounded-full bg-gradient-to-b from-primary-rock-gradient-from to-primary-rock-gradient-to shadow-customBottom" />
          <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-custom">
            <img src={iconRock} />
          </div>
        </div>
        <img src={bgTriangle} />
      </div>
    </div>
  );
};

export default PickComponent;
