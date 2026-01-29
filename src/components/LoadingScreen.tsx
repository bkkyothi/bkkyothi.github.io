import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 dark:bg-[#141414]"
        >
            <div className="relative">
                {/* Material Design 3 Circular Progress Indicator Style */}
                {/* Circular Wavy Progress Indicator */}
                <progress className="circle wavy text-indigo-600 dark:text-indigo-400"></progress>

                {/* Optional Pulse Effect */}
                <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-indigo-500/20 animate-ping"></div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
