import { Briefcase, Calendar } from 'lucide-react'
import { SectionHeader, ArticleCard, ListItems } from '../shared'

export const ExperienceSection = ({ experiences }) => (
    <section id="experience" className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
        <SectionHeader
            title="Career timeline"
            icon={Briefcase}
            badge="10+ years experience"
        />
        <div className="space-y-4">
            {experiences.map((item) => (
                <ArticleCard key={item.company} className="rounded-[1.5rem]">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <p className="text-lg font-semibold text-slate-950 dark:text-slate-50">{item.role}</p>
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                {item.company} · {item.location}
                            </p>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
                            <Calendar className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                            {item.date}
                        </div>
                    </div>
                    <ListItems items={item.bullets} variant="check" />
                </ArticleCard>
            ))}
        </div>
    </section>
)
