import { Sun, Moon } from 'lucide-react'

export const ThemeToggle = ({ isDark, onToggle, className = '' }) => (
    <button
        onClick={onToggle}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className={`inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-2.5 py-2 text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 ${className}`}
    >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
)
