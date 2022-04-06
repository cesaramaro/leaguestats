const apiKey = 'EXAMPLE_KEY'
var allSummonerInfo = {}

export default async function handler(req, res) {
  const { summoner, matches, match } = req.query
  const summonerName = {summoner}.summoner.toString();
  if (!match && !matches) {
    try {
      const response = await getSummonerData(summonerName);
      res.status(200).json(response);
    }
  
    catch (error) {
      res.json(error);
      res.status(405).end();
    }
  }
  
  if (match && !matches) {
    try {
      const response = await getMatchDetails(match);
      res.status(200).json(response);
    }
  
    catch (error) {
      res.json(error);
      res.status(405).end();
    }
  }

  if (matches && !match) {
    try {
      const response = await getMatches(summonerName);
      res.status(200).json(response);
    }
  
    catch (error) {
      res.json(error);
      res.status(405).end();
    }
  }
}

async function getSummonerData(summoner) {
  const getSummoner = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${apiKey}` 
  let response = await fetch(getSummoner);
  let data = await response.json()
  let matchesList = await getMatches(summoner)

  let toReturn = {
    summoner: data,
    matches: matchesList
  }

  return toReturn;
}

export function getIconURL(iconID) {
  const getIconPath = `https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/items.json` 
  let response = fetch(getIconPath);

  for (var item of response) {
    if (item.id === iconID) {
      let iconPath = item.iconPath;
      var item = itemPath.split("/");
      const itemsURL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/" 
      return (itemsURL + item[item.length])
    } 
  }
}

function asyncGetMatchDetails(matches) {
  let promises = [];

  for (let i = 0; i < 10; i++) {
    promises.push(getMatchDetails(matches[i]));
  }
  return Promise.all(promises);
}

async function getPUUID(summoner) {
  const getPUUID = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${apiKey}` 
  let response = await fetch(getPUUID);
  let data = await response.json()

  return (data.puuid).toString();
}

async function getMatches(summoner) {
  let summonerPUUID = await getPUUID(summoner)
  const getMatches = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerPUUID}/ids?start=0&count=10&api_key=${apiKey}` 
  let response = await fetch(getMatches);
  let data = await response.json()

  return data;
}

async function getMatchDetails(matchID) {
  const getMatch = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${apiKey}` 
  let response = await fetch(getMatch);
  let data = await response.json()

  return data;
}