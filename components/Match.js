import MinionIcon from '../public/icons/MinionIcon.svg'
import GoldIcon from '../public/icons/GoldIcon.svg'
import DamageIcon from '../public/icons/DamageIcon.svg'
import KpIcon from '../public/icons/KpIcon.svg'
import ClockIcon from '../public/icons/ClockIcon.svg'
import Card from './Card'
import AccentBorder from './BorderAccent'

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
    const color = props.color

    return (
        <div className="">
            {/* TO-DO: Create icon components, fallback borders for when no image is found or slot is empty
                        Change colors based on Victory or Defeat, have all items/components change depending on info received
                        Summoner Spells components, Items purchased component
                        Set size (higher width)
                        Clean-up
            */}

            <Card className="flex h-150 w-700 center gap-4 text-gray-200 font-semibold" color={color}>
                {/* Champion Icon and Level */}
                <div name="left-side-icons" className="h-auto w-1/6 relative">
                    <AccentBorder name="player-icon" className="relative rounded-full flex items-center justify-center w-100 h-100" borderRadius='16px' borderWidth='4px' color={color}>
                        <img className="rounded-[12px]" src={championIcon} alt=""></img>

                    </AccentBorder>
                    <AccentBorder name="player-level" className="absolute left-[1.938rem] top-[5rem] h-35 w-35" borderRadius={'9999px'} borderWidth='4px' color={color}>
                        <p className="flex text-center place-items-center justify-center h-full font-bold">{level}</p>
                    </AccentBorder>
                </div>

                <div className='flex 1/6'>
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
                <div className=' center'>
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
                    <p className="flex text-blue-300">
                        <span className='h-3 center pr-1'> <MinionIcon height='100%' /> </span>
                        {cs} CS
                    </p>
                    <p className="flex text-yellow-300">
                        <span className='h-3 center pr-1'> <GoldIcon height='100%' /> </span>
                        {gold} gold
                    </p>
                    <p className="flex text-red-400">
                        <span className='h-3 center pr-1'> <DamageIcon height='100%' /> </span>
                        {damage} dmg
                    </p>
                    <p className="flex text-amber-500">
                        <span className='h-3 center pr-1'> <KpIcon height='100%' /> </span>
                        {kp}% kp
                    </p>
                </div>

                <div className="flex flex-col place-items-center text-sm w-1/6 gap-1">
                    <div className='w-30'>
                        <ClockIcon height='100%' />
                    </div>
                    <p className="flex">{duration}</p>
                    <p className="flex text-xs">{timeAgo}</p>
                </div>
            </Card >
        </div >
    )
}