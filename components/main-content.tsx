"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { ResumeSection } from "@/components/resume-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ContactSection } from "@/components/contact-section"
import { AnimatePresence, motion } from "framer-motion"

export function MainContent({Section}:{Section:string}) {
  const [activeSection, setActiveSection] = useState("")

  const renderSection = () => {
    switch (activeSection || Section) {
      case "about":
        return <AboutSection />
      case "resume":
        return <ResumeSection />
      case "portfolio":
        return <PortfolioSection />
      case "tech-stack":
        return <TechStackSection />
      case "contact":
        return <ContactSection />
      default:
        return <AboutSection />
    }
  }

  return (
    <div className=" bg-[#1e1e1e]/80 backdrop-blur-sm rounded-2xl p-8">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
