const ResultComponent = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <div className="h-[140px] w-[140px] rounded-full bg-black/20"></div>
        <p className="text-xl uppercase text-white">You Pick</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-4">
        <div className="h-[140px] w-[140px] rounded-full bg-black/20"></div>
        <p className="text-xl uppercase text-white">The House Pick</p>
      </div>
    </div>
  );
};

export default ResultComponent;
