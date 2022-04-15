import SummonerCard from '../../components/summoner/SummonerCard'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import NavBarWSearch from "../../components/common/NavBarWSearch"
import Color from "color-thief-react";
import { BackgroundSummoner } from "../../components/common/BackgroundLayer";
import Loading from '../../components/common/Loading'
import { shiftColor } from '../../lib/shiftColor'
import Matches from '../../components/match/Matches'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Summoner() {

  const router = useRouter()
  const { summoner } = router.query
  const region = 'region'
  const { data, error } = useSWR(summoner ? `/api/region/${summoner}` : null, fetcher)

  if (error || data === null) return <div><Loading error={true} /></div>
  if (!data) return <div><Loading /></div>

  const userName = (data.summoner.name).toString();
  const highestMasteryID = data.mastery[0].championId
  const imageSrc = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${highestMasteryID}/${highestMasteryID}000.jpg`

  return (

    // * asks for background image and calculates dominant color in hex format
    // * page html becomes children of Color for efficiency and only calculating color once
    // * color is passed on to components with data variable and giving them the prop 'color'

    <Color src={imageSrc} format="hex" crossOrigin="anonymous">
      {({ data, loading, error }) => (
        <BackgroundSummoner color={shiftColor(data)} imageSrc={imageSrc}>
          <div className="w-screen min-w-1072">
            <NavBarWSearch color={shiftColor(data)} />
            <div className="flex flex-row justify-center gap-6 pt-32" ><SummonerCard region={region} user={userName} color={shiftColor(data)} />
              <Matches user={userName} color={shiftColor(data)} />
            </div>
          </div>
        </BackgroundSummoner>
      )}
    </Color>
  );
}