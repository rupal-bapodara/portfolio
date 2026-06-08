import { Phone, Mail, MapPin } from 'lucide-react'

export const ProfileSidebar = ({ profile }) => (
    <aside className="lg:sticky lg:top-6">
        <div className="overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <img
                src={profile.avatar}
                alt={profile.name}
                className="mx-auto h-32 w-32 rounded-full object-cover"
            />
            <div className="mt-8 text-center">
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                    {profile.name}
                </h1>
                <p className="mt-3 text-slate-600">{profile.role}</p>
                <p className="mt-5 text-sm leading-7 text-slate-600">{profile.bio}</p>
            </div>
            <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
                <div className="flex items-center gap-3 text-slate-700">
                    <Phone className="h-5 w-5 text-slate-400" />
                    <span className="text-sm">{profile.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <span className="text-sm">{profile.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                    <MapPin className="h-5 w-5 text-slate-400" />
                    <span className="text-sm">{profile.location}</span>
                </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                {profile.socials.map((social) => {
                    const Icon = social.icon
                    return (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
                        >
                            <Icon className="h-4 w-4" />
                            {social.label}
                        </a>
                    )
                })}
            </div>
        </div>
    </aside>
)
