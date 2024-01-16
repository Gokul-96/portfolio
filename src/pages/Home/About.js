import React from "react";
import SectionTitle from "../../components/SectionTitle";
function About() {
  const skills = [
    "JAVASCRIPT",
    "REACT",
    "HTML5",
    "CSS3",
    "TAILWIND CSS",
    "NODEJS",
    "EXPRESSJS",
    "MONGODB",
    "MYSQL",
    "POSTMAN"
  ];
  return (
    <div className="bg-primary">
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col bg-primary">
        <div className="h-[50vh] w-1/2 sm:w-full ">
          <lottie-player
            src="https://lottie.host/b2244d0b-597d-4a70-8595-727ece0f5312/RnzhCiGrfe.json"
            background="#FFFFFF"
            speed="1"
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 mx-10 sm:w-full sm:p-5">
          <p className="text-white">
            I started my career as a Software Engineer. I had worked in
            Industrial Automation (open CV and machine vision) as well as
            front-end technologies. I later served as a Senior Application
            Engineer in machine vision. To further enhance my skills, I have
            professionally pursued MERN stack web development courses in Guvi.
          </p>
          <p className="text-white">
            I have a bachelor's in Electronics and Instrumentation Engineering
            in 2018.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I have been working recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5 ">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-5">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
