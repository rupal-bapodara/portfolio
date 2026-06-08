export const SkillCategory = ({ title, skills }) => (
    <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{title}</p>
        <div className="mt-5 flex flex-wrap gap-3">
            {skills.map((skill) => (
                <span key={skill} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                    {skill}
                </span>
            ))}
        </div>
    </div>
)
