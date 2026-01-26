import React from 'react';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center px-4 py-20 md:py-0"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text content */}
                    <div className="space-y-6 text-center md:text-left">
                        <div className="space-y-2">
                            <p className="text-cloud-cover-400 font-medium text-lg">
                                Hello, I'm
                            </p>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
                                Kriangkrai Yothi
                            </h1>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-300">
                            Computer Science Graduate | Full-Stack Developer & Technical
                            Designer
                        </h2>

                        <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
                            A Computer Science graduate from Ubon Ratchathani University with
                            experience in Django, Laravel, and technical design. I combine
                            software development expertise with creative problem-solving to
                            build effective solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                            <a
                                href="#portfolio"
                                className="px-8 py-4 bg-blue-fusion-500 hover:bg-blue-fusion-600 text-white font-semibold rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 text-gray-900 dark:text-white font-semibold rounded-3xl border border-gray-300 dark:border-white/20 transition-all duration-300 hover:-translate-y-1"
                            >
                                Get In Touch
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6 text-gray-700 dark:text-gray-400 justify-center md:justify-start">
                            <div className="flex items-center gap-2">
                                <MapPinIcon className="h-5 w-5 text-blue-fusion-400" />
                                <span>Thailand</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <EnvelopeIcon className="h-5 w-5 text-blue-fusion-400" />
                                <span className="text-sm">kriangkai.yot@thaimooc.ac.th</span>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Profile image placeholder */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-md">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-fusion-500/20 to-cloud-cover-400/20 border border-gray-300 dark:border-white/10 backdrop-blur-sm shadow-material dark:shadow-material-dark flex items-center justify-center">
                                <div className="text-center space-y-4 p-8">
                                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-fusion-500 to-cloud-cover-400 flex items-center justify-center text-white text-5xl font-bold">
                                        KY
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 italic">
                                        "Building the future, one line of code at a time"
                                    </p>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl bg-blue-fusion-500/10 blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
