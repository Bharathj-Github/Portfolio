import React from "react";
import Image from "next/image";
import me from "../img/my_png.png";
import Form from './Form';
import x from "../img/x.svg";
import l from "../img/l.svg";
import i from "../img/i.svg";
import f from "../img/f.svg";
import g from "../img/g.svg";

export default function index({ nightMode }) {
  return (
    <div className={`${nightMode && 'bg-secondary'} pt-[6rem] sm:h-screen max-sm:h-[100%] max-sm:pt-10`} id="contact">
      <div className={`flex flex-col items-center pb-8 max-sm:pb-0`} id="skills">
        <p className="text-4xl font-bold">Contact</p>
        <p>Contact Me</p>
      </div>
      <div className="flex max-sm:block">
        <div className="flex justify-center mt-6">
        <Image src={me} alt={"me"} className="grayscale w-[80vh] h-full max-sm:w-[30vh]" />
        </div>
        <div className={`flex justify-center items-center w-full ${nightMode && 'text-black'} pb-5`}>
        <Form/>
        </div>
      </div>
      <div className="bg-primary h-[5rem] flex items-center justify-evenly max-sm:mb-10">
        <div className="flex text-3xl font-bold text-white items-center h-full max-sm:text-xs">Bharath</div>
        <div className="flex gap-5">
          <Image src={x} alt="x" width={35} className=" max-sm:w-5"/>
          <Image src={l} alt="x" width={35} className=" max-sm:w-5"/>
          <Image src={i} alt="x" width={35} className=" max-sm:w-5"/>
          <Image src={f} alt="x" width={35} className=" max-sm:w-5"/>
          <Image src={g} alt="x" width={35} className=" max-sm:w-5"/>
        </div>
      </div>
    </div>
  );
}
