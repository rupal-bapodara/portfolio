export const ArticleCard = ({ children, className = '' }) => (
    <article className={`rounded-[1rem] border border-slate-200 bg-slate-50 p-6 ${className}`}>
        {children}
    </article>
)
