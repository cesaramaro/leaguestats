import { getMatchDetails, findSummonerParticipantID } from '../../hooks/helper';
import { darken } from '../../lib/shiftColor';
import Item from './Item';

export default function ItemSet({ user, matchID, color }) {
	if (!user && !matchID) {
		return (
			<div className='animate-pulse'>
				<div className='flex justify-between gap-1'>
					<Item />
					<Item />
					<Item />
				</div>
				<div className='flex justify-between gap-1 pt-1 w-max'>
					<Item />
					<Item />
					<Item />
				</div>
			</div>
		);
	}
	const { match, isLoading, isError } = getMatchDetails({ user, matchID });

	if (isLoading) return <div></div>;
	if (isError || match === null) return <div>Something went wrong</div>;

	const participantID = findSummonerParticipantID(match.info.participants, user);
	const player = match.info.participants[participantID];

	//INFO: creates style ONCE for all items gives background color accoridng to background image
	const colorStyle = { backgroundColor: darken(color, 10) };

	return (
		<div>
			<div className='flex justify-between gap-1'>
				<Item item={player.item0} color={colorStyle} />
				<Item item={player.item1} color={colorStyle} />
				<Item item={player.item2} color={colorStyle} />
			</div>
			<div className='flex justify-between gap-1 pt-1 w-max'>
				<Item item={player.item3} color={colorStyle} />
				<Item item={player.item4} color={colorStyle} />
				<Item item={player.item5} color={colorStyle} />
			</div>
		</div>
	);
}
