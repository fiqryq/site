export interface AnimationState {
    opacity?: number;
    top?: number | string;
    d?: string;
    transition?: {
        duration: number;
        delay?: number;
        ease: [number, number, number, number];
    };
    transitionEnd?: {
        top?: string;
    };
}

export interface Dimensions {
    width: number | null;
    height: number | null;
}

export interface CurveProps {
    children: React.ReactNode;
    backgroundColor?: string;
}

export interface SVGProps {
    height: number;
    width: number;
}
