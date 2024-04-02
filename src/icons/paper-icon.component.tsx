import iconPaper from "../../images/icon-paper.svg";

type PaperIconComponentProps = {
  className?: string;
  onClick?: () => void;
};

const PaperIconComponent = ({
  className,
  onClick,
}: PaperIconComponentProps) => {
  return (
    <div
      className={`absolute flex h-[100px] w-[100px] items-center justify-center rounded-full ${className ?? ""}`}
      onClick={onClick}
    >
      <div className="absolute -z-10 h-[140px] w-[140px] rounded-full bg-gradient-to-b from-primary-paper-gradient-from to-primary-paper-gradient-to shadow-customBottom" />
      <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-custom">
        <img src={iconPaper} />
      </div>
    </div>
  );
};

export default PaperIconComponent;
