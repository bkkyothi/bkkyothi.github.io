import React, { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { portfolioData, getProjectsByCategory } from '../data/portfolio.data';
import { FilterType } from '../types/portfolio.types';

/**
 * Portfolio Component
 * Displays filterable project gallery
 */
const Portfolio: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('All');
    const { filters } = portfolioData;
    const filteredProjects = getProjectsByCategory(activeFilter);

    return (
        <section id="portfolio" className="min-h-screen py-20 px-4 bg-gray-100 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Portfolio
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400 text-lg">
                        Explore my recent projects and work
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === filter
                                    ? 'bg-blue-fusion-500 text-white shadow-lg scale-105'
                                    : 'bg-gray-200 dark:bg-white/5 text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-white/10'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 rounded-3xl overflow-hidden hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-material dark:shadow-material-dark hover:shadow-xl"
                        >
                            {/* Project Image Placeholder */}
                            <div className="aspect-video bg-gradient-to-br from-blue-fusion-500/30 to-cloud-cover-400/30 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-6xl font-bold text-white/20">
                                        {project.image.charAt(0).toUpperCase()}
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 to-transparent opacity-60"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-fusion-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-xs font-medium bg-blue-fusion-500/20 text-blue-fusion-600 dark:text-blue-fusion-300 rounded-full border border-blue-fusion-400/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* View Project Link */}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-blue-fusion-400 hover:text-blue-fusion-300 font-medium transition-colors group/link"
                                    >
                                        <span>View Project</span>
                                        <ChevronRightIcon className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-700 dark:text-gray-400 text-lg">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
