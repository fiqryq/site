import { Variants } from 'framer-motion';

export const text: Variants = {
    initial: {
        opacity: 1,
    },
    enter: {
        opacity: 0,
        top: -100,
        transition: { duration: 1.5, delay: 0.5, ease: [0.6, 0.05, 0.1, 1] },
        transitionEnd: { top: "47.5%" },
    },
    exit: {
        opacity: 1,
        top: "40%",
        transition: { duration: 1, delay: 0.6, ease: [0.25, 0.8, 0.5, 1] },
    },
};

export const curve = (initialPath: string, targetPath: string): Variants => ({
    initial: {
        d: initialPath,
    },
    enter: {
        d: targetPath,
        transition: { duration: 1.5, delay: 0.5, ease: [0.6, 0.05, 0.1, 1] },
    },
    exit: {
        d: initialPath,
        transition: { duration: 1.5, ease: [0.6, 0.05, 0.1, 1] },
    },
});

export const translate: Variants = {
    initial: {
        top: "-300px",
    },
    enter: {
        top: "-100vh",
        transition: { duration: 1.5, delay: 0.5, ease: [0.6, 0.05, 0.1, 1] },
        transitionEnd: {
            top: "100vh",
        },
    },
    exit: {
        top: "-300px",
        transition: { duration: 1.5, ease: [0.6, 0.05, 0.1, 1] },
    },
};
