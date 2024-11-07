"use client";
import { navbarData, copyRightIcon } from "@/assets";
import Link from "next/link";
import React from "react";

interface NavbarProps {
  id: string;
}

const Navbar = ({ id }: NavbarProps) => {
  return (
    <div className='z-10 w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10'>
      <Link
        href='/#home'
        className='dark:text-gray-200'
      >
        <span className='text-3xl font-semibold text-red-400'>A</span>.
        <span className='block w-min rotate-90 origin-bottom-right text-[12px] font-semibold dark:text-gray-200'>
          Rai
        </span>
      </Link>
      <div className='flex flex-col gap-y-3 sm:gap-y-2'>
        {navbarData.map((item, i) => (
          <a
            key={i}
            href={`/#${item.id}`}
            className='group flex flex-col items-center gap-y-2'
          >
            <span
              className={`text-2xl group-hover:scale-125 transition-all ${
                id === item.id
                  ? "text-red-500 dark:text-white scale-110"
                  : "text-yellow-600"
              }`}
            >
              {item.icon}
            </span>
            <span
              className={`text-[10px] tracking-wide -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all ${
                id === item.id
                  ? "text-red-500 dark:text-white translate-x-0 opacity-100"
                  : "text-yellow-600"
              }`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <p className='flex items-center justify-center text-[13px] text-gray-500 dark:text-gray-200 mt-6'>
        <span className='absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left'>
          {copyRightIcon} 2019 - {new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
