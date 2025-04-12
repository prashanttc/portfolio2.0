"use client";

import { Briefcase, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

export function ResumeSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-heading font-bold mb-2">Resume</h2>
        <div className="w-12 h-1 bg-accent mb-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <motion.div
            className="flex items-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Briefcase className="w-6 h-6 text-accent mr-3" />
            <h3 className="text-2xl font-heading font-semibold">Experience</h3>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="bg-[#222222] rounded-xl p-6 border-l-4 border-accent hover:bg-[#252525] transition-colors"
              variants={item}
              whileHover={{ x: 5 }}
            >
              <div className="inline-block bg-[#2a2a2a] text-accent text-sm px-3 py-1 rounded-full mb-3">
                2024-present
              </div>
              <h4 className="text-lg font-semibold mb-1">Tech Member</h4>
              <p className="text-accent text-sm mb-3">echelon dev society.</p>
              <p className="text-gray-400">
                Leading the tech team in college club .
              </p>
            </motion.div>

            <motion.div
              className="bg-[#222222] rounded-xl p-6 border-l-4 border-accent hover:bg-[#252525] transition-colors"
              variants={item}
              whileHover={{ x: 5 }}
            >
              <div className="inline-block bg-[#2a2a2a] text-accent text-sm px-3 py-1 rounded-full mb-3">
                2025
              </div>
              <h4 className="text-lg font-semibold mb-1">Event Coordinator</h4>
              <p className="text-accent text-sm mb-3">Dev Hacks</p>
              <p className="text-gray-400">
                Organised a 8 hour long national level hackathon at college.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#222222] rounded-xl p-6 border-l-4 border-accent hover:bg-[#252525] transition-colors"
              variants={item}
              whileHover={{ x: 5 }}
            >
              <div className="inline-block bg-[#2a2a2a] text-accent text-sm px-3 py-1 rounded-full mb-3">
                2025 - present
              </div>
              <h4 className="text-lg font-semibold mb-1">FoF core member</h4>
              <p className="text-accent text-sm mb-3">Friends of Figma</p>
              <p className="text-gray-400">
                core member of friends of figma club in indore.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div>
          <motion.div
            className="flex items-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <GraduationCap className="w-6 h-6 text-accent mr-3" />
            <h3 className="text-2xl font-heading font-semibold">Education</h3>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.2 }}
          >
            <motion.div
              className="bg-[#222222] rounded-xl p-6 border-l-4 border-accent hover:bg-[#252525] transition-colors"
              variants={item}
              whileHover={{ x: 5 }}
            >
              <div className="inline-block bg-[#2a2a2a] text-accent text-sm px-3 py-1 rounded-full mb-3">
                20022 - 2026
              </div>
              <h4 className="text-lg font-semibold mb-1">B.Tech Degree</h4>
              <p className="text-accent text-sm mb-3">
                Chameli Devi Group of Institutions
              </p>
              <p className="text-gray-400">
                Bachelor's degree in Artificial Intelligence and Data Science
                with a focus on web technologies.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#222222] rounded-xl p-6 border-l-4 border-accent hover:bg-[#252525] transition-colors"
              variants={item}
              whileHover={{ x: 5 }}
            >
              <div className="inline-block bg-[#2a2a2a] text-accent text-sm px-3 py-1 rounded-full mb-3">
                2021 - 2022
              </div>
              <h4 className="text-lg font-semibold mb-1">12th</h4>
              <p className="text-accent text-sm mb-3">Sai Baba Public School</p>
              <p className="text-gray-400">
completed 12th with Science stream with 86%</p>
            </motion.div>

            <motion.div
              className="bg-[#222222] rounded-xl p-6 border-l-4 border-accent hover:bg-[#252525] transition-colors"
              variants={item}
              whileHover={{ x: 5 }}
            >
              <div className="inline-block bg-[#2a2a2a] text-accent text-sm px-3 py-1 rounded-full mb-3">
                2019 - 2020
              </div>
              <h4 className="text-lg font-semibold mb-1">10th </h4>
              <p className="text-accent text-sm mb-3">Shri Devi Ahiliya Shishu Vihar</p>
              <p className="text-gray-400">
                Completed high school with a focus on mathematics and computer
                studies with 87%.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex items-center mb-6">
          <Award className="w-6 h-6 text-accent mr-3" />
          <h3 className="text-2xl font-heading font-semibold">Skills</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">HTML</span>
                <span className="text-sm text-accent">90%</span>
              </div>
              <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                <motion.div
                  className="bg-accent h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "90%" }}
                  transition={{ duration: 1, delay: 0.1 }}
                ></motion.div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">CSS</span>
                <span className="text-sm text-accent">85%</span>
              </div>
              <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                <motion.div
                  className="bg-accent h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                ></motion.div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">JavaScript</span>
                <span className="text-sm text-accent">80%</span>
              </div>
              <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                <motion.div
                  className="bg-accent h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                ></motion.div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">React</span>
                <span className="text-sm text-accent">85%</span>
              </div>
              <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                <motion.div
                  className="bg-accent h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.4 }}
                ></motion.div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Figma</span>
                <span className="text-sm text-accent">90%</span>
              </div>
              <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                <motion.div
                  className="bg-accent h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "90%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Next.js</span>
                <span className="text-sm text-accent">75%</span>
              </div>
              <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                <motion.div
                  className="bg-accent h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1, delay: 0.6 }}
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
