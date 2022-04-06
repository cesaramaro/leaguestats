import SideBar from "../../components/SideBar"
import SearchBar from "../../components/SearchBar"
import Match from '../../components/Match'
import SummonerCard from '../../components/SummonerCard'
import useSWR from 'swr'
import { useRouter } from 'next/router' 
import NavBarWSearch from "../../components/NavBarWSearch"
import Color from "color-thief-react";
import { BackgroundSummoner } from "../../components/BackgroundLayer";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Summoner() {

  const router = useRouter()
  const { summoner } = router.query
  const { data, error } = useSWR(summoner ? `/api/region/${summoner}` : null, fetcher)
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data)
  const userName = (data.summoner.name).toString();
  const matches = data.matches
  const imageSrc = '/images/vex.jpg'
  
  return (

    // * asks for background image and calculates dominant color in hex format
    // * page html becomes children of Color for efficiency and only calculating color once
    // * color is passed on to components with data variable and giving them the prop 'color'

    <Color src={imageSrc} format="hex" crossOrigin="anonymous">
      {({ data, loading, error }) => (
        <BackgroundSummoner color={data} imageSrc={imageSrc}>
          <div className="min-w-1072">
            <NavBarWSearch color={data} />
            <div className="flex flex-row justify-center gap-6 pt-32" >
              <SummonerCard user={userName} color={data} />
              <div className="flex flex-col gap-6">{matches.map(match => <Match user={userName} matchID={match} color={data}/>)}</div>
            </div >
          </div >
        </BackgroundSummoner>
      )}
    </Color>
  );
}

{/* for navbar with search

<div className="min-w-1072">
          <NavBarWSearch />
*/}

{// for sidebar navbar

  /* <BackgroundSummoner color={data} imageSrc='url(/images/ahri.jpg)'>

        <div>
          <SideBar color={data} />
          <header className="fixed flex w-screen p-6 place-content-center">
            <span className='w-700'> <SearchBar color={data} /> </span> */
          }
