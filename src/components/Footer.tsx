import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-300 dark:border-white/10 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-gray-700 dark:text-gray-400 text-sm">
                        © {currentYear} Kriangkrai Yothi. All rights reserved.
                    </div>

                    <div className="flex gap-6 text-sm">
                        <a
                            href="https://github.com/bkkyothi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-400 hover:text-blue-fusion-400 transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-400 hover:text-blue-fusion-400 transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:kriangkai.yot@thaimooc.ac.th"
                            className="text-gray-700 dark:text-gray-400 hover:text-blue-fusion-400 transition-colors"
                        >
                            Email
                        </a>
                    </div>
                </div>

                <div className="text-center mt-6 text-gray-600 dark:text-gray-500 text-xs">
                    Built with React, TypeScript, and Tailwind CSS
                </div>
            </div>
        </footer>
    );
};

export default Footer;
