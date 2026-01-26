// Portfolio Types
export type FilterType = 'All' | 'Applications' | 'Web development';

export interface Project {
    title: string;
    category: FilterType[];
    description: string;
    technologies: string[];
    link?: string;
    image: string;
}

export interface PortfolioData {
    filters: FilterType[];
    projects: Project[];
}
