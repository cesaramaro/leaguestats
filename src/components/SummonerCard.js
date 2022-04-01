import rankedIcon from "../images/challenger.png";

export default function SummonerCard(props) {

    {/* Testing purposes */}
    const name = props.name
    const level = props.level
    const icon = props.icon
    const rank = props.rank
    const division = props.division
    const lp = props.lp
    const winrate = props.winrate
    const wins = props.wins
    const losses = props.losses
    
    return(
        <div className="flex rounded-lg ">
            {/* Profile icon, level icon, username, rank icon, rank+division, LP, winrate */}
            <div className="flex flex-col h-max rounded-lg py-10 px-12 bg-cover bg-gradient-to-r from-[#37008C] via-[#0F0059] to-[#00142A] shadow-lg">
                <div name="icon-lvl" className="flex h-fill w-fill justify-center">
                    <div name="player-icon" className="relative rounded-full bg-purple-300 border-4 border-purple-400 flex items-center justify-center h-32 w-32">
                        <img className="object-cover rounded-full z-1" src={icon} alt=""></img>
                        <span name="player-level" className="absolute left-0 bottom-0 border-2 border-purple-400 rounded-full bg-purple-200 h-10 w-10">
                            <p className="text-center pt-1.5 font-bold text-purple-800">{level}</p>
                        </span>
                    </div>
                </div>
                {/* User and rank */}
                <div className="flex flex-col">
                    <h1 className="flex mb-1 text-5xl font-bold text-gray-300 justify-center">{name}</h1>
                    <p className="flex mb-1 text-2xl font-bold text-purple-400 justify-center">{rank} {division} - {lp} LP</p>
                </div>
                {/* Rank icon */ }
                <div name="ranked-icon" className="flex h-fill w-fill justify-center">
                    <img className="object-cover w-44" src={rankedIcon} alt=""></img>
                </div>

                { /* Win rate */ }
                <p className="flex mb-1 text-2xl font-bold justify-center text-gray-300">{winrate}% Winrate</p>
                <p className="flex mb-1 text-2xl font-bold justify-center text-gray-300">{wins}W / {losses}L</p>
            </div>
        </div>
    )
}