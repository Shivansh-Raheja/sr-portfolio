'use client'

import { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const p = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0
      setProgress(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-16 left-0 right-0 z-40">
      <div className="h-1 bg-gray-200/60 dark:bg-gray-800/80">
        <div
          className="h-1 bg-primary-600 dark:bg-primary-500 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default ScrollProgress


