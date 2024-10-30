import React from "react";

interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return (
    <h1 className='text-xl sm:text-2xl font-bold text-gray-600 dark:text-gray-200 mb-14 self-start'>
      {text}
    </h1>
  );
};

export default Heading;
