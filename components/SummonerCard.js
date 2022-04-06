import rankedIcon from "../public/images/challenger.png";
import useSWR from 'swr'
import { useSummoner } from"../hooks/helper"

export default function SummonerCard({ user }) {
    const { summoner, isLoading, isError } = useSummoner({user})

    if (isLoading) return <div>LOADING SUMMONER CARD</div>
    if (isError) return <div>failed to load</div>

    {/* Testing purposes */ }
    const name = summoner.name || "x"
    const level = summoner.summonerLevel || "x"
    const icon = `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/${summoner.profileIconId}.png` || "x"
    const rank = summoner.rank || "x"
    const division = summoner.division || "x"
    const lp = summoner.lp || "x"
    const winrate = summoner.winrate || "x"
    const wins = summoner.wins || "x"
    const losses = summoner.losses || "x"

    return (
        <div className="font-semibold">
            {/* Profile icon, level icon, username, rank icon, rank+division, LP, winrate */}
            <div className="card flex flex-col justify-between center p-12 w-300">
                <div name="icon-lvl" className="flex h-fill w-fill mb-2 justify-center">
                    <div name="player-icon" className="icon w-150">
                        <img className="object-cover rounded-full" src={icon} alt=""></img>
                        <span name="player-level" className="icon absolute -bottom-1 -left-1 h-45 w-45">
                            <p className="text-center text-purple-800">{level}</p>
                        </span>
                    </div>
                </div>
                {/* User and rank */}
                <div className="font-bold center">{name}</div>

                {/* ​‌‍‌FITTY DONT WORK HERE​ */}

                {/* <ReactFitty maxSize={80} className="font-bold center">{name}</ReactFitty> */}
                <div className="flex flex-col mb-1 mt-2 text-2xl justify-center text-center center">
                    <p className="text-purple-400">{rank} {division}</p>
                    <p className="text-purple-400">{lp} LP</p>
                </div>
                {/* Rank icon */}
                <div name="ranked-icon" className="flex h-fill w-fill justify-center">
                    <img className="object-cover w-44" src={rankedIcon} alt=""></img>
                </div>

                { /* Win rate */}
                <div className="flex flex-col mb-1 text-2xl justify-center text-center text-gray-300">
                    <p>{winrate}% winrate</p>
                    <p>{wins}W / {losses}L</p>
                </div>
            </div>
        </div>
    )
}