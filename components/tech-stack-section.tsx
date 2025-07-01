"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export function TechStackSection() {
  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "frontend",
      level: "Expert",
      proficiency: 95,
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "frontend",
      level: "Expert",
      proficiency: 90,
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "language",
      level: "Advanced",
      proficiency: 85,
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "language",
      level: "Expert",
      proficiency: 95,
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "language",
      level: "Intermediate",
      proficiency: 70,
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "backend",
      level: "Advanced",
      proficiency: 85,
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      category: "backend",
      level: "Advanced",
      proficiency: 80,
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "database",
      level: "Intermediate",
      proficiency: 75,
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "database",
      level: "Intermediate",
      proficiency: 70,
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      category: "frontend",
      level: "Expert",
      proficiency: 90,
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      category: "devops",
      level: "Beginner",
      proficiency: 55,
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "tools",
      level: "Expert",
      proficiency: 95,
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      category: "design",
      level: "Beginner",
      proficiency: 65,
    },
    {
      name: "Supabase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      category: "backend",
      level: "Advance",
      proficiency: 85,
    },
    {
      name: "Prisma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      category: "tools",
      level: "Advance",
      proficiency: 85,
    },

  ]

  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "language", label: "Languages" },
    { id: "database", label: "Database" },
    { id: "devops", label: "DevOps" },
    { id: "tools", label: "Tools" },
    { id: "design", label: "Design" },
  ]

  const filteredTech =
    activeCategory === "all" ? technologies : technologies.filter((tech) => tech.category === activeCategory)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "text-emerald-400"
      case "Advanced":
        return "text-blue-400"
      case "Intermediate":
        return "text-amber-400"
      default:
        return "text-gray-400"
    }
  }

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
    <div className="max-w-5xl">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl lg:text-4xl font-heading font-semibold mb-3">
          Tech <span className="text-accent">Stack</span>
        </h1>
        <div className="w-16 h-0.5 bg-accent mb-8" />
      </motion.div>

      {/* Category Navigation */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-accent text-black"
                  : "bg-[#222222]/50 text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Technology Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: -20 }}
        >
          {filteredTech.map((tech) => (
            <motion.div
              key={tech.name}
              className="group bg-[#1a1a1a]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#2a2a2a]/50 hover:border-accent/30 transition-all"
              variants={item}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Icon and Name */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center mr-4">
                  <img
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm mb-1 group-hover:text-accent transition-colors">{tech.name}</h3>
                  <span className={`text-xs font-medium ${getLevelColor(tech.level)}`}>{tech.level}</span>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-400">Proficiency</span>
                  <span className="text-xs text-accent font-medium">{tech.proficiency}%</span>
                </div>
                <div className="w-full bg-[#2a2a2a] rounded-full h-1.5">
                  <motion.div
                    className="bg-accent h-1.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
