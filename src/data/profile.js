import { ExternalLink } from 'lucide-react'

export const profile = {
    name: 'Rupal Bapodara',
    role: 'Senior PHP & Laravel Developer & Team Lead',
    bio: 'Senior PHP & Laravel Developer with 10+ years of experience building scalable web applications and REST APIs for US-based international clients. Proven track record of leading teams, architecting solutions, and delivering high-quality code on time. Passionate about mentoring junior developers and fostering a collaborative team environment.',
    phone: '+91 91737 50243',
    email: 'rupalnodedra@gmail.com',
    location: 'Porbandar, Gujarat, India',
    // public/ is served at the site root; remove the "public" segment
    avatar: '/images/rupal-profile.png',
    socials: [
        {
            label: 'GitHub',
            href: 'https://github.com/rupal-bapodara',
            icon: ExternalLink,
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/rupal-bapodara',
            icon: ExternalLink,
        },
    ],
}
