import { getMatchDetails, findSummonerParticipantID } from '../../hooks/helper';
import AccentBorder from '../common/BorderAccent';
import { darken } from '../../lib/shiftColor';

export default function ChampionIcon({ user, matchID, color }) {
	if (!user && !matchID && !color) {
		return (
			<div name='left-side-icons' className='h-100 w-1/6 relative animate-pulse'>
				<AccentBorder className='rounded-full w-100 h-100' borderRadius='16px' borderWidth='4px'>
					<div name='champion-icn' className='h-full w-full rounded-xl'></div>
				</AccentBorder>
				<AccentBorder className='absolute left-[1.938rem] top-[5rem] h-35 w-35' borderRadius={'9999px'} borderWidth='4px'>
					<p name='player-level' className='flex text-center place-items-center justify-center h-full font-bold'></p>
				</AccentBorder>
			</div>
		);
	}

	const { match, isLoading, isError } = getMatchDetails({ user, matchID });

	if (isLoading) return <div></div>;
	if (isError || match === null) return <div>Something went wrong</div>;

	const participantID = findSummonerParticipantID(match.info.participants, user);
	const player = match.info.participants[participantID];
	const championIcon = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${player.championId}.png` || 'x';
	const level = player.champLevel || 'x';
	const style = {
		bgItems: {
			backgroundColor: darken(color, 10),
		},
		croppedImage: {
			backgroundImage: 'url(' + championIcon + ')',
			backgroundPosition: 'center',
			backgroundSize: '6.50rem',
		},
	};
	return (
		<div name='left-side-icons' className='h-100 w-1/6 relative'>
			<AccentBorder className='rounded-full w-100 h-100' borderRadius='16px' borderWidth='4px' color={color}>
				<div name='champion-icn' className='h-full w-full rounded-xl' style={style.croppedImage}></div>
			</AccentBorder>
			<AccentBorder className='absolute left-[1.938rem] top-[5rem] h-35 w-35' borderRadius={'9999px'} borderWidth='4px' color={color}>
				<p name='player-level' className='flex text-center place-items-center justify-center h-full font-bold'>
					{level}
				</p>
			</AccentBorder>
		</div>
	);
}
