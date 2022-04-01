import HomeIco from './icons/HomeIcon.js'
import InfoIco from './icons/InfoIcon.js'
import GithubIco from './icons/GithubIcon.js'

/**==============================================
 * *                   INFO
 * Reusable component for navagation sidebar  
 * Stays fixed to the top left corner and grows down.
 * Contained withing a nav and with fixed w-20 width
 * Should Follow rounded-bar color can change
 *=============================================**/

export default function SideBar() {
    return (

        <nav className="fixed p-6 font-Inter font-semibold text-2xl">
            <div className="flex flex-col place-content-center w-20 rounded-bar-black ">
                <p className="text-white text-center"> nt. </p>
                <a className=' text-white pt-6' href="">
                    <HomeIco></HomeIco>
                </a>
                <a className=' text-white pt-6' href="">
                    <InfoIco></InfoIco>
                </a>
                <a className="text-white pt-6" href="">
                    <GithubIco></GithubIco>
                </a>
            </div>
        </nav>
    )
}