'use client'

import { useEffect, useMemo, useState } from 'react'
import { Github, Star, Users, BookOpen, Activity } from 'lucide-react'

type Repo = {
  name: string
  stargazers_count: number
  language: string | null
  html_url: string
}

const GITHUB_USERNAME = 'Shivansh-Raheja'

const GithubStats = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [followers, setFollowers] = useState<number>(0)
  const [publicRepos, setPublicRepos] = useState<number>(0)
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    const controller = new AbortController()
    const run = async () => {
      try {
        setLoading(true)
        setError(null)
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, { signal: controller.signal }),
        ])
        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API rate limited or unavailable')
        const user = await userRes.json()
        const reposData: Repo[] = await reposRes.json()
        setFollowers(user.followers ?? 0)
        setPublicRepos(user.public_repos ?? reposData.length)
        setRepos(reposData)
      } catch (e: any) {
        if (e.name !== 'AbortError') setError(e.message || 'Failed to load')
      } finally {
        setLoading(false)
      }
    }
    run()
    return () => controller.abort()
  }, [])

  const totalStars = useMemo(() => repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0), [repos])
  const topRepos = useMemo(
    () => repos
      .filter((r) => r.stargazers_count > 0)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6),
    [repos]
  )
  const languageCount = useMemo(() => {
    const map = new Map<string, number>()
    repos.forEach((r) => {
      if (!r.language) return
      map.set(r.language, (map.get(r.language) || 0) + 1)
    })
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5)
  }, [repos])

  return (
    <section id="github" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Live GitHub Stats</h2>
          <div className="w-16 h-1 bg-primary-600 rounded mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex items-center gap-3">
            <Github className="w-6 h-6 text-primary-600" />
            <div>
              <div className="text-sm text-gray-500">Username</div>
              <div className="font-semibold text-gray-900">{GITHUB_USERNAME}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-primary-600" />
            <div>
              <div className="text-sm text-gray-500">Followers</div>
              <div className="font-semibold text-gray-900">{followers}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-primary-600" />
            <div>
              <div className="text-sm text-gray-500">Public Repos</div>
              <div className="font-semibold text-gray-900">{publicRepos}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-primary-600" />
            <div>
              <div className="text-sm text-gray-500">Total Stars</div>
              <div className="font-semibold text-gray-900">{totalStars}</div>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-xl p-4 mb-8">
            API limit or error: {error}. Data may be incomplete.
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-primary-600" />
              <h3 className="font-semibold text-gray-900">Top Starred Repositories</h3>
            </div>
            {loading ? (
              <div className="text-gray-500">Loading…</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topRepos.map((r) => (
                  <a key={r.name} href={r.html_url} target="_blank" rel="noopener noreferrer" className="group border border-gray-100 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-gray-900 group-hover:text-primary-700">{r.name}</div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-amber-500" /> {r.stargazers_count}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{r.language || 'Various'}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Top Languages</h3>
            <div className="space-y-3">
              {languageCount.map(([lang, count]) => (
                <div key={lang} className="flex items-center justify-between">
                  <span className="text-gray-800">{lang}</span>
                  <span className="text-sm text-gray-500">{count} repo{count > 1 ? 's' : ''}</span>
                </div>
              ))}
              {languageCount.length === 0 && <div className="text-gray-500">No language data</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GithubStats


