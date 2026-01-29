import React, { useMemo } from 'react';
import { PortfolioService } from '../services/PortfolioService';
import { SkillCategory } from '../types';

import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

const Resume: React.FC = () => {
    const experiences = useMemo(() => PortfolioService.getExperiences(), []);
    const education = useMemo(() => PortfolioService.getEducation(), []);
    const skills = useMemo(() => PortfolioService.getSkills(), []);

    return (
        <div className="space-y-16">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Resume</h2>
                <p className="text-gray-500 dark:text-gray-400">My educational and professional timeline</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Timeline Section */}
                <div className="space-y-12">
                    {/* Experience Group */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold flex items-center gap-3 text-gray-800 dark:text-white sticky top-24 bg-gray-50/90 dark:bg-black/20 backdrop-blur-sm py-2 z-10 lg:static lg:bg-transparent lg:p-0">
                            <BriefcaseIcon className="w-6 h-6 text-indigo-500" />
                            Experience
                        </h3>
                        <div className="space-y-8 relative pl-6 md:pl-8 border-l-2 border-gray-200 dark:border-gray-800 ml-2 md:ml-0">
                            {experiences.map((exp) => (
                                <div key={exp.id} className="relative group">
                                    {/* Dot on timeline */}
                                    <div className="absolute -left-[31px] md:-left-[39px] top-6 md:top-6 w-4 h-4 md:w-5 md:h-5 rounded-full border-4 border-white dark:border-black bg-indigo-500 shadow-sm group-hover:scale-125 transition-transform" />

                                    <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all hover:translate-x-1 border border-gray-100 dark:border-gray-800">
                                        <span className="text-xs font-bold tracking-wider text-indigo-500 uppercase mb-2 block bg-indigo-50 dark:bg-indigo-900/20 w-fit px-2 py-1 rounded-md">
                                            {exp.period}
                                        </span>
                                        <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                                            {exp.role}
                                        </h4>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-1">
                                            {exp.company}
                                            {exp.type === 'freelance' && <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] uppercase">Freelance</span>}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                                            {exp.description}
                                        </p>
                                        {exp.hasThaiDescription() && (
                                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed italic border-t border-gray-100 dark:border-gray-800 pt-2 mt-2">
                                                "{exp.descriptionTH}"
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Group */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold flex items-center gap-3 text-gray-800 dark:text-white sticky top-24 bg-gray-50/90 dark:bg-black/20 backdrop-blur-sm py-2 z-10 lg:static lg:bg-transparent lg:p-0">
                            <AcademicCapIcon className="w-6 h-6 text-indigo-500" />
                            Education
                        </h3>
                        <div className="space-y-8 relative pl-6 md:pl-8 border-l-2 border-gray-200 dark:border-gray-800 ml-2 md:ml-0">
                            {education.map((edu) => (
                                <div key={edu.id} className="relative group">
                                    <div className="absolute -left-[31px] md:-left-[39px] top-6 md:top-6 w-4 h-4 md:w-5 md:h-5 rounded-full border-4 border-white dark:border-black bg-indigo-500 shadow-sm group-hover:scale-125 transition-transform" />
                                    <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-soft border border-gray-100 dark:border-gray-800 hover:shadow-soft-lg transition-shadow">
                                        <span className="text-xs font-bold tracking-wider text-indigo-500 uppercase mb-2 block bg-indigo-50 dark:bg-indigo-900/20 w-fit px-2 py-1 rounded-md">
                                            {edu.period}
                                        </span>
                                        <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                                            {edu.school}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div>
                    <div className="lg:sticky lg:top-32 space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                            Technical Skills
                        </h3>
                        <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-md p-6 md:p-8 rounded-[2rem] shadow-soft border border-white/20 dark:border-white/5">
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                        Languages
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.filter(s => s.category === SkillCategory.LANGUAGE).map(skill => (
                                            <span key={skill.id} className="px-3 py-1.5 md:px-4 md:py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-xl text-sm font-medium border border-indigo-100 dark:border-indigo-800 transition-transform hover:-translate-y-1 cursor-default">
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                        Frameworks
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.filter(s => s.category === SkillCategory.FRAMEWORK).map(skill => (
                                            <span key={skill.id} className="px-3 py-1.5 md:px-4 md:py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-xl text-sm font-medium border border-purple-100 dark:border-purple-800 transition-transform hover:-translate-y-1 cursor-default">
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                                        Tools & Database
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.filter(s => [SkillCategory.TOOL, SkillCategory.DATABASE].includes(s.category)).map(skill => (
                                            <span key={skill.id} className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 transition-transform hover:-translate-y-1 cursor-default">
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                                        Design
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.filter(s => s.category === SkillCategory.DESIGN).map(skill => (
                                            <span key={skill.id} className="px-3 py-1.5 md:px-4 md:py-2 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-xl text-sm font-medium border border-pink-100 dark:border-pink-800 transition-transform hover:-translate-y-1 cursor-default">
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
