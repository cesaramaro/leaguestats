import test from '../images/vex-bg.jpg'

{/* Temporary images for testing*/}
const CHAMP_ICON = "https://www.mobafire.com/images/avatars/neeko-classic.png";
const D_SPELL = "https://icon-library.com/images/ignite-icon/ignite-icon-6.jpg";
const F_SPELL = "https://icon-library.com/images/lol-flash-icon/lol-flash-icon-4.jpg";
const RUNE_PRIMARY = "https://cdn.vox-cdn.com/thumbor/yBUhM1HKpSyCV7YEBFq2fcNa908=/0x0:108x108/1200x0/filters:focal(0x0:108x108)/cdn.vox-cdn.com/uploads/chorus_asset/file/9324181/8112.png";
const RUNE_SECONDARY = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2F2%2F26%2FPrecision_icon.png%2Frevision%2Flatest%2Fscale-to-width-down%2F52%3Fcb%3D20170926031126&f=1&nofb=1";
const ITEM_EXAMPLE = "https://cdn.vox-cdn.com/thumbor/wlhiGU1J9J8JajaVft2blpEp4oc=/0x0:86x86/1200x0/filters:focal(0x0:86x86)/cdn.vox-cdn.com/uploads/chorus_asset/file/8371721/chrome_2017_04_19_14_19_22.png";

export default function Match() {
    return(
        <div className="w-fit">
            {/* TO-DO: Create icon components, fallback borders for when no image is found or slot is empty
                        Change colors based on Victory or Defeat, have all items/components change depending on info received
                        Summoner Spells components, Items purchased component
                        Set size (higher width)
                        Clean-up
            */}
            <div className="flex rounded-lg p-10 bg-cover bg-gradient-to-r from-[#37008C] via-[#0F0059] to-[#00142A] shadow-lg">
                <div name="left-side-icons" className="flex object-middle h-auto w-auto justify-center">
                    <div name="player-icon" className="relative rounded-lg bg-purple-300 border-4 border-purple-400 flex items-center justify-center h-32 w-32">
                        <img className="object-cover" src={CHAMP_ICON}></img>
                        <span name="player-level" className="absolute bottom-0 -mb-5 border-4 border-purple-400 rounded-full bg-purple-200 h-10 w-10">
                            <p className="text-center pt-1 font-bold">18</p>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-1 pl-5 w-max">
                    <span className="flex h-12 w-12 rounded-lg overflow-hidden">
                        <img className="object-cover" src={D_SPELL}></img>
                    </span>
                    <span className="flex h-12 w-12 rounded-lg overflow-hidden">
                        <img className="object-cover" src={F_SPELL}></img>
                    </span>
                </div>

                <div className="flex flex-col justify-center pl-1 w-max">
                    <span className="flex h-7 w-7 rounded-lg overflow-hidden">
                        <img className="object-cover" src={RUNE_PRIMARY}></img>
                    </span>
                    <span className="flex h-7 w-7 rounded-lg overflow-hidden">
                        <img className="object-cover" src={RUNE_SECONDARY}></img>
                    </span>
                </div>

                <div className="flex flex-col justify-center pl-5 w-max text-gray-300">
                    <p className="flex mb-1 text-2xl font-bold">xx / xx / xx</p>
                    <p className="flex mb-1 text-1xl font-bold">KDA</p>
                </div>
                <div className="flex flex-col justify-center pl-5 w-max">
                    <div className="flex justify-between gap-1">
                        <div className="flex flex-col items-center"> <span className="h-12 w-12 rounded-lg overflow-hidden flex"><img className="object-cover" src={ITEM_EXAMPLE}></img></span></div>
                        <div className="flex flex-col items-center"> <span className="h-12 w-12 rounded-lg overflow-hidden flex"><img className="object-cover" src={ITEM_EXAMPLE}></img></span></div>
                        <div className="flex flex-col items-center"> <span className="h-12 w-12 rounded-lg overflow-hidden flex"><img className="object-cover" src={ITEM_EXAMPLE}></img></span></div>
                    </div>
                    <div className="flex justify-between gap-1 pt-1 w-max">
                        <div className="flex flex-col items-center"> <span className="h-12 w-12 rounded-lg overflow-hidden flex"><img className="object-cover" src={ITEM_EXAMPLE}></img></span></div>
                        <div className="flex flex-col items-center"> <span className="h-12 w-12 rounded-lg overflow-hidden flex"><img className="object-cover" src={ITEM_EXAMPLE}></img></span></div>
                        <div className="flex flex-col items-center"> <span className="h-12 w-12 rounded-lg overflow-hidden flex"><img className="object-cover" src={ITEM_EXAMPLE}></img></span></div>
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