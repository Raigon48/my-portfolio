"use client";
import React from "react";
import Heading from "./sub/Heading";
import Image from "next/image";
import { skillsData } from "@/assets";
import { motion } from "framer-motion";

const Skills = () => {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };
  return (
    <div
      id='skills'
      className='min-h-screen flex flex-col items-center justify-center gap-y-20'
    >
      <Heading text='Skills' />
      <div className='w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6'>
        {skillsData.map((skill, index) => (
          <motion.div
            custom={index}
            variants={variants}
            initial='hidden'
            whileInView='visible'
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: "50px", once: true }}
            key={`skill-${index}`}
            className='flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 dark:bg-zinc-600/95 px-5 py-2 lg:px-2'
          >
            <Image
              src={skill.icon}
              alt='skills image'
              width={100}
              height={100}
              className='h-auto w-[40px]'
            />
            <p className='text-sm text-gray-600 dark:text-gray-200'>
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
