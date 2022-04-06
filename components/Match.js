import MinionIcon from '../public/icons/MinionIcon.svg'
import GoldIcon from '../public/icons/GoldIcon.svg'
import DamageIcon from '../public/icons/DamageIcon.svg'
import KpIcon from '../public/icons/KpIcon.svg'
import ClockIcon from '../public/icons/ClockIcon.svg'
import { useMatch } from '../hooks/helper'
import Card from './Card'
import AccentBorder from './BorderAccent'
import Image from 'next/image'

export default function Match({ user, matchID, color }) {
    const { match, isLoading, isError } = useMatch({ user, matchID })
    if (isLoading) return <div>LOADING MATCH</div>
    if (isError) return <div>failed to load</div>

    const participantID = findSummonerParticipantID(match.info.participants, user)
    const player = match.info.participants[participantID]
    const championIcon = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${player.championId}.png` || 'x'
    const level = player.champLevel || 'x'
    const dSpell = getSummonerSpellURL(player.summoner1Id) || 'x'
    const fSpell = getSummonerSpellURL(player.summoner2Id) || 'x'
    const primaryRune = 'x'
    const secondaryRune = 'x'
    const kills = player.kills || '0'
    const deaths = player.deaths || '0'
    const assists = player.assists || '0'
    const kda = parseFloat((kills + assists / 8)).toFixed(1) || '0'
    const item_0 = getIconURL(player.item0) || 'x'
    const item_1 = getIconURL(player.item1) || 'x'
    const item_2 = getIconURL(player.item2) || 'x'
    const item_3 = getIconURL(player.item3) || 'x'
    const item_4 = getIconURL(player.item4) || 'x'
    const item_5 = getIconURL(player.item5) || 'x'
    const item_6 = getIconURL(player.item6) || 'x'
    const cs = player.totalMinionsKilled || '0'
    const gold = player.goldEarned || '0'
    const damageDealt = player.totalDamageDealt
    const damage = (damageDealt > 1000 ? (damageDealt / 1000).toFixed(1) + 'k' : damageDealt) || '0'
    let tempDuration = ((match.info.gameDuration / 60).toFixed(2)).split(".")
    const mins = tempDuration[0]
    const secs = tempDuration[1]
    const duration = mins + 'm ' + secs + 's' || 'x'
    const timeAgo = parseInt((Date.now() - match.info.gameEndTimestamp) / 86400000) + ' days ago' || '0'
    const gamemode = match.info.gameMode || 'x'
    const kp = 'x'

    // console.log(match)

    //* created to place image as background of div and crop ugly dark borders
    const croppedImage = {
        backgroundImage: 'url(' + championIcon + ')',
        backgroundPosition: 'center',
        backgroundSize: '6.50rem'
    }

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

                <div name="left-side-icons" className="h-100 w-1/6 relative">
                    <AccentBorder className="rounded-full w-100 h-100" borderRadius='16px' borderWidth='4px' color={color}>
                        <div name="champion-icn" className='h-full w-full rounded-xl' style={croppedImage} ></div>
                    </AccentBorder>
                    <AccentBorder className="absolute left-[1.938rem] top-[5rem] h-35 w-35" borderRadius={'9999px'} borderWidth='4px' color={color}>
                        <p name="player-level" className="flex text-center place-items-center justify-center h-full font-bold">{level}</p>
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
                            <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={item_0} alt=""></img></span></div>
                            <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={item_1} alt=""></img></span></div>
                            <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={item_2} alt=""></img></span></div>
                        </div>
                        <div className="flex justify-between gap-1 pt-1 w-max">
                            <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={item_3} alt=""></img></span></div>
                            <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={item_4} alt=""></img></span></div>
                            <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={item_5} alt=""></img></span></div>
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

function findSummonerParticipantID(participants, name) {
    for (let i = 0; i < 10; i++) {
        if (participants[i].summonerName === name) return i;
    }
}

function getIconURL(iconID) {
    if (iconID === 0) return;
    return `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${iconID}.png`
}

function getSummonerSpellURL(summonerSpellID) {
    return `../images/spell/summoner${summonerSpellID}.png`
}

function getSummonerSpellName(summonerSpellID) {

}