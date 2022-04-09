import { getMatchDetails, findSummonerParticipantID } from '../../hooks/helper'

export default function KDA({user, matchID, color}) {
    if (!user && !matchID && !color) {
        return(
            <div className="flex w-2/6 flex-col justify-center center">
            <p className=""></p>
            <p className="flex mb-1 text-2xl font-bold"> </p>
            <p className="flex mb-1 text-1xl"></p>
        </div>
        )
    }
    const { match, isLoading, isError } = getMatchDetails({user, matchID})
    if (isLoading) return <div></div>
    if (isError || match === null) return <div>No matches found :(</div>

    const participantID = findSummonerParticipantID(match.info.participants, user)
    const player = match.info.participants[participantID]
    const gamemode = match.info.gameMode || 'x'
    const kills = player.kills || '0'
    const deaths = player.deaths || '0'
    const assists = player.assists || '0'
    const kda = parseFloat((kills + assists / 8)).toFixed(1) || '0'

    return (
        <div className="flex w-2/6 flex-col justify-center center">
            <p className="">{gamemode}</p>
            <p className="flex mb-1 text-2xl font-bold">{kills}/{deaths}/{assists}</p>
            <p className="flex mb-1 text-1xl">{kda} KDA</p>
        </div>
    )
}