import { ReactNode } from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import React from "react";
export default function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <div>
            <div className='fixed top-0 left-0 px-5 md:px-10 lg:px-20 w-full z-50 bg-background'>
                <Navigation />
            </div>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
