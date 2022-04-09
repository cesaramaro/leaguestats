import { getMatchDetails, findSummonerParticipantID } from '../../hooks/helper'

export default function Spells({user, matchID, color}) {
    if (!user && !matchID && !color) {
        return(
            <div className='flex 1/6'></div>
        )
    }
    const { match, isLoading, isError } = getMatchDetails({user, matchID})

    if (isLoading) return <div></div>
    if (isError || match === null) return <div>No match :(</div>

    const participantID = findSummonerParticipantID(match.info.participants, user)
    const player = match.info.participants[participantID]
    const primaryRune = 'x'
    const secondaryRune = 'x'

    const dSpell = getSummonerSpellURL(player.summoner1Id) || 'x'
    const fSpell = getSummonerSpellURL(player.summoner2Id) || 'x'

    return (
        <>
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
        </>
    )
}


function getSummonerSpellURL(summonerSpellID) {
    return `../images/spell/summoner${summonerSpellID}.png`
}