export const SectionHeader = ({ title, icon: Icon, badge }) => (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{title}</h2>
        </div>
        {badge && (
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                {Icon && <Icon className="h-4 w-4" />}
                {badge}
            </div>
        )}
    </div>
)
