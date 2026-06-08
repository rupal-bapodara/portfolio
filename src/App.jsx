import React from 'react'
import { Header } from './components/sections/Header'
import { ProfileSidebar } from './components/sections/ProfileSidebar'
import {
  ProjectsSection,
  ExperienceSection,
  SkillsSection,
  EducationSection,
  ContactSection,
} from './components/sections'

import { profile } from './data/profile'
import { EXPERIENCES } from './data/experiences'
import { PROJECTS } from './data/projects'
import { EDUCATION } from './data/education'
import { skills } from './data/skills'

function App() {
  const projects = PROJECTS

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Header title={profile.name} />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[320px_1fr] lg:items-start lg:gap-10">
          <ProfileSidebar profile={profile} />

          <main className="mt-10 lg:mt-0">
            <div className="space-y-6">
              <ProjectsSection projects={projects} />
              <ExperienceSection experiences={EXPERIENCES} />
              <SkillsSection skills={skills} />
              <EducationSection education={EDUCATION} />
              <ContactSection profile={profile} />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
