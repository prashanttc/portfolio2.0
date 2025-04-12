"use client"

import { navItems } from "@/contants"
import { motion } from "framer-motion"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {

  return (
    <>
      {/* Top Nav: visible on md and above */}
      <nav className="hidden md:flex flex-wrap justify-end gap-6">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`relative px-3 py-2 text-base transition-colors ${
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

    </>
  )
}
