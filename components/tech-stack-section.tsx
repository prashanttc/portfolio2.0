"use client"

import { technologies } from "@/contants"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export function TechStackSection() {


  const [activeCategory, setActiveCategory] = useState("all")
  const categories = ["all", "frontend", "backend", "language", "database", "design", "tool", "devops"]

  const filteredTech =
    activeCategory === "all" ? technologies : technologies.filter((tech) => tech.category === activeCategory)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div>
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-heading font-bold mb-2">Tech Stack</h2>
        <div className="w-12 h-1 bg-accent mb-6"></div>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === category
                ? "bg-accent text-black font-medium"
                : "bg-[#2a2a2a] text-gray-300 hover:bg-[#333333]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0 }}
        >
          {filteredTech.map((tech) => (
            <motion.div
              key={tech.name}
              className="bg-[#222222] rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-[#252525] border border-transparent hover:border-accent/20 transition-all"
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(255, 194, 84, 0.1)",
              }}
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-medium text-sm">{tech.name}</h3>
              <span
                className={`text-xs mt-1 px-2 py-1 rounded-full ${
                  tech.level === "Expert"
                    ? "bg-green-500/20 text-green-400"
                    : tech.level === "Advanced"
                      ? "bg-blue-500/20 text-blue-400"
                      : tech.level === "Intermediate"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                }`}
              >
                {tech.level}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
