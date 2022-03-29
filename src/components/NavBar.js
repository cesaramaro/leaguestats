import logo from "../logo.svg"
import React, { useState, useEffect } from 'react';

export default function NavBar() {

    const [top, setTop] = useState(true);

    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);  
    return(

    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out border-b-2 border-b-gray-400 ${!top && 'bg-[#00142A] backdrop-blur-sm shadow-lg'}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
                <nav className="flex flex-grow">
                    <ul className="flex flex-grow justify-center flex-wrap items-center">
                        <li><a className="font-medium text-gray-400 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out" href="#">Test</a></li>
                        <li><a className="font-medium text-gray-400 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out" href="#">Test</a></li>
                   </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}