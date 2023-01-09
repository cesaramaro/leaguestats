import Card from '../common/card';

export default function Error({ color }) {
	return (
		<Card className='flex h-150 w-700 center gap-4 text-gray-200 font-semibold shadow-lg hover:shadow-xl' color={color}>
			<p className='center font-bold text-white text-xl'>Something went wrong... Try refreshing the page</p>
		</Card>
	);
}
