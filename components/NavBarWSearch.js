
import SearchBar from './SearchBar.js'
import GitHub from '../public/icons/GithubIcon.svg'
import HomeIcon from '../public/icons/HomeIcon.svg'
import InfoIcon from '../public/icons/InfoIcon.svg'
import Card from './Card.js'

/**==============================================
 * *                   INFO
 * Reusable component for navagation on narrower screen 
 * Stays fixed to the top
 * Contained withing a Header as big as screen
 * Should Follow .card color can change
 *=============================================**/


function IconNavBar(props) {

    return (
        <Card className="flex font-Inter font-black text-2xl h-80 justify-between" color={props.color}>
            < p className="text-white text-center" > nt. </p >
            <a className=' text-white' href="/">
                <HomeIcon height='2rem' />
            </a>
            <a className=' text-white' href="/about">
                <InfoIcon height='2rem' />
            </a>
            <a className="text-white" href="https://github.com/cesaramaro/leaguestats">
                <GitHub height='2rem' />
            </a>
        </Card>
    );
}


export default function NavBarWSearch(props) {

    return (
        <header className='fixed flex place-content-center w-screen py-6 gap-6 min-w-1072'>
            <div className="w-300" >
                <IconNavBar color={props.color} />
            </div >
            <div className='w-700'>
                <SearchBar color={props.color} />
            </div>
        </header >
    )
}