import bgTriangle from "../../images/bg-triangle.svg";
import iconPaper from "../../images/icon-paper.svg";
import iconRock from "../../images/icon-rock.svg";
import iconScissors from "../../images/icon-scissors.svg";

const PickComponent = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="relative">
        <div className="absolute left-0 top-0 flex h-[100px] w-[100px] -translate-x-4 -translate-y-8 items-center justify-center rounded-full">
          <div className="to-primary-paper-gradient-to from-primary-paper-gradient-from shadow-customBottom absolute -z-10 h-[140px] w-[140px] rounded-full bg-gradient-to-b" />
          <div className="shadow-custom flex h-full w-full items-center justify-center rounded-full bg-white">
            <img src={iconPaper} />
          </div>
        </div>
        <div className="absolute right-0 top-0 flex h-[100px] w-[100px] -translate-y-8 translate-x-4 items-center justify-center rounded-full">
          <div className="to-primary-scissors-gradient-to from-primary-scissors-gradient-from shadow-customBottom absolute -z-10 h-[140px] w-[140px] rounded-full bg-gradient-to-b" />
          <div className="shadow-custom flex h-full w-full items-center justify-center rounded-full bg-white">
            <img src={iconScissors} />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 flex h-[100px] w-[100px] -translate-x-1/2 -translate-y-4 items-center justify-center rounded-full">
          <div className="to-primary-rock-gradient-to from-primary-rock-gradient-from shadow-customBottom absolute -z-10 h-[140px] w-[140px] rounded-full bg-gradient-to-b" />
          <div className="shadow-custom flex h-full w-full items-center justify-center rounded-full bg-white">
            <img src={iconRock} />
          </div>
        </div>
        <img src={bgTriangle} />
      </div>
    </div>
  );
};

export default PickComponent;
