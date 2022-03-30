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
     
      <header className="fixed w-full border-b-2 border-b-blue-400">
        <div className="flex items-center">
          <a className="pl-5" href="../pages/Home">
            <img src={logo} className='h-10'></img>
          </a>
          <a className="py-3 px-5" href="../pages/Home">Home</a>
          <a className="py-3 px-5" href="../pages/Home">About</a>
          <a className="py-3 px-5 justify-end ml-auto" href="../pages/Home">Home</a>
        </div>
      </header>
      
    /*
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out border-b-2 border-b-gray-400 ${!top && 'bg-[#00142A] backdrop-blur-sm shadow-lg'}`}>
            <div className="flex h-16 md:h-20">
                <nav className="flex">
                    <ul className="flex items-center">
                        <li><a className="font-medium text-gray-400 hover:text-white px-5 py-3 flex transition duration-150 ease-in-out" href="#">Test</a></li>
                        <li><a className="font-medium text-gray-400 hover:text-white px-5 py-3 flex transition duration-150 ease-in-out" href="#">Test</a></li>
                        <li><a className="font-medium text-gray-400 hover:text-white px-5 py-3 flex transition duration-150 ease-in-out"> GitHub </a></li> 
                    </ul>
                </nav>
            </div>
    </header>\
    */
    )    
}