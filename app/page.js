"use client";
import { useState } from "react";
import Hero from "../components/Hero";
import Nav_Pc from "../components/Nav/Nav_Pc";
import Nav_Mob from "../components/Nav/Nav_Mob"; 
import About from '../components/About';
import Skills from '../components/Skills';
import Qualification from '../components/Qualification';
import Portfolio from '../components/Portfolio';
import Contact from "../components/Contact";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Home() {
  const [nightMode, setNightMode] = useState(false);
  const nightHandler = (data) => {
    setNightMode(data);
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <div
      className={`scroll-smooth overflow-x-hidden${
        nightMode ? "bg-purple-heart  text-white" : "bg-white"
      }`}
    >
      {/* navbar for pc and tablet */}
      <Nav_Pc nightMode={nightMode} nightHandler={nightHandler}/>
      {/* navbar for mobile */}
      <Nav_Mob nightMode={nightMode} nightHandler={nightHandler}/>
      {/* home  */}
      <Hero nightMode={nightMode}/>
      {/* about  */}
      <About nightMode={nightMode}/>
      {/* skill */}
      <Skills nightMode={nightMode}/>
      {/* Qualification */}
      <Qualification nightMode={nightMode}/>
      {/* Portfolio */}
      <Portfolio nightMode={nightMode}/>
      {/* Contact */}
      <Contact nightMode={nightMode}/>
    </div>
    </ThemeProvider>
  );
}
