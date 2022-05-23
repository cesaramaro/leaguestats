import LoadingCard from "../summoner/LoadingCard";
import LoadingMatch from "../match/LoadingMatch";
import NavBarWSearch from "../../components/common/NavBarWSearch"
import { BackgroundSummoner } from "../../components/common/BackgroundLayer";

export default function Loading({ error }) {

  if (error) {
    return (
      <BackgroundSummoner imageSrc={'/images/vex.jpg'}>
        <div className="flex flex-col w-1072 h-screen m-auto">
          <NavBarWSearch />

          <p className=" flex flex-col h-full place-content-center px-6 font-bold text-4xl text-gray-300 text-justify">
            We couldn&apos;t find that summoner... :&#40;<br />
            Try another region or verify the username is spelled correctly
            <ul className="text-2xl">
              <br />
              <p className="font-bold text-3xl text-black">Regions</p>
              <li>NA (North America)</li>
              <li>LAN (Latin America North)</li>
              <li>Region 3</li>
              <li>Region 4</li>
            </ul>
          </p>


        </div>
      </BackgroundSummoner>
    )
  }

  return (
    <BackgroundSummoner>
      <div className="w-1072 m-auto">
        <NavBarWSearch />
        <div className="flex flex-row justify-center gap-6" >
          <LoadingCard />
          <div className="flex flex-col gap-6">
            <LoadingMatch />
            <LoadingMatch />
          </div>
        </div>
      </div>
    </BackgroundSummoner>
  )
}
