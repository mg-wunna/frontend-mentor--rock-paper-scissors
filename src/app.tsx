import { useCallback, useEffect, useState } from "react";
import PickComponent from "./components/pick.component";
import RuleComponent from "./components/rule.component";
import ScoreComponent from "./components/score.component";
import ResultComponent from "./components/result.component";

export type Icons = "" | "rock" | "paper" | "scissors";
export type WhoWin = "" | "you" | "house";

const App = () => {
  const [score, setScore] = useState(0);
  const [yourPick, setYourPick] = useState<Icons>("");
  const [housePick, setHousePick] = useState<Icons>("");
  const [whoWin, setWhoWin] = useState<WhoWin>("");

  const playAgainHandler = useCallback(() => {
    setYourPick("");
    setHousePick("");
    setWhoWin("");
  }, []);

  useEffect(() => {
    if (yourPick !== "") {
      setTimeout(() => {
        const housePick: Icons = "paper" as Icons;
        setHousePick(housePick);

        let whoWin: WhoWin = "you";
        if (yourPick === "paper" && housePick === "rock") whoWin = "you";
        else if (yourPick === "paper" && housePick === "scissors")
          whoWin = "house";
        else if (yourPick === "rock" && housePick === "paper") whoWin = "house";
        else if (yourPick === "rock" && housePick === "scissors")
          whoWin = "you";
        else if (yourPick === "scissors" && housePick === "paper")
          whoWin = "you";

        if (whoWin === "you") setScore((prev) => prev + 1);
        setWhoWin(whoWin);
      }, 1000);
    }
  }, [yourPick]);

  return (
    <div className="flex h-screen flex-col justify-between p-5 pb-20">
      <ScoreComponent score={score} />
      {yourPick === "" ? (
        <PickComponent setYourPick={setYourPick} />
      ) : (
        <ResultComponent
          yourPick={yourPick}
          housePick={housePick}
          whoWin={whoWin}
          onPlayAgain={playAgainHandler}
        />
      )}
      <RuleComponent />
    </div>
  );
};

export default App;
