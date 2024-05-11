"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "Available on Github and live ",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hassanalishah0335/Personal-Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Next JS Narsun Studios Website",
    description: "Available on Github and live",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hassanalishah0335/Nursun-Studio-website",
    previewUrl: "https://narsunstudios.com/",
  },
  {
    id: 3,
    title: "Ohemical Web Project",
    description: "Available on Github",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hassanalishah0335/Ohemical-Web-Component.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React Native Project",
    description: "Available on Github",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/hassanalishah0335/React-Native-app.git",
    previewUrl: "",
  },
  {
    id: 4.1,
    title: "CodeVector Web on NEXT.JS",
    description: "Available on Github and live",
    image: "/images/projects/4.1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/hassanalishah0335/code-vector.git",
    previewUrl: "https://code-vector.vercel.app/",
  },
  {
    id: 5,
    title: "Automated Exam Maker",
    description: "Available on Github",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hassanalishah0335/Automated-Exam-Maker.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Narsun React Web components",
    description: "Available on Gitub",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hassanalishah0335/Nursun-Studio-website",
    previewUrl: "",
  },
  {
    id: 7,
    title: "TRVL Web Project",
    description: "Available on Github",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hassanalishah0335/React-Website-Master.git",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
