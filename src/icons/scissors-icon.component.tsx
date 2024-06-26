import iconScissors from "../../images/icon-scissors.svg";

type ScissorsComponentProps = {
  className?: string;
  onClick?: () => void;
};

const ScissorsComponent = ({ className, onClick }: ScissorsComponentProps) => {
  return (
    <div
      className={`absolute flex h-[100px] w-[100px] items-center justify-center rounded-full ${className ?? ""}`}
      onClick={onClick}
    >
      <div className="absolute -z-10 h-[140px] w-[140px] rounded-full bg-gradient-to-b from-primary-scissors-gradient-from to-primary-scissors-gradient-to shadow-customBottom" />
      <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-custom">
        <img src={iconScissors} />
      </div>
    </div>
  );
};

export default ScissorsComponent;
