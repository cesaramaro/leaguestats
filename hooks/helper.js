import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function useSummoner({ user }) {
    const { data, error } = useSWR(user ? `/api/region/${user}` : null, fetcher)
    
    if (error) return error;
    let toReturn = {
      summoner: data.summoner,
      ranked: data.ranked
    }
    return {
      summoner: toReturn,
      isLoading: !error && !data,
      isError: error
    }
  }

  export function useMatches({ user }) {
    const { data, error } = useSWR(user ? `/api/region/${user}?matches=10` : null, fetcher)
    
    return {
      matches: data.matches,
      isLoading: !error && !data,
      isError: error
    }
  }

  export function useMatch({ user, matchID }) {
    const { data, error } = useSWR(user ? `/api/region/${user}?match=${matchID}` : null, fetcher)
    
    return {
      match: data,
      isLoading: !error && !data,
      isError: error
    }
  }

  export async function getIconJSON(iconID) {
    const getIconPath = `https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/items.json` 
    let res = await fetch(getIconPath);
    let data = await res.json()

    return data;
  }

  export async function getSummonerName(summonerSpellID) {
    const getSummonerPath = `http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/summoner.json`

    let res = await fetch(getSummonerPath);
    let data = await res.json()

    (data.data).forEach(item => {
      
    })

    return data;
  }