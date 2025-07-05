import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "MaxBond App (Web + Mobile)",
    description:
      "MaxBond is a complete construction automation solution. Features include real-time location-based attendance, site-wise stock management, expense tracking, export systems, and mobile + desktop support.",
    tech: ["React", "Firebase", "Framer Motion", "Tailwind", "Geo API"],
    previewUrl: "https://maxbond.vercel.app",
    credentials: {
      username: "rajk4435689@gmail.com",
      password: "8818050651a"
    },
    type: "major"
  },
  {
    title: "AI use self brain under devlopment",
    description: "this ai is two face its admin ai use self brain and upgraid public ai command by owner and second for public its can,t upgrad your self .",
    tech: ["React", "Tailwind"],
    previewUrl: "#",
    type: "mini"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built using React, Framer Motion and TailwindCSS.",
    tech: ["React", "Framer Motion", "Tailwind"],
    previewUrl: "#",
    type: "major"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const tabs = ["All", "Major", "Mini"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.type === activeTab.toLowerCase());

  return (
    <section className="relative min-h-screen py-24 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-100 text-center overflow-hidden">
      <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-blue-300 opacity-20 rounded-full blur-3xl z-0 animate-pulse"></div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="text-5xl font-extrabold text-blue-800 drop-shadow-xl mb-8 z-10 relative"
      >
        🚀 Projects
      </motion.h2>

      {/* Tab Buttons */}
      <div className="flex justify-center space-x-4 mb-12 z-10 relative">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full transition-all duration-200 font-medium shadow-md ${
              activeTab === tab
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700 hover:bg-blue-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto z-10 relative"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.15
            }}
          >
            <ProjectCard {...project} />
            {project.credentials && (
              <div className="mt-2 text-sm text-left text-gray-600 bg-white/70 backdrop-blur-lg border border-white/30 p-3 rounded-xl">
                <p><strong>Login ID:</strong> {project.credentials.username}</p>
                <p><strong>Password:</strong> {project.credentials.password}</p>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute bottom-[-100px] left-[-50px] w-80 h-80 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-60px] w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
    </section>
  );
};

export default Projects;
