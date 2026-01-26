/**
 * Site Configuration
 */

export interface NavLink {
    name: string;
    href: string;
}

export interface SiteConfig {
    name: string;
    title: string;
    description: string;
    author: {
        name: string;
        role: string;
        email: string;
        location: string;
    };
    navigation: NavLink[];
}

export const siteConfig: SiteConfig = {
    name: 'Kriangkrai Yothi',
    title: 'Kriangkrai Yothi | Portfolio',
    description: 'Computer Science Graduate | Full-Stack Developer & Technical Designer',

    author: {
        name: 'Kriangkrai Yothi',
        role: 'Computer Science Graduate | Full-Stack Developer & Technical Designer',
        email: 'kriangkai.yot@thaimooc.ac.th',
        location: 'Thailand',
    },

    navigation: [
        { name: 'ABOUT', href: '#about' },
        { name: 'RESUME', href: '#resume' },
        { name: 'PORTFOLIO', href: '#portfolio' },
        { name: 'CONTACT', href: '#contact' },
    ],
};
