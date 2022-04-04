import Script from "next/script";
import rankedIcon from "../public/images/challenger.png";
import Card from "./card";

export default function SummonerCard(props) {

    {/* Testing purposes */ }
    const name = props.name
    const level = props.level
    const icon = props.icon
    const rank = props.rank
    const division = props.division
    const lp = props.lp
    const winrate = props.winrate
    const wins = props.wins
    const losses = props.losses
    const fontSizeGameId = props.fontSize
    const color = props.color

    // * creates correct string for fontSize style
    const style = {
        fontSize: { fontSize: String(fontSizeGameId) + 'px' },
        bgColor: { backgroundColor: String(props.color) + 'CC' }
    }

    return (
        <div className="font-semibold">
            {/* Profile icon, level icon, username, rank icon, rank+division, LP, winrate */}
            <Card className='flex flex-col justify-between center p-12 w-300' color={color}>
                <div name="icon-lvl" className="flex h-fill w-fill mb-2 justify-center">
                    <div name="player-icon" className="icon w-150">
                        <img className="object-cover rounded-full" src={icon} alt=""></img>
                        <span name="player-level" className="icon absolute -bottom-1 -left-1 h-45 w-45">
                            <p className="text-center text-purple-800">{level}</p>
                        </span>
                    </div>
                </div>
                {/* User and rank */}
                <span className="flex w-full place-content-center" id='summoner-name' style={style.fontSize}>
                    {name}
                </span>

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
            </Card>
        </div >
    )
}