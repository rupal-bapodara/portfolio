import React, { useState } from 'react'
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Menu,
  X,
} from 'lucide-react'

const profile = {
  name: 'Rupal Bapodara',
  role: 'Senior PHP & Laravel Developer & Team Lead',
  bio: 'Senior PHP & Laravel Developer with 10+ years of experience building scalable web applications and REST APIs for US-based international clients. Proven track record of leading teams, architecting solutions, and delivering high-quality code on time. Passionate about mentoring junior developers and fostering a collaborative team environment.',
  phone: '+91 91737 50243',
  email: 'rupalnodedra@gmail.com',
  location: 'Porbandar, Gujarat, India',
  avatar:
    './public/images/rupal-profile.png',
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/rupal-bapodara',
      icon: ExternalLink,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rupal-bapodara',
      icon: ExternalLink,
    },
  ],
}

// EXPERIENCES: each company contains nested projects (text-only)
const EXPERIENCES = [
  {
    company: "Webmavens",
    role: "Senior PHP Developer",
    date: "Jan 2017 — Present",
    location: "Ahmedabad, Gujarat (Remote for US Clients)",
    bullets: [
      "Led a team of 3–5 developers — conducted code reviews, assigned tasks, and maintained on-time delivery across multiple concurrent client projects.",
      "Architected centralized Laravel REST APIs with Sanctum auth and API versioning consumed simultaneously by 3 production platforms.",
      "Reduced API response time by ~35% through Redis caching, MySQL query optimization, and N+1 query elimination.",
      "Integrated third-party services including cruise, tours, and hotel booking vendor APIs across travel and e-commerce platforms.",
      "Accelerated team workflows using GitHub Copilot, Claude AI, and OpenAI API — improving code quality and reducing boilerplate generation time.",
      "Implemented Git branching strategy, pull request workflows, and CI/CD pipelines for consistent deployments.",
    ],

  },
  {
    company: "Aavid Technologies",
    role: "PHP Developer",
    date: "Dec 2015 — Dec 2016",
    location: "Ahmedabad, Gujarat",
    bullets: [
      "Performed end-to-end system analysis, module design, and development of enterprise web applications using PHP and Laravel.",
      "Built internal ERP-style tools for business process automation reducing manual admin effort by an estimated 40%.",
      "Designed and managed MySQL database schemas supporting high-volume order tracking, vendor management, and multi-user role management.",
      "Collaborated with team on requirement analysis and delivered complete modules from scratch to production.",
    ],
    projects: [],
  },
]

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Atmiya Institute of Technology & Science, GTU",
    location: "Rajkot, Gujarat",
    date: "2013 — 2016",
    grade: "CGPA: 9.23 / 10",
    highlights: [
      "IIT-Bombay Certification — Open Source Technology: Linux & C",
      "3rd Rank — 'D-Code' Inter-College Programming Competition",
    ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Dr. Virambhai R. Godhaniya College, Saurashtra University",
    location: "Porbandar, Gujarat",
    date: "2010 — 2013",
    grade: "79.23%",
    highlights: [],
  },
]

