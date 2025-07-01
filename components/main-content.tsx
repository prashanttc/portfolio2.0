"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ResumeSection } from "@/components/resume-section"
import { AnimatePresence, motion } from "framer-motion"

export function MainContent() {
  const [activeSection, setActiveSection] = useState("about")

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />
      case "projects":
        return <ProjectsSection />
      case "tech-stack":
        return <TechStackSection />
      case "resume":
        return <ResumeSection />
      default:
        return <AboutSection />
    }
  }

  return (
    <div className="bg-[#1a1a1a]/90 backdrop-blur-sm rounded-3xl p-6 lg:p-8 min-h-[calc(100vh-4rem)]">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="mt-8 lg:mt-12"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
