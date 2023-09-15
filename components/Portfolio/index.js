import React, { useState } from "react";
import Card from "./Card";
import project_1 from "../img/project_1.png";
import project_2 from "../img/project_2.png";
import Image from "next/image";
import left from "../img/left_l.svg"

export default function Index({ nightMode }) {
  const [focus, setFocus] = useState(0);
  const css_onFocus = "absolute rounded-3xl -translate-y-6 max-sm:scale-[1.7]";

  return (
    <div className={nightMode ? "bg-secondary" : "bg-white" + "w-screen h-[100%] max-md:pb-[5rem]"} id="portfolio">
      <div className={`pt-[5rem] flex flex-col items-center`} id="skills">
        <p className="text-4xl font-bold">Portfolio</p>
        <p>My Projects</p>
      </div>
      <div className="flex justify-evenly pt-5 max-sm:pt-[10rem] max-sm:py-[8rem]">
        <button
          onClick={() => {
            if(focus >= 2){
              setFocus(0);
            }else setFocus(focus+1)
          }}
        >
         <Image src={left} alt={'left'} width={30}/>
        </button>
            <div className={`flex justify-evenly gap-5 pt-7 ${focus === 0 ? 'flex-row':"flex-row-reverse"}`}>
        <div
          className={`${focus === 2 && css_onFocus}`}
          onClick={() => {
            setFocus(2);
          }}
        >
          <Card
            nightMode={nightMode}
            img={project_1}
            name={"RETRO DAPPER"}
            bio={
              "A React.js-powered online clothing store. Here, we blend the best of modern web technology with classic style, offering a curated selection of vintage-inspired garments that celebrate elegance and sophistication. "
            }
            made={["React JS", "Tailwind CSS"]}
            focus={focus === 2 ? true : false}
          />
        </div>
        <div
          className={`${focus === 0 && css_onFocus}`}
          onClick={() => {
            setFocus(0);
          }}
        >
          <Card
            nightMode={nightMode}
            img={project_2}
            name={"MY PORTFOLIO"}
            bio={`Welcome to my Next.js portfolio website, where innovation meets creativity! As a passionate web developer, I've harnessed the power of Next.js to showcase my skills, projects, and aspirations. `}
            made={["Next JS", "Tailwind CSS", "Matirial UI"]}
            focus={focus === 0 ? true : false}
          />
        </div>
        <div
          className={`${focus === 1 && css_onFocus}`}
          onClick={() => {
            setFocus(1);
          }}
        >
          <Card
            nightMode={nightMode}
            img={project_1}
            name={"SOLAR SYSTEM"}
            bio={`Three.js creation – an immersive website that showcases the wonders of our solar system. Using cutting-edge technology, I've brought the cosmos to your screen, allowing you to explore the celestial bodies in breathtaking detail. `}
            made={["Three JS"]}
            focus={focus === 1 ? true : false}
          />
        </div>
        </div>
        <button onClick={() => {
         if(focus <= 0){
          setFocus(2);
        }else setFocus(focus-1)
        }}
        >
         <Image src={left} alt={'left'} width={30} className=" rotate-180"/>
        </button>
        </div>
    </div>
  );
}
