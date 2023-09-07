import React from 'react'
import Card from "./about_card";
import id from "../img/id.svg";
import idea from "../img/idea.svg";
import future from "../img/future.svg";
import card from "../img/card_l.svg";
import idea_l from "../img/idea_l.svg";
import future_l from "../img/rocket_l.svg";

export default function index({nightMode}) {
  return (
      <div className={` ${nightMode && 'bg-secondary'} sm:h-screen max-sm:h-[100%]`} id="about">
        <div className='flex flex-col items-center pt-[5rem] max-sm:pt-2'>
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mb-10">Introductin</p>
        <div className={`flex flex-col md:flex-row mx-10 gap-4 my-2`}>
          <div>
          <Card
            content={
              "I'm a passionate and aspiring web developer who believes in the transformative power of technology. While I may not have professional work experience yet, my journey into the world of web development has been driven by an insatiable curiosity and a commitment to mastering this dynamic field."
            }
            heading={"About"}
            img={[id,card]}
            nightMode={nightMode}
            />
            </div>
          <Card
            heading="Passion for Innovation"
            content="What drives me as a web developer is the opportunity to innovate and create. I'm captivated by the idea of turning a blank screen into a functional and visually appealing website or web application. I'm always on the lookout for the latest industry trends and best practices to stay at the forefront of web development."
            img={[idea,idea_l]}
            nightMode={nightMode}
          />
          <Card
            heading="Future Goals"
            content="My goal is to secure my first professional web development role, where I can contribute my skills and passion to meaningful projects. I'm eager to collaborate with experienced professionals, learn from their expertise, and continue my growth in this dynamic field."
            img={[future,future_l]}
            nightMode={nightMode}
          />
        </div>

        <div className="flex gap-6 mt-8">
          <div className="flex flex-col items-center">
            <p
              className={`${
                nightMode ? "text-[#8CABFF]" : "text-[#512B81]"
              } text-5xl font-bold`}
            >
              01+
            </p>
            <p className="flex flex-col items-center">
              Years <p>experience</p>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p
              className={`${
                nightMode ? "text-[#8CABFF]" : "text-[#512B81]"
              } text-5xl font-bold`}
            >
              02
            </p>
            <p className="flex flex-col items-center">
              working on <p>Project</p>
            </p>
          </div>
        </div>
        </div>
      </div>
  )
}
