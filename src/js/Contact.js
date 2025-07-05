import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const phoneNumber = "8818050651"; // ✅ Your number
  const email = "rajk4435689@gmail.com"; // ✅ Your email
  const whatsappLink = `https://wa.me/91${phoneNumber}`;

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
        className="w-full max-w-2xl p-10 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 text-center"
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-6 drop-shadow">
          📨 Contact Me Directly
        </h2>

        <p className="text-gray-700 mb-6 text-lg font-medium">
          I’m available for collaboration, freelance projects, or tech chats. <br />
          Feel free to connect via any of the options below:
        </p>

        <div className="space-y-6">
          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 hover:scale-105 transition-all shadow-lg"
          >
            <MessageCircle className="mr-2" /> WhatsApp Me at +91 {phoneNumber}
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}?subject=Let's Connect`}
            className="inline-flex items-center justify-center w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 hover:scale-105 transition-all shadow-lg"
          >
            <Mail className="mr-2" /> Email Me – {email}
          </a>

          {/* Phone */}
          <a
            href={`tel:+91${phoneNumber}`}
            className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 hover:scale-105 transition-all shadow-lg"
          >
            <PhoneCall className="mr-2" /> Call Me at +91 {phoneNumber}
          </a>
        </div>
      </motion.div>

      {/* Glows */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 rounded-full filter blur-2xl opacity-20 animate-pulse"></div>
    </section>
  );
};

export default Contact;
