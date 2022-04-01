import HomeIco from './icons/HomeIcon.js'
import InfoIco from './icons/InfoIcon.js'
import GithubIco from './icons/GithubIcon.js'
import SearchBar from './SearchBar.js'

/**==============================================
 * *                   INFO
 * Reusable component for navagation on narrower screen 
 * Stays fixed to the top
 * Contained withing a Header as big as screen
 * Should Follow rounded-bar color can change
 *=============================================**/


function IconNavBar() {
    return (
        <nav className="flex font-Inter font-black text-2xl gap-6 rounded-bar-black h-80">
            < p className="text-white text-center" > nt. </p >
            <a className=' text-white w-30' href="">
                <HomeIco></HomeIco>
            </a>
            <a className=' text-white w-30' href="">
                <InfoIco></InfoIco>
            </a>
            <a className="text-white w-30" href="">
                <GithubIco></GithubIco>
            </a>
        </nav >);
}


export default function NavBarWSearch() {
    return (

        <header className='fixed flex w-screen p-6 gap-6'>
            < div className="flex" >
                <IconNavBar></IconNavBar>
            </div >
            <div className=' mx-auto'>
                <SearchBar></SearchBar>
            </div>
        </header >
    )
}