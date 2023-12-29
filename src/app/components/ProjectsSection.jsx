"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Linkedin-clone-using-React-and-Firebase",
    description: "Project 1 description",
    image: "/images/projects/linkedinClone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RadinaAvramova/Linkedin-clone-using-React-and-Firebase?tab=readme-ov-file",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "tiktok-clone",
    description: "Project 2 description",
    image: "/images/projects/tikTokClone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RadinaAvramova/tiktok-clone",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "spotify-clone",
    description: "Project 3 description",
    image: "/images/projects/spotifyClone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RadinaAvramova/spotify-clone",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "uber-clone",
    description: "Project 4 description",
    image: "/images/projects/uberClone.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/RadinaAvramova/uber-clone",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "netflix-clone",
    description: "Authentication and CRUD operations",
    image: "/images/projects/netflixClone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RadinaAvramova/netflix-clone",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "airbnb-clone",
    description: "Project 5 description",
    image: "/images/projects/airbnbClone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RadinaAvramova/airbnb-clone",
    previewUrl: "/",
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
