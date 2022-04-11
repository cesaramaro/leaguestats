import LoadingCard from "../summoner/LoadingCard";
import LoadingMatch from "../match/LoadingMatch";
import NavBarWSearch from "../../components/common/NavBarWSearch"
import { BackgroundSummoner } from "../../components/common/BackgroundLayer";

export default function Loading({error}) {

  if (error) {
    return(
      <BackgroundSummoner imageSrc={'/images/vex.jpg'}>
      <div className="w-screen min-w-1072">
        <NavBarWSearch/>
        <div className="flex flex-col pt-44 m-auto">
          <div className="m-auto">
          <p className="font-bold text-4xl text-gray-300 text-justify">We couldn&apos;t find that summoner... :(<br/>Try another region or verify the username is spelled correctly</p>
            <ul className="text-2xl text-gray-300">
              <p className="font-bold text-3xl pt-10 text-black">Regions</p>
              <li>NA (North America)</li>
              <li>LAN (Latin America North)</li>
              <li>Region 3</li>
              <li>Region 4</li>
            </ul>
          </div>
        </div>
      </div>
    </BackgroundSummoner>
    )
  }

  return (
      <BackgroundSummoner>
        <div className="w-screen min-w-1072">
          <NavBarWSearch />
          <div className="flex flex-row justify-center gap-6 pt-32" ><LoadingCard/>
            <div className="flex flex-col gap-6"><LoadingMatch /><LoadingMatch /></div>
          </div>
        </div>
      </BackgroundSummoner>
  )
}
