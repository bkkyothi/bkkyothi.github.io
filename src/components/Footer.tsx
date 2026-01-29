import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 bg-white/50 dark:bg-black/50 backdrop-blur-md border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} Kriangkrai Yothi. All rights reserved.
                </p>
                <div className="mt-4 flex justify-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">GitHub</a>
                    <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
