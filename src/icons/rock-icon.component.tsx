import iconRock from "../../images/icon-rock.svg";

type RockIconComponentProps = {
  className?: string;
  onClick?: () => void;
};

const RockIconComponent = ({ className, onClick }: RockIconComponentProps) => {
  return (
    <div
      className={`absolute flex h-[100px] w-[100px] items-center justify-center rounded-full ${className ?? ""}`}
      onClick={onClick}
    >
      <div className="absolute -z-10 h-[140px] w-[140px] rounded-full bg-gradient-to-b from-primary-rock-gradient-from to-primary-rock-gradient-to shadow-customBottom" />
      <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-custom">
        <img src={iconRock} />
      </div>
    </div>
  );
};

export default RockIconComponent;
