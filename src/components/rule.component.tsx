import { useState } from "react";
import closeIcon from "../../images/icon-close.svg";
import image from "../../images/image-rules.svg";

const RuleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed left-0 flex h-screen w-screen flex-col items-center justify-between bg-white px-5 py-20 transition-all ${isOpen ? "top-0" : "top-full"}`}
      >
        <p className="text-3xl font-bold uppercase">Rules</p>
        <img className="w-full" src={image} />
        <img
          className="cursor-pointer"
          src={closeIcon}
          onClick={() => setIsOpen(false)}
        />
      </div>
      <button
        className="border-neutral-header-outline mx-auto rounded-md border border-solid p-2 px-10 uppercase text-white"
        onClick={() => setIsOpen(true)}
      >
        Rules
      </button>
    </>
  );
};

export default RuleComponent;
