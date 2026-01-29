import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../models/Project';
import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { cn } from '../utils/cn';

interface ProjectSideSheetProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectSideSheet: React.FC<ProjectSideSheetProps> = ({ project, isOpen, onClose }) => {
    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Scrim (Backdrop) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm !mt-0"
                    />

                    {/* Left Side Sheet (RTL Support Style) */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className={cn(
                            "fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] shadow-2xl overflow-y-auto !mt-0",
                            // MD3 Specs: 16dp rounded corners on the opening side (right side in this case)
                            "rounded-l-2xl",
                            // Dynamic Colors
                            "bg-surface-light dark:bg-[#1e1e1e] text-gray-900 dark:text-gray-100"
                        )}
                    >
                        {/* Header with Sticky Close Button */}
                        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-[#1e1e1e]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 !mt-0">
                            <h3 className="text-xl font-bold truncate pr-4 text-gray-800 dark:text-gray-200">
                                Project Details
                            </h3>
                            <button
                                onClick={onClose}
                                className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                                <XMarkIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-0">
                            {/* Hero Image */}
                            <div className="relative h-64 w-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="inline-block px-3 py-1 mb-2 text-xs font-bold text-white uppercase bg-white/20 backdrop-blur-md rounded-lg border border-white/20">
                                        {project.formattedCategory}
                                    </span>
                                    <h2 className="text-3xl font-bold text-white drop-shadow-md">
                                        {project.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col gap-8">
                                {/* Description */}
                                <div>
                                    <h4 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">About</h4>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-xl text-sm font-medium border border-indigo-100 dark:border-indigo-800"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                                    <a
                                        href={project.link || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all hover:scale-[1.02] shadow-lg shadow-indigo-500/30"
                                    >
                                        <span>View Live / Repository</span>
                                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectSideSheet;
