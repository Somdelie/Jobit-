import React from "react";

const Heading = ({ title, className }) => {
  return (
    <h2 className={`${className} text-xl text-gray-700 dark:text-gray-200`}>
      {title}
    </h2>
  );
};

export default Heading;
