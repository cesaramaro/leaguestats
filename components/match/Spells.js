import { getMatchDetails, findSummonerParticipantID } from '../../hooks/helper'

export default function Spells({user, matchID, color}) {
    if (!user && !matchID && !color) {
        return(
            <div className='flex 1/6'>
            {/* Summoner Spells */}
            <div className="flex flex-col justify-center gap-1 w-max">
                <span className="flex h-30 rounded-lg overflow-hidden"></span>
                <span className="flex h-30 rounded-lg overflow-hidden"></span>
            </div>

            {/* Runes */}
            <div className="flex flex-col justify-center pl-1 w-max">
                <span className="flex h-20 rounded-lg overflow-hidden"></span>
                <span className="flex h-20 rounded-lg overflow-hidden"></span>
            </div>
        </div>
        )
    }
    const { match, isLoading, isError } = getMatchDetails({user, matchID})

    if (isLoading) return <div></div>
    if (isError || match === null) return <div>No match :(</div>

    const participantID = findSummonerParticipantID(match.info.participants, user)
    const player = match.info.participants[participantID]
    const primaryStyle = player.perks.styles[0].style || 'x' 
    const secondaryStyle = player.perks.styles[1].style || 'x'
    const primaryRune = player.perks.styles[0].selections[0].perk || 'x'
    const secondaryRune = player.perks.styles[1].selections[0].perk || 'x'

    const rune1 = getRuneURL(primaryStyle, primaryRune)
    const rune2 = getRuneURL(secondaryStyle, secondaryRune)

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
                            <img className="object-cover" src={rune1} alt=""></img>
                        </span>
                        <span className="flex h-20 rounded-lg overflow-hidden">
                            <img className="object-cover" src={rune2} alt=""></img>
                        </span>
                    </div>
                </div>
        </>
    )
}


function getSummonerSpellURL(summonerSpellID) {
    return `../images/spell/summoner${summonerSpellID}.png`
}

function getRuneURL(style, rune) {
    let styleName = ""
    let runeName = ""
    let imageName = ""

    switch(style) {
        case 8100:
            styleName = 'domination'
            imageName = '7200_domination'
            break;
        case 8300:
            styleName = 'inspiration'
            imageName = '7203_whimsy'
            break;
        case 8000:
            styleName = 'precision'
            imageName = '7201_precision'
            break;
        case 8400:
            styleName = 'resolve'
            imageName = '7204_resolve'
            break;
        case 8200:
            styleName = 'sorcery'
            imageName = '7202_sorcery'
            break;
        default:
            break;
    }
    return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${imageName}.png`
    //`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${styleName}/${runeName}/${runeName}.png` 
}