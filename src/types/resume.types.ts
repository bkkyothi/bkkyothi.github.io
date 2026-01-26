// Resume Types
export interface Education {
    degree: string;
    institution: string;
    period: string;
    description: string;
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
}

export interface ResumeData {
    education: Education[];
    experience: Experience[];
    skills: string[];
}
