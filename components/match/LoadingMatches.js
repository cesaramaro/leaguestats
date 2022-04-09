import LoadingMatch from './LoadingMatch'

export default function LoadingMatches() {

    let matches = [];
    for (let i = 0; i < 6; i++) matches.push(<LoadingMatch />);

    return (
        <div className="flex flex-col gap-6">
            {matches}
        </div>
    )
}