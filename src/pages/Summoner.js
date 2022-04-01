import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import Champions from '../components/Champions';
import Match from '../components/Match';
import SummonerCard from '../components/SummonerCard';
import Footer from '../components/Footer';
import React from "react";

export default function Summoner() {

  { /* Testing purposes - Will eventually connect with API in a similar way */ }
  const summoner = {
    name: "username",
    level: "1",
    icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fv2qx9a5ekzt11.jpg&f=1&nofb=1",
    rank: "Challenger",
    division: "III",
    lp: "50",
    winrate: "100",
    wins: "5",
    losses: "0",
  }

  { /* Testing purposes - Will access API to get information and icons based on names */ }
  { /* TODO - Placeholders */ }
  const matches = [
    {
      champion: "https://www.mobafire.com/images/avatars/neeko-classic.png",
      level: "18",
      dSpell: "https://icon-library.com/images/ignite-icon/ignite-icon-6.jpg",
      fSpell: "https://icon-library.com/images/lol-flash-icon/lol-flash-icon-4.jpg",
      primaryRune: "https://cdn.vox-cdn.com/thumbor/yBUhM1HKpSyCV7YEBFq2fcNa908=/0x0:108x108/1200x0/filters:focal(0x0:108x108)/cdn.vox-cdn.com/uploads/chorus_asset/file/9324181/8112.png",
      secondaryRune: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2F2%2F26%2FPrecision_icon.png%2Frevision%2Flatest%2Fscale-to-width-down%2F52%3Fcb%3D20170926031126&f=1&nofb=1",
      kills: "20",
      deaths: "1",
      assists: "15",
      kda: "35",
      items: 
      [
        {
          item1: "https://cdn.vox-cdn.com/thumbor/wlhiGU1J9J8JajaVft2blpEp4oc=/0x0:86x86/1200x0/filters:focal(0x0:86x86)/cdn.vox-cdn.com/uploads/chorus_asset/file/8371721/chrome_2017_04_19_14_19_22.png",
          item2: "exampleName",
          'item-3': "",
          'item-4': "",
          'item-5': "",
          'item-6': "",
        },
      ],
      gamemode: "",
      duration: "",
      timeAgo: "",
      cs: "",
      gold: "",
      damage: "",
      kp: "",
    },
    {
      champion: "https://www.mobafire.com/images/avatars/neeko-classic.png",
      level: "13",
      dSpell: "https://icon-library.com/images/ignite-icon/ignite-icon-6.jpg",
      fSpell: "https://icon-library.com/images/lol-flash-icon/lol-flash-icon-4.jpg",
      primaryRune: "https://cdn.vox-cdn.com/thumbor/yBUhM1HKpSyCV7YEBFq2fcNa908=/0x0:108x108/1200x0/filters:focal(0x0:108x108)/cdn.vox-cdn.com/uploads/chorus_asset/file/9324181/8112.png",
      secondaryRune: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2F2%2F26%2FPrecision_icon.png%2Frevision%2Flatest%2Fscale-to-width-down%2F52%3Fcb%3D20170926031126&f=1&nofb=1",
      kills: "3",
      deaths: "1",
      assists: "1",
      kda: "3",
      items: 
      [
        {
          item1: "https://cdn.vox-cdn.com/thumbor/wlhiGU1J9J8JajaVft2blpEp4oc=/0x0:86x86/1200x0/filters:focal(0x0:86x86)/cdn.vox-cdn.com/uploads/chorus_asset/file/8371721/chrome_2017_04_19_14_19_22.png",
          item2: "exampleName",
          'item-3': "",
          'item-4': "",
          'item-5': "",
          'item-6': "",
        },
      ],
      gamemode: "",
      duration: "",
      timeAgo: "",
      cs: "",
      gold: "",
      damage: "",
      kp: "",
    },
    {
      champion: "https://www.mobafire.com/images/avatars/neeko-classic.png",
      level: "11",
      dSpell: "https://icon-library.com/images/ignite-icon/ignite-icon-6.jpg",
      fSpell: "https://icon-library.com/images/lol-flash-icon/lol-flash-icon-4.jpg",
      primaryRune: "https://cdn.vox-cdn.com/thumbor/yBUhM1HKpSyCV7YEBFq2fcNa908=/0x0:108x108/1200x0/filters:focal(0x0:108x108)/cdn.vox-cdn.com/uploads/chorus_asset/file/9324181/8112.png",
      secondaryRune: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2F2%2F26%2FPrecision_icon.png%2Frevision%2Flatest%2Fscale-to-width-down%2F52%3Fcb%3D20170926031126&f=1&nofb=1",
      kills: "5",
      deaths: "20",
      assists: "1",
      kda: "2",
      items: 
      [
        {
          item1: "https://cdn.vox-cdn.com/thumbor/wlhiGU1J9J8JajaVft2blpEp4oc=/0x0:86x86/1200x0/filters:focal(0x0:86x86)/cdn.vox-cdn.com/uploads/chorus_asset/file/8371721/chrome_2017_04_19_14_19_22.png",
          item2: "exampleName",
          'item-3': "",
          'item-4': "",
          'item-5': "",
          'item-6': "",
        },
      ],
      gamemode: "",
      duration: "",
      timeAgo: "",
      cs: "",
      gold: "",
      damage: "",
      kp: "",
    },
  ]

  return (
    <div className="">
      <SideBar />
        <div className="flex fixed w-screen justify-center mt-6 z-10">
            <SearchBar />
        </div>
        <div className="flex flex-row justify-center gap-6 pt-32">
            <SummonerCard {...summoner}/>
            <div className="flex flex-col gap-6">{matches.map(match => <Match {...match}/>)}</div>
        </div>
    </div>
  );
}
