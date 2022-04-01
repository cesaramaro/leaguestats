import SearchIco from './icons/SearchIco.js'

/**==============================================
 * *                   INFO
 * Reusable component for searchbar form.  
 * Contained within a form and of fixed w-640 width
 * Should Follow rounded-bar color can change
 *=============================================**/

export default function SearchBar() {
    return (
        <form action="/summoner" className="font-Inter text-2xl">
            <div className="flex flex-row place-items-center w-640 h-20 rounded-bar-black">
                <input className="focus-visible:outline-none w-5/6 bg-transparent font-semibold" type={"text"} for='search' placeholder="Search for Summoner..."></input>
                <select className="focus-visible:outline-none bg-transparent font-semibold pl-6">
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                </select>
                <button className='pl-6 h-6' type="submit" name='search'>
                    <SearchIco></SearchIco>
                </button>
            </div>
        </form>
    )
}