const skills = {
  backend: [
    "PHP",
    "Laravel",
    "CodeIgniter",
    "Zend Framework",
    "REST API Design",
    "Webhooks",
    "Sanctum Auth",
    "Queue Workers",
    "Event-Driven Architecture",
  ],
  frontend: [
    "JavaScript",
    "jQuery",
    "React",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Alpine.js",
  ],
  database: [
    "MySQL",
    "Redis",
    "Query Optimization",
    "Database Schema Design",
    "Indexing",
  ],
  devops: [
    "AWS",
    "Docker",
    "Nginx",
    "Apache",
    "Git / GitHub",
    "CI/CD Pipelines",
  ],
  testing: [
    "PHPUnit",
    "Pest",
    "Postman",
    "API Testing",
  ],
  ai_tools: [
    "GitHub Copilot",
    "Claude AI",
    "OpenAI AI",
    "Copilot PR Reviewer",
  ],
  professional: [
    "Team Leadership",
    "Mentoring",
    "Agile / Scrum",
    "Sprint Planning",
    "Code Reviews",
    "Client Communication",
    "Requirement Gathering",
    "SOLID Principles",
  ],
  domains: [
    "Fintech / Cryptocurrency",
    "Travel & Booking",
    "E-Commerce",
    "ERP / Order Management",
  ],
}

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const allProjects = EXPERIENCES.flatMap((c) => c.projects || [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-lg font-semibold text-slate-950">Rupal Bapodara</div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#skills" className="text-sm text-slate-700 hover:text-slate-900">Skills</a>
              <a href="#experience" className="text-sm text-slate-700 hover:text-slate-900">Experience</a>
              <a href="#projects" className="text-sm text-slate-700 hover:text-slate-900">Projects</a>
              <a href="#education" className="text-sm text-slate-700 hover:text-slate-900">Education</a>
              <a href="#contact" className="text-sm text-slate-700 hover:text-slate-900">Contact</a>
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
                className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setDrawerOpen(false)}
            />
            <div className="relative ml-auto w-72 bg-white p-6 shadow-lg">
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="ml-auto mb-4 inline-flex items-center rounded-md border border-slate-200 bg-white px-2 py-1 text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
              <nav className="flex flex-col gap-4">
                <a onClick={() => setDrawerOpen(false)} href="#skills" className="text-sm text-slate-700">Skills</a>
                <a onClick={() => setDrawerOpen(false)} href="#experience" className="text-sm text-slate-700">Experience</a>
                <a onClick={() => setDrawerOpen(false)} href="#projects" className="text-sm text-slate-700">Projects</a>
                <a onClick={() => setDrawerOpen(false)} href="#education" className="text-sm text-slate-700">Education</a>
                <a onClick={() => setDrawerOpen(false)} href="#contact" className="text-sm text-slate-700">Contact</a>
              </nav>
            </div>
          </div>
        )}
      </header>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[320px_1fr] lg:items-start lg:gap-10">
          <aside className="lg:sticky lg:top-6">
            <div className="overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="mx-auto h-32 w-32 rounded-full object-cover"
              />
              <div className="mt-8 text-center">
                {/* <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Frontend portfolio</p> */}
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{profile.name}</h1>
                <p className="mt-3 text-slate-600">{profile.role}</p>
                <p className="mt-5 text-sm leading-7 text-slate-600">{profile.bio}</p>
              </div>
              <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="h-5 w-5 text-slate-400" />
                  <span className="text-sm">{profile.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="h-5 w-5 text-slate-400" />
                  <span className="text-sm">{profile.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin className="h-5 w-5 text-slate-400" />
                  <span className="text-sm">{profile.location}</span>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {profile.socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
                    >
                      <Icon className="h-4 w-4" />
                      {social.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </aside>

          <main className="mt-10 lg:mt-0">
            <div className="space-y-6">
              <section id="projects" className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Projects</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Project highlights (text-only)</h2>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                    <Sparkles className="h-4 w-4" />
                    Text-first summaries
                  </div>
                </div>
                <div className="space-y-4">
                  {allProjects.map((proj) => (
                    <article key={proj.title} className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
                      <h3 className="text-lg font-semibold text-slate-950">{proj.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{proj.description}</p>
                      <ul className="mt-3 ml-4 list-disc space-y-2 text-sm text-slate-600">
                        {proj.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section id="experience" className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Work experience</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Career timeline</h2>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                    <Briefcase className="h-4 w-4" />
                    10+ years experience
                  </div>
                </div>
                <div className="space-y-4">
                  {EXPERIENCES.map((item) => (
                    <article
                      key={item.company}
                      className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-lg font-semibold text-slate-950">{item.role}</p>
                          <p className="mt-1 text-sm text-slate-600">{item.company} · {item.location}</p>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200">
                          <Calendar className="h-4 w-4 text-slate-400" />
                          {item.date}
                        </div>
                      </div>
                      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-slate-400" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Nested projects for this company */}
                      {item.projects && item.projects.length > 0 && (
                        <div className="mt-6 border-l-2 border-slate-200 pl-5">
                          <h4 className="text-sm font-semibold text-slate-800">Selected projects</h4>
                          <div className="mt-3 space-y-4">
                            {item.projects.map((proj) => (
                              <div key={proj.title} className="rounded-md bg-white/50 p-4">
                                <p className="text-sm font-semibold text-slate-900">{proj.title}</p>
                                <p className="mt-1 text-sm text-slate-600">{proj.description}</p>
                                <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-slate-600">
                                  {proj.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>

              <section id="skills" className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className="mb-8">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Skills matrix</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Technical Skills & Strengths</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">backend</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {skills.backend.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">frontend</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {skills.frontend.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">database</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {skills.database.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">devops</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {skills.devops.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">testing</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {skills.testing.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">ai tools</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {skills.ai_tools.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Professional</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {skills.professional.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section id="education" className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Education</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Academic background</h2>
                </div>
                <div className="space-y-4">
                  {EDUCATION.map((edu) => (
                    <article key={edu.institution} className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-lg font-semibold text-slate-950">{edu.degree}</p>
                          <p className="mt-1 text-sm text-slate-600">{edu.institution}</p>
                        </div>
                        <div className="text-sm text-slate-600">{edu.date}</div>
                      </div>
                      <ul className="mt-4 ml-4 list-disc space-y-2 text-sm text-slate-600">
                        {edu.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section id="contact" className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Get in touch</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Contact</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
                    <p className="text-sm text-slate-700">Email</p>
                    <a className="mt-2 block text-sm font-medium text-slate-900" href={`mailto:${profile.email}`}>{profile.email}</a>
                    <p className="mt-4 text-sm text-slate-700">Phone</p>
                    <a className="mt-2 block text-sm font-medium text-slate-900" href={`tel:${profile.phone}`}>{profile.phone}</a>
                  </div>
                  <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
                    <p className="text-sm text-slate-700">Location</p>
                    <p className="mt-2 text-sm font-medium text-slate-900">{profile.location}</p>
                    <div className="mt-6">
                      <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Email me</a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
