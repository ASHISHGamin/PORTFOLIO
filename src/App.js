import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./js/Navbar";
import Home from "./js/Home";
import Skills from "./js/Skills";
import Projects from "./js/Projects";
import Resume from "./js/Profile";
import Contact from "./js/Contact";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import About from "./js/About";

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
