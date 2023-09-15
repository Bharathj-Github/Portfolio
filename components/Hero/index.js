import React from "react";
import Link from "next/link";
import Image from "next/image";
import me from "../img/b_1.png";
import me_dark from "../img/b_2.png";
import send from "../img/send_1.svg";
import send_dark from "../img/send_3.svg";
import mouse from "../img/mouse_1.svg";
import mouse_dark from "../img/mouse_2.svg";
import swipe from "../img/swipe_1.svg";
import swipe_dark from "../img/swipe_2.svg";

export default function index({ nightMode }) {
  return (
    <div
      id="home"
      className={`h-screen ${nightMode && "bg-secondary"}`}
    >
      <div className="md:pt-[5rem] flex justify-evenly flex-col md:h-full">
        <div className="flex flex-col-reverse justify-evenly max-md:h-[calc(100vh-100px)] md:flex-row">
          {/* scroll icon for mobile */}
          <div className="flex justify-center mt-7 md:hidden">
            <div className="animate-bounce">
              <Image
                src={nightMode ? swipe_dark : swipe}
                alt="swipe"
                width={30}
              />
            </div>
          </div>
          {/* text  */}
          <div className="flex flex-col justify-evenly">
            {/* text  */}
            <div className="flex flex-col justify-center max-lg:px-9 ">
              <div className="text-5xl font-bold max-md:mt-6 lg:text-7xl">
                <h2>Hello,</h2>
                <h2 className="pt-4">
                  I&apos;m&nbsp;
                  <span
                    className={`${
                      nightMode ? "text-secondary_l" : "text-primary"
                    }`}
                  >
                    Bharath
                  </span>
                </h2>
              </div>
              <p className="font-bold pt-3 md:text-lg">Full-stack Developer</p>
              <p className="text-[0.8rem] font-medium pt-1 lg:w-[35rem] lg:text-sm">
                As a UI/UX designer, I thrive on the art of balancing aesthetics
                and functionality to deliver delightful digital journeys for
                users.{" "}
              </p>
            </div>
            {/* Contact button */}
            <div className="flex max-lg:justify-center mt-5">
              <Link
                href="#contact"
                className={`rounded-full capitalize  bg-[#ffffff] text-lg font-bold flex gap-3 py-1 hover:shadow-xl px-5 ${
                  nightMode ? "border-white bg-secondary" : "border-primary"
                } border-2 duration-200 ease-in-out lg:mb-10`}
              >
                Contact
                <Image
                  src={nightMode ? send_dark : send}
                  alt="send"
                  width={40}
                />
              </Link>
            </div>
          </div>
          {/* My Image */}
          <div className="flex justify-center items-center  saturate-[1.2]">
            <Image
              src={nightMode ? me_dark : me}
              alt="bharath"
              className="w-[22rem] lg:w-[30rem]"
            />
          </div>
        </div>
        {/* scroll icon for pc */}
        <div className="flex justify-center max-md:hidden">
          <div className="animate-bounce">
            <Image
              src={nightMode ? mouse_dark : mouse}
              alt="mouse"
              width={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
