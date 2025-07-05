import React from 'react';
import { motion } from 'framer-motion';


const experiences = [
  {
    title: "React Developer",
    company: "Freelance Projects",
    duration: "2022 - Present",
    details:
      "Built full-stack apps with Firebase, attendance tracking, payroll, and admin dashboards.",
  },
  {
    title: "AI Automation Designer",
    company: "Self-Projects",
    duration: "2023 - Present",
    details:
      "Developed AI agents with auto-evolving logic and Firebase-integrated control systems.",
  },
];

const certificates = [
  {
    title: "Introduction to Generative AI",
    img: "https://i.postimg.cc/gJg99yV4/Screenshot-2025-0628-114426.jpg",
  },
  {
    title: "ChatGPT Advanced Course",
    img: "https://i.postimg.cc/PqH0PVK2/Screenshot-2025-0628-114413.jpg",
  },
  {
    title: "Generative AI Software Development",
    img: "https://i.postimg.cc/7YdkYNpW/Screenshot-2025-0628-114440.jpg",
  },
];


const Profile = () => {
  return (
    <section
      id="profile"
      className="font-inter relative min-h-screen py-24 px-4 bg-gradient-to-br from-[#f0f4ff] via-white to-[#e7e1ff] text-center overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl z-0 animate-pulse"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12 }}
        className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4 drop-shadow z-10 relative"
      >
        🧾 PROFILE
      </motion.h2>
      <p className="text-xl text-gray-700 mb-8 font-semibold">Ashish Sharma — React Developer & AI Innovator</p>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
        className="max-w-2xl mx-auto bg-white/50 backdrop-blur-lg border border-white/30 rounded-2xl p-4 mb-10 shadow-md text-gray-700"
      >
        <p><strong>Email:</strong> rajk4435689@gmail.com</p>
        <p><strong>Phone:</strong> 8818050651</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/ASHISHGamin.git" className="text-blue-600 underline">ASHISHGamin</a></p>
        <p><strong>Location:</strong> Panipat, Haryana</p>
      </motion.div>

      
      {/* Career Summary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
        className="max-w-2xl mx-auto bg-white/50 backdrop-blur-lg border border-white/30 rounded-2xl p-6 mb-14 shadow-xl"
      >
        <h3 className="text-2xl font-bold text-blue-700 mb-2">Career Summary</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          Once dreamed of becoming an ethical hacker, but due to life’s challenges,
          I transformed into a passionate developer. I now create modern web apps,
          automate with AI, and dominate in gaming strategy.
        </p>
      </motion.div>

      {/* Experience */}
      <div className="max-w-3xl mx-auto text-left space-y-8 z-10 relative px-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
              delay: index * 0.15
            }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-xl transition-transform hover:shadow-blue-200"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-1">{exp.title}</h3>
            <p className="text-gray-500 text-sm mb-2">{exp.company} • {exp.duration}</p>
            <p className="text-gray-700">{exp.details}</p>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}
        className="max-w-xl mx-auto mt-16 bg-white/60 backdrop-blur-xl border border-white/30 rounded-xl p-6 shadow-xl"
      >
        <h3 className="text-2xl font-bold text-blue-700 mb-3">🎓 Education</h3>
        <p className="text-gray-700 text-base">
          12th Grade (CBSE) – <strong>67.4%</strong><br />
          Year: 2025 • Age: 17<br />
          Location: Panipat, Haryana
        </p>
      </motion.div>

      {/* Certificates */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 80 }}
        className="max-w-6xl mx-auto mt-20 px-4"
      >
        <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">📜 Certificates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white/60 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl p-3"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="rounded-lg w-full object-cover h-64 shadow"
              />
              <p className="mt-3 font-medium text-blue-700 text-center">{cert.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Glow Bottom */}
      <div className="absolute -bottom-32 -left-28 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>
      <div className="absolute -bottom-40 -right-32 w-[420px] h-[420px] bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>
    </section>
  );
};

export default Profile;
