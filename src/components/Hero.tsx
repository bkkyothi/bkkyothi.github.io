import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 !mt-0 ">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                {/* Profile Image / Avatar Placeholder */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-glow mb-6 animate-float">
                    <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                        {/* <span className="text-4xl font-bold text-gray-400">KY</span> */}
                        <img src="https://scontent.fnak4-2.fna.fbcdn.net/v/t39.30808-1/571799861_3246628432170432_1043455812930376426_n.jpg?stp=dst-jpg_p100x100_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=F-KP9shh7sAQ7kNvwHg6YtA&_nc_oc=AdmQpuTOG9KQE8PPaBzuHuf-diD87I34x9p8hLHVzBNmzdo4Q-HlTiN-Fx3ZbAZMdb0&_nc_zt=24&_nc_ht=scontent.fnak4-2.fna&_nc_gid=hirVecQRrjR5F0c6rTt6kw&oh=00_AfpBNJieSAwZk6uVSfWK5DnkYqTdVhyrBqfx3Vi8kuQ-Yw&oe=69814D9D" alt="Kriangkrai Yothi" className="w-full h-full object-cover" />
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl space-y-4"
            >
                <h2 className="text-xl md:text-2xl font-medium text-indigo-600 dark:text-indigo-400">Hello, I'm</h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Kriangkrai Yothi
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
                    Full-Stack Developer & Technical Designer
                </p>

                <div className="pt-6 max-w-2xl mx-auto">
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed bg-white/50 dark:bg-black/20 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                        A resilient and adaptable Computer Science graduate with a strong foundation in <span className="font-semibold text-indigo-600 dark:text-indigo-400">Django</span> and <span className="font-semibold text-indigo-600 dark:text-indigo-400">Laravel</span>.
                        Currently seeking opportunities to create valuable software solutions.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-12"
            >
                <a href="#resume" className="flex flex-col items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors">
                    <span className="text-sm font-medium tracking-widest uppercase">Explore My Journey</span>
                    <ArrowDownIcon className="w-5 h-5 animate-bounce" />
                </a>
            </motion.div>
        </div>
    );
};

export default Hero;
