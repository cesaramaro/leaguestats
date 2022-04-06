import SideBar from "../../components/SideBar"
import SearchBar from "../../components/SearchBar"
import Match from '../../components/Match'
import SummonerCard from '../../components/SummonerCard'
import useSWR from 'swr'
import { useRouter } from 'next/router' 

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Summoner() {

  const router = useRouter()
  const { summoner } = router.query
  const { data, error } = useSWR(summoner ? `/api/region/${summoner}` : null, fetcher)
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const userName = (data.summoner.name).toString();
  const matches = data.matches
  
  return (
    <div>
      <SideBar/>
      <header className="fixed flex w-screen p-6 place-content-center">
        <span className='w-700'> <SearchBar /> </span>
      </header>

      < div className="flex flex-row justify-center gap-6 pt-32" >
        <SummonerCard user={userName} />
          <div className="flex flex-col gap-6">{matches.map(match => <Match user={userName} matchID={match} />)}</div>
      </div>
    </div>
  );
}


{/* for navbar with search

<div className="min-w-1072">
          <NavBarWSearch />
*/}