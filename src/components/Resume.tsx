import React from 'react';
import {
    AcademicCapIcon,
    BriefcaseIcon,
    CodeBracketIcon,
} from '@heroicons/react/24/outline';
import { Chip } from '@material-tailwind/react';
import { resumeData } from '../data/resume.data';

/**
 * Resume Component
 * Displays education, work experience, and technical skills
 */
const Resume: React.FC = () => {
    const { education, experience, skills } = resumeData;

    return (
        <section id="resume" className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Resume
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400 text-lg">
                        My educational background and professional experience
                    </p>
                </div>

                {/* Education Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-blue-fusion-500/20 rounded-2xl">
                            <AcademicCapIcon className="h-8 w-8 text-blue-fusion-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Education
                        </h3>
                    </div>

                    <div className="space-y-6">
                        {education.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 rounded-3xl p-6 md:p-8 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-material dark:shadow-material-dark"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {item.degree}
                                        </h4>
                                        <p className="text-blue-fusion-400 font-medium">
                                            {item.institution}
                                        </p>
                                    </div>
                                    <span className="text-cloud-cover-400 font-medium whitespace-nowrap">
                                        {item.period}
                                    </span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Work Experience Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-cloud-cover-400/20 rounded-2xl">
                            <BriefcaseIcon className="h-8 w-8 text-cloud-cover-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Work Experience
                        </h3>
                    </div>

                    <div className="space-y-6">
                        {experience.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 rounded-3xl p-6 md:p-8 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-material dark:shadow-material-dark"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-blue-fusion-400 font-medium">
                                            {item.company}
                                        </p>
                                    </div>
                                    <span className="text-cloud-cover-400 font-medium whitespace-nowrap">
                                        {item.period}
                                    </span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Skills Section */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-blue-fusion-500/20 rounded-2xl">
                            <CodeBracketIcon className="h-8 w-8 text-blue-fusion-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Technical Skills
                        </h3>
                    </div>

                    <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-material dark:shadow-material-dark">
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <Chip
                                    key={index}
                                    value={skill}
                                    className="bg-blue-fusion-500/20 text-blue-fusion-600 dark:text-blue-fusion-300 border border-blue-fusion-400/30 font-medium px-4 py-2 rounded-full normal-case"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
