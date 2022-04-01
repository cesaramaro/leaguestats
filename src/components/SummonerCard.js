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
        <div className="rounded-lg w-fill">
            {/* Profile icon, level icon, username, rank icon, rank+division, LP, winrate */}
            <div className="flex-col card items-stretch">
                <div name="icon-lvl" className="flex h-fill w-fill justify-center">
                    <div name="player-icon" className="icon h-32 w-32">
                        <img className="object-cover rounded-full z-1" src={icon} alt=""></img>
                        <span name="player-level" className="icon absolute left-0 bottom-0 h-10 w-10">
                            <p className="text-center font-bold text-purple-800">{level}</p>
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
                <div className="flex flex-col mb-1 text-2xl font-bold justify-center text-center text-gray-300">
                    <p>{winrate}% Winrate</p>
                    <p>{wins}W / {losses}L</p>
                </div>
            </div>
        </div>
    )
}