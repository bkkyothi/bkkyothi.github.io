// Contact & Social Types
export interface SocialLink {
    name: string;
    url: string;
    icon: 'github' | 'linkedin' | 'email';
}

export interface ContactInfo {
    email: string;
    location: string;
    socialLinks: SocialLink[];
}
