import { ResumeData } from '../types/resume.types';

/**
 * Resume Data - Education, Experience, and Skills
 */
export const resumeData: ResumeData = {
    education: [
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'Ubon Ratchathani University',
            period: '2017 - 2020',
            description:
                'Graduated with experience in Django, Laravel, and comprehensive knowledge in software development and technical design.',
        },
    ],

    experience: [
        {
            title: 'Software Tester',
            company: 'Mana Application',
            period: '2023 - Present',
            description:
                'Conducting comprehensive testing of applications, identifying bugs, and ensuring quality standards for software products.',
        },
        {
            title: 'Freelance Designer',
            company: 'Self-employed',
            period: '2020 - Present',
            description:
                'Providing graphic design services using Adobe Illustrator and Photoshop, creating visual content for various clients.',
        },
        {
            title: 'Administrative Assistant',
            company: 'Naval Secretariat, Royal Thai Navy',
            period: '2022 - 2023',
            description:
                'Managed administrative tasks, documentation, and coordination at the Naval Secretariat.',
        },
    ],

    skills: [
        'Python',
        'Django',
        'Laravel',
        'PHP',
        'React',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'SQL',
        'PostgreSQL',
        'Git',
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Figma',
        'IoT Development',
        'Data Science',
        'Pandas',
        'Heroku',
    ],
};
