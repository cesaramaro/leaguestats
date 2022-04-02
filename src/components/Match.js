import test from '../images/vex-bg.jpg'
import ClockIco from './icons/Clock'

export default function Match(props) {

    const championIcon = props.champion
    const level = props.level
    const dSpell = props.dSpell
    const fSpell = props.fSpell
    const primaryRune = props.primaryRune
    const secondaryRune = props.secondaryRune
    const kills = props.kills
    const deaths = props.deaths
    const assists = props.assists
    const kda = props.kda
    const items = props.items
    const cs = props.cs
    const gold = props.gold
    const damage = props.damage
    const duration = props.duration
    const timeAgo = props.timeAgo
    const gamemode = props.gamemode
    const kp = props.kp

    return (
        <div className="">
            {/* TO-DO: Create icon components, fallback borders for when no image is found or slot is empty
                        Change colors based on Victory or Defeat, have all items/components change depending on info received
                        Summoner Spells components, Items purchased component
                        Set size (higher width)
                        Clean-up
            */}
            <div className="flex card h-150 w-700 center gap-6 text-gray-200 font-semibold">
                {/* Champion Icon and Level */}
                <div name="left-side-icons" className="h-auto w-1/6 justify-left">
                    <div name="player-icon" className="icon border-0 w-100 h-100">
                        <img className="object-cover rounded-2xl border-4 border-purple-400" src={championIcon} alt=""></img>
                        <span name="player-level" className="icon absolute -bottom-3 h-35 w-35">
                            <p className="text-center font-bold text-black">{level}</p>
                        </span>
                    </div>
                </div>

                <div className='flex w-1/6'>
                    {/* Summoner Spells */}
                    <div className="flex flex-col justify-center gap-1 w-max">
                        <span className="flex h-30 rounded-lg overflow-hidden">
                            <img className="object-cover" src={dSpell} alt=""></img>
                        </span>
                        <span className="flex h-30 rounded-lg overflow-hidden">
                            <img className="object-cover" src={fSpell} alt=""></img>
                        </span>
                    </div>

                    {/* Runes */}
                    <div className="flex flex-col justify-center pl-1 w-max">
                        <span className="flex h-20 rounded-lg overflow-hidden">
                            <img className="object-cover" src={primaryRune} alt=""></img>
                        </span>
                        <span className="flex h-20 rounded-lg overflow-hidden">
                            <img className="object-cover" src={secondaryRune} alt=""></img>
                        </span>
                    </div>
                </div>

                {/* KDA */}
                <div className="flex w-2/6 flex-col justify-center center">
                    <p className="">{gamemode}</p>
                    <p className="flex mb-1 text-2xl font-bold">{kills}/{deaths}/{assists}</p>
                    <p className="flex mb-1 text-1xl">{kda} KDA</p>
                </div>

                { /* Item set should be a component and each item should be a separate component within the parent */}
                <div className='w-2/6'>
                <div className="flex flex-col justify-center w-max">
                    <div className="flex justify-between gap-1">
                        <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items[0].item1} alt=""></img></span></div>
                        <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items[0].item2} alt=""></img></span></div>
                        <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items[0].item3} alt=""></img></span></div>
                    </div>
                    <div className="flex justify-between gap-1 pt-1 w-max">
                        <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items[0].item4} alt=""></img></span></div>
                        <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items[0].item5} alt=""></img></span></div>
                        <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items[0].item6} alt=""></img></span></div>
                    </div>
                </div>
                </div>

                <div className="flex flex-col justify-center text-xs w-1/6">
                    <p className="flex text-blue-300">{cs} CS</p>
                    <p className="flex text-yellow-300">{gold} gold</p>
                    <p className="flex text-red-400">{damage} dmg</p>
                    <p className="flex text-amber-500">{kp}% kp</p>
                </div>

                <div className="flex flex-col justify-center text-sm w-1/6 center">
                    <a className='w-40'>
                        <ClockIco />
                    </a>
                    <p className="flex">{duration}</p>
                    <p className="flex text-xs">{timeAgo}</p>
                </div>
            </div>
        </div>
    )
}