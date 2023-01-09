import { getMatches } from '../../hooks/helper';
import Match from './Match';
import Error from './Error';

export default function Matches({ user, color }) {
	if (user === null || typeof user === 'undefined') return <div>User not found</div>;

	const { matches, isLoading, isError } = getMatches({ user });

	if (isLoading) return <div></div>;
	if (isError || matches === null || !matches || !matches.map)
		return (
			<div>
				<Error />
			</div>
		);

	let matchList = matches.map((match) => <Match key={match} user={user} matchID={match} color={color} />);

	return <div className='flex flex-col gap-6'>{matchList}</div>;
}
