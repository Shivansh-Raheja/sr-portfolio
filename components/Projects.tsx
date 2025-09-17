'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Calendar, Users, Award } from 'lucide-react'
import { recordProjectVisit, recordTechUsage } from '@/lib/analytics'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Wonderplast",
      duration: "03/2025 – 05/2025",
      description: "Corporate website handling 1,000+ monthly visitors, hosted on AWS EC2 with Cloudflare SSL for secure, scalable performance.",
      impact: "Reduced content update cycles by 70% with a full-featured Admin Panel and CI/CD",
      features: [
        "Admin Panel for banners, blogs, reviews, products, brochures, clients, quizzes, orders",
        "AWS EC2 hosting with Cloudflare SSL and caching",
        "CI/CD with GitHub Actions for zero-downtime deployments",
        "SEO-friendly pages and sitemap",
        "Analytics integration",
        "Responsive design"
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "AWS EC2", "Cloudflare", "GitHub Actions", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      github: "",
      live: "https://www.wonderplast.in/",
      status: "Live"
    },
    {
      title: "Fraud Reporting Portal",
      duration: "06/2025 – 07/2025",
      description: "Secure fraud reporting system with encryption, real-time tracking, downloadable receipts, and automated email notifications, serving 500+ users.",
      impact: "Reduced case handling time by 35% with an authority-facing Admin Portal and streamlined workflows",
      features: [
        "End-to-end encrypted report submissions (FTC-inspired standards)",
        "Real-time report tracking with status updates",
        "Automated email notifications and receipt PDFs",
        "Role-based Admin Portal for triage and case actions",
        "Audit logs and activity trails",
        "Responsive UI and accessibility"
      ],
      technologies: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
      image: "/api/placeholder/600/400",
      github: "",
      live: "https://frontend-three-bice-55.vercel.app/",
      status: "Completed"
    },
    {
      title: "Todo App (Deployed on Vercel)",
      duration: "06/2024",
      description: "A task management SPA built with React.js and deployed on Vercel. Includes user authentication, modern responsive UI, and smooth client-side navigation.",
      impact: "Demonstrates real-world CI/CD and scalable frontend architecture for a college student project",
      features: [
        "User authentication (login system)",
        "Responsive, modern UI across devices",
        "Single Page Application with fast navigation",
        "Modular, component-based architecture",
        "CI/CD via Vercel",
        "Task CRUD with API integration or serverless functions"
      ],
      technologies: ["React.js", "Vite / CRA", "Tailwind CSS / CSS Modules", "Vercel"],
      image: "/api/placeholder/600/400",
      github: "",
      live: "https://frontend-sigma-two-26.vercel.app/login",
      status: "Completed"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="projects" className="py-20 bg-white">
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
            Freelance Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real-world solutions that deliver measurable impact
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`${index === 0 ? 'lg:col-span-2 lg:max-w-3xl lg:mx-auto' : ''} bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <Users className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Impact</h4>
                      <p className="text-green-700 text-sm">{project.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + index * 0.3 + featureIndex * 0.05 }}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.7 + index * 0.3 + techIndex * 0.05 }}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { recordProjectVisit(project.title); recordTechUsage(project.technologies); }}
                    className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
