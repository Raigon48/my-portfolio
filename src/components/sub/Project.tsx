"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProjectProps {
  data: {
    name: string;
    desc: string;
    url: string;
    tech: (string | undefined)[];
  };
  index: number;
}

const Project = ({ data, index }: ProjectProps) => {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "50px", once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 200, damping: 20 }}
      className='relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer'
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Image
        src={data.url}
        alt='Project Image'
        width={400}
        height={400}
        className='rounded-lg opacity-70'
      />
      <motion.div
        className='absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 p-6 rounded-lg dark:bg-zinc-700/95'
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        hidden={show}
      >
        <h2 className='font-bold text-lg tracking-wide text-gray-500 dark:text-gray-100'>
          {data.name}
        </h2>
        <p className='text-justify text-gray-500 first-letter:pl-2 dark:text-gray-200'>
          {data.desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Project;
