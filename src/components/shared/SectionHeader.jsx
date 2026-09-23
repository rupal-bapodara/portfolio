export const SectionHeader = ({ title, icon: Icon, badge }) => (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">{title}</h2>
        </div>
        {badge && (
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-sm text-navy-700 dark:bg-navy-900/40 dark:text-navy-100">
                {Icon && <Icon className="h-4 w-4" />}
                {badge}
            </div>
        )}
    </div>
)
