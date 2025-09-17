'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, BookOpen } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const items = [
    {
      degree: 'BE-CSE, Chandigarh University',
      duration: '09/2020 – 06/2024',
      location: 'Mohali, India',
      details: 'Maintained a healthy CGPA of 8.21'
    },
    {
      degree: 'Intermediate (CBSE), Bonne Anne Public School',
      duration: '2019 – 2020',
      location: 'Moradabad, India',
      details: 'Science major along with computer, Scored: 91.6%'
    },
    {
      degree: 'Matriculation (CBSE), Bonne Anne Public School',
      duration: '2017 – 2018',
      location: 'Moradabad, India',
      details: 'Stabilized basic subjects with a score of 84.4%'
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-16 h-1 bg-primary-600 rounded mx-auto"></div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
            >
              <div className="flex items-center gap-3 text-primary-600 mb-3">
                {index === 0 ? <GraduationCap className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                <h3 className="text-lg font-semibold text-gray-900">{item.degree}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-1">{item.duration} | {item.location}</p>
              <p className="text-gray-700">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education


