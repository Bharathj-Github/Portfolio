import React from "react";
import Card from "./Card";

export default function index({ nightMode }) {
  return (
    <div className={`${nightMode && "bg-secondary"} h-[100%] max-md:pt-10`} id="qualification">
      <div
        className={`pt-[5rem] flex flex-col items-center mb-16 max-sm:pt-3`}
        id="skills"
      >
        <p className="text-4xl font-bold">Qualification</p>
        <p>My Academics</p>
      </div>
      <div className="grid grid-flow-col gap-5 mx-14 max-lg:grid-flow-row">
        <Card
          name={"Secondary School Leaving Certificate - SSLC"}
          university={"Secondary Education Examination Bord"}
          institute={"Sree Cauvery Educational Institutions"}
          pass={"01 Apr 2016"}
          branch={"NA"}
          nightMode={nightMode}
        />
        <Card
          name={"Diploma"}
          university={"Visvesvaraya Technological University"}
          institute={"Jss polytechnic mysore"}
          pass={"15 May 2019"}
          branch={"Mechatronics Engineering"}
          nightMode={nightMode}
        />
        <Card
          name={"Bachelor of Engineering - BE"}
          university={"Visvesvaraya Technological University"}
          institute={"Vidyavardhaka College of Engineering"}
          pass={"10 Aug 2022"}
          branch={"Mechanical Engineering"}
          nightMode={nightMode}
        />
      </div>
    </div>
  );
}
