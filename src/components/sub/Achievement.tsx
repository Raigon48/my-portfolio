"use client";
import React, { ReactNode } from "react";
import { motion, useMotionValue } from "framer-motion";

interface AchievementProps {
  title: string;
  amount: number;
  children: ReactNode;
}

const Achievement = ({ title, amount, children }: AchievementProps) => {
  const number = useMotionValue(0);

  const count = (amount: number) => {
    let i = 0;
    const updateCount = () => {
      let timeout;
      if (i <= amount) {
        number.set(i++);
        timeout = setTimeout(updateCount, 0);
      } else {
        clearTimeout(timeout);
      }
    };
    updateCount();
  };

  return (
    <div className='flex items-end gap-x-3'>
      <span className='text-4xl text-gray-300 lg:text-2xl'>{children}</span>
      <h1 className='flex flex-col gap-y-2'>
        <motion.span
          className='text-2xl lg:text-xl font-light text-yellow-500 '
          onViewportEnter={() => count(amount)}
        >
          {number}
        </motion.span>
        <span className='text-sm tracking-wide text-gray-500 dark:text-gray-200'>
          {title}
        </span>
      </h1>
    </div>
  );
};

export default Achievement;
