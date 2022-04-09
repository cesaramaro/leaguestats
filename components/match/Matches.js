import { getMatches } from '../../hooks/helper'
import Match from './Match'
import LoadingMatches from './LoadingMatches'

export default function Matches({ user, color }) {
    if (user === null || typeof user === 'undefined') return <div>User not found</div>

    const { matches, isLoading, isError } = getMatches({user})

    if (isLoading) return <div><LoadingMatches /></div>
    if (isError || matches === null) return <div>No matches found :(</div>

    return (
        <div className="flex flex-col gap-6">
            {matches.map((match, index) => <Match key={index} user={user} matchID={match} color={color} />)}
        </div>
    )
}