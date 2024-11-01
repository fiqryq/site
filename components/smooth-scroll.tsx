"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import Curve from "./transition";
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                duration: 2,
            }}
        >
            <Curve>
                {children}
            </Curve>
        </ReactLenis>
    );
}
