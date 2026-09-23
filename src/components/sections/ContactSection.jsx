export const ContactSection = ({ profile }) => (
    <section id="contact" className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
        <div className="mb-6">
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">Get In Touch</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/60">
                <p className="text-sm text-slate-700 dark:text-slate-300">Email</p>
                <a
                    className="mt-2 block text-sm font-medium text-slate-900 dark:text-slate-50"
                    href={`mailto:${profile.email}`}
                >
                    {profile.email}
                </a>
                <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">Phone</p>
                <a
                    className="mt-2 block text-sm font-medium text-slate-900 dark:text-slate-50"
                    href={`tel:${profile.phone}`}
                >
                    {profile.phone}
                </a>
            </div>
            <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/60">
                <p className="text-sm text-slate-700 dark:text-slate-300">Location</p>
                <p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-50">{profile.location}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                        href={`mailto:${profile.email}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-700 px-4 py-2 text-sm font-semibold text-white hover:bg-navy-900"
                    >
                        Email me
                    </a>
                    <a
                        href={profile.upwork}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                    >
                        Hire me on Upwork
                    </a>
                </div>
            </div>
        </div>
    </section>
)
