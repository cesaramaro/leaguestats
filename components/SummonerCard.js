import rankedIcon from "../public/images/challenger.png";
import { useSummoner } from"../hooks/helper"
import Color from "color-thief-react";
import { brighten, } from "../lib/shiftColor";
import AccentBorder from "./BorderAccent";
import Card from "./Card";

export default function SummonerCard({ user }) {
    const { summoner, isLoading, isError } = useSummoner({user})

    if (isLoading) return <div>LOADING SUMMONER CARD</div>
    if (isError) return <div>failed to load</div>

    const name = summoner.name || "x"
    const level = summoner.summonerLevel || "x"
    const icon = `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/${summoner.profileIconId}.png` || "x"
    const rank = summoner.rank || "x"
    const division = summoner.division || "x"
    const lp = summoner.lp || "x"
    const winrate = summoner.winrate || "x"
    const wins = summoner.wins || "x"
    const losses = summoner.losses || "x"

    // * creates correct string for fontSize style
    const style = {
        fontSize: { fontSize: String(fontSizeGameId) + 'px' },
        bgColor: { backgroundColor: String(props.color) + 'CC' }
    }

    // * creates path for icon in images temporary until api
    const rankedIcon = '/images/' + rank + '.png'

    return (
        <div className="font-semibold">
            {/* Profile icon, level icon, username, rank icon, rank+division, LP, winrate */}
            <Card className='flex flex-col justify-between center p-12 w-300' color={color}>
                <div name="icon-lvl" className="flex relative h-fill w-fill mb-2 justify-center">

                    <AccentBorder name="player-icon" className="flex w-150 h-150" color={color} borderRadius='99999px' borderWidth='4px'>
                        <img className="object-cover rounded-full" src={icon} alt=""></img>

                    </AccentBorder>
                    <AccentBorder name="player-level" className="absolute h-45 w-45 left-1 bottom-1" color={color} borderRadius='99999px' borderWidth='4px'>
                        <p className="flex text-center place-items-center justify-center h-full font-bold">{level}</p>
                    </AccentBorder>
                </div>
                {/* User and rank */}
                <span className="flex w-full place-content-center" id='summoner-name' style={style.fontSize}>
                    {name}
                </span>

                {/* //! Wip dont know what color to use */}
                <Color src={rankedIcon} format="hex" crossOrigin="anonymous">
                    {({ data, loading, error }) => (
                        <div className="flex flex-col mb-1 mt-2 text-2xl justify-center text-center center font-bold" style={{ color: brighten(data, 20) }}>
                            <p style={{ textShadow: '0px 2px 10px ' + data }} >{rank} {division}</p>
                            <p >{lp} LP</p>
                        </div>
                    )}

                </Color>

                {/* Rank icon */}
                <div name="ranked-icon" className="flex h-fill w-fill justify-center">
                    <img className="object-cover w-44" src={rankedIcon} alt=""></img>
                </div>

                { /* Win rate */}
                <div className="flex flex-col mb-1 text-2xl justify-center text-center text-gray-300">
                    <p>{winrate}% winrate</p>
                    <p>{wins}W / {losses}L</p>
                </div>
            </Card>
        </div >
    )
}