import SearchBar from './SearchBar.js';
import GitHub from '../../public/icons/GithubIcon.svg';
import HomeIcon from '../../public/icons/HomeIcon.svg';
import InfoIcon from '../../public/icons/InfoIcon.svg';
import Card from './card.js';
import Link from 'next/link';

/**==============================================
 * *                   INFO
 * Reusable component for navagation on narrower screen
 * Stays fixed to the top
 * Contained withing a Header as big as screen
 * Should Follow .card color can change
 *=============================================**/

function IconNavBar(props) {
	return (
		<Card className='flex font-Inter font-black text-2xl h-80 justify-between' color={props.color}>
			<p className='text-white text-center'> nt. </p>
			<Link href='/'>
				<a className=' text-white'>
					<HomeIcon height='2rem' />
				</a>
			</Link>
			<Link href='/about'>
				<a className=' text-white'>
					<InfoIcon height='2rem' />
				</a>
			</Link>
			<Link href='https://github.com/cesaramaro/leaguestats'>
				<a className='text-white'>
					<GitHub height='2rem' />
				</a>
			</Link>
		</Card>
	);
}

export default function NavBarWSearch(props) {
	return (
		<nav className='flex place-content-center py-6 gap-6 w-1072 z-10'>
			<div className='w-300'>
				<IconNavBar color={props.color} />
			</div>
			<div className='w-700'>
				<SearchBar color={props.color} />
			</div>
		</nav>
	);
}
