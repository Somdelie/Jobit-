import { FaChevronRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute -right-[3%] text-white bottom-1/2 z-10"
      onClick={onClick}
    >
      <div className="grid bg-roseRed h-[25px] w-[25px] rounded-full place-items-center cursor-pointer">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default NextArrow;
