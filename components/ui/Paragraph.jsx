import React from "react";

const Paragraph = ({ title, className }) => {
  return <p className={`${className}dark:text-gray-500 text-sm`}>{title}</p>;
};

export default Paragraph;
