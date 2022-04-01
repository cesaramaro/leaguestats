import logo from "../images/ntIco.svg"
import github from "../images/gh.svg"
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
     
      <nav className="flex fixed w-full p-6 font-Inter font-semibold text-2xl">
        <div className="flex items-center h-20 bg-black bg-opacity-80 text-white rounded-2xl p-6">
          <a className="" href="../pages/Home">
            <img src={logo} className='h-10'></img>
          </a>
          <a className="px-6" href="../pages/Home">Home</a>
          <a className="" href="../pages/Home">About</a>
        </div>
        
        <div className="flex items-center p-6 justify-end ml-auto">
          <a>
            <img src={github} className='h-10'></img>
          </a>
        </div>
      </nav>
    )    
}