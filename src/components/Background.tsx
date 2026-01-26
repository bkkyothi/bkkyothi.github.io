import React from 'react';
import LiquidEther from './LiquidEther';

const Background: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* LiquidEther Effect */}
            <div className="absolute inset-0">
                <LiquidEther
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                    autoDemo
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    isBounce={false}
                    resolution={0.5}
                />
            </div>

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/70 via-gray-50/60 to-gray-50/70 dark:from-gray-900/80 dark:via-gray-900/70 dark:to-gray-900/80 pointer-events-none"></div>
        </div>
    );
};

export default Background;
