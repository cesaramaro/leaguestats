import test from '../images/vex-bg.jpg'

export default function Match(props) {

    const championIcon = props.champion
    const level = props.level
    const dSpell = props.dSpell
    const fSpell = props.fSpell
    const primaryRune = props.primaryRune
    const secondaryRune = props.secondaryRune
    const kills = props.kills
    const deaths = props.deaths
    const assists = props.assists
    const kda = props.kda
    const items = props.items

    return (
        <div className="">
            {/* TO-DO: Create icon components, fallback borders for when no image is found or slot is empty
                        Change colors based on Victory or Defeat, have all items/components change depending on info received
                        Summoner Spells components, Items purchased component
                        Set size (higher width)
                        Clean-up
            */}
            <div className="flex rounded-bar-black h-150 w-650">
                <div name="left-side-icons" className="flex object-middle h-auto w-auto justify-center">
                    <div name="player-icon" className="relative rounded-lg bg-purple-300 border-4 border-purple-400 flex items-center justify-center w-100">
                        <img className="object-cover" src={championIcon} alt=""></img>
                        <span name="player-level" className="absolute bottom-0 -mb-5 border-4 border-purple-400 rounded-full bg-purple-200 h-25 w-25">
                            <p className="text-center pt-1 font-bold">{level}</p>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-1 pl-5 w-max">
                    <span className="flex h-30 rounded-lg overflow-hidden">
                        <img className="object-cover" src={dSpell} alt=""></img>
                    </span>
                    <span className="flex h-30 rounded-lg overflow-hidden">
                        <img className="object-cover" src={fSpell} alt=""></img>
                    </span>
                </div>

                <div className="flex flex-col justify-center pl-1 w-max">
                    <span className="flex h-20 rounded-lg overflow-hidden">
                        <img className="object-cover" src={primaryRune} alt=""></img>
                    </span>
                    <span className="flex h-20 rounded-lg overflow-hidden">
                        <img className="object-cover" src={secondaryRune} alt=""></img>
                    </span>
                </div>

                <div className="flex flex-col justify-center pl-5 w-max text-gray-300">
                    <p className="flex mb-1 text-2xl font-bold">{kills} / {deaths} / {assists}</p>
                    <p className="flex mb-1 text-1xl font-bold">{kda} KDA</p>
                </div>
                { /* Item set should be a component and each item should be a separate component within the parent */}
                <div className="flex flex-col justify-center pl-5 w-max">
                    <div className="flex justify-between gap-1">
                        <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items[0].item1} alt=""></img></span></div>
                        <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items[0].item2} alt=""></img></span></div>
                        <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items[0].item3} alt=""></img></span></div>
                    </div>
                    <div className="flex justify-between gap-1 pt-1 w-max">
                        <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items[0].item4} alt=""></img></span></div>
                        <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items[0].item5} alt=""></img></span></div>
                        <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items[0].item6} alt=""></img></span></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center pl-5 w-max text-gray-300">
                    <p className="flex mb-1 font-bold">Game mode</p>
                    <p className="flex mb-1 font-bold">Duration</p>
                    <p className="flex mb-1 font-bold top-0 right-0">Time ago</p>
                </div>
            </div>
        </div>
    )
}