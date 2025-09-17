'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About</h2>
          <div className="w-16 h-1 bg-primary-600 rounded mx-auto"></div>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* Left: Image */}
          <motion.div variants={item} className="h-full flex items-stretch justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden shadow-xl border border-gray-100 h-full min-h-[14rem] md:min-h-[18rem] w-full max-w-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/myimage.jpeg" alt="Shivansh Raheja" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Right: Info */}
          <motion.div variants={item} className="h-full">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 leading-relaxed text-gray-700 h-full min-h-[14rem] md:min-h-[18rem] flex items-center">
              Full-stack developer with 1+ year of experience designing and deploying SaaS platforms, web applications, and automation systems. Architected a multi-tenant accreditation platform managing 5,000+ institutional records with 99.9% uptime, and delivered freelance solutions including fraud reporting systems and corporate sites serving 1,000+ users monthly. Skilled in React.js, Node.js, MongoDB, AWS, and CI/CD pipelines, with hands-on expertise integrating AI APIs (Gemini, Claude, DeepSeek) for automation and intelligent workflows.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


