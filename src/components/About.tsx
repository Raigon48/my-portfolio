"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import Achievement from "./sub/Achievement";
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assets";

const About = () => {
  return (
    <div
      id='about'
      className='min-h-screen flex flex-col items-center justify-center'
    >
      <Heading text='About Me' />
      <div className='w-full flex items-center justify-between md:justify-center'>
        <Image
          src={"/about-me.png"}
          alt='About image'
          width={400}
          height={400}
          className='w-[300px] lg:w-[200px] md:hidden'
        />
        <div className='relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify dark:bg-zinc-700'>
          <span className='absolute -left-5 top-5 scale-[2.5] text-zinc-100 dark:text-zinc-700 md:hidden'>
            {arrowLeftIcon}
          </span>
          <p className='text-lg font-light text-gray-700 dark:text-gray-200 first-letter:pl-3 lg:text-[16px] sm:text-[14px]'>
            {aboutText}
          </p>
          <a
            href='/abhishek-resume.pdf'
            download=''
            className='w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500'
          >
            <span>Download Résumé</span>
            <span className='text-xl'>{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className='mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10'>
        {aboutData.map((item, i) => (
          <Achievement
            key={i}
            title={item.title}
            amount={item.amount}
          >
            {item.icon}
          </Achievement>
        ))}
      </div>
    </div>
  );
};

export default About;
