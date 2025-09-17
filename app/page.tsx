'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import GithubStats from '@/components/GithubStats'
import Resume from '@/components/Resume'
import AnalyticsDashboard from '@/components/AnalyticsDashboard'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <GithubStats />
      <AnalyticsDashboard />
      <Resume />
      <Projects />
      <Contact />
    </div>
  )
}
