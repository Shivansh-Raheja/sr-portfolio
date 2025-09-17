'use client'

import { useRef } from 'react'
import { Download } from 'lucide-react'

const Resume = () => {
  const printRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    if (!printRef.current) return
    
    const printWindow = window.open('', '_blank', 'width=800,height=1000')
    if (!printWindow) return
    
    const printContent = printRef.current.innerHTML
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Shivansh Raheja - Resume</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6; 
              color: #1f2937; 
              background: white;
              padding: 20px;
            }
            .resume-container { max-width: 800px; margin: 0 auto; }
            .header { border-bottom: 2px solid #3b82f6; padding-bottom: 20px; margin-bottom: 30px; }
            .name { font-size: 32px; font-weight: 700; color: #1f2937; margin-bottom: 8px; }
            .title { font-size: 18px; color: #3b82f6; font-weight: 600; margin-bottom: 12px; }
            .contact { font-size: 14px; color: #6b7280; line-height: 1.4; }
            .section { margin-bottom: 25px; }
            .section-title { 
              font-size: 20px; 
              font-weight: 700; 
              color: #1f2937; 
              border-bottom: 1px solid #e5e7eb; 
              padding-bottom: 5px; 
              margin-bottom: 15px; 
            }
            .job { margin-bottom: 20px; }
            .job-title { font-size: 16px; font-weight: 600; color: #1f2937; }
            .company { font-size: 15px; color: #3b82f6; font-weight: 500; }
            .duration { font-size: 13px; color: #6b7280; font-style: italic; }
            .job-details { margin-top: 8px; }
            .job-details ul { margin-left: 20px; }
            .job-details li { margin-bottom: 4px; font-size: 14px; color: #374151; }
            .project { margin-bottom: 15px; }
            .project-title { font-size: 15px; font-weight: 600; color: #1f2937; }
            .project-desc { font-size: 13px; color: #6b7280; margin-top: 2px; }
            .skills { display: flex; flex-wrap: wrap; gap: 8px; }
            .skill-tag { 
              background: #f3f4f6; 
              color: #374151; 
              padding: 4px 12px; 
              border-radius: 20px; 
              font-size: 12px; 
              font-weight: 500; 
            }
            .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
            .summary { font-size: 14px; color: #374151; line-height: 1.6; }
            @media print { 
              body { padding: 0; }
              .no-print { display: none !important; }
            }
          </style>
        </head>
        <body>
          <div class="resume-container">
            ${printContent}
          </div>
        </body>
      </html>
    `)
    
    printWindow.document.close()
    printWindow.focus()
    
    // Wait for content to load then print
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 500)
  }

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">Resume</h2>
            <p className="text-gray-600">One-page printable resume generated from live content</p>
          </div>
          <button onClick={handlePrint} className="no-print inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold">
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>

        <div ref={printRef} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          {/* Header */}
          <div className="header mb-8">
            <div className="name">Shivansh Raheja</div>
            <div className="title">Full Stack Developer</div>
            <div className="contact space-y-1">
              <div>📧 shivanshraheja81@gmail.com | 📱 9528622081</div>
              <div>🔗 github.com/Shivansh-Raheja | linkedin.com/in/shivansh-raheja-b1ab93230/</div>
            </div>
          </div>

          {/* Summary */}
          <div className="section">
            <div className="section-title text-xl font-bold text-gray-900 border-b pb-2 mb-4">Professional Summary</div>
            <p className="summary text-base leading-7 text-gray-700">
              Full-stack developer with 1+ year of experience designing and deploying SaaS platforms, web applications, and automation systems. Architected a multi-tenant accreditation platform managing 5,000+ institutional records with 99.9% uptime, and delivered freelance solutions including fraud reporting systems and corporate sites serving 1,000+ users monthly. Skilled in React.js, Node.js, MongoDB, AWS, and CI/CD pipelines, with hands-on expertise integrating AI APIs (Gemini, Claude, DeepSeek) for automation and intelligent workflows.
            </p>
          </div>

          {/* Experience & Projects */}
          <div className="section grid-2 gap-8">
            <div className="space-y-6">
              <div className="section-title text-xl font-bold text-gray-900 border-b pb-2">Professional Experience</div>
              
              <div className="job space-y-1">
                <div className="job-title text-gray-900 font-semibold">Full Stack Developer</div>
                <div className="company text-primary-600 font-medium">Luneblaze</div>
                <div className="duration text-sm text-gray-500 italic">08/2024 – Present | Faridabad, India</div>
                <div className="job-details">
                  <ul className="list-disc pl-5 space-y-1.5 leading-6 text-gray-700 text-[15px]">
                    <li>Developed and maintained a multi-tenant SaaS platform supporting 5,000+ institutional records, ensuring 99.9% uptime and secure data handling</li>
                    <li>Automated accreditation workflows, cutting manual processing time by 60%, including document submission, compliance tracking, and generation of NAAC/SQAAF-compliant SSR reports</li>
                    <li>Implemented role-based access control (RBAC) for 1,000+ users and built real-time dashboards that improved decision-making efficiency by 40%</li>
                  </ul>
                </div>
              </div>

              <div className="job space-y-1">
                <div className="job-title text-gray-900 font-semibold">Prototype & Website Testing</div>
                <div className="company text-primary-600 font-medium">UserTesting</div>
                <div className="duration text-sm text-gray-500 italic">06/2021 – 05/2024 | Remote, India</div>
                <div className="job-details">
                  <ul className="list-disc pl-5 space-y-1.5 leading-6 text-gray-700 text-[15px]">
                    <li>User Experience and Usability Analysis: Proficiently assessed and provided valuable feedback on over 20+ websites and mobile applications</li>
                    <li>Product Quality and User Engagement Enhancement: Identified and reported 100+ critical usability issues, empowering development teams to enhance product quality, resulting in an impressive 30% increase in user engagement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="section-title text-xl font-bold text-gray-900 border-b pb-2">Key Projects</div>
              
              <div className="project space-y-1">
                <div className="project-title font-semibold text-gray-900">Wonderplast Corporate Website</div>
                <p className="project-desc text-sm text-gray-600 leading-6">03/2025 – 05/2025 | Corporate website handling 1,000+ monthly visitors, hosted on AWS EC2 with Cloudflare SSL for secure, scalable performance. Reduced content update cycles by 70% with a full-featured Admin Panel and CI/CD.</p>
              </div>

              <div className="project space-y-1">
                <div className="project-title font-semibold text-gray-900">Fraud Reporting Portal</div>
                <p className="project-desc text-sm text-gray-600 leading-6">06/2025 – 07/2025 | Secure fraud reporting system with encryption, real-time tracking, downloadable receipts, and automated email notifications, serving 500+ users. Reduced case handling time by 35% with an authority-facing Admin Portal.</p>
              </div>

              <div className="project space-y-1">
                <div className="project-title font-semibold text-gray-900">Todo App (Deployed on Vercel)</div>
                <p className="project-desc text-sm text-gray-600 leading-6">06/2024 | A task management SPA built with React.js and deployed on Vercel. Includes user authentication, modern responsive UI, and smooth client-side navigation.</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="section">
            <div className="section-title text-xl font-bold text-gray-900 border-b pb-2 mb-3">Technical Skills</div>
            <div className="skills gap-2">
              {['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git', 'Tailwind CSS', 'Framer Motion', 'Google Apps Script', 'Google Sheets', 'CI/CD', 'REST APIs', 'Web Scraping', 'API Integration', 'Testing', 'Linux'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          {/* Education & Contact */}
          <div className="section grid-2 gap-8">
            <div className="space-y-2">
              <div className="section-title text-xl font-bold text-gray-900 border-b pb-2">Education</div>
              <div className="job space-y-1">
                <div className="job-title text-gray-900 font-semibold">Bachelor of Engineering - Computer Science</div>
                <div className="company text-primary-600 font-medium">Chandigarh University</div>
                <div className="duration text-sm text-gray-500 italic">09/2020 – 06/2024 | Mohali, India</div>
                <div className="job-details">
                  <ul className="list-disc pl-5 space-y-1.5 leading-6 text-gray-700 text-[15px]">
                    <li><strong>CGPA:</strong> 8.21</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="section-title text-xl font-bold text-gray-900 border-b pb-2">Availability</div>
              <p className="summary text-base leading-7 text-gray-700">
                Open to freelance and full-time opportunities. Available for remote work and willing to relocate for the right opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume


