import Link from 'next/link'
import SearchIcon from '../public/icons/SearchIcon.svg'
import Card from './card'

/**==============================================
 * *                   INFO
 * Reusable component for searchbar form.  
 * Contained within a form and of fixed w-640 width
 * Should Follow .card color can change
 *=============================================**/

export default function SearchBar(props) {

    return (
        <form action="/summoner" className="flex font-Inter text-2xl justify-center">

            <Card className="flex flex-row place-items-center w-full h-80 gap-6" color={props.color}>
                <input className="focus-visible:outline-none w-5/6 bg-transparent font-semibold" type={"text"} htmlFor='search' placeholder="Search for Summoner..."></input>
                <select className="focus-visible:outline-none bg-transparent font-semibold">
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                </select>
                <Link href='/region/Summoner'>
                    <button className='h-6' type="submit" name='search'>
                        <SearchIcon height='100%' />
                    </button>
                </Link>
            </Card>
        </form>
    )
}


