'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Code,
  Server,
  Wrench,
  Zap,
  Atom,
  Cpu,
  Database,
  Cloud,
  GitBranch,
  Shield,
  Smartphone,
  Globe,
  Table,
  Bot,
  Webhook,
  MailCheck,
  ShieldCheck,
  Settings2
} from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: <Atom className="w-6 h-6" />, description: "Building interactive UIs" },
        { name: "Next.js", icon: <Globe className="w-6 h-6" />, description: "Full-stack React framework" },
        { name: "TypeScript", icon: <Code className="w-6 h-6" />, description: "Type-safe JavaScript" },
        { name: "Tailwind CSS", icon: <Smartphone className="w-6 h-6" />, description: "Utility-first CSS" },
        { name: "Framer Motion", icon: <Zap className="w-6 h-6" />, description: "Smooth animations" }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: <Cpu className="w-6 h-6" />, description: "JavaScript runtime" },
        { name: "Express.js", icon: <Server className="w-6 h-6" />, description: "Web framework" },
        { name: "MongoDB", icon: <Database className="w-6 h-6" />, description: "NoSQL database" },
        { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, description: "Relational database" },
        { name: "REST APIs", icon: <Globe className="w-6 h-6" />, description: "API development" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "AWS", icon: <Cloud className="w-6 h-6" />, description: "Cloud services" },
        { name: "Docker", icon: <Shield className="w-6 h-6" />, description: "Containerization" },
        { name: "Git", icon: <GitBranch className="w-6 h-6" />, description: "Version control" },
        { name: "Vercel", icon: <Cloud className="w-6 h-6" />, description: "Deployment platform" },
        { name: "Linux", icon: <Server className="w-6 h-6" />, description: "Operating system" },
        { name: "Google Sheets", icon: <Table className="w-6 h-6" />, description: "Data capture & reporting" },
        { name: "Env Variables", icon: <Settings2 className="w-6 h-6" />, description: "Secure config (.env)" }
      ]
    },
    {
      title: "Automation & Integrations",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Web Scraping", icon: <Globe className="w-6 h-6" />, description: "Data extraction" },
        { name: "API Integration", icon: <Zap className="w-6 h-6" />, description: "Third-party services" },
        { name: "Automation Scripts", icon: <Code className="w-6 h-6" />, description: "Process automation" },
        { name: "Testing", icon: <Shield className="w-6 h-6" />, description: "Quality assurance" },
        { name: "Google Apps Script", icon: <Bot className="w-6 h-6" />, description: "Workspace automation" },
        { name: "Email Automation", icon: <MailCheck className="w-6 h-6" />, description: "Gmail HTML templates" },
        { name: "Webhooks", icon: <Webhook className="w-6 h-6" />, description: "Apps Script Web App" },
        { name: "Anti-spam", icon: <ShieldCheck className="w-6 h-6" />, description: "Honeypot validation" }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A comprehensive toolkit for building modern web applications
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center space-x-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-primary-600">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{skill.name}</h4>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {(category.title === 'Frontend' || category.title === 'Backend') && (
                  <div className="mt-auto pt-6">
                    <div className="relative overflow-hidden rounded-lg border border-dashed border-primary-200 bg-gradient-to-br from-primary-50 to-white p-4">
                      <div className="absolute -right-3 -top-3 w-16 h-16 rounded-full bg-primary-100 opacity-50"></div>
                      <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-primary-100 opacity-30"></div>
                      <div className="relative z-10 flex items-center gap-3">
                        <span className="text-2xl">✨</span>
                        <div>
                          <p className="text-sm font-semibold text-primary-700">
                            More stacks to be uncovered soon
                          </p>
                          <p className="text-xs text-primary-700/80">
                            New frameworks and patterns dropping as projects evolve.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
