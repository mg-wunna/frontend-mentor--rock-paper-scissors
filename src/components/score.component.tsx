import logo from "../../images/logo.svg";

type ScoreComponentProps = {
  score: number;
};

const ScoreComponent = ({ score }: ScoreComponentProps) => {
  return (
    <div className="border-neutral-header-outline mx-auto flex w-full items-center justify-between rounded-md border-2 border-solid p-4 px-6">
      <img className="w-24" src={logo} />
      <div className="flex aspect-square h-full flex-col items-center justify-center rounded-md bg-white p-2 px-4 text-center">
        <p className="text-neutral-score-text uppercase">Score</p>
        <p className="text-neutral-dark-text text-3xl font-bold">{score}</p>
      </div>
    </div>
  );
};

export default ScoreComponent;
