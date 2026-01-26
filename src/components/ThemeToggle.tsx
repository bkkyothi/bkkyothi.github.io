import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 z-50 p-4 bg-blue-fusion-500 hover:bg-blue-fusion-600 text-white rounded-full shadow-2xl hover:shadow-blue-fusion-500/50 transition-all duration-300 hover:scale-110 group"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                <SunIcon
                    className={`absolute inset-0 transition-all duration-300 ${theme === 'light'
                            ? 'opacity-100 rotate-0'
                            : 'opacity-0 rotate-90'
                        }`}
                />
                <MoonIcon
                    className={`absolute inset-0 transition-all duration-300 ${theme === 'dark'
                            ? 'opacity-100 rotate-0'
                            : 'opacity-0 -rotate-90'
                        }`}
                />
            </div>

            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
        </button>
    );
};

export default ThemeToggle;
