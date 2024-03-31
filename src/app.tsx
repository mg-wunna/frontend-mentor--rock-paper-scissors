import { useState } from "react";
import ScoreComponent from "./components/score.component";
import RuleComponent from "./components/rule.component";

const App = () => {
  const [score] = useState(0);

  return (
    <div className="flex flex-col justify-between p-5">
      <ScoreComponent score={score} />
      <div>Body</div>
      <RuleComponent />
    </div>
  );
};

export default App;
