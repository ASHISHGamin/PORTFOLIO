import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-blue-400 
        [text-shadow:3px_3px_0_rgba(0,0,0,0.1)] drop-shadow-2xl"
      >
        Hi, I’m <span className="text-blue-900">Ashish</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg sm:text-xl max-w-2xl mt-6 text-gray-700 tracking-wide leading-relaxed [text-shadow:1px_1px_0_rgba(0,0,0,0.05)]"
      >
        I craft intelligent, fast & visually stunning web apps using{" "}
        <span className="font-semibold text-blue-700 drop-shadow-md">React</span>,{" "}
        <span className="font-semibold text-blue-700 drop-shadow-md">Firebase</span>, and{" "}
        <span className="font-semibold text-blue-700 drop-shadow-md">AI innovation</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex gap-4 mt-10 flex-wrap justify-center"
      >
        <a
          href="/projects"
          className="bg-blue-600 text-white px-7 py-3 rounded-full shadow-xl hover:scale-105 hover:bg-blue-700 transition-all duration-300"
        >
          🚀 View Projects
        </a>
        <a
          href="/contact"
          className="bg-white border border-blue-600 text-blue-600 px-7 py-3 rounded-full shadow-md hover:bg-blue-50 hover:scale-105 transition-all duration-300"
        >
          📩 Contact Me
        </a>
        <a
          href="/about"
          className="bg-white border border-blue-600 text-blue-600 px-7 py-3 rounded-full shadow-md hover:bg-blue-50 hover:scale-105 transition-all duration-300"
        >
          👨‍💻 About Me
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
