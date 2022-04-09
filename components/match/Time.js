import ClockIcon from '../../public/icons/ClockIcon.svg'
import { getMatchDetails, findSummonerParticipantID } from '../../hooks/helper'

export default function Time({user, matchID, color}) {
    const { match, isLoading, isError } = getMatchDetails({user, matchID})
    if (isLoading) return <div></div>
    if (isError || match === null) return <div>Something went wrong</div>

    const participantID = findSummonerParticipantID(match.info.participants, user)
    const player = match.info.participants[participantID]
    let tempDuration = ((match.info.gameDuration / 60).toFixed(2)).split(".")
    const mins = tempDuration[0]
    const secs = tempDuration[1]
    const duration = mins + 'm ' + secs + 's' || 'x'
    const timeAgo = parseInt((Date.now() - match.info.gameEndTimestamp) / 86400000) + ' days ago' || '0'

    return (
        <div className="flex flex-col place-items-center text-sm w-1/6 gap-1">
        <div className='w-30'>
            <ClockIcon height='100%' />
        </div>
        <p className="flex">{duration}</p>
        <p className="flex text-xs">{timeAgo}</p>
    </div>
    )
}