import { useState } from "react";
import PickComponent from "./components/pick.component";
import RuleComponent from "./components/rule.component";
import ScoreComponent from "./components/score.component";
import ResultComponent from "./components/result.component";

const App = () => {
  const [score] = useState(0);
  const result = undefined;

  return (
    <div className="flex h-screen flex-col justify-between p-5 pb-20">
      <ScoreComponent score={score} />
      {result === undefined ? <PickComponent /> : <ResultComponent />}
      <RuleComponent />
    </div>
  );
};

export default App;
