import { Icons, WhoWin } from "../app";
import PaperIconComponent from "../icons/paper-icon.component";
import RockIconComponent from "../icons/rock-icon.component";
import ScissorsComponent from "../icons/scissors-icon.component";

export type ResultComponentProps = {
  yourPick: Icons;
  housePick: Icons;
  whoWin: WhoWin;
  onPlayAgain: () => void;
};

const ResultComponent = ({
  yourPick,
  housePick,
  whoWin,
  onPlayAgain,
}: ResultComponentProps) => {
  return (
    <div className="relative flex flex-1 items-center justify-evenly gap-x-20">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <div
          className={`relative h-[140px] w-[140px] rounded-full bg-black/20 ${housePick !== "" && whoWin !== "house" ? "shadow-win" : ""}`}
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
          className={`relative h-[140px] w-[140px] rounded-full bg-black/20 ${housePick !== "" && whoWin !== "you" ? "shadow-win" : ""}`}
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
      {housePick !== "" && (
        <div className="absolute bottom-10 flex flex-col gap-6">
          <p className="text-6xl font-medium uppercase text-white">
            {whoWin === ""
              ? "Draw"
              : `You ${whoWin === "you" ? "Win" : "Lose"}`}
          </p>
          <button
            className="w-full rounded-md bg-white py-2 text-lg uppercase"
            onClick={onPlayAgain}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultComponent;
