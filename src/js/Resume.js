import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "React Developer",
    company: "Freelance Projects",
    duration: "2022 - Present",
    details: "Built full-stack apps with Firebase, attendance tracking, payroll, and admin dashboards.",
  },
  {
    title: "AI Automation Designer",
    company: "Self-Projects",
    duration: "2023 - Present",
    details: "Developed AI agents with auto-evolving logic and Firebase-integrated control systems.",
  },
];

const Resume = () => {
  return (
    <section
      id="resume"
      className="relative min-h-screen py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-100 text-center overflow-hidden"
    >
      {/* Glowing background effect */}
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl z-0 animate-pulse"></div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12 }}
        className="text-5xl font-extrabold text-blue-800 mb-14 drop-shadow z-10 relative"
      >
        🧾 Resume
      </motion.h2>

      {/* Resume Download Button */}
      <div className="flex justify-center mb-12 z-10 relative">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 hover:scale-105 transition-all shadow-xl"
        >
          <Download className="w-5 h-5 mr-2" /> Download Resume
        </a>
      </div>

      {/* Experience List */}
      <div className="max-w-3xl mx-auto text-left space-y-8 z-10 relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
              delay: index * 0.15
            }}
            whileHover={{ scale: 1.03, rotateX: 3, rotateY: -2 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="group bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-blue-300 will-change-transform"
          >
            <h3 className="text-xl font-semibold text-blue-700 drop-shadow group-hover:scale-[1.02] transition-transform duration-200">
              {exp.title}
            </h3>
            <p className="text-gray-500 text-sm mb-2">{exp.company} • {exp.duration}</p>
            <p className="text-gray-700">{exp.details}</p>
          </motion.div>
        ))}
      </div>

      {/* 3D lighting elements */}
      <div className="absolute -bottom-32 -left-28 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>
      <div className="absolute -bottom-40 -right-32 w-[420px] h-[420px] bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>
    </section>
  );
};

export default Resume;
