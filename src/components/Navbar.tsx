import React, { useState, useEffect } from 'react';
import { cn } from '../utils/cn';
import {
    // UserIcon,
    DocumentTextIcon,
    BriefcaseIcon,
    ChatBubbleBottomCenterTextIcon,
    Bars3Icon,
    XMarkIcon,
    SunIcon,
    MoonIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    // { name: 'About', href: '#about', icon: UserIcon },
    { name: 'Resume', href: '#resume', icon: DocumentTextIcon },
    { name: 'Portfolio', href: '#portfolio', icon: BriefcaseIcon },
    { name: 'Contact', href: '#contact', icon: ChatBubbleBottomCenterTextIcon },
];

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-[300px] bg-white dark:bg-[#111] border-r border-gray-200 dark:border-gray-800 z-50 transition-colors duration-300">
                <header className="p-6 flex items-center justify-between">
                    <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300">
                        <Bars3Icon className="w-6 h-6" />
                    </button>
                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
                        {/* Placeholder for the 'Beer' icon/logo from snippet, using generic logic */}
                        <div className="text-white text-xs font-bold">KY</div>
                    </div>
                </header>

                <div className="flex-1 flex flex-col gap-2 px-4 py-6 overflow-y-auto">
                    {/* Home Link with Custom SVG from snippet */}
                    <a
                        href="#"
                        onClick={() => setActiveSection('home')}
                        className={cn(
                            "flex items-center gap-4 px-6 py-4 rounded-full transition-all duration-200 group",
                            activeSection === 'home'
                                ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium"
                                : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        )}
                    >
                        <i className="w-6 h-6 flex-shrink-0">
                            <svg viewBox="0 0 24 24" fill="currentColor" className={activeSection === 'home' ? "text-indigo-600 dark:text-indigo-400" : "text-gray-500"}>
                                <path d="M21,12C21,9.97 20.33,8.09 19,6.38V17.63C20.33,15.97 21,14.09 21,12M17.63,19H6.38C7.06,19.55 7.95,20 9.05,20.41C10.14,20.8 11.13,21 12,21C12.88,21 13.86,20.8 14.95,20.41C16.05,20 16.94,19.55 17.63,19M11,17L7,9V17H11M17,9L13,17H17V9M12,14.53L15.75,7H8.25L12,14.53M17.63,5C15.97,3.67 14.09,3 12,3C9.91,3 8.03,3.67 6.38,5H17.63M5,17.63V6.38C3.67,8.09 3,9.97 3,12C3,14.09 3.67,15.97 5,17.63M23,12C23,15.03 21.94,17.63 19.78,19.78C17.63,21.94 15.03,23 12,23C8.97,23 6.38,21.94 4.22,19.78C2.06,17.63 1,15.03 1,12C1,8.97 2.06,6.38 4.22,4.22C6.38,2.06 8.97,1 12,1C15.03,1 17.63,2.06 19.78,4.22C21.94,6.38 23,8.97 23,12Z"></path>
                            </svg>
                        </i>
                        <span className="text-lg">Home</span>
                    </a>

                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveSection(link.name.toLowerCase())}
                            className={cn(
                                "flex items-center gap-4 px-6 py-4 rounded-full transition-all duration-200 group",
                                activeSection === link.name.toLowerCase()
                                    ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium"
                                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                            )}
                        >
                            <link.icon className="w-6 h-6 flex-shrink-0" />
                            <span className="text-lg">{link.name}</span>
                        </a>
                    ))}
                </div>

                <div className="p-6 mt-auto">
                    <button
                        onClick={toggleTheme}
                        className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {theme === 'dark' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-[#111]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between">
                <a href="#" className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-white shadow-sm">
                    KY
                </a>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-gray-600 dark:text-gray-300"
                >
                    {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-16 z-30 bg-white dark:bg-[#111] p-4 md:hidden overflow-y-auto "
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-4 py-3 rounded-xl text-lg font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-3"
                                >
                                    <link.icon className="w-5 h-5" />
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="mt-8 px-4">
                            <button
                                onClick={toggleTheme}
                                className="flex items-center gap-3 text-lg font-medium text-gray-600 dark:text-gray-300"
                            >
                                {theme === 'dark' ? (
                                    <>
                                        <MoonIcon className="w-5 h-5" /> Dark Mode
                                    </>
                                ) : (
                                    <>
                                        <SunIcon className="w-5 h-5" /> Light Mode
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
