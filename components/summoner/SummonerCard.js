import { getSummoner } from"../../hooks/helper"
import Color from "color-thief-react";
import { brighten, } from "../../lib/shiftColor";
import AccentBorder from "../common/BorderAccent";
import Card from "../common/card";
import { fitGameId } from '../../lib/fitGameId';
import LoadingCard from "./LoadingCard";

export default function SummonerCard({ region, user, color }) {
    const { summoner, isLoading, isError } = getSummoner({region, user})

    if (summoner === null || isError) return <div>No summoner found :(</div>
    if (isLoading) return <div><LoadingCard color={color}/></div>
    if(!summoner.summoner) return <div><Error color={color}/></div>

    const summonerInfo = summoner.summoner
    const rankedInfo = summoner.ranked[0]
    const name = summonerInfo.name || "Summoner not found"
    const level = summonerInfo.summonerLevel || "0"
    const icon = `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/${summonerInfo.profileIconId}.png` || "x"
    var rank = "Unranked"
    var division, lp, wins, losses, winrate, rankedIconBorder, rankedTinyCrest = ""

    if (rankedInfo) {
        rank = rankedInfo.tier || "0"
        division = rankedInfo.rank || "0"
        lp = rankedInfo.leaguePoints + " LP" || "0 LP"
        wins = rankedInfo.wins + "W /" || "0W"
        losses = rankedInfo.losses + "L" || "0L"
        winrate = parseFloat(((rankedInfo.wins / (rankedInfo.wins + rankedInfo.losses)) * 100)).toFixed(2).concat("% winrate") || "0% winrate"
        let lowercaseRank = rank.toString().toLowerCase();
        rankedIconBorder = `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/wings/wings_${lowercaseRank}.png`
    }

    // * creates correct string for fontSize style
    const style = {
        fontSize: { fontSize: String(fitGameId(name)) + 'px' },
        bgColor: { backgroundColor: String({ color }) + 'CC' }
    }

    // * creates path for icon in images temporary until api
    const rankedIcon = '/images/rank/' + rank + '.png'

    return (
        <div className="font-semibold">
            {/* Profile icon, level icon, username, rank icon, rank+division, LP, winrate */}
            <Card className='flex flex-col justify-between center p-12 w-300 shadow-lg' color={color}>
                <div name="icon-lvl" className="flex relative pt-12 h-fill w-[20rem] mb-2 justify-center">
                    <div className="absolute z-1">
                        <img className="justify-center object-cover mt-[-13.5rem] h-[30rem]" src={rankedIconBorder}></img>
                    </div>
                    <div className="relative">
                    <AccentBorder name="player-icon" className="flex w-150 h-150" color={color} borderRadius='99999px' borderWidth='4px'>
                        <span><img className="object-cover rounded-full" src={icon} alt=""></img></span> 
                    </AccentBorder>
                    <AccentBorder name="player-level" className="absolute h-45 w-45 left-2 bottom-1 z-10" color={color} borderRadius='99999px' borderWidth='4px'>
                        <p className="flex text-center place-items-center justify-center h-full font-bold">{level}</p>
                    </AccentBorder>
                    </div>
                </div>
                {/* User and rank */}
                <span className="flex w-full place-content-center whitespace-nowrap" id='summoner-name' style={style.fontSize}>
                    {name}
                </span>

                {/* //! Wip dont know what color to use */}
                <Color src={rankedIcon} format="hex" crossOrigin="anonymous">
                    {({ data, loading, error }) => (
                        <div className="flex flex-col mb-1 mt-2 text-2xl justify-center text-center center font-bold" style={{ color: brighten(data, 20) }}>
                            <p style={{ textShadow: '0px 2px 10px ' + data }} >{rank} {division}</p>
                            <p >{lp}</p>
                        </div>
                    )}

                </Color>

                {/* Rank icon */}
                <div name="ranked-icon" className="flex w-fill justify-center pb-3">
                    <img className="object-cover w-44" src={rankedIcon} alt=""></img>
                </div>

                { /* Win rate */}
                <div className="flex flex-col mb-1 text-2xl justify-center text-center text-gray-300">
                    <p>{winrate}</p>
                    <p>{wins} {losses}</p>
                </div>
            </Card>
        </div >
    )
}