export default function SearchBar() {
    return(
        <div className="flex place-content-center w-1/2 font-Inter text-2xl">
            <form action="/summoner" >
                <div className="flex w-640 h-20 rounded-bar-black">
                <input className="focus-visible:outline-none w-5/6 bg-transparent font-semibold" type={"text"} for='search' placeholder="Search for Summoner..."></input>
                <select className="focus-visible:outline-none bg-transparent font-semibold pl-6">
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                    <option value={'na'}>NA</option>
                </select>
                <button class="flex flex-1 place-content-center items-center ml-auto" type="submit" name='search'>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="h-6 pl-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                </button>
                </div>
            </form>
        </div>
                

    )
}