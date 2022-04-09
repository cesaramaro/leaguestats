import MinionIcon from '../../public/icons/MinionIcon.svg'
import GoldIcon from '../../public/icons/GoldIcon.svg'
import DamageIcon from '../../public/icons/DamageIcon.svg'
import KpIcon from '../../public/icons/KpIcon.svg'
import { getMatchDetails, findSummonerParticipantID } from '../../hooks/helper'

export default function Stats({user, matchID, color}) {
    const { match, isLoading, isError } = getMatchDetails({user, matchID})
    if (isLoading) return <div></div>
    if (isError || match === null) return <div>Something went wrong</div>

    const participantID = findSummonerParticipantID(match.info.participants, user)
    const player = match.info.participants[participantID]
    const cs = player.totalMinionsKilled || '0'
    const gold = player.goldEarned || '0'
    const damageDealt = player.totalDamageDealt
    const damage = (damageDealt > 1000 ? (damageDealt / 1000).toFixed(1) + 'k' : damageDealt) || '0'
    const kp = 'x'

    return (
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
    )
}