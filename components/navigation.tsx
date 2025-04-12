"use client"

import { motion } from "framer-motion"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-6">
      {navItems.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`relative px-3 py-2 text-sm md:text-base transition-colors ${
            activeSection === item.id ? "text-accent font-medium" : "text-gray-400 hover:text-white"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.label}
          {activeSection === item.id && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
              layoutId="underline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.button>
      ))}
    </nav>
  )
}
