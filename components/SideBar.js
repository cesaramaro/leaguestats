import HomeIcon from './icons/HomeIcon.js'
import InfoIcon from './icons/InfoIcon.js'
import GithubIcon from './icons/GithubIcon.js'

/**==============================================
 * *                   INFO
 * Reusable component for navagation sidebar  
 * Stays fixed to the top left corner and grows down.
 * Contained withing a nav and with fixed w-20 width
 * Should Follow .card color can change
 *=============================================**/

export default function SideBar() {
    return (

        <nav className="fixed p-6 font-Inter font-semibold text-2xl">
            <div className="flex flex-col place-content-center card w-80">
                <p className="text-white text-center"> nt. </p>
                <a className=' text-white pt-6' href="">
                    <HomeIcon />
                </a>
                <a className=' text-white pt-6' href="">
                    <InfoIcon />
                </a>
                <a className="text-white pt-6" href="">
                    <GithubIcon />
                </a>
            </div>
        </nav>
    )
}