export const ArticleCard = ({ children, className = '' }) => (
    <article className={`rounded-[1rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/60 ${className}`}>
        {children}
    </article>
)
