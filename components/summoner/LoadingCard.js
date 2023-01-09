import { useSummoner } from '../../hooks/helper';
import Color from 'color-thief-react';
import { brighten } from '../../lib/shiftColor';
import AccentBorder from '../common/BorderAccent';
import Card from '../common/card';
import { fitGameId } from '../../lib/fitGameId';

export default function LoadingCard() {
	return (
		<div className='font-semibold'>
			{/* Profile icon, level icon, username, rank icon, rank+division, LP, winrate */}
			<Card className='flex flex-col justify-between center p-12 w-300 animate-pulse'>
				<div name='icon-lvl' className='flex relative h-fill w-fill mb-2 justify-center'>
					<AccentBorder name='player-icon' className='flex w-150 h-150' borderRadius='99999px' borderWidth='4px'></AccentBorder>
					<AccentBorder name='player-level' className='absolute h-45 w-45 left-1 bottom-1' borderRadius='99999px' borderWidth='4px'>
						<p className='flex text-center place-items-center justify-center h-full font-bold'></p>
					</AccentBorder>
				</div>
				{/* User and rank */}
				<span className='flex w-full place-content-center' id='summoner-name'></span>

				{/* Rank icon */}
				<div name='ranked-icon' className='flex h-fill w-fill justify-center'></div>

				{/* Win rate */}
				<div className='flex flex-col mb-1 text-2xl justify-center text-center text-gray-300'>
					<p> </p>
					<p> </p>
				</div>
			</Card>
		</div>
	);
}
