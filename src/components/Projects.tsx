"use client";
import React, { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import Heading from "./sub/Heading";
import Project from "./sub/Project";
import { projectsButton, projectsData } from "@/assets";

const Projects = () => {
  const [tech, setTech] = useState("All");
  const [techIndex, setTechIndex] = useState(0);
  const prevIndex = useRef(0);
  const buttonsRef = useRef<HTMLButtonElement[]>([]);

  const handleClick = () => {
    animate(buttonsRef.current[prevIndex.current], { opacity: 0.5, scale: 1 });
    animate(buttonsRef.current[techIndex], { opacity: 1, scale: 1.2 });
  };

  useEffect(() => {
    handleClick();
    prevIndex.current = techIndex;
  }, [techIndex]);

  return (
    <div className='min-h-screen py-20 px-80'>
      <Heading text='Projects' />
      <div className='flex flex-wrap items-center justify-between gap-4 py-10'>
        {projectsButton.map((tech, index) => (
          <motion.button
            initial={{
              opacity: index === 0 ? 1 : 0.5,
              scale: index === 0 ? 1.2 : 1,
            }}
            ref={(el) => {
              el && buttonsRef.current.push(el);
            }}
            onClick={() => setTechIndex(index)}
            key={`tech-${index}`}
            className='border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400'
          >
            {tech}
          </motion.button>
        ))}
      </div>
      <div className='flex flex-wrap items-center justify-center gap-5'>
        {projectsData
          .filter((data) => {
            if (projectsButton[techIndex] === "All") {
              return true;
            }
            return data.tech.includes(projectsButton[techIndex]);
          })
          .map((data, index) => (
            <motion.div
              key={`project-${index}`}
              layout
            >
              <Project
                data={data}
                index={index}
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
