import { Sparkles } from 'lucide-react'
import { SectionHeader, ListItems } from '../shared'

export const ProjectsSection = ({ projects }) => (
    <section id="projects" className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <SectionHeader
            title="Projects"
            icon={Sparkles}
            badge="Travel technology spotlight"
        />
        <div className="space-y-6">
            {projects.map((project) => (
                <article key={project.title} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-6">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{project.title}</h3>
                            <p className="mt-2 text-sm font-medium text-slate-700">{project.role}</p>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p className="text-sm leading-relaxed italic text-slate-600">{project.overview}</p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-slate-900">Key Achievements</h4>
                        <ListItems items={project.contributions.keyAchievements} variant="bullet" />
                    </div>
                </article>
            ))}
        </div>
    </section>
)
