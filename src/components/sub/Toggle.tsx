"use client";
import { moonIcon, sunIcon } from "@/assets";
import React, { useEffect, useRef } from "react";
import { reactLocalStorage } from "reactjs-localstorage";

interface ToggleProps {
  children: React.ReactNode;
}

const Toggle = ({ children }: ToggleProps) => {
  const [darkMode, setDarkMode] = React.useState(
    reactLocalStorage.get("darkMode") !== undefined &&
      JSON.parse(reactLocalStorage.get("darkMode"))
  );
  const mainRef = useRef<HTMLDivElement>(null);

  const addDarkMode = () => {
    mainRef.current?.classList.add("dark");
    setDarkMode(true);
  };

  const removeDarkMode = () => {
    mainRef.current?.classList.remove("dark");
    setDarkMode(false);
  };

  useEffect(() => {
    const isDarkMode: string = window && reactLocalStorage.get("darkMode");
    const darkThemeParse = isDarkMode !== undefined && JSON.parse(isDarkMode);
    if (darkThemeParse) {
      addDarkMode();
    } else {
      removeDarkMode();
    }
  }, []);

  return (
    <main ref={mainRef}>
      <div className='bg-zinc-50 dark:bg-zinc-800 '>
        <div className='max-x-[120px] xl:w-full mx-auto flex justify-center px-96 xl:px-96 sm:pl-[80px] sm:pr-5 overflow-hidden'>
          <button
            onClick={() => {
              console.log(darkMode);
              if (darkMode) {
                removeDarkMode();
                window && reactLocalStorage.set("darkMode", false);
              } else {
                addDarkMode();
                window && reactLocalStorage.set("darkMode", true);
              }
              console.log(darkMode);
            }}
            className='fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-400'
          >
            <span className='absolute block rounded-full p-0 text-3xl hover:shadow-xl'>
              {darkMode ? sunIcon : moonIcon}
            </span>
          </button>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Toggle;
