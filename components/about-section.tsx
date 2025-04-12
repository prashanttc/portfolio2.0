"use client"

import { Code, Smartphone, ImageIcon, PersonStandingIcon, BookAIcon, BookDashed, TrendingUpDown, AtomIcon } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        <h2 className="text-3xl font-heading font-bold mb-2">About Me</h2>
        <div className="w-12 h-1 bg-accent mb-6"></div>
      </motion.div>

      <motion.div
        className="space-y-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-gray-300 leading-relaxed">
        I'm an 20-year-old developer based in Indore, India, with a passion for building things that live on the internet. I work primarily with modern web technologies like Next.js, Tailwind CSS, and Supabase — because reinventing the wheel is overrated. When I'm not busy shipping features or debugging something that "shouldn't be broken," you'll find me organizing community events, brainstorming side projects, or pretending I know how to fix every bug on the first try.
        </p>

        <p className="text-gray-300 leading-relaxed">
        I’m always exploring new tools, frameworks, and ideas — whether it's optimizing performance, designing smooth user flows, or just learning something cool to add to my toolbox. I believe in clean code, good design, and building things that people actually enjoy using.
        </p>
      </motion.div>

      <motion.h2
        className="text-3xl font-heading font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        What I'm Doing
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      > <motion.div
          className="bg-[#222222] rounded-xl p-6 hover:bg-[#252525] transition-colors border border-transparent hover:border-accent/20"
          variants={item}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#2a2a2a] rounded-lg flex items-center justify-center mr-4">
              <Code className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Web Development</h3>
          </div>
          <p className="text-gray-400">High-quality development of sites at the professional level.</p>
        </motion.div>

        <motion.div
          className="bg-[#222222] rounded-xl p-6 hover:bg-[#252525] transition-colors border border-transparent hover:border-accent/20"
          variants={item}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#2a2a2a] rounded-lg flex items-center justify-center mr-4">
              <AtomIcon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold"> AI & Machine Learning</h3>
          </div>
          <p className="text-gray-400">Exploring the world of AI — from embeddings and vector search to building smarter, context-aware applications.</p>
        </motion.div>

       
        <motion.div
          className="bg-[#222222] rounded-xl p-6 hover:bg-[#252525] transition-colors border border-transparent hover:border-accent/20"
          variants={item}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#2a2a2a] rounded-lg flex items-center justify-center mr-4">
              <BookDashed className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Student</h3>
          </div>
          <p className="text-gray-400">Currently pursuing my studies while building projects that bridge the gap between theory and real-world development.</p>
        </motion.div>

        <motion.div
          className="bg-[#222222] rounded-xl p-6 hover:bg-[#252525] transition-colors border border-transparent hover:border-accent/20"
          variants={item}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#2a2a2a] rounded-lg flex items-center justify-center mr-4">
              <TrendingUpDown className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold"> Learning & Experimenting</h3>
          </div>
          <p className="text-gray-400">Constantly tinkering with new tech, frameworks, and ideas to push my skills to the next level.

.</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
