import Link from 'next/link'
import SearchIcon from '../public/icons/SearchIcon.svg'
import Router from 'next/router'

/**==============================================
 * *                   INFO
 * Reusable component for searchbar form.  
 * Contained within a form and of fixed w-640 width
 * Should Follow .card color can change
 *=============================================**/
const redirectToSummoner = async (event) => {
    event.preventDefault();
    Router.push(`/region/${event.target.summoner.value}`)
}

export default function SearchBar() {
    return (
        <form onSubmit={redirectToSummoner} className="flex font-Inter text-2xl justify-center">
            <div className="flex flex-row place-items-center w-full h-80 card gap-6">
                <input className="focus-visible:outline-none w-5/6 bg-transparent font-semibold" id="summoner" name="summoner" type={"text"} htmlFor='search' placeholder="Search for Summoner..." required></input>
                <select className="focus-visible:outline-none bg-transparent font-semibold">
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                </select>
                <button className='h-6' type="submit" name='search'>
                    <SearchIcon height='100%' />
                </button>
            </div>
        </form>
    )
}


