"use client"

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex overflow-hidden">
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      <main
        className={`flex-1 ${isExpanded ? "ml-44 sm:ml-60" : "ml-20"}`}
      >
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
