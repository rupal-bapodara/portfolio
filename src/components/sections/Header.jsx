import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '../shared'

const navLinks = [
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
]

export const Header = ({ title = 'Rupal Bapodara' }) => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

    const toggleTheme = () => {
        setIsDark((prev) => {
            const next = !prev
            document.documentElement.classList.toggle('dark', next)
            localStorage.setItem('theme', next ? 'dark' : 'light')
            return next
        })
    }

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 dark:bg-slate-950/80 dark:border-slate-800">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="text-lg font-semibold text-slate-950 dark:text-slate-50">{title}</div>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-slate-700 hover:text-navy-700 dark:text-slate-300 dark:hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}
                        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
                    </nav>

                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
                        <button
                            onClick={() => setDrawerOpen(true)}
                            aria-label="Open menu"
                            className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile drawer */}
            {drawerOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setDrawerOpen(false)}
                    />
                    <div className="relative ml-auto w-72 bg-white p-6 shadow-lg dark:bg-slate-900">
                        <button
                            onClick={() => setDrawerOpen(false)}
                            aria-label="Close menu"
                            className="ml-auto mb-4 inline-flex items-center rounded-md border border-slate-200 bg-white px-2 py-1 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    onClick={() => setDrawerOpen(false)}
                                    href={link.href}
                                    className="text-sm text-slate-700 dark:text-slate-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}
