"use client"

import { motion } from "framer-motion"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "resume", label: "Resume" },
  ]

  return (
    <nav className="flex flex-wrap justify-center lg:justify-end gap-2">
      {navItems.map((item, index) => (
        <motion.button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`relative px-4 py-2 text-xs lg:text-sm font-medium transition-all rounded-xl ${
            activeSection === item.id ? "text-black bg-accent" : "text-gray-400 hover:text-white hover:bg-[#2a2a2a]"
          }`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {item.label}
        </motion.button>
      ))}
    </nav>
  )
}
