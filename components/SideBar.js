import Link from 'next/link'
import GitHub from '../public/icons/GithubIcon.svg'
import HomeIcon from '../public/icons/HomeIcon.svg'
import InfoIcon from '../public/icons/InfoIcon.svg'

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
            <div className="flex flex-col place-content-center card w-80 gap-6">
                <p className="text-white text-center"> nt. </p>

                <Link href={'/'}>
                    <a className=' text-white'>
                        <HomeIcon width='2rem' />
                    </a>
                </Link>

                <Link href={'/about'}>
                    <a className=' text-white' href="">
                        <InfoIcon width='2rem' />
                    </a>
                </Link>

                <a className="text-white" href="https://github.com/cesaramaro/leaguestats">
                    <GitHub width='2rem' />
                </a>
            </div>
        </nav>
    )
}