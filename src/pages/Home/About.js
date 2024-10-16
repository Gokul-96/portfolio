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
    "RESTFUL API",
    "WEBPACK",
    "POSTMAN",
  ];
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col bg-primary">
        <div className="h-[50vh] w-1/2 sm:w-full ">
          <lottie-player
            src="https://lottie.host/b2244d0b-597d-4a70-8595-727ece0f5312/RnzhCiGrfe.json"
            background="primary"
            speed="0.5"
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 mx-10 sm:w-full sm:p-5">
          <p className="text-white">
            I began my career as a Software Engineer, working extensively with
            front-end technologies, specifically in Frontend development.
            Subsequently, I transitioned to the role of a Senior Application
            Engineer, specializing in vision and UI. Seeking continuous
            improvement and skill enhancement,<b>I pursued professional courses in
            MERN stack web development at Guvi, an IIMA & IITM-incubated
            company. </b> 
          </p>
          <p className="text-white">
            I obtained a bachelor's degree in Electronics and
            Instrumentation Engineering in 2018 with 65%. Prior to that, I
            completed my SSLC in 2012 with 83% and HSC in 2014 with 73%, both at Kongu Vellalar
            Matric Higher Secondary School, Chennimalai.
          </p>
        </div>
      </div>
      <div className="py-5 bg-primary">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I have been working recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5 ">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-5 ">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
