import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function getSummoner({ region, user }) {
	const { data, error } = useSWR(user ? `/api/${region}/${user}` : null, fetcher);

	if (error || data === null) return error;
	return {
		summoner: data,
		isLoading: !error && !data,
		isError: error,
	};
}

export function getMatches({ user }) {
	if (user === null || typeof user === 'undefined') return null;
	const { data, error } = useSWR(user ? `/api/region/${user}?matches=10` : null, fetcher);

	return {
		matches: data,
		isLoading: !error && !data,
		isError: error,
	};
}

export function getMatchDetails({ user, matchID }) {
	const { data, error } = useSWR(user ? `/api/region/${user}?match=${matchID}` : null, fetcher);

	return {
		match: data,
		isLoading: !error && !data,
		isError: error,
	};
}

export async function getIconJSON(iconID) {
	const getIconPath = `https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/items.json`;
	let res = await fetch(getIconPath);
	let data = await res.json();

	return data;
}

export function findSummonerParticipantID(participants, name) {
	for (let i = 0; i < participants.length; i++) {
		if (participants[i].summonerName === name) return i;
	}
}
