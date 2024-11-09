"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React JS</li>
        <li>Next JS</li>
        <li>React Native</li>
        <li>Tailwind</li>
        <li>Bootstrap</li>
        <li>TKinter</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University Of South Asia (BSCS)</li>
        <li>Punjab College (ICS)</li>
        <li>BISE (Computer Science)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Git</li>
        <li>GitHub</li>
        <li>Jira</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className=" rounded-3xl" src="/images/Hassan.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a certified software developer aspiring to work with frontend web and mobile applications. Currently, I am
employed at Einix Solutions Pvt.Ltd in Lahore as a Software developer. I have experience with a range of programming
languages and frameworks, and I specialize in frontend development for cross-platform mobile applications and web
application.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Management Tools{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <ul>
          <li className="font-bold pt-10 pb-2">Program Lang.</li>
          <li className="">JavaScript</li>
          <li className="">Python</li>
          <li className="">C/C++</li>
          <li className="">HTML/CSS</li>
        </ul>
        <ul>
          <li className="font-bold pt-10 pb-2">Languages</li>
          <li className="">English (7.5 IELTS)</li>       
        </ul>
        <ul>
          <li className="font-bold pt-10 pb-2">Pro. Skills</li>
          <li className="">Client Handling</li>
          <li className="">Presentation</li>
          <li className="">Communication</li>
          <li className="">Client / Customer Support</li>
        </ul>
        <ul>
          <li className="font-bold pt-10 pb-2">Hobbies</li>
          <li className="">Guitar Playing</li>
          <li className="">Singing</li>
          <li className="">Horse Riding</li>
          <li className="">Swimming</li>
          <li className="">Workout</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
