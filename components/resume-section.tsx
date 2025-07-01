"use client"

import {  GraduationCap, Heart, Users, Calendar, MapPin, Trophy } from "lucide-react"
import { motion } from "framer-motion"

export function ResumeSection() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      achievements: [
        "Increased application performance by 40%",
        "Led team of 5 developers on major releases",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc",
      location: "Remote",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed responsive web applications with focus on user experience.",
      achievements: [
        "Built 15+ responsive web applications",
        "Improved user engagement by 35%",
        "Integrated payment systems and APIs",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Junior Web Developer",
      company: "StartupHub",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Worked on diverse client projects from e-commerce to corporate websites.",
      achievements: [
        "Delivered 20+ client projects on time",
        "Contributed to open-source projects",
        "Learned modern web development practices",
      ],
      technologies: ["JavaScript", "HTML/CSS", "PHP"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
      school: "Chameli Devi Group of Institution, Indore",
      location: "indore, mp",
      period: "2022 - 2026",
      description: "Focused on software engineering and web technologies.",
      coursework: ["Data Structures", "Algorithms", "Software Engineering", "Artificial Intelligence"],
    },
    {
      degree: "12th",
      school: "sai baba public school",
      location: "indore, Mp",
      period: "2022-2023",
      description: "12th standard with science stream.",
    },
  ]

  const volunteerWork = [
    {
      title: "Core Member",
      organization: "Friends of figma",
      location: "Indore",
      period: "2025 - Present",
      description: "part of the core team of official figma team of indore.",
      skills: ["Mentoring", "design", "event management"],
    },
    {
      title: "Tech member",
      organization: "Echelon dev society",
      location: "indore",
      period: "2025 - present",
      description: "part of technical team of eds club.",
      skills: ["Web development", "Volunteer Management", "Technical skills"],
    },
  ]

  const extraRoles = [
    {
      title: "Open Source Contributor",
      project: "React Ecosystem",
      period: "2020 - Present",
      description: "Contributing to various React libraries and maintaining personal projects.",
      contributions: [
        "500+ GitHub contributions annually",
        "Maintained 3 popular npm packages",
        "Active in React community discussions",
      ],
      technologies: ["React", "TypeScript", "Node.js"],
    },
    {
      title: "Technical Writer",
      platform: "Dev.to & Medium",
      period: "2021 - Present",
      description: "Writing technical articles about web development and best practices.",
      contributions: ["Published 25+ technical articles", "50K+ total article views", "Featured in weekly newsletters"],
      technologies: ["Technical Writing", "Documentation"],
    },
  ]

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
    <div className="max-w-5xl">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl lg:text-4xl font-heading font-semibold mb-3">
          Professional <span className="text-accent">Resume</span>
        </h1>
        <div className="w-16 h-0.5 bg-accent mb-8" />
      </motion.div>

      <div className="space-y-16">
        {/* Professional Experience */}
        {/* <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
              <Briefcase className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-medium">Professional Experience</h2>
              <p className="text-xs text-gray-400">Full-time positions and career progression</p>
            </div>
          </div>

          <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#2a2a2a]/50 hover:border-accent/30 transition-all"
                variants={item}
                whileHover={{ y: -2 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-1">{exp.title}</h3>
                    <div className="flex items-center text-accent text-sm font-medium mb-2">
                      <span>{exp.company}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-400">{exp.type}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="mr-3">{exp.period}</span>
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-4">{exp.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 flex items-center">
                      <Trophy className="w-3 h-3 mr-1" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start text-xs text-gray-300">
                          <div className="w-1 h-1 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section> */}

        {/* Education */}
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-medium">Education</h2>
              <p className="text-xs text-gray-400">Academic background and certifications</p>
            </div>
          </div>

          <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#2a2a2a]/50 hover:border-accent/30 transition-all"
                variants={item}
                whileHover={{ y: -2 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-1">{edu.degree}</h3>
                    <div className="text-accent text-sm font-medium mb-2">{edu.school}</div>
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="mr-3">{edu.period}</span>
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-4">{edu.description}</p>

                <div>
                  <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Key Coursework</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework && edu.coursework.map((course, idx) => (
                      <span key={idx} className="bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded-full text-xs">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Volunteer Work */}
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
              <Heart className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-medium">Volunteer Work</h2>
              <p className="text-xs text-gray-400">Community involvement and social impact</p>
            </div>
          </div>

          <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
            {volunteerWork.map((vol, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#2a2a2a]/50 hover:border-accent/30 transition-all"
                variants={item}
                whileHover={{ y: -2 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-1">{vol.title}</h3>
                    <div className="text-accent text-sm font-medium mb-2">{vol.organization}</div>
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="mr-3">{vol.period}</span>
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{vol.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-4">{vol.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
             

                  <div>
                    <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Skills Applied</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {vol.skills.map((skill, idx) => (
                        <span key={idx} className="bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Extra Roles */}
        {/* <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
              <Users className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-medium">Additional Roles</h2>
              <p className="text-xs text-gray-400">Side projects and community contributions</p>
            </div>
          </div>

          <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
            {extraRoles.map((role, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#2a2a2a]/50 hover:border-accent/30 transition-all"
                variants={item}
                whileHover={{ y: -2 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-1">{role.title}</h3>
                    <div className="text-accent text-sm font-medium mb-2">{role.project || role.platform}</div>
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{role.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-4">{role.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 flex items-center">
                      <Trophy className="w-3 h-3 mr-1" />
                      Key Contributions
                    </h4>
                    <div className="space-y-2">
                      {role.contributions.map((contribution, idx) => (
                        <div key={idx} className="flex items-start text-xs text-gray-300">
                          <div className="w-1 h-1 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span>{contribution}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {role.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section> */}
      </div>
    </div>
  )
}
