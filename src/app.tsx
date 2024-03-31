import { useState } from "react";
import ScoreComponent from "./components/score.component";
import RuleComponent from "./components/rule.component";

const App = () => {
  const [score] = useState(0);

  return (
    <div className="flex h-screen flex-col justify-between p-5 pb-20">
      <ScoreComponent score={score} />
      <div className="flex-1">Body</div>
      <RuleComponent />
    </div>
  );
};

export default App;
