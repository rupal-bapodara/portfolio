import { ArticleCard, ListItems } from '../shared'

export const EducationSection = ({ education }) => (
    <section id="education" className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
        <div className="mb-6">
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                Education
            </h2>
        </div>
        <div className="space-y-4">
            {education.map((edu) => (
                <ArticleCard key={edu.institution}>
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-lg font-semibold text-slate-950 dark:text-slate-50">{edu.degree}</p>
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{edu.institution}</p>
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">{edu.date}</div>
                    </div>
                    {edu.highlights.length > 0 && (
                        <ListItems items={edu.highlights} variant="bullet" />
                    )}
                </ArticleCard>
            ))}
        </div>
    </section>
)
