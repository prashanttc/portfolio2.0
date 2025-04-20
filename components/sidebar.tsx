"use client"

import { Mail, Phone, Calendar, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function Sidebar() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path in /public folder
    link.download = 'Prashant_CV.pdf';
    link.click();
  };
  return (
    <motion.div
      className="bg-[#1e1e1e]/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center sticky top-8 h-fit"
      whileHover={{ boxShadow: "0 0 25px rgba(255, 194, 84, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gradient-to-br from-[#2a2a2a] to-[#222222] rounded-2xl p-4 mb-6 w-36 h-36 flex items-center justify-center overflow-hidden">
        <Image
          src="/my-avatar.png"
          alt="Profile Avatar"
          width={100}
          height={100}
          className="rounded-xl"
        />
      </div>

      <h1 className="text-3xl font-heading font-bold mb-2">Prashant chouhan</h1>

      <div className="bg-[#2a2a2a] rounded-full px-4 py-2 text-sm mb-6">Web developer</div>

      <div className="flex space-x-3 mb-6">
        <motion.a
          href="https://github.com/prashanttc"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#2a2a2a] rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-black"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Github size={18} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/prashantt-chouhan/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#2a2a2a] rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-black"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Linkedin size={18} />
        </motion.a>
        <motion.a
          href="https://x.com/Prashan47590482"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#2a2a2a] rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-black"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Twitter size={18} />
        </motion.a>
      </div>

      <div className="w-full border-t border-[#333333] my-4"></div>

      <div className="w-full space-y-6 mt-4">
        <motion.div className="flex items-center" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
          <div className="w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center mr-4">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-xs text-gray-400">EMAIL</p>
            <p className="text-sm">contact.prashant31@gmail.com</p>
          </div>
        </motion.div>
        <motion.div className="flex items-center" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
          <div className="w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center mr-4">
            <Calendar className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-xs text-gray-400">BIRTHDAY</p>
            <p className="text-sm">January 31, 2005</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="w-full mt-8 bg-accent text-black font-medium rounded-xl py-3 hover:bg-accent/90"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleDownload}
      >
        Download CV
      </motion.button>
    </motion.div>
  )
}
