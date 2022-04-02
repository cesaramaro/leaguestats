import LogoIcon from "./icons/LogoIcon.js";
import GithubIcon from "./icons/GithubIcon";

/**==============================================
 * *                   INFO
 * Reusable component for navigation top bar
 * Contains Navigation Bar and Github Icon  
 * Stays fixed to the top and takes up screen widht
 * Contained withing a nav and with fixed h-20 height
 * Navigation bar takes up only space needed 
 * for its content and keeps to the left
 * Navigation bar should follow .card
 * Github Icon keeps to the end separated..
 *=============================================**/

export default function NavBar() {
  return (
    <nav className="flex fixed w-full p-6 font-Inter font-semibold text-2xl">
      <div className="flex items-center h-80 card">
        <a className="h-10" href="../pages/Home">
          <LogoIcon />
        </a>
        <a className="px-6" href="../pages/Home">Home</a>
        <a className="" href="../pages/Home">About</a>
      </div>

      <div className="flex items-center p-6 justify-end ml-auto">
        <a className=' text-white w-40' href="https://github.com/cesaramaro/leaguestats">
          <GithubIcon />
        </a>
      </div>
    </nav>
  )
}