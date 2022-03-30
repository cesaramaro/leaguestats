import ranked_icon from '../images/platinum.png';

export default function SummonerCard() {

    {/* Testing purposes */}
    const ICON = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fv2qx9a5ekzt11.jpg&f=1&nofb=1";
    const LVL = "313";
    const USERNAME = "Kwahson";
    const RANK = "Platinum";
    const RANK_ICON = ranked_icon;
    const RANK_BORDER = "";
    const DIVISION = "III";
    const LP = "50";
    const WINRATE = "50";
    const WINS = "100";
    const LOSSES = "100";
    
    return(
        <div className="flex rounded-lg ">
            {/* Profile icon, level icon, username, rank icon, rank+division, LP, winrate */}
            <div className="flex flex-col h-max rounded-lg p-10 bg-cover bg-gradient-to-r from-[#37008C] via-[#0F0059] to-[#00142A] shadow-lg">
                <div name="icon-lvl" className="flex h-fill w-fill justify-center">
                    <div name="player-icon" className="relative rounded-full bg-purple-300 border-4 border-purple-400 flex items-center justify-center h-32 w-32">
                        <img className="object-cover rounded-full z-1" src={ICON}></img>
                        <span name="player-level" className="absolute left-0 bottom-0 border-2 border-purple-400 rounded-full bg-purple-200 h-10 w-10">
                            <p className="text-center pt-1.5 font-bold text-purple-800">{LVL}</p>
                        </span>
                    </div>
                </div>
                {/* User and rank */}
                <div className="flex flex-col">
                    <h1 className="flex mb-1 text-5xl font-bold text-gray-300 justify-center">{USERNAME}</h1>
                    <p className="flex mb-1 text-2xl font-bold text-purple-400 justify-center">{RANK} {DIVISION} - {LP} LP</p>
                </div>
                {/* Rank icon */ }
                <div name="ranked-icon" className="flex h-fill w-fill justify-center">
                    <img className="object-cover w-44" src={RANK_ICON}></img>
                </div>

                { /* Win rate */ }
                <p className="flex mb-1 text-2xl font-bold justify-center text-gray-300">{WINRATE}% Winrate</p>
                <p className="flex mb-1 text-2xl font-bold justify-center text-gray-300">{WINS}W / {LOSSES}L</p>
            </div>
        </div>
    )
}