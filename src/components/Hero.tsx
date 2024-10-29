"use client";

import { heroIcons } from "@/assets";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
    console.log(clientX, clientY, x, y);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);
  };

  const handleMouseLeave = () => {
    setMouseMove(false);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <div
      className='h-screen grid place-items-center'
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div className='flex flex-col items-center justify-center gap-y-3 font-light capitalize'>
          <motion.div
            className='relative'
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src={"/person.png"}
              alt='Person Image'
              width={400}
              height={400}
              priority={true}
              className='h-auto w-[150px]'
            />
            <motion.span
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.4 } }}
              className='absolute top-[2px] right-[-15px] text-3xl font-semibold text-red-400'
            >
              Hi!
            </motion.span>
          </motion.div>
          <h1 className='text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl'>
            My name is Abhishek Rai &
          </h1>
          <p className='text-lg tracking-wider text-gray-700'>
            I Like coding 😎
          </p>
        </div>
        <div className='mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl'>
          {heroIcons.map((icon, index) => (
            <a
              href='#'
              key={index}
              className='rounded-lg hover:bg-red-400 hover:text-white transition-colors'
            >
              {icon}
            </a>
          ))}
        </div>
        <a
          href='#'
          className='mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider mx-auto text-white hover:bg-red-500 transition-colors'
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};

export default Hero;