'use client'

import { useEffect, useMemo, useState } from 'react'
import { BarChart2, Activity, MousePointerClick, Cpu } from 'lucide-react'
import { getPageViews, getProjectVisits, getTopTech, getWebVitalsSummary, recordPageView, recordWebVitalsSample } from '@/lib/analytics'

const AnalyticsDashboard = () => {
  const [pageViews, setPageViews] = useState(0)
  const [visits, setVisits] = useState<Record<string, number>>({})
  const [topTech, setTopTech] = useState<Array<{ tech: string; count: number }>>([])
  const [vitals, setVitals] = useState({ samples: 0, ttfb: 0, fcp: 0, dcl: 0, load: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    recordPageView()
    recordWebVitalsSample()
    setPageViews(getPageViews())
    setVisits(getProjectVisits())
    setTopTech(getTopTech(8))
    setVitals(getWebVitalsSummary())
    setIsLoaded(true)
  }, [])

  const visitEntries = useMemo(() => Object.entries(visits).sort((a, b) => b[1] - a[1]), [visits])

  return (
    <section id="analytics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Project Analytics</h2>
          <div className="w-16 h-1 bg-primary-600 rounded mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex items-center gap-3">
            <BarChart2 className="w-6 h-6 text-primary-600" />
            <div>
              <div className="text-sm text-gray-500">Total Page Views</div>
              <div className="font-semibold text-gray-900">{isLoaded ? pageViews : '...'}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex items-center gap-3">
            <MousePointerClick className="w-6 h-6 text-primary-600" />
            <div>
              <div className="text-sm text-gray-500">Project Clicks</div>
              <div className="font-semibold text-gray-900">{isLoaded ? visitEntries.reduce((s, [, c]) => s + c, 0) : '...'}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-primary-600" />
            <div>
              <div className="text-sm text-gray-500">Web Vitals Samples</div>
              <div className="font-semibold text-gray-900">{isLoaded ? vitals.samples : '...'}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex items-center gap-3">
            <Activity className="w-6 h-6 text-primary-600" />
            <div>
              <div className="text-sm text-gray-500">Avg FCP (ms)</div>
              <div className="font-semibold text-gray-900">{isLoaded ? vitals.fcp : '...'}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Project Visits</h3>
            {!isLoaded ? (
              <div className="text-gray-500">Loading...</div>
            ) : visitEntries.length === 0 ? (
              <div className="text-gray-500">No project clicks recorded yet.</div>
            ) : (
              <div className="space-y-3">
                {visitEntries.map(([name, count]) => (
                  <div key={name} className="flex items-center justify-between">
                    <span className="text-gray-800">{name}</span>
                    <span className="text-sm text-gray-500">{count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Top Technologies</h3>
            {!isLoaded ? (
              <div className="text-gray-500">Loading...</div>
            ) : topTech.length === 0 ? (
              <div className="text-gray-500">No tech usage recorded yet.</div>
            ) : (
              <div className="space-y-3">
                {topTech.map(({ tech, count }) => (
                  <div key={tech} className="flex items-center justify-between">
                    <span className="text-gray-800">{tech}</span>
                    <span className="text-sm text-gray-500">{count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnalyticsDashboard


