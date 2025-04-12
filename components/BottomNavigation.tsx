"use client"

import { navItems } from "@/contants"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface NavigationProps {
    activeSection: string
    setActiveSection: (section: string) => void
  }
  

export function BottomNavigation({ activeSection, setActiveSection }: NavigationProps) {

  // Track screen size to toggle between top and bottom nav
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {/* Bottom Nav: visible only on mobile */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#1e1e1e]/80 backdrop-blur-sm rounded-2xl p-8  border-t border-gray-800 flex justify-around py-5 md:hidden">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center text-xs ${
                activeSection === item.id ? "text-accent font-medium" : "text-gray-400 hover:text-white"
              }`}
              whileTap={{ scale: 0.9 }}
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-accent mt-1"
                  layoutId="dot"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </nav>
      )}
    </>
  )
}
