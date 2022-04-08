import LoadingMatch from "../match/LoadingMatch";
import LoadingCard from "../summoner/LoadingCard";
import NavBarWSearch from "../../components/common/NavBarWSearch"
import Color from "color-thief-react";
import { BackgroundSummoner } from "../../components/common/BackgroundLayer";

export default function About() {

  return (
    <Color format="hex" crossOrigin="anonymous">
    {({ data, loading, error }) => (
      <BackgroundSummoner>
        <div className="w-screen min-w-1072">
          <NavBarWSearch />
          <div className="flex flex-row justify-center gap-6 pt-32" ><LoadingCard/>
            <div className="flex flex-col gap-6"><LoadingMatch/></div>
          </div>
        </div>
      </BackgroundSummoner>
    )}
    </Color>
  )
}
