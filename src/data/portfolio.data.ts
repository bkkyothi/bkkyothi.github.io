import { PortfolioData, Project } from '../types/portfolio.types';

/**
 * Portfolio Data - Projects and Filters
 */
export const portfolioData: PortfolioData = {
    filters: ['All', 'Applications', 'Web development'],

    projects: [
        {
            title: 'Taffy - Astrology Dating App',
            category: ['Applications', 'Web development'],
            description:
                'An innovative astrology-based dating web application that matches users based on zodiac compatibility. Built with Django and SQL, deployed on Heroku.',
            technologies: ['Django', 'Python', 'SQL', 'Heroku', 'HTML/CSS'],
            image: 'taffy',
        },
        {
            title: 'Smart Safety System',
            category: ['Applications', 'Web development'],
            description:
                'IoT-based safety monitoring web application for real-time alerts and environmental monitoring. Integrates hardware sensors with Django backend.',
            technologies: ['IoT', 'Django', 'Python', 'JavaScript', 'REST API'],
            image: 'safety',
        },
        {
            title: 'Book Purchase Analysis',
            category: ['Web development'],
            description:
                'Data visualization web application for analyzing book purchase patterns and trends using Pandas. Features interactive charts and insights.',
            technologies: ['Python', 'Pandas', 'Django', 'Data Visualization'],
            image: 'books',
        },
    ],
};

/**
 * Get projects by category
 */
export const getProjectsByCategory = (category: string): Project[] => {
    if (category === 'All') {
        return portfolioData.projects;
    }
    return portfolioData.projects.filter((project) =>
        project.category.includes(category as any)
    );
};
