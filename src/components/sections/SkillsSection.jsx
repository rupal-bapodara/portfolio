import { SkillCategory } from '../shared'

export const SkillsSection = ({ skills }) => (
    <section id="skills" className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div className="mb-8">
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Skills
            </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
            <SkillCategory title="Backend" skills={skills.backend} />
            <SkillCategory title="Frontend" skills={skills.frontend} />
            <SkillCategory title="Database" skills={skills.database} />
            <SkillCategory title="DevOps" skills={skills.devops} />
            <SkillCategory title="Testing" skills={skills.testing} />
            <SkillCategory title="AI Tools" skills={skills.ai_tools} />
            <SkillCategory title="Professional" skills={skills.professional} />
        </div>
    </section>
)
