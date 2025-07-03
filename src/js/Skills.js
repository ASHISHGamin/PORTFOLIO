import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaFire } from "react-icons/fa";
import { SiTailwindcss, SiOpenai } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Firebase", icon: FaFire, color: "text-yellow-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "AI & ChatGPT", icon: SiOpenai, color: "text-violet-600" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" },
];

const Skills = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-blue-100 via-white to-blue-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
        className="text-4xl font-extrabold text-blue-800 drop-shadow mb-4"
      >
        🧠 My Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.2 }}
        className="text-gray-600 mb-10 max-w-xl mx-auto drop-shadow-sm"
      >
        Here are the technologies and tools I use to craft fast, intelligent, and beautiful web experiences.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.06 }}
              whileHover={{ scale: 1.05, rotateX: 4, rotateY: -4 }}
              style={{ transformStyle: "preserve-3d", perspective: 800 }}
              className="group bg-white/70 backdrop-blur-2xl shadow-[inset_0px_0px_25px_rgba(0,0,0,0.08)] border border-blue-200 rounded-3xl p-6 flex flex-col items-center transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-blue-300 will-change-transform"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 3 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
                className={`text-5xl mb-3 drop-shadow-2xl ${skill.color} will-change-transform`}
              >
                <IconComponent />
              </motion.div>
              <h4 className="text-blue-700 font-semibold text-lg drop-shadow group-hover:scale-105 transition-transform duration-200">
                {skill.name}
              </h4>
              <div className="w-full h-1 mt-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full blur-sm group-hover:blur group-hover:scale-105 transition-all duration-300"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;