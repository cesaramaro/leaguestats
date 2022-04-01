import LogoIco from "./icons/LogoIcon.js";
import GithubIco from "./icons/GithubIcon";
import React, { useState, useEffect } from 'react';

export default function NavBar() {
  return (

    <nav className="flex fixed w-full p-6 font-Inter font-semibold text-2xl">
      <div className="flex items-center h-20 rounded-bar-black">
        <a className="h-10" href="../pages/Home">
          <LogoIco></LogoIco>
        </a>
        <a className="px-6" href="../pages/Home">Home</a>
        <a className="" href="../pages/Home">About</a>
      </div>

      <div className="flex items-center p-6 justify-end ml-auto">
        <a className=' text-white w-10'>
          <GithubIco></GithubIco>
        </a>
      </div>
    </nav>
  )
}