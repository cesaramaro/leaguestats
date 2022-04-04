import SideBar from "../../components/SideBar";
import SearchBar from "../../components/SearchBar";
import Champions from '../../components/Champions';
import Match from '../../components/Match';
import SummonerCard from '../../components/SummonerCard';
import Footer from '../../components/Footer';
import React from "react";
import NavBarWSearch from "../../components/NavBarWSearch"
import { fitGameId, getGameId } from "../../lib/fitGameId";

export async function getStaticProps() {

  //* ideally here we would just
  // ^ const summonerData = getSummonerData('Summoner') and pass that ahead to the page as a prop

  // * created variables for summoner info which asks backend for information information
  var gameId = getGameId()
  var gameIdFontSize = fitGameId(gameId)

  //* creates summoner info 
  const summonerInfo = {
    gameId: gameId,
    gameIdFontSize: gameIdFontSize
  }

  // * returns summonerInfo with
  return {
    props: {
      summonerInfo
    }
  }

}

export default function Summoner({ summonerInfo }) {

  { /* Testing purposes - Will eventually connect with API in a similar way */ }
  const summoner = {
    name: summonerInfo.gameId,
    level: "999",
    icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fv2qx9a5ekzt11.jpg&f=1&nofb=1",
    rank: "Grandmaster",
    division: "III",
    lp: "50",
    winrate: "100",
    wins: "5",
    losses: "0",
    fontSize: summonerInfo.gameIdFontSize,
  }

  { /* Testing purposes - Will access API to get information and icons based on names */ }
  { /* TODO - Placeholders */ }
  const matches = [
    {
      champion: "https://i.postimg.cc/7Zx9kg8J/soraka.png",
      level: "18",
      dSpell: "https://icon-library.com/images/ignite-icon/ignite-icon-6.jpg",
      fSpell: "https://icon-library.com/images/lol-flash-icon/lol-flash-icon-4.jpg",
      primaryRune: "https://cdn.vox-cdn.com/thumbor/yBUhM1HKpSyCV7YEBFq2fcNa908=/0x0:108x108/1200x0/filters:focal(0x0:108x108)/cdn.vox-cdn.com/uploads/chorus_asset/file/9324181/8112.png",
      secondaryRune: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2F2%2F26%2FPrecision_icon.png%2Frevision%2Flatest%2Fscale-to-width-down%2F52%3Fcb%3D20170926031126&f=1&nofb=1",
      kills: "20",
      deaths: "50",
      assists: "100",
      kda: "35",
      items:
        [
          {
            item1: "https://i.postimg.cc/ZnCH1m17/moonstone.png",
            item2: "https://i.postimg.cc/ZqHLn0ms/redemption.png",
            item3: "https://i.postimg.cc/25rwChsB/mercurys.png",
            item4: "",
            item5: "",
            item6: "",
          },
        ],
      gamemode: "One For All",
      duration: "33m 50s",
      timeAgo: "30 mins ago",
      cs: "150",
      gold: "10.1k",
      damage: "10k",
      kp: "20",
    },
    {
      champion: "https://www.mobafire.com/images/avatars/neeko-classic.png",
      level: "3",
      dSpell: "https://icon-library.com/images/ignite-icon/ignite-icon-6.jpg",
      fSpell: "https://icon-library.com/images/lol-flash-icon/lol-flash-icon-4.jpg",
      primaryRune: "https://cdn.vox-cdn.com/thumbor/yBUhM1HKpSyCV7YEBFq2fcNa908=/0x0:108x108/1200x0/filters:focal(0x0:108x108)/cdn.vox-cdn.com/uploads/chorus_asset/file/9324181/8112.png",
      secondaryRune: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2F2%2F26%2FPrecision_icon.png%2Frevision%2Flatest%2Fscale-to-width-down%2F52%3Fcb%3D20170926031126&f=1&nofb=1",
      kills: "0",
      deaths: "0",
      assists: "0",
      kda: "0",
      items:
        [
          {
            item1: "https://i.postimg.cc/25rwChsB/mercurys.png",
            item2: "",
            item3: "",
            item4: "",
            item5: "",
            item6: "",
          },
        ],
      gamemode: "Solo/Duo",
      duration: "5m 0s",
      timeAgo: "1 day ago",
      cs: "20",
      gold: "10k",
      damage: "1k",
      kp: "10",
    },
    {
      champion: "https://i.postimg.cc/fT7Cp8Fh/kaisa.png",
      level: "18",
      dSpell: "https://icon-library.com/images/ignite-icon/ignite-icon-6.jpg",
      fSpell: "https://icon-library.com/images/lol-flash-icon/lol-flash-icon-4.jpg",
      primaryRune: "https://cdn.vox-cdn.com/thumbor/yBUhM1HKpSyCV7YEBFq2fcNa908=/0x0:108x108/1200x0/filters:focal(0x0:108x108)/cdn.vox-cdn.com/uploads/chorus_asset/file/9324181/8112.png",
      secondaryRune: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2F2%2F26%2FPrecision_icon.png%2Frevision%2Flatest%2Fscale-to-width-down%2F52%3Fcb%3D20170926031126&f=1&nofb=1",
      kills: "20",
      deaths: "5",
      assists: "13",
      kda: "30.3",
      items:
        [
          {
            item1: "https://i.postimg.cc/JzbxwP2L/immortal.png",
            item2: "https://i.postimg.cc/Fkb3gT1q/bloodthirster.png",
            item3: "https://i.postimg.cc/YCcRyJ8R/lorddominiks.png",
            item4: "https://i.postimg.cc/J72Pjyk9/phantomdancer.png",
            item5: "",
            item6: "",
          },
        ],
      gamemode: "Draft Pick",
      duration: "50m 13s",
      timeAgo: "3 days ago",
      cs: "300",
      gold: "20k",
      damage: "50.8k",
      kp: "90",
    },
  ]

  return (
    <div>
      <SideBar />
      <header className="fixed flex w-screen p-6 place-content-center">
        <span className='w-700'> <SearchBar /> </span>
      </header>

      < div className="flex flex-row justify-center gap-6 pt-32" >
        <SummonerCard {...summoner} />
        <div className="flex flex-col gap-6">{matches.map(match => <Match {...match} />)}</div>
      </div >
    </div >
  );
}


{/* for navbar with search

<div className="min-w-1072">
          <NavBarWSearch />
*/}