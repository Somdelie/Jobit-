import React from "react";
import { FaChevronLeft } from "react-icons/fa6";

const PrevArrow = ({onClick}) => {
  return (
    <div className="absolute -left-[3%] text-white bottom-1/2 z-10"  onClick={onClick}>
      <div className="grid  bg-roseRed h-[25px] w-[25px] rounded-full place-items-center cursor-pointer">
        <FaChevronLeft />
      </div>
    </div>
  );
};

export default PrevArrow;
