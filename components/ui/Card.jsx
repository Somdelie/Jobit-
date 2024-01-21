import Image from "next/image";
import React from "react";
import Paragraph from "./Paragraph";
import Link from "next/link";

const Card = ({ img }) => {
  return (
    <div className="w-[100%] shadow  rounded-t-[10px] p-2 border dark:border-gray-700 overflow-hidden">
      <div>
        <Image
          width={500}
          height={500}
          className="w-[100%] object-contain object-center"
          alt="img"
          src={img}
        />
        <div className="flex flex-col">
          <h2 className="font-bold">Freelancer Name</h2>

          <Paragraph
            title="Lorem ipsum is placeholder text commonly used in the graphic, print,"
            className="text-gray-400 dark:text-gray-500 text-[12px] opacity-75"
          />

          <Link
            href="#"
            className="border-2 text-white text-center border-roseRed bg-roseRed mt-3 transition rounded hover:text-roseRed hover:bg-transparent px-2 py-1"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
