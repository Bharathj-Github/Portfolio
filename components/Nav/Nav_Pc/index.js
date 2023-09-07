"use client";
import React,{useState} from 'react';
import NightMode_Btn from "../../NightMode_Btn";

export default function Index({nightMode,nightHandler}) {
    const [active, setActive] = useState("home");
  const css = `text-white ${
    nightMode ? "bg-secondary_l" : "bg-primary"
  } px-2 py-1 rounded-full duration-300 ease-in-out`;

  const handler = (event) => {
    setActive(event.target.attributes.name.nodeValue);
    console.log(document.getElementById(event.target.attributes.name.nodeValue)
    .offsetTop)
    scrollTo({
      behavior: "smooth",
      top: document.getElementById(event.target.attributes.name.nodeValue)
        .offsetTop,
    });
  };

  return (
    <div>
       <div
        className={`fixed top-0 py-4 h-20 ${
          nightMode ? "bg-secondary" : "bg-white"
        } max-md:hidden w-screen z-10`}
      >
        <nav className={`flex justify-evenly items-center`}>
          <div onClick={handler} name="home" className={"font-bold text-lg lg:text-2xl"}>
            Bharath
          </div>
          <div className="text-[1rem] flex gap-3 items-center font-semibold max-lg:text-[0.7rem] overflow-hidden">
            <div
              onClick={handler}
              name="home"
              className={active == "home" ? css : "" + "px-2"}
            >
              Home
            </div>
            <div
              onClick={handler}
              name="about"
              className={active == "about" ? css : "" + "px-2"}
            >
              About
            </div>
            <div
              onClick={handler}
              name="skills"
              className={active == "skills" ? css : "" + "px-2"}
            >
              Skills
            </div>
            <div
              onClick={handler}
              name="qualification"
              className={active == "qualification" ? css : "" + "px-2"}
            >
              Qualification
            </div>
            <div
              onClick={handler}
              name="portfolio"
              className={active == "portfolio" ? css : "" + "px-2"}
            >
              Portfolio
            </div>
            <div
              onClick={handler}
              name="contact"
              className={active == "contact" ? css : "" + "px-2"}
            >
              ContactMe
            </div>
            <NightMode_Btn nightHandler={nightHandler} nightMode={nightMode} />
          </div>
        </nav>
      </div>
    </div>
  )
}
