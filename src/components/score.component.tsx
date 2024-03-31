type ScoreComponentProps = {
  score: number;
};

const ScoreComponent = ({ score }: ScoreComponentProps) => {
  return (
    <div className="border-neutral-header-outline mx-auto flex w-full items-center justify-between rounded-md border-2 border-solid p-3">
      <div className="text-2xl font-bold uppercase leading-5 text-white">
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>
      <div className="aspect-square rounded-md bg-white p-2 px-4 text-center">
        <p className="text-neutral-score-text uppercase">Score</p>
        <p className="text-neutral-dark-text text-3xl font-bold">{score}</p>
      </div>
    </div>
  );
};

export default ScoreComponent;
