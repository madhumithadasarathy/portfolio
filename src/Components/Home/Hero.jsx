import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* ===== NAVBAR ===== */}
      <header className="absolute top-0 left-0 w-full z-50 px-10 py-6 flex justify-between items-center">

        {/* Name */}
        <h1 className="font-anton text-xl tracking-wide text-neon">
          MADHUMITHA DASARATHY
        </h1>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-10 font-poppins text-sm">
          <a href="#home" className="hover:text-neon transition duration-300">
            Home
          </a>
          <a href="#projects" className="hover:text-neon transition duration-300">
            Projects
          </a>
          <a href="#achievements" className="hover:text-neon transition duration-300">
            Achievements
          </a>
          <a href="#contact" className="hover:text-neon transition duration-300">
            Contact
          </a>
        </nav>

        {/* Contact Button */}
        <button className="bg-neon text-black px-6 py-2 rounded-full font-poppins font-medium hover:scale-105 transition duration-300">
          Contact
        </button>
      </header>

      {/* ===== HERO CONTENT ===== */}
      <div className="flex flex-col justify-center items-center min-h-screen relative px-6">

        {/* Script Line */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-[22%] text-neon font-playlist text-4xl md:text-5xl z-20"
        >
          Engineering Intelligent Systems
        </motion.h2>

        {/* Big Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="font-poppins font-extrabold text-[18vw] md:text-[14vw] tracking-tight text-gray-200 text-center leading-none"
        >
          MADHUMITHA
        </motion.h1>

        {/* Hero Image */}
        <motion.img
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/madhu_hero.svg"
          alt="Madhu"
          className="absolute bottom-0 w-[300px] md:w-[420px] z-10"
        />

        {/* Left Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-28 left-10 font-poppins text-sm md:text-base"
        >
          AI Engineer <span className="text-neon">•</span> Software Developer{" "}
          <span className="text-neon">•</span> ML Researcher
        </motion.p>

        {/* Right Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-28 right-10 font-poppins text-sm md:text-base text-right"
        >
          Final Year CSE (AI & ML) | CGPA{" "}
          <span className="text-neon font-semibold">8.59</span>
        </motion.p>

        {/* Social Icons */}
        <div className="absolute bottom-10 left-10 flex gap-5 text-neon text-lg">
          <FaInstagram className="cursor-pointer hover:scale-125 transition duration-300" />
          <FaLinkedin className="cursor-pointer hover:scale-125 transition duration-300" />
          <FaGithub className="cursor-pointer hover:scale-125 transition duration-300" />
        </div>

        {/* GitHub Link */}
        <p className="absolute bottom-10 right-10 font-poppins text-sm text-gray-300">
          github.com/madhumitha-dasarathy
        </p>
      </div>
    </section>
  );
}
