import { Icons, WhoWin } from "../app";
import PaperIconComponent from "../icons/paper-icon.component";
import RockIconComponent from "../icons/rock-icon.component";
import ScissorsComponent from "../icons/scissors-icon.component";

const ResultComponent = () => {
  const yourPick: Icons = "scissors" as Icons;
  const housePick: Icons = "paper" as Icons;
  const whoWin: WhoWin = "house" as WhoWin;

  return (
    <div className="flex items-center justify-evenly gap-x-20">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <div
          className={`relative h-[140px] w-[140px] rounded-full bg-black/20 ${whoWin === "you" ? "shadow-win" : ""}`}
        >
          {yourPick === "paper" ? (
            <PaperIconComponent className="left-5 top-5 -translate-x-0 -translate-y-0" />
          ) : yourPick === "rock" ? (
            <RockIconComponent className="left-5 top-5 -translate-x-0 -translate-y-0" />
          ) : yourPick === "scissors" ? (
            <ScissorsComponent className="left-5 top-5 -translate-x-0 -translate-y-0" />
          ) : null}
        </div>
        <p className="text-xl uppercase text-white">You Pick</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-4">
        <div
          className={`relative h-[140px] w-[140px] rounded-full bg-black/20 ${whoWin === "house" ? "shadow-win" : ""}`}
        >
          {housePick === "paper" ? (
            <PaperIconComponent className="left-5 top-5 -translate-x-0 -translate-y-0" />
          ) : housePick === "rock" ? (
            <RockIconComponent className="left-5 top-5 -translate-x-0 -translate-y-0" />
          ) : housePick === "scissors" ? (
            <ScissorsComponent className="left-5 top-5 -translate-x-0 -translate-y-0" />
          ) : null}
        </div>
        <p className="text-xl uppercase text-white">The House Pick</p>
      </div>
    </div>
  );
};

export default ResultComponent;
