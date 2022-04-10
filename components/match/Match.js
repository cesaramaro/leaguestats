import { getMatchDetails, findSummonerParticipantID } from '../../hooks/helper'
import Card from '../common/card'
import ItemSet from './ItemSet'
import ChampionIcon from './ChampionIcon'
import Spells from './Spells'
import KDA from './KDA'
import Stats from './Stats'
import Time from './Time'
import LoadingMatch from './LoadingMatch'

export default function Match({ user, matchID, color }) {
    const { match, isLoading, isError } = getMatchDetails({ user, matchID })

    if (isLoading) return <div><LoadingMatch /></div>
    if (isError || match === null) return <div>No match :(</div>

    const participantID = findSummonerParticipantID(match.info.participants, user)
    const player = match.info.participants[participantID]
    const outcome = (player.win ? 'victory' : 'defeat')

    return (
        <Card className="flex h-150 w-700 center gap-4 text-gray-200 font-semibold shadow-lg hover:shadow-xl" color={color} outcome={outcome}>
            {/* Champion Icon and Level */}
            <ChampionIcon user={user} matchID={matchID} color={color} />

            {/* Summoner Spells and Runes */}
            <Spells user={user} matchID={matchID} color={color} />

            {/* KDA */}
            <KDA user={user} matchID={matchID} color={color} />

            { /* Item set should be a component and each item should be a separate component within the parent */}
            <ItemSet user={user} matchID={matchID} color={color} />

            {/* Stats */}
            <Stats user={user} matchID={matchID} color={color} />

            {/* Game duration and time ago */}
            <Time user={user} matchID={matchID} color={color} />
        </Card>
    )
}