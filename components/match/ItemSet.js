import { getMatchDetails, findSummonerParticipantID } from "../../hooks/helper"
import Item from "./Item"

export default function ItemSet({user, matchID}) {
    if(!user && !matchID) {
        return(
            <div className="animate-pulse">
            <div className="flex justify-between gap-1">
                <Item />
                <Item />
                <Item />
            </div>
            <div className="flex justify-between gap-1 pt-1 w-max">
                <Item />
                <Item />
                <Item />
            </div>
        </div>
        )
    }
    const { match, isLoading, isError } = getMatchDetails({user, matchID})

    if (isLoading) return <div></div>
    if (isError || match === null) return <div>Something went wrong</div>

    const participantID = findSummonerParticipantID(match.info.participants, user)
    const player = match.info.participants[participantID]

    return (
        <div>
            <div className="flex justify-between gap-1">
                <Item item={player.item0}/>
                <Item item={player.item1}/>
                <Item item={player.item2}/>
            </div>
            <div className="flex justify-between gap-1 pt-1 w-max">
                <Item item={player.item3}/>
                <Item item={player.item4}/>
                <Item item={player.item5}/>
            </div>
        </div>
    )
}