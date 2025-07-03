import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>

        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          I’m Ashish, a passionate developer who loves building useful apps using modern technologies like React, Firebase, and AI. I enjoy solving real-world problems through clean code and beautiful UI/UX.
        </p>

        {/* Timeline */}
        <div className="border-l-4 border-blue-600 pl-6">
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800">🏆ADVANCE ChatGPT</h4>
            <p className="text-gray-600">Google Cloid, 2023 – 2025</p>
          </div>
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800">💼 Freelance React Developer</h4>
            <p className="text-gray-600">Built custom web apps for startups & clients (2025 – Present)</p>
          </div>
          <div className="mb-2">
            <h4 className="text-xl font-semibold text-gray-800">🏆 Certified in Generative AI & ChatGPT</h4>
            <p className="text-gray-600">Google Cloud, Simplilearn, 2025</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
