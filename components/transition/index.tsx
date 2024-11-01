'use client';

import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { curve, translate } from './animation';
import { CurveProps, Dimensions, SVGProps } from '@/type/transition';

const anim = (variants: Variants) => ({
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
});

export default function Curve({ children, backgroundColor }: CurveProps) {
    const [dimensions, setDimensions] = useState<Dimensions>({ width: null, height: null });
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress or track actual network progress
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress + 1; // Adjust speed here
            });
        }, 30); // Adjust interval for speed

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        function resize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        resize();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div className="page curve" style={{ backgroundColor }}>
            {progress < 100 ? (
                <div className="loader">
                    <div className="spinner"></div>
                    <p>Loading... {progress}%</p>
                </div>
            ) : (
                <>
                    <div style={{ opacity: dimensions.width === null ? 1 : 0 }} className="background" />
                    {dimensions.width !== null && dimensions.height !== null && (
                        <SVG height={dimensions.height} width={dimensions.width} />
                    )}
                    {children}
                </>
            )}
        </div>
    );
}

const SVG = ({ height, width }: SVGProps) => {
    const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

    return (
        <motion.svg className='transition-svg' {...anim(translate)}>
            <motion.path {...anim(curve(initialPath, targetPath))} />
        </motion.svg>
    );
};
