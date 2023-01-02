import { getSummoner } from '../../hooks/helper';
import Color from 'color-thief-react';
import { brighten } from '../../lib/shiftColor';
import AccentBorder from '../common/BorderAccent';
import Card from '../common/card';
import { fitGameId } from '../../lib/fitGameId';
import LoadingCard from './LoadingCard';
import Loading from '../common/Loading';

export default function SummonerCardTwo({ region, user, color }) {
	const { summoner, isLoading, isError } = getSummoner({ region, user });

	if (summoner === null || isError) return <div>No summoner found :(</div>;
	if (isLoading)
		return (
			<div>
				<LoadingCard color={color} />
			</div>
		);
	if (!summoner.summoner)
		return (
			<div>
				<Loading error={true} />
			</div>
		);

	const summonerInfo = summoner.summoner;
	const rankedInfo = summoner.ranked[0];
	const name = summonerInfo.name || 'Summoner not found';
	const level = summonerInfo.summonerLevel || '0';
	const icon = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${summonerInfo.profileIconId}.jpg` || 'x';
	var rank = 'Unranked';
	var division,
		lp,
		wins,
		losses,
		winrate,
		rankedIconBorder,
		rankedTinyCrest = '';

	if (rankedInfo) {
		rank = rankedInfo.tier || '0';
		division = rankedInfo.rank || '0';
		lp = rankedInfo.leaguePoints + ' LP' || '0 LP';
		wins = rankedInfo.wins + 'W /' || '0W';
		losses = rankedInfo.losses + 'L' || '0L';
		winrate =
			parseFloat((rankedInfo.wins / (rankedInfo.wins + rankedInfo.losses)) * 100)
				.toFixed(2)
				.concat('% winrate') || '0% winrate';
		let lowercaseRank = rank.toString().toLowerCase();
		rankedIconBorder = `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/wings/wings_${lowercaseRank}.png`;
	}

	// * creates correct string for fontSize style
	const fontSize = { fontSize: String(fitGameId(name)) + 'px', lineHeight: String(fitGameId(name)) + 'px' };

	//if user unranked return this card
	if (rank == 'Unranked') {
		return (
			<div className='font-semibold'>
				{/* Username, Rank and Division, LP, Ranked Border, User Icon, User Level, Win rate */}
				<Card className='flex flex-col justify-between center p-12 w-300 shadow-lg gap-4' color={color}>
					{/* Rank Border, Icon, and Level */}
					<div name='icon-lvl' className='flex relative h-fill justify-center'>
						<div className='relative'>
							<AccentBorder name='player-icon' className='flex w-150 h-150' color={color} borderRadius='99999px' borderWidth='4px'>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img className='object-cover rounded-full' src={icon} alt=''></img>
							</AccentBorder>
							<AccentBorder name='player-level' className='absolute h-45 w-45 left-0 bottom-0 z-10' color={color} borderRadius='99999px' borderWidth='4px'>
								<p className='flex text-center place-items-center justify-center h-full font-bold'>{level}</p>
							</AccentBorder>
						</div>
					</div>

					{/* User and rank */}
					<span className='flex w-full place-content-center whitespace-nowrap font-bold' id='summoner-name' style={fontSize}>
						{name}
					</span>

					<div className='flex flex-col text-2xl justify-center text-center center'>
						<p>Unranked</p>
					</div>
				</Card>
			</div>
		);
	}

	// else when ranked
	return (
		<div className='font-semibold'>
			{/* Username, Rank and Division, LP, Ranked Border, User Icon, User Level, Win rate */}
			<Card className='flex flex-col justify-between center p-12 w-300 shadow-lg gap-4' color={color}>
				{/* User and rank */}
				<span className='flex w-full place-content-center whitespace-nowrap font-bold' id='summoner-name' style={fontSize}>
					{name}
				</span>

				<div className='flex flex-col mb-1 mt-2 text-2xl justify-center text-center center'>
					<p>
						{rank} {division}
					</p>
					<p>{lp}</p>
				</div>

				{/* Rank Border, Icon, and Level */}
				<div name='icon-lvl' className='flex relative w-[20rem] justify-center'>
					<div className='absolute z-10'>
						<img className='justify-center object-cover mt-[-13.4rem] h-[29rem]' src={rankedIconBorder}></img>
					</div>
					<div className='relative'>
						<AccentBorder name='player-icon' className='flex w-[8rem]' color={color} borderRadius='99999px' borderWidth='4px'>
							<img className='object-cover rounded-full' src={icon} alt=''></img>
						</AccentBorder>
						<AccentBorder name='player-level' className='absolute h-40 w-40 left-[35%] -bottom-6 z-10' color={color} borderRadius='99999px' borderWidth='4px'>
							<p className='flex text-center place-items-center justify-center h-full  font-bold'>{level}</p>
						</AccentBorder>
					</div>
				</div>

				{/* Win rate */}
				<div className='flex flex-col mt-5 text-2xl justify-center text-center text-white'>
					<p>{winrate}</p>
					<p>
						{wins} {losses}
					</p>
				</div>
			</Card>
		</div>
	);
}
