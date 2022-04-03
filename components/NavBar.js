import Link from 'next/link'
import LogoIcon from "../public/icons/LogoIcon.svg"
import SearchIcon from "../public/icons/SearchIcon.svg"
import GitHub from '../public/icons/GithubIcon.svg'

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
        <Link href={'/'}>
          <a className="h-10">
            <LogoIcon height='100%' />
          </a>
        </Link>
        <Link href={'/'}>
          <a className="px-6"> Home </a>
        </Link>
        <Link href={'/about'}>
          <a className="" href="../pages/Home"> About </a>
        </Link>
      </div>

      <div className="flex items-center p-6 justify-end ml-auto">
        <a className=' text-white w-40' href="https://github.com/cesaramaro/leaguestats">
          <GitHub height='100%' />
        </a>
      </div>
    </nav>
  )
}