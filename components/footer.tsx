import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-primary inset-x-0 w-full p-5 md:p-10 px-5 md:px-10 lg:px-20">
            <div className="inline-flex flex-wrap justify-between items-center w-full mb-5 gap-5">
                <div className="text-lg md:text-xl font-ppmori-semi-bold">Download Resume</div>
                <ul className="font-ppmori-regular text-lg md:text-xl inline-flex items-center gap-5 md:gap-7 cursor-pointer">
                    <li>Github</li>
                    <li>Instagram</li>
                    <li>Linkedin</li>
                </ul>
            </div>
            <div className="text-sm md:text-base">©2024 Fiqry Choerudin - Frontend Engineer. All rights reserved.</div>
        </footer>
    )
}
