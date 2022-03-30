export default function SummonerCard() {
    return(
        <div className="">
            {/* Profile icon, level icon, username, rank icon, rank+division, LP, winrate */}
            <div className="flex rounded-lg p-10 bg-cover bg-gradient-to-r from-[#37008C] via-[#0F0059] to-[#00142A] shadow-lg">
                <div>
                <div name="left-side-icons" className="flex object-middle w-1/4 h-auto w-auto justify-center">
                    <div name="player-icon" className="relative rounded-full bg-purple-300 border-4 border-purple-400 flex items-center justify-center h-32 w-32">icon
                        <span name="player-level" className="absolute left-0 bottom-0 rounded-full bg-purple-200 h-10 w-10">
                            <p className="text-center pt-2">lvl</p>
                        </span>
                    </div>
                </div>
                </div>
                <div className="flex flex-col justify-center pl-5 w-3/4">
                    <h1 className="flex mb-1 text-5xl font-bold text-gray-300">username</h1>
                    <p className="flex mb-1 text-2xl font-bold text-purple-400">rank division - ### LP</p>
                </div>
                <div className="flex flex-col justify-center pl-5 w-1/4 text-gray-300">
                    <p className="flex mb-1 text-2xl font-bold">winrate: 100%</p>
                    <p className="flex mb-1 text-2xl font-bold">50W / 50L</p>
                </div>
            </div>
        </div>
    )
}