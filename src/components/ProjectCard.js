// src/components/ProjectCard.js

import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, previewUrl }) => {
  const [tab, setTab] = useState("description");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      whileHover={{ scale: 1.03, rotateX: 3, rotateY: -2 }}
      viewport={{ once: true }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className="group bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-6 text-left transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
    >
      <h3 className="text-xl font-semibold text-blue-700 mb-1 drop-shadow">{title}</h3>

      <div className="flex flex-wrap gap-2 text-sm mb-3">
        {tech.map((t, i) => (
          <span
            key={i}
            className="bg-blue-100/80 text-blue-700 px-3 py-1 rounded-full font-medium shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mb-4 text-sm font-medium text-blue-600">
        <button
          onClick={() => setTab("description")}
          className={`px-3 py-1 rounded-full transition-all ${
            tab === "description"
              ? "bg-blue-100 shadow text-blue-800"
              : "hover:bg-blue-50"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => {
            if (previewUrl) {
              window.open(previewUrl, "_blank");
            }
          }}
          className={`px-3 py-1 rounded-full transition-all hover:bg-blue-50`}
        >
          Live Preview
        </button>
      </div>

      {tab === "description" && (
        <p className="text-gray-700 mb-4">{description}</p>
      )}
    </motion.div>
  );
};

export default ProjectCard;