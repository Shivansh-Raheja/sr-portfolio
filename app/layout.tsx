import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shivansh Raheja | Full Stack Developer',
  description: 'Building scalable web solutions with modern technologies. Full Stack Developer specializing in React, Node.js, and cloud technologies.',
  keywords: 'Full Stack Developer, React, Node.js, TypeScript, Next.js, Web Development, Software Engineer',
  authors: [{ name: 'Shivansh Raheja' }],
  openGraph: {
    title: 'Shivansh Raheja | Full Stack Developer',
    description: 'Building scalable web solutions with modern technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivansh Raheja | Full Stack Developer',
    description: 'Building scalable web solutions with modern technologies.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){try{var t=localStorage.getItem('theme');var d=t? t==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;var r=document.documentElement;d?r.classList.add('dark'):r.classList.remove('dark')}catch(e){}}();`
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <Navbar />
        <ScrollProgress />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
