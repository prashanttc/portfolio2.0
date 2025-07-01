"use client";

import { Code2, NotebookTabs, BrainCircuit, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Creating modern, responsive websites with cutting-edge technologies and best practices.",
    },
    {
      icon: BrainCircuit,
      title: " AI Integration",
      description:
        "Integrating artificial intelligence into web applications to automate tasks, enhance UX, and create smarter, more adaptive user experiences.",
    },
    {
      icon: NotebookTabs,
      title: "Student Developer",
      description:
        "Actively learning, experimenting, and building across the web development stack.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed, scalability, and exceptional user experience.",
    },
  ];

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
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl lg:text-4xl font-heading font-semibold mb-3">
          Software Developer &
          <span className="text-accent block"> Web Enthusiast</span>
        </h1>
        <div className="w-16 h-0.5 bg-accent mb-6" />
      </motion.div>

      <motion.div
        className="space-y-4 mb-12 text-sm lg:text-base leading-relaxed text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p>
          I’m Prashant, a self-taught developer and college student from Indore,
          India, driven by curiosity and a vision to build smarter, more
          intuitive digital experiences. I specialize in full-stack web
          development and actively explore how AI can be integrated into modern
          apps to make them more human-aware, efficient, and adaptive. From
          clean UIs to intelligent workflows, I aim to bridge creativity with
          cutting-edge tech. Even as a student.
        </p>

        <p>
          I don’t just follow trends ,I experiment, break things, learn fast,
          and build better. For me, code is more than syntax .it's a tool to
          turn ideas into impact. I’m not waiting for the “right time”. I’m
          already building the future, one project at a time.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-2xl lg:text-3xl font-heading font-semibold mb-6">
          What I Do
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-[#222222]/50 backdrop-blur-sm rounded-2xl p-6 border border-transparent hover:border-accent/20 transition-all group"
            variants={item}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px -10px rgba(255, 194, 84, 0.1)",
            }}
          >
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <service.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-medium mb-3 group-hover:text-accent transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
