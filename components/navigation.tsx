"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
    const [isNavigationOpen, setNavitationOpen] = useState<boolean>(false);

    const toggleMenu = () => setNavitationOpen(!isNavigationOpen);
    return (
        <nav className="flex items-center justify-between w-full border-b-[0.5px] border-[#42433E] py-4">
            <div className="inline-flex items-center gap-9">
                <Link href='/' className="flex items-center gap-4 md:gap-10 lg:gap-16">
                    <div className="text-primary font-ppmori-semi-bold-italic leading-none">
                        <div className="text-[20px] md:text-[28px] lg:text-[34px] tracking-tighter">Fiqry</div>
                        <div className="text-[12px] md:text-[18px] lg:text-[20px] tracking-tighter">.dev</div>
                    </div>
                </Link>

                {/* Menu items */}
                <ul className={`flex-col md:flex-row md:flex gap-4 border-b-[0.5px] border-[#42433E] md:border-none md:gap-5 lg:gap-7 font-ppmori-regular text-lg md:text-lg lg:text-xl text-[#7A796D] cursor-pointer absolute md:static top-[60px] md:top-auto left-0 w-full md:w-auto bg-background md:bg-transparent ${isNavigationOpen ? 'flex' : 'hidden'}`}>
                    <Link href='/works' className="hover:text-[#FEFCE1] active:text-[#FEFCE1] p-4 md:p-0">Works</Link>
                    <Link href='/showcase' className="hover:text-[#FEFCE1] active:text-[#FEFCE1] p-4 md:p-0">Showcase</Link>
                    <Link href='/writings' className="hover:text-[#FEFCE1] active:text-[#FEFCE1] p-4 md:p-0">Writings</Link>
                    <Link href='/about' className="hover:text-[#FEFCE1] active:text-[#FEFCE1] p-4 md:p-0">About</Link>
                </ul>
            </div>

            {/* Hamburger icon for mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-primary focus:outline-none">
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isNavigationOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            <div className="hidden md:flex items-center gap-2 md:gap-3">
                <div className="w-3 h-3 md:w-5 md:h-5 bg-[#ABFF85] rounded-full"></div>
                <div className="text-xs md:text-lg lg:text-xl text-primary">Open to work</div>
            </div>
        </nav>
    );
}
