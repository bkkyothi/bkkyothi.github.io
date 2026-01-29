export interface Project {
    id: number;
    title: string;
    category: 'application' | 'web' | 'data';
    description: string;
    technologies: string[];
    image?: string;
    link?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Taffy - Astrology Dating App",
        category: "web",
        description: "A dating platform matching users based on Thai astrological algorithms (Zodiac, Birth Year, Blood Type). Designed relational database schema and deployed on Heroku.",
        technologies: ["Django", "Python", "SQL", "Heroku", "Bootstrap"],
        image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" // Placeholder
    },
    {
        id: 2,
        title: "Smart Safety System",
        category: "application",
        description: "IoT-based web interface to monitor and report safety status in real-time.",
        technologies: ["Django", "IoT", "WebSockets"],
        image: "https://images.unsplash.com/photo-1558346058-b651b7a4aa8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" // Placeholder
    },
    {
        id: 3,
        title: "Book Purchase Analysis",
        category: "data",
        description: "Data Science web application for analyzing and visualizing book sales data to support decision-making.",
        technologies: ["Django", "Pandas", "Data Visualization"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" // Placeholder
    },
    {
        id: 4,
        title: "Post Notification System",
        category: "web",
        description: "Real-time announcement and notification system for organizational updates.",
        technologies: ["Laravel", "PHP", "MySQL"],
        image: "https://images.unsplash.com/photo-1459499362902-55a20553e082?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" // Placeholder
    }
];
