// Lightweight client-side analytics stored in localStorage

type WebVitalsSample = {
  ts: number
  ttfb?: number
  fcp?: number
  domContentLoaded?: number
  load?: number
}

const KEYS = {
  pageViews: 'analytics:pageViews',
  projectClicks: 'analytics:projectClicks',
  techCounts: 'analytics:techCounts',
  vitals: 'analytics:webVitals',
}

function readJSON<T>(key: string, fallback: T): T {
  try {
    const s = localStorage.getItem(key)
    return s ? (JSON.parse(s) as T) : fallback
  } catch {
    return fallback
  }
}

function writeJSON(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {}
}

export function recordPageView() {
  const count = Number(localStorage.getItem(KEYS.pageViews) || '0') + 1
  localStorage.setItem(KEYS.pageViews, String(count))
}

export function getPageViews(): number {
  return Number(localStorage.getItem(KEYS.pageViews) || '0')
}

export function recordProjectVisit(projectName: string) {
  const data = readJSON<Record<string, number>>(KEYS.projectClicks, {})
  data[projectName] = (data[projectName] || 0) + 1
  writeJSON(KEYS.projectClicks, data)
}

export function getProjectVisits(): Record<string, number> {
  return readJSON<Record<string, number>>(KEYS.projectClicks, {})
}

export function recordTechUsage(techList: string[]) {
  const data = readJSON<Record<string, number>>(KEYS.techCounts, {})
  for (const t of techList) {
    data[t] = (data[t] || 0) + 1
  }
  writeJSON(KEYS.techCounts, data)
}

export function getTopTech(n = 10): Array<{ tech: string; count: number }> {
  const data = readJSON<Record<string, number>>(KEYS.techCounts, {})
  return Object.entries(data)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([tech, count]) => ({ tech, count }))
}

export function recordWebVitalsSample() {
  try {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
    const paint = performance.getEntriesByType('paint') as PerformanceEntry[]
    const fcpEntry = paint.find((p) => p.name === 'first-contentful-paint')

    const sample: WebVitalsSample = {
      ts: Date.now(),
      ttfb: nav ? nav.responseStart : undefined,
      domContentLoaded: nav ? nav.domContentLoadedEventEnd : undefined,
      load: nav ? nav.loadEventEnd : undefined,
      fcp: fcpEntry ? (fcpEntry.startTime as number) : undefined,
    }

    const list = readJSON<WebVitalsSample[]>(KEYS.vitals, [])
    list.push(sample)
    // keep last 50 samples
    writeJSON(KEYS.vitals, list.slice(-50))
  } catch {}
}

export function getWebVitalsSummary() {
  const list = readJSON<WebVitalsSample[]>(KEYS.vitals, [])
  const avg = (arr: number[]) => (arr.length ? Math.round((arr.reduce((a, b) => a + b, 0) / arr.length) * 10) / 10 : 0)
  const ttfb = avg(list.filter((s) => !!s.ttfb).map((s) => s.ttfb as number))
  const fcp = avg(list.filter((s) => !!s.fcp).map((s) => s.fcp as number))
  const dcl = avg(list.filter((s) => !!s.domContentLoaded).map((s) => s.domContentLoaded as number))
  const load = avg(list.filter((s) => !!s.load).map((s) => s.load as number))
  return { samples: list.length, ttfb, fcp, dcl, load }
}


