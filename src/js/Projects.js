import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "AI Attendance App",
    description: "Track location-based attendance in real-time.",
    tech: ["React", "Firebase", "Geo API"],
    previewUrl: "" // add link later
  },
  {
    title: "Premium Portfolio Website",
    description: "A stunning 3D animated portfolio built with Tailwind & Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    previewUrl: ""
  },
  {
    title: "Site-wise Stock Manager",
    description: "Manage materials across multiple construction sites easily.",
    tech: ["React", "Firestore", "iOS UI"],
    previewUrl: ""
  }
];

// Smooth stagger effect
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Projects = () => {
  return (
    <section className="relative min-h-screen py-24 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-100 text-center overflow-hidden">
      {/* Glowing effect */}
      <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-blue-300 opacity-20 rounded-full blur-3xl z-0 animate-pulse"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="text-5xl font-extrabold text-blue-800 drop-shadow-xl mb-16 z-10 relative"
      >
        🚀 Projects
      </motion.h2>

      {/* Project Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 relative"
      >
        {projects.map((project, index) => (
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
          </motion.div>
        ))}
      </motion.div>

      {/* Floating glows */}
      <div className="absolute bottom-[-100px] left-[-50px] w-80 h-80 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-60px] w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
    </section>
  );
};

export default Projects;
