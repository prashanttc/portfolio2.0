"use client"

import type React from "react"
import { useState } from "react"
import { Send, MapPin, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser";
import { toast } from "sonner"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

  emailjs
       .send(
         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
         process.env.NEXT_PUBLIC_EMAILJS_TEMP_ID!,
         {
           from_name: formData.name,
           to_name: "prashant chouhan",
           from_email: formData.email,
           to_email: "prashantchouhan711@gmail.com",
           message: formData.message,
         },
         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
       )
       .then(
         () => {
           setIsSubmitting(false);
           toast.success("Thank you. I will get back to you as soon as possible.");
 
           setFormData({
             name: "",
             email: "",
             message: "",
           });
         },
         (error) => {
           setIsSubmitting(false);
           console.error(error);
           toast.error("Ahh, something went wrong. Please try again.");
         }
       );
  }

  return (
    <div>
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-heading font-bold mb-2">Contact</h2>
        <div className="w-12 h-1 bg-accent mb-6"></div>
      </motion.div>

      <div className="gap-8">
        

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h3 className="text-xl font-heading font-semibold mb-4">Contact Form</h3>

          {isSubmitted ? (
            <motion.div
              className="bg-green-500/20 text-green-400 p-4 rounded-lg text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you for your message! I'll get back to you soon.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full rounded-xl bg-[#2a2a2a] border border-[#333333] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-[#2a2a2a] rounded-xl border border-[#333333] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent"
                    required
                  />
                </motion.div>
              </div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-[#2a2a2a] border rounded-xl border-[#333333] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="bg-accent text-black rounded-xl font-medium px-6 py-3 rounded-lg flex items-center hover:bg-accent/90 transition-colors disabled:opacity-70"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Sending...</span>
                    <div className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin"></div>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}
