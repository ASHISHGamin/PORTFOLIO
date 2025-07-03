import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), form);
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      alert("❌ Message failed. Try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 relative overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 14 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.01, rotateX: 1.5, rotateY: -1 }}
        style={{ transformStyle: "preserve-3d", perspective: 800 }}
        className="w-full max-w-2xl p-10 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 text-left transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center drop-shadow">
          📨 Get In Touch
        </h2>

        {submitted ? (
          <p className="text-green-700 text-center font-semibold text-xl">
            ✅ Message sent! I’ll reply shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-5 py-3 bg-white/70 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-5 py-3 bg-white/70 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full px-5 py-3 bg-white/70 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <div className="text-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 shadow-xl transition-all"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        )}
      </motion.div>

      {/* Ambient glow elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 rounded-full filter blur-2xl opacity-20 animate-pulse"></div>
    </section>
  );
};

export default Contact;
