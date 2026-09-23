import { Sparkles, ExternalLink, Star } from 'lucide-react'
import { SectionHeader, ListItems } from '../shared'

export const ProjectsSection = ({ projects }) => {
    const featured = projects.filter((project) => project.featured)
    const more = projects.filter((project) => !project.featured)

    return (
        <section id="projects" className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
            <SectionHeader
                title="Projects"
                icon={Sparkles}
                badge="Travel technology spotlight"
            />

            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Featured Projects
            </h3>
            <div className="mt-4 space-y-6">
                {featured.map((project) => (
                    <article
                        key={project.title}
                        className="space-y-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-xs dark:border-slate-700 dark:bg-slate-800/60"
                    >
                        <div className="space-y-4">
                            <div>
                                <span className="inline-flex items-center gap-1 rounded-full bg-navy-50 px-2.5 py-1 text-xs font-semibold text-navy-700 dark:bg-navy-900/40 dark:text-navy-100">
                                    <Star className="h-3 w-3" />
                                    Featured
                                </span>
                                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                                    {project.title}
                                </h3>
                                <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">{project.role}</p>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-navy-700 dark:text-slate-400 dark:hover:text-navy-100"
                                    >
                                        View on GitHub
                                        <ExternalLink className="h-3.5 w-3.5" />
                                    </a>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p className="text-sm leading-relaxed italic text-slate-600 dark:text-slate-400">{project.overview}</p>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Key Achievements</h4>
                            <ListItems items={project.contributions.keyAchievements} variant="bullet" />
                        </div>
                    </article>
                ))}
            </div>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                More Projects
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {more.map((project) => (
                    <article
                        key={project.title}
                        className="space-y-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-xs dark:border-slate-700 dark:bg-slate-800/60"
                    >
                        <div>
                            <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                                {project.title}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">{project.role}</p>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-navy-700 dark:text-slate-400 dark:hover:text-navy-100"
                                >
                                    View on GitHub
                                    <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p className="line-clamp-2 text-sm leading-relaxed italic text-slate-600 dark:text-slate-400">
                            {project.overview}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}
