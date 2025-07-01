"use client"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag, Expand } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects"
import { ImageGallery } from "@/components/image-gallery"

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const project = projects.find((p) => p.id === Number.parseInt(projectId))

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-medium mb-4">Project not found</h1>
          <button
            onClick={() => router.push("/")}
            className="bg-accent text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    )
  }

  const openGallery = (index: number) => {
    setSelectedImageIndex(index)
    setGalleryOpen(true)
  }

  const closeGallery = () => {
    setGalleryOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-6">
        <motion.button
          onClick={() => router.push("/")}
          className="flex items-center text-accent hover:text-accent/80 transition-colors mb-6 text-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 group cursor-pointer">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onClick={() => openGallery(0)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h1 className="text-3xl font-heading font-medium mb-1">{project.title}</h1>
                  <p className="text-accent text-base">{project.category}</p>
                </div>
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Expand size={16} />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 mb-6"
            >
              <h2 className="text-xl font-heading font-medium mb-3">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm">{project.fullDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-base font-medium mb-2 text-accent">Key Features</h3>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-medium mb-2 text-accent">Technologies Used</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6"
            >
              <h2 className="text-xl font-heading font-medium mb-4">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative h-48 rounded-xl overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => openGallery(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    <motion.div
                      className="absolute top-2 right-2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Expand size={14} />
                    </motion.div>
                    <div className="absolute bottom-2 left-2 text-white text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {index + 1} / {project.images.length}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 sticky top-8"
            >
              <h2 className="text-lg font-heading font-medium mb-4">Project Details</h2>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-accent mr-3" />
                  <div>
                    <p className="text-xs text-gray-400">Duration</p>
                    <p className="font-medium text-sm">{project.duration}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <User className="w-4 h-4 text-accent mr-3" />
                  <div>
                    <p className="text-xs text-gray-400">Role</p>
                    <p className="font-medium text-sm">{project.role}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Tag className="w-4 h-4 text-accent mr-3" />
                  <div>
                    <p className="text-xs text-gray-400">Category</p>
                    <p className="font-medium text-sm">{project.category}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="flex space-x-3">
                    {project.demoLink && (
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-accent text-black font-medium py-2.5 px-3 rounded-lg flex items-center justify-center hover:bg-accent/90 transition-colors text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </motion.a>
                    )}

                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#2a2a2a] text-white font-medium py-2.5 px-3 rounded-lg flex items-center justify-center hover:bg-[#333333] transition-colors text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <ImageGallery
        images={project.images}
        isOpen={galleryOpen}
        initialIndex={selectedImageIndex}
        onClose={closeGallery}
      />
    </div>
  )
}
