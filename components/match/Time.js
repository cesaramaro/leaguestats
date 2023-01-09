import ClockIcon from '../../public/icons/ClockIcon.svg';
import { getMatchDetails, findSummonerParticipantID } from '../../hooks/helper';

export default function Time({ user, matchID, color }) {
	const { match, isLoading, isError } = getMatchDetails({ user, matchID });
	if (isLoading) return <div></div>;
	if (isError || match === null) return <div>Something went wrong</div>;

	const participantID = findSummonerParticipantID(match.info.participants, user);
	const player = match.info.participants[participantID];
	let tempDuration = (match.info.gameDuration / 60).toFixed(2).split('.');
	const mins = tempDuration[0];
	const secs = tempDuration[1];
	const duration = mins + 'm ' + secs + 's' || 'x';
	const timeAgo = getTimeAgo(match.info.gameEndTimestamp) || '0';

	return (
		<div className='flex flex-col place-items-center text-sm w-1/6 gap-1'>
			<div className='w-30'>
				<ClockIcon height='100%' />
			</div>
			<p className='flex'>{duration}</p>
			<p className='flex text-xs'>{timeAgo}</p>
		</div>
	);
}

function getTimeAgo(gameEnd) {
	let timems = Date.now() - gameEnd;
	const minutes = Math.floor((timems / 1000 / 60) % 60);
	const hours = Math.floor(timems / 1000 / 60 / 60);

	let readableTime = '';
	if (hours >= 24) {
		let tempHours = parseInt(hours / 24);
		readableTime = tempHours + (tempHours > 1 ? ' days' : ' day') + ' ago';
	} else if (hours == 0) {
		readableTime = minutes + ' mins ago';
	} else {
		readableTime = (minutes > 30 ? hours + 1 : hours) + (hours > 1 || minutes > 30 ? ' hours' : ' hour') + ' ago';
	}
	return readableTime;
}
