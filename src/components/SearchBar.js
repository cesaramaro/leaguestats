export default function SearchBar() {
    return(
        <div className="flex items-center w-1/2">
            <form action="/summoner" className="flex w-full">
                <input className="focus-visible:outline-none h-10 border-2 border-blue-400 border-r-0 w-5/6" type={"search"} for='search' placeholder="Search Summoner"></input>
                <select className="focus-visible:outline-none h-10 border-2 border-blue-400 border-x-0">
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                </select>
                <button class="flex flex-1 place-content-center items-center h-10 border-2 border-blue-400 border-l-0 ml-auto" type="submit" name='search'>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                </button>
            </form>
                {/* 
                <input className="border-2 border-purple-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search for a summoner"></input>
                <button className="bg-white hover:bg-purple-400 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-pink-200 rounded">Search</button>
                */}
        </div>
                

    )
}