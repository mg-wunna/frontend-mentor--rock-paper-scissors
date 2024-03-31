import { useState } from "react";
import ScoreComponent from "./components/score.component";

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <>
      <ScoreComponent score={score} />
    </>
  );
};

export default App;
