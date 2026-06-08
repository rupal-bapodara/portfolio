export const ListItems = ({ items, variant = 'bullet' }) => {
    if (variant === 'bullet') {
        return (
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {items.map((item) => (
                    <li key={item} className="flex gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mt-1 h-4 w-4 flex-none text-slate-400"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        )
    }
    if (variant === 'check') {
        return (
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                {items.map((item) => (
                    <li key={item} className="flex gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mt-1 h-4 w-4 flex-none text-slate-400"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        )
    }
}
