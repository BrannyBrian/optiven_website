import React, { useState } from "react";
import { ChevronDown } from "react-feather";

interface ItemProps {
  title: string;
  children: React.ReactNode;
}

const FaqItem = ({ title, children }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="open-item"
        title="open-item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-bold text-start">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <ChevronDown size={20} />
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};
export default FaqItem;
