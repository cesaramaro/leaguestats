import HomeIcon from './icons/HomeIcon.js'
import InfoIcon from './icons/InfoIcon.js'
import GithubIcon from './icons/GithubIcon.js'
import SearchBar from './SearchBar.js'

/**==============================================
 * *                   INFO
 * Reusable component for navagation on narrower screen 
 * Stays fixed to the top
 * Contained withing a Header as big as screen
 * Should Follow .card color can change
 *=============================================**/


function IconNavBar() {
    return (
        <nav className="flex font-Inter font-black text-2xl card h-80 justify-between">
            < p className="text-white text-center" > nt. </p >
            <a className=' text-white w-30' href="">
                <HomeIcon />
            </a>
            <a className=' text-white w-30' href="">
                <InfoIcon />
            </a>
            <a className="text-white w-30" href="">
                <GithubIcon />
            </a>
        </nav >);
}


export default function NavBarWSearch() {
    return (

        <header className='fixed flex place-content-center w-screen p-6 gap-6 min-w-1072'>
            < div className="w-300" >
                <IconNavBar />
            </div >
            <div className='w-700'>
                <SearchBar />
            </div>
        </header >
    )
}