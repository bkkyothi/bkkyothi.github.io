import React, { useState, useMemo } from 'react';
import { PortfolioService } from '../services/PortfolioService';
import { Project } from '../models/Project';
import { ProjectCategory } from '../types';
import { cn } from '../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectSideSheet from './ProjectSideSheet';

const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<string>('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Fetch projects once (or emulate fetching)
    const allProjects = useMemo(() => PortfolioService.getProjects(), []);

    const filteredProjects = useMemo(() => {
        return allProjects.filter(project => project.matchesFilter(filter));
    }, [allProjects, filter]);

    const tabs = [
        { id: 'all', label: 'All Projects' },
        { id: ProjectCategory.WEB, label: 'Web Dev' },
        { id: ProjectCategory.APPLICATION, label: 'Applications' },
        { id: ProjectCategory.DATA, label: 'Data Science' },
    ];

    return (
        <div className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Portfolio</h2>
                <p className="text-gray-500 dark:text-gray-400">Selected Works & Projects</p>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mt-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setFilter(tab.id as string)}
                            className={cn(
                                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                                filter === tab.id
                                    ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30"
                                    : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project: Project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-soft hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            {/* Card Image */}
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" /> {/* Loading skeleton if needed */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                <span className="absolute bottom-4 left-6 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-white/30 uppercase tracking-wider">
                                    {project.formattedCategory}
                                </span>
                            </div>

                            {/* Card Content */}
                            <div className="p-8 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="pt-4 flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg text-xs font-semibold">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 rounded-lg text-xs font-semibold">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Side Sheet Modal */}
            <ProjectSideSheet
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

export default Portfolio;
