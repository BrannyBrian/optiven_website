import React from "react";

// Props type for SlideButton for potential customization and onClick handler
interface SlideButtonProps {
  buttonText?: string; // Optional prop to customize button text
  onClick?: () => void; // Optional prop for click event handler
}

// Define the RoundedSlideButton component with props
const RoundedSlideButton: React.FC<SlideButtonProps> = ({
  buttonText = "Contact",
  onClick,
}) => {
  return (
    <button
      onClick={onClick} // Add the onClick event handler here
      className={`
        relative z-0 w-full lg:w-auto flex items-center gap-2 overflow-hidden rounded-lg border-[1px]
        border-green-600 px-4 py-2 font-semibold justify-center 
        uppercase text-green-600 transition-all duration-500
       
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-green-600
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-white
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <span>{buttonText}</span>
    </button>
  );
};

// Main SlideButton component, now accepting buttonText and onClick props
const SlideButton: React.FC<SlideButtonProps> = ({ buttonText, onClick }) => {
  return (
    <div className="px-4 lg:px-0">
      <RoundedSlideButton buttonText={buttonText} onClick={onClick} />
    </div>
  );
};

export default SlideButton;
