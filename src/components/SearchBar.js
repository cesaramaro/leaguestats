export default function SearchBar() {
    return(
        <div className="">
            <div>
                <input className="border-2 border-purple-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search for a summoner"></input>
                <button className="bg-white hover:bg-purple-400 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-pink-200 rounded">Search</button>
            </div>
        </div>
    )
}