
import SearchBar from './SearchBar.js'
import GitHub from '../public/icons/GithubIcon.svg'
import HomeIcon from '../public/icons/HomeIcon.svg'
import InfoIcon from '../public/icons/InfoIcon.svg'

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
            <a className=' text-white' href="">
                <HomeIcon height='2rem' />
            </a>
            <a className=' text-white' href="">
                <InfoIcon height='2rem' />
            </a>
            <a className="text-white" href="">
                <GitHub height='2rem' />
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