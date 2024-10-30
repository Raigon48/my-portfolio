"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Loader from "@/components/sub/Loader";
import Toggle from "@/components/sub/Toggle";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [id, setId] = useState("random");
  const compsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (compsRef.current) {
      const compsArr = Array.from(compsRef.current.children);
      compsArr.forEach((comp) => observer.observe(comp));
    }
  }, []);
  return (
    <>
      <Loader />
      <Toggle>
        <Navbar id={id} />
        <div ref={compsRef}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </Toggle>
    </>
  );
}
