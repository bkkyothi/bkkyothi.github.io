import React from 'react';
import LiquidEther from './LiquidEther';

const Background: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
            {/* LiquidEther Effect - slightly lower opacity in light mode for better text contrast */}
            <div className="absolute inset-0 opacity-80 dark:opacity-60">
                <LiquidEther
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={true}
                    viscous={30}
                    colors={["#9a9393", "#4a6275", "#79b6d8"]}
                    autoDemo
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    isBounce={false}
                    resolution={0.5}
                />
            </div>

            {/* Glass/Blur overlay to ensure text is readable */}
            <div className="absolute inset-0 bg-white/30 dark:bg-black/40 backdrop-blur-[2px]"></div>
        </div>
    );
};

export default Background;
