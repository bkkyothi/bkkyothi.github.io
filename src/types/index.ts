export enum ProjectCategory {
    APPLICATION = 'application',
    WEB = 'web',
    DATA = 'data'
}

export enum SkillCategory {
    LANGUAGE = 'language',
    FRAMEWORK = 'framework',
    DATABASE = 'database',
    TOOL = 'tool',
    DESIGN = 'design'
}

export enum ExperienceType {
    WORK = 'work',
    INTERNSHIP = 'internship',
    FREELANCE = 'freelance',
    MILITARY = 'military'
}

export interface IProjectDTO {
    id: number;
    title: string;
    category: ProjectCategory | string;
    description: string;
    technologies: string[];
    image?: string;
    link?: string;
}

export interface ISkillDTO {
    id: number;
    name: string;
    category: SkillCategory | string;
}

export interface IExperienceDTO {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    description_th?: string;
    type: ExperienceType | string;
}

export interface IEducationDTO {
    id: number;
    degree: string;
    school: string;
    period: string;
    description: string;
}
